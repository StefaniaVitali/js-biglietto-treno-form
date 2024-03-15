console.log('Siamo collegati!');

//versione semplice dell'esercizio

//Ottenere il numero di km da percorrere da input
  //1) recuperare i km dall'imput
 const kmInputElement = document.getElementById('km'); //Object
 console.log(kmInputElement);
  //2) collegare il campo dove verrà inserito il valore dall'utente 
    /*2b trasformarlo in numero tramite parsFloat perchè potrebbe 
    non essere un numero intero */
 const kmValue = parseFloat(kmInputElement.value); //number
 console.log(kmValue , typeof kmValue);

// //chiedere l'età
//   //1) collegare l'input dell'html dove si indicano i km
const ageInputElement = document.getElementById('age'); //object
console.log(ageInputElement); 
//   //2) collegare il campo dove verrà inserito il valore dall'utente
        /*2b trasformarlo in numero tramite parsFloat perchè potrebbe 
    non essere un numero intero */
const ageValue = parseFloat(ageInputElement.value); //number
console.log(ageValue);
//   // collegare il bottone
const buttonInputElement = document.getElementById('submit');
console.log(buttonInputElement);

// //ascoltare l'evento click
buttonInputElement.addEventListener('click', function(){
console.log('ciao')
});

//  


//calcolare il costo del biglietto :
   //-calcolare il prezzo base
   
   //-calcolare lo sconto
// if (userAge < 18){
//      discount = 0.2 //20:100
// } else if (userAge > 65){
//      discount = 0.4 // 40:100
// }else {
//      discount = 0
// };



//prezzo finale


//stampare il prezzo finale
