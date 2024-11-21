<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
        <div class="flex justify-center">
            <div class="max-w-screen-2xl w-full px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-4 lg:mb-6 xl:mb-8">Sitemap</h1>
                <ul class="mb-8 lg:mb-12 xl:mb-16 bullet-list">
                    <li><NuxtLink to="/" class="underline">Home</NuxtLink></li>
                    <li><NuxtLink to="/machining" class="underline">Machining</NuxtLink></li>
                    <li><NuxtLink to="/thermal-spray" class="underline">Thermal Spray</NuxtLink></li>
                    <li><NuxtLink to="/alloys" class="underline">Alloys</NuxtLink></li>
                    <li><NuxtLink to="/quality" class="underline">Quality</NuxtLink></li>
                    <li><NuxtLink to="/about" class="underline">About</NuxtLink></li>
                    <li><NuxtLink to="/contact" class="underline">Contact</NuxtLink></li>
                    <li><NuxtLink to="/terms-and-conditions" class="underline">Terms & Conditions</NuxtLink></li>
                    <li><NuxtLink to="/privacy-policy" class="underline">Privacy Policy</NuxtLink></li>
                    <li><NuxtLink to="/cookie-policy" class="underline">Cookie Policy</NuxtLink></li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
let menuIsOpen = ref(false)
</script>
