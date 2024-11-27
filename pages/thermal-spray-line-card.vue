<template>
  <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
    <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
    <div class="flex justify-end px-4 md:px-8 lg:px-12 xl:px-16 print:hidden">
      <button @click="print" class="underline font-bold">Print Line Card</button>
    </div>
    <div class="px-4 md:px-8 lg:px-12 xl:px-16">
      <h1 class="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora my-8">Thermal Spray Line Card</h1>
    </div>
    <div class="flex px-4 md:px-8 lg:px-12 xl:px-16 mb-8 page-break-after">
      <div class="w-1/2 mr-2">
        <h2 class="sora text-2xl lg:text-4xl xl:text-5xl mb-4">High Velocity Oxygen Fuel</h2>
        <p class="mb-2">The HVOF (High Velocity Oxy-Fuel) system uses a high velocity, low temperature process to produce hard face surfaces which help protect components against wear and corrosion.</p>
        <img src="/images/thermal-spray/hvof-gun-diagram.jpg" alt="HVOF Gun Function Diagram" class="mb-2">
        <img src="/images/thermal-spray/hvof-gun-robot.jpg" alt="HVOF Gun">
      </div>
      <div class="w-1/2 ml-2">
        <h2 class="sora text-2xl lg:text-4xl xl:text-5xl mb-4">Plasma</h2>
        <p class="mb-2">The Plasma process utilizes the heat of an inert ionized gas to create thermal energy to melt and propel ceramic powders onto surfaces creating extremely hard, dense, wear and corrosion resistant coatings.</p>
        <img src="/images/thermal-spray/plasma-gun-diagram.jpg" alt="Plasma Gun Function Diagram" class="mb-2">
        <img src="/images/thermal-spray/plasma-gun-robot.jpg" alt="Plasma Gun">
      </div>
    </div>
    <CoatingList />
    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
    title: 'Thermal Spray Line Card',
    ogTitle: 'Thermal Spray Line Card',
    description: 'Rem-Tech Industries offers cutting-edge thermal spray coating services using both High Velocity Oxy-Fuel (HVOF) and Plasma Spray technologies. Our solutions provide wear resistance, corrosion protection, and extended durability, ensuring your equipment performs reliably under the most extreme conditions. From oil and gas to nuclear applications, our coatings are designed to meet the rigorous demands of modern industries.',
    ogDescription: 'Rem-Tech Industries offers cutting-edge thermal spray coating services using both High Velocity Oxy-Fuel (HVOF) and Plasma Spray technologies. Our solutions provide wear resistance, corrosion protection, and extended durability, ensuring your equipment performs reliably under the most extreme conditions. From oil and gas to nuclear applications, our coatings are designed to meet the rigorous demands of modern industries.',
    ogImage: '/images/og/thermal-spray-line-card.png',
    twitterImage: '/images/og/thermal-spray-line-card.png'
})

let menuIsOpen = ref(false)

function print() {
  window.print()
}
</script>
