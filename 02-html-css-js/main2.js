let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let p = document.getElementById("header");

////////////////////////////////////////////
// toggel zwischen zwei farben hin und her switchen

// button1.onclick = () => {
//   if (p.style.color == "red") {
//     p.style.color = "";
//   } else {
//     p.style.color = "red";
//   }
// };

////////////////////////////////////////////
// random auf 5 Farben wählen

// const colors = ["#FFFFFF", "#4B4E6D", "#899878", "#F45D01", "#92140C"];

button1.onclick = function colorRandomizer() {
  const colors = ["#FFFFFF", "#4B4E6D", "#899878", "#F45D01", "#92140C"];
  const colorIndex = Math.floor(Math.random() * colors.length);
  const colorPicker = colors[colorIndex];
  p.style.color = colorPicker;
};

button2.onclick = () => (p.style.color = getColor());

function getColor() {
  const colors = ["#FFFFFF", "#4B4E6D", "#899878", "#F45D01", "#92140C"];
  const colorIndex = Math.floor(Math.random() * colors.length);
  const colorPicker = colors[colorIndex];
  return colorPicker;
}

// let color2 = function () {
//   const colors = ["#FFFFFF", "#4B4E6D", "#899878", "#F45D01", "#92140C"];
//   const colorIndex = Math.floor(Math.random() * colors.length);
//   const colorPicker = colors[colorIndex];
//   return colorPicker;
// };

// console.log(color2);

// button2.onclick = () => console.log(colors);

// button2.onclick = () => (p.style.backgroundColor = "blue");

// Wechsel zwischen zwei oder mehr Farben
//
// Random
// Revolver

// Funktionen die Return geben
// Funktionen die keinen Return geben

function ohneReturn() {
  console.log("Mete1");
}
ohneReturn();

function mitReturn() {
  return "Mete2";
}
console.log(mitReturn());

///////////////////////////////////

