<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <div class="relative h-svh bg-measuing-blue text-gray-50">
            <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-blue-900 text-gray-50" />
            <span class="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <h1 class="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl block sora mb-8 sm:my-16 lg:my-24 2xl:my-36">
                    Quality You Can Trust, Every Time
                </h1>
                <p class="sm:w-2/3 lg:w-1/2">At RemTech, quality isn't just a promise—it's the foundation of everything we do. From precision machining to complex projects in the nuclear industry, our commitment to excellence ensures that you receive the highest level of reliability and accuracy, every time.</p>
            </span>
        </div>
        <div class="flex justify-center bg-drawing-5">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h2 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-4 lg:mb-6 xl:mb-8">ISO 9001:2015 Certified for Your Peace of Mind</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">We hold an active ISO 9001:2015 certification, a globally recognized standard for quality management systems. This means our processes are built to consistently meet customer and regulatory requirements, ensuring you get the best results, every time.</p>
                <p class="underline mb-8 lg:mb-12 xl:mb-16 text-lg md:text-xl xl:text-2xl 2xl:text-3xl"><a href="/documents/iso-certification.pdf" target="_blank">View our ISO 9001:2015 Certificate</a></p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Compliant with CSA N299.3-16 for Nuclear Work</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">For projects that require the highest standards, our quality management system is also compliant with CSA N299.3-16, allowing us to confidently handle nuclear work.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Advanced Inspection Capabilities</h3>
                <p class="mb-4 lg:mb-6 xl:mb-8">Our state-of-the-art inspection technology ensures that every component we deliver meets the most stringent specifications. We use a variety of precision instruments and equipment to guarantee accuracy, including:</p>
                <ul class="bullet-list mb-8 lg:mb-12 xl:mb-16">
                    <li>Manual and CNC CMM Machines</li>
                    <li>Optical Comparator</li>
                    <li>Dynamic Form Tester</li>
                    <li>Hardness Tester</li>
                    <li>Universal Pre-setting Gauge</li>
                    <li>XRF Gun for PMI</li>
                    <li>Surface Roughness Tester</li>
                    <li>An array of standard gauges including calipers, micrometers, bore gauges, thread gauges, measuring pins, and more.</li>
                </ul>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Quality Documents</h3>
                <p class="mb-4 lg:mb-6 xl:mb-8">At RemTech, quality drives everything we do. We're dedicated to continual improvement and meeting customer needs with precision and efficiency. Read our full quality documents:</p>
                <ul class="bullet-list">
                    <li><a href="/documents/iso-certification.pdf" target="_blank" class="underline">ISO 9001:2015 Certificate</a></li>
                    <li><a href="/documents/quality-policy.pdf" target="_blank" class="underline">Quality Policy</a></li>
                    <li><a href="/documents/org-chart.pdf" target="_blank" class="underline">Company Organization Chart</a></li>
                    <li><a href="/documents/accessibility-policy.pdf" target="_blank" class="underline">Accessibility Policy</a></li>
                    <li><a href="/documents/accessibility-plan.pdf" target="_blank" class="underline">Multi-Year Accessibility Plan</a></li>
                </ul>
            </div>
        </div>
        <div class="md:min-h-svh flex flex-col bg-red-50">
            <div class="flex flex-col md:flex-row items-stretch flex-grow">
                <div class="md:w-3/5 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
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
</template>

<script setup>
let menuIsOpen = ref(false)
useSeoMeta({
    title: 'Quality',
    ogTitle: 'Quality',
    description: 'Quality you can trust, every time. At RemTech, quality isn\'t just a promise—it\'s the foundation of everything we do. From precision machining to complex projects in the nuclear industry, our commitment to excellence ensures that you receive the highest level of reliability and accuracy, every time.',
    ogDescription: 'Quality you can trust, every time. At RemTech, quality isn\'t just a promise—it\'s the foundation of everything we do. From precision machining to complex projects in the nuclear industry, our commitment to excellence ensures that you receive the highest level of reliability and accuracy, every time.',
    ogImage: '/images/og/quality.png',
    twitterImage: '/images/og/quality.png'
})
</script>
