// --{ index page testing silliness }--
function nowJustGetRidOfIt(){
    var theSwitch = document.getElementById('sayMore');
    var theLight = document.getElementById('sayLess');

    if (theLight.style.display === "none"){
        theLight.style.display = 'inline';
        theSwitch.innerHTML = "i don&#39;t care about this actually";
    }else{
        theLight.style.display = 'none';
        theSwitch.innerHTML = "open again?";
    }
}

function removeThing(){
    document.getElementById('blehh').classList = "hide"
}
function poke(){
    var check = document.getElementById('appear');
    check.checked = true;
}
function onAndOff(){
    if (document.getElementById('appear').checked)
    {document.getElementById('target').classList = "hide";}
    else {document.getElementById('target').classList = "lala";}
}
function blaw(){}
function blaj(){}

function breakTargets(){
    if (document.getElementById('idkKirby').checked)
    {const Help = document.getElementsByClassName('hitTheTargets');
    for (let i = 0; i < Help.length; i++) {
        Help[i].classList = 'hitTheTargets hide';}}
    else {const Help = document.getElementsByClassName('hitTheTargets');
    for (let i = 0; i < Help.length; i++) {
        Help[i].classList = 'hitTheTargets';}}
}