/***Palindroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/ 

//Chiedere una parola all'utente
const parola = prompt("Inserisci una parola");
console.log(parola);


//Dichiarare la funzione
let parolaInversa = invertiParola(parola);

//FUNCTION
function invertiParola(str){
  const strInversa = str.split('').reverse().join('');  
  return strInversa;
}

//Stabilire se la parola inserita è palindroma
if(parola == parolaInversa){
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}