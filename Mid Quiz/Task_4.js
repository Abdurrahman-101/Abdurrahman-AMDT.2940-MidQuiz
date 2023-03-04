function Movies(){

    var Movies = ["Star Wars", "The Amazing Spider man", "The Greatest Showman", "Creed", "The Avengers"];
    console.log(Movies[3]);

    if (Movies[3].startsWith("I")){
        console.log("Yay");
    }
    else{
        console.log("Nay");
    }

    Movies = [];

    Movies[3] = "Iron Man";
    console.log(Movies);

    if (Movies[3].startsWith("I")){
        console.log("Yay");
    }
    else{
        console.log("Nay");
    }
}

Movies();

function car(){

    var car = {
        model: "",
        color: "",
        price: 0,
    };
    
    car.model = "Bugatti Chiron";
    car.color = "Orange";
    car.price = 90;
    
    if (car.price > 50) {
        console.log("Expensive");
    } else {
        console.log("Affordable");
    };
    
    console.log(car.color);
}

car();