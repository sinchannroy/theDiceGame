
//ALways follow the order in js like completely do task of 1 dice then of another dice.Dont mix the steps.

// Genration of dice1 result
var randomNumber1 = Math.floor (Math.random () * 6) + 1;
var randomNumberResult1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll ("img") [0].setAttribute ("src", randomNumberResult1);


// Genration of dice2 result
var randomNumber2 = Math.floor (Math.random () * 6) + 1;
var randomNumberResult2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll ("img") [1].setAttribute ("src" , randomNumberResult2); //concentrate on this line



// Declaration of result
if (randomNumber1 > randomNumber2) {
    document.querySelector ("h1").innerHTML = "🚩Palyer 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector ("h1").innerHTML = "Palyer 2 Wins!🚩";
}

else {
    document.querySelector ("h1").innerHTML ="Draw!";
}

