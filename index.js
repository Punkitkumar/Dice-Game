var randomNumber1 = Math.floor((6*Math.random())+1);
document.getElementsByClassName("dice")[0].lastElementChild.setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor((6*Math.random())+1);
document.getElementsByClassName("dice")[1].lastElementChild.setAttribute("src","images/dice"+randomNumber2+".png");
var str ;
if(randomNumber1==randomNumber2){
    str = "Draw!"
}
if(randomNumber1>randomNumber2){
    str = "🚩 Player 1 Win!"
}
if(randomNumber1<randomNumber2){
    str = "Player 2 Win! 🚩"
}
document.getElementsByTagName("h1")[0].innerText=str;