var minute=25;
var second=0;
var timer;
var isrunning=false;

function starttimer(){
    isrunning=true;
timer=setInterval(function(){
    if(second===0){
        if(minute===0){
            clearInterval(timer);
            isrunning=false;
            playSoundAlert();
            return;
        }
        minute--;
        second=59;
    }
    else{
        second--;
    }
    document.getElementById("minute").textContent=minute;
    document.getElementById("second").textContent=second;
    
}, 1000);}

function playSoundAlert() {
    var audio = document.getElementById('alertSound');
    audio.play();
}

function pausetimer(){
    isrunning=false;
    clearInterval(timer);

}

function resettimer(){
    minute=25;
    second=0;
    document.getElementById("minute").textContent=25;
    document.getElementById("second").textContent="00";
    clearInterval(timer);
    isrunning=false;

}

window.addEventListener("DOMContentLoaded",function(){

    this.document.getElementById("starttimer").addEventListener("click",function(){
        if(!isrunning){
            starttimer();
        }
    })

    this.document.getElementById("pausetimer").addEventListener("click",function(){
        if(isrunning){
            pausetimer();
        }
    })

    this.document.getElementById("resettime").addEventListener("click",function(){
        resettimer();
    })
})

