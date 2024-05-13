let addButton = document.getElementById("addTask");
let list = document.getElementById("list");

// Funktion zum erzeugen eines List elementes mit der Aufgabe
function addTask(task) {
  let li = document.createElement("li");

  li.textContent = task;

  list.appendChild(li);
}

addButton.onclick = function () {
  let userInput = document.getElementById("userInput"); // Das gesamte element wird in die Variable geladen
  addTask(userInput.value); // Eine neue Aufgabe soll mit dem Wert des Elementes erzeugt werden
  userInput.value = ""; // Das Input feld soll nun wieder geleert werden
};

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos") // Promise, diese Zeile gibt einen Wert zurück
    .then((response) => response.json()) // nimmt den Wert und gibt Ihn in eine Funktion + gibt auch einen Wert aus
    .then((array) =>
      array.forEach((taskObject) => {
        addTask(taskObject.title);
      })
    );
}

// myArray = ["Hund", "Hund", "Hund"];
// for (i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
// myArray.forEach((element) => console.log(element));

////////////////////////

getTodos();
