// const button = document.getElementById('button');

// const colors = ['red' ,'black','orange','yellow','green','blue','rebeccapurple','violet'];

// function change() {      
//   document.body.style.background = colors[Math.floor(7*Math.random())];
// }

// button.addEventListener('click', change);


const ageInYears = prompt('How old are you (in years)?');
console.log(ageInYears)
const ageInSeconds = ageInYears * 365.25 * 24 * 60 * 60;
const ageInMinutes = ageInYears * 365.25 * 24 * 60;
const ageInHours = ageInYears * 365.25 * 24;
const ageInDays = ageInYears * 365.25;
console.log(ageInSeconds)
console.log(ageInMinutes)
console.log(ageInHours)
console.log(ageInDays)
alert(`That Mean you have been alive for at least ${ageInDays} Days , ${ageInHours} Hours , ${ageInMinutes} Minutes , ${ageInSeconds} Seconds!!`)


console.log(2 + 'two');
