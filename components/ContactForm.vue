<template>
  <form @submit.prevent="handleFormSubmit">
    <h3 class="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6">Get a Free Quote</h3>
    <label>
      <span class="text-sm md:text-base block mb-1">Your Name</span>
      <input type="text" name="SingleLine" v-model="name" class="w-full form-bg px-4 py-3" maxlength="255" required />
    </label>
    <label>
      <span class="text-sm md:text-base block mt-4 xl:mt-6 mb-1">Your Email</span>
      <input type="email" name="Email" v-model="email" class="w-full form-bg px-4 py-3" maxlength="255" required />
    </label>
    <label>
      <span class="text-sm md:text-base block mt-4 xl:mt-6 mb-1">Your Project Details</span>
      <textarea name="MultiLine" v-model="details" class="w-full form-bg px-4 py-3 block" maxlength="65535" required></textarea>
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
</template>

<script setup>
const name = ref('')
const email = ref('')
const details = ref('')
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

async function handleFormSubmit() {
  try {
    const formData = new FormData()
    formData.append('SingleLine', name.value)
    formData.append('Email', email.value)
    formData.append('MultiLine', details.value)
    for (var x = 0; x < files.length; x++) {
      formData.append('FileUpload', files[x]);
    }

    const res = await $fetch(`/api/contact`, {
      method: 'POST',
      body: formData
    })
    console.log(1)
    console.log(res)
  } catch (e) {
    console.error(2)
    console.log(e)
  }
}
</script>
