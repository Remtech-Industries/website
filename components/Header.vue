<template>
    <nav>
        <button @click="skipMenu" class="absolute -translate-y-full p-2 bg-red-700 text-gray-50 focus:translate-y-1 z-50">Skip to content</button>
        <div class="flex justify-between relative items-center p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10" v-show="!menuOpen">
            <NuxtLink to="/alloys" v-if="alloys">
                <img src="/images/logos/alloys-logo.png" alt="The RemTech Industries Logo" class="h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 mr-4 w-auto">
            </NuxtLink>
            <NuxtLink to="/" v-else>
                <img src="/images/logos/logo.png" alt="The RemTech Industries Logo" class="h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 mr-4 w-auto">
            </NuxtLink>
            <ul class="hidden sm:flex print:hidden">
                <li><NuxtLink to="/machining" class="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex h-full items-center">Machining</NuxtLink></li>
                <li><NuxtLink to="/thermal-spray" class="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex h-full items-center">Thermal Spray</NuxtLink></li>
                <li><NuxtLink to="/alloys" class="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex h-full items-center">Alloys</NuxtLink></li>
            </ul>
            <button ref="button" @click="open" class="flex justify-between flex-col h-6 lg:h-7.5 xl:h-9 w-8 lg:w-10 xl:w-12 print:hidden" aria-label="open menu">
                <div class="w-full border-color-unset border-b-2 xl:border-b-3"></div>
                <div class="w-full border-color-unset border-b-2 xl:border-b-3"></div>
                <div class="w-full border-color-unset border-b-2 xl:border-b-3"></div>
            </button>
            <p class="hidden print:block text-right">remtechindustries.com<br>rfq@remtechindustries.com<br>+1 (519) 773-3459</p>
        </div>
        <div v-show="menuOpen" class="fixed top-0 w-full h-dvh z-10 flex flex-col items-center overflow-x-hidden overflow-y-auto" :class="props.menuclass" aria-modal="true" role="dialog">
            <div class="flex justify-between items-start w-full p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
                <div class="sm:flex">
                    <NuxtLink to="/">
                        <img src="/images/logos/logo.png" alt="The RemTech Industries Logo" class="h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 mb-2 sm:mb-0 sm:mr-2 md:mr-3 lg:mr-4 w-auto">
                    </NuxtLink>
                    <NuxtLink to="/alloys">
                        <img src="/images/logos/alloys-logo.png" alt="The RemTech Alloys Logo" class="h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 w-auto">
                    </NuxtLink>
                </div>
                <button @click="close" class="relative h-16 lg:h-18 xl:h-20 w-12 lg:w-16 xl:w-20" aria-label="close menu">
                    <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                </button>
            </div>
            <div class="w-full flex flex-col items-start flex-grow max-w-screen-xl px-4 sm:px-12 md:px-16 lg:px-18 xl:px-24 2xl:px-32 pb-4 sm:pb-12 md:pb-16 lg:pb-18 xl:pb-24 2xl:pb-32">
                <ul class="pb-3 lg:pb-5 xl:pb-7 2xl:pb-8 my-3 lg:my-5 xl:my-7 2xl:my-8 border-color-unset border-b-2 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl sora">
                    <li><NuxtLink to="/machining" class="block py-3 lg:py-5 xl:py-7 2xl:py-8">Machining</NuxtLink></li>
                    <li><NuxtLink to="/thermal-spray" class="block py-3 lg:py-5 xl:py-7 2xl:py-8">Thermal Spray</NuxtLink></li>
                    <li><NuxtLink to="/alloys" class="block py-3 lg:py-5 xl:py-7 2xl:py-8">Alloys</NuxtLink></li>
                </ul>
                <ul class="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl py-1 lg:py-2 xl:py-3 2xl:py-4 columns-2 w-full">
                    <li><NuxtLink to="/" class="block py-2 lg:py-3 xl:py-4">Home</NuxtLink></li>
                    <li><NuxtLink to="/quality" class="block py-2 md:py-3 xl:py-4">Quality</NuxtLink></li>
                    <li><NuxtLink to="/about" class="block py-2 md:py-3 xl:py-4">About</NuxtLink></li>
                    <li><NuxtLink to="/contact" class="block py-2 md:py-3 xl:py-4">Contact</NuxtLink></li>
                    <li><NuxtLink to="/terms-and-conditions" class="block py-2 md:py-3 xl:py-4">Terms & Conditions</NuxtLink></li>
                    <li><NuxtLink to="/privacy-policy" class="block py-2 md:py-3 xl:py-4">Privacy Policy</NuxtLink></li>
                    <li><NuxtLink to="/cookie-policy" class="block py-2 md:py-3 xl:py-4">Cookie Policy</NuxtLink></li>
                    <li><NuxtLink to="/sitemap" class="block py-2 md:py-3 xl:py-4">Sitemap</NuxtLink></li>
                </ul>
            </div>
        </div>
        <div ref="menuend" tabindex="0" aria-label="end of menu"></div>
    </nav>
</template>

<script setup>
const menuOpen = ref(false)
const emit = defineEmits(['open', 'close'])
const props = defineProps(['menuclass', 'alloys'])
const button = useTemplateRef('button')
const menuEnd = useTemplateRef('menuend')

function open() {
    menuOpen.value = true
    emit('open')
}

function close() {
    menuOpen.value = false
    emit('close')
    window.setTimeout(() => {
        button.value.focus()
    }, 1)
}

function skipMenu() {
    menuEnd.value.focus()
}
</script>
