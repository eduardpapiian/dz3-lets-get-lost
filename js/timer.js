const submit = document.getElementById("refresh-date");
submit.addEventListener('click', function(event) { 
event.preventDefault();
getValue(document.getElementById("display"));

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - new Date();
  return {
    'total': Date.parse(endtime) - Date.parse(new Date()),
    'days': Math.floor(t / (1000 * 60 * 60 * 24)),
    'hours': Math.floor((t / (1000 * 60 * 60)) % 24),
    'minutes': Math.floor((t / 1000 / 60) % 60),
    'seconds': Math.floor((t / 1000) % 60)
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const timer = getTimeRemaining(endtime);

    daysSpan.innerHTML = timer.days;
    hoursSpan.innerHTML = ('0' + timer.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + timer.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + timer.seconds).slice(-2);

    if (timer.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

function getValue(element){
    console.log(element.value);
    getValue = (element.value);
}

  let deadline = new Date(Date.parse(new Date()) + getValue * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);
});



