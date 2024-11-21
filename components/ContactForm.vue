<template>
  <div>
    <div v-show="success === true">
      <h3 class="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6">Thank you for your request. Your submission has been received.</h3>
      <div class="flex justify-center">
        <button @click="close" class="relative h-16 lg:h-18 xl:h-20 w-12 lg:w-16 xl:w-20">
            <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </button>
      </div>
    </div>
    <div v-show="error === true">
      <h3 class="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6">An error has occurred while submitting your request. Please refresh the page and try again later.</h3>
      <div class="flex justify-center">
        <button @click="close" class="relative h-16 lg:h-18 xl:h-20 w-12 lg:w-16 xl:w-20">
            <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div class="w-full border-color-unset border-b-2 xl:border-b-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </button>
      </div>
    </div>
    <form @submit.prevent="handleFormSubmit" v-show="error === false && success === false">
      <h3 class="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6">Get a Free Quote</h3>
      <label>
        <span class="text-sm md:text-base block mb-1">Your Name <span class="text-xs">(required)</span></span>
        <input type="text" name="Name" v-model="name" class="w-full form-bg px-4 py-3" maxlength="255" required />
      </label>
      <label>
        <span class="text-sm md:text-base block mt-4 xl:mt-6 mb-1">Your Email <span class="text-xs">(required)</span></span>
        <input type="email" name="Email" v-model="email" class="w-full form-bg px-4 py-3" maxlength="255" required />
      </label>
      <label>
        <span class="text-sm md:text-base block mt-4 xl:mt-6 mb-1">Your Project Details <span class="text-xs">(required)</span></span>
        <textarea name="Project Details" v-model="details" class="w-full form-bg px-4 py-3 block" maxlength="65535" required></textarea>
      </label>
      <label>
        <span class="text-sm md:text-base block mt-4 xl:mt-6 mb-1">Project Files</span>
        <span class="block relative">
          <input @change="handleFileUpload" type="file" class="w-full form-bg px-4 py-3 h-24" name="FileUpload" multiple />
          <span class="flex justify-center items-center text-center absolute top-0 left-0 w-full h-full form-bg p-4 pointer-events-none cursor-pointer">{{ fileUploadLabel }}</span>
        </span>
      </label>
      <button type="submit" class="underline py-4 mt-4 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
const name = ref('')
const email = ref('')
const details = ref('')
const success = ref(false)
const error = ref(false)
let fileUploadLabel = ref('Drag files here or click to upload.')
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

function close() {
  success.value = false
  error.value = false
  window.setTimeout(() => {
    //
  }, 1)
}

async function handleFormSubmit() {
  try {
    const formData = new FormData()
    formData.append('SingleLine', name.value)
    formData.append('Email', email.value)
    formData.append('MultiLine', details.value)
    for (var x = 0; x < files.length; x++) {
      formData.append('FileUpload', files[x]);
    }

    await $fetch('/api/contact', {
      method: 'POST',
      body: formData
    })

    success.value = true
  } catch (e) {
    error.value = true
  }
}
</script>
