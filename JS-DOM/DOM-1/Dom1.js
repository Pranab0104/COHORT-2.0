let inc = document.querySelector('#in');
let res = document.querySelector('#res');
let decr = document.querySelector('#decr');
let h = document.querySelector('h1');

let a = 0;

inc.addEventListener('click', function(){
    a++;
    h.innerHTML = a;
});

res.addEventListener('click', function(){
    a=0;
    h.innerHTML = a;
});

decr.addEventListener('click', function(){
    if (a>=1) {
        a--;
        h.innerHTML = a;
    }
})