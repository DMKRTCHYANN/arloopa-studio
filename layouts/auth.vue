<template>
  <div class="h-screen w-full notranslate" style="background-image: url('/images/auth/BG.png'); background-repeat: no-repeat; background-size: cover">
    <div class="flex xl:flex-row flex-col w-full justify-between  xl:px-0 px-[50px]  pt-[66px]">
      <div class="w-full flex justify-center mx-auto items-center">
        <div class="w-full max-w-[482px]">
          <div class="flex justify-between mx-auto mb-[40px]">
            <nuxt-link to="/">
              <img src="/images/layout/logo.svg" class="w-full max-w-[210px] h-[78px] mx-auto" alt="">
            </nuxt-link>
          </div>
          <slot />
        </div>
      </div>
      <div class="w-full hidden xl:block relative">
        <!--
                  <div class="flex flex-col w-full mx-auto pl-[45px]">
                    <p class="font-roboto font-normal leading-[54px] text-[81px]  italic">
                      No-code
                    </p>
                    <div class="w-full max-w-[514px]">
                      <p class="leading-[54px] not-italic font-roboto font-extrabold text-[52px] mt-[26px]">
                        AR content creation
                      </p>
                      <p class="leading-[54px] not-italic font-normal font-roboto text-[48px] ml-[205px] mt-[6px]">
                        platform
                      </p>
                    </div>
                  </div>
        -->
        <img src="/images/auth/auth_img.png" class="w-full aspect-[1.06] max-h-[calc(100vh-200px)] max-w-[720px] object-contain absolute top-1/2 -translate-y-1/2 2xl:right-[110px] right-[20px]">
      </div>
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
