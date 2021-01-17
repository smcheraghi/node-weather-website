console.log('Client side of javascrypt file is loaded...')

// fetch('http://localhost:3000/weather?address=boston').then((res) => {
//     res.json().then((data) => {
//         if (data.error){
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#msg-1')
const messageTwo = document.querySelector('#msg-2')

// messageOne.textContent = 'haha'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    console.log(search.value)
    fetch('http://localhost:3000/weather?address=' + location).then((res) => {
    res.json().then((data) => {
        if (data.error){
            console.log(data.error)
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            console.log(data.location)                          // show in browser developer consol
            console.log(data.forecast)
        }
    })
})
})