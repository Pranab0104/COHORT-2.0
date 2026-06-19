function frontpageTrans() {
  let allElem = document.querySelectorAll(".elem");
  let allFull = document.querySelectorAll(".fullelem");
  let backBtn = document.querySelectorAll(".fullelem .line .back");
  allElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      allFull[elem.id].style.display = "block";
    });
  });

  backBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      allFull[back.id].style.display = "none";
    });
  });
}

frontpageTrans();

function todo() {
  var Tak = [];

  if (localStorage.getItem("Tak")) {
    Tak = JSON.parse(localStorage.getItem("Tak"));
  } else {
    console.log("Task item is empty");
  }

  function Todopage() {
    let tk = document.querySelector(".allTask");
    let sum = "";
    // console.log(tk);
    Tak.forEach(function (elem, idx) {
      sum += `<div class="task">
    <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
    <button id=${idx}>Accomplished</button>
    </div>`;
    });

    tk.innerHTML = sum;

    localStorage.setItem("Tak", JSON.stringify(Tak));

    document.querySelectorAll(".task button").forEach(function (Btn) {
      Btn.addEventListener("click", function () {
        Tak.splice(Btn.id, 1);
        Todopage();
        location.reload();
      });
    });
  }

  Todopage();

  let form = document.querySelector(".addTask form");
  let Taskinput = document.querySelector(".addTask form #tk");
  let Descinput = document.querySelector(".addTask form textarea");
  let Check = document.querySelector(".addTask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(Taskinput.value);
    // console.log(Descinput.value);
    // console.log(Check.checked);

    Tak.push({
      task: Taskinput.value,
      details: Descinput.value,
      imp: Check.checked,
    });

    Todopage();

    Taskinput.value = "";
    Descinput.value = "";
    Check.checked = "false";
  });
}

todo();

function everyDay() {
  var plan = document.querySelector(".daily-plan");

  var planData = JSON.parse(localStorage.getItem("planData")) || {};

  var hrs = Array.from(
    { length: 18 },
    (elem, idx) => `${6 + idx}:00 - ${7 + idx}:00`,
  );

  var wholeDay = "";
  hrs.forEach(function (elem, idx) {
    var savedData = planData[idx] || "";

    wholeDay =
      wholeDay +
      `<div class="daily-plan-timer">
              <p>${elem}</p>
              <input id=${idx} type="text" placeholder="..." value= ${savedData}>
            </div>`;
  });

  plan.innerHTML = wholeDay;

  var inp = document.querySelectorAll(".daily-plan input");

  inp.forEach(function (elem) {
    elem.addEventListener("input", function () {
      planData[elem.id] = elem.value;

      localStorage.setItem("planData", JSON.stringify(planData));
    });
  });
}

everyDay();

function Quotes() {
  let quote = document.querySelector(".moti-2 h4");
  let author = document.querySelector(".moti-3 h4");

  async function Motivational() {
    let moti = await fetch("http://api.quotable.io/random");
    let data = await moti.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  }

  Motivational();
}

Quotes();

function PomoTimer() {
  let time = document.querySelector(".pomo h6");
  let start = document.querySelector(".pomo .Start-time");
  let pause = document.querySelector(".pomo .Pause-time");
  let reset = document.querySelector(".pomo .Reset-time");
  let sess = document.querySelector(".pomodoro-page .session");

  let timeInterval;
  let isBreak = false;
  let totalTime = 25 * 60;

  function updateTime() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    time.innerHTML = `${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")}`;
    // console.log(minutes, seconds);
  }

  function starttimer() {
    clearInterval(timeInterval);

    timeInterval = setInterval(() => {
      if (totalTime <= 0) {
        clearInterval(timeInterval);

        if (!isBreak) {
          isBreak = true;
          totalTime = 5 * 60;
          time.innerHTML = "05:00";
          sess.innerHTML = "Break Time ☕";
        } else {
          isBreak = false;
          totalTime = 25 * 60;
          sess.innerHTML = "Work Session 💻";
          time.innerHTML = "25:00";
        }

        updateTime();
        // starttimer(); // Auto start for the next session
        return;
      }

      totalTime--;
      updateTime();
    }, 10);
  }

  function pausetimer() {
    clearInterval(timeInterval);
  }

  function resettimer() {
    clearInterval(timeInterval);
    totalTime = 25 * 60;
    updateTime();
  }

  start.addEventListener("click", starttimer);
  pause.addEventListener("click", pausetimer);
  reset.addEventListener("click", resettimer);
}

PomoTimer();

let apikey = `e96047fb627e53cae3c7302d7ee731a0`;

let city = "chandrapur";

let day = document.querySelector(".header1 h2");
let dateHeading = document.querySelector(".header1 h3");

var data = null;

async function weatherAPI() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`,
  );

  data = await response.json();
}

weatherAPI();

function timeDate() {
  const totalDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date();
  var Week = totalDays[date.getDay()];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var tarik = date.getDate();
  var month = monthName[date.getMonth()];
  var year = date.getFullYear();

  dateHeading.innerHTML = `${tarik} ${month} ${year}`;

  if (hours > 12) {
    day.innerHTML = `${Week}, ${hours - 12}:${minutes}:${seconds} pm`;
  } else {
    day.innerHTML = `${Week}, ${hours}:${minutes}:${seconds} am`;
  }
}

setInterval(() => {
  timeDate();
}, 1000);
