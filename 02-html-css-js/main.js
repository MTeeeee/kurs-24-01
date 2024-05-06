let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let p = document.getElementById("header");

// anonymous function, die Funktion hat keinen namen
// button1.onclick = function () {
//   p.setAttribute("class", "design");
// };

// auch als arrow function kein name und wird nicht mit dem Wort "function eingeleitet"
// button1.onclick = () => {
//   p.setAttribute("class", "design");
// };

button1.onclick = () => (p.style.color = "red");
button2.onclick = () => (p.style.backgroundColor = "blue");

// Wechsel zwischen zwei oder mehr Farben
//
// Random
// Revolver


