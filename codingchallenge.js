// Challenge 1 - Very Easy    ____________________________________________

// function minText (their, minimum) {
//     console.log (their, minimum);
//     const text = `Text with ${their}their and ${minimum} minimum. `; 
//     return text
// }
// minText (their, minimum);




// Challenge 2 - Easy         ______________________________________________

// let student1 = ["Sarah", "Bishop", 18];
// let student2 = ["David", "Jackson", 19];
// let student3 = ["Mark", "Bane", 20];

// console.log(`Hello, my name is ${student2[0]} ${student2[1]} and I am ${student2[2]} years old.`);





// Challenge 3 - Medium       __________________________________________________

// let placeMonth = ['January', `February`, `March`, `April`, `May`, `June`, `July`, `August`, 
// `September`, `October`, `November`, `December`]
// let month = prompt(`Enter a number 1-12 to select a month. `)
// if (month === `1`) {
//     console.log(placeMonth[0])
// } else if (month === `2`) {
//     console.log(placeMonth[1])
// } else if (month === `3`) {
//     console.log(placeMonth[2])
// } else if (month === `4`) {
//     console.log(placeMonth[3])
// } else if (month === `5`) {
//     console.log(placeMonth[4])
// } else if (month === `6`) {
//     console.log(placeMonth[5])
// } else if (month === `7`) {
//     console.log(placeMonth[6])
// } else if (month === `8`) {
//     console.log(placeMonth[7])
// } else if (month === `9`) {
//     console.log(placeMonth[8])
// } else if (month === `10`) {
//     console.log(placeMonth[9])
// } else if (month === `11`) {
//     console.log(placeMonth[10])
// } else if (month === `12`) {
//     console.log(placeMonth[11])
// } else {
//     alert("Invalid Entry: Please enter # between 1-12.")
// }




// Challenge 4 - Hard     _________________________________________________

var tomMass; 
var tomHeight; 
var jerryMass; 
var jerryHeight; 
var tomBMI; 
var jerryBMI;
tomMass = prompt("What is Tom's Mass?" );
tomHeight = prompt("What is Tom's Height?" );
jerryMass = prompt("What is Jerry's Mass?" );
jerryHeight = prompt("What is Jerry's Height?" );

tomBMI = tomMass / (tomHeight * tomHeight);
jerryBMI = jerryMass / (jerryHeight * jerryHeight);

var tomBiggerBMI   = tomBMI > jerryBMI;

console.log(tomBMI, jerryBMI);

if(tomBMI > jerryBMI){
  console.log("Tom's BMI is bigger than Jerry's");
}
else {
  console.log("Jerry's BMI is bigger than Tom's");
}


