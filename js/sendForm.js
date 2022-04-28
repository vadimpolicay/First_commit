

const form = document.querySelector('.modal')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const text = form.querySelector('input[type = text]')
    const tel = form.querySelector('input[type = tel]')
    const email = form.querySelector('input[type = email]')

    const sendObj = {
        name: text.value,
        phone: tel.value,
        email: email.value
    }


    // fetch('https://jsonplaceholder.typicode.com/todos/40-8-089-09', {

    // })
    //     .then(response => {
    //         if (response.status === 404) {
    //             throw new Error('Not found')
    //         }
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         console.warn(error.message)
    //     })

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(sendObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))

})


