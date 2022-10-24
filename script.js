//1 задание
 let min=+prompt("Введите число от 0 до 59");
       if (min >= 0 && min <= 14) {
         alert("Первая");
         console.log ("Первая");
      }
       else if (min >= 15 && min <= 30) {
         alert("Вторая");
         console.log ("Вторая");
      }
      else if (min >= 31 && min <= 45) {
         alert("Третья");
         console.log ("Третья");
      }
      else if (min >= 46 && min <= 59) {
         alert("Четвертая");
         console.log ("Четвертая");
      }
// 2 задание
 let lang = prompt('введи ru или en');
 if (lang == 'ru') {
     arr = [
         'Понедельник ',
         'Вторник ',
         'Среда ',
         'Четверг ',
         'Пятница ',
         'Cуббота ',
         'Воскресенье ',
     ];
     alert(arr)}
 else if (lang == 'en') {
     arr = [
         'Monday ',
         'Tuesday ',
         'Wednesday ',
         'Thursday ',
         'Friday ',
         'Saturday ',
         'Sunday ',
     ];
     alert(arr)}
 else {
     alert('что ты ввел?');
 }
// Работа с if-else
 let a = prompt();
 if (a == 0){
     alert('Верно1!');
 } else {
     alert('Неверно1!')
 }

 a = prompt(1);
 if(a > 0){
     alert('Верно2!');
 } else {
     alert('Неверно2!')
 }
 a = prompt(2);
 if (a < 0){
     alert('Верно3!');
 } else {
     alert('Неверно3!')
 }
 a = prompt(3);
 if (a >= 0){
     alert('Верно4!');
 } else {
     alert('Неверно4!')
 }
 a = prompt(4);
 if (a <= 0){
     alert('Верно5!')
 } else {
     alert('Неверно5!')
 }
 a = prompt(5);
 if (a != 0){
     alert('Верно6!')
 }else {
     alert('Неверно6!')
}

a = prompt(6);
if (a == 'test'){
    alert('Верно7!')
}else{
    alert('Неверно7!')
}

a = prompt(7);
if (a == Number(1)){
    alert('Верно8!')
}else{
    alert('Неверно8!')
}

работа с && и ||

// №1

if (a > 0 && a < 5){
    alert('Верно1!')
}else{
    alert('Неверно2!')
}

// №2

if (a == 0 || a == 2){
    alert('Верно2!')
}else{
    alert('Неверно2!')
}

// №3 

let b
if (a == 1 || a < 1 && b >= 3){
    alert(a + ' ' + b);
}else{
    alert(a - b);
}

// №4

a = prompt()
b = prompt()
let first = (a > 2 && a < 11)
let second = (b >= 11 || b == 6 && b < 14);
if (first || second){
    alert('Верно3!')
} else{
    alert('Неверно3!')
}

Switch-case

let num = prompt() 
switch(num){
    case 1:
        result = 'Зима'
        alert(result)
    case 2:
        result = 'Весна'
        alert(result)
    case 3:
        result = 'Осень'
        alert(result)
    case 4:
        result = 'Лето'
        alert(result) 
}

// Задачи

// №1

let day= +prompt("Введите число от 1 до 31");
      if (min >= 1 && min <= 10) {
        alert("Первая");
        console.log ("Первая");
     }
      else if (min >= 11 && min <= 21) {
        alert("Вторая");
        console.log ("Вторая");
     }
     else if (min >= 22 && min <= 31) {
        alert("Третья");
        console.log ("Третья");
     }
     else{
        alert('Число неверно!')
     }

// №2

let month = prompt('Введите номер месяца(от 1 до 12)')
if(month == 1,2,12) alert('Зима');
else if (month == 3,4,5) alert('Весна');
else if(month ==6,7,8) alert('Лето');
else if(month ==9,10,11) alert('Осень');

// №3

let c = 'abcde';
if(c[0] == 'a') alert('да');
else alert('Нет');

// №4

let c = '12345';
if(c[0] == '1','2','3') alert('да');
else alert('Нет');

// №5

let a = prompt('Введите 3 числа');
let b = prompt('Введите 3 числа');
let c = prompt('Введите 3 числа');
alert(Number(a)+Number(b)+Number(c));
