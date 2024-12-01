<template>
  <div>
    <div v-if="success === true">
      <p class="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6" tabindex="-1" ref="successMessage">Thank you for your request. Your submission has been received.</p>
      <div class="flex justify-center">
        <button @click="close" class="relative h-16 lg:h-18 xl:h-20 w-12 lg:w-16 xl:w-20" aria-label="return to contact form">
            <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </button>
      </div>
    </div>
    <div v-if="error === true">
      <p class="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6" tabindex="-1" ref="errorMessage">An error has occurred while submitting your request. Please refresh the page and try again later.</p>
      <div class="flex justify-center">
        <button @click="close" class="relative h-16 lg:h-18 xl:h-20 w-12 lg:w-16 xl:w-20" aria-label="return to contact form">
            <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </button>
      </div>
    </div>
    <form @submit.prevent="handleFormSubmit" name="contactForm" method="post" enctype="multipart/form-data" v-show="error === false && success === false" ref="form" data-netlify="true" tabindex="-1">
      <component :is="props.headinglevel ?? 'h3'" class="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6">Get a Free Quote</component>
      <input type="hidden" name="form-name" value="contactForm">
      <label>
        <span class="text-sm md:text-base block mb-1">Your Name <span class="text-xs">(required)</span></span>
        <input type="text" name="Name" class="w-full form-bg px-4 py-3" maxlength="255" required />
      </label>
      <label>
        <span class="text-sm md:text-base block mt-4 xl:mt-6 mb-1">Your Email <span class="text-xs">(required)</span></span>
        <input type="email" name="Email" class="w-full form-bg px-4 py-3" maxlength="255" required />
      </label>
      <label>
        <span class="text-sm md:text-base block mt-4 xl:mt-6 mb-1">Your Project Details <span class="text-xs">(required)</span></span>
        <textarea name="Project Details" class="w-full form-bg px-4 py-3 block" maxlength="65535" required></textarea>
      </label>
      <label>
        <span class="text-sm md:text-base block mt-4 xl:mt-6 mb-1">Project/Drawing File <span class="text-xs">(8mb max.)</span></span>
        <span class="block relative">
          <input @change="handleFileUpload" type="file" class="w-full form-bg px-4 py-3 h-24" name="FileUpload" />
          <span class="flex justify-center items-center text-center absolute top-0 left-0 w-full h-full form-bg p-4 pointer-events-none cursor-pointer">{{ fileUploadLabel }}</span>
        </span>
      </label>
      <button type="submit" class="underline py-4 mt-4 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        {{ loading ? 'Submitting...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<script setup>
const loading = ref(false)
const success = ref(false)
const error = ref(false)
const form = useTemplateRef('form')
const successMessage = useTemplateRef('successMessage')
const errorMessage = useTemplateRef('errorMessage')
const fileUploadLabel = ref('Drag files here or click to upload.')
const props = defineProps(['headinglevel'])
let files = []

function handleFileUpload(e) {
  if (e.target.files.length === 0) {
    fileUploadLabel.value = 'Drag files here or click to upload.'
  } else {
    fileUploadLabel.value = ''
    files = e.target.files

    for (var x = 0; x < files.length; x++) {
      fileUploadLabel.value += files[x].name + ', '
    }

    fileUploadLabel.value = fileUploadLabel.value.slice(0, -2)
  }
}

async function handleFormSubmit() {
  try {
    const formData = new FormData(form.value)
    loading.value = true

    await $fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: new URLSearchParams(formData).toString()
    })

    success.value = true
    loading.value = false
    window.setTimeout(() => {
      successMessage.value.focus()
    }, 1)
  } catch (e) {
    error.value = true
    loading.value = false
    window.setTimeout(() => {
      errorMessage.value.focus()
    }, 1)
  }
}

function close() {
  success.value = false
  error.value = false
  window.setTimeout(() => {
    form.value.focus()
  }, 1)
}
</script>
