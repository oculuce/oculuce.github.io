
// let denyTest = document.querySelector("#wawa")
// console.log(denyTest.href)

// denyTest.addEventListener("click",(event)=>{
//     event.preventDefault()
//     console.log("wawawa")
// })
let detectLink = document.querySelector('.detectLink')
// console.log(detectLink)

let image = detectLink.querySelectorAll('a')
// console.log(image[2])


let imageDisplay = document.querySelector('.imageDisplay')
let imageContainer = document.querySelector('#imageContainer')
const detectImage =()=>{
    image.forEach((element)=>{
        element.addEventListener("click",(event)=>{
            // console.log(element.href.startsWith('https'))
            if (element.href == null || element.href.startsWith('https://artfight') == true){
                return
            } else {
            event.preventDefault()
            imageDisplay.classList.add('show-flex')
            // console.log(imageContainer.src)
            imageContainer.src = element.href
        }
        })
    })
}
detectImage()
imageDisplay.addEventListener("click",(/* event */)=>{
    imageDisplay.classList.remove('show-flex')
})
/* let gungus = 5
console.log(gungus+= 1) */