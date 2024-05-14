const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;
const todoPfad = '../todos.json'

app.use(cors());
// middleware um JSON bodies zu parsen
app.use(bodyParser.json())

// Funktion um Datei auslesen zu können
function readTodos(){
    const todos = fs.readFileSync(todoPfad);
    return JSON.parse(todos);
}

// Funktionen um Dateien zu schreiben
function writeTodos(todos){
    fs.writeFileSync(todoPfad, JSON.stringify(todos, null, 2));
}

// GET endpoint für HTTP-Requests
app.get('/', (req, res) => {
    const todos = readTodos();
    res.status(200).json(todos);
})

// POST endpoint für HTTP-Requests


// Server starten
app.listen(PORT, () => {
    console.log(`Der Server läuft auf http://127.0.0.1:${PORT}`) // `` -> backticks
})
