<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-start">
      <img src="/images/layout/Rectangle.svg" alt="">
      <div class="flex flex-col justify-start pl-[8px] mr-[8px] mb-[16px]">
        <p class=" text-[14px] font-Roboto not-italic font-semibold text-left break-all">
          {{ name }}
        </p>
        <p class=" text-[14px] font-Roboto not-italic font-semibold text-left break-all">
          {{ email }}
        </p>
      </div>
    </div>
    <div class=" items-center mt-[2px] mb-[20px] lg:hidden flex">
      <nuxt-link to="/coins" class="w-full bg-[#F4F5F7] rounded-full pr-[8px] pl-[24px] relative block"
                 @click="() => {sendNavigationEvent('coins')}">
        <span v-if="coins">{{ coins }}</span>
        <UIcon v-else name="i-line-md-loading-loop" class="w-4 h-4" dynamic/>
        <img src="/images/layout/coin.svg" class="w-8 h-8 absolute top-[-6px] left-[-15px]">
      </nuxt-link>
    </div>
    <div class="border-t-[2px] border-[#c9d0dc42]"></div>
    <div>
      <p class="text-[14px] mt-[16px] font-Roboto not-italic font-semibold text-left text-[#E60016] cursor-pointer"
         @click="onLogout">
        {{ impersonateToken ? 'Exit Impersonate' : 'Sign out' }}
      </p>
    </div>
  </div>
</template>
<script setup>
import {useAuthStore} from '~/store/auth.js'
import {useCoinsStore} from "~/store/billing/coins.js";
import {useCreditCardsStore} from "~/store/billing/credit_cards.js";
import {usePlansStore} from "~/store/billing/plans.js";
import {useSubscriptionsStore} from "~/store/billing/subscriptions.js";
import {useExperiencesCountStore} from "~/store/experiences/count.js";
import {storeToRefs} from "pinia";

// cookie
const token = useCookie('token')
const impersonateToken = useCookie('impersonate_token')

// stores
const authStore = useAuthStore()
const coinsStore = useCoinsStore()
const creditCardsStore = useCreditCardsStore()
const plansStore = usePlansStore()
const subscriptionsStore = useSubscriptionsStore()
const experiencesCountStore = useExperiencesCountStore()

const {logout} = authStore
const {coins} = storeToRefs(coinsStore)
const router = useRouter()

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: Number,
    required: true,
  },
});

function sendNavigationEvent(event) {
  target: event

  return Promise.resolve();
}

onMounted(async () => {
  await nextTick()

  await fetchExperiencesCount()
  await authStore.retrieveUser()

  await startAutoFetch()
})

async function onLogout() {
  await coinsStore.reset()
  await creditCardsStore.reset()
  await plansStore.reset()
  await subscriptionsStore.reset()
  await experiencesCountStore.reset()

  await logout()

  if (token.value) {
    window.location.reload()
  } else {
    await navigateTo('/auth/login')
  }
}
</script>

<style scoped>

</style>
