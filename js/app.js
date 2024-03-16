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
buttonElement.addEventListener('click', function () {
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
  if (age < 18) {
    discount = 0.2
  } else if (age > 65) {
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

//1e collegare il tag form
const formElement = document.getElementById('ticket-calculator');
console.log(formElement)




//2 testare il bottone
formElement.addEventListener('submit', function (event) {
  event.preventDefault()
  //buttonElement2 test
  console.log("mai perdersi d'animo!")
  // //ottenere i valori di  km2 e age2
  // //km2
  const km2 = parseFloat(kmInputElement2.value) //number
  console.log(km2)
  //age2
  const age2 = parseInt(ageInputElement2.value) //number
  console.log(age2)

  //validare i dati dentro il primo if:

  // / SE km2 > 0 | km2 non Nan allora stamperemo il prezzo
  if (km2 > 0 && !isNaN(km2)) {
    //evitare che la pagina si ricarichi 

    //calcolare il prezzo del biglietto:
    const basePrice2 = (km2 * 0.21) //number
    console.log(basePrice2)
    //calcolare lo sconto
    let discount2 = 0
    if (ageInputElement2.value === "1") {
      discount2 = 0.2
    } else if (ageInputElement2.value === "2") {
      discount2 = 0.4
    }

    const discount2Value = (basePrice2 * discount2)
    console.log(discount2Value)
    //  console.log(discount2) 
    //calcola il prezzo definitivo
    const finalPrice2 = (basePrice2 - basePrice2 * discount2);
    console.log(finalPrice2)



    //stampare prezzo nell'html
    priceElement2.innerHTML = `<table class="table">
                                  <thead>
                                    <tr>
                                        <th>KM</th>
                                        <th>% sconto</th>
                                        <th>costo finale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${km2}</td>
                                        <td>${discount2Value.toFixed(2)}</td>
                                        <td>${finalPrice2.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                                  <tfoot></tfoot>
                              </table> `



  } else {
    //ALTRIMENTI diremo che non è possibile fare il calcolo
    //test per vedere se la condizionale if funziona
    // alert('i dati inseriti non sono corretti!')
    priceElement2.innerHTML = "I dati inseriti non sono corretti"


  }


});









//considerazioni correzione esercizio