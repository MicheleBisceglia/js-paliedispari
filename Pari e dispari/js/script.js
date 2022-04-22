//**Pari e Dispari**
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//Chiedere all'utente di scegliere Pari o Dispari
const pariOdispari = prompt ("Vuoi scegliere pari o dispari?")
console.log(pariOdispari);

//Generare un numero random da 1 a 5
const computerNumber = Math.floor(Math.random() * (5)) + 1;
console.log(computerNumber, "Numero del computer");

//chiedere all'utente un numero da 1 a 5 
const userNumber = parseInt(prompt("scrivi un  numero da 1 a 5"));
console.log(userNumber);

//calcolare la somma sei due numeri
const somma = userNumber + computerNumber ;
console.log(somma);

const userResult = pariDispari(somma);

//Stabilire se la somma dei numeri del computer e dell'utente sia pari o dispari
function pariDispari(numberToCheck) {

    let result;

    if(numberToCheck % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari"
    }

    return result;
}
//Stampare i numeri dell'utente e del computer nel display
document.getElementById("pariodispari").innerHTML = `tu hai scelto ${pariOdispari}`;
document.getElementById("myNumber").innerHTML = `il tuo numero è ${userNumber}`;
document.getElementById("computerNumber").innerHTML = `il numero del computer è ${computerNumber}`;
//Stampare l'elemento in html
document.getElementById("result").innerHTML = `il numero ${somma} è ${userResult}`