<template>
  <navbar/>
  <div class="pt-[160px] px-[10px] mx-auto w-full">
    <div class="text-[24px] mb-[52px] text-center">
      Checkout
    </div>
    <div class="max-w-[1241px] w-full mx-auto px-[10px] md:px-[54px] pt-[18px] pb-[31px] bg-[#F4F5F7] rounded-[28px]">
      <div class="text-[24px] font-medium mb-[32px]">
        Payment
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <!-- PLAN INFO -->
        <div
            class="bg-white rounded-[24px] border-[2px] flex flex-col justify-between pl-[28px] pr-[28px] py-[40px] border-[#E60016]">
          <div class="flex flex-col w-full">
            <div class="flex items-center mb-[24px] gap-[12px]">
              <img src="/images/general/coin_hint.svg" class="w-[24px]" alt="">
              <h2 class="text-[#181059] text-[24px] font-bold">{{ studioCoinPlan?.coins }}</h2>
            </div>
            <div class="flex gap-[7px] mb-[17px] items-start">
              <img src="/images/general/entypoint_check.svg" class="w-[10px] mt-[6px]" alt="">
              <span class="text-[16px] text-[#181059]">{{ studioCoinPlan?.description }}</span>
            </div>
          </div>
          <div class="flex w-full flex-col">
            <div class="h-[2px] w-full bg-[#deeaff] mb-[28px]"/>
            <div class="text-[#181059] font-bold text-[32px] mb-[36px] w-full text-center">
              ${{ studioCoinPlan?.price.toFixed(2) }}
            </div>
          </div>
        </div>
        <!-- PAYMENT METHOD SWITCHER -->
        <div class="flex-grow">
          <div class="font-medium text-[16px] mb-[12px]">
            Credit card
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-[32px]">
            <button
                :class="newCard ? '' : 'border-red-600 shadow-[inset_0_0px_4px_rgba(220,38,37,0.6)]'"
                class="font-bold text-[18px] bg-[#EBECF0] rounded-[16px] border-2 px-[28px] py-[12px]"
                @click="newCard = false"
            >
              My cards
            </button>
            <button
                :class="newCard ? 'border-red-600 shadow-[inset_0_0px_4px_rgba(220,38,37,0.6)]' : ''"
                class="font-bold text-[18px] bg-[#EBECF0] rounded-[16px] border-2 px-[28px] py-[12px]"
                @click="newCard = true"
            >
              New card
            </button>
          </div>
          <div v-if="!newCard">
            <div
                v-for="cc in creditCards"
                :key="cc.id"
                class="bg-[#EBECF0] mb-[20px] flex items-center px-[20px] py-[10px] rounded-[10px]"
            >
              <input
                  :id="cc.id"
                  v-model="cardId"
                  type="radio"
                  :value="cc.id"
                  class="mr-[20px]"
              >
              <label :for="cc.id" class="grow font-bold">
                **** **** **** {{ cc.last4 }}
                <span class="float-right">
                 {{ two(cc.exp_month) }}/{{ two(cc.exp_year % 100) }}
               </span>
              </label>
            </div>
          </div>
          <div v-if="newCard">
            <StripeElements
                v-if="stripeLoaded"
                v-slot="{ elements, instance }"
                ref="stripeEl"
                :stripe-key="pk"
            >
              <StripeElement ref="card" :elements="elements" :options="{ hidePostalCode: true }"/>
            </StripeElements>
          </div>
        </div>
      </div>
      <div v-if="studioCoinPlan" class="md:col-span-2 mt-[46px]">
        <hr class="border-t-[4px] border-white mb-[20px]">
        <div class="flex justify-end items-center gap-[10px]">
          <span class="text-[18px] font-bold">Total Amount:</span>
          <span>${{ studioCoinPlan.price.toFixed(2) }}</span>
          <UButton :loading="payNowLoading" @click="payNow">
            Pay now
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import {storeToRefs} from 'pinia'
import {useCreditCardsStore} from '~/store/billing/credit_cards.js'
import {StripeElements, StripeElement} from 'vue-stripe-js'
import {loadStripe} from '@stripe/stripe-js/pure'
import useAuthFetch from "~/composables/useAuthFetch.js";

