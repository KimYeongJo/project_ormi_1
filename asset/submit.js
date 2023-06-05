const $form = document.querySelector('form')
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

let aiData = []

$form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
        redirect: "follow",
        })
        .then(res => res.json())
        .then(res => {
            aiData = JSON.parse(res.choices[0].message.content)
            console.log(aiData)
            closeLoadingWithMask()
            spreadData(aiData)
        })
    LoadingWithMask()
})