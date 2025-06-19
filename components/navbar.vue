<template>
  <div class=" w-full mx-auto  border-b fixed top-0 z-50 border-gray-400  bg-[#fffc] flex px-[24px] py-4">
    <div class="max-w-[1500px] mx-auto w-full py-[16px] flex justify-between items-center px-auto pr-[24px] pl-[7px]">
      <div>
        <NuxtLink to="/#home">
          <img src="/images/logo.svg" alt="Logo img"/>
        </NuxtLink>
      </div>
      <div v-if="user">
        <div class="flex-row items-center flex">
          <div class="flex-row items-center ml-[28px] lg:flex hidden">
            <nuxt-link to="/coins" class="w-full bg-[#F4F5F7] rounded-full pr-[8px] pl-[24px] relative block"
                       @click="() => {sendNavigationEvent('coins')}">
              <span v-if="coins">{{ coins }}</span>
              <UIcon v-else name="i-line-md-loading-loop" class="w-4 h-4" dynamic/>
              <img src="/images/layout/coin.svg" class="w-8 h-8 absolute top-[-6px] left-[-15px]">
            </nuxt-link>
          </div>
<!--          <div-->
<!--              class="rounded-lg flex flex-row justify-center items-center leading-5 max-w-[250px] bg-[#F4F5F7] py-2.5 px-3.5 xl:ml-6 ml-4"-->
<!--              @click="toggleMobileProfileMenu">-->
<!--            <div :style="`background-image: url('${user?.profile_picture_url ?? '/images/layout/Rectangle.svg'}')`"-->
<!--                 class="w-[32px] h-[32px] rounded-full overflow-hidden mr-[12px] bg-cover bg-center"/>-->
<!--            <p v-if="user" class="ml-1 text-xs font-Roboto not-italic font-semibold  leading-[18px]">-->
<!--              {{ user ? user.name : '' }}-->
<!--            </p>-->
<!--            <div class="bg-[#C9D0DC] w-5 h-5 rounded-full ml-4 select-none">-->
<!--              <img :src="`/images/layout/down.svg`" class=" my-1 mx-1 ">-->
<!--            </div>-->
<!--          </div>-->
          <div
              class="rounded-lg flex-row justify-center items-center leading-5 max-w-[250px] bg-[#F4F5F7] py-2.5 px-3.5 xl:ml-6 ml-4 flex">
            <div :style="`background-image: url('${user?.profile_picture_url ?? '/images/layout/Rectangle.svg'}')`"
                 class="w-[32px] h-[32px] rounded-full overflow-hidden mr-[12px] bg-cover bg-center"/>
            <p v-if="user" class="ml-1 text-xs font-Roboto not-italic font-semibold  leading-[18px]">
              {{ user ? user.name : '' }}
            </p>
            <div class="bg-[#C9D0DC] w-5 h-5 rounded-full ml-4 select-none">
              <UDropdown
                  v-model:open="profileDropdownOpened" class="relative"
                  :items="[ [{ slot: 'account', disabled: true }] ]"
                  :ui="{ item: { disabled: 'cursor-default select-text', padding: 'p-0'}, padding: 'px-[20px] pt-[8px] pb-[16px]', ring: 'ring-0', shadow: 'shadow-none',  width: 'w-full max-w-[220px]', base: 'mt-[10px]', divide: 'divide-y divide-white dark:divide-gray-700' }"
                  :popper="{ placement: 'bottom-end'  }">
                <img :src="`${profileDropdownOpened ? '/images/layout/up.svg' : '/images/layout/down.svg'}`"
                     class="my-1 mx-1">
                <template #account="{ item }">
                  <NavbarDropDown
                      :name=" user ? user.name : ''"
                      :email="user ? user.email : ''"
                  />
                </template>
                <div
                    v-if="profileDropdownOpened"
                    class=" w-0 h-0 border-l-[8px] border-l-transparent border-b-[11px] border-b-white border-r-[8px] border-r-transparent absolute top-[27px] right-[1px]"
                    style="transition-delay: 600ms;"/>
              </UDropdown>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="my-auto">
          <nuxt-link
              to="/auth/login"
              class="flex items-center justify-between bg-white py-[6px] border-solid text-[#404040] px-[20px]  gap-[8px] rounded-2xl text-sm border border-gray-300  hover:bg-gray-100 transition-all duration-300 "
          >
            <i class="fa-regular fa-user"></i>
            Sign in
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {storeToRefs} from 'pinia'
import {useAuthStore} from '~/store/auth.js'
import {useCoinsStore} from '~/store/billing/coins.js'
import {useExperiencesCountStore} from "~/store/experiences/count.js";
import NavbarDropDown from "~/components/layout/navbar/navbar-drop-down.vue";
import {useUiStore} from "~/store/ui/ui.js";

// globals
const router = useRouter();
const route = useRoute();

// stores
const uiStore = useUiStore()
const authStore = useAuthStore()
const coinsStore = useCoinsStore()
const experiencesCountStore = useExperiencesCountStore()

// store refs
const {user} = storeToRefs(authStore)
const {coins} = storeToRefs(coinsStore)

// store actions
const {toggleMobileMenu, toggleMobileProfileMenu} = uiStore
const {fetchCoins, startAutoFetch, stopAutoFetch} = coinsStore
const {fetchExperiencesCount} = experiencesCountStore

const homePageDisabled = ref(router.currentRoute.value.path);
const profileDropdownOpened = ref(false)

// const pageTitle = computed(() => {
//   switch (route.name) {
//     case 'index':
//       return t('home');
//     case 'experiences':
//       return t('my_experiences');
//     case 'analytics':
//       return t('analytics');
//     case 'profile':
//       return t('profile');
//     case 'team':
//       return t('team');
//     case 'create':
//       return t('create_new_experience');
//     case 'tutorials':
//       return t('tutorials');
//     default:
//       return null;
//   }
// })

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
onUnmounted(async () => {
  await stopAutoFetch()
})

</script>


