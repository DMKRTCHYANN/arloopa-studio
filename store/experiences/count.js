import { defineStore } from 'pinia'

export const useExperiencesCountStore = defineStore('experiencesCountStore', () => {
    const experiencesCount = ref(null)
    const loading = ref(false)

    async function fetchExperiencesCount(force = false) {
        const config = useRuntimeConfig()

        if (loading.value) {
            return
        }
        loading.value = true

        if (experiencesCount.value !== null && !force) {
            loading.value = false
            return
        }

        let coinsUrl;
        if (import.meta.client) {
            coinsUrl = '/api/experiences/get/count'
        } else {
            coinsUrl = config.public.BASE_URL + 'experiences/get/count'
        }

        const {data, error} = await useAuthFetch(coinsUrl)

        if (error.value) {
            loading.value = false
            return;
        }

        experiencesCount.value = data.value.data.count
        loading.value = false
    }

    function reset () {
        experiencesCount.value = null
        loading.value = false
    }
    return { experiencesCount, fetchExperiencesCount, reset }
})
