//purpose: creating a simple dice game between two players that produces random rolls, and determines a winner!
//concepts: variables, control flow, concatentation, DOM manipulation
//obstacles: I needed to break down the goal: "Change the <img> to a Random Dice" into smaller parts
/* reminders: i can manipulate the HTML directly from index.js (querySelector, .setAttribute) 
i can refactor code to make things shorter, but there is a value in having expressive code*/

//////////////////////Player 1//////////////////////////
//3. create number that outputs 1-6 to simulate die roll
var player1 = Math.ceil(Math.random() * 6);

//4. create random img associated with die roll + //5. create source folder for images
var randomDiceImage = "dice" + player1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - dice6.png

//6. select image at index 0 (player1 die) so that we can change its source (img)
var image1 = document.querySelectorAll("img")[0];

//7. randomize images
image1.setAttribute("src", randomImageSource);

//////////////////////Player 2//////////////////////////
//Now, we repeat the steps for the second die
var player2 = Math.ceil(Math.random() * 6);

//8. in this line, we're combining steps from player 1
var randomImageSource2 = "images/dice" + player2 + ".png";

//9. combine querySelector with setAttribute
//notice: i'm selecting index 1 (vs. 0), and randomImageSource is now 2 (vs. 1)
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//After doing all this, refreshing the page should produce random dice images, huzzah!

//10. Determine a winner with control flow
if (player1 > player2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (player2 > player1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "🤷🏽‍♀️ Draw! 🤷🏽‍♂️";
}