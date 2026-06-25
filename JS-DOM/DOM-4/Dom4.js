// text add when the button is clicked

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   let h = document.createElement("h1");
//   h.innerHTML = "Hello Master";
//   console.log(h);
// });

// text add when the button is clicked after the original text shows another

// let btn = document.createElement("h1");
// btn.innerHTML = "Download here!";
// let main = document.querySelector('main');
// main.appendChild(btn);

// create button using append
// let div = document.createElement('div');

// div.style.height= '100px';
// div.style.width = '100px';
// div.style.backgroundColor = 'crimson'

// let main = document.querySelector('main');
// main.appendChild(div)



let btn = document.querySelector("button");
let main = document.querySelector("main");
let arr = [
  "HTML is the structure",
  "CSS is the Styling lsnguage",
  "JS is the Scripting language or Logic building",
  "SCSS is the advanced styling language",
  "React is the Library of JS in Web-dev",
];

btn.addEventListener("click", function () {
  let h1 = document.createElement("h1");
  let a = Math.floor(Math.random() * arr.length);
  let x = Math.floor(Math.random() * 80);
  let y = Math.floor(Math.random() * 90);
  let r = Math.floor(Math.random() * 360);
  let scl = Math.random() * 2;

  h1.innerHTML = arr[a];

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = r + "deg";
  h1.style.scale = scl;
  h1.style.position = "absolute";
  h1.style.color = `rgb(${c1},${c2},${c3})`;

  main.appendChild(h1);
});






// Practice another time!!!

// let btn = document.querySelector('button')
// let main = document.querySelector('main');
// let arr = ["Pranab","Karan","Shiv","Krishna", "Shubham","Vishal","Krongton"]

// btn.addEventListener('click',function(){
//   let h1 = document.createElement("h1")
//   let a = Math.floor(Math.random()*arr.length);
//   let x = Math.floor(Math.random() * 80);
//   let y = Math.floor(Math.random() * 90);
//   let r = Math.floor(Math.random() * 360);
//   let scl = Math.random() * 2;

//   h1.innerHTML = arr[a];

//   let c1 = Math.floor(Math.random() * 256);
//   let c2 = Math.floor(Math.random() * 256);
//   let c3 = Math.floor(Math.random() * 256);
//   // console.log(h1);

//   h1.style.left = x + "%";
//   h1.style.top = y + "%";
//   h1.style.rotate = r + "deg";
//   h1.style.scale = scl;
//   h1.style.position = "absolute";
//   h1.style.color = `rgb(${c1},${c2},${c3})`;

//   main.appendChild(h1)
  
// })