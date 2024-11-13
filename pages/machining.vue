<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <div class="relative h-svh bg-part-array-red text-gray-50">
            <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
            <span class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl block sora mb-2 lg:mb-4 xl:mb-6">
                    Precision Machining Solutions Crafted to Your Needs
                </h1>
                <p class="mx-4 md:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10">Get high-quality results delivered on time, every time. <NuxtLink to="/contact" class="underline">Call Us Today</NuxtLink> to talk to our machining experts.</p>
            </span>
        </div>
        <div class="flex justify-center bg-drawing-1">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h2 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-8 lg:mb-12 xl:mb-16">Key Machining Capabilities</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">For over 25 years, RemTech has delivered fast, high-precision machining to industries like manufacturing, pharmaceutical, oil & gas, nuclear, and more. Our expertise spans components like sleeves, shafts, pump rings, and seal faces.</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">We specialize in rapid-turnaround CNC and manual machining of super alloys and hard-to-machine materials like Stainless Steel, Super Duplex, Titanium, Inconel, and Hastelloy.</p>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our efficient workflow enables us to deliver fast response times, with eight-hour turnarounds for low-volume jobs being a standard at our facility.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">CNC Turning</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our advanced CNC lathes deliver precision cylindrical parts with tight tolerances. Specializing in low-volume production, we handle complex geometries and materials with ease.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">CNC Milling</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">With multi-axis CNC milling capabilities, we can machine intricate parts with high precision, ensuring complex geometries and surfaces are manufactured to your exact specifications.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Electronic Discharge Machining (EDM)</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our EDM services enable us to machine hard metals and intricate parts that are difficult to process with traditional methods, achieving fine details and high accuracy.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Grinding</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">We offer high-precision grinding services to achieve smooth finishes and exact dimensions for parts requiring tight tolerances and superior surface quality.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Lapping</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our lapping services provide ultra-flat and highly polished surfaces for components that require extreme precision and smoothness, ensuring the highest quality finish.</p>
                <a class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-red-700 underline">View Our Machinery Capabilities Datasheet</a>
            </div>
        </div>
        <div class="bg-red-700 flex justify-center">
            <div class="flex flex-col text-gray-50 py-16 xl:py-24 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <span class="text-2xl/tight md:text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight 2xl:text-6xl/tight sora mb-4 lg:mb-8">"There is not a supplier that has the service that RemTech does. They far out perform any of our other suppliers."</span>
                <span class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">- Ron Zacharias</span>
                <span>(Advanced Stainless)</span>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h2 class="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl sora mb-8 lg:mb-12 xl:mb-16">Our Proven Machining Process</h2>
                <h3 class="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl sora mb-4 lg:mb-6 xl:mb-8">1. Consultation</h3>
                <p class="mb-4 lg:mb-6 xl:mb-8">We start with a review of your specifications to fully understand your technical drawings, requirements, and goals. Our team ensures alignment with your project's requirements before moving forward. Reach out to get started today.</p>
                <span class="block mb-8 lg:mb-12 xl:mb-16">
                    <a href="tel:+15197733459" class="mr-20 2xl:mr-32 text-nowrap inline-block underline text-red-700">+1 (519) 773-3459</a>
                    <a href="mailto:rfq@remtechindustries.com" class="text-nowrap inline-block underline text-red-700">rfq@remtechindustries.com</a>
                </span>
                <div class="flex justify-center">
                    <div class="h-0.75 w-1/2 max-w-96 bg-gray-950 mb-8 lg:mb-12 xl:mb-16"></div>
                </div>
                <h3 class="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl sora mb-4 lg:mb-6 xl:mb-8">2. Production Planning</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our experienced team of planners determines the optimal machining processes required to meet your specifications. Using advanced CAD software, we program our lathes and mills for the precise and efficient manufacture of your provided designs.</p>
                <div class="flex justify-center">
                    <div class="h-0.75 w-1/2 max-w-96 bg-gray-950 mb-8 lg:mb-12 xl:mb-16"></div>
                </div>
                <h3 class="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl sora mb-4 lg:mb-6 xl:mb-8">3. Precision Machining</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">With CNC turning, CNC milling, EDM, grinding, and lapping, we machine your components using high-quality materials and cutting-edge technology.</p>
                <div class="flex justify-center">
                    <div class="h-0.75 w-1/2 max-w-96 bg-gray-950 mb-8 lg:mb-12 xl:mb-16"></div>
                </div>
                <h3 class="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl sora mb-4 lg:mb-6 xl:mb-8">4. Quality Assurance</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">Your parts undergo rigorous quality control. We adhere to ISO 9001 and CSA N299 and implement meticulous inspection processes using cutting edge inspection equipment to guarantee flawless results.</p>
                <div class="flex justify-center">
                    <div class="h-0.75 w-1/2 max-w-96 bg-gray-950 mb-8 lg:mb-12 xl:mb-16"></div>
                </div>
                <h3 class="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl sora mb-4 lg:mb-6 xl:mb-8">5. On-Time Delivery</h3>
                <p>We prioritize meeting your deadlines, providing prompt delivery while maintaining the highest quality to support your project timelines.</p>
            </div>
        </div>
        <div class="bg-red-700 text-gray-50 flex justify-center">
            <Carousel header="Machined Parts" :images="galleryImages" />
        </div>
        <div class="relative">
            <div class="md:w-3/5 min-h-dvh flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                <h2 class="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight sora mb-8 lg:mb-12 xl:mb-16">Machining Frequently Asked Questions</h2>
                <ul>
                    <li v-for="(faq, index) in faqs">
                        <button @click="selectedFaqIndex = index" class="text-left py-4 w-full" :class="selectedFaqIndex === index ? 'font-bold bg-yellow-300 md:bg-opacity-0 px-4 md:px-0 text-xl mt-4 md:mt-0' : 'text-lg'">{{ faq.q }}</button>
                        <div class="md:h-full md:absolute md:top-0 md:right-0 md:w-2/5 pb-4 mb-4 bg-yellow-300" v-show="selectedFaqIndex === index">
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
        <div class="md:min-h-svh flex flex-col bg-red-50">
            <div class="flex flex-col md:flex-row items-stretch flex-grow">
                <div class="md:w-3/5 md:order-1 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
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
const galleryImages = [
    {
        src: '/images/gallery-machining/zirconium-702.jpg',
        desc: 'Precision-machined Zirconium 702 component, highlighting exceptional corrosion resistance in demanding environments.'
    },
    {
        src: '/images/gallery-machining/316ss-circulating-feature.jpg',
        desc: 'Titanium impeller with finely crafted blades, optimized for high-performance fluid movement.'
    },
    {
        src: '/images/gallery-machining/super-duplex-255.jpg',
        desc: 'Durable Monel 400 separator, ideal for chemical and marine applications needing corrosion resistance.'
    },
    {
        src: '/images/gallery-machining/super-duplex-sleeve.jpg',
        desc: 'Stainless steel cooling jacket gland with precise tolerances, essential for secure cooling system performance.'
    },
    {
        src: '/images/gallery-machining/water-pump-part.jpg',
        desc: 'Machined component with intricate grooves, enhancing fluid dynamics in complex systems.'
    },
    {
        src: '/images/gallery-machining/16-316ss-circulating-feature-no-2.jpg',
        desc: 'Robust 316 stainless steel double flange, built for secure, leak-proof piping connections.'
    },
    {
        src: '/images/gallery-machining/cast-iron-cover.jpg',
        desc: 'Stainless steel split part designed for seamless assembly with adjacent components.'
    },
    {
        src: '/images/gallery-machining/cast-iron.jpg',
        desc: 'Precisely drilled steel tube sheet for supporting heat exchanger tubes in high-accuracy applications.'
    },
    {
        src: '/images/gallery-machining/cast-iron-chamber.jpg',
        desc: 'Strong steel chuck body with precise surfaces for secure industrial clamping.'
    },
    {
        src: '/images/gallery-machining/1045-steel-wire-roll-chuck-body.jpg',
        desc: 'Super Duplex 255 stainless steel part, combining corrosion resistance with high strength.'
    },
    {
        src: '/images/gallery-machining/steel-tube-sheet.jpg',
        desc: 'Heavy-duty cast iron chamber, suited for high-pressure, high-temperature environments.'
    },
    {
        src: '/images/gallery-machining/split-part.jpg',
        desc: 'Polished super duplex sleeve for harsh conditions, resistant to corrosion and wear.'
    },
    {
        src: '/images/gallery-machining/316ss-double-flange.jpg',
        desc: 'Helical water pump component, optimizing fluid flow with a complex shape.'
    },
    {
        src: '/images/gallery-machining/cooling-jacket-gland.jpg',
        desc: 'Sturdy cast iron part with a smooth finish for industrial machinery applications.'
    },
    {
        src: '/images/gallery-machining/high-pressure-monel-400-separator.jpg',
        desc: 'Cast iron cover with fastener holes, providing robust sealing for heavy-duty use.'
    },
    {
        src: '/images/gallery-machining/titanium-impeller.jpg',
        desc: '316 stainless steel circulating component with grooves, enhancing fluid movement efficiency.'
    }
]
const faqs = [
    {
        q: 'What materials can you machine?',
        a: 'We machine a wide range of materials including stainless steel, carbon steel, aluminum, titanium, and exotic alloys.'
    },
    {
        q: 'What are your tolerances for precision machining?',
        a: 'Our machining services can achieve tolerances as tight as +/- 0.001 inches, depending on the material and project requirements.'
    },
    {
        q: 'Do you offer prototype machining services?',
        a: 'Yes, we provide both prototyping and full-scale production machining to meet your needs.'
    },
    {
        q: 'How fast can you turn around custom machining projects?',
        a: 'Lead times vary by project complexity and material availability, but we aim to deliver within [specific timeframe] based on customer requirements.'
    },
    {
        q: 'What certifications do you hold?',
        a: 'We are ISO 9001 certified and comply with AS9100 standards, ensuring high quality and reliability in all projects.'
    },
    {
        q: 'What industries do you specialize in?',
        a: 'We serve multiple industries including aerospace, automotive, oil and gas, pharmaceuticals, and more.'
    },
    {
        q: 'Do you offer design assistance or CAD support?',
        a: 'Yes, our team can assist with design and offer CAD/CAM support to ensure your project is optimized for manufacturing.'
    },
    {
        q: 'What types of machining services do you offer?',
        a: 'We offer CNC milling, turning, drilling, grinding, and multi-axis machining to meet complex specifications.'
    },
    {
        q: 'Do you handle high-volume production runs?',
        a: 'Absolutely. We have the capacity to manage both low-volume prototypes and high-volume production orders.'
    },
    {
        q: 'Can you handle large parts and assemblies?',
        a: 'Yes, we specialize in machining both small precision components and larger complex assemblies.'
    },
    {
        q: 'Do you offer finishing services such as heat treatment or surface coating?',
        a: 'Yes, we offer post-machining services like heat treatment, surface coating, and finishing as needed.'
    },
    {
        q: 'How do you ensure quality control?',
        a: 'Our comprehensive quality assurance process includes in-process inspections, final inspections, and the use of precision measuring tools like CMM machines.'
    },
    {
        q: 'Can you machine complex geometries?',
        a: 'Yes, our advanced CNC equipment and experienced machinists allow us to machine highly complex and intricate parts.'
    },
    {
        q: 'What are your payment terms?',
        a: 'Our payment terms depend on the scope of the project. Contact our team to discuss terms for your specific order.'
    },
    {
        q: 'How can I get a quote for my project?',
        a: 'Simply fill out our online request form or give us a call. Provide your project details and our team will get back to you promptly with a quote.'
    },
    {
        q: 'What software do you use for CAD and CAM?',
        a: 'We use industry-standard CAD/CAM software such as SolidWorks, AutoCAD, and Mastercam to ensure precision and efficiency in our processes.'
    },
    {
        q: 'What’s the maximum part size you can handle?',
        a: 'We can machine parts up to [insert dimensions], ensuring that both small and large components can be accommodated.'
    },
    {
        q: 'Do you offer repair or rework services for existing components?',
        a: 'Yes, we provide repair, rework, and refurbishment services for parts that need adjustments or restoration.'
    },
    {
        q: 'Can you work with customer-supplied material?',
        a: 'Yes, we can machine customer-supplied materials, as long as they meet the required specifications for machining.'
    },
    {
        q: 'How do you handle custom part tolerances?',
        a: 'We ensure that every part is machined to meet your specific tolerance requirements through rigorous quality control.'
    },
    {
        q: 'Do you provide material certification or traceability?',
        a: 'Yes, we provide full material certification and traceability for all materials used in production.'
    },
    {
        q: 'What type of inspection equipment do you use?',
        a: 'We utilize a variety of precision inspection tools including CMM (Coordinate Measuring Machines), calipers, micrometers, and optical comparators.'
    },
    {
        q: 'What is your typical lead time?',
        a: 'Lead times depend on project complexity, material availability, and current workload. For a more accurate timeframe, contact us with your project details.'
    }
]
const selectedFaqIndex = ref(0)
</script>
