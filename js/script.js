// alert ('Welcome! d^-^b');

let calcTip = document.getElementById("tip").value; //button
let subTotal = document.getElementById("subTotal").value;
let tipDecimal = document.getElementById("tipDec").value; //0.18
let hrsWorked = document.getElementById("hrsWork").value;
let hrRate = document.getElementById("hrRate").value;
let ptsEarned = document.getElementById("pointsEarned").value;
let totalPts = document.getElementById("totalPts").value;
let tankSize = document.getElementById("tankSize").value;
let priceGal = document.getElementById("priceGal").value;


let totBill = 0;
let tip = 0;



// function totalBill() {

//     let total = subTotal + tip;

// }

// console.log(tip);
tipAmount();

document.getElementById("tip").addEventListener('click',tipAmount);

function tipAmount() {
    tip = subTotal * tipDecimal;
    // document.getElementById("number").textContent= tip;
    // document.getElementById("number").innerHTML= tip;

}

document.getElementById("tip").addEventListener('click',totalBill);

function totalBill() {
    total = subTotal + tip;
    // document.getElementById("tot").textContent= total;
    // document.getElementById("tot").innerHTML= total;

}

console.log(tip)


// calcTip.addEventListener("click", totalBill);
// calcTip.addEventListener("click", tipAmount);



// tipAmount = subTotal * percentage;
// totalBill = subTotal + tipAmount;

// paycheckAmount = hoursWorked * hourlyRate;

// percentGrade = pointsEarned / totalPoints;

// gasCost = tankGallons * perGallon;

//for reference
// let askButton = document.getElementById ("askBtn");


// // STEP 2: Add a click event listener to the button
// // TODO: When the button is clicked, run the askQuestion function
// askButton.addEventListener("click", askQuestion);


// // STEP 3: Create the function that runs when the button is clicked
// function askQuestion() {

//   // STEP 4: Get the user's question from the input box
//   // TODO: Select the input and store its value in a variable
//   let question = document.getElementById ("questionInput").value;
// //   console.log(question);


//   // STEP 5: Check if the question is empty
//   // TODO: Write an if statement that checks if question is an empty string
//   if ( question === "") {

//     // TODO: Display an error message in the answerText element
//     document.getElementById("answerText").textContent = "Error; You must write a question.😢";

//     // NOTE: This stops the function so no other code runs
//     return;
//   }

// document.getElementById('sportscar-btn').addEventListener('click', showSports);
// function showSports() {
//   document.getElementById('make').textContent = carDisplay.sports.make;
//   document.getElementById('model').textContent = carDisplay.sports.model;
//   document.getElementById('year').textContent = carDisplay.sports.year;
//   document.getElementById('carType').textContent = carDisplay.sports.category;
//   document.getElementById('color').textContent = carDisplay.sports.color;
//   document.getElementById('price').textContent = carDisplay.sports.price;
//   document.getElementById('fuelType').textContent = carDisplay.sports.fuelType;
//   document.getElementById('horsepower').textContent = carDisplay.sports.horsepower;
//   document.getElementById('seatingCapacity').textContent = carDisplay.sports.seatingCapacity;

//   document.getElementById('performace').textContent = carDisplay.performanceRat();
//     document.getElementById('pricingRat').textContent = carDisplay.priceCat();



// }