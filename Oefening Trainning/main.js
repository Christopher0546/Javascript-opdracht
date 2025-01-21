console.log("Hello Wolrd!!");

// Opdracht 1
const myName = "Christopher Molina!";
const myAge = 25;
const mySchool = "ROC Mondriaan";
const myCourse = "Software Developer";
const myClass = "B1J";
const myTeacher = "De lang";

function showDetials(){
    console.log("Hello World! Ik ben " + myName + " en ik ben " + myAge + " jaar oud.");
};

showDetials();

function showSchoolDetails(){
    console.log("Ik volg de opleiding " + myCourse + " op " + mySchool + ". Ik zit in klas " + myClass + " bij " + myTeacher + ".");
};

showSchoolDetails();

function ShowFullDescription(){
    console.log(showDetials + showSchoolDetails);
    
};

ShowFullDescription();

//Opdracht 2
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

console.log(3 + 5);
console.log(7 - 2);
console.log(20 / 5);
console.log(8 * 4);
console.log(19 + 42);
console.log(18 / 3);
console.log(17 - 7);
console.log(18 + 22);
console.log(((18 + 22) * (19 - 2)/ 34)*3);

||||||||||||||||||||\
console.log('---main---');

//trainning 1
let auticated = false;
const wachtwoord = 'goed';
let userInput;

while(!auticated){
    userInput = prompt('vul je password in');
    if(userInput === wachtwoord){
        alert('voltooid');
        auticated = true;
    }else{
        alert('fout');
    }
}

/////////////

const cars = ["Mercedes", "Volkswagen", "Tesla", "Toyota", "Honda"];

for(let i = 0; i < cars.length; i++){
    const merken = cars[i];
    if(cars[i] === "Tesla"){
        continue;
    }
    console.log(cars[i]);

    const myCars = document.querySelector('.ul');
     myCars.innerHTML += `<ul> ${cars[i]} </ul>`
}

///////////

const main = document.querySelector('main');
console.log(main);

const button = document.querySelector('.button')
button.addEventListener("click", function () {
    alert("Button was clicked!");
});

function createPost(message){
    const post = 
    `<div class ='post'>
    <p>${message}</p>
    </div>`;
    main.innerHTML += post;
}

createPost('hello world');
createPost('christopher');

//////////////


const school = [
    {
        opleidig: "elektrotechniek",
        niveau: "HBO",
        duur: 4
    },
    {
        opleidig: "ict",
        niveau: "MBO",
        duur: 3
    }
]

for(let i = 0; i < school.length; i++){
    const mySchool = school[i];
    console.log(mySchool);
}

const card = document.querySelector('.card');
console.log()

function showSchool(school){
 for(let i = 0; i < school.length; i++){
    const card = `
    <div class='card'>
    <li>${school[i].opleidig}</li>
    <li>${school[i].niveau}</li>
    <li>${school[i].duur}</li>
    <br>
    </div>`;
    card.innerhtml += card;
 }

}

showSchool(school);