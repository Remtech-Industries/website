<template>
  <div class="relative pt-12 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-40">
    <div class="flex sticky lg:relative z-10 top-0 justify-between items-center bg-gray-50 py-2 md:py-4 lg:py-6 xl:py-8 px-4 md:px-8 lg:px-12 xl:px-16">
      <h2 class="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora">Material Inventory</h2>
      <div class="flex justify-end flex-wrap sm:flex-nowrap" v-if="hasScroll">
        <button class="relative py-4 md:py-6 ml-6 lg:ml-12" @click="left" aria-label="scroll table left">
          <span class="block w-8 lg:w-12 2xl:w-16 border-color-unset border-b-2"></span>
          <span class="block w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 border-color-unset border-b-2 border-l-2 rotate-45 absolute top-1/2 left-0.5 lg:left-1 -translate-y-1/2"></span>
        </button>
        <button class="relative py-4 md:py-6 ml-6 lg:ml-12" @click="right" aria-label="scroll table right">
          <span class="block w-8 lg:w-12 2xl:w-16 border-color-unset border-b-2"></span>
          <span class="block w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 border-color-unset border-t-2 border-r-2 rotate-45 absolute top-1/2 right-0.5 lg:right-1 -translate-y-1/2"></span>
        </button>
      </div>
    </div>
    <div class="w-full">
      <div class="overflow-x-auto px-4 md:px-8 lg:px-12 xl:px-16" ref="table">
        <table class="min-w-full text-nowrap text-left text-xs xl:text-sm 2xl:text-base mb-2 md:mb-4 lg:mb-6 xl:mb-8">
          <tbody>
            <template v-for="materialGroup in materialGroups">
              <tr class="bg-blue-900 text-gray-50 border-blue-900 border-x-2">
                <th colspan="2" :id="materialGroup.headingId" class="pb-1 lg:pb-2 pt-3 lg:pt-4"><span class="sticky left-0 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-2">{{ materialGroup.title }}</span></th>
              </tr>
              <tr class="bg-blue-900 text-gray-50 border-blue-900 border-x-2">
                <th :id="materialGroup.headingId + 'materialgrade'" class="p-2 w-2/3">Material Grade * (AISI/ASTM/SAE)</th>
                <!-- <th :id="materialGroup.headingId + 'unsno'" class="p-2">UNS No.</th> -->
                <!-- <th :id="materialGroup.headingId + 'dinenno'" class="p-2">DIN / EN No.</th> -->
                <th :id="materialGroup.headingId + 'viewstock'" class="p-2 w-1/3">View Stock</th>
              </tr>
              <template v-for="(material, i) in materialGroup.materials">
                <tr :class="selectedMaterial === material.headingId ? 'bg-blue-800 text-gray-50 border-blue-800 border-x-2 font-bold' : (i % 2 === 1 ? 'bg-gray-100 border-gray-100 border-x-2' : 'border-gray-50 border-x-2')">
                  <td :id="material.headingId" :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'materialgrade'" class="p-2">{{ material.title }}</td>
                  <!-- <td :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'unsno'" class="p-2">[missing]</td> -->
                  <!-- <td :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'dinenno'" class="p-2">[missing]</td> -->
                  <td v-if="selectedMaterial === material.headingId" :headers="material.headingId + ' ' + materialGroup.headingId + ' ' + materialGroup.headingId + 'viewstock'" class="p-2"><button @click="selectedMaterial = null" class="underline">Close</button></td>
                  <td v-else :headers="material.headingId + ' ' + materialGroup.headingId + ' ' + materialGroup.headingId + 'viewstock'" class="p-2"><button @click="selectedMaterial = material.headingId" v-if="material.parts.length > 0" class="underline">View Stock</button></td>
                </tr>
                <tr v-show="selectedMaterial === material.headingId" class="bg-blue-800 text-gray-50 border-blue-800 border-x-2">
                  <th :id="material.headingId + 'size'" class="py-2 px-6">Size</th>
                  <th :id="material.headingId + 'stock'" class="py-2 px-6">Stock</th>
                </tr>
                <tr v-show="selectedMaterial === material.headingId" v-for="(part, i) in material.parts" class="border-blue-800 border-x-2" :class="(i + 1 === material.parts.length ? 'border-b-2' : '') + ' ' + (i % 2 === 1 ? ' bg-gray-100' : '')">
                  <td :headers="material.headingId + ' ' + material.headingId + 'size'" class="py-2 px-6">{{ part.partno }}</td>
                  <td :headers="material.headingId + ' ' + material.headingId + 'stock'" class="py-2 px-6">{{ part.total_quantity }}" in stock</td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <p class="text-xs mb-8 md:mb-12 lg:mb-16 xl:mb-18 2xl:mb-24 px-4 md:px-8 lg:px-12 xl:px-16">* Grade Names shown may be proprietary or registered ® trademarks and are used for reference only. Actual material stocked may be a close equivalent rather than the exact brand. Certification available for review.</p>
    <p class="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold px-4 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 lg:mb-16 xl:mb-18 2xl:mb-24">Looking for something else? <NuxtLink to="/contact" class="underline">Contact</NuxtLink> us and let us help you find the solution you need.</p>
  </div>
</template>

<script setup>
const table = useTemplateRef('table')
const hasScroll = ref(false)
const selectedMaterial = ref('')
const materialGroups = ref([])

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
  scroll(table.value, table.value.clientWidth * 3 / 4, true)
}

function right() {
  scroll(table.value, table.value.clientWidth * 3 / 4)
}

function showHideArrows() {
  if (table.value) {
    if (table.value.scrollWidth - table.value.clientWidth > 50) {
      hasScroll.value = true
    } else {
      hasScroll.value = false
    }
  }
}
onMounted(() => {
  window.setTimeout(showHideArrows, 1)
  window.addEventListener('resize', showHideArrows)
})

const res = await useAsyncData(
  'materialGroups',
  () => $fetch('https://data.remtechalloys.com/material_info.json')
)
materialGroups.value = res.data.value.material_groups.map(materialGroup => {
  materialGroup.headingId = materialGroup.title.replaceAll(' ', '_').replaceAll(',', '').toLowerCase()
  materialGroup.materials = materialGroup.materials.map(material => {
    material.headingId = material.title.replaceAll(' ', '_').replaceAll(',', '').toLowerCase()
    return material
  })
  return materialGroup
})
</script>
