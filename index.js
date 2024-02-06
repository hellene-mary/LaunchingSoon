// дата відкриття
const openingDate = new Date("2024-04-01 10:00:00");

// реф
// const stopBtn = document.querySelector(".btnStop");
const dayFirstValueEl = document.querySelector("[data-days-fst]");
const daySecondValueEl = document.querySelector("[data-days-snd]");
const hoursFirstValueEl = document.querySelector("[data-hours-fst]");
const hoursSecondValueEl = document.querySelector("[data-hours-snd]");
const minFirstValueEl = document.querySelector("[data-minutes-fst]");
const minSecondValueEl = document.querySelector("[data-minutes-snd]");
// const secValueEl = document.querySelector('[data-seconds]');
const secFirstValueEl = document.querySelector("[data-seconds-fst]");
const secSecondValueEl = document.querySelector("[data-seconds-snd]");

let timerId = null;

// функція підрухунку часу до відкриття
function timer() {
  timerId = setInterval(() => {
    if (openingDate.getTime() >= Date.now()) {
      const timerIndicator = openingDate.getTime() - Date.now();
      const { days, hours, minutes, seconds } = convertMs(timerIndicator);
      // console.log('~ Time for end', `${days}:${hours}:${minutes}:${seconds}`);

      dayFirstValueEl.textContent = days.split("")[0];
      daySecondValueEl.textContent = days.split("")[1];

      hoursFirstValueEl.textContent = hours.split("")[0];
      hoursSecondValueEl.textContent = hours.split("")[1];

      minFirstValueEl.textContent = minutes.split("")[0];
      minSecondValueEl.textContent = minutes.split("")[1];

      secFirstValueEl.textContent = seconds.split("")[0];
      secSecondValueEl.textContent = seconds.split("")[1];
    } else {
      alert("The opening date has already passed!");
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// зупинка таймеру
function onStopBtnClick() {
  console.log("stop");
  clearInterval(timerId);
}

// stopBtn.addEventListener("click", onStopBtnClick);
timer();
