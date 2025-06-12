import { defineStore } from 'pinia'

export const useCoinsStore = defineStore('coinsStore', () => {
    const coins = ref(null)
    let intervalId = null

    async function fetchCoins() {
        const {data, error} = await useAuthFetch('/api/billable/coins')

        if (error.value) {
            return;
        }

        coins.value = data.value.data.coins
    }

    function reset () {
        stopAutoFetch()
        coins.value = null
    }

    function startAutoFetch() {
        if (intervalId !== null) return // prevent multiple intervals

        fetchCoins() // fetch immediately
        intervalId = setInterval(fetchCoins, 10000) // every 10 seconds
    }

    function stopAutoFetch() {
        if (intervalId !== null) {
            clearInterval(intervalId)
            intervalId = null
        }
    }

    return { coins, fetchCoins, startAutoFetch, stopAutoFetch, reset }
})
