function startGame(){
    document.querySelector(".menu-game").style.display = "none";
}
function deliveryMenu(){
    if(document.querySelector(".delivery").style.display != "block"){
        document.querySelector(".delivery").style.display = "block";
    }
}
function closeWindow(whoClose){
    if(whoClose == 'deliveryWindow'){
        document.querySelector(".delivery").style.display = "none";
    }
}
