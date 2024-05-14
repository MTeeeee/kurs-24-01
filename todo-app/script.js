//const { response } = require("express");

let addButton = document.getElementById("addTask");
let list = document.getElementById("list");
const API_PORT = 3000;

// Funktion zum erzeugen eines List elementes mit der Aufgabe
function addTask(task) {
  let li = document.createElement("li");

  li.textContent = task;

  list.appendChild(li);
}

addButton.onclick = function () {
  let userInput = document.getElementById("userInput"); // Das gesamte element wird in die Variable geladen
  fetch(`http://127.0.0.1:${API_PORT}`,{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: userInput.value})
  }).then(response => {
    if(response.ok){
      addTask(userInput.value);
      userInput.value = "";
    }
  })
};

/*
function getTodosFromPlaceholder() {
  fetch("https://jsonplaceholder.typicode.com/todos") // Promise, diese Zeile gibt einen Wert zurück
    .then((response) => response.json()) // nimmt den Wert und gibt Ihn in eine Funktion + gibt auch einen Wert aus
    .then((array) =>
      array.forEach((taskObject) => {
        addTask(taskObject.title);
      })
    );
}
*/
/*
function getTodo(){
  fetch(`http://127.0.0.1:/todos/${id}`).then((response) => response.json()).then((todo => {
    console.log(todo)  
    addTask(todo);
  }))
}
*/

function getTodosFromApi(){
  fetch(`http://127.0.0.1:${API_PORT}`)
    .then((response) => response.json()) // nimmt den Wert und gibt Ihn in eine Funktion + gibt auch einen Wert aus
    .then((array) =>
      array.forEach((taskObject) => {
        addTask(taskObject.title);
      })
    );
}

getTodosFromApi();

/*
const filtered = await data.filter(
  (element) => element.id == id
);
const data = await fetch(
  `https://imgur.com/r/${
    subreddits[Math.floor(Math.random() * subreddits.length)]
  }/hot.json`
)
  .then((response) => response.json())
  .then((body) => body.data)

const filtered = await data.filter(
  (element) => element.animated == "false"
);
console.log(filtered);
*/
// myArray = ["Hund", "Hund", "Hund"];
// for (i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
// myArray.forEach((element) => console.log(element));

////////////////////////

//getTodos();
//getTodoByID(3);
