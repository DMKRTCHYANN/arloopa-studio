<template>
  <div id="home">
<!--    <div class="fixed top-0 z-50 w-full border-b border-gray-400">-->
<!--      <div class="max-w-[1200px] w-full mx-auto  bg-[#fffc] flex justify-between px-[24px] py-4">-->
<!--        <div>-->
<!--          <NuxtLink to="/#home">-->
<!--            <img src="/images/logo.svg" alt="Logo img"/>-->
<!--          </NuxtLink>-->
<!--        </div>-->
<!--        <div class="my-auto">-->
<!--          <button-->
<!--              class="flex items-center justify-between bg-white py-[6px] border-solid text-[#404040] px-[20px]  gap-[8px] rounded-2xl text-sm border border-gray-300  hover:bg-gray-100 transition-all duration-300 "-->
<!--          >-->
<!--            <i class="fa-regular fa-user"></i>-->
<!--            Sign in-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <navbar/>
  </div>
  <div class="max-w-[1280px] w-full mx-auto  py-[150px] flex flex-col lg:flex-row gap-8 lg:px-[24px] px-[16px]">
    <div class="absolute top-40 right-40 w-80 h-80 bg-[#864bff]/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-40 left-10 w-80 h-80 bg-[#864bff]/10 rounded-full blur-2xl"></div>
    <div class="flex-1 flex flex-col">
      <div class="flex justify-center gap-[10px] mb-[32px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
        </svg>
        <p class="font-semibold text-center lg:text-left">Multiview Pipeline • 3D Model + 4 Camera Views</p>
      </div>
      <h1 class="text-4xl font-semibold x text-center mb-[24px]">
        Turn photos into <br class="hidden "/> <span class="text-[#525252]">3D models that actually work</span>
      </h1>
      <p class="text-gray-600 text-center mx-[8px] mb-[48px]">
        We built a custom pipeline that consistently delivers high-quality results. Upload any image and get back a
        clean 3D model with no weird artifacts or broken geometry that's ready to use in your projects.
      </p>
      <div class="bg-[#fff] rounded-lg hover:shadow-lg transition-shadow">
        <div class="border border-gray-200 rounded-xl p-6 text-center">
          <label for="fileInput" class="cursor-pointer">
            <div
                class="flex flex-col border border-dashed rounded-xl border-gray-300 py-[40px] items-center hover:bg-gray-50 transition hover:border-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-8 h-8 text-gray-400 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path>
              </svg>
              <p class="text-[24px] font-medium">Upload your images</p>
              <p class="text-[16px] text-gray-500">PNG or JPG, up to 4MB each</p>
            </div>
          </label>
          <input
              type="file"
              id="fileInput"
              accept=".png,.jpg,.jpeg"
              multiple
              class="hidden"
              @change="handleFileUpload"
          >
          <div v-if="selectedFiles.length > 0" class="mt-4">
            <div v-for="(file, index) in selectedFiles" :key="index"
                 class="flex items-center justify-between p-3 mb-2 border border-gray-200 rounded-lg">
              <div class="flex items-center">
                <img :src="file.preview" class="w-[250px] object-cover rounded mr-3" alt="Preview">
                <span class="text-sm truncate max-w-[150px]">{{ file.name }}</span>
              </div>
              <button @click="removeFile(index)" class="text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex justify-center my-5">
            <button
                    class="bg-[#525252] flex items-center gap-[5px] text-white py-[16px] px-[32px] rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 24 24"  stroke-width="1.5"  stroke="currentColor"  class="w-6 h-6" >
                      <path stroke-linecap="round"  stroke-linejoin="round"  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z">
                      </path>
                  </svg>
              Generate 3D Models
            </button>
          </div>
          <p class="mt-2 text-[14px] text-gray-500">
            3D model + 4 multiview images • Purchase credits to get started
          </p>
          <p id="statusMessage" class="mt-2 text-[14px] text-red-500" :class="{ 'hidden': !errorMessage }">
            {{ errorMessage }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col p-[16px]">
      <div class="grid grid-cols-2 gap-4 mb-6 items-center">
        <transition name="fade">
          <div
              key="image-and-title"
              class="flex-col bg-[#F5F5F5] rounded-xl p-10 mb-3 h-32 sm:h-40 flex items-center justify-center">
            <img
                :src="models[currentModelIndex].image"
                :alt="models[currentModelIndex].alt"
                class="w-[128px]"
            >
            <p>{{ models[currentModelIndex].title }}</p>
          </div>
        </transition>
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-[8px] text-center">See the Magic</h1>
          <p class="text-[#525252]">From 2D image to interactive 3D model</p>
        </div>
      </div>
      <div class="bg-gray-100 rounded-xl p-4 h-64 sm:h-80 lg:h-96 flex items-center justify-center relative">
        <transition name="fade">
          <model-viewer
              key="model-viewer"
              ar-status="not-presenting"
              auto-rotate
              auto-rotate-delay="1000"
              camera-controls
              class="transition-opacity duration-500 ease-in-out"
              disable-zoom
              environment-image="neutral"
              rotation-per-second="30deg"
              shadow-intensity="1"
              :src="models[currentModelIndex].model"
              btn_text="Create a project"
              btn_id="art_culture_create_project"
              style="width: 100%; height: 100%"
          />
        </transition>
      </div>
      <div class="">
        <p class="text-center mt-[15px] text-[#525252]">Interactive 3D Model</p>
        <div
            class="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-200 transition-opacity duration-600 ease-in-out opacity-100">
          <div class="text-center">
            <p class="text-lg font-bold text-[#525252]"> ~2 min</p>
            <p class="text-sm text-gray-600">Generation time</p>
          </div>
          <div class="text-center">
            <p class="test-lg font-bold text-[#525252]">90%+</p>
            <p class="text-sm text-gray-600">Quality output</p>
          </div>
          <div class="text-center">
            <p class="text-lg font-bold text-[#525252]">GLB</p>
            <p class="text-sm text-gray-600">Ready format</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-16 lg:py-24 bg-gray-50">
    <div class="max-w-[1200px]  mx-auto w-full lg:px-[24px] px-[16px]">
      <div class="text-center mb-16 lg:mb-20 transition-all duration-1000 transform opacity-100 translate-y-0">
        <h1 class="text-3xl  font-semibold text-black mb-6 text-center">Why ours actually works</h1>
        <p
            class="text-[14px]  text-gray-600 max-w-3xl mx-auto text-center leading-relaxed"
        >
          Most 3D generation tools were built by researchers, not people who actually use 3D models. Ours is different.
          We tested every major solution on the market and built something better.
        </p>
      </div>
      <div
          class="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20 transition-all duration-1000 transform opacity-100 translate-y-0"
      >
        <div class="text-center">
          <p class="text-5xl  font-semibold text-black mb-2">2 minutes</p>
          <p class="text-lg lg:text-xl font-medium text-gray-900 mb-1">generation time</p>
          <p class="text-sm text-gray-600">from upload to download</p>
        </div>
        <div class="text-center">
          <p class="text-5xl font-semibold text-black mb-2">Production</p>
          <p class="text-lg lg:text-xl font-medium text-gray-900 mb-1">ready quality</p>
          <p class="text-sm text-gray-600">no cleanup required</p>
        </div>
        <div class="text-center">
          <p class="text-5xl font-semibold text-black mb-2">GLB</p>
          <p class="text-lg lg:text-xl font-medium text-gray-900 mb-1">standard format</p>
          <p class="text-sm text-gray-600">works everywhere</p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <div class="card p-[24px]  hover:shadow-lg transition-shadow">
          <div class="flex items-start gap-4">
            <div
                class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center text-black flex-shrink-0 mt-1">
              <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-[24px]  font-bold text-center text-black mb-3">Models that actually import correctly</h3>
              <p class="text-gray-600 text-center text-sm">
                Proper topology, clean geometry, and industry-standard file formats. No more broken meshes or weird
                artifacts that waste your time.
              </p>
            </div>
          </div>
        </div>
        <div class="card p-[24px] hover:shadow-lg transition-shadow">
          <div class="flex items-start gap-4">
            <div
                class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center text-black flex-shrink-0 mt-1">
              <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-[24px]  font-bold text-center text-black mb-3">Built by people who use 3D tools</h3>
              <p class="text-gray-600 text-center text-sm">
                We understand the pain points because we've been there. Every feature is designed
                with real workflow needs in mind.
              </p>
            </div>
          </div>
        </div>
        <div class="card p-[24px] hover:shadow-lg transition-shadow">
          <div class="flex items-start gap-4">
            <div
                class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center text-black flex-shrink-0 mt-1">
              <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1">
                </path>
              </svg>
            </div>
            <div>
              <h3 class="text-[24px] font-bold text-center text-black mb-3">Only pay for results you can use</h3>
              <p class="text-gray-600 text-center text-sm">
                Most models come out usable without any manual fixing. For the ones that don't work? You get your
                credits back.
              </p>
            </div>
          </div>
        </div>
        <div class="card p-[24px] hover:shadow-lg transition-shadow">
          <div class="flex items-start gap-4">
            <div
                class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center text-black flex-shrink-0 mt-1">
              <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                </path>
              </svg>
            </div>
            <div>
              <h3 class="text-[24px] font-bold text-center text-black mb-3">Multiview approach for better results</h3>
              <p class="text-gray-600 text-center text-sm">
                We generate 4 camera angles first, then create the 3D model from multiple perspectives.
                Better geometry than single-image methods, plus you get the multiview images free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-16 lg:py-24 bg-white">
    <div class="max-w-[1200px] w-full  mx-auto lg:px-[24px] px-[16px]">
      <div class="text-center mb-16 lg:mb-20 transition-all duration-100">
        <h2 class="lg:text-[30px] text-4xl font-semibold text-black mb-6">See the difference</h2>
        <p class="text-[14px] text-[#525252]">
          These started as regular photos. Now they're something you can actually use in production.
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex flex-wrap justify-center gap-3 px-4 sm:px-6 md:px-8 mb-12 min-w-0">
        <button
            v-for="model in models"
            :key="model.id"
            @click="selectModel(model.id)"
            :class="[
      'flex items-center py-1.5 px-4 sm:px-5 gap-2 rounded-2xl text-xs sm:text-sm border border-gray-300 transition-all duration-300',
      activeModelId === model.id
        ? 'bg-black text-white'
        : 'bg-white text-[#404040] hover:bg-gray-100'
    ]"
        >
          {{ model.title }}
        </button>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div class="order-1">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center lg:text-center">
            Original Image
          </h3>
          <div class="bg-gray-50 rounded-xl p-6 h-64 sm:h-80 flex items-center justify-center">
            <img
                :src="selectedModel.image"
                class="max-w-full max-h-full object-contain rounded-lg"
                :alt="selectedModel.alt"
            />
          </div>
        </div>
        <div class="order-2">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center lg:text-center">
            Generated 3D Model
          </h3>
          <div class="bg-gray-50 rounded-xl p-6 h-80 sm:h-96 lg:h-[500px] flex items-center justify-center relative">
            <model-viewer
                key="model-viewer"
                ar-status="not-presenting"
                auto-rotate
                auto-rotate-delay="1000"
                camera-controls
                class="transition-opacity duration-500 ease-in-out"
                disable-zoom
                environment-image="neutral"
                rotation-per-second="30deg"
                shadow-intensity="1"
                :src="selectedModel.model"
                style="width: 100%; height: 100%"
            />
          </div>
        </div>
      </div>
      <div class="text-center mt-[30px]">
        <h1 class="text-[20px] font-semibold text-gray-900 mb-4">{{ selectedModel.title }}</h1>
        <p class="text-base lg:text-lg text-gray-600 mb-3 max-w-2xl mx-auto leading-relaxed">
          Athletic sneakers with detailed textures
        </p>
      </div>
      <div class="mt-16">
        <div class=" rounded-2xl -m-4"></div>
        <div
            class="bg-[#FAFAFA] rounded-2xl relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 transition-all duration-1000 transform opacity-90 translate-y-4">
          <div class="text-center transition-all duration-700 transform hover:scale-105">
            <div
                class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-black/10">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-[24px] font-medium text-black mb-2">Lightning Fast</h3>
            <p class="text-xs lg:text-sm text-gray-600">
              Generate 3D models in just a few minutes, not hours or days.
            </p>
          </div>
          <div class="text-center transition-all duration-700 transform hover:scale-105">
            <div
                class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-black/10">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-[24px] font-medium text-black mb-2">High Quality</h3>
            <p class="text-xs lg:text-sm text-gray-600">
              Production-ready 3D models suitable for games, AR/VR, and web.
            </p>
          </div>
          <div class="text-center transition-all duration-700 transform hover:scale-105">
            <div
                class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-black/10">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
            <h3 class="text-[24px] font-medium text-black mb-2">Ready to Use</h3>
            <p class="text-xs lg:text-sm text-gray-600">
              Download as GLB files, compatible with all major 3D software.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-[1200px]  mx-auto w-full lg:px-[24px] px-[16px]">
    <div class="bg-white">
      <div class="text-center mb-[30px]  transition-all duration-1000 transform opacity-100 translate-y-0">
        <h3 class="text-[30px] font-semibold text-black mb-[32px] text-center">
          What people actually use it for
        </h3>
        <p class="text-[14px] text-gray-600 max-w-2xl mx-auto text-center ">
          Clean 3D models for real projects. No weird distortions or missing details that make people question your
          work.
        </p>
      </div>
    </div>
    <div class="max-w-[1200px] w-full mx-auto flex justify-center">
      <client-only>
        <scroller-section/>
      </client-only>
    </div>
    <div class="flex items-center justify-center ">
      <div class="p-8 text-center">
        <h3 class="text-[24px] font-medium text-black mb-6">Ready to see what your images can become?</h3>
        <p class="text-[14px] text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto text-center leading-relaxed">
          Join creators and businesses who are building better 3D content with models that actually work.
        </p>
        <div class="flex justify-center my-5">
          <nuxt-link  to="/#home"
              class="bg-black flex items-center gap-[5px] text-white py-[16px] px-[32px] rounded-2xl">
            Start Creating Now
            <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"  d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <div class="py-16  bg-white">
      <div class="max-w-[1200px]  mx-auto w-full lg:px-[24px] px-[16px]">
        <div class="text-center mb-16 lg:mb-20 transition-all duration-1000 transform opacity-100 translate-y-0">
          <h2 class="text-[30px] font-semibold text-black mb-6 text-center">Questions people actually ask</h2>
          <p class="text-[14px] text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">Straight answers to the things you're probably wondering about.</p>
        </div>
        <div class="max-w-[760px] w-full mx-auto">
          <questions-section/>
        </div>
      </div>
  </div>
