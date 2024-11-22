//a silly for every character
    //wronggggg. Uses this new thing that doesnt do that.
//every character i have more than like 2 sentences to talk about, in any case


let expandButton = document.querySelectorAll('.expandButton')
const detectButton = ()=>{
    expandButton.forEach((element)=>{
        let hiddenContent = (element.parentElement.querySelector('.hide'))
        element.addEventListener("click",(event)=>{
            if ((event.target.classList == 'expandButton') == true){
                console.log(hiddenContent)
                hiddenContent.classList.toggle('hide')
                if (hiddenContent.classList.contains('hide')){
                    event.target.innerHTML = "OPEN AGAIN?";
                }else{
                    event.target.innerHTML = "CLOSE?";
                }
            }else{
                console.log("How.")
                return
            }
        })
    })
}
detectButton()


/* const toggleDisplay = (target)=>{
    console.log("-<||>-")
    console.log(target.id)
    var theLight = document.getElementById(target.id);  
    console.log(theLight)
    theLight.classList.toggle('hide');
} */


// function acaudInfo(){

//     var theSwitch = document.querySelector('#acaudSwitch'); //ok these are like
//     var theLight = document.getElementById('acaudLight');   //exactly the same

//     if (theLight.classList.contains('hide') ){
//         theLight.classList.remove('hide');
//         theSwitch.innerHTML = "too much red.";
//     }else{
//         theLight.classList.add('hide');
//         theSwitch.innerHTML = "can you say that again?";
//     }
// }






// function mechaeInfoOFF(){
//     /* let target = document.getElementById('mechaeLight')
//     console.log(target)
//     toggleDisplay(target) */
//     var theSwitch = document.getElementById('mechaeSwitch');
//     var theLight = document.getElementById('mechaeLight');

//     if (theLight.classList.contains('hide')){
//         theLight.classList.remove('hide');
//         theSwitch.innerHTML = "seen enough?";
//     }else{
//         theLight.classList.add('hide');
//         theSwitch.innerHTML = "read again?";
//     }
// }



// function sc4vInfo(){
//     /* let target = document.getElementById('sc4vLight')
//     console.log(target)
//     toggleDisplay(target) */
//     var theSwitch = document.getElementById('sc4vSwitch');
//     var theLight = document.getElementById('sc4vLight');

//     if (theLight.classList.contains('hide')){
//         theLight.classList.remove('hide');
//         theSwitch.innerHTML = "less, please";
//     }else{
//         theLight.classList.add('hide');
//         theSwitch.innerHTML = "read it again?";
//     }
// }