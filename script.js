/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

variabili: numero chilometri, età del passeggero, prezzo biglietto, sconto minorenni, sconto over 65.
Obiettivo: output prezzo viaggio (max 2 decimali)
*/

const priceKm = 0,21
const discountJunior
const discountSenior
const juniorAge = 17
const seniorAge = 65

const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"))
const età = parseInt(prompt("Quanti anni ha il passeggero?"))
const price = km * 0.21

