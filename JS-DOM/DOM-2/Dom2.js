let btn = document.querySelector('button');
let box = document.querySelector('#box');

btn.addEventListener('click', function(){
    let a1 = Math.floor(Math.random()*256);
    let a2 = Math.floor(Math.random()*256);
    let a3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${a1},${a2},${a3})`
    box.innerHTML = `rgb(${a1},${a2},${a3})`

})

// let arr = ['Pranav', 'Shiv', 'Karan', 'Shubham', 'Vishal', 'Bishal','Gaurav']
// btn.addEventListener('click',function(){
//     let a = Math.floor(Math.random()*arr.length);
// console.log(arr[a]);
// })