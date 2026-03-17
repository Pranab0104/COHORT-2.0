// without class now we have to create an function
// Before ES6 the constructor function make like this.
function User(val) {
  this.name = val;
}
User.loggedin = function () {
  console.log("Loggedin");
};

let u1 = new User("Pranav");
let u2 = new User("Krongton");

function someLater(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}

someLater(function () {
  console.log("Heloooo!");
});
