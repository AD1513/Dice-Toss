var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6


var randomDiceImage = "Dice"+ randomNumber1 + ".png"; //dice1.png-dice6.png

var  randomImageSource = "images/"+ randomDiceImage; //images/dice1.png-dice6.png

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src",randomImageSource)

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



//if player 1 wins or lose or draws
if(randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "🎊Player 1 is Winner!🎊";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h2").innerHTML = "🎊Player 2 is Winner!🎊";
}
else {
  document.querySelector("h2").innerHTML = "🎊Draw!🎊";
}
