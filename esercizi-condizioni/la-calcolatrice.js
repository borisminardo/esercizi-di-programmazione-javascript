/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
var numerouno= 5;
var numerodue= 5;
var operazione= 'somma';

switch (operazione) {
  case 'somma':
    console.log(numerouno+numerodue);
    break;
  case 'sottrazione':
    console.log(numerouno-numerodue);
    break;
  case 'moltiplicazione':
    console.log(numerouno*numerodue);
    break;
  case 'divisione':
    console.log(numerouno/numerodue);
    break;
  case 'modulo':
    console.log(numerouno%numerodue);
    break;
  case 'potenza':
    console.log(Math.pow(numerouno,numerodue));
    break;
  case 'media':
    console.log((numerouno+numerodue)/2);
    break;
  default:
    console.log('operazione non valida, consentito solo: somma, sottrazione, moltiplicazione, divisione, modulo, potenza, media');
}
