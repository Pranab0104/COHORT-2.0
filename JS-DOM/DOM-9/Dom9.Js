let allelem = document.querySelectorAll('.elem');
let allbutton = document.querySelectorAll(' button')
allbutton.forEach(function(elem){
    elem.addEventListener('click',function(){
        
        if(elem.innerHTML == 'Add Friend'){
            elem.innerHTML = 'Remove Friend'
            elem.style.backgroundColor = 'Green'
        }
        else{
            elem.innerHTML = 'Add Friend'
            elem.style.backgroundColor = 'crimson'
        }

    });
    
})