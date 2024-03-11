console.log('Siamo collegati!');

//versione semplice dell'esercizio


//inserimento costanti da richiamare 
const kmDistanza = document.getElementById('km'); //object
const userAge = document.getElementById('user-age');
const buttonElement = document.getElementById('submit');
const price = 0.21 


//Ottenere il numero di km da percorrere
  // const km = kmDistanza.value
//chiedere l'età
  // const age = userAge.value


//agganciare l'evento al pulsante
buttonElement.addEventListener('click', function(){
    console.log('invio')
    const km = kmDistanza.value
    const age = userAge.value
    console.log(km,age)
});

//calcolare il prezzo base
const basePrice = km * price

//calcolare lo sconto
if (age < 18){
     discount = 0.2 //20:100
} else if{
     discount = 0.4 // 40:100
}else {
     discount = 0
};

//prezzo finale


//stampare il prezzo finale
