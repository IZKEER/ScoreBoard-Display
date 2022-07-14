let homeScore = 0;
let homeScorePoint = document.getElementById('home_score');

let guestScore = 0;
let guestScorePoint = document.getElementById('guest_score');

let scoreBoard = 0;
//Reset button
let resetButton = document.getElementById('btn-reset');

let addPoint = 0;
let numAdd = 0;
// homeScore function

function choose(teamToAdd, addPoint) {
  if (teamToAdd == homeScorePoint) {
    homeScore = add(homeScore, addPoint);
    homeScorePoint.textContent = homeScore;
  } else {
    guestScore = add(guestScore, addPoint);
    guestScorePoint.textContent = guestScore;
  }
}

function add(scoreBoard, numAdd) {
  scoreBoard += numAdd;
  return scoreBoard;
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  homeScorePoint.textContent = 0;
  guestScorePoint.textContent = 0;
}
