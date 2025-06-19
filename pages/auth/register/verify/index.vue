<template>
  <div class="w-full">
    <div class="text-[48px] font-bold mb-[32px] flex items-center gap-x-[20px]">
      <div class="inline" @click="onLogout">
        <img src="/images/auth/auth_back.svg" alt="" class="w-[28px] cursor-pointer">
      </div>
      E-mail verification
    </div>
    <p class="text-[16px] mb-[24px]">
      We sent a verification code to the e-mail address you entered. Copy the code from the e-mail, and fill it in the field below.
    </p>
    <div ref="form" class="rounded flex items-center mt-[24px]">
      <input
          v-for="(input, index) in inputs" ref="input" :key="index" v-model="input.value" maxlength="1"
          class="bg-[#F4F5F7] rounded h-[56px] w-[56px] mr-2 text-center text-xl  focus:outline-[#D5DBDB]"
          @input="handleInput($event)"
          @keydown="handleKeydown(index, $event)" @paste="handlePaste" @keyup.delete="handleBackspace($event)">
    </div>
    <UButton :loading="loading" variant="auth" type="submit" class="mx-auto mt-7" @click="verify">
      Verify e-mail
    </UButton>
  </div>
</template>
<script setup>
import {useAuthStore} from "~/store/auth.js";
import {useCoinsStore} from "~/store/billing/coins.js";
import {useCreditCardsStore} from "~/store/billing/credit_cards.js";
import {usePlansStore} from "~/store/billing/plans.js";
import {useSubscriptionsStore} from "~/store/billing/subscriptions.js";
import {useExperiencesCountStore} from "~/store/experiences/count.js";
import {storeToRefs} from "pinia";
import {useUiStore} from "~/store/ui/ui.js";
import useAuthFetch from "~/composables/useAuthFetch.js";

definePageMeta({
  layout: 'auth',
  middleware: ['auth'],
  authType: 'only-auth'
})

const toast = useToast()
const router = useRouter()

const uiStore = useUiStore()
const authStore = useAuthStore()
const coinsStore = useCoinsStore()
const creditCardsStore = useCreditCardsStore()
const plansStore = usePlansStore()
const subscriptionsStore = useSubscriptionsStore()
const experiencesCount = useExperiencesCountStore()

const token = useCookie('token')
const impersonateToken = useCookie('impersonate_token')

const { user } = storeToRefs(authStore)

const {logout, retrieveUser} = authStore

const loading = ref(false)
const code = ref('')

const inputs = ref([
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
])
const KEYBOARDS = ref({
  backspace: 12,
  arrowLeft: 37,
  arrowRight: 39,
})

function handleInput(e) {
  if (e.target) {
    const input = e.target
    const nextInput = input.nextElementSibling
    if (nextInput && input.value) {
      nextInput.focus()
      if (nextInput.value) {
        nextInput.select()
      }
    }
  }
}

function handleKeydown(index, event) {
  switch (event.keyCode) {
    case KEYBOARDS.value.backspace:
      handleBackspace(event);
      break;
    case KEYBOARDS.value.arrowLeft:
      handleArrowLeft(event);
      break;
    case KEYBOARDS.value.arrowRight:
      handleArrowRight(event);
      break;
    default:
  }
}

function handleBackspace(e) {
  const input = e.target

  if (input.value) {
    input.value = ''
    return
  }

  if (input.previousElementSibling) {
    input.previousElementSibling.focus()
  }
}


function handleArrowLeft(e) {
  const previousInput = e.target.previousElementSibling
  if (!previousInput) return
  previousInput.focus()
}

function handleArrowRight(e) {
  const nextInput = e.target.nextElementSibling
  if (!nextInput) return
  nextInput.focus()
}


function handlePaste(event) {
  event.preventDefault();

  const paste = event.clipboardData.getData('text');
  paste.split('').forEach((char, index) => {
    if (inputs.value[index]) {
      inputs.value[index].value = char;
    }
  });
}

function getCode() {
  let sum = ''
  inputs.value.forEach((data) => {
    sum += data.value.toString();
  });
  return sum
}

async function verify() {
  if (loading.value) {
    return
  }

  loading.value = true
  const {data, error} = await useAuthFetch('/api/verify', {
    method: 'post',
    headers: {Accept: 'application/json'},
    body: {
      code: getCode()
    },
  })

  if (data.value) {
    if (data.value.error) {
      if (data.value.data.message === 'try_again') {
        toast.add({
          title: 'Wrong code',
          color: 'red-600',
        })
      } else {
        toast.add({
          title: 'Code expired',
          color: 'red-600',
        })
      }
    } else {


      await retrieveUser()

      await router.push('/')
    }
  } else {
    toast.add({
      title: Object.values(error.value.data.errors)[0][0],
      color: 'red-600',
    })
  }

  loading.value = false
}

async function onLogout() {
  await coinsStore.reset()
  await creditCardsStore.reset()
  await plansStore.reset()
  await subscriptionsStore.reset()
  await experiencesCount.reset()

  await logout()

  if (token.value) {
    window.location.reload()
  } else {
    await navigateTo('/auth/login')
  }
}

</script>
