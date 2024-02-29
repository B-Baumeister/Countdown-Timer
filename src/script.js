const intervalID = setInterval(updateCountdown, 1000);

///////////////////////////////////////////////
function updateCountdown() {
  const countDownDate = getCountdownDate();
  const parsedDate = Date.parse(countDownDate);
  const now = new Date();

  let difference = new Date(parsedDate) - now;
  //new Date('YYYY-MM-DDTHH:MM:SS');
  if (isNaN(parsedDate)) {
    difference = 0;
  }
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  if (difference < 0) {
    document.getElementById('timer').style.display = 'none';
    document.getElementById('pastEvent').style.display = 'flex';
  } else {
    document.getElementById('timer').style.display = 'flex';
    document.getElementById('pastEvent').style.display = 'none';
  }
  return changeInput([days, hours, minutes, seconds]);
}
////////////////////////////////////////////////////////
function getCountdownDate() {
  return document.getElementById(`InputCountdownDate`).value;
}
////////////////////////////////////////////////////////
function changeInput([days, hours, minutes, seconds]) {
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

////////////////////////////////////////////////////////
const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  updateCountdown();
});
