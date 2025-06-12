<template>
  <div class="container max-w-[1200px] mx-auto px-4">
    <Flicking
        :options="{ circular: true }"
        :plugins="plugins"
        class="flicking-viewport"
    >
      <div class="card p-6 lg:p-8 flex-shrink-0 w-80">
        <div class="flex gap-4 text-left">
          <div
              class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z">
              </path>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-[24px] font-medium text-black mb-4 lg:mb-5 leading-tight">
              Make products irresistible
            </h3>
            <p class="text-gray-600 text-xs lg:text-sm mb-5 lg:mb-6 leading-relaxed">
              Customers can't return what they've already explored. 3D product views = fewer questions, more sales,
              happier customers.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>360° product views</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Try-before-you-buy AR</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Virtual showrooms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card p-6 lg:p-8 flex-shrink-0 w-80">
        <div class="flex gap-4 text-left">
          <div
              class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
              >
              </path>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-[24px] font-medium text-black mb-4 lg:mb-5 leading-tight">
              Bring concepts to life
            </h3>
            <p class="text-gray-600 text-xs lg:text-sm mb-5 lg:mb-6 leading-relaxed">
              That sketch in your notebook? It's now a game-ready asset. Turn concept art into playable content in
              minutes, not months.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Game props</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Character references</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Environment pieces</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card p-6 lg:p-8 flex-shrink-0 w-80">
        <div class="flex gap-4 text-left">
          <div
              class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
              </path>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-[24px] font-medium text-black mb-4 lg:mb-5 leading-tight">
              Content that stops the scroll
            </h3>
            <p class="text-gray-600 text-xs lg:text-sm mb-5 lg:mb-6 leading-relaxed">
              2D posts get skipped. 3D posts get saved, shared, and remembered. Create content that makes people pause.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Instagram 3D posts</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>TikTok eye-catchers</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>LinkedIn standouts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card p-6 lg:p-8 flex-shrink-0 w-80">
        <div class="flex gap-4 text-left">
          <div
              class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              >
              </path>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-[24px] font-medium text-black mb-4 lg:mb-5 leading-tight">
              Make learning stick
            </h3>
            <p class="text-gray-600 text-xs lg:text-sm mb-5 lg:mb-6 leading-relaxed">
              Students remember what they can touch, rotate, and explore. Turn flat textbook images into interactive
              experiences.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Science models</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Historical artifacts</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Interactive lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card p-6 lg:p-8 flex-shrink-0 w-80">
        <div class="flex gap-4 text-left">
          <div
              class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
              </path>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-[24px] font-medium text-black mb-4 lg:mb-5 leading-tight">
              From napkin sketch to prototype
            </h3>
            <p class="text-gray-600 text-xs lg:text-sm mb-5 lg:mb-6 leading-relaxed">
              Don't wait for expensive prototypes. See your ideas in 3D immediately and iterate faster than ever.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Rapid prototyping</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Client presentations</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Design validation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card p-6 lg:p-8 flex-shrink-0 w-80">
        <div class="flex gap-4 text-left">
          <div
              class="w-10 h-10 lg:w-12 lg:h-12 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <svg class="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-[24px] font-medium text-black mb-4 lg:mb-5 leading-tight">
              Sell spaces people can feel
            </h3>
            <p class="text-gray-600 text-xs lg:text-sm mb-5 lg:mb-6 leading-relaxed">
              Floor plans are boring. 3D walkthroughs sell houses. Give buyers the experience they actually want.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Virtual tours</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Space planning</span>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <div class="w-1 h-1 bg-black rounded-full mr-3 flex-shrink-0"></div>
                <span>Design visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flicking>
  </div>
</template>
<script setup>
import {AutoPlay} from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";

const plugins = [
  new AutoPlay({duration: 3000, direction: "NEXT", stopOnHover: true}),
];
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

.flicking-viewport {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.flicking-viewport >>> .flicking-camera {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px 0;
}

.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  transition: transform 0.3s ease;
  user-select: none;
  width: 320px;
}

.card:hover {
  transform: translateY(-5px);
}
</style>