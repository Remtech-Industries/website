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
                    <li>Cookie Consent Cookie (Necessary Cookie): If you consent to the use of "all cookies" or "necessary cookies", a cookie will be stored on your device to remember your choice. If you choose to reject all cookies, this cookie will not be stored on your device and you will given a cookie consent prompt upon your next visit to our website, since the website will be unable to remember your selection.</li>
                    <li>Google Analytics Cookies (Non-Necessary Cookies): This website uses Google Analytics to help RemTech understand how visitors interact with this website. These cookies collect data anonymously, reporting on trends without identifying individual visitors. For more information on Google Analytics cookies, please visit <a href="https://support.google.com/analytics/answer/11397207" target="_blank" class="underline">Google cookie usage on websites</a> and <a href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank" class="underline">how Google uses cookies</a>. These cookies will only be stored on your device if you consent to the use of "all cookies".</li>
                </ul>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">3. Why We Use Cookies</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">We use cookies to:</p>
                <ul class="mb-8 lg:mb-12 xl:mb-16 bullet-list">
                    <li>Enhance your browsing experience by remembering preferences and settings</li>
                    <li>Analyze website performance and improve user experience</li>
                    <li>Provide targeted advertisements and measure the effectiveness of marketing campaigns</li>
                    <li>Track website usage for internal reporting purposes</li>
                </ul>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">4. Your Choices Regarding Cookies</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">You have the right to control the use of cookies on our website. You can manage your cookie preferences in the following ways:</p>
                <ul class="mb-8 lg:mb-12 xl:mb-16 bullet-list">
                    <li>Browser Settings: Most web browsers allow you to control cookie settings, including the ability to block or delete cookies. You can usually find cookie management options under the "Settings" or "Preferences" section of your browser. Please note that disabling certain cookies may affect the functionality of the website and limit your access to certain features.</li>
                    <li>Opt-Out Tools: Some third-party advertising services provide opt-out mechanisms that allow you to control the use of targeting or advertising cookies. For example, you can visit the Digital Advertising Alliance of Canada (DAAC) opt-out page to manage your preferences.</li>
                    <li>Cookie Consent: When you first visit our website, you will be presented with a cookie consent banner that allows you to accept or reject certain types of cookies. You can modify your consent preferences at any time by adjusting the settings through your browser settings.</li>
                </ul>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">5. Changes to This Cookie Policy</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our data practices. Any updates will be posted on our website, and we encourage you to review this policy periodically to stay informed of any changes.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">6. Contact Information</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">If you have any questions, concerns, or requests regarding this Cookie Policy or how we handle your personal information, please contact us at:</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">RemTech Industries<br>69 White Street,<br>Aylmer,<br>ON N5H 2R9</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">Phone: <a href="tel:+15197733459" class="underline">+1 (519) 773-3459</a><br>Email: <a href="mailto:rfq@remtechindustries.com" class="underline">rfq@remtechindustries.com</a></p>
                <p class="mb-8 lg:mb-12 xl:mb-16">This Cookie Policy was last updated on October 22, 2024.</p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
let menuIsOpen = ref(false)
</script>
