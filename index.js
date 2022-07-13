let homeScore = 0;
let homeScorePoint = document.getElementById('home_score');

let guestScore = 0;
let guestScorePoint = document.getElementById('guest_score');

let scoreBoard = 0;
//Reset button
let resetButton = document.getElementById('btn-reset');

// homeScore function

function addOne(scoreBoard) {
  if (scoreBoard == homeScorePoint) {
    let newAddPoint = (homeScore += 1);
    homeScorePoint.textContent = newAddPoint;
  } else {
    let newAddPoint = (guestScore += 1);
    guestScorePoint.textContent = newAddPoint;
  }
}
function addTwo(scoreBoard) {
  if (scoreBoard == homeScorePoint) {
    let newAddPoint = (homeScore += 2);
    homeScorePoint.textContent = newAddPoint;
  } else {
    let newAddPoint = (guestScore += 2);
    guestScorePoint.textContent = newAddPoint;
  }
}
function addThree(scoreBoard) {
  if (scoreBoard == homeScorePoint) {
    let newAddPoint = (homeScore += 3);
    homeScorePoint.textContent = newAddPoint;
  } else {
    let newAddPoint = (guestScore += 3);
    guestScorePoint.textContent = newAddPoint;
  }
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  newAddPoint = 0;
  homeScorePoint.textContent = 0;
  guestScorePoint.textContent = 0;
}
