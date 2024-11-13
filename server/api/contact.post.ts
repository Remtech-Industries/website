export default defineEventHandler(async (event) => {
    const body = await readMultipartFormData(event)
    const formData = new FormData()

    body?.forEach((value) => {
        if (value.name && value.data) {
            if (value.filename === undefined) {
                formData.append(value.name, value.data.toString())
            } else {
                const blob = new Blob([value.data], { type: value.type })
                formData.append(value.name, blob, value.filename)
            }
        }
    })

    formData.append('zf_referrer_name', '')
    formData.append('zf_redirect_url', '')
    formData.append('zc_gad', '')

    const res = await $fetch('https://forms.zohopublic.com/remtechindustries1/form/ContactForm/formperma/zQE00wrgHyjkqstI-OX86DxhnRGGOovsJqrKHLSsVlo/htmlRecords/submit', {
        method: 'POST',
        body: formData
    })

    return res
})
