///////////////////////////////////////////////Проверка стандарта///////////////////////////////
/*Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».*/
var ansewer = prompt("Каково «официальное» название JavaScript?","");
if (ansewer=="ECMAScript"){
	alert("Верно!");
} else {
	alert("Не знаете? «ECMAScript»!");
}
///////////////////////////////////////////////Получить знак числа///////////////////////////////
/*Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.*/
var value = prompt("Введите любое число",0);
if (value > 0) {
	alert(1);
} else if (value < 0) {
	alert(-1);
} else {
	alert(0);
}
///////////////////////////////////////////////Проверка логина///////////////////////////////
/*Напишите код, который будет спрашивать логин (prompt).
Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».
Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».*/
var userName = prompt("Кто пришел?", "");
if (userName == "Админ") {
	var password = prompt("Пароль?", "")
		if (password == "Чёрный Властелин") {
			alert("Добро пожаловать!");
		} else if (password == null) {
			alert("Вход отменен")
		} else {
			alert("Пароль не верен")
		}
} else if (userName == null) {
	alert("Вход отменен")
} else {
	alert("Я вас не знаю")
}
////////////////////////////////////////Перепишите 'if..else' в '?'/////////////////////////////////////
/*Перепишите if с использованием оператора '?':
Пример
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}*/
var message;
var login = prompt("Введите логин", "");
var message = (login == "Вася")? "Привет" : 
	(login == "Директор")? "Здравствуйте" :
	(login == "")? "Нет логина" :
	"";
	alert(message);