//a silly for every character
//every character i have more than like 2 sentences to talk about, in any case
const toggleDisplay = (target)=>{
    console.log("-<||>-")
    console.log(target.id)
    var theLight = document.getElementById(target.id);   //exactly the same
    console.log(theLight)
    theLight.classList.toggle('hide');

}


function acaudInfo(){
    /* let target = document.getElementById('acaudLight')
    console.log(target)
    toggleDisplay(target) */
    var theSwitch = document.querySelector('#acaudSwitch'); //ok these are like
    var theLight = document.getElementById('acaudLight');   //exactly the same

    if (theLight.classList.contains('hide') ){
        theLight.classList.remove('hide');
        theSwitch.innerHTML = "too much red.";
    }else{
        theLight.classList.add('hide');
        theSwitch.innerHTML = "can you say that again?";
    }
}



function mechaeInfo(){
    /* let target = document.getElementById('mechaeLight')
    console.log(target)
    toggleDisplay(target) */
    var theSwitch = document.getElementById('mechaeSwitch');
    var theLight = document.getElementById('mechaeLight');

    if (theLight.classList.contains('hide')){
        theLight.classList.remove('hide');
        theSwitch.innerHTML = "seen enough?";
    }else{
        theLight.classList.add('hide');
        theSwitch.innerHTML = "read again?";
    }
}



function sc4vInfo(){
    /* let target = document.getElementById('sc4vLight')
    console.log(target)
    toggleDisplay(target) */
    var theSwitch = document.getElementById('sc4vSwitch');
    var theLight = document.getElementById('sc4vLight');

    if (theLight.classList.contains('hide')){
        theLight.classList.remove('hide');
        theSwitch.innerHTML = "less, please";
    }else{
        theLight.classList.add('hide');
        theSwitch.innerHTML = "read it again?";
    }
}