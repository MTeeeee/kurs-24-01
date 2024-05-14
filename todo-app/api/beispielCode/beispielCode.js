const { raw } = require('body-parser');
const { isUtf8 } = require('buffer');
const fs = require('fs');

const dateiPfad = ('dateiname.txt')

// funktion um eine Datei zu auszulesen
function readFile(){
    const data = fs.readFileSync(dateiPfad, 'utf-8');
    //console.log(data);
    return data;
}

// function um in eine Datei zu schreiben
function writeToFile(newText){
    const text =  readFile() + '\n' +  newText;
    fs.writeFileSync(dateiPfad, text);
}


writeToFile('neue Sachen');


//readFile();

