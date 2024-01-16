
// дата відкриття
const openingDate = new Date('2024-10-12 10:00:00');
// const dateNow = Date.now()
// const openingDateMs = openingDate.getTime();

// реф
const stopBtn = document.querySelector(".btnStop");
const dayValueEl = document.querySelector('[data-days]');
const hoursValueEl = document.querySelector('[data-hours]');
const minValueEl = document.querySelector('[data-minutes]');
const secValueEl = document.querySelector('[data-seconds]');

let timerId = null;

// функція підрухунку часу до відкриття
function timer () {
  timerId = setInterval(() => {
    if (openingDate.getTime() >= Date.now()) {
      const timerIndicator = openingDate.getTime() - Date.now();
      const { days, hours, minutes, seconds } = convertMs(timerIndicator);
      // console.log('~ Time for end', `${days}:${hours}:${minutes}:${seconds}`);
      
      dayValueEl.textContent = days;
      hoursValueEl.textContent = hours;
      minValueEl.textContent = minutes;
      secValueEl.textContent = seconds;
    } else {
      alert("Застаріла дата відриття")
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// зупинка таймеру
function onStopBtnClick () {
  console.log("stop");
  clearInterval(timerId);
};

stopBtn.addEventListener("click", onStopBtnClick);
timer()



