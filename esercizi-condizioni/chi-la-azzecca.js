/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/var player1= 69;
var player2= 60;
var random= Math.random() * (100-1) + 1;
var custom= Math.floor(random);
console.log(player1);
console.log(player2);


console.log('numero casuale generato: '+ Math.floor(random));
if (custom==player1) {
  console.log('player1 ha vinto');
}else if (custom==player2) {
  console.log('player2 ha vinto');
}
if ((player1&&player2)<custom) {
  if (player1>player2) {
    console.log('1 player1 si è avvicinato di più');
  }else {
    console.log('1 player2 si è avvicinato di più');
  }
}
if ((player1&&player2)>custom) {
  if (player1<player2) {
    console.log('2 player1 si è avvicinato di più');
  }else {
    console.log('2 player2 si è avvicinato di più');
  }
}
if ((player1<custom)&&(player2>custom)) {
  var x=custom-player1;
  var y=player2-custom;
  if (x<y) {
    console.log('3 player1 si è avvicinato di più');
  }else {
    console.log('3 player2 si è avvicinato di più');
  }}
   if ((player2<custom)&&(player1>custom)) {
    var x=custom-player2;
    var y=player1-custom;
    if (x<y){
    console.log('4 player2 si è avvicinato di più');
  }  else {
    console.log('4 player1 si è avvicinato di più');
  }
}
