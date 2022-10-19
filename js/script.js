var money;
localStorage.setItem('moneylocal', 10000);
money = parseInt(localStorage.getItem('moneylocal'));
localStorage.setItem('moneylocal', money);
document.querySelector('.moneyNumber').innerHTML = money + ' ';

let banana = {
    cost: 60,
    have: 1341
};

if (banana.have > 0){
    document.querySelector('.banana').innerHTML = 'Бананы (' + banana.have + ')';
}

function mouseSound(x){
    switch(x){
        case 'gameSound': var audio = new Audio('sound/mouseClick.mp3'); break;
        case 'warehouseSound': var audio = new Audio('sound/warehouse.mp3'); break;
        case 'deliverySound': var audio = new Audio('sound/delivery.mp3'); break;
    }
    audio.volume = 0.1;
    audio.play();
}
function startGame(){
    document.querySelector(".menu-game").style.display = "none";
}
function deliveryMenu(){
    if(document.querySelector(".delivery").style.display != "block"){
        document.querySelector(".warehouse-info").style.display = "none";
        document.querySelector(".delivery").style.display = "block";
    }
}
function warehouseMenu(){
    if(document.querySelector(".warehouse-info").style.display != "block"){
        document.querySelector(".delivery").style.display = "none";
        document.querySelector(".warehouse-info").style.display = "block";
    }
}
function closeWindow(whoClose){
    if(whoClose == 'infoWindow'){
        document.querySelector(".warehouse-info").style.display = "none";
        document.querySelector(".delivery").style.display = "none";
    }
}
