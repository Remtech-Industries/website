<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
        <div class="flex justify-center" v-show="!menuIsOpen">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-4 lg:mb-6 xl:mb-8">Privacy Policy</h1>
                <p class="mb-8 lg:mb-12 xl:mb-16">At RemTech Industries, we are committed to protecting the privacy and security of the personal information of our customers, employees, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and protect personal information in compliance with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and any applicable provincial legislation.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">1. Collection of Personal Information</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">We collect personal information only when it is necessary for our business activities or to provide services to you. The types of personal information we may collect include:</p>
                <ul class="mb-4 lg:mb-6 xl:mb-8 bullet-list">
                    <li>Name, contact information (such as address, phone number, email address)</li>
                    <li>Billing and payment details (for transactional purposes)</li>
                    <li>Employment-related information (if you apply for a job with us)</li>
                    <li>Any other information you choose to provide directly</li>
                </ul>
                <p class="mb-4 lg:mb-6 xl:mb-8">We collect this information in various ways, including:</p>
                <ul class="mb-8 lg:mb-12 xl:mb-16 bullet-list">
                    <li>Through forms on our website (e.g., contact forms, job applications)</li>
                    <li>Via email or phone communications</li>
                    <li>Through cookies and other automated technologies on our website</li>
                </ul>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">2. Use of Personal Information</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">The personal information we collect is used to:</p>
                <ul class="mb-4 lg:mb-6 xl:mb-8 bullet-list">
                    <li>Provide and improve our products and services</li>
                    <li>Communicate with you, including responding to inquiries or processing transactions</li>
                    <li>Process payments and manage accounts</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Perform marketing and promotional activities (with your consent)</li>
                </ul>
                <p class="mb-8 lg:mb-12 xl:mb-16">We will not collect, use, or disclose personal information for any other purposes unless we have your consent or are required or permitted by law to do so.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">3. Disclosure of Personal Information</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">We do not sell, trade, or rent personal information to third parties. However, we may share your personal information with trusted third parties in the following circumstances:</p>
                <ul class="mb-4 lg:mb-6 xl:mb-8 bullet-list">
                    <li>Service providers that assist us in conducting our business (e.g., payment processors, IT services)</li>
                    <li>Law enforcement or government agencies when required by law</li>
                    <li>In the event of a merger, acquisition, or sale of assets, where personal information may be part of the transaction</li>
                </ul>
                <p class="mb-8 lg:mb-12 xl:mb-16">All third parties with whom we share personal information are required to protect that information and use it only for the purposes for which it was provided.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">4. Consent</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">By providing us with your personal information, you consent to its collection, use, and disclosure as outlined in this Privacy Policy. You may withdraw your consent at any time by contacting us at the information provided below, subject to legal and contractual restrictions.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">5. Data Security</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">We take reasonable steps to protect personal information from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security measures, including secure data storage and encrypted communication protocols, to safeguard the personal information we collect.</p>
                <p class="mb-8 lg:mb-12 xl:mb-16">However, please be aware that no method of transmitting or storing data is completely secure, and we cannot guarantee the absolute security of your personal information.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">6. Retention of Personal Information</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Once the information is no longer required, it will be securely destroyed or anonymized.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">7. Access and Correction</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">You have the right to access the personal information we hold about you and request corrections if it is inaccurate or incomplete. To make such a request, please contact us using the information provided below. We will respond to your request in a timely manner and, where applicable, make the necessary corrections.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">8. Third-Party Links</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those websites, and we are not responsible for the privacy practices of third parties. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">9. Changes to this Privacy Policy</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website, and the revised policy will take effect immediately upon posting. It is your responsibility to review this policy periodically to stay informed of any updates.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">10. Children's Privacy</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our website and services are not directed at children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take immediate steps to delete the information from our records.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">11. Contact Information</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at:</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">RemTech Industries<br>69 White Street,<br>Aylmer,<br>ON N5H 2R9</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">Phone: <a href="tel:+15197733459" class="underline">+1 (519) 773-3459</a><br>Email: <a href="mailto:rfq@remtechindustries.com" class="underline">rfq@remtechindustries.com</a></p>
                <p class="mb-8 lg:mb-12 xl:mb-16">This Privacy Policy was last updated on October 22, 2024.</p>
            </div>
        </div>
        <Footer v-show="!menuIsOpen" />
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Privacy Policy',
    ogTitle: 'Privacy Policy',
    description: 'At RemTech Industries, we are committed to protecting the privacy and security of the personal information of our customers, employees, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and protect personal information in compliance with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and any applicable provincial legislation.',
    ogDescription: 'At RemTech Industries, we are committed to protecting the privacy and security of the personal information of our customers, employees, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and protect personal information in compliance with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and any applicable provincial legislation.',
    ogImage: '/images/og/privacy-policy.png',
    twitterImage: '/images/og/privacy-policy.png'
})

let menuIsOpen = ref(false)
</script>
