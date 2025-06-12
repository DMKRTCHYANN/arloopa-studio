<script setup>
const items = [{
  label: 'Is this actually AI or just marketing BS?',
  defaultOpen: true,
  content: 'It\'s real AI. The same tech that powers movie studios and game companies, just way easier to use. We\'ve spent 2 years building a custom neural network specifically for 3D generation.'
}, {
  label: 'What if my image is terrible quality?',
  content: 'Our AI is surprisingly good with rough images. But better photos = better 3D models. We recommend clear, well-lit images for best results.'
}, {
  label: 'How long does it actually take?',
  content: 'Usually 2-3 minutes. Sometimes faster if the servers are feeling generous. We\'ll show you real-time progress updates.'
}, {
  label: 'Can I use this for commercial stuff?',
  content: 'Absolutely. That\'s literally what most people use it for. All generated models are yours to use however you want.'
}, {
  label: 'What happens to the 10% that don\'t work?',
  content: 'You get your credits back. We only charge for results you can actually use. No broken models, no wasted credits.'
}, {
  label: 'What file formats do I get?',
  content: 'GLB files that work everywhere - Blender, Unity, web browsers, AR apps. Proper topology, clean geometry, industry-standard format.'
},{
  label: 'What are the multiview images you mentioned?',
  content: 'We generate 4 different camera angles of your object (front, back, left, right) before creating the 3D model. This gives us much better spatial understanding and produces higher quality geometry. You get these images as PNG files alongside your 3D model at no extra cost.'
}]
</script>
<template>
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{
        rounded: 'rounded-xl',
        padding: {
          sm: 'p-[20px]'
        },
      }">
        <span class="truncate text-xl">{{ item.label }}</span>
        <template #trailing>
          <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
          />
        </template>
      </UButton>
    </template>
    <template #item="{ item, index }">
      <div :class="{ 'text-[14px]': index === 0 }" class="p-4">
        {{ item.content }}
      </div>
    </template>
  </UAccordion>
</template>