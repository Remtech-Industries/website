<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
        <div class="flex justify-center">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-4 lg:mb-6 xl:mb-8">Cookie Policy</h1>
                <p class="mb-8 lg:mb-12 xl:mb-16">At RemTech Industries, we use cookies and similar tracking technologies to enhance your experience on our website, improve performance, and analyze how you interact with our site. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use. This policy is designed to comply with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA), and outlines our commitment to protecting your privacy while using these technologies.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">1. What Are Cookies?</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They allow the website to recognize your device, store preferences, and provide insights into user behavior. Cookies can be "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device for a specified period or until manually deleted).</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">2. Types of Cookies We Use</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">We use several types of cookies to enhance your experience and improve the functionality of our website:</p>
                <ul class="mb-8 lg:mb-12 xl:mb-16 bullet-list">
                    <li>Strictly Necessary Cookies: These cookies are essential for the proper functioning of the website. They enable basic features such as page navigation and access to secure areas of the site. Without these cookies, some services you have requested may not be available.</li>
                    <li>Performance Cookies: These cookies collect anonymous information about how visitors use our website, such as which pages are visited most often. This data helps us improve the performance and design of our website.</li>
                    <li>Functional Cookies: These cookies allow our website to remember choices you make (such as language preferences or region) to provide a more personalized experience. They also enable features such as live chats or comment forms.</li>
                    <li>Targeting/Advertising Cookies: These cookies track your browsing habits to deliver targeted advertisements that are more relevant to your interests. They may also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns. These cookies are often placed by third-party advertising networks with our permission.</li>
                    <li>Analytics Cookies: We use analytics services, such as Google Analytics, that place cookies on your device to collect data about how you interact with our website. This data helps us understand user behavior and improve the site based on usage patterns.</li>
                </ul>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">3. Third-Party Cookies</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">In some cases, we use third-party cookies provided by trusted third parties. These cookies may be set by external services such as social media platforms (e.g., LinkedIn or Facebook), advertisers, or analytics providers. The data collected by these third parties is subject to their respective privacy policies.</p>
                <p class="mb-8 lg:mb-12 xl:mb-16">We have no control over how third-party cookies are used, but we ensure that any third parties we work with are reputable and comply with relevant data protection regulations.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">4. Why We Use Cookies</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">We use cookies to:</p>
                <ul class="mb-8 lg:mb-12 xl:mb-16 bullet-list">
                    <li>Enhance your browsing experience by remembering preferences and settings</li>
                    <li>Analyze website performance and improve user experience</li>
                    <li>Provide targeted advertisements and measure the effectiveness of marketing campaigns</li>
                    <li>Track website usage for internal reporting purposes</li>
                </ul>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">5. Your Choices Regarding Cookies</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">You have the right to control the use of cookies on our website. You can manage your cookie preferences in the following ways:</p>
                <ul class="mb-8 lg:mb-12 xl:mb-16 bullet-list">
                    <li>Browser Settings: Most web browsers allow you to control cookie settings, including the ability to block or delete cookies. You can usually find cookie management options under the "Settings" or "Preferences" section of your browser. Please note that disabling certain cookies may affect the functionality of the website and limit your access to certain features.</li>
                    <li>Opt-Out Tools: Some third-party advertising services provide opt-out mechanisms that allow you to control the use of targeting or advertising cookies. For example, you can visit the Digital Advertising Alliance of Canada (DAAC) opt-out page to manage your preferences.</li>
                    <li>Cookie Consent: When you first visit our website, you will be presented with a cookie consent banner that allows you to accept or reject certain types of cookies. You can modify your consent preferences at any time by adjusting the settings in the banner or through your browser settings.</li>
                </ul>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">6. Changes to This Cookie Policy</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our data practices. Any updates will be posted on our website, and we encourage you to review this policy periodically to stay informed of any changes.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">7. Contact Information</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">If you have any questions, concerns, or requests regarding this Cookie Policy or how we handle your personal information, please contact us at:</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">RemTech Industries<br>69 White Street,<br>Aylmer,<br>ON N5H 2R9</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">Phone: <a href="tel:+15197733459" class="underline">+1 (519) 773-3459</a><br>Email: <a href="mailto:rfq@remtechindustries.com" class="underline">rfq@remtechindustries.com</a></p>
                <p class="mb-8 lg:mb-12 xl:mb-16">This Cookie Policy was last updated on October 11, 2024.</p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
let menuIsOpen = ref(false)
</script>
