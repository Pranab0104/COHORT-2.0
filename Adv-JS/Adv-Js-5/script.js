//Question 1
class Car{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    drive(){
        return this.brand + " - " + this.speed;
    }
}

let car1 = new Car("BMW", "180+");
let car2 = new Car("Mercedes", "200+");

//Question 2
class Student{
    constructor(name, rollno){
        this.name = name;
        this.rollno= rollno;
    }
    introduce(){
        return this.name + " " + this.rollno;
    }
}

let std1 = new Student("Pranav", 101);

//Question 3
let obj = {
    sayName: function(){
        console.log(this);
        
    },
    sayArrowName:()=>{
        console.log(this);

    }
}

obj.sayName();
obj.sayArrowName();