<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <div class="relative h-svh bg-materials-blue text-gray-50">
            <Header @open="menuIsOpen = true" @close="menuIsOpen = false" :alloys="true" menuclass="bg-blue-900 text-gray-50" />
            <span class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl block sora mb-2 lg:mb-4 xl:mb-6">
                    High-Quality Steels and Alloys for All Your Industrial Needs
                </h1>
                <p class="mx-4 md:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10">Source custom-sized, hard-to-find materials with full traceability from Rem-Tech Industries - Your trusted specialty alloys provider. <NuxtLink to="/contact" class="underline">Get a Quote Today for Your Alloy Needs.</NuxtLink></p>
            </span>
        </div>
        <div class="flex justify-center bg-drawing-3">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h2 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-8 lg:mb-12 xl:mb-16">Find the Perfect Alloy for Your Next Project</h2>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Superior Stainless Steels and Specialty Alloys for Demanding Applications</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Rem-Tech Industries offers a wide range of stainless steels and specialty alloys tailored to your specifications, with full traceability. Our materials are designed for industries requiring top-tier durability, corrosion resistance, and heat tolerance.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Engineered for Performance</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">From naval to energy, our high-performance alloys thrive in challenging conditions, extending component lifespan and ensuring reliability. We source hard-to-find alloys, cut to your needs and deliver quickly, ensuring the right material for every project.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Why Rem-Tech Industries?</h3>
                <p class="mb-4 lg:mb-6 xl:mb-8">Our extensive inventory and expert team provide custom-sized, fully traceable alloys for your critical applications. We ensure seamless service and fast delivery to keep your projects on track.</p>
                <h4 class="font-bold">Custom-Sized Materials</h4>
                <p class="mb-4 lg:mb-6 xl:mb-8">Get the exact dimensions you need for your projects, reducing waste and machining time.</p>
                <h4 class="font-bold">Extensive Selection</h4>
                <p class="mb-4 lg:mb-6 xl:mb-8">Choose from a wide range of alloys, from stainless steels to super alloys and exotic materials, all in one place.</p>
                <h4 class="font-bold">Full Traceability</h4>
                <p class="mb-4 lg:mb-6 xl:mb-8">Every batch of material is traceable by heat number, ensuring compliance and reliability.</p>
                <h4 class="font-bold">Superior Quality</h4>
                <p class="mb-4 lg:mb-6 xl:mb-8">High-performance materials that meet or exceed industry standards, ensuring long-lasting performance.</p>
                <h4 class="font-bold">Reliable Availability</h4>
                <p class="mb-8 lg:mb-12 xl:mb-16">Access hard-to-find materials quickly, so you can avoid project delays.</p>
                <NuxtLink to="/contact" class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue-900 underline">Get Your Material Solution Today.</NuxtLink>
            </div>
        </div>
        <div class="bg-blue-900 text-gray-50 flex justify-center">
            <div class="flex flex-col py-16 xl:py-24 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <span class="text-xl/tight md:text-2xl/tight lg:text-3xl/tight xl:text-4xl/tight 2xl:text-5xl/tight sora mb-4 lg:mb-8">"RemTech is our best supplier, meeting and exceeding all of our expectations - immediate response to all of our enquiries, and same day shipping for our emergency orders - you help us keep our customers up and running."</span>
                <span class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">- Carole Fitzgerald</span>
                <span>(Flowserve)</span>
            </div>
        </div>
        <MaterialList />
        <div class="relative">
            <div class="md:w-3/5 min-h-dvh flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                <h2 class="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight sora mb-8 lg:mb-12 xl:mb-16">Alloy Frequently Asked Questions</h2>
                <ul>
                    <li v-for="(faq, index) in faqs">
                        <button @click="selectedFaqIndex = index" class="text-left py-4 w-full" :class="selectedFaqIndex === index ? 'font-bold bg-red-700 md:bg-opacity-0 text-gray-50 md:text-gray-950 px-4 md:px-0 text-xl mt-4 md:mt-0' : 'text-lg'">{{ faq.q }}</button>
                        <div class="md:h-full md:absolute md:top-0 md:right-0 md:w-2/5 pb-4 mb-4 bg-red-700 text-gray-50" v-show="selectedFaqIndex === index">
                            <div class="md:h-dvh md:flex md:flex-col md:justify-center md:sticky md:top-0">
                                <div class="max-h-full overflow-y-auto md:py-8 lg:py-12 xl:py-16 px-4 lg:px-6 xl:px-8">
                                    <h3 class="hidden md:block text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 2xl:mb-10">{{ faq.q }}</h3>
                                    <p class="md:text-lg lg:text-xl 2xl:text-2xl mb-6 2xl:mb-10">{{ faq.a }}</p>
                                    <NuxtLink to="/contact" class="text-lg md:text-xl xl:text-2xl 2xl:text-3xl underline font-bold">Request a Free Quote Today.</NuxtLink>
                                </div>
                            </div>
                        </div>
                        <span class="block w-1/3 border-b-2 border-gray-950 max-w-52" v-if="index !== faqs.length - 1"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="md:min-h-svh flex flex-col bg-blue-50">
            <div class="flex flex-col md:flex-row items-stretch flex-grow">
                <div class="md:w-3/5 md:order-1 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <h2 class="text-4xl/tight md:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight 2xl:text-8xl/tight sora mb-8 lg:mb-12 xl:mb-16">Your New Go-To Supplier Awaits. Get a Quote Today.</h2>
                    <div class="underline">
                        <a href="tel:+15197733459" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">+1 (519) 773-3459</a>
                        <a href="mailto:rfq@remtechindustries.com" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">rfq@remtechindustries.com</a>
                        <a href="https://maps.app.goo.gl/NqjaYQquZcUZ1Vp29" target="_blank" rel="nofollow" class="mr-20 2xl:mr-32 text-nowrap inline-block">Located in Ontario, Canada</a>
                    </div>
                </div>
                <div class="bg-blue-900 md:w-2/5 flex flex-col justify-center items-stretch text-gray-50 py-8 lg:py-12 xl:py-16 px-4 lg:px-6 xl:px-8">
                    <ContactForm class="form-blue" />
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Alloys',
    ogTitle: 'Alloys',
    description: 'High-Quality Steels and Alloys for All Your Industrial Needs. Source custom-sized, hard-to-find materials with full traceability from Rem-Tech Industries - Your trusted specialty alloys provider.',
    ogDescription: 'High-Quality Steels and Alloys for All Your Industrial Needs. Source custom-sized, hard-to-find materials with full traceability from Rem-Tech Industries - Your trusted specialty alloys provider.',
    ogImage: '/images/og/alloys.png',
    twitterImage: '/images/og/alloys.png'
})

