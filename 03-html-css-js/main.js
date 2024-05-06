function changeColor() {
  document.getElementById("aufgabe1").style.color = getColor();
}
function changeBackgroundColor() {
  document.getElementById("aufgabe1").style.backgroundColor = getColor();
}

const myColors = ["white", "blue", "green", "red", "aqua"];
let currentColor = 0;

// version 1 random aus dem array
// function getColor() {
//   //   return myColors[Math.floor(Math.random() * myColors.length)];
// }

// version 2 revolver
// function getColor() {
//   //   return myColors[Math.floor(Math.random() * myColors.length)];

//   if (currentColor == myColors.length - 1) {
//     currentColor = 0;
//   } else {
//     currentColor += 1;
//   }

//   return myColors[currentColor];
// }

// version 3 ganz zufällig

function getColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // color = "rgb(" + r + ", " + g + ", " + b + ")"
  color = `rgb(${r},${g},${b})`;

  return color;
}

function switchDisplay() {
  let img = document.getElementById("pic");
  if (img.style.visibility === "hidden") {
    img.style.visibility = "visible";
  } else {
    img.style.visibility = "hidden";
  }
}

function bigger() {
  let img = document.getElementById("pic2");
  img.style.width = img.offsetWidth + 10 + "px";

  //   let currentWidth = document.getElementById("pic2").width;
  //   currentWidth = currentWidth * 1.1;
  //   document.getElementById("pic2").width = currentWidth;
}

function smaller() {
  let img = document.getElementById("pic2");
  img.style.width = img.offsetWidth - 10 + "px";
}

//////////////////////////////////////////////////
// Arrow Functions

// function hello() {
//   console.log("Hello");
// }

// const hello = function () {
//   console.log("Hello");
// };

// const hello = () => console.log("Hello");

// const hello = (name, last) => {
//   console.log(`Hello ${name} ${last}`);
// };

/////////////////////////////////////////////////////
// map()

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => number * 2);
const evenNumbers = numbers.filter((number) => number % 2 == 0);

// function doubleTrouble(number) {
//   return number * 2;
// }

// function even(number) {
//   if (number % 2 == 0) {
//     return numbers;
//   }
// }

console.log(numbers);
console.log(newNumbers);
console.log(evenNumbers);
