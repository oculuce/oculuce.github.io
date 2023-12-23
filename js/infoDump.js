//a silly for every character
//every character i have more than like 2 sentences to talk about, in any case



function acaudInfo(){
    var theSwitch = document.getElementById('acaudSwitch');
    var theLight = document.getElementById('acaudLight');

    if (theLight.style.display === "none"){
        theLight.style.display = 'inline';
        theSwitch.innerHTML = "too much red.";
    }else{
        theLight.style.display = 'none';
        theSwitch.innerHTML = "can you say that again?";
    }
}



function mechaeInfo(){
    var theSwitch = document.getElementById('mechaeSwitch');
    var theLight = document.getElementById('mechaeLight');

    if (theLight.style.display === "none"){
        theLight.style.display = 'inline';
        theSwitch.innerHTML = "seen enough?";
    }else{
        theLight.style.display = 'none';
        theSwitch.innerHTML = "read again?";
    }
}



function sc4vInfo(){
    var theSwitch = document.getElementById('sc4vSwitch');
    var theLight = document.getElementById('sc4vLight');

    if (theLight.style.display === "none"){
        theLight.style.display = 'inline';
        theSwitch.innerHTML = "less, please";
    }else{
        theLight.style.display = 'none';
        theSwitch.innerHTML = "read it again?";
    }
}