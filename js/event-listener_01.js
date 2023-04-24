'use strict';
/*
 * 📌❗️🤓 Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?- Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

const changeBtnRef = document.querySelector('.js-swap-btn');
const removeBtnRef = document.querySelector('.js-remove-listener');
const imgRef = document.querySelector('.js-img');

const handleClick = function (e) {
// e.currentTarget.style.backgroundColor = "yellow"
// this.style.backgroundColor = "yellow"
e.target.style.backgroundColor = "yellow"
console.log("hello 1")
};

const handleClick2 = function (e) {
  e.target.style.backgroundColor = "green"
    console.log("hello 2")
};

const removeListner = function () {
  changeBtnRef.removeEventListener("click", handleClick)
  changeBtnRef.addEventListener("click", handleClick2)
}

changeBtnRef.addEventListener("click", handleClick)
removeBtnRef.addEventListener("click", removeListner)
/*
📌❗️🤓 Ми видаляємо прослуховувачі подій у трьох випадках:

1. Коли ми хочемо, щоб обробник подій запускався лише один раз. 
   Ми можемо видалити прослуховувач подій після його запуску, 
   щоб реакція відбувалася один раз (або іншу задану кількість разів).

2. Для повторного використання елементів. 
   Можливість додавати та видаляти прослуховувачі подій дозволяє нам 
   використовувати один елемент у кількох сценаріях. 
   Наприклад, ми могли б використовувати одну кнопку у трьох різних сценаріях, 
   додаючи та видаляючи прослуховувачі подій. 
   Альтернативою може бути використання трьох окремих кнопок 
   із трьома окремими прослуховувачами подій.

3. Для підвищення продуктивності чи ефективності. 
   Якщо у нас у додатку багато прослуховувачів подій, видалення тих, 
   які більше не потрібні, може підвищити ефективність. 
   Цей аспект ефективності пов'язані з управлінням пам'яттю. 
*/
