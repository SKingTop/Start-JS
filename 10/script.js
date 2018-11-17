////////////////////////////////////////////////Проверка, целое ли число///////////////////////////////////
/*Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.*/
var isInteger = function(num){
	if ((num^0)===num){
		return true;
	} else {
		return false;
	}
}
alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false