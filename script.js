// Get the necessary elements
const resultHeading = document.getElementById("result-heading");
const dice1Img = document.querySelector(".img1");
const dice2Img = document.querySelector(".img2");
const rollBtn = document.getElementById("roll-btn");

// Define a function to roll the dice and update the images and heading
function rollDice() {
  // Generate random numbers
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Update the dice images
  dice1Img.src = `/images/dice${randomNumber1}.png`;
  dice2Img.src = `/images/dice${randomNumber2}.png`;

  // Update the heading
  if (randomNumber1 > randomNumber2) {
    resultHeading.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    resultHeading.textContent = "🚩 Player 2 Wins!";
  } else {
    resultHeading.textContent = "Draw!";
  }
}

// Add a click event listener to the button
rollBtn.addEventListener("click", rollDice);
