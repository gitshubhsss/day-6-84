let h1=document.querySelector("h1");

function changeColor(color,delay,nextColor) {//here next color is a callback funtion
    setTimeout(() => {
        h1.style.color=color;
        nextColor();
    }, delay);
}

changeColor("green",2000,()=>{
    changeColor("red",1000,()=>{
        changeColor("green",1000)
    })
});