const toast = useToast()
const router = useRouter()

// Pinia store for saved cards
const cardsStore = useCreditCardsStore()
const {creditCards} = storeToRefs(cardsStore)

// reactive state
const newCard = ref(false)
const cardId = ref(null)
const stripeLoaded = ref(false)
const studioCoinPlan = ref(null)
const payNowLoading = ref(false)
const stripeEl = ref(null)
const card = ref(null)
const pk = useRuntimeConfig().public.STRIPE_PK

// fetch plan from query
async function loadPlan() {
  const {data} = await useAuthFetch('/api/studio-coin-plans');

  // Map through the plans and add a description to each
  studioCoinPlan.value = data.value.data.studio_coin_plans.map(plan => {
    return {
      ...plan, // Spread existing plan properties
      description: getDescription(plan.identifier), // Add the description
    };
  });

  // Find the specific plan by the query ID and assign it to studioCoinPlan
  studioCoinPlan.value = studioCoinPlan.value.find(
      p => p.identifier === useRoute().query.id
  );
}

function getDescription(identifier) {
  switch (identifier) {
    case 'coins_1':
      return 'Perfect for small boosts';
    case 'coins_2':
      return 'Best value for medium use';
    case 'coins_3':
      return 'Great for heavy users';
    case 'coins_4':
      return 'Best overall value';
    default:
      return 'Custom plan';
  }
}


// helper
const two = n => (n < 10 ? '0' + n : n)
const formatPrice = p => p.toFixed(2).split('.')[0] + '.' + two(Math.round((p % 1) * 100))

// PAY NOW
async function payNow() {
  payNowLoading.value = true
  try {
    if (newCard.value) {
      await purchaseWithNewCard()
    } else {
      await purchaseWithSavedCard()
    }
    toast.add({title: 'Payment successful', color: 'red', timeout: 2000})

    await cardsStore.fetchCreditCards()

    await router.push('/')
  } catch (err) {
    toast.add({title: err.message || 'Payment failed', color: 'red', timeout: 2000})

  } finally {
    payNowLoading.value = false
  }
}

// NEW CARD → PaymentIntent + Confirmation
async function purchaseWithNewCard() {
  const tokenRes = await stripeEl.value.instance.createToken(card.value.stripeElement)
  if (!tokenRes.token) throw new Error(tokenRes.error.message)

  const {data} = await useAuthFetch('/api/studio-coin-plans/payment/create-intent', {
    method: 'POST',
    body: JSON.stringify({
      card_token: tokenRes.token.id,
      plan_id: studioCoinPlan.value.identifier
    })
  })
  const secret = data.value.client_secret

  const {error, paymentIntent} = await stripeEl.value.instance.confirmCardPayment(secret)
  if (error || paymentIntent.status !== 'succeeded') {
    throw new Error(error?.message || 'Payment failed')
  } else {
    await router.push('/')
  }
}

async function purchaseWithSavedCard() {
  const {data, error, status} = await useAuthFetch('/api/studio-coin-plans/payment/charge-card', {
    method: 'POST',
    body: JSON.stringify({
      card_id: cardId.value,
      plan_id: studioCoinPlan.value.identifier
    })
  })


  if (error?.value?.statusCode === 402 && error?.value?.data.client_secret) {
    const {error: err2, paymentIntent} = await stripeEl.value.instance.confirmCardPayment(
        error?.value?.data.client_secret
    )
    if (err2 || paymentIntent.status !== 'succeeded') {
      throw new Error(err2?.message || 'Authentication failed')
    } else {
      await router.push('/')
    }
  } else if (error.value) {
    throw new Error(error.data?.message || error.message)
  }
}

// life-cycle
onMounted(async () => {
  await nextTick()
  await cardsStore.fetchCreditCards()
  await loadPlan()
  const stripe = await loadStripe(pk)
  stripeLoaded.value = true
})
</script>
