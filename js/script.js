/*
Snack 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while
 */
// var request = 5;
// var sum = 0;
// var items = '';
// for(var i = 1; i <= request;i++){
//     var number = parseInt(prompt('Inserisci numero ' + i + ' di ' + request));
//     console.log(number);
//     sum += number;
//     items += '<li>' + number + '</li>';
// }
// document.getElementById('snack-1-list').innerHTML = items;
// document.getElementById('snack-1-sum').innerHTML = sum;
// console.log('Il totale dei numeri inseriti è:', sum);

/* 
Snack 2
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
*/
// var numero = parseInt(prompt('Inserisci un numero'));

// if(numero % 2 === 0){
//     console.log('Il numero è pari:', numero);
//     document.getElementById('snack-2-number').innerHTML = 'Il numero è pari: ' + numero;
// } else{
//     document.getElementById('snack-2-number').innerHTML = 'Il numero è dispari. Stampo quello successivo: ' + (numero + 1);

//     console.log('Il numero è dispari. Stampo quello successivo:', numero + 1 );
// }

/* 
Snack 3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/
// var firstNames = ['marco', 'paolo', 'giovanni', 'andrea', 'manuel'];
// var items = '';
// for(var i = 0; i < firstNames.length; i++){
//     items += '<li>' + firstNames[i] + '</li>';
// }
// document.getElementById('snack-3-firstname-list').innerHTML = items;
// console.log(firstNames);

// var lastNames = ['rossi', 'verdi', 'bianchi', 'bagnasco', 'duzioni'];
// items = '';
// for(var i = 0; i < lastNames.length; i++){
//     items += '<li>' + lastNames[i] + '</li>';
// }
// document.getElementById('snack-3-lastname-list').innerHTML = items;
// console.log(lastNames);

// var guest = [];
// var size = 3;
// items = '';
// for(var i = 0; i < size; i++){
//     var fullName = firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
//     if(!guest.includes(fullName)){
//         guest.push(fullName);
//         items += '<li>' + fullName + '</li>';
//     } else{
//         i--;
//     }
// }
// document.getElementById('snack-3-guest-list').innerHTML = items;
// console.log(guest);

/* 
Snack 4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/
// var numbers = [5, 6, 89, 36, 7, 8, 2, 45, 222, 456];
// var items = '';
// for(var i = 0; i < numbers.length; i++){
//     items += '<li>' + numbers[i] + '</li>';
// }
// document.getElementById('snack-4-list').innerHTML = items;
// console.log(numbers);

// var sum = 0;

// for(var i = 0; i < numbers.length; i++){
//     if(i % 2 != 0){
//         sum += numbers[i]
//     }
// }
// document.getElementById('snack-4-sum').innerHTML = sum;
// console.log(sum);

/* 
Snack 5 - Bonus
Crea due array di numeri che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/
var array1 = [2, 56, 78, 49, 1, 50, 47]
var items = '';
for(var i = 0; i < array1.length; i++){
    items += '<li>' + array1[i] + '</li>';
}
document.getElementById('snack-5-first-list').innerHTML = items;
console.log(array1);

var array2 = [4, 77, 1]
items = '';
for(var i = 0; i < array2.length; i++){
    items += '<li>' + array2[i] + '</li>';
}
document.getElementById('snack-5-second-list').innerHTML = items;
console.log(array2);

var greater = array1;
var smaller = array2;

if(array1.length < array2.length){
    greater = array2;
    smaller = array1; 
}

while(smaller.length < greater.length){
    smaller.push(Math.floor(Math.random() * 100));
}
items = '';
for(var i = 0; i < array1.length; i++){
    items += '<li>' + array1[i] + '</li>';
}
document.getElementById('snack-5-first-list-after').innerHTML = items;
console.log(array1);

items = '';
for(var i = 0; i < array2.length; i++){
    items += '<li>' + array2[i] + '</li>';
}
document.getElementById('snack-5-second-list-after').innerHTML = items;
console.log(array2);