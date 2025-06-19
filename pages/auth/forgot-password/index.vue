<template>
  <div>
    <div class="text-[48px] font-bold mb-[32px]">
      Reset password
    </div>
    <div class="text-[16px] mb-[24px]">
      We will sent the code to e-mail address you entered.
    </div>
    <UFormGroup :error="errors.email ? errors.email[0] : null" class="mb-[32px]">
        <UInput v-model="forgotEmail" variant="auth" placeholder="Email" />
    </UFormGroup>
    <UButton :loading="loading" variant="auth" class="text-center mb-[24px]" @click="resetPassword">
      Send code
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
  middleware: 'auth',
  authType: 'only-guest',
})

const router = useRouter()
const authStore = useAuthStore()

const { forgotEmail } = storeToRefs(authStore)

const errors = ref({})
const loading = ref(false)

async function resetPassword() {
  if (loading.value) {
    return
  }

  loading.value = true

  const {data, error} = await useFetch('/api/forgot/send/', {
    method: 'post',
    headers: {Accept: 'application/json'},
    body: {
      email: forgotEmail.value,
    },
    watch: false,
    key: (Math.random() + 1).toString(36).substring(7),
  })

  loading.value = false

  if (data.value) {
    await router.push('/auth/forgot-change')
  } else {
    errors.value = error.value.data.errors
  }
}
</script>
