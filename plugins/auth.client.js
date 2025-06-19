import VFacebookLogin, {VFBLoginScope as VFacebookLoginScope} from 'vue-facebook-login-component-next'
import vue3GoogleLogin from 'vue3-google-login'
import VueAppleLogin from 'vue-apple-login';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    nuxtApp.vueApp.component('v-facebook-login', VFacebookLogin)
    nuxtApp.vueApp.component('v-facebook-login-scope', VFacebookLoginScope)
    console.log(config.public.GOOGLE_CLIENT_ID)
    nuxtApp.vueApp.use(vue3GoogleLogin, {
        clientId: config.public.GOOGLE_CLIENT_ID
    })
    const time = new Date()
    nuxtApp.vueApp.use(VueAppleLogin, {
        clientId: 'com.arloopa.studio',
        scope: 'name email',
        redirectURI: 'https://studio.arloopa.com/auth/redirect/apple',
        state: time.toString(),
        usePopup: true,
    });
})
