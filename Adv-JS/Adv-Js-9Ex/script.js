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
// function getUser(username, cb){
//     console.log("Fetching Username...")
//    setTimeout(() => {
//     const user={
//         id:1,
//         username: "Pranab"
//     };
//     cb(user);
//    }, 3000);
// }

// function getUserPosts(userId, cb){
//     console.log("Loading posts...")
//     setTimeout(() => {
//         const posts= ["img 1", "img 2", "img 3"];
//         console.log(" ✅ Loaded successfully. ")
//         cb(posts)
//     }, 4000);
// }

// getUser("Pranab",(user)=>{

//     console.log("username:", user.username);

//     getUserPosts(user.id,(posts)=>{
//         console.log("Posts:",posts);
//     })
// })

// Q3 Callback dependency - some painfull and tough question
function loginUser(cb) {
  setTimeout(() => {
    const user = { id: "01", username: "Krongton" };
    console.log("User Logged in : ", user);
    cb(user);
  }, 1000);
}

function fetchPermissions(userId, cb) {
  setTimeout(() => {
    const permissions = ["read", "write", "delete"];
    console.log("Permissions for fetching Id : ", userId);
    cb(permissions);
  }, 1000);
}

function loadDashboard(permissions, cb) {
  setTimeout(() => {
    console.log("Dashboard loading with permissions...", permissions);
    cb("✅ Dashboard Loaded.");
  }, 1000);
}

loginUser(function (user) {
  fetchPermissions(user.id, function (permissions) {
    loadDashboard(permissions, function (message) {
      console.log(message); // Final Output
    });
  });
});
