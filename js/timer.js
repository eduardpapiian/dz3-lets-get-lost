var submit = document.getElementById("refresh-date");
submit.onclick = function(event) { 
getValue(document.getElementById("display"));

const MSECS_IN_SEC = 1000;
const MINS_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINS_IN_DAY = MINS_IN_HOUR * HOURS_IN_DAY;
const MSECS_IN_DAY = MINS_IN_DAY * MSECS_IN_SEC;

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  return {
    'total': Date.parse(endtime) - Date.parse(new Date()),
    'days': Math.floor(t / (MSECS_IN_DAY * MINS_IN_HOUR)),
    'hours': Math.floor((t / MSECS_IN_DAY) % HOURS_IN_DAY),
    'minutes': Math.floor((t / MINS_IN_DAY ) % MINS_IN_HOUR),
    'seconds': Math.floor((t / MSECS_IN_SEC) % MINS_IN_HOUR)
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
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


  var deadline="January 01 2018 00:00:00 GMT+0300";
  var deadline = new Date(Date.parse(new Date()) + getValue * MSECS_IN_DAY * MINS_IN_HOUR);
  initializeClock('clockdiv', deadline);
};



