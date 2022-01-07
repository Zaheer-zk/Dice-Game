var playerName1 = prompt("Enter first player name");

document.querySelectorAll("p")[0].innerHTML = playerName1 ;

var playerName2 = prompt("Enter second player name");

document.querySelectorAll("p")[1].innerHTML = playerName2 ;



var randomNumber1 = Math.floor( Math.random() * 6 + 1 ); // 0-6

var randomImageSource = "images/dice" + randomNumber1 + ".png"; // dice1 - dice6 images

var randomNumber2 = Math.floor( Math.random() * 6 + 1 ); 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



if ( randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent= playerName1 + " Won"
}
else if(randomNumber1< randomNumber2){
  document.querySelector("h1").textContent= playerName2 +" Won"

}

else{
  document.querySelector("h1").textContent="Draw !"

}