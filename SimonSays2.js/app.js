let h2=document.querySelector("h2");
let level=0;
let started=true;
let colorClasses=["red","green","orange","purple"];
let allBtns=document.querySelectorAll(".box");
let userSeq=[];
let gameSeq=[];
let highScore=0;
let h3=document.querySelector("h3");
let body=document.querySelector("body");
document.body.addEventListener("keypress",function(){
    if(started==true){
        levelup();
        started=false;
    }
});
function levelup() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`

    let randInx=Math.floor(Math.random()*colorClasses.length);
    let randColor=colorClasses[randInx];
    let btn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(gameSeq.length);
    flashBtn(btn);
}
function flashBtn(btn){
    btn.classList.add("flashBtn");
    setTimeout(() => {
        btn.classList.remove("flashBtn");
    }, 300);
}

//Select all the buttons from the html and add event listener on them 
for(btn of allBtns){
    btn.addEventListener("click",userpress)
}

function userpress() {
    let btn=this;
    userflash(btn);
    let color=btn.getAttribute("id");
    userSeq.push(color);
    console.log(userSeq);
    checkAns(userSeq.length-1);
    
}

function userflash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 300);
}

function checkAns(idx) {
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelup(),300)
        }
    }
    else{
        h2.innerText=`Game over Press Any key to EXit ! you Score was ${level}`;
        highestScore();
        body.style.backgroundColor="red";
        setTimeout(() => {
            body.style.backgroundColor="white";
        }, 500);
        reset()
    }
}

function reset() {
    level=0;
    userSeq=[];
    gameSeq=[];
    started=true;
}
function highestScore() {
    if(highScore<gameSeq.length){
        highScore=gameSeq.length;
        h3.innerText=`Highest score ${highScore}`
    }
}