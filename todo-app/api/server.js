const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;
const todoPfad = '../todos.json'

app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'], // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'] // Allow only headers with Content-Type
}));

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

// funktion um die Nächste ID aus der JSON zu finden
function getNextId(todos) {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}
// POST endpoint für HTTP-Requests
app.post('/', (req, res) => {
    const newTodo = req.body;
    const todos = readTodos();
    

    const todoToAdd = {  // hier schreiben wir den inhalt des neuen Eintrags in der JSON
        userId: 1,
        id: getNextId(todos),
        title: newTodo.title,
        completed: false
    }
    todos.push(todoToAdd); 
    writeTodos(todos);
    res.status(201).send('Todo hinzugefügt.')
})

// Server starten
app.listen(PORT, () => {
    console.log(`Der Server läuft auf http://127.0.0.1:${PORT}`) // `` -> backticks
})
