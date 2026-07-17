alert("WELCOME TO COMPUTER SCIENCE TECH HUB.");

console.log("Name: Oladepo Imole Ezekiel");
console.log("Department: Computer Science");
console.log("Level: 1000lvl");

let num1 = 25;
let num2 = 15;

console.log("Addition:" + (num1 + num2));
console.log("Subtraction:" + (num1 - num2));
console.log("Multiplication:" + num1 * num2);
console.log("Division:" + num1 / num2);

function checkResult() {
  let score = Number(document.getElementById("display").value);

  if (score >= 50) {
    alert("Congratulation! You Passed.");
  } else {
    alert("Sorry, You failed.");
  }
}

const check = document.getElementById("checkResult");

// window.addEventListener("keypress", function(event){
//     console.log(event.key)
//     if(event.key == "Enter"){
//         checkResult();
//         console.log("Hellow world")
//     }
// });

window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    checkResult();
    console.log("Hellow world");
  }
});

// GREET STUDENT QUESTION 5
function greetStudent() {
  alert("Welcome to javascript programming.");
}
// SQUARE CALCULATOR QUESTION 6

function calculateSquare() {
  const number = Number(document.getElementById("number").value);
  const square = number * number;

  console.log("Square:", square);
}


// AGE CHECKER QUESTION 7
function checkAge() {
  let age = Number(document.getElementById("age").value);

  if (age < 18) {
    console.log("You are a minor.");
  } else {
    console.log("You are an adult.");
  }
}
// STUDENT INFORMATIONS QUESTIONS 8

function showInfo(){
 // the variables
        let name = "Imole Oladepo Ezekiel";
        let department = "Computer Science";
        let level = "100";

        // console preview
        console.log("Name: " + name);
        console.log("Department: " + department);
        console.log("Level: " + level);
}
 