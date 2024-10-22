const svg = document.querySelector("svg");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const radius = 130;

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourAngle = hours * 30 + minutes / 2;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  hourHand.setAttribute("transform", `rotate(${hourAngle} 200 200)`);
  minuteHand.setAttribute("transform", `rotate(${minuteAngle} 200 200)`);
  secondHand.setAttribute("transform", `rotate(${secondAngle} 200 200)`);

  requestAnimationFrame(updateClock);
}

setInterval(updateClock, 1000);

const hour = document.getElementById("clock-hour");
const minute = document.getElementById("clock-minute");
const second = document.getElementById("clock-second");
const previousSecond = document.getElementById("previous-second");
const nextSecond = document.getElementById("next-second");

function updateClockUnit(unitElement, newValue) {
  if (unitElement.textContent !== newValue) {
    unitElement.textContent = newValue;
    unitElement.classList.add("slide-up");

    setTimeout(() => {
      unitElement.classList.remove("slide-up");
    }, 500);
  }
}

function updateTime() {
  const now = new Date();
  const rawHours = now.getHours();
  const hours = rawHours % 12 || 12;
  const formattedHours = hours < 10 ? "0" + hours : hours.toString();
  const minutes = now.getMinutes();
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();
  const seconds = now.getSeconds();
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds.toString();
  const previousSeconds =
    seconds === 0 ? 59 : (seconds - 1).toString().padStart(2, "0");
  const nextSeconds =
    seconds === 59 ? 0 : (seconds + 1).toString().padStart(2, "0");

  const amPm = rawHours >= 12 ? "PM" : "AM";
  document.getElementById("ampm").textContent = amPm;

  updateClockUnit(hour, formattedHours);
  updateClockUnit(minute, formattedMinutes);
  updateClockUnit(second, formattedSeconds);
  previousSecond.textContent = previousSeconds;
  nextSecond.textContent = nextSeconds;
}

setInterval(updateTime, 1000);

const clocksButton = document.getElementById("clocks");
const analogButton = document.getElementById("analog");
const digitalButton = document.getElementById("digital");
const analogClock = document.getElementById("analog-clock");
const digiClock = document.getElementById("digi-clock");

clocksButton.addEventListener("click", () => {
  analogClock.style.display = "block";
  analogClock.style.marginBottom = "0";
  digiClock.style.display = "block";
});

analogButton.addEventListener("click", () => {
  analogClock.style.display = "block";
  analogClock.style.marginBottom = "11%";
  digiClock.style.display = "none";
});

digitalButton.addEventListener("click", () => {
  analogClock.style.display = "none";
  digiClock.style.display = "block";
});
