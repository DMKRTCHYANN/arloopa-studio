import { defineStore } from 'pinia'

export const usePlansStore = defineStore('plansStore', () => {
    const plans = ref([])
    const stripePrices = ref([])
    const billableCurrency = ref('usd')
    const localRate = ref(null)
    const localCurrency = ref(null)
    const loading = ref(true)

    async function fetchPlans() {
        if (loading.value === false) {
            return
        }

        loading.value = true

        const {data} = await useAuthFetch('/api/plans')

        stripePrices.value = data.value.data.stripe_prices.filter(x => x.currency === 'usd')
        plans.value = data.value.data.plans
        localRate.value = data.value.data.local_rate
        localCurrency.value = data.value.data.currency_code

        loading.value = false
    }

    function reset() {
        plans.value = []
        stripePrices.value = []
        loading.value = true
    }

    return {
        plans,
        stripePrices,
        billableCurrency,
        localRate,
        localCurrency,
        loading,
        fetchPlans,
        reset
    }
})
