
// creare un oggetto che descriva
// uno studente con le proprieta' : nome cognome ed eta.
var student =
  {
    "nome" : "Davide",
    "cognome" : "Ciampa",
    "eta" : 24
   }

console.log(student);
console.log("Nome", student.nome);
console.log("Cognome", student.cognome);
console.log("eta", student.eta);

//----------------------------

// creare un array di oggetti di studenti
//ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var students = [
  {
    "nome": "davide",
    "cognome": "ciampa"
  },
  {
    "nome" : "marco",
    "cognome ": "calvieri"
  },
  {
    "nome" : "riccardo",
    "cognome": "ferraro"
  }
]

for(var i = 0; i < students.length; i++){

  var display = students[i];

  console.log(display);

}

// ------------------------------------
// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.


var insert = {

  "nome": "",
  "cognome": "",
  "eta" : ""

}


var name = prompt("inserisci il nome dello studente");
insert.nome = name;

var surname = prompt("inserisci il cognome dello studente");
insert.cognome = surname;

var age = prompt("inserisci l'eta' dello studente");
insert.eta = age;

console.log(insert);

//___________________
// js snack di andrea

//crea un oggetto macchina chiedi tramite prompt alcuni dati
// e poi stampala

// var car = {
//   "nome": "",
//   "modello": "",
//   "targa": "",
//   "allestimento": "",
// }
// var carName= prompt("Inserisci il nome della macchina");
// var carModel = prompt("inserisci il modello");
// var carPlate = prompt("inserisci il numero di targa");
// var style = prompt("inserisci l'allestimento");
//
//
// car.nome = carName;
// car.modello = carModel;
// car.targa = carPlate;
// car.allestimento = style;
//
//
// console.log(car);
