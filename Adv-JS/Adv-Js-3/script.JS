//these is the class expression example.

// let Animal =class{
//     constructor(){
//         this.name = "Maxx";
//         this.breed = "Dog";
//     }
// };

// let a1 = new Animal();

//these is the inheritance example.

class Animal{
    constructor(){
        this. hands = 2;
        this. legs = 2;
    }

    eat(){};
    breath(){};
    sleep(){};
}

class Crab extends Animal{
    constructor(){
        this.hands = 2;
        this.legs = 6;
    }
    hunt(){}
}