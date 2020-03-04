/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var lunedi=13, martedi=12, mercoledi=7, giovedi=10, venerdi=-6, sabato=2, domenica=14;

if (lunedi>martedi) {
  var token1=lunedi;
  var token2=martedi;
}else {
  token1=martedi;
  token2=lunedi;
}
if (token1<mercoledi) {
  token1=mercoledi;
}
if (token2>mercoledi) {
  token2=mercoledi;
}
if (token1<giovedi) {
  token1=giovedi;
}
if (token2>giovedi) {
  token2=giovedi;
}
if (token1<venerdi) {
  token1=venerdi;
}
if (token2>venerdi) {
  token2=venerdi;
}
if (token1<sabato) {
  token1=sabato;
}
if (token2>sabato) {
  token2=sabato;
}
if (token1<domenica) {
  token1=domenica;
}
if (token2>domenica) {
  token2=domenica;
}

  console.log('giornata più calda : '+token1);
  console.log('giornata più fredda : '+token2);
