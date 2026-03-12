class Laptop{
    constructor(){
        this.price= 78000;
        this.color= "Black";
        this.storage= "512 GB";
        this.name="DELL G15";
    }

    buy(){
        console.log("The Best laptop for multipurpose.");
    }

    view(){
        console.log("You can view nearby stores of Dell.");
    }

}

class Cars{
    constructor(){
        this.price= 78000;
        this.color= "Black";
        this.storage= "512 GB";
        this.name="DELL G15";
    }

    buy(){
        console.log("The Best laptop for multipurpose.");
    }

    view(){
        console.log("You can view nearby stores of Dell.");
    }

}

let L = new Laptop();
L.buy();