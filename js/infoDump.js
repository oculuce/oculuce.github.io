//a silly for every character
//every character i have more than like 2 sentences to talk about, in any case



function acaudInfo(){
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