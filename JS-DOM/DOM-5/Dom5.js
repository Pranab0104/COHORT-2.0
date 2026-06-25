// //setTimout is to used delay...

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");

// btn.addEventListener("click", function () {
//   h1.innerHTML = "Loading...";
//   setTimeout(function () {
//     h1.innerHTML = "Welcome HOST.";
//     clearInterval(int);
//   }, 2000);
// });

// //setInterval is ued to continue the function (or its a type break to continue the function)...
// let a = 0;

// let int = setInterval(() => {
//   a++;
//   console.log(a);
// }, 200);



//Practice or Task to make a download page / type
let grow = 0;
let btn = document.querySelector('button')
let h1 = document.querySelector('h1');
let inner = document.querySelector('.inner')
btn.addEventListener('click',function(){
  btn.style.pointerEvents = 'none'

  let ran = 50 + Math.floor(Math.random()*100)

  let int = setInterval(() => {
    grow++
    h1.innerHTML = grow + '%'
    inner.style.width = grow + '%'
    
  }, ran);

  setTimeout(()=>{
    clearInterval(int)
    btn.innerHTML = 'Downloaded'
    btn.style.opacity = 0.3
    console.log('Downloaded in', ran/10, 'Seconds')
  }, ran*100)
  
})