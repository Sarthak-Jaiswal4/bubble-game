var hitrn=0;

function makebubble(){
    var clutter=""

for(var i=0;i<=318;i++){
    var no=Math.floor(Math.random()*10)
    clutter+=`<div id="bubble">${no}</div>`
}

document.querySelector("#bot").innerHTML=clutter
}

var timer=6
function runtimer(){
    var timerend = setInterval(() => {
        if(timer>0){
            timer--;
        document.querySelector("#timer").innerHTML=timer
        }    
        else{
            clearInterval(timerend)
            document.querySelector("#bot").innerHTML=`<h1>Game Over</h1>`
        }
    }, 1000);
}

function newhit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitvar").textContent=hitrn
}

var score=0
function increasescore(){
    score+=10
    document.querySelector("#score").innerHTML=score
}

document.querySelector("#bot").addEventListener("click",function(dets){
    var clickednumber=Number(dets.target.textContent)
    if(clickednumber===hitrn){
        increasescore()
        makebubble()
        newhit()
    }
});

runtimer()
makebubble()
newhit()

