<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <div class="relative h-svh">
            <video autoplay muted loop playsinline class="absolute w-full h-full top-0 left-0 object-cover opacity-50 pointer-events-none" aria-hidden="true" v-show="!menuIsOpen">
                <source src="/video.webm" type="video/webm">
                <source src="/video.mp4" type="video/mp4">
            </video>
            <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
            <h1 v-show="!menuIsOpen" class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl block sora mb-2 lg:mb-4 xl:mb-6">
                    <NuxtLink to="/machining" class="inline-block mb-2 mx-4 md:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10 underline">Machining&ZeroWidthSpace;</NuxtLink>
                    <NuxtLink to="/thermal-spray" class="inline-block mb-2 mx-4 md:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10 underline">Thermal&nbsp;Spray&ZeroWidthSpace;</NuxtLink>
                    <NuxtLink to="/alloys" class="inline-block mb-2 mx-4 md:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10 underline">Alloys</NuxtLink>
                </span>
                <span class="mx-4 md:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10">delivered with unmatched expertise and reliability.</span>
            </h1>
        </div>
        <div v-show="!menuIsOpen">
            <div class="md:min-h-svh flex flex-col md:flex-row items-stretch">
                <div class="bg-red-50 md:w-3/5 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <h2 class="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight sora mb-4 lg:mb-8">Your High-Precision Partner for Mission-Critical Machining.</h2>
                    <p class="mb-4 lg:mb-8">Quality you can trust, speed you can count on. Customers have trusted Rem-Tech for fast, flexible, high-precision machining for over 25 years across many industries, including manufacturing, pharmaceutical, naval, nuclear, heavy machinery, oil, and gas.</p>
                    <span class="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Get Your Custom <NuxtLink to="/machining" class="text-red-700 underline">Machining</NuxtLink> Solution - Learn About Our Process Today</span>
                </div>
                <div class="bg-red-700 bg-part-array-red md:w-2/5 text-right flex flex-col justify-center items-stretch text-gray-50 py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <span class="text-2xl/tight md:text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight 2xl:text-6xl/tight sora mb-4 lg:mb-8">"There is not a supplier that has the service that Rem-Tech does. They far out perform any of our other suppliers."</span>
                    <span class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">- Ron Zacharias</span>
                    <span>(Advanced Stainless)</span>
                </div>
            </div>
            <div class="md:min-h-svh flex flex-col md:flex-row items-stretch">
                <div class="bg-yellow-50 md:order-1 md:w-3/5 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <h2 class="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight sora mb-4 lg:mb-8">Transform Your Products with Thermal Spray. Boost Durability Now.</h2>
                    <p class="mb-4 lg:mb-8">Achieve unbeatable durability and performance. Customers expand their profit margins and sustainability with superior durability, corrosion resistance, and reliability, with Rem-Tech's plasma and high-velocity oxygen-fuel Thermal Spray technologies.</p>
                    <span class="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Discover the Possibilities of <NuxtLink to="/thermal-spray" class="text-yellow-800 underline">Thermal Spray</NuxtLink> Now and Get Your Solution</span>
                </div>
                <div class="bg-yellow-300 bg-thermal-spray-gun-yellow md:w-2/5 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <span class="text-xl/tight md:text-2xl/tight lg:text-3xl/tight xl:text-4xl/tight 2xl:text-5xl/tight sora mb-4 lg:mb-8">"Rem-Tech is the absolute best vendor with whom I work. You always come through for us when we're in a bind. And I trust your quoted delivery times more than anyone."</span>
                    <span class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">- Jason Hughes</span>
                    <span>(EagleBurgmann)</span>
                </div>
            </div>
            <div class="md:min-h-svh flex flex-col md:flex-row items-stretch">
                <div class="bg-blue-50 md:w-3/5 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <h2 class="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight sora mb-4 lg:mb-8">Streamline Your Supply Chain with Our Extensive Material Selection.</h2>
                    <p class="mb-4 lg:mb-8">Sourcing the right materials for your projects can be time-consuming, costly, and complex. At Rem-Tech, we simplify the entire process by offering reliable, traceable, and customizeable solutions. From nickel alloys to carbon steels and non-ferrous materials, we provide the flexibility and reliability you need to meet project demands - on time, every time.</p>
                    <span class="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Explore Our <NuxtLink to="/alloys" class="text-blue-900 underline">Alloys</NuxtLink> Catalog - Find Your Ideal Solution Today.</span>
                </div>
                <div class="bg-blue-900 bg-materials-blue md:w-2/5 text-right flex flex-col justify-center items-stretch text-gray-50 py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <span class="text-xl/tight md:text-2xl/tight lg:text-3xl/tight xl:text-4xl/tight 2xl:text-5xl/tight sora mb-4 lg:mb-8">"I have not come across any of our suppliers that gives us the quality and service that Rem-Tech provides us. Rem-Tech raises the bar on anyone else when it comes to customer service and the friendliest atmosphere which makes them an absolute pleasure to work with."</span>
                    <span class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">- Brian Gallen</span>
                    <span>(Flowserve)</span>
                </div>
            </div>
            <div class="md:min-h-svh bg-community text-center flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16 text-gray-50">
                <h2 class="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight sora mb-4 lg:mb-8">Empowering Communities with Every Partnership.</h2>
                <p class="mb-4 lg:mb-8">At Rem-Tech, we value quality, leadership, and collaboration - both in the workshop and in the community. From investing in the leaders of the next generation through our co-operative education program, to creating 100+ local jobs, to partnering in the construction of a local school, community impact is at the core of who we are.</p>
                <span class="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Meet the people making a difference - <NuxtLink to="/about" class="underline">About</NuxtLink></span>
            </div>
            <div class="md:min-h-svh flex flex-col">
                <div class="flex flex-col md:flex-row items-stretch flex-grow">
                    <div class="bg-red-50 md:w-3/5 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                        <h2 class="text-4xl/tight md:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight 2xl:text-8xl/tight sora mb-8 lg:mb-12 xl:mb-16">Your New Go-To Supplier Awaits. Get a Quote Today.</h2>
                        <div class="underline">
                            <a href="tel:+15197733459" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">+1 (519) 773-3459</a>
                            <a href="mailto:rfq@remtechindustries.com" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">rfq@remtechindustries.com</a>
                            <a href="https://maps.app.goo.gl/NqjaYQquZcUZ1Vp29" target="_blank" rel="nofollow" class="mr-20 2xl:mr-32 text-nowrap inline-block">Located in Ontario, Canada</a>
                        </div>
                    </div>
                    <div class="bg-red-700 md:w-2/5 flex flex-col justify-center items-stretch text-gray-50 py-8 lg:py-12 xl:py-16 px-4 lg:px-6 xl:px-8">
                        <ContactForm class="form-red" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Your Manufacturing Partners',
    ogTitle: 'Your Manufacturing Partners',
    description: 'Rem-Tech delivers machining, thermal spray, and alloys with unmatched expertise and reliability.',
    ogDescription: 'Rem-Tech delivers machining, thermal spray, and alloys with unmatched expertise and reliability.',
    ogImage: '/images/og/index.png',
    twitterImage: '/images/og/index.png'
})

let menuIsOpen = ref(false)
</script>
