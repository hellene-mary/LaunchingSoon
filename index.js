// const text = 'hello console'
// console.log("🚀 ~ text:", text)

const startBtn = document.querySelector(".btnStart");
const stopBtn = document.querySelector(".btnStop");
const hoursValue = document.querySelector(".hours");
const minutesValue = document.querySelector(".minutes");
const secondsValue = document.querySelector(".seconds");
const list = document.querySelector(".list");
let timerId = null;

const getTime = () => {
  const time = new Date();
  let hoursValueNow = time.getHours();
  let minutesValueNow = time.getMinutes();
  let secondsValueNow = time.getSeconds();
  console.log(
    `timeNow: ${hoursValueNow}:${minutesValueNow}:${secondsValueNow}`
  );

  hoursValue.innerHTML = hoursValueNow;
  minutesValue.innerHTML = minutesValueNow;
  secondsValue.innerHTML = secondsValueNow;
};

const onStartBtnClick = () => {
  console.log("click on start");
  timerId = setInterval(() => {
    getTime();
  }, 1000);
};

const onStopBtnClock = () => {
  console.log("stop");
  clearInterval(timerId);
};

startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClock);
