/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var numero = 1200;
var numeroStringa = ""+numero;
if (numeroStringa.length == 1) {
  console.log(1+" cifra");
}
if (numeroStringa.length == 2) {
  console.log(2+" cifre");
}
if (numeroStringa.length == 3) {
  console.log(3+" cifre");
}
else if (numeroStringa.length == 4) {
  console.log(4+" cifre");
}
if (numeroStringa.length>4) {
  console.log('numero non valido, massimo 4 cifre');
}
