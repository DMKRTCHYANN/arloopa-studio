<template>
  <div>
    <div class="text-[48px] font-bold mb-[32px]">
      Reset password
    </div>
    <div class="text-[16px] mb-[24px]">
      Enter code and your new password
    </div>
    <UFormGroup :error="errors.code ? errors.code[0] : null" class="mb-[32px]">
      <UInput v-model="code" name="code" variant="auth" placeholder="Code" />
    </UFormGroup>
    <UFormGroup :error="errors.password ? errors.password[0] : null" class="mb-[32px]">
      <UInput v-model="password" name="password" type="password" variant="auth" placeholder="Password"/>
    </UFormGroup>
    <UButton :loading="loading" variant="auth" class="text-center mb-[24px]" @click="changePassword">
      Change password
    </UButton>
    <nuxt-link to="/auth/login" class="flex items-center justify-center mx-auto cursor-pointer mb-[32px]">
      <img src="/images/auth/back.svg" alt="" class="w-[16px] mr-[8px]">
      <span class="text-[14px] font-semibold text-[#C9D0DC]">
        Back
      </span>
    </nuxt-link>
  </div>
</template>
<script setup>
import {useAuthStore} from "~/store/auth.js";
import {storeToRefs} from "pinia";

definePageMeta({
  layout: 'auth',
  // middleware: 'auth',
  // authType: 'only-guest',
})

const router = useRouter()
const authStore = useAuthStore()

const { forgotEmail } = storeToRefs(authStore)
const code = ref('')
const password = ref('')

const errors = ref({})
const loading = ref(false)

async function changePassword() {
  if (loading.value) {
    return
  }

  loading.value = true

  const {data, error} = await useFetch('/api/forgot/verify/', {
    method: 'post',
    headers: {Accept: 'application/json'},
    body: {
      email: forgotEmail.value,
      code: code.value,
      password: password.value,
    },
    watch: false,
    key: (Math.random() + 1).toString(36).substring(7),
  })

  loading.value = false

  if (data.value) {
    if (data.value.error) {
      if (data.value.data.message === 'try_again') {
        errors.value = {
          code: ['Wrong code']
        }
      } else {
        errors.value = {
          code: ['Code expired']
        }
      }
    } else {
      await router.push('/auth/login')
    }
  } else {
    errors.value = error.value.data.errors
  }
}
</script>
