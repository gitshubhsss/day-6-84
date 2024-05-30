let gameSeq = [];
let userSeq = [];
let highScore = 0;
const btns = ["red", "green", "orange", "purple"];
let h2 = document.querySelector("h2");
let level = 0;
let started = true;
const colBoxes = document.querySelectorAll(".box");
let body = document.querySelector("body");


//step -1
//press any key to start the game
document.addEventListener("keypress", function () {
  if (started == true) {
    console.log("game started");
    levelUp();
    started = false; //once the game started we dont start it again
  }
});

//step-2
//As soon as the game starts the level set to 1 and radom color should pop up
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  //as soon as the level goes up one we select one random class from the btns array and we pass it
  //to the funtion random btn
  let randIndex = Math.floor(Math.random() * btns.length);
  let randColor = btns[randIndex];
  let btn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(`game sequence = ${gameSeq}`);
  gameFlash(btn);
}
function gameFlash(btn) {
  btn.classList.add("flashBtn");
  setTimeout(() => {
    btn.classList.remove("flashBtn");
  }, 300);
}

//step-3
//select all the buttons and push it into the user sequence
for (let btn of colBoxes) {
  btn.addEventListener("click", btnPress);
}
function btnPress() {
  let btn = this;
  userFlash(btn);
  let color = this.getAttribute("id");
  userSeq.push(color);
  console.log(`userSequence ${userSeq}`);
  checkAns(userSeq.length - 1);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 300);
}

//step-4
//check the usersequence and the game sequence
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp(), 300);
    }
  } else {
    h2.innerText = `Game over ! Press any key to start the game Your score was ${level}`;
    highestScore();
    redBtn();
    reset();
  }
}
function redBtn() {
  body.classList.add("gameover");
  setTimeout(() => {
    body.classList.remove("gameover");
  }, 300);
}
function highestScore() {
  let h3=document.querySelector("h3")
  if (highScore < gameSeq.length) {
    highScore = gameSeq.length;
    h3.innerText = `High score is ${highScore}`;
    console.log(highScore);
  }
}
function reset() {
  started = true;
  level = 0;
  gameSeq = [];
  userSeq = [];
}
