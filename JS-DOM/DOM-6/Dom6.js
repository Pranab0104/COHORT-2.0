let img = document.querySelector("img");
let lo = document.querySelector("#lo");
img.addEventListener("dblclick", function () {
    lo.style.opacity = 1;
    lo.style.transform = "translate(-50%, -50%) scale(1.5) rotate(0deg)";

  setTimeout(() => {
    lo.style.transform = "translate(-50%, -250%) scale(1.5) rotate(-50deg)";
  }, 800);

  setTimeout(() => {
      lo.style.opacity = 0;
    }, 1000);
    
    setTimeout(() => {
      lo.style.transform = "translate(-50%, -50%) scale(0) rotate(-50deg)";
  }, 1200);
});
