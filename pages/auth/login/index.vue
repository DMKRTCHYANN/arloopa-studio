<template>
  <div>
    <div class="text-[48px] font-bold mb-[32px]">
      Sign in
    </div>
    <div class="text-[16px] mb-[24px]">
      One place to create & publish Augmented Reality content
    </div>
    <form v-if="!showSocialLogin" class="flex flex-col" @submit.prevent="login">
      <p v-if="error" class="text-red-600 mb-[10px]">
        {{ error }}
      </p>
      <UInput v-model="form.email" variant="auth" :placeholder="`Email *`" type="email" class="mb-[20px]"/>
      <UInput v-model="form.password" variant="auth" :placeholder="`Password *`" type="password"
              class="mb-[12px]"/>
      <nuxt-link to="/auth/forgot-password" class="text-[14px] font-bold mb-[32px]">
        Forgot Password ?
      </nuxt-link>
      <UButton :loading="loading" type="submit" variant="auth" class="text-center mb-[24px]">
        Sign in
      </UButton>
      <div class="flex items-center justify-center mx-auto cursor-pointer mb-[32px]" @click="showSocialLogin = true">
        <img src="/images/auth/back.svg" alt="" class="w-[16px] mr-[8px]">
        <span class="text-[14px] font-semibold text-[#C9D0DC]">Back</span>
      </div>
    </form>
    <div v-if="showSocialLogin" class="flex flex-col items-center">
      <div>
        <client-only>
          <v-facebook-login-scope :app-id="config.public.FACEBOOK_CLIENT_ID" @login="facebookLogin">
            <template #default="scope">
              <img :src="`/images/auth/facebook_auth3.svg`" class="w-full max-w-[251px] cursor-pointer" alt=""
                   @click="scope.login()">
            </template>
          </v-facebook-login-scope>
        </client-only>
        <div class="h-[20px]"/>
        <client-only>
          <GoogleLogin :callback="googleLogin" class="w-full max-w-[251px]" prompt :button-config="{width: 251}"/>
        </client-only>
        <div class="h-[20px]"/>
        <client-only>
          <vue-apple-login
              v-if="appleScriptLoaded"
              color="black"
              class="w-full max-w-[251px]"
              :border="true"
              type="sign in"
              height="43"
              :on-success="appleLogin"
          />
        </client-only>
      </div>
      <div class="mb-[24px] mt-[18px] max-w-md m-auto text-center">
        or
      </div>
      <UButton variant="auth" class="text-center mb-[32px] max-w-[375px]"
               @click="showSocialLogin = false">
        <img src="/images/auth/email.svg" class="w-[24px] mr-[12px]" alt="">
        <span>
          Sign in with e-mail
        </span>
      </UButton>
    </div>
    <div class="mb-10 flex justify-center">
      <span class="text-[16px] mr-[5px]">
        Don’t have an account?
      </span>
<!--      <nuxt-link to="/auth/register" class="text-[16px] font-bold text-[#0165FF]">-->
<!--        Sing up-->
<!--      </nuxt-link>-->
      <nuxt-link to="/auth/register" class="text-[16px] font-bold text-[#0165FF]">
        Sign up
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from "~/store/auth.js";
import {storeToRefs} from "pinia";

useHead({
  script: [
    {
      src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
      type: 'text/javascript',
      onload: () => {
        appleScriptLoaded.value = true;
      }
    }
  ]
})

definePageMeta({
  layout: 'auth',
  middleware: ['auth'],
  authType: 'only-guest'
})

const router = useRouter()
const config = useRuntimeConfig()
const authStore = useAuthStore()

const {
  authenticateUser,
  authenticateUserGoogle,
  authenticateUserFacebook,
  authenticateUserApple,
  authenticateUserMicrosoft
} = authStore

const {loading} = storeToRefs(authStore)

const form = ref({
  email: '',
  password: '',
})
const error = ref('')
const showSocialLogin = ref(true)
const appleScriptLoaded = ref(false)

async function login() {
  error.value = null

  const successLogin = await authenticateUser(form.value.email, form.value.password)

  if (!successLogin) {
    error.value = 'Invalid username or password'
    return
  }



  error.value = ''

  await router.push('/')
}

async function facebookLogin(res) {
  if (!res) {
    return
  }

  const successLogin = await authenticateUserFacebook(res.authResponse.accessToken)

  if (!successLogin) {
    error.value = 'Invalid username or password'
    return
  }



  error.value = ''

  await router.push('/')
}

async function googleLogin(res) {
  console.log(res)
  const successLogin = await authenticateUserGoogle(res.credential)

  if (!successLogin) {
    error.value = 'Invalid username or password'
    return
  }



  error.value = ''

  await router.push('/')
}

async function appleLogin(res) {
  const successLogin = await authenticateUserApple(res.authorization.id_token)

  if (!successLogin) {
    error.value = 'Invalid username or password'
    return
  }


  error.value = ''

  await router.push('/')
}

async function microsoftLogin() {
  const successLogin = await authenticateUserMicrosoft()
  if (!successLogin) {
    error.value = 'Invalid username or password'
    return
  }

  error.value = ''
  await router.push('/')
}

onMounted(() => {
  if (typeof AppleID !== 'undefined') {
    appleScriptLoaded.value = true
  }
})
</script>
