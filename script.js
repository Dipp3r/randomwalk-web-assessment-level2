const statusDisplay = document.querySelector('.game--status');
const x_score = document.querySelector('.x-score');
const y_score = document.querySelector('.y-score');
var scoreBoard = document.querySelector('.score-board');

var scoreScreen = false;

currentXScore = 0;
currentYScore = 0;

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `${currentPlayer} take the turn! ⏳`;

statusDisplay.innerHTML = currentPlayerTurn();