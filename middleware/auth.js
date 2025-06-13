import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'
import {useSubscriptionsStore} from "~/store/billing/subscriptions.js";

export default defineNuxtRouteMiddleware(async (to) => {
    if (!to.meta.authType) {
        throw new Error(`authType meta is required when using auth middleware, options ('only-guest', 'only-auth', 'can-be-auth')`)
    }

    // check for im
    if (to.query.im) {
        const impersonateToken = useCookie('impersonate_token')
        impersonateToken.value = to.query.im
        return navigateTo('/')
    }

    const authStore = useAuthStore()
    const subscriptionsStore = useSubscriptionsStore()

    const {user} = storeToRefs(authStore)
    const {subscriptionRetrieved} = storeToRefs(subscriptionsStore)

    const {retrieveUser} = authStore
    const {fetchSubscription} = subscriptionsStore

    const token = useCookie('token')
    const impersonateToken = useCookie('impersonate_token')

    let authenticated = false

    if (!token.value && !impersonateToken.value) {
        user.value = null
    } else {
        if (!user.value) {
            const retrieveUserStatus = await retrieveUser()
            if (retrieveUserStatus) {
                authenticated = true
            }
        } else {
            authenticated = true
        }
    }

    if (authenticated && !subscriptionRetrieved.value) {
        await fetchSubscription()
    }

    if (to.meta.authType === 'only-guest') {
        if (authenticated) {
            return navigateTo('/')
        }
    } else if (to.meta.authType === 'only-auth') {
        if (!authenticated) {
            return navigateTo('/')
        }

        if(to.name !== 'auth-register-verify' && user.value.email_verified_at === null) {
            return navigateTo('/auth/register/verify')
        }
        // if (authenticated) {
        //
        // }
    }
})

