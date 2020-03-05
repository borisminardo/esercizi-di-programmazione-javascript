/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/  var v= 30;
  if (v<18) {
    console.log('insufficiente');
  }
    else if (v>=18&&v<21) {
      console.log('sufficiente');
    }
      else if (v>=21&&v<24) {
       console.log('buono');
     }
       else if (v>=24&&v<27) {
         console.log('distinto');
       }
         else if (v>=27&&v==29) {
           console.log('ottimo');
         }
           else if (v==30) {
             console.log('eccellente');
           }
             else {
               console.log('voto non valido');
             }

/*
NON FUNZIONA LO SWITCH CASE E NON SO PERCHE'
*/
           var voto =18;

           switch (voto) {
               case (voto<18):
                 console.log('insufficiente');
                 break;
               case (voto>=18&&v<21):
                 console.log('sufficiente');
                 break;
               case (voto>=21&&v<24):
                 console.log('buono');
                 break;
               case (voto>=24&&v<27):
                 console.log('distinto');
                   break;
               case (voto>=27&&v==29):
                 console.log('ottimo');
                 break;
               case (voto==30):
                 console.log('eccellente');
                 break;
               default:(voto>30)
                 console.log('voto non valido');
             }
