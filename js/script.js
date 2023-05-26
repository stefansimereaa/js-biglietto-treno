console.log(`JS OK`);

// Chiedere all'utente il numero di chilometri che vuole percorrere e l'eta del passeggero. Applicare uno sconto del 20% se l'eta è inferiore a 18 anni e uno sconto del 40% se l'eta è maggiore di 65 anni e infine calcolare il prezzo del biglietto in base ai km (0.21 € al km). L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo.

/*
1. Recuperare elementi dalla pagina
2. Chiedere all'utente il numero di chilometri che vuole percorrere
3. Chiedere all'utente l'eta
4. Calcolare lo il prezzo del biglietto in base ai chilometri che vuole percorrere 5.l'utente (e lasciare solo 2 decimali)
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