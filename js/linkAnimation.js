// something stupid

let linkbox = document.querySelector('.peoplebox')
console.log(linkbox)

let button = linkbox.querySelectorAll('a')


const linkAnimate = ()=>{
    button.forEach((element)=>{
        element.addEventListener("click",(event)=>{
            event.preventDefault()
            element.classList.add('memoryMimic')
            setTimeout(openLink(), 4000)
        })
    })
}

const openLink = ()=>{
    
}

linkAnimate()