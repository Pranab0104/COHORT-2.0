const prm = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve();
    }, 3000);
});

prm.then(function(){
    console.log("Program resolve...");
    
})

.catch(function(){
    console.log("Program faced some issued...");
    
})