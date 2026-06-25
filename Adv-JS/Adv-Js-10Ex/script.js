// let prm = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// });

// prm.then(function(){
//     console.log("Program resolve...");
    
// })

// .catch(function(){
//     console.log("Program faced some issued...");
    
// })

fetch('https://randomuser.me/api/')
.then(function(notreadable){
    return notreadable.json();
})

.then(function(realData){
    console.log(realData.results[0].name.first);
})

//async & await example
async function abc() { 
    let raw = await fetch('https://randomuser.me/api/');
    let data = await raw.json();
    console.log(data);
}

abc();