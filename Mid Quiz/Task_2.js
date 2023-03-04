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