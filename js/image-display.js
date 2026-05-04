let displayView = document.querySelector('.image-display')

let closeButton = document.querySelector('.close-button')
let formatButton = document.querySelector('.format-button')
let displayContainer = document.querySelector('.display-container')

let displayImage = document.querySelector('.display-image')
let displayAltText = document.querySelector('.alt-text-display')


let detectLink = document.querySelector('.detectLink')
let imageLinks = detectLink.querySelectorAll('a')

// let imageLinks = aLinks.filter((link)=> link.href)
    // filter nodelist and still return nodelist? much to think about...
    // from the little I've searched: NOPE!!!!!!!! Oh well...

const createImageViews = () => {
    imageLinks.forEach((link)=>{
        if (link.href == null || link.href.includes('images/art') == false){
            return
        } else {
            link.addEventListener("click",(event)=>{
                event.preventDefault()
                displayImage.src = link.href
                displayView.classList.add('show-block')
                // alt text:
                console.log(link.firstChild.alt)
                if(link.firstChild.alt != ""){
                    displayAltText.firstChild.textContent = link.firstChild.alt
                }else{
                    displayAltText.firstChild.textContent = "No alt text."
                }


            })
        }
    })
}
createImageViews()

closeButton.addEventListener("click",()=>{
    displayView.classList.remove('show-block')
})
formatButton.addEventListener("click",()=>{
    displayContainer.classList.toggle('full-image-view')
})

/* 
const detectImage = () => {
    image.forEach((element) => {
        element.addEventListener("click", (event) => {
            // console.log(element.href.startsWith('https'))
            if (element.href == null || element.href.includes('images/art') == false) {
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
closeButton.addEventListener("click", () => {
    imageDisplay.classList.remove('show-flex')
}) */
/* let gungus = 5
console.log(gungus+= 1) */