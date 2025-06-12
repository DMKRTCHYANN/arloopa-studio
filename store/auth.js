import { defineStore } from 'pinia'
import {useCookie} from "#app";
import {PublicClientApplication} from "@azure/msal-browser";
import { heinekenAuthConfig } from "~/config/auth/microsoft.js";

export const useAuthStore = defineStore('authStore', () => {

    const loading = ref(false)
    const user = ref(null)
    const forgotEmail = ref('')

    async function authenticateUser(email, password) {
        if (loading.value) {
            return
        }

        loading.value = true

        const {data, error} = await useFetch('/api/login', {
            method: 'post',
            headers: {Accept: 'application/json'},
            body: {
                email,
                password,
                type: 'email'
            },
            watch: false,
            key: (Math.random() + 1).toString(36).substring(7),
        })

        if (error.value) {
            loading.value = false
            return false
        }

        const token = useCookie('token')
        token.value = data.value.data.access_token
        loading.value = false

        return true
    }

    async function authenticateUserGoogle(googleToken) {
        if (loading.value) {
            return
        }

        loading.value = true

        const {data, error} = await useFetch('/api/login/', {
            method: 'post',
            headers: {Accept: 'application/json'},
            body: {
                type: 'google',
                token: googleToken,
                register_place: 'studio',
            },
            watch: false,
            key: (Math.random() + 1).toString(36).substring(7),
        })

        if (error.value) {
            loading.value = false
            return false
        }

        const token = useCookie('token')
        token.value = data.value.data.access_token
        loading.value = false

        return true
    }

    async function authenticateUserFacebook(facebookToken) {
        if (loading.value) {
            return
        }

        loading.value = true

        const {data, error} = await useFetch('/api/login/', {
            method: 'post',
            headers: {Accept: 'application/json'},
            body: {
                type: 'facebook',
                token: facebookToken,
                register_place: 'studio',
            },
            watch: false,
            key: (Math.random() + 1).toString(36).substring(7),
        })

        if (error.value) {
            loading.value = false
            return false
        }

        const token = useCookie('token')
        token.value = data.value.data.access_token
        loading.value = false

        return true
    }

    async function authenticateUserApple(appleToken) {
        if (loading.value) {
            return
        }

        loading.value = true

        const {data, error} = await useFetch('/api/login/', {
            method: 'post',
            headers: {Accept: 'application/json'},
            body: {
                type: 'apple',
                token: appleToken,
                register_place: 'studio',
            },
            watch: false,
            key: (Math.random() + 1).toString(36).substring(7),
        })

        if (error.value) {
            loading.value = false
            return false
        }

        const token = useCookie('token')
        token.value = data.value.data.access_token
        loading.value = false

        return true
    }

    async function authenticateUserMicrosoft() {
        if (loading.value) {
            return
        }

        loading.value = true


        try {
            const subdomain = useState("subdomain");

            let msalInstance;
            if (subdomain.value === 'heineken') {
                msalInstance = new PublicClientApplication(heinekenAuthConfig(window.location.href))
            } else {
                loading.value = false
                return;
            }

            await msalInstance.initialize()

            const msalResponse = await msalInstance.loginPopup({
                scopes: ["User.Read"],
            })

            console.log(msalResponse)
            if (!msalResponse || !msalResponse.idToken) {
                loading.value = false
                return false
            }

            const { data, error } = await useFetch('/api/login/', {
                method: 'post',
                headers: { Accept: 'application/json' },
                body: {
                    type: 'microsoft-' + subdomain.value,
                    token: msalResponse.idToken,
                    register_place: 'studio',
                },
                watch: false,
                key: (Math.random() + 1).toString(36).substring(7),
            })

            if (error.value) {
                loading.value = false
                return false
            }

            const token = useCookie('token')
            token.value = data.value.data.access_token
            loading.value = false
            return true
        } catch (err) {
            console.error('Microsoft login failed:', err)
            loading.value = false
            return false
        }
    }

    function logout () {
        const token = useCookie('token')
        const impersonateToken = useCookie('impersonate_token')

        if (impersonateToken.value) {
            impersonateToken.value = null
        } else {
            token.value = null
        }

        user.value = null
    }

    async function retrieveUser() { // Nelly
        const config = useRuntimeConfig()

        const token = useCookie('token')
        const impersonateToken = useCookie('impersonate_token')

        if (!token.value && !impersonateToken.value) {
            return false
        }

        loading.value = true
        let profileUrl = '';
        if (import.meta.client) {
            profileUrl = '/api/profile/'
        } else {
            profileUrl = config.public.BASE_URL + 'profile/'
        }
        const {data, error} = await useAuthFetch(profileUrl)

        if (error.value) {
            if (impersonateToken.value) {
                impersonateToken.value = null
            } else {
                token.value = null
            }
        } else {
            user.value = data.value.data
        }

        loading.value = false

        return true
    }

    return { loading, user, forgotEmail, authenticateUser, authenticateUserGoogle, authenticateUserFacebook, authenticateUserApple, authenticateUserMicrosoft, logout, retrieveUser }
})