let menuIsOpen = ref(false)
const faqs = [
    {
        q: 'What types of stainless steels and specialty alloys do you offer?',
        a: 'We offer a wide range of stainless steels and specialty alloys, including heat-resistant, corrosion-resistant, and high-strength grades. Our inventory includes alloys for nuclear, energy, chemical processing, and other demanding industries.'
    },
    {
        q: 'Can you provide custom-sized materials?',
        a: 'Yes, we can cut our stainless steels and specialty alloys to your exact specifications, ensuring you receive the material ready for use in your project.'
    },
    {
        q: 'Are your materials fully traceable?',
        a: 'All of our materials come with full traceability, giving you confidence in their origin and quality. We maintain strict quality control and documentation throughout the sourcing process.'
    },
    {
        q: 'What industries do you serve?',
        a: 'We serve a wide range of industries, including nuclear, energy, marine, automotive, and chemical processing. Our materials are engineered to perform in the most demanding environments.'
    },
    {
        q: 'How quickly can you deliver materials?',
        a: 'We offer fast delivery options to meet tight deadlines. Lead times vary depending on material availability and customization needs, but we work to provide the fastest possible turnaround.'
    },
    {
        q: 'How do I choose the right alloy for my application?',
        a: 'Our experts are here to help! We can assist you in selecting the most suitable alloy based on your specific application, considering factors like temperature, corrosion resistance, and strength requirements.'
    },
    {
        q: 'Do you offer support for special projects or custom requirements?',
        a: 'Absolutely. We work closely with our clients to meet the needs of custom and specialized projects. Contact us to discuss your specific requirements, and we\'ll find the best solution for you.'
    },
    {
        q: 'Can I place a small order, or do you have minimum order quantities?',
        a: 'We offer flexibility in order quantities, whether you need a small batch or a large supply. Reach out to us to discuss your project\'s specific needs.'
    },
]
const selectedFaqIndex = ref(0)
</script>
