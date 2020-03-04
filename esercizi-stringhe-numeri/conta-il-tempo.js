/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
/* calcolo il totale delle ore, minuti e secondi , partendo da un numero qualsiasi di secondi*/
var totSec = 12560;// secondi che decido di mettere a calcolo
/*
    ci sono 3600 secondi in un ora
              e 60 secondi in un minuto
*/
var ore = Math.floor(totSec/3600);// arrotondando per difetto la divisione fra il numero da calcolare e 3600 ho il numero delle ore
var minuti = Math.floor((totSec%3600)/60);// arrotondando per difetto il resto fra il numero da calcolare e 3600, tutto diviso per 60 ho il numero dei minuti
var secondi = (totSec%3600)%60; // calcolo il resto di 60, dal resto fra il numero da calcolare e 3600. Ho cosi anche i secondi

console.log(ore+' ore, '+minuti+' minuti, '+secondi+' secondi.');
