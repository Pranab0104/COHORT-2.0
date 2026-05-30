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
