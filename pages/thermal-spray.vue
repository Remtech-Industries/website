<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <div class="relative h-svh bg-thermal-spray-gun-yellow">
            <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-yellow-300" />
            <span class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl block sora mb-2 lg:mb-4 xl:mb-6">
                    Thermal Spray Coatings for Superior Durability
                </h1>
                <p class="mx-4 md:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10">Enhance your critical components with advanced thermal spray coatings from Rem-Tech Industries. <NuxtLink to="/contact" class="underline">Call Us Today</NuxtLink> for a free quote today.</p>
            </span>
        </div>
        <div class="flex justify-center">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h2 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-8 lg:mb-12 xl:mb-16">Maximize Component Lifespan with Advanced Coatings</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">Rem-Tech Industries offers cutting-edge thermal spray coating services using both High Velocity Oxy-Fuel (HVOF) and Plasma Spray technologies. Our solutions provide wear resistance, corrosion protection, and extended durability, ensuring your equipment performs reliably under the most extreme conditions. From oil and gas to nuclear applications, our coatings are designed to meet the rigorous demands of modern industries.</p>
                <p class="underline mb-8 lg:mb-12 xl:mb-16 text-lg md:text-xl xl:text-2xl 2xl:text-3xl"><NuxtLink to="/contact">Get a Free Quote Today</NuxtLink></p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Enhanced Durability</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Significantly extends the life of components, reducing the need for frequent replacements.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Corrosion Resistance</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Provides long-lasting protection against corrosive environments, ideal for industries like naval and power generation.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Improved Efficiency</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Minimize downtime and boost operational efficiency with reliable, high-performance coatings.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Customizable Solutions</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">All coatings adhere to ISO 9001:2015 and CSA N299.3 (for nuclear) standards, ensuring top-tier performance and safety.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Certified Quality</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our lapping services provide ultra-flat and highly polished surfaces for components that require extreme precision and smoothness, ensuring the highest quality finish.</p>
                <a class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-yellow-700 underline">View Our Thermal Spray Capabilities Datasheet</a>
            </div>
        </div>
        <div class="bg-yellow-300 flex justify-center">
            <div class="flex flex-col py-16 xl:py-24 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <span class="text-xl/tight md:text-2xl/tight lg:text-3xl/tight xl:text-4xl/tight 2xl:text-5xl/tight sora mb-4 lg:mb-8">"I have not come across any of our suppliers that gives us the quality and service that RemTech provides us. RemTech raises the bar on anyone else when it comes to customer service and the absolute friendliest atmosphere which makes it a pleasure to work with."</span>
                <span class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">- Brian Gallen</span>
                <span>(Flowserve)</span>
            </div>
        </div>
        <div class="flex justify-center bg-drawing-2">
            <div class="max-w-screen-2xl overflow-hidden px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h2 class="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl sora mb-4 lg:mb-6 xl:mb-8">Thermal Spray Technical Information</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">At Rem-Tech Industries, our thermal spray coating services use state-of-the-art HVOF and plasma spray technologies to apply a wide range of coatings, including tungsten carbide, chromium carbide, nickel chrome boron silicon, inconel, and more. Our coatings are known for their extreme wear resistance, high density, and hardness, making them ideal for high-stress environments like oil & gas, power generation, and pharmaceutical industries.</p>
                <h3 class="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl sora mb-4 lg:mb-6 xl:mb-8">How It Works</h3>
                <p class="mb-4 lg:mb-6 xl:mb-8">Our HVOF (High Velocity Oxygen Fuel) system delivers particles at high-velocity, low-temperature to produce coatings that form ultra-hard surfaces, shielding your components from wear and corrosion for longer-lasting performance.</p>
                <p class="mb-8 lg:mb-12 xl:mb-16">The APS Plasma process utilizes the heat of an inert ionized gas to create thermal energy to melt and propel ceramic powder onto surfaces, creating exceptionally hard, dense, and corrosion-resistant protective coatings that extend the life of your critical components.</p>
                <a class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-yellow-700 underline">View Our Thermal Spray Capabilities Datasheet</a>
            </div>
        </div>
        <div class="bg-yellow-300 text-gray-950 flex justify-center">
            <Carousel header="Coated Parts" :images="galleryImages" />
        </div>
        <CoatingList />
        <div class="relative">
            <div class="md:w-3/5 min-h-dvh flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                <h2 class="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight sora mb-8 lg:mb-12 xl:mb-16">Thermal Spray Frequently Asked Questions</h2>
                <ul>
                    <li v-for="(faq, index) in faqs">
                        <button @click="selectedFaqIndex = index" class="text-left py-4 w-full" :class="selectedFaqIndex === index ? 'font-bold bg-blue-900 md:bg-opacity-0 text-gray-50 md:text-gray-950 px-4 md:px-0 text-xl mt-4 md:mt-0' : 'text-lg'">{{ faq.q }}</button>
                        <div class="md:h-full md:absolute md:top-0 md:right-0 md:w-2/5 pb-4 mb-4 bg-blue-900 text-gray-50" v-show="selectedFaqIndex === index">
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
        <div class="md:min-h-svh flex flex-col bg-yellow-50">
            <div class="flex flex-col md:flex-row items-stretch flex-grow">
                <div class="md:w-3/5 md:order-1 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <h2 class="text-4xl/tight md:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight 2xl:text-8xl/tight sora mb-8 lg:mb-12 xl:mb-16">Your New Go-To Supplier Awaits. Get a Quote Today.</h2>
                    <div class="underline">
                        <a href="tel:+15197733459" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">+1 (519) 773-3459</a>
                        <a href="mailto:rfq@remtechindustries.com" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">rfq@remtechindustries.com</a>
                        <a href="https://maps.app.goo.gl/NqjaYQquZcUZ1Vp29" target="_blank" rel="nofollow" class="mr-20 2xl:mr-32 text-nowrap inline-block">Located in Ontario, Canada</a>
                    </div>
                </div>
                <div class="bg-yellow-300 md:w-2/5 flex flex-col justify-center items-stretch py-8 lg:py-12 xl:py-16 px-4 lg:px-6 xl:px-8">
                    <ContactForm class="form-yellow" />
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
let menuIsOpen = ref(false)
const galleryImages = [
    {
        src: '/images/gallery-thermal-spray/wc-cover-gun.jpg',
        desc: 'Tungsten carbide (WC) coating application for enhanced wear resistance, shown with precise spraying equipment.'
    },
    {
        src: '/images/gallery-thermal-spray/cr2o3-sleeve.jpg',
        desc: 'Chromium oxide (Cr2O3) coated sleeve offering excellent corrosion and abrasion resistance in harsh environments.'
    },
    {
        src: '/images/gallery-thermal-spray/cr2o3.jpg',
        desc: 'Chromium oxide-coated part, highlighting durability in high-wear industrial applications.'
    },
    {
        src: '/images/gallery-thermal-spray/wc-shaft.jpg',
        desc: 'Tungsten carbide-coated shaft, designed for extended service life under abrasive conditions.'
    },
    {
        src: '/images/gallery-thermal-spray/cr2o3-part.jpg',
        desc: 'Chromium oxide-coated component, providing robust protection against wear and corrosion.'
    },
    {
        src: '/images/gallery-thermal-spray/wc-impeller.jpg',
        desc: 'Tungsten carbide-coated impeller, engineered for improved performance in abrasive fluid handling.'
    },
    {
        src: '/images/gallery-thermal-spray/wc-pump-cover.jpg',
        desc: 'Tungsten carbide-coated pump cover, designed to resist erosion and wear in demanding conditions.'
    },
    {
        src: '/images/gallery-thermal-spray/multiple-coatings.jpg',
        desc: 'Component with multiple coatings for enhanced protection, showcasing various layers for specialized applications.'
    }
]
const faqs = [
    {
        q: 'What is thermal spray coating, and how does it benefit my equipment?',
        a: 'Thermal spray coating involves applying a protective layer to your equipment using advanced technologies like HVOF and APS Plasma. This process significantly enhances wear resistance, corrosion protection, and durability, extending the life of your critical components and reducing maintenance costs.'
    },
    {
        q: 'Which industries can benefit from thermal spray coatings?',
        a: 'Our thermal spray coatings are ideal for industries like oil & gas, pharmaceuticals, naval, power generation, and heavy machinery—anywhere that equipment faces extreme conditions like high temperatures, abrasion, or corrosive environments.'
    },
    {
        q: 'What materials do you use in your thermal spray coatings?',
        a: 'We offer a wide variety of coatings, including tungsten carbide, chromium carbide, nickel chrome boron silicon, inconel, and chromium oxide, each designed to provide maximum protection against wear, corrosion, and environmental stresses.'
    },
    {
        q: 'How long will thermal spray coatings last on my components?',
        a: 'The lifespan of our coatings depends on the application and operating conditions. However, our coatings are engineered for long-term durability, often extending the life of components by several years in harsh environments, significantly reducing the need for frequent replacements.'
    },
    {
        q: 'Are your coatings compliant with industry standards?',
        a: 'Yes, all of our thermal spray coatings are compliant with ISO 9001:2015 standards and CSA N299.3 for nuclear applications, ensuring the highest quality and reliability across industries.'
    },
    {
        q: 'Can thermal spray coatings reduce operational downtime?',
        a: 'Absolutely. By enhancing the wear and corrosion resistance of your components, our coatings help reduce equipment failures and maintenance needs, leading to less downtime and increased productivity.'
    },
    {
        q: 'What is the difference between HVOF and APS Plasma spray coatings?',
        a: 'HVOF is a high-velocity, low-temperature process that creates extremely hard surfaces, ideal for wear and corrosion protection. APS Plasma uses thermal energy to apply ceramic coatings that are extremely hard and dense, offering superior protection in highly abrasive or corrosive environments.'
    },
    {
        q: 'How can I determine which coating is right for my application?',
        a: 'Our experts are here to help! Reach out for a consultation, and we’ll recommend the best coating solution based on your specific industry needs, operating environment, and equipment requirements.'
    },
    {
        q: 'How quickly can you apply thermal spray coatings?',
        a: 'Lead times vary based on the project scope, but we pride ourselves on efficient turnaround times. For urgent needs, please contact us to discuss expedited service options.'
    },
    {
        q: 'What are the environmental benefits of thermal spray coatings?',
        a: 'Thermal spray coatings help extend the life of components, reducing the need for frequent replacements and minimizing waste. We also use environmentally friendly materials and processes, supporting sustainable operations.'
    },
]
const selectedFaqIndex = ref(0)
</script>