</template>
<style scoped>
::v-deep(.fade-enter-active),
::v-deep(.fade-leave-active) {
  transition: opacity 0.5s;
}

::v-deep(.fade-enter),
::v-deep(.fade-leave-to) {
  opacity: 0;
}

.card {
  background: #fff;
  border: 2px solid var(--color-gray-200);
  border-radius: 10px;
  transition: all 0.2s ease;
}
</style>
<script setup>


// definePageMeta({
//   colorMode: 'light',
//   middleware: ['auth', 'only-studio'],
//   authType: 'only-guest'
// })


const selectedFiles = ref([]);
const errorMessage = ref('');


const currentModelIndex = ref(0);
const models = [
  {
    id: 1,
    title: 'Chair',
    image: '/images/chair.png',
    model: '/models/chair.glb',
    alt: 'Chair img',
  },
  {
    id: 2,
    title: 'Coffee Mug',
    image: '/images/coffee.png',
    model: '/models/coffee.glb',
    alt: 'Coffee img',
  },
  {
    id: 3,
    title: 'Headphones',
    image: '/images/headphones.png',
    model: '/models/headphones.glb',
    alt: 'Headphones img',

  },
  {
    id: 4,
    title: 'Lamp',
    image: '/images/lamp.png',
    model: '/models/lamp.glb',
    alt: 'Lamp img',

  },
  {
    id: 5,
    title: 'Sneakers',
    image: '/images/sneakers.png',
    model: '/models/sneakers.glb',
    alt: 'Sneakers img',
  },
]
const activeModelId = ref(models[0].id);
const selectedModel = ref(models[0]);

const selectModel = (id) => {
  activeModelId.value = id;
  selectedModel.value = models.find((model) => model.id === id);
};

const handleFileUpload = (event) => {
  const files = event.target.files;
  if (!files.length) return;
  errorMessage.value = '';
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file.type.match('image/(png|jpeg|jpg)')) {
      errorMessage.value = `Unsupported format: ${file.name}. Only PNG/JPG are allowed`;
      continue;
    }
    if (file.size > 4 * 1024 * 1024) {
      errorMessage.value = `File too large: ${file.name} (max 4MB)`;
      continue;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      selectedFiles.value.push({
        name: file.name,
        preview: e.target.result,
        fileObject: file
      });
    };
    reader.readAsDataURL(file);
  }
};

const removeFile = (index) => {
  selectedFiles.value.splice(index, 1);
};

onMounted(() => {
  setInterval(() => {
    currentModelIndex.value = (currentModelIndex.value + 1) % models.length;
  }, 4000);
});

useHead({
  script: [
    {src: 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js', type: 'module'}
  ]
})
</script>