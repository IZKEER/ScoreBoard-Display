let homeScore = 0;
let homeScorePoint = document.getElementById('home_score');

let guestScore = 0;
let guestScorePoint = document.getElementById('guest_score');

//Reset button
let resetButton = document.getElementById('btn-reset');

// homeScore function

function addOneHome() {
  let newAddPoint = (homeScore += 1);
  homeScorePoint.textContent = newAddPoint;
}

function addTwoHome() {
  let newAddPoint = (homeScore += 2);
  homeScorePoint.textContent = newAddPoint;
}

function addThreeHome() {
  let newAddPoint = (homeScore += 3);
  homeScorePoint.textContent = newAddPoint;
}

//guestScore function

function addOneGuest() {
  let newAddPoint = (guestScore += 1);
  guestScorePoint.textContent = newAddPoint;
}

function addTwoGuest() {
  let newAddPoint = (guestScore += 2);
  guestScorePoint.textContent = newAddPoint;
}

function addThreeGuest() {
  let newAddPoint = (guestScore += 3);
  guestScorePoint.textContent = newAddPoint;
}

//reset score function

function reset() {
  homeScore = 0;
  guestScore = 0;
  newAddPoint = 0;
  homeScorePoint.textContent = 0;
  guestScorePoint.textContent = 0;
}
