//Q1 create a function in which you have to console some message after some delay.

// function afterDelay(time, cb){
//     setTimeout(() => {
//         cb()
//     }, time);
// }

// afterDelay(2000, function(){
//     console.log("Yess it works...");
// }
// );


// Q2 ek funciton banao getUser 
function getUser(username, cb){
    console.log("Fetching Username...")
   setTimeout(() => {
    const user={
        id:1,
        username: "Pranab"
    };
    cb(user);
   }, 3000);
}

function getUserPosts(userId, cb){
    console.log("Loading posts...")
    setTimeout(() => {
        const posts= ["img 1", "img 2", "img 3"];
        console.log(" ✅ Loaded successfully. ")
        cb(posts)
    }, 4000);
}

getUser("Pranab",(user)=>{
    
    console.log("username:", user.username);
    
    getUserPosts(user.id,(posts)=>{
        console.log("Posts:",posts);
    })
})