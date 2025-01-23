let caveElement = document.getElementById('caveTest')
// let scrollDistance = window.scrollY + caveElement.getBoundingClientRect().top

let floorElement = document.querySelector('.floor-bottom')
let ceilingElement = document.querySelector('.ceiling-top')

const rootVariable = getComputedStyle(document.documentElement)
const ceilingVariable = rootVariable.getPropertyValue('--ceiling-rotate').trim();
const floorVariable = rootVariable.getPropertyValue('--floor-rotate').trim();

document.addEventListener("scroll", () => {
    // let scrollDistance = caveElement.getBoundingClientRect().top
    // console.log(scrollDistance)
    let ceilingDistance = ceilingElement.getBoundingClientRect().top
    console.log(ceilingDistance)
    let floorDistance = floorElement.getBoundingClientRect().bottom
    console.log(floorDistance)
    let alteredCeilingVariable = 145 + (ceilingDistance / 10)
    changeStyle('--ceiling-rotate',alteredCeilingVariable + 'deg')
    let alteredFloorVariable = 145 - (floorDistance / 10)
    changeStyle('--floor-rotate',alteredFloorVariable + 'deg')
})

Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };

const changeStyle=(style, value)=>{
    document.documentElement.style.setProperty(style, value);
    console.log('yay')
}