
// creare un oggetto che descriva
// uno studente con le proprieta' : nome cognome ed eta.
var student =
  {
    "nome" : "Davide",
    "cognome" : "Ciampa",
    "eta" : 24
   }

console.log(student);


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


var name = promt("inserisci il nome dello studente");
insert."nome".push(name);

var surname = promt("inserisci il cognome dello studente");
insert."cognome".push(surname);

var age = prompt("inserisci l'eta' dello studente");
insert."eta".push(age);
