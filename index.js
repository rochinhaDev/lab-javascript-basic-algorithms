// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops

console.log("I'm ready!");
const hacker1 = "alexandre";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "andrea";
console.log(`The navigator's name is ${hacker2}`);

function namesLength(hacker1, hacker2) {
  let driverNameLength = hacker1.length;
  let navigatorNameLength = hacker2.length;
  if (driverNameLength > navigatorNameLength) {
    return `The driver has the longest name, it has ${driverNameLength} characters.`;
  } else if (navigatorNameLength > driverNameLength) {
    return `It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`;
  } else {
    return `Wow, you both have equally long names, ${navigatorNameLength} characters!`;
  }
}
let names = namesLength(hacker1, hacker2);
console.log(names);
function nameUpperCase(name) {
    let upperCase = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") {
        upperCase += " ";
      } else {
        upperCase += name[i].toUpperCase();
        if (i < name.length - 1 && name[i + 1] !== " ") {
          upperCase += " ";
        }
      }
    }
    return upperCase;
  }
  console.log(nameUpperCase(hacker1));  
function nameBack(name) {
  let nameBack = '';
  for (let i = name.length - 1; i >= 0; i--) {
    nameBack += name[i];
  }
  return nameBack;
}
console.log(nameBack(hacker1));