// Get the necessary DOM elements
const donationButton = document.getElementById("donation-btn"); // Donation button
const historyButton = document.getElementById("history-btn"); // History button
const cardsSection = document.getElementById("cards-section"); // Cards section
const historySection = document.getElementById("history-section"); // History section

// Function to show the donation cards and hide the history section
donationButton.addEventListener("click", function () {
  cardsSection.style.display = "block"; // Show the cards section
  historySection.style.display = "none"; // Hide the history section
});

// Function to show the history section and hide the donation cards
historyButton.addEventListener("click", function () {
  cardsSection.style.display = "none"; // Hide the cards section
  historySection.style.display = "block"; // Show the history section
});



// Get the total target amount from the header
let totalTargetAmount = document.getElementById("total-target").innerText;
totalTargetAmount = parseInt(totalTargetAmount); // Convert the text to an integer

// Card 1: Education Fund
const card1DonateButton = document.getElementById("card1-donate-btn");
const card1Amount = document.getElementById("card1-amount"); // The amount displayed in the card
const card1Input = document.getElementById("card1-input"); // The input field for donation

// Card 2: Healthcare Fund
const card2DonateButton = document.getElementById("card2-donate-btn");
const card2Amount = document.getElementById("card2-amount");
const card2Input = document.getElementById("card2-input");

// Card 3: Environmental Fund
const card3DonateButton = document.getElementById("card3-donate-btn");
const card3Amount = document.getElementById("card3-amount");
const card3Input = document.getElementById("card3-input");

// Function to handle the donation process for each card
function handleDonation(cardInput, cardAmount) {
  const donationValue = parseInt(cardInput.value); // Get the donation amount from input

  if (!isNaN(donationValue) && donationValue > 0) {
    // Update the card's donation amount
    const currentCardAmount = parseInt(cardAmount.innerText);
    cardAmount.innerText = currentCardAmount + donationValue;

    // Subtract from the total target amount
    totalTargetAmount -= donationValue;
    document.getElementById("total-target").innerText = totalTargetAmount;

    // Clear the input field after donation
    cardInput.value = "";
  } else {
    alert("Please enter a valid donation amount.");
  }
}

// Event listeners for the "Donate" buttons
card1DonateButton.addEventListener("click", function () {
  handleDonation(card1Input, card1Amount);
});

card2DonateButton.addEventListener("click", function () {
  handleDonation(card2Input, card2Amount);
});

card3DonateButton.addEventListener("click", function () {
  handleDonation(card3Input, card3Amount);
});



