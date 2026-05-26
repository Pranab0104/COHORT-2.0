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

// frontpageTrans();

let form = document.querySelector(".addTask form");
let Taskinput = document.querySelector(".addTask form #tk");
let Descinput = document.querySelector(".addTask form textarea");
let Check = document.querySelector(".addTask form #check");

let Tak = [
  {
    task: "Wake Up Early before sunrise",
    details: "To maintain the time or enery in a better way.",
    imp: true,
  },

  {
    task: "Do Exercise / Go to Gym on daily basis",
    details: "To maintain the body or health.",
    imp: true,
  },

  {
    task: "Work on your skills for a best life",
    details: "Invest on your most time here which will pay you later.",
    imp: true,
  },

  {
    task: "Use handset / Mobile",
    details: "Only for good things not for the entertainment.",
    imp: false,
  },
];

function Todopage() {
  let tk = document.querySelector(".allTask");
  let sum = "";
  // console.log(tk);
  Tak.forEach(function (elem) {
    sum += `<div class="task">
                <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                <button>Accomplished</button>
              </div>`;
  });

  tk.innerHTML = sum;
}

Todopage();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(Taskinput.value);
  // console.log(Descinput.value);
  // console.log(Check.checked);

  Tak.push({task:tak.value, details: taskdetailsinput.value, imp:impCheckbox.checked})
  console.log(Tak);
  
});