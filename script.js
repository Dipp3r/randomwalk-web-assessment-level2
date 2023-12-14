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