///////////////////////////Напишите "if", аналогичный "switch"///////////////////////////
/*Напишите if..else, соответствующий следующему switch:
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}*/
var browserName = prompt("Введите название вашего браузера \n IE \n Chrome \n Firefox \n Safari \n Opera \n Other browser", "");
if (browserName == "IE") {
	alert( 'О, да у вас IE!' );
} else if (browserName == "Chrome" || browserName == "Firefox" || browserName == "Safari" || browserName == "Opera") {
	alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
	alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
//////////////////////Переписать if'ы в switch///////////////////////////////////////
/*Перепишите код с использованием одной конструкции switch:
var a = +prompt('a?', '');
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
}*/
var a = +prompt("Введите число А:",0);
switch (a) {
	case 0: 
		alert( 0 );
		break;
	case 1:
		alert( 1 );
		break;
	case 2:
	case 3:
		alert( '2,3' );
		break;
	default:
		alert("Это чило не предусмотренно!");
}