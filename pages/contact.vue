<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <div class="md:min-h-svh flex flex-col bg-yellow-50">
            <Header @open="menuIsOpen = true" @close="menuIsOpen = false" class="absolute w-full" menuclass="bg-yellow-300" />
            <div class="flex flex-col md:flex-row items-stretch flex-grow" v-show="!menuIsOpen">
                <div class="md:w-3/5 flex flex-col justify-center items-stretch pt-24 pb-16 lg:pt-28 lg:pb-24 xl:pt-36 xl:pb-32 2xl:pt-44 px-4 md:px-8 lg:px-12 xl:px-16">
                    <h2 class="text-4xl/tight md:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight 2xl:text-8xl/tight sora mb-8 lg:mb-12 xl:mb-16">Your New Go-To Supplier Awaits. Get a Quote Today.</h2>
                    <div class="underline">
                        <a href="tel:+15197733459" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">+1 (519) 773-3459</a>
                        <a href="mailto:rfq@remtechindustries.com" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">rfq@remtechindustries.com</a>
                        <a href="https://maps.app.goo.gl/NqjaYQquZcUZ1Vp29" target="_blank" rel="nofollow" class="mr-20 2xl:mr-32 text-nowrap inline-block">Located in Ontario, Canada</a>
                    </div>
                </div>
                <div class="bg-yellow-300 md:w-2/5 flex flex-col justify-center items-stretch py-8 md:pt-24 lg:pt-28 lg:pb-12 xl:pt-36 xl:pb-16 2xl:pt-44 px-4 lg:px-6 xl:px-8">
                    <ContactForm class="form-yellow" />
                </div>
            </div>
            <Footer v-show="!menuIsOpen" />
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Contact',
    ogTitle: 'Contact',
    description: 'Your new go-to supplier awaits. Reach out today and get a free quote.',
    ogDescription: 'Your new go-to supplier awaits. Reach out today and get a free quote.',
    ogImage: '/images/og/contact.png',
    twitterImage: '/images/og/contact.png'
})

let menuIsOpen = ref(false)
</script>
