/*
Snack 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while
 */
var request = 5;
var sum = 0;
for(var i = 1; i <= request;i++){
    var number = parseInt(prompt('Inserisci numero ' + i + ' di ' + request));
    console.log(number);
    sum += number;
}
console.log('Il totale dei numeri inseriti è:', sum);