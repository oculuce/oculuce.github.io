let boxes = document.querySelectorAll('.boxlet')
console.log(boxes)

boxes.forEach(box => {
    document.addEventListener("scroll", () => {
        let boxTop = box.getBoundingClientRect().top + box.getBoundingClientRect().height / 2
        let boxLeft = (box.getBoundingClientRect().left + box.getBoundingClientRect().width / 2) - window.innerWidth / 2
        let boxLookingHeight = (window.innerHeight / 2)
        let boxLookingWidth = (window.innerWidth / 2)
        // console.log(boxLeft)
        // console.log(`${boxTop} wawa ${boxLeft}, ${boxLookingHeight} wawa ${boxLookingWidth}`)
        // console.log(boxTop / boxLookingHeight)
        let boxY = 50 * (boxTop / boxLookingHeight - 1.1) + 50
        let boxX = 50 * (boxLeft / boxLookingWidth) + 50
        console.log(boxX)
        changeStyle('--box-rotate-y', boxY + 'px')
        changeStyle('--box-rotate-x', boxX + 'px')
    })

});

const changeStyle = (style, value) => {
    document.documentElement.style.setProperty(style, value);
}