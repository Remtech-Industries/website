<template>
    <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
        <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
        <div class="flex justify-center">
            <div class="max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 xl:py-36 2xl:py-48">
                <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-4 lg:mb-6 xl:mb-8">Terms & Conditions</h1>
                <p class="mb-8 lg:mb-12 xl:mb-16">Welcome to RemTech Industries. These terms and conditions outline the rules and regulations for the use of RemTech Industries' website and the services provided by RemTech Industries.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">1. Acceptance of Terms</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, do not use our website.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">2. Intellectual Property Rights</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">All content on this website, including but not limited to text, images, graphics, logos, and software, is the intellectual property of RemTech Industries or its licensors and is protected by applicable intellectual property laws in Ontario, Canada. You may not copy, distribute, modify, or create derivative works from any material on this site without our prior written permission.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">3. Use of the Website</h2>
                <ul class="mb-8 lg:mb-12 xl:mb-16 bullet-list">
                    <li>You agree to use the website only for lawful purposes and in a way that does not infringe the rights of or restrict or inhibit the use and enjoyment of this website by any third party.</li>
                    <li>You may not use this website in a way that causes, or may cause, damage to the website or impairs the availability or accessibility of the website.</li>
                </ul>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">4. Privacy</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">Our <NuxtLink to="/privacy-policy" class="underline">Privacy Policy</NuxtLink> governs how we collect, use, and protect any personal information you provide while using our website. Please refer to our <NuxtLink to="/privacy-policy" class="underline">Privacy Policy</NuxtLink> for more information.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">5. Accuracy of Information</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">While we strive to ensure the accuracy of the information provided on this website, we do not warrant that the information is up-to-date, complete, or free from errors. RemTech Industries is not liable for any inaccuracies or omissions in the website content.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">6. Orders and Pricing</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">All orders are subject to acceptance by RemTech Industries. We reserve the right to refuse or cancel any order for any reason. Prices on the website are subject to change without notice and may vary based on specific circumstances, including but not limited to changes in materials, market conditions, or other unforeseen variables.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">7. Limitation of Liability</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">In no event shall RemTech Industries be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use our website or services, even if we have been advised of the possibility of such damages. This includes but is not limited to damages for loss of profits, data, or other intangible losses.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">8. Indemnity</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">You agree to indemnify, defend, and hold harmless RemTech Industries, its employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of your use of the website or your violation of these Terms and Conditions.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">9. Governing Law</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">These Terms and Conditions are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Ontario, Canada.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">10. Changes to the Terms</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">RemTech Industries reserves the right to update or modify these Terms and Conditions at any time without prior notice. It is your responsibility to review these Terms regularly to stay informed of any changes.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">11. Termination</h2>
                <p class="mb-8 lg:mb-12 xl:mb-16">We may terminate or suspend your access to the website immediately, without prior notice or liability, for any reason, including if you breach these Terms and Conditions.</p>
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 lg:mb-6 xl:mb-8">12. Contact Information</h2>
                <p class="mb-4 lg:mb-6 xl:mb-8">If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">RemTech Industries<br>69 White Street,<br>Aylmer,<br>ON N5H 2R9</p>
                <p class="mb-4 lg:mb-6 xl:mb-8">Phone: <a href="tel:+15197733459" class="underline">+1 (519) 773-3459</a><br>Email: <a href="mailto:rfq@remtechindustries.com" class="underline">rfq@remtechindustries.com</a></p>
                <p class="mb-8 lg:mb-12 xl:mb-16">This Terms & Conditions page was last updated on October 22, 2024.</p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
let menuIsOpen = ref(false)
</script>
