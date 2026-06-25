function greet(name, cb){
    console.log("Hello" + ' ' +  name);
    cb();
}

function sayHi(){
    console.log("Master!");
}

greet("Pranav", sayHi);