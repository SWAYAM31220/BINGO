const board = document.getElementById("board");
const numbersDiv = document.getElementById("numbers");
const cardDiv = document.getElementById("card");

let numbers = [];
let cardNumbers = [];

// Function to generate a random number between 1 and 75
function getRandomNumber() {
  return Math.floor(Math.random() * 75) + 1;
}

// Function to generate 25 random numbers and display them on the board
function generateNumbers() {
  numbersDiv.innerHTML = "";
  numbers = [];
  for (let i = 0; i < 25; i++) {
    let randomNumber = getRandomNumber();
    while (numbers.includes(randomNumber)) {
      randomNumber = getRandomNumber();
    }
    numbers.push(randomNumber);
    numbersDiv.innerHTML += "<span>" + randomNumber + "</span>";
  }
}

// Function to generate a player's bingo card
function generateCard() {
  cardDiv.innerHTML = "";
  cardNumbers = [];
  for (let i = 0; i < 25; i++) {
    let randomNumber = getRandomNumber();
    while (cardNumbers.includes(randomNumber)) {
      randomNumber = getRandomNumber();
    }
    cardNumbers.push(randomNumber);
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = randomNumber;
    cardDiv.appendChild(cell);
  }
}

generateNumbers();
generateCard();

// Event listener for the "Next Number" button
document.getElementById("nextNumberButton").addEventListener("click", function() {
  let nextNumber = numbers.shift();
  numbersDiv.innerHTML = "";
  for (let i = 0; i < numbers.length; i++) {
    numbersDiv.innerHTML += "<span>" + numbers[i] + "</span>";
  }
  if (cardNumbers.includes(nextNumber)) {
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerHTML == nextNumber) {
        cells[i].classList.add("selected");
      }
