var score = 0;
var timer = 60; //Global
var hitrn;

function increaseScore(){
    score+=  10;
    document.querySelector("#scoreval").textContent=score;
}


function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitrn;
}


function makeBubble(){
var clutter = "";

for(var i = 1; i<=207; i++){
    var b = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${b}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}




function runTimmer(){
    var timergame = setInterval(function(){
        if(timer>0) {
            timer--;
            document.querySelector("#timerval").textContent=timer;
                }

        else{

            clearInterval(timergame);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }        
    },1000);
}

document.querySelector("#pbtm").addEventListener("click" , function(details){
    var clickednum = Number(details.target.textContent); 
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})



runTimmer();
makeBubble();
getNewHit();









//pbtm is the parent of all the bubbles.

