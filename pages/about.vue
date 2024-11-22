<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <div class="relative h-svh bg-remtech-red text-gray-50">
            <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
            <span class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl block sora mb-2 lg:mb-4 xl:mb-6">
                    Where Innovation Meets Integrity
                </h1>
                <p class="mx-4 md:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10">Your trusted partner for complex manufacturing solutions and a stronger future.</p>
            </span>
        </div>
        <div class="flex justify-center">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h2 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-8 lg:mb-12 xl:mb-16">About RemTech</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">At Rem-Tech Industries, we specialize in delivering high-performance materials and precision-engineered solutions that enhance the lifespan and reliability of your critical components. Our expertise spans from thermal spray coatings to custom machining to stainless steels and specialty alloys, offering unmatched quality and tailored solutions to protect your equipment from wear, corrosion, and extreme conditions.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Solving Challenges, Creating Impact</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">We understand the challenges you face in demanding industries. Our mission is simple: to be your trusted partner, providing innovative solutions that not only solve your immediate problems but help you achieve long-term success. Whether it's sourcing rare alloys or providing advanced coating technologies, we turn obstacles into opportunities.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Empowering Communities with Every Partnership</h3>
                <p class="mb-8 lg:mb-12 xl:mb-16">At Rem-Tech, our commitment goes beyond business. From creating 100+ local jobs to partnering in community projects like building a local school, to partnering in co-operative education programs with multiple local schools, we believe in making a difference where it counts. We're not just invested in your success, but in the future of our communities.</p>
                <h3 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">Driven by Expertise, Focused on You</h3>
                <p>With decades of experience, we've built a reputation for reliability, precision, and unmatched customer service. Our clients return time and time again because we don't just deliver materials—we deliver peace of mind, ensuring every solution is tailored to your needs, and every challenge is met with dedication and care.</p>
            </div>
        </div>
        <div class="bg-red-700 flex justify-center">
            <div class="flex flex-col text-gray-50 pt-16 xl:pt-24 max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
                <h2 class="text-4xl/tight md:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight sora mb-4 lg:mb-8">Our People</h2>
                <div class="sm:flex items-center mb-12">
                    <img src="/images/gallery-personnel/ben-rempel.png" alt="Ben Rempel" class="sm:w-1/3 mb-4 sm:mb-0 sm:mr-4 md:mr-8 lg:mr-12 xl:mr-16 2xl:mr-24">
                    <div class="sm:w-2/3">
                        <h3 class="text-2xl/tight md:text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight 2xl:text-6xl/tight sora">Ben Rempel</h3>
                        <p class="md:text-lg/tight lg:text-xl/tight xl:text-2xl/tight 2xl:text-3xl/tight mb-4">General Manager</p>
                        <p>"At RemTech, we built this company with one goal in mind: to help our clients solve their toughest manufacturing challenges with precision and integrity. It's not just about making parts—it's about creating solutions that make a lasting impact."</p>
                    </div>
                </div>
                <div class="sm:flex items-center mb-12">
                    <img src="/images/gallery-personnel/peter-rempel.png" alt="Peter Rempel" class="sm:w-1/3 mb-4 sm:mb-0 sm:mr-4 md:mr-8 lg:mr-12 xl:mr-16 2xl:mr-24">
                    <div class="sm:w-2/3">
                        <h3 class="text-2xl/tight md:text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight 2xl:text-6xl/tight sora">Peter Rempel</h3>
                        <p class="md:text-lg/tight lg:text-xl/tight xl:text-2xl/tight 2xl:text-3xl/tight mb-4">Production Manager</p>
                        <p>"Our success comes from our commitment to precision and quality. Whether it's a complex part or a simple one, we approach every project with the same attention to detail and dedication to getting it right the first time."</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-red-700 flex justify-center bg-drawing-4">
            <div class="flex flex-col text-gray-50 pb-16 xl:pb-24 max-w-screen-2xl pl-4 md:pl-8 lg:pl-12 xl:pl-16 pr-2 md:pr-4 lg:pr-6 xl:pr-8">
                <div class="flex flex-wrap">
                    <div v-for="employee in employees" class="w-1/2 sm:w-1/3 md:w-1/4 pr-2 md:pr-4 lg:pr-6 xl:pr-8 pb-4 md:pb-8 lg:pb-12 xl:pb-16">
                        <img :src="employee.imageSrc" :alt="employee.name" class="mb-1 md:pb-2 2xl:pb-3">
                        <p class="font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl">{{ employee.name }}</p>
                        <p class="text-xs lg:text-sm xl:text-base 2xl:text-lg">{{ employee.role }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:min-h-svh flex flex-col">
            <div class="flex flex-col md:flex-row items-stretch flex-grow">
                <div class="md:w-3/5 flex flex-col justify-center items-stretch py-16 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-16">
                    <h2 class="text-4xl/tight md:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight 2xl:text-8xl/tight sora mb-8 lg:mb-12 xl:mb-16">Your New Go-To Supplier Awaits. Get a Quote Today.</h2>
                    <div class="underline">
                        <a href="tel:+15197733459" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">+1 (519) 773-3459</a>
                        <a href="mailto:rfq@remtechindustries.com" class="mr-20 2xl:mr-32 mb-4 md:mb-8 2xl:mb-12 text-nowrap inline-block">rfq@remtechindustries.com</a>
                        <a href="https://maps.app.goo.gl/NqjaYQquZcUZ1Vp29" target="_blank" rel="nofollow" class="mr-20 2xl:mr-32 text-nowrap inline-block">Located in Ontario, Canada</a>
                    </div>
                </div>
                <div class="bg-gray-100 md:w-2/5 flex flex-col justify-center items-stretch py-8 lg:py-12 xl:py-16 px-4 lg:px-6 xl:px-8">
                    <ContactForm class="form-gray" />
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
let menuIsOpen = ref(false)
const employees = [
    {
        // imageSrc: '/images/gallery-personnel/willy-siemens-1.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Willy Siemens',
        role: 'Office Manager'
    },
    {
        // imageSrc: '/images/gallery-personnel/jonny-froese-2.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jonny Froese',
        role: 'Scheduler'
    },
    {
        // imageSrc: '/images/gallery-personnel/abraham-klassen-8.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Abraham Klassen',
        role: 'Technical Specialist'
    },
    {
        // imageSrc: '/images/gallery-personnel/jacob-fehr-9.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jacob Fehr',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/alvino-penner-12.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Alvino Penner',
        role: 'Project Specialist'
    },
    {
        // imageSrc: '/images/gallery-personnel/aldo-rempel-23.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Aldo Rempel',
        role: 'Lathe Supervisor'
    },
    {
        // imageSrc: '/images/gallery-personnel/jeff-froese-24.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jeff Froese',
        role: 'Quality Manager'
    },
    {
        // imageSrc: '/images/gallery-personnel/peter-schmitt-28.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Peter Schmitt',
        role: 'Grinding Team Leader'
    },
    {
        // imageSrc: '/images/gallery-personnel/diana-ham-30.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Diana Ham',
        role: 'Accounting Manager'
    },
    {
        // imageSrc: '/images/gallery-personnel/skylar-churchill-33.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Skylar Churchill',
        role: 'Lathe Supervisor'
    },
    {
        // imageSrc: '/images/gallery-personnel/edward-thiessen-36.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Edward Thiessen',
        role: 'Thermal Spray Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/isaak-thiessen-41.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Isaak Thiessen',
        role: 'Quoting'
    },
    {
        // imageSrc: '/images/gallery-personnel/abraham-neufeld-42.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Abraham Neufeld',
        role: 'Thermal Spray Supervisor'
    },
    {
        // imageSrc: '/images/gallery-personnel/abraham-letkeman-43.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Abraham Letkeman',
        role: 'Lapper Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/ernesto-peters-47.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Ernesto Peters',
        role: 'CNC Mill Programmer'
    },
    {
        // imageSrc: '/images/gallery-personnel/greg-wiebe-49.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Greg Wiebe',
        role: 'CNC Mill Programmer'
    },
    {
        // imageSrc: '/images/gallery-personnel/peter-neufeld-50.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Peter Neufeld',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/elma-wiebe-52.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Elma Wiebe',
        role: 'Documentation Coordinator'
    },
    {
        // imageSrc: '/images/gallery-personnel/michael-neufeld-53.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Michael Neufeld',
        role: 'Thermal Spray Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/henry-loewen-55.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Henry Loewen',
        role: 'Saw Supervisor'
    },
    {
        // imageSrc: '/images/gallery-personnel/peter-thiessen-60.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Peter Thiessen',
        role: 'Mill Supervisor'
    },
    {
        // imageSrc: '/images/gallery-personnel/jake-thiessen-61.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jake Thiessen',
        role: 'Deburring Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/eddy-wiebe-63.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Eddy Wiebe',
        role: 'Planning'
    },
    {
        // imageSrc: '/images/gallery-personnel/ralph-brix-64.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Ralph Brix',
        role: 'Industrial Engineer'
    },
    {
        // imageSrc: '/images/gallery-personnel/david-friesen-65.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'David Friesen',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/johan-neusteter-72.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Johan Neusteter',
        role: 'Software Developer'
    },
    {
        // imageSrc: '/images/gallery-personnel/david-teichroeb-74.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'David Teichroeb',
        role: 'Maintenance Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/diedrich-thiessen-79.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Diedrich Thiessen',
        role: 'CNC Mill Programmer'
    },
    {
        // imageSrc: '/images/gallery-personnel/steven-neustaeter-80.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Steven Neustaeter',
        role: 'Deburring Team Leader'
    },
    {
        // imageSrc: '/images/gallery-personnel/joel-dyck-81.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Joel Dyck',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/michael-redekop-85.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Michael Redekop',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/joe-fehr-88.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Joe Fehr',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/alfredo-schmitt-89.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Alfredo Schmitt',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/frank-teichroeb-90.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Frank Teichroeb',
        role: 'Maintenance Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/david-dyck-95.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'David Dyck',
        role: 'Deburring Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/michael-dyck-96.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Michael Dyck',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/abe-wiebe-97.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Abe Wiebe',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/willie-wiebe-98.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Willie Wiebe',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/cornelius-klassen-101.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Cornelius Klassen',
        role: 'Quality Inspector'
    },
    {
        // imageSrc: '/images/gallery-personnel/rudy-thiessen-102.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Rudy Thiessen',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/abraham-friesen-106.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Abraham Friesen',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/joey-thiessen-108.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Joey Thiessen',
        role: 'CNC Mill Programmer'
    },
    {
        // imageSrc: '/images/gallery-personnel/aaron-letkeman-109.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Aaron Letkeman',
        role: 'Deburring Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/cornelius-wiebe-110.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Cornelius Wiebe',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/isaak-peters-111.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Isaak Peters',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/andrew-knelsen-112.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Andrew Knelsen',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/michael-thiessen-113.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Michael Thiessen',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/willy-dyck-115.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Willy Dyck',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/peter-friesen-116.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Peter Friesen',
        role: 'Grinder Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/jacob-friesen-117.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jacob Friesen',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/michael-friesen-118.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Michael Friesen',
        role: 'Saw Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/annie-bueckert-119.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Annie Bueckert',
        role: 'Quality Inspector'
    },
    {
        // imageSrc: '/images/gallery-personnel/andrew-knelsen-125.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Andrew Knelsen',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/maria-unger-126.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Maria Unger',
        role: 'Janitor'
    },
    {
        // imageSrc: '/images/gallery-personnel/henry-suderman-128.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Henry Suderman',
        role: 'CNC Lathe Programmer'
    },
    {
        // imageSrc: '/images/gallery-personnel/trevor-thiessen-132.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Trevor Thiessen',
        role: 'Software Developer'
    },
    {
        // imageSrc: '/images/gallery-personnel/michael-hamm-142.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Michael Hamm',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/kyle-hanenburg-143.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Kyle Hanenburg',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/jordan-giesbrecht-144.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jordan Giesbrecht',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/daniel-hamm-145.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Daniel Hamm',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/george-neustaeter-146.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'George Neustaeter',
        role: 'Saw Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/toby-rempel-147.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Toby Rempel',
        role: 'Quality Inspector'
    },
    {
        // imageSrc: '/images/gallery-personnel/jake-penner-150.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jake Penner',
        role: 'Alloys Division Manager'
    },
    {
        // imageSrc: '/images/gallery-personnel/lisa-klassen-151.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Lisa Klassen',
        role: 'Purchaser'
    },
    {
        // imageSrc: '/images/gallery-personnel/aiden-guenther-152.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Aiden Guenther',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/kathryn-dyck-153.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Kathryn Dyck',
        role: 'Shipper'
    },
    {
        // imageSrc: '/images/gallery-personnel/kaden-thiessen-154.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Kaden Thiessen',
        role: 'Deburring Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/david-teichroeb-155.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'David Teichroeb',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/susie-sawatzky-156.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Susie Sawatzky',
        role: 'Order Entry Specialist'
    },
    {
        // imageSrc: '/images/gallery-personnel/henry-klassen-157.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Henry Klassen',
        role: 'Deburring Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/kyle-cook-158.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Kyle Cook',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/michael-wiebe-159.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Michael Wiebe',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/mary-froese-162.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Mary Froese',
        role: 'Order Entry Specialist'
    },
    {
        // imageSrc: '/images/gallery-personnel/ron-jones-165.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Ron Jones',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/william-dyck-166.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'William Dyck',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/dave-teichroeb-168.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Dave Teichroeb',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/herman-neufeld-169.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Herman Neufeld',
        role: 'Maintenance Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/austin-reddekopp-170.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Austin Reddekopp',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/nellie-giesbrecht-171.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Nellie Giesbrecht',
        role: 'Accountant'
    },
    {
        // imageSrc: '/images/gallery-personnel/cody-wilson-172.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Cody Wilson',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/adam-evison-173.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Adam Evison',
        role: 'Thermal Spray Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/bowen-thiessen-174.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Bowen Thiessen',
        role: 'Grinder Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/chris-durdle-175.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Chris Durdle',
        role: 'Gauge Calibration Manager'
    },
    {
        // imageSrc: '/images/gallery-personnel/erwin-thiessen-176.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Erwin Thiessen',
        role: 'Quality Inspector'
    },
    {
        // imageSrc: '/images/gallery-personnel/chris-hendel-177.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Chris Hendel',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/peter-neufeld-178.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Peter Neufeld',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/ian-dyken-181.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Ian Dyken',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/steven-enns-182.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Steven Enns',
        role: 'CAD Drafter'
    },
    {
        // imageSrc: '/images/gallery-personnel/andrew-wiebe-183.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Andrew Wiebe',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/joey-knelsen-185.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Joey Knelsen',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/johnny-wall-188.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Johnny Wall',
        role: 'CNC Lathe Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/richard-wall-189.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Richard Wall',
        role: 'Maintenance Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/jacob-neufeld-191.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jacob Neufeld',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/arnold-friesen-192.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Arnold Friesen',
        role: 'Material Prepper'
    },
    {
        // imageSrc: '/images/gallery-personnel/henry-penner-193.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Henry Penner',
        role: 'Grinder Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/aaron-froese-194.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Aaron Froese',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/morgan-siemens-195.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Morgan Siemens',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/leroy-schmitt-196.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Leroy Schmitt',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/aurelia-friesen-198.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Aurelia Friesen',
        role: 'Order Entry Specialist'
    },
    {
        // imageSrc: '/images/gallery-personnel/brady-dyck-207.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Brady Dyck',
        role: 'Lapper Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/dmitri-klassen-208.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Dmitri Klassen',
        role: 'Quality Associate'
    },
    {
        // imageSrc: '/images/gallery-personnel/carina-siemens-209.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Carina Siemens',
        role: 'Shipper'
    },
    {
        // imageSrc: '/images/gallery-personnel/jesse-hiebert-210.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jesse Hiebert',
        role: 'CNC Mill Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/justyn-thiessen-211.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Justyn Thiessen',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/dannie-kuepfer-212.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Dannie Kuepfer',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/coby-friesen-213.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Coby Friesen',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/isaak-bergen-214.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Isaak Bergen',
        role: 'Grinder Operator'
    },
    {
        // imageSrc: '/images/gallery-personnel/samuel-friesen-215.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Samuel Friesen',
        role: 'Thermal Spray Technician'
    },
    {
        // imageSrc: '/images/gallery-personnel/evan-teichroeb-216.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Evan Teichroeb',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/nathan-dyck-217.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Nathan Dyck',
        role: ''
    },
    {
        // imageSrc: '/images/gallery-personnel/jake-hamm-218.jpg',
        imageSrc: '/images/gallery-personnel/ben-rempel.png',
        name: 'Jake Hamm',
        role: ''
    }
]
</script>
