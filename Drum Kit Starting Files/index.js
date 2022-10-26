// 

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// function handleClick() {
//     let audio = new Audio("sounds/tom-1.mp3");
//     audio.play()
// };



for (let i=0; numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // this.style.color = 'white';
        switch (this.innerHTML) {
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            default:
                break;
        }
        
    });
};


// let audio = new Audio("sounds/tom-1.mp3");
//         audio.play();















//or you can write 
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked");
//     //rest of the function body
// }


// example of higher order functions:
// function add(num1, num2) {
//     return num1+num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1/num2;
// }


// function subtract(num1, num2) {
//     return num1-num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1,num2);
// }


// calculator(4,5,multiply);





//objects


// const houseKeeper = {
//     name: "mary",
//     hasLingerie: true,
//     age : 28,
//     specialKinks: ["squirt","foot fetish"]
// };




// console.log(houseKeeper.specialKinks);


//constructor function:

function HouseKeeper (name, hasLingerie, age, specialKinks) {
    this.name = name;
    this.hasLingerie = hasLingerie;
    this.age = age;
    this.specialKinks = specialKinks;
}

// initialize object:

var houseKeeper1 = new HouseKeeper("Adriana",true,33,["anal","deep throat","squirt"]);
var houseKeeper2 = new HouseKeeper("Angla",no,44,["Australian","huge boobs","Blue Eyes"]);