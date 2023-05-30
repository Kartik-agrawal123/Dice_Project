var randNum1 = Math.floor(Math.random()*6+1);
console.log(randNum1);
var randNum2 = Math.floor(Math.random()*6+1);
console.log(randNum2);
if(randNum1 == 1){
    document.getElementById('img1').src = "images/dice1.jpg";
}
else if(randNum1 == 2){
    document.getElementById('img1').src = "images/dice2.jpg";
}
else if(randNum1 == 3){
    document.getElementById('img1').src = "images/dice3.jpg";
}
else if(randNum1 == 4){
    document.getElementById('img1').src = "images/dice4.jpg";
}
else if(randNum1 == 5){
    document.getElementById('img1').src = "images/dice5.jpg";
}
else if(randNum1 == 6){
    document.getElementById('img1').src = "images/dice6.jpg";
}
if(randNum2 == 1){
    document.getElementById('img2').src = "images/dice1.jpg";
}
else if(randNum2 == 2){
    document.getElementById('img2').src = "images/dice2.jpg";
}
else if(randNum2 == 3){
    document.getElementById('img2').src = "images/dice3.jpg";
}
else if(randNum2 == 4){
    document.getElementById('img2').src = "images/dice4.jpg";
}
else if(randNum2 == 5){
    document.getElementById('img2').src = "images/dice5.jpg";
}
else if(randNum2 == 6){
    document.getElementById('img2').src = "images/dice6.jpg";
}

if(randNum1>randNum2){
    document.getElementById('player').innerHTML = "😎 Player 1 Win's";
}
else if(randNum2>randNum1){
    document.getElementById('player').innerText = "Player 2 Win's 😎";
}
else{
    document.getElementById('player').innerText = "Play Again!😜";
}