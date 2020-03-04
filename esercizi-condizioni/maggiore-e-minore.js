/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var primo=3, secondo=-6, terzo=1, quarto=10;

if (primo>secondo) {
  var token1=primo;
  var token2=secondo;
}else {
  token1=secondo;
  token2=primo;
}
if (token1<terzo) {
  token1=terzo;
}
if (token2>terzo) {
  token2=terzo;
}
if (token1<quarto) {
  token1=quarto;
}
if (token2>quarto) {
  token2=quarto;
}
  console.log('maggiore : '+token1);
  console.log('minore : '+token2);
