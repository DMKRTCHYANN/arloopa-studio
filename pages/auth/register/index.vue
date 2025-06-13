<template>
  <div class="w-full">
    <p class="text-[48px] font-bold mb-[32px] flex gap-x-[20px] items-center">
      <nuxt-link to="/auth/login">
        <img src="/images/auth/auth_back.svg" alt="" class="w-[28px] cursor-pointer">
      </nuxt-link>
      <span>
          Sign up
      </span>
    </p>
    <p class="text-[16px] mb-[24px]">
      One place to create & publish Augmented Reality content
    </p>
    <div class="w-full flex items-center flex-col">
      <client-only>
        <v-facebook-login-scope :app-id="config.public.FACEBOOK_CLIENT_ID" @login="facebookLogin">
          <template #default="scope">
            <img :src="`/images/auth/facebook_auth3.svg`" class="w-full ] max-w-[251px] cursor-pointer" alt=""
                 @click="scope.login()">
          </template>
        </v-facebook-login-scope>
      </client-only>
      <div class="h-[20px]"/>
      <client-only>
        <GoogleLogin :callback="googleLogin" class="w-full h-[30px] max-w-[251px]" prompt :button-config="{width: '251px'} "/>
      </client-only>
      <div class="h-[20px]"/>
      <client-only>
        <vue-apple-login
            v-if="appleScriptLoaded"
            color="black"
            class="w-full h-[30px] max-w-[251px]"
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
    <UFormGroup :error="errors.name ? errors.name[0] : null" class="mb-[24px]">
      <UInput v-model="form.name" variant="auth" :placeholder="`Full name *`"/>
    </UFormGroup>
    <UFormGroup :error="errors.email ? errors.email[0] : null" class="mb-[24px]">
      <UInput v-model="form.email" variant="auth" :placeholder="`Email *`" type="email"/>
    </UFormGroup>
    <UFormGroup :error="errors.password ? errors.password[0] : null" class="mb-[32px]">
      <UInput v-model="form.password" variant="auth" :placeholder="`Password *`" type="password"/>
    </UFormGroup>
    <UButton :loading="loading" variant="auth" type="submit" class="mx-auto mb-[24px]" @click="register">
      Sign up
    </UButton>
    <div class="flex flex-row mx-auto mt-[16px] mb-[30px] justify-center">
      <p class="leading-6 font-roboto not-italic font-normal  text-[16px]"> Already have an account? </p>
      <nuxt-link to="/auth/login"
                 class="leading-6 font-roboto not-italic font-bold  text-[16px] text-[#0065FF] ml-[5px]">
        Sign in
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import {useAuthStore} from "~/store/auth.js";

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
  // middleware: ['auth', 'only-studio'],
  // authType: 'only-guest'
})

const router = useRouter()
const config = useRuntimeConfig()
const authStore = useAuthStore()
const {authenticateUser, authenticateUserGoogle, authenticateUserFacebook, authenticateUserApple} = authStore
const loading = ref(false)
const errors = ref({})
const form = ref({
  email: '',
  name: '',
  password: '',
})
const error = ref('')
const appleScriptLoaded = ref(false)

async function register() {
  if (loading.value) {
    return
  }
  loading.value = true
  const {data, error} = await useFetch('/api/register', {
    method: 'post',
    headers: {Accept: 'application/json'},
    key: (Math.random() + 1).toString(36).substring(7),
    body: {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      register_place: 'studio'
    },
  })
  if (error.value) {
    errors.value = error.value.data.errors
    loading.value = false
    return
  }

  await authenticateUser(form.value.email, form.value.password)
  loading.value = false
  await router.push('/auth/register/verify')
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

onMounted(() => {
  if (typeof AppleID !== 'undefined') {
    appleScriptLoaded.value = true
  }
})
</script>
