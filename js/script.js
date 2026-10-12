// alert ('Welcome! d^-^b');

var calcTip = document.getElementById("tip"); //button
var subTotal = document.getElementById("subTotal").valueAsNumber;
var percentage = document.getElementById("tipDec").valueAsNumber; //0.18

let hrsWorked = document.getElementById("hrsWork").valueAsNumber;
let hrRate = document.getElementById("hrRate").valueAsNumber;

let ptsEarned = document.getElementById("pointsEarned").valueAsNumber;
let totalPts = document.getElementById("totalPts").valueAsNumber;

let tankSize = document.getElementById("tankSize").valueAsNumber;
let priceGal = document.getElementById("priceGal").valueAsNumber;



// function billTotal() {

//     let totalBill = subTotal + tip;

// }

console.log(calcTip);

// document.getElementById("tip").addEventListener('click',tipAmount);

// document.getElementById("tip").addEventListener('click',tipAmount);
calcTip.addEventListener('click', tipAmount);

function tipAmount() {
       var tip = subTotal * percentage;
      tip= document.getElementById("number").textContent;
    //  document.getElementById("number").innerHTML= tip;
    return tip;
    
  

}
// console.log(tipAmount);
// tipAmount();


// document.getElementById("tip").addEventListener('click',totalBill);

// function totalBill() {
//     total = subTotal + tip;
//     document.getElementById("tot").textContent= total;
//     document.getElementById("tot").innerHTML= total;

// }





// tipAmount = subTotal * percentage;
// totalBill = subTotal + tipAmount;

// paycheckAmount = hoursWorked * hourlyRate;

// percentGrade = pointsEarned / totalPoints;

// gasCost = tankGallons * perGallon;

//for reference
// let askButton = document.getElementById ("askBtn");



// askButton.addEventListener("click", askQuestion);


//   let question = document.getElementById ("questionInput").value;
// //   console.log(question);



//     document.getElementById("answerText").textContent = "Error; You must write a question.😢";


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