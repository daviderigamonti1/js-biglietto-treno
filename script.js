/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

console.clear();

//Preparazione

//Dati predefiniti
const priceKm = 0.21;
const junior = 18;
const senior = 65;

//Chiedo all'utente età e km da percorrere
const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);
const age = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(age);

//Variabile per messaggio finale
let message;

//Prezzo biglietto base
const price = km * priceKm;

//Condizione
if (age >= 0 && age < junior) {
    const discountJunior = (price * 0.2);
    const priceJunior = price - discountJunior;
    message = `Hai diritto allo sconto Minorenni del 20%! Il prezzo è: ${priceJunior.toFixed(2)}€`;
} else if (age >= junior && age < senior) {
    message = `Il prezzo è: ${price.toFixed(2)}€`;
} else if (age >= senior && age < 110) {
    const discountSenior = (price * 0.4);
    const priceSenior = price - discountSenior;
    message = `Hai diritto allo sconto Senior del 40%! Il prezzo è: ${priceSenior.toFixed(2)}€`;
} else {
    message = "Hai sbagliato ad inserire l'età";
    console.log(message);
}

//Stampo il messaggio finale
console.log(message);