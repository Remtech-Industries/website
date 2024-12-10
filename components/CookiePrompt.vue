<template>
  <div class="fixed z-20 print:hidden bottom-0 left-0 w-full p-4 sm:p-6 lg:p-8 bg-red-700 text-gray-50" v-show="open && mounted">
    <p class="mb-4">Our website uses cookies to help us better serve our customers. For more information, please read our <NuxtLink to="/cookie-policy" class="underline">cookie policy</NuxtLink>.</p>
    <div class="flex justify-end flex-col sm:flex-row items-end">
      <button @click="acceptAll" class="underline mb-2 sm:mb-0 sm:ml-4">Accept all cookies</button>
      <button @click="acceptNecessary" class="underline mb-2 sm:mb-0 sm:ml-4">Accept necessary cookies</button>
      <button @click="close" class="underline mb-2 sm:mb-0 sm:ml-4">Reject all cookies</button>
    </div>
  </div>
</template>

<script setup>
const consent = useCookie('consent', {
    maxAge: 34560000
})
const open = ref(!consent.value)
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

function acceptAll() {
  const { gtag } = useGtag()
  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted'
  })
  consent.value = 'all'
  close()
}

function acceptNecessary() {
  consent.value = 'necessary'
  close()
}

function close() {
  open.value = false
}
</script>
