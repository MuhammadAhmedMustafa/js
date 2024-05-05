// const stuName = "Mujtaba"
// console.log(Boolean(stuName));
// const stuAge = 0;
// console.log(Boolean(stuAge));
// console.log(Boolean(!stuAge ));
// console.log(Boolean(!!stuAge));
// console.log(Boolean(stuAge && 42));
// console.log(Boolean(!stuAge && 0));
// console.log(stuName || stuAge);
// console.log(stuAge || stuName);
// const stuNamee = "Ahmed"
// console.log(stuNamee || stuName);
// console.log(stuName || stuNamee);
// program to find the ASCII value of a character

// // take input from the user
// const string = prompt('Enter a character: ');

// // convert into ASCII value
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result}`);

// const age = Number(prompt('what is your age?'));
// if (age>=18 && age<=70){
//         alert('you can take this ride')
//     }
// else {
//     alert('you can not take this ride')
// }

// const big = confirm('Is it a big animal?');
// const livesInWater = confirm('Does it live in water?');
// if(big && livesInWater){
//     alert('Your favorite animal is a whale!');
//     }
//     else if(big && !livesInWater){
//         alert('Your favorite animal is an elephant!');
//         }

//         else if(!big && livesInWater){
//             alert('Your favorite animal is a fish!');
//             }
//             else if(!big && livesInWater){
//                 alert('Your favorite animal is a fish!');
//                 }
//                 else {
//                     alert('Your favorite animal is a mouse!');
//                     }
const player = prompt('Choose rock, paper or scissors').toLowerCase().trim();
const number = Math.ceil(3*Math.random());
let computer;
switch(number){
case 1:
computer = 'rock'; break;
case 2:
computer = 'paper'; break;
case 3:
computer ='scissors';
}
if (player === computer) {
  alert(`It was a draw, we both chose ${player}`);
} else if (
  (player === "rock" && computer === "scissors") ||
  (player === "paper" && computer === "rock") ||
  (player === "scissors" && computer === "paper")
) {
  alert(`You win! ${player} always beats ${computer}!`);
} else {
  alert(`You lose! ${player} will never beat ${computer}!`);
}    















// if(age<70){
//     alert('you can not take this ride')
// }
// else if(age<=70){
//     alert('you can not take this ride')
// }
//  if(age>=18){
//     alert('you can take this ride')
// }