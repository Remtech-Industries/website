<template>
  <div class="flex flex-col max-w-full pt-12 md:pt-18 lg:pt-24 xl:pt-32 pb-6 md:pb-9 lg:pb-12 xl:pb-16">
    <div class="flex justify-between items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 pr-4 md:pr-8 lg:pr-12 xl:pr-16">
      <h2 class="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight sora ml-4 md:ml-8 lg:ml-12 xl:ml-16">{{ props.header }}</h2>
      <div class="flex justify-end">
        <button class="relative py-6 ml-6 lg:ml-12" @click="left">
          <span class="block w-8 lg:w-12 2xl:w-16 border-color-unset border-b-2"></span>
          <span class="block w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 border-color-unset border-b-2 border-l-2 rotate-45 absolute top-1/2 left-0.5 lg:left-1 -translate-y-1/2"></span>
        </button>
        <button class="relative py-6 ml-6 lg:ml-12" @click="right">
          <span class="block w-8 lg:w-12 2xl:w-16 border-color-unset border-b-2"></span>
          <span class="block w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 border-color-unset border-t-2 border-r-2 rotate-45 absolute top-1/2 right-0.5 lg:right-1 -translate-y-1/2"></span>
        </button>
      </div>
    </div>
    <ul class="flex justify-start w-full overflow-x-auto pb-6 md:pb-8 lg:pb-12 xl:pb-16" ref="gallery">
      <li v-for="(image, index) in props.images" class="w-2/5 sm:w-1/3 md:w-1/4 max-w-96 shrink-0" :class="index === props.images.length - 1 ? 'mr-4 md:mr-8 lg:mr-12 xl:mr-16' : (index === 0 ? 'mr-2 md:mr-4 lg:mr-8 xl:mr-12 ml-4 md:ml-8 lg:ml-12 xl:ml-16' : 'mr-2 md:mr-4 lg:mr-8 xl:mr-12')">
        <img :src="image.src" :alt="image.desc" class="w-full h-auto">
        <span class="block mt-4 text-xs/none sm:text-sm/none 2xl:text-base/none">{{ image.desc }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(['header', 'images'])
const gallery = useTemplateRef('gallery')

function scroll(el, distance, left = false, time = 100) {
  if (distance > 0) {
    const tickTime = 10
    const tickCount = (time / tickTime)
    const scrollPerTick = distance / tickCount
    el.scrollBy({
      left: left ? -scrollPerTick : scrollPerTick
    })
    window.setTimeout(() => {
      scroll(el, distance - scrollPerTick, left, time - tickTime)
    }, tickTime)
  }
}

function left() {
  scroll(gallery.value, gallery.value.clientWidth * 3 / 4, true)
}

function right() {
  scroll(gallery.value, gallery.value.clientWidth * 3 / 4)
}
</script>
