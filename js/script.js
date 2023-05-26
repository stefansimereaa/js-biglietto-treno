console.log(`JS OK`);

// Chiedere all'utente il numero di chilometri che vuole percorrere e l'eta del passeggero. Applicare uno sconto del 20% se l'eta è inferiore a 18 anni e uno sconto del 40% se l'eta è maggiore di 65 anni e infine calcolare il prezzo del biglietto in base ai km (0.21 € al km). L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo.

/*
1. Recuperare elementi dalla pagina
2. Chiedere all'utente il numero di chilometri che vuole percorrere
3. Chiedere all'utente l'eta
4. Calcolare il prezzo del biglietto in base ai chilometri che vuole percorrere l'utente (e lasciare solo 2 decimali)
5. Calcolare lo sconto in base all'eta dell'utente
6. Inserire il risultato nell'elemento
*/

// Operazioni Preliminari

// Recuperare elementi dalla pagina
const ticketPrice = document.getElementById(`ticket`);
console.log(ticketPrice);

const ticketNoDiscount = document.getElementById(`ticket-no-discount`);
console.log(ticketNoDiscount);

const userDataKm = document.getElementById(`user-data-km`);
console.log(userDataKm);

const userDataAge = document.getElementById(`user-data-age`);
console.log(userDataAge);

// Validazione



// Effettivo Svolgimento

// Chiedere all'utente il numero di chilometri che vuole percorrere
const userKm = prompt(`Quanti Km vuoi percorrere?`, `10`).trim().toLowerCase();
console.log(userKm);

// Chiedere all'utente l'eta
const userAge = prompt(`Quanti anni hai?`, `20`).trim().toLowerCase();
console.log(userAge);

// Calcolare il prezzo del biglietto
const ticketPriceKm = 0.21;
const ticketPriceCalc = userKm * ticketPriceKm;
const result = ticketPriceCalc.toFixed(2);
console.log(result)

//Applicare lo sconto se del 20% <18 o del 40% >65
let priceDiscount = 0;

if (userAge < 18){
    priceDiscount = result * 0.2;
} else if (userAge > 65){
    priceDiscount = result * 0.4;
}

const priceWithDiscount = ticketPriceCalc - priceDiscount;

console.log(ticketPriceCalc);
console.log(priceDiscount);
console.log(priceWithDiscount);

// Inserire i risultati nei elemeti 
ticketPrice.innerText += ' ' + priceWithDiscount.toFixed(2);
ticketNoDiscount.innerText += ' ' + ticketPriceCalc.toFixed(2);
userDataKm.innerText += ' ' + userKm;
userDataAge.innerText += ' ' + userAge;