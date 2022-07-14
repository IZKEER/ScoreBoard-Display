// homeScore function

function choose(teamToAdd, addPoint) {
  let element = document.getElementById(teamToAdd);
  element.textContent = parseInt(element.textContent) + addPoint;
}

function reset() {
  document.getElementById('home_score').textContent = 0;
  document.getElementById('guest_score').textContent = 0;
}
