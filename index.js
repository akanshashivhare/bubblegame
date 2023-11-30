function bubble(){
    let clutter="";

for(let i=1; i<=108; i++)
{
   let rn = Math.floor(Math.random()*10)
clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
}
bubble();


let timer = 60;
function runtimer(){
   let timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerr").textContent= timer;
        }
else{

    clearInterval(timerint);
    document.querySelector("#pbottom").innerHTML= `<h2>GAME OVER</h2>`;
}
    },1000);
}
runtimer();


let hitrn =0;
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}

getnewhit();


let score = 0;
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;

}
increasescore();



document.querySelector("#pbottom").addEventListener("click", function (details)
{
let clicknum = Number(details.target.textContent); 
if(clicknum == hitrn){
    increasescore();
bubble();
    getnewhit();

}
});


