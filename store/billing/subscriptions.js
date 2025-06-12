import { defineStore } from 'pinia'

export const useSubscriptionsStore = defineStore('subscriptionsStore', () => {
    const subscriptionRetrieved = ref(false)
    const subscription = ref(null)
    const showSubscribePopup = ref(false)

    async function fetchSubscription() {
        const config = useRuntimeConfig()

        let getSubscriptionUrl = '';
        if (import.meta.client) {
            getSubscriptionUrl = '/api/billable/studio-subscription'
        } else {
            getSubscriptionUrl = config.public.BASE_URL+'billable/studio-subscription'
        }

        const {data, error} = await useAuthFetch(getSubscriptionUrl)

        if (error.value) {
            subscriptionRetrieved.value = true
            return;
        }

        subscriptionRetrieved.value = true
        subscription.value = data.value.data.subscription
    }

    function reset () {
        subscriptionRetrieved.value = false;
        subscription.value = null
    }

    return {
        subscriptionRetrieved,
        subscription,
        showSubscribePopup,
        fetchSubscription,
        reset,
    }
})

