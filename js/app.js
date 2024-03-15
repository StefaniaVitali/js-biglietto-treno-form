console.log('Siamo collegati!');

//VERSIONE BASE DELL'ESERCIZIO

//1)Ottenere collegare i vari input al file js

  //1a) recuperare i km dall'imput
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


  






  
  

//considerazioni correzione esercizio