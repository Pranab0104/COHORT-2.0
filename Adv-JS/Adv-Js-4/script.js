// create auser object that stores a name and emial and has a login method which prints "User logged in".

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    loggedIn (){
            console.log('Logged-in');           
        }
}

let user1 = new User ("Pranav", "pranavmandal5372@gmail.com");
let user2 = new User ("Shiv", "shiv2@gmail.com");
let user3 = new User ("Shubham", "shubham5@gmail.com");
let user4 = new User ("Raju", "raju3@gmail.com");
let user5 = new User ("Sujal", "sujal24@gmail.com");

let Product = {
    name: "Laptop",
    price : 78000,
    discountPrice: function(){
        return this.price -3000;
    },
}

console.log(Product.discountPrice())