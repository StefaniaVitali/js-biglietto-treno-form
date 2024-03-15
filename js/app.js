console.log('Siamo collegati!');

//VERSIONE BASE DELL'ESERCIZIO

//1)Ottenere collegare i vari input al file js

  //1a) recuperare i km dall'input
  const kmInputElement = document.getElementById('km'); //object | null
  console.log(kmInputElement);

  //1b) recuperare l'età dall'input
  const ageInputElement = document.getElementById('age'); //object | null
  console.log(ageInputElement);

  //1c) collegare il bottone
  const buttonElement = document.getElementById('submit'); //object |null
  console.log(buttonElement, typeof buttonElement);
  //1d) collegare il div su cui stampare il risultato
  const priceElement = document.getElementById('prezzo');
  console.log(priceElement)

   //prendere i valori degli input per collegare il bottone
   // const km = kmInputElement.value
   // console.log(km);
   // const age = ageInputElement.value
   // console.log(age);

  //1c-b) testare il bottone + inserire i valori che dobbiamo recuperare al click
  buttonElement.addEventListener ('click', function(){ 
      //testare bottone
       console.log('dai che ce la facciamo!')
      //valori input
       const km = parseFloat(kmInputElement.value) //number 
       console.log(km);
       const age = parseFloat(ageInputElement.value) //number
      console.log(age);
      //calcolare il prezzo del biglietto:
   
       //a) costante costo per km
       const tariffa = 0.21 //number
       //b) calcolare il prezzo base
       const basePrice = (km * 0.21) //number
       console.log(basePrice);
       //c) calcolare lo sconto
       let discount = 0
         if(age < 18){
         discount = 0.2
         }else if (age > 65){
         discount = 0.4
         }
      // console.log (discount)
      
       //d) restituire il prezzo finale del biglietto in base allo sconto
      const finalPrice = (basePrice - basePrice * discount);
      console.log(finalPrice)
      
       //e) stampare il prezzo nell'html
       priceElement.innerHTML = finalPrice.toFixed(2) + '&euro;'
      
      

  });

  //VERSIONE BONUS:
// Sostituite l’input dell’età con una select che permetta all’utente di selezionare una opzione per lo sconto scegliendo tra: nessuno, minorenni, over 65 (per questo dovrete modificare un po le condizioni degli if / else if per calcolare lo sconto)
// Stampate il risultato in maniera più carina. Stampate una card che al suo interno abbia una piccola tabella che contenga un riepilogo del biglietto: km del viaggio, prezzo base, sconto applicato, prezzo totale (prezzi stampati con 2 cifre decimali)
// inserite gli input e il button dentro un tag form e invece di ascoltare il click sul button, ascoltate l’evento submit del form impedendo che questo venga inviato e che si ricarichi il browser.

//collegare i vari input all'js

//1a recuperare i km dall'input
const kmInputElement2 = document.getElementById('km2'); //object | null
console.log(kmInputElement2);

//1b) recuperare l'età dall'input
const ageInputElement2 = document.getElementById('age2'); //object | null
console.log(ageInputElement2);

//1c)
const buttonElement2 = document.getElementById('submit2'); //object |null
  console.log(buttonElement, typeof buttonElement);

//1d) collegare il div su cui stampare il risultato
  const priceElement2 = document.getElementById('prezzo2');//object
  console.log(priceElement2)

//2 testare il bottone
buttonElement2.addEventListener('click', function(){
//buttonElement2 test
  console.log("mai perdersi d'animo!")
//ottenere i valori di  km2 e age2
//km2
const km2 = parseFloat(kmInputElement2.value) //number
console.log(km2)
//age2
const age2 = parseFloat(ageInputElement2.value) //number
console.log(age2)

//validare i dati dentro il primo if
if(){

} else {
  
}
//   

});





//validare i dati
// non dobbiamo avere un Nan: !


  
  

//considerazioni correzione esercizio