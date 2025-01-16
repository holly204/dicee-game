
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imgOne = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", imgOne);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgTwo = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", imgTwo);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 win!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
