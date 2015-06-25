/*
Есть 2 операции “умножить на 2” и “вычесть 1“
Нужно посчитать минимальное количество таких операций, которые нужны, что б из числа X получить число Y 
Дано 2 числа через пробел
вывод - одно число
пример
6 10
ответ: 2
Пример
Ввод 999 10000
Вывод 378

7,29 ответ 8
прислать ответ нужно кодом
спасибо
*/
function getsteps(from, to) {
	if (from * 2 - 1 == to) return 2;
	if (from >= to) return from - to;
	var log = Math.log(to/from)/Math.log(2);
	if (log == (log|0)) return log;

	var mins = getsteps(from, (to+1)/2|0)+to%2+1;
	var muls = getsteps(from*2, to);

	return Math.min(mins, muls);
}
