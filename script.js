/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

console.clear()

//Preparazione

const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);
const age = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(age);

//Prezzo biglietto base

const price = km * 0.21;

//Condizione

if (age >= 0 && age < 18) {
    const discountJunior = (price * 0.2);
    const priceJunior = price - discountJunior;
    const priceJuniorFixed = priceJunior.toFixed(2);
    console.log(priceJuniorFixed);
} else if (age > 17 && age < 65) {
    const priceFixed =price.toFixed(2);
    console.log(priceFixed);
} else if (age >= 65 && age < 110) {
    const discountSenior = (price * 0.4);
    const priceSenior = price - discountSenior;
    const priceSeniorFixed = priceSenior.toFixed(2);
    console.log(priceSeniorFixed);
} else {
    let text = "Hai sbagliato ad inserire l'età";
    console.log(text);
}