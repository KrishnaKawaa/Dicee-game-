var randomno1 = Math.floor(Math.random()*6)+1 ;

var randomdiceimg1 = "images/Dice"+ randomno1 + ".png";


var image = document.querySelectorAll("img")[0];
image.setAttribute("src",randomdiceimg1);


var randomno2 = Math.floor(Math.random()*6)+1 ;
var randomdiceimg2 = "images/Dice"+ randomno2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomdiceimg2);

if (randomno1 > randomno2) {
    // Select all <h1> elements and update their innerHTML
    document.querySelectorAll("h1").forEach(h1 => h1.innerHTML = "Player 1 Wins 🚩");
} else if (randomno1 < randomno2) {
    // Select all <h1> elements and update their innerHTML
    document.querySelectorAll("h1").forEach(h1 => h1.innerHTML = "Player 2 Wins 🚩");
} else {
    // Select all <h1> elements and update their innerHTML
    document.querySelectorAll("h1").forEach(h1 => h1.innerHTML = "It's a tie :)");
}
