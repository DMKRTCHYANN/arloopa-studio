<template>
  <navbar/>
  <div class="bg-white min-h-screen flex justify-center items-center">
    <section
        class="flex flex-col items-center px-[20px] max-w-[1146px] overflow-y-auto mx-auto md:justify-center w-full"
    >
      <h1 class="text-[32px] font-bold text-[#181059] mb-[17px]">Get More ARLOOPA Coins</h1>
      <p class="mb-[59px] text-[#181059] text-[16px]">Choose a pack and power up your experience instantly.</p>
      <div class="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4 w-full">
        <div v-for="studioCoinPlan in studioCoinPlans" :key="studioCoinPlan.id"
             class="bg-white rounded-[24px] border-[2px] flex flex-col justify-between pl-[28px] pr-[28px] py-[40px]"
             :class="`${studioCoinPlan.is_featured ? 'border-[#E60016]' : 'border-transparent'}`">
          <div class="flex flex-col w-full">
            <div class="flex items-center mb-[24px] gap-[12px]">
              <img src="/images/general/coin_hint.svg" class="w-[24px]" alt="">
              <h2 class="text-[#181059] text-[24px] font-bold">{{ studioCoinPlan.coins }} Coins</h2>
            </div>
            <div class="flex gap-[7px] mb-[17px] items-start">
              <img src="/images/general/entypoint_check.svg" class="w-[10px] mt-[6px]" alt="">
              <span class="text-[16px] text-[#181059]">{{ studioCoinPlan.description }}</span>
            </div>
          </div>
          <div class="flex w-full flex-col">
            <div class="h-[2px] w-full bg-[#deeaff] mb-[28px]"></div>
            <div class="text-[#181059] font-bold text-[32px] mb-[36px] w-full text-center">
              ${{ studioCoinPlan.price.toFixed(2) }}
            </div>
            <nuxt-link :to="`/coins/purchase?id=${studioCoinPlan.identifier}`"
                       class="px-[43px] py-[10px] rounded-full border-[1px] border-[#E60016] text-center text-[14px] font-semibold"
                       :class="`${studioCoinPlan.is_featured ? 'bg-[#E60016] text-white' : 'bg-white text-[#E60016]'}`">
              Buy now
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="loading" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full">
        <USkeleton v-for="i in 4" :key="i" class="w-full aspect-[1.14]"/>
      </div>
    </section>
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware: ['auth'],
//   authType: 'only-auth',
// })


// refs
const loading = ref(false)
const studioCoinPlans = ref([])

// lifecycle

async function fetchStudioCoinPlans() {
  if (loading.value) {
    return
  }

  loading.value = true

  const {data} = await useFetch('/api/studio-coin-plans')

  studioCoinPlans.value = data.value.data.studio_coin_plans.map(plan => {
    return {
      ...plan,
      description: getDescription(plan.identifier),
    };
  });
  console.log(studioCoinPlans.value)

  loading.value = false
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


onMounted(async () => {
  await nextTick()

  console.log('a-----------------------------------------a')
  console.log('a-----------------------------------------a')
  console.log('a-----------------------------------------a')
  console.log('a-----------------------------------------a')

  await fetchStudioCoinPlans()
})
</script>
