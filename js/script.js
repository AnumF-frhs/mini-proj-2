// alert ('Welcome! d^-^b');

var tipOutput = document.getElementById('tip'); //button
var totalBill = document.getElementById('subTotal');
var percentage = document.getElementById('percentage'); //0.18

let hrsWorked = document.getElementById("hrsWork");
let hrRate = document.getElementById("hrRate");

let ptsEarned = document.getElementById("pointsEarned");
let totalPts = document.getElementById("totalPts");

let tankSize = document.getElementById("tankSize");
let priceGal = document.getElementById("priceGal");






//actual code

let tipBtn = document.getElementById("tipButton");
tipBtn.addEventListener('click', function() {

  let subTotal = document.getElementById('subTotal').valueAsNumber;
  let percentage = document.getElementById('percentage').valueAsNumber;
  let tipAmount;
  let totalBill;
  

  tipAmount = subTotal*percentage;
totalBill = subTotal*tipAmount;

//2 decimal places
tipAmount = tipAmount.toFixed(2);
tipAmount = totalBill.toFixed(2);

//show output
tipOutput.innerHTML= "$" + tipAmount;
totalOutput.innerHTML = "$" + totalBill;
  
});

//math














// function billTotal() {

//     let totalBill = subTotal + tip;

// }

// console.log(calcTip);

// // document.getElementById("tip").addEventListener('click',tipAmount);

// // document.getElementById("tip").addEventListener('click',tipAmount);
// calcTip.addEventListener('click', tipAmount);

// function tipAmount() {
//        var tip = subTotal * percentage;
//       tip= document.getElementById("number").textContent;
//     //  document.getElementById("number").innerHTML= tip;
//     return tip;
    
  

// }
// console.log(tipAmount);
// tipAmount();


// document.getElementById("tip").addEventListener('click',totalBill);

// function totalBill() {
//     total = subTotal + tip;
//     document.getElementById("tot").textContent= total;
//     document.getElementById("tot").innerHTML= total;

// }






// paycheckAmount = hoursWorked * hourlyRate;



// gasCost = tankGallons * perGallon;

