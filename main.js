/* Плагины
Live Server (клик п.к.м на index.html -> Open with Live Server)
Prettier форматирует код по Ctrl + s - нихуя не работает
js snippets - для более быстрого кодинга с DOM

react
Docker - изучить
*/
// Ctrl + / - закомментировать

// // LET переменная может менять своё значение
// let userName = 'Марк';

// // CONST не являются переменными - не могут менять своё значение во время работы программы
// // константу нельзя объявить и не записать в неё значение
// const pi = 3.14;
// // pi = 20; выдаст ошибку 
// // const pi; выдаст ошибку

// /* VAR имеет функциональную область видимости, а не блочную 
// (виден за пределами блока, но не функции) */

// // динамическая типизация, использовать нейминг для понимания типа переменной, не менять резко тип - может привести к ошибкам
// /* ТИПЫ ДАННЫХ: number, string, null, underfined, boolean, object (в т.ч. массивы), symbol, BigInt */

// // Оператор Typeof
// console.log(typeof userName);

// console.log(Number.MAX_SAFE_INTEGER);
// /*BigInt - если значение дольше типа number, то нужно дописать n в конце цисла
// BigInt числа при операциях с числами number выдаст ошибку*/

// // Symbol - уникальное примитивное значение - изучить

// /* ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
//     && - и
//     || - или
//     ! - не
// */

// // ТЕРНАРНЫЙ ОПЕРАТОР (условие) ? (верно) : (не верно) 
// // let time = 10; 
// // let greeting = time < 12 ? console.log('доброе утро') : console.log('добрый день')

// // КОНКАТЕНАЦИЯ (сложение) строк
// let greeting = 'Привет, Марк!'
// let howAreYou = 'Как дела?'
// let sayHi = greeting + howAreYou;

// // ШАБЛОННЫЕ СТРОКИ И ИНТЕРПОЛЯЦИЯ
// console.log(`Привет, ${userName}! Как дела?`)

// // ФУНКЦИИ
// // ПРИНЦЫП DRY - DON'T REPEAT YOURSELF

// // Function declaration
// function sayHi1() {
//     // Можно использовать функцию sayHi(); до того, как она объявлена
// }

// // Function expression (выражение)
// const sayHi2 = function () {
//     // Можно использовать функцию sayHi(); только после того, как она объявлена таким образом
//     // потому что javascript в первую проходку читает Function declaration целиком, а
//     // объявление переменных читает без записаных в них значений
// }

// // Всё после return не срабатывает
// // Функции без return возвращают undefined
// // возможна передача функции в качестве параметра

// /* Особенность примитивных типов данных заключается в том, что они неизменяемы (иммутабельны)
// и передаются по значению. В отличие от объектов, которые передаются по ссылке. */
// let numObj = new Number(10);
// console.log(typeof numObj); // object

// let num = numObj.valueOf(); // важный метод, возвращающий примитивное значение объекта
// console.log(num);           // 10
// console.log(typeof num);    // number

// // свойства объекта можно перезаписать внутри функции, потому что объекты передаются по ссылке
// // примитивы нельзя перезаписать внутри функции, можно только вернуть значение из функции
// // и присвоить его примитиву

// // CALLBACK - это функция, которая будет вызвана внутри другой функции после опр. действий
// // КОЛЛБЭК ещё называют ФУНКЦИЕЙ ОБРАТНОГО ВЫЗОВА
// function summ (a, b) {
//     return a + b;
// }

// function diff (a, b) {
//     return a - b;
// }
// // можно передать и функцию с параметрами
// function doSomething (func) {
//     let x = 10;
//     let y = 5;
//     console.log(func(x, y));
// }

// doSomething(summ) // 15
// doSomething(diff); // 5 // javascript не подставит ;

// // САМОВЫЗЫВАЮЩАЯСЯ ФУНКЦИЯ IIFE (immideatly involved function expression 
// // - незамедлительно вызывающееся функциональное выражение)
// // ещё называют АНОНИМНАЯ САМОВЫЗЫВАЮЩАЯСЯ ФУНКЦИЯ - ВЫЗОВ СРАЗУ НА МЕСТЕ ЕЁ ОБЪЯВЛЕНИЯ
// // Это делается, чтобы ограничить область видимости, хотя можно ф-ю и назвать, если хотим

// // (...) создают выражение, затем () сразу вызывают его
// (function () {
//     console.log('тратата')
// })(); // javascript не подставит ;

// (function summa(a, b) {
//     console.log(a + b); // случайно написала русскую с и была ошибка, которая не отображалась в коде
// })(10, 15); // 25

// let res = (function (a, b) {
//     return a + b;
// })(100, 150);

// console.log(res);

// // СТРЕЛОЧНЫЕ ФУНКЦИИ 
// const say = (name) => {
//     console.log(`Привет, ${name}! Как дела?`)
// } // Стрелочная функция НЕ ИМЕЕТ СВОЕГО .this и ссылается на контекст, в котором она объявлена

// const say2 = (name) => console.log(`Привет, ${name}! Как дела?`) // подставит запятую

// const summ3 = (a, b) => a + b

// say('Зайчик');
// say2('Сержи');

// // МАССИВЫ - структура данных - коллекция
 const auto = ['Audi', 'BMW', 'Mazda', 'Toyota'];
 const au = [];
 console.log(au.length)
// console.log(auto);          // (4) ['Audi', 'BMW', 'Mazda', 'Toyota']
// console.log(auto[0]);       // Audi
// console.log(auto.length);   // 4

// // МЕТОДЫ МАССИВОВ (читать в документации)
// /*
// arr.push(items)         - Добавить элемент(ы) в конец массива
// arr.pop()               - Удалить элемент(ы) из конца массива
// arr.shift()             - Удалить элемент(ы) из начала массива
// arr.unshift(...items)   - Добавить элемент(ы) в начало массива
// arr.splice([start], [deleteCount, newElements]) - Удалять элемент(ы) из любого места массива
// arr.slice(start, end)   - Вырезает часть массива и возвращает его
// */
// auto.push('Nissan'); // как и у объектов, с элементами массива мы можем работать,
//                     // но заставить ссылаться const array на другой массив мы не можем
// console.log(auto);

// auto.splice(2, 1); // ['Audi', 'BMW', 'Toyota', 'Nissan'] начиная со второго, удалили 1 элемент
// console.log(auto);

// // ЦИКЛЫ
// // i - итератор

// for (let i = 0; i < 10; i++) { // от 0 до 9
//     console.log(i)
// }

// // ОБХОД МАССИВА ЦИКЛОМ FOR
// for (i = 0; i < auto.length; i++) {
//     console.log(auto[i])
// }

// ОБХОД МАССИВА ЦИКЛОМ FOR ( of )
for (let item of auto) {
    item = 'Yoga'
    console.log(item) 
}
console.log(auto)
// // ОБХОД МАССИВА МЕТОДОМ forEach() - метод есть не у всех массивоподобных!
// auto.forEach(function (item, index) {
//     console.log(`${item} - ${index}`)
// })

// function printAuto (item, index) {
//     console.log(`${item} - ${index}`)
// }

// auto.forEach(printAuto); 
// // важно не написать printAuto(), вместо printAuto, чтобы не вызвать функцию сразу

// auto.forEach((item, index) => console.log(`${item} - ${index}`))

// // ОБЪЕКТЫ - структура данных
// // КЛЮЧЕВОЕ СЛОВО .this - ВНУТРИ МЕТОДА ОБЪЕКТА ССЫЛАЕТСЯ НА ОБЪЕКТ
// const person = {
//     userName: 'Марк',
//     age: 23,
//     isMarried: false,
//     profession: 'Designer',
//     sayHi: function () { // МЕТОД ОБЪЕКТА
//         console.log(this); // выведет объект {userName: 'Марк', age: 23, isMarried: false, profession: 'Designer', sayHi: ƒ}
//         console.log(`Hi, my name is ${this.userName}`);
//     }
// }

// console.log(person);                // {userName: 'Марк', age: 23, isMarried: false}
// console.log(person.userName);       // Марк
// console.log(person['userName']);    // Марк

// let propertyName = 'profession';
// console.log(person[propertyName]);  // Designer

// person.gender = 'male'; // ДОБАВЛЕНИЕ НОВОГО СВОЙСТВА В ОБЪЕКТ
// console.log(person); // {userName: 'Марк', age: 23, isMarried: false, profession: 'Designer', gender: 'male'}

// delete person.age; // УДАЛЕНИЕ СВОЙСТВА ОБЪЕКТА

// person.sayHi() // ВЫЗОВ МЕТОДА ОБЪЕКТА

// person.sayBy = function (name) { // ДОБАВЛЕНИЕ НОВОГО МЕТОДА ОБЪЕКТА
//     console.log('By, ' + name);
// }
// person.sayBy(userName);

// // ОБХОД ОБЪЕКТА
// for (let key in person) { //for in может обходить неитерируемые структуры данных, в отличие от for of
//     // console.log(key); // userName isMarried profession gender sayHi
//     console.log(key, ':', person[key]) // {userName: 'Марк', isMarried: false, profession: 'Designer', gender: 'male', sayHi: ƒ}
// }

// // КЛАССЫ. КОНСТРУКТОРЫ ОБЪЕКТОВ

// class Person {// классы с большой буквы (super - обращение к родительскому классу)
//     constructor(userName, isMarried, profession, gender) {
//         this.userName = userName;
//         this.isMarried = isMarried;
//         this.profession = profession;
//         this.gender = gender;
//     }

//     sayBy (name) {
//         console.log(`By, ${name}, I am ${this.userName}`)
//     }
// }

// const person1 = new Person('Женя', 'false', 'программист', 'female');
// console.log(person1);

// // ВЫБОР ОДНОГО ЭЛЕМЕНТА DOM ПО СЕЛЕКТОРУ
// // document - активная страница в браузере
// // .querySelector - запрашиваем селектор
// const header = document.querySelector('h2')
// console.log(header)

// document.querySelector('.red') // элемент с классов css .red
// document.querySelector('#footer') // элемент с id = footer
// document.querySelector('.header .nav .link a') // цепочка классов к конкретному элементу DOM a

// header.classList.add('red') // добавляем класс red (прописанный нами в css) к выбраному элементу

// document.querySelector('.heading-3').classList.add('green')

// const p = document.querySelectorAll('p')
// // p.classList.add('blue-text') // выдаст ошибку, потому что не существует classList для коллекции
// p.forEach(function (text) {
//     text.classList.add('blue-text');
// })

// const headers2 = document.querySelectorAll('h2');

// for (let header of headers2) {
//     header.classList.add('green-text')
// }

// // Ещё нужно знать устаревший, но использующийся стандарт:
// // document.getElementsByClassName();
// // document.getElementsByTagName();
// // document.getElementById();

// // РАБОТА С CSS КЛАССАМИ
// const heading = document.querySelector('h1')
// heading.classList.add('red-text')
// heading.classList.remove('red-text')    // УДАЛЯЕТ CSS СВОЙСТВО

// heading.classList.toggle('green-text')  // либо добавляет, либо убирает класс, 
//                                         // в зависимости от того, есть ли он уже у элемента
// heading.classList.toggle('green-text')  // к тому же ВОЗВРАЩАЕТ true или false, в зависимости от 
//                                         // того, был ли класс добавлен (true, если добавлен)
// if (heading.classList.toggle('green-text')){}

// heading.classList.contains('green-text') // вернёт true если такое свойство существует

// if (heading.classList.contains('green-text')){}

// // РАБОТА С АТРИБУТАМИ (в реакте их называют иначе)
// /*
// getAttribute(attrName) - возвращает значение указанного атрибута
// setAttribute(name, value) - добавляет указаный атрибут и его значение к элементу
// hasAttribute(attrName) - возвращает true при налиции у элемента указанного атрибута
// removeAttribute(attrName) - удаляет указанный атрибут

// toggleAttribute(name, force) - добавляет новый атрибут при отсутствии или
// удаляет существующий атрибут

// hasAttributes() - возвращает true, если у элемента имеются какие-либо атрибуты
// getAttributesNames() - возвращает названия атрибутов элемента
// */

// const img = document.querySelector('#logo');
// const srcValue = img.getAttribute('src');
// console.log(srcValue) // ./img/js.png

// img.setAttribute('src', './img/php.png')
// img.setAttribute('width', '200')
// img.src = './img/js.png';

// const button = document.querySelector('#button')
// button.value = 'SEND'
// button.setAttribute('value', 'Отправить')

// // РАБОТА С ПРОСЛУШКОЙ СОБЫТИЙ
// // (событие - это любое взаимодействие пользователя со страницей)
// button.value = 'Удалить картинку'

// //.addEventListener('название события', функция, которая должна выполниться)
// button.addEventListener('click', function(){
//     console.log('Click1')
//     img.remove();
// }) 

// // addEventListener можно вызывать сколько угодно раз, даже на одно и то же событие
// button.addEventListener('click', function(){
//     console.log('Click2')
// }) 

// // То же самое, нет смысла повторять, потому что это просто
// // перезапишет обработчик события, а не добавит новый обработчик
// // button.onclick = function () {
// //     img.remove();
// // }

// // ПРОСЛУШКА СОБЫТИЙ 2. ФОРМА
// const inputText = document.querySelector('#input-text')
// const textDiv = document.querySelector('#text-block')

// inputText.addEventListener('input', function(){
//     // console.log(inputText.value);
//     textDiv.innerText = inputText.value;
// })

// // inputText.addEventListener('input', () => {textDiv.innerText = inputText.value;})

// // function inputHandler () {textDiv.innerText = inputText.value;}
// // inputText.addEventListener('input', inputHandler) // ИМЯ Ф-ЦИИ БЕЗ ВЫЗЫВАЮЩИХ СКОБОК В КОНЦЕ

// // ПРОСЛУШКА СОБЫТИЙ 3. EVENT
// const list = document.querySelector('#list')

// list.addEventListener('click', function (event) {
//     console.log(this)   // ссылается на list
//     console.log(event)  // все детали события
//     console.log(event.target) // атрибут события, который ссылается на цель, с которой произошёл event
// })

// // СОЗДАНИЕ ЭЛЕМЕНТОВ И РАБОТА С НИМИ
// /*
// document.createElement('tag-name') - создать Html элемент
// element.innerHtml = '' - изменить Html содержимое внутри элемента
// node.innerText = '' - изменить текстовое содержимое внутри элемента
// node.cloneNode() - клонирование элемента,
// Если передадим: true, то копирование с внутренним содержимым (текст и теги), 
// false (если не передадим true), то копирование без внутреннего содержимого

// element.append(nodeOrDOMString) - вставить элемент внутрь другого элемента (контейнера)
// element.remove() - удалить элемент
// */
// // выбор контейнера
// const container = document.querySelector('#elementsContainer') // сначала забыла # для обращения к id!

// // создать заголовок
// const newHeader = document.createElement('h1');
// newHeader.innerText = 'Новый заголовок';
// container.append(newHeader);

// // копирование шапки
// const mainHeader = document.querySelector('header');
// const headerCopy = mainHeader.cloneNode(true)
// container.append(headerCopy)

// // вставка разметки через строки
// const htmlExample = '<h2>Ещё один заголовок</h2>';
// container.insertAdjacentHTML('beforeend', htmlExample)
// // container.insertAdjacentElement - для вставки элементов, которые были созданы с помощью document.createElement
// // container.insertAdjacentText - для вставки текста

// // Вставка разметки через шаблонные строки
// const title = 'Текст заголовка'
// const htmlExamtle = `<h2>${title}</h2>`
// container.insertAdjacentHTML('beforeend', htmlExample)

// //ToDo СПИСОК ЗАДАЧ
// const toDoList = document.querySelector('#todo-list')
// const toDoForm = document.querySelector('#todo-form')
// const toDoInput = document.querySelector('#todo-input')

// toDoForm.addEventListener('submit', FormHandler) // слушаем форму, а не кнопку, потому что форму можно отправить и по кнопке Enter

// /* Форма отправляется в атрибут action, а если его нет, 
// то происходит перезагрузка страницы (форма отправляется на ту же самую страницу)
// Чтобы перезагрузка не происходила, нужно передать параметр event и вызвать его метод
// .preventDefault(), который отменяет стандартное поведение страницы.
// Если не добавить .preventDefault(), то, например, console.log('Submit!') будет
// появляться на секунду и сразу исчезать
// */
// // обработчик формы
// function FormHandler(event) {
//     event.preventDefault()
//     console.log('Submit!')

//     // получаем элемент списка из поля ввода
//     const taskText = toDoInput.value;

//     // создаём элемент списка через разметку
//     // const liHTML = `<li>${taskText}</li>`

//     // добавляем разметку на страницу
//     // toDoList.insertAdjacentHTML('beforeend', liHTML)

//     // создаём элемент списка с помощью создания элемента document.createElement
//     const newTask = document.createElement('li')
//     newTask.innerText = taskText;

//     // добавление элемента на страницу
//     toDoList.append(newTask)

//     // Создаём кнопку удалить
//     const deleteButton = document.createElement('button')
//     deleteButton.setAttribute('role', 'button') // кнопки, которые не отправляют форму, а совершают вспомогательное действие должны быть настроены с атрибутом 'role' = 'button'
//     deleteButton.innerText = 'Удалить';
//     deleteButton.style['margin-left'] = '15px'
//     newTask.append(deleteButton)
//     // Добавляем функцию удаления кнопке
//     deleteButton.addEventListener('click', deleteTask)
//     // Несмотря на то, что функция deleteTask короткая, мы не можем её сюда добавить, потому что её .this ссылается на форму (а не на deleteButton)
//     // Если очень хочется стрелочную ф-ю, то получаем элемент, спровоцировавший событие с помощью event.target
//     // deleteButton.addEventListener('click', (event) => event.target.closest('li').remove())
//     // очистим поле ввода от старого занчения
//     toDoInput.value = '';

//     // фокус на поле ввода (если добавлять не через Enter, а через кнопку, то нужно нажимать на поле, чтобы ввести новое значение)
//     toDoInput.focus();
// }

// function deleteTask(){
//     console.log(this) // увидим в консоли кнопку удаления

//     // поднимаемся наверх к родителю (элементу списка)
//     this.closest('li').remove();
//     //.closest находит ближайшего родителя, начиная с самого вызывающего элемента
//     //.remove() удаляет элемент
// }

// // РАБОТА С МЕТОДОМ setInterval 
// const timerIntervalID = setInterval(function(){  
//     // console.log('fired!') 
// }, 1000) // 1000 милисекунд, т.е. код будет выполняться каждую 1 секунду 
 
//  clearInterval(timerIntervalID);    // передаём id setInterval, который он возвращает 
//                                     // возвращает underfined и останавливает setInterval 
 
// // РАБОТА С МЕТОДОМ setTimeout 
// const timerID = setTimeout(function(){ 
//     // console.log('setTimeout fired!') 
// }, 2000) 
 
//  clearInterval(timerID); 
 
// // setTnterval + setTimeout 
// const intervalID = setInterval(function(){  
//     // console.log('fired!') 
// }, 1000) 
 
// setTimeout(function(){ 
//     clearInterval(intervalID) 
// }, 5000) 
 
// // СЕКУНДОМЕР 
// const counterHtmlElement = document.querySelector('#counter'); 
// let counter = 0; 
// let counterID; 
 
// const buttonStart = document.querySelector('#start'); 
// buttonStart.onclick = function(){ 
//     console.log('buttonStart') 
//     counterID = setInterval(function(){ 
//         counter++;  
//         counterHtmlElement.innerText = counter; 
//     }, 1000) 
// } 
 
// const buttonPause = document.querySelector('#pause') 
// buttonPause.onclick = function(){ 
//     console.log('buttonPause') 
//     clearInterval(counterID); 
// } 
 
// const buttonReset = document.querySelector('#reset'); 
// buttonReset.onclick = function(){ 
//     console.log('buttonReset'); 
//     clearInterval(counterID); 
//     counter = 0; 
//     counterHtmlElement.innerText = counter; 
// }

// // АСИНХРОННОСТЬ - последовательное выполнение функций 
// // Callback. Callback hell 
// console.log('Start') // ВЫПОЛНИТСЯ ПЕРВЫМ 
// setTimeout(function(){ 
//     console.log('Print after 2s') // ВЫПОЛНИТСЯ ТРЕТЬИМ 
// }, 2000) 
// console.log('Finish') // ВЫПОЛНИТСЯ ВТОРЫМ, НЕ ДОЖИДАЯСЬ setTimeout 
 
// setTimeout(function(){ 
//     console.log('Step 1')           // ВЫПОЛНИТСЯ ПЕРВЫМ 
//     setTimeout(function(){ 
//         console.log('Step 2')       // ВЫПОЛНИТСЯ ВТОРЫМ 
//         setTimeout(function(){ 
//             console.log('Step 3')   // ВЫПОЛНИТСЯ ТРЕТЬИМ 
//         }, 1000) 
//     }, 1500) 
// }, 2000) 
 
// // Callback функции (ф-ции обратного вызова) - это функции, которые  
// // передаются в другие ф-ции и вызываются после их завершения 
// /*function checkRooms() { 
//     setTimeout(function(){ 
//             console.log('Проверяем номера..') 
//     const availableRooms = true; 
//     return availableRooms; 
//     }, 1000) 
// } 
 
// if (checkRooms()) { // НАЧНЁТ РАБОТАТЬ НЕ ДОЖИДАЯСЬ setTimeout 
//                     // Т.Е. К МОМЕНТУ ВЫПОЛНЕНИЯ НЕ ПОЛУЧИТ НИ TRUE НИ FALSE 
//     console.log('Номера есть') 
//     console.log("Едем в отпуск") 
// } else { 
//     console.log('Номеров нет') 
//     console.log('Отпуск отменяется') 
// }*/ 
 
// function checkRooms() { 
//     setTimeout(function(){ 
//         console.log('Проверяем номера..') 
//         const availableRooms = true; // запрос с сервера 
         
//         if (availableRooms) { 
//             console.log('Номера есть') 
//             console.log("Едем в отпуск") 
//         } else { 
//             console.log('Номеров нет') 
//             console.log('Отпуск отменяется') 
//         } 
//     }, 1000) 
// } 
// checkRooms(); 
 
// function checkRooms2(success, failed) { 
//     setTimeout(function(){ 
//         console.log("Проверяем.....") 
//         const availableRooms = true; // запрос с сервера 
 
//         if (availableRooms) { 
//             let message = 'Номера есть!'; 
//             success(message) 
//         } else { 
//             let message = 'Номеров нет!'; 
//             failed(message) 
//         } 
//     }, 1000) 
// } 
 
// // success и failed - это callback функции 
// function checkTickets (message, success, failed) { 
//     setTimeout(function(){ 
//         console.log('checkTickets') 
//         console.log('otvet na prediduschem shage', message) 
//         const availableTockets = true; 
 
//         if (availableTockets) { 
//             let message = 'Bileti есть!'; 
//             success(message) 
//         } else { 
//             let message = 'Biletov нет!'; 
//             failed(message) 
//         } 
//     }, 500) 
// } 
 
// function cancelVacation(message){ 
//     console.log('cancelVacation') 
//     console.log('Ответ на предыдущем шаге', message) 
//     console.log('OTPUSK OTMENYAETSYA') 
// } 
 
// function submitVacation(message){ 
//     console.log('submitVacation') 
//     console.log('Ответ на предыдущем шаге', message) 
//     console.log('Едем в отпуск!') 
// } 
 
// //callback hell разрастается, код начинает уезжать вправо 
// checkRooms2( 
//     function(messageFromCheckRooms2){ 
//         checkTickets(messageFromCheckRooms2,  
//                 function(messageFromCheckTickets){ 
//                     submitVacation(messageFromCheckTickets) 
//                 },  
//                 function(messageFromCheckTickets){ 
//                     cancelVacation(messageFromCheckTickets) 
//                 }) 
// }, function(messageFromCheckRooms2){ 
//     cancelVacation(messageFromCheckRooms2) 
// }) 
 
// /* можно записать короче, но проблему адового чтения кода это не решит
// checkRooms2( 
//     function(messageFromCheckRooms2){ 
//         checkTickets( 
//                     messageFromCheckRooms2,  
//                     submitVacation, 
//                     cancelVacation) 
// }, 
//     cancelVacation) */


// // ПРОМИСЫ -
// /* ОБЕЩАНИЕ, ЧТО КАКАЯ-ТО Ф-Я ВЫПОЛНИТСЯ, 
// А ПОСЛЕ ЕЁ ПЫПОЛНЕНИЯ ЗАПУСТИТСЯ КАКАЯ-ТО ДРУГАЯ Ф-Я, 
// В ЗАВИСИМОСТИ ОТ РЕЗУЛЬТАТА ВЫПОЛНЕНИЯ ПЕРВОЙ */

// // CTRL + \   - открывает сразу два экрана редактора файла, в котором выполнена команда

// // СОЗДАНИЕ ПРОМИСА

// /* resolve и reject - callback ф-ии, которые будут выполнены 
//                     после успешного/безуспешного вып-ния промиса 
//     resolve - разрешить
//     reject  - отклонить*/
// const myPromise = new Promise(function(resolve, reject){
//     console.log('Promise created')

//     setTimeout(function(){      // симулируем запрос на сервер
//         const response = true;  // ответ от сервера

//         if (response){
//             let msg = 'success'
//             resolve(msg)
//         } else {
//             let msg = 'failed'
//             reject(msg)
//         }
//     }, 4000)

// });

// // плюс promis-a в том, что он ЛЕГКО ПОТРЕБЛЯЕТСЯ (ЧИТАЕТСЯ, ПИШЕТСЯ)
// myPromise.then(function(msg){  // response
//     console.log('.then')
//     console.log(msg)
// }).catch(function(msg){        // reject
//     console.log('.catch')
//     console.log(msg)
// })

// /* ещё одна возможная форма записи

// Так как и метод then, и метод Promise.prototype.catch() возвращают Promise, 
// их можно вызвать цепочкой — эта операция называется соединение.

// const myPromise = new Promise(function(resolve, reject){
//     console.log('Promise created')

//     setTimeout(function(){      // симулируем запрос на сервер
//         const response = true;  // ответ от сервера

//         if (response){
//             let msg = 'success'
//             resolve(msg)
//         } else {
//             let msg = 'failed'
//             reject(msg)
//         }
//     }, 4000)

// }).then(function(msg){  // response
//     console.log('.then')
//     console.log(msg)
// }).catch(function(msg){        // reject
//     console.log('.catch')
//     console.log(msg)
// })
//  */

// // .then может повторяться сколько угодно раз
// myPromise.then(function(msg){  // response
//     console.log('.then 1')
//     console.log(msg)
//     return 'Data from then 1'
// }).then(function(data){        // response
//     console.log('.then 2')
//     console.log(data)          // распечатка данных, полученных из .then 1
// }).catch(function(msg){        // reject
//     console.log('.catch')
//     console.log(msg)
// })

// // .then не последовательны, выполняется тот, который быстрее выполнится
// myPromise.then(function(msg){   // Если значение не функция, то оно автоматически заменяется на
//                                 // "Identity" (англ. тождество) функцию (возвращает полученный аргумент)
//     setTimeout(() => {
//         console.log('.then 1')  // выполнится вторым
//         console.log(msg)
//     }, 1000)

// }).then(function(){  
//     setTimeout(() => {
//         console.log('.then 2')  // выполнится первым
//         console.log()
//     }, 500)

// }).catch(function(msg){        // reject
//     console.log('.catch')
//     console.log(msg)
// })

// // чтобы .then-ы пыполнялись друг после друга, каждый .then должен возвращать Promise
// myPromise.then(function(msg){   
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {              
//             console.log('.then 1')      // выполнится первым
//             console.log(msg)
//             resolve(msg)                // запуск слебующего .then (2)
//         }, 1000)
//     })

// }).then(function(data){  
//     setTimeout(() => {                  // выполнится вторым
//         console.log('.then 2')                          
//         console.log(data.split("").reverse().join(""))
//         // split - разбивает строку на массив символов; (eng. расколоть, расщепление)
//         // reverse - переворачивает массив;
//         // join - собирает строку из массива (eng. присоединиться).
//     }, 500)

// }).catch(function(msg){         // reject
//     console.log('.catch')
//     console.log(msg)
// })

// // .then-ы выполняются СИНХРОННО, если только они не возвращают новые Promise-ы
// myPromise.then(function(msg){   
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {              // симуляция запроса на сервер
//             console.log('.then 1')      // выполнится первым
//             console.log(msg)

//             const response = true;
            
//             if (response) {
//                 resolve('Data-resolve from then 1')     // передаётся строчка в следующий .then 
//             } else {
//                 reject('Data-reject from then 1')       // запустит .catch
//             }
//         }, 1000)
//     })

// }).then(function(data){  
//     setTimeout(() => {                  // выполнится вторым
//         console.log('.then 2')                          
//         console.log(data.split("").reverse().join(""))
//         // split - разбивает строку на массив символов; (eng. расколоть, расщепление)
//         // reverse - переворачивает массив;
//         // join - собирает строку из массива (eng. присоединиться).
//     }, 500)

// }).catch(function(msg){         // reject
//     console.log('.catch')
//     console.log(msg)
// }) 


// // ЦЕПОЧКА ПРОМИСОВ (ПРИМЕР С ОТПУСКОМ)
// const checkRooms = new Promise(function(resolve, reject){
//     setTimeout(function(){                       // эмулируем запрос на сервер
//         console.log('Proveryaem nomera v otele...')
//         const availableRooms = true;

//         if (availableRooms){
//             resolve('Nomera est`')
        
//         } else {
//             reject('Nomerov net')
//         }

//     }, 1500)
// })

// // checkRooms МОЖНО ОФОРМИТЬ КАК ФУНКЦИЮ (а не константу), тогда 
// // в цепочке она будет выглядеть checkRooms().then(success).catch(failed)


// // добавляем ещё одно асинхронное действие (промеряем билеты)
// // мы не можем просто добавить асинхронное действие в .then, 
// // если .then не возвращает promise
// checkRooms.then(function(data1FromPromise){ // после успешного выполнения промиса нужно выполнить... (ф-я calllback)
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log('then 1 with data from promise about hotel --- ', data1FromPromise)
//             console.log('proveryaem bileti!')
//             const availableTickets = true;

//             if (availableTickets) {
//                 let message = 'Bileti est'
//                 resolve(message)            // переход в следующий .then
//             } else {
//                 let message = 'Net biletov'
//                 reject(message)             // переход в .catch
//             }
//         })

//     })
// }).then((data2FromPromise) => {
//     console.log('then 2 with data from promise about tickets --- ', data2FromPromise)
//     console.log('edem v otpusk!')
// }).catch(function(data3FromPromise){    // в случае ошибки в промисе
//     console.log('catch with data from promise --- ', data3FromPromise)
//     console.log('NE edem v otpusk')
// }
// )

// // --------- ОБОРАЧИВАЕМ ЦЕПОЧКУ ПРОМИСОВ В ОТДЕЛЬНЫЕ Ф-ИИ ---------
// // чтобы промисы выглядили ещё аккуратнее на фоне callback hell
// // можно обернуть код промиса, then-а и catch-а в отдельные ф-ии



// checkRooms.then(checkTickets).then(success).catch(failed) // ПОЧЕМУ МЫ НЕ ПЕРЕДАЁМ СЮДА ПАРАМЕТРЫ??? ВЫЛЕЗАЕТ ОШИБКА



// function checkTickets(dataFromPromise){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log('then 1 with data from promise about hotel --- ', dataFromPromise)
//             console.log('proveryaem bileti!')
//             const availableTickets = true;

//             if (availableTickets) {
//                 let message = 'Bileti est'
//                 resolve(message)            // переход в следующий .then
//             } else {
//                 let message = 'Net biletov'
//                 reject(message)             // переход в .catch
//             }
//         })

//     })
// }

// function success(dataFromPromise) {
//     console.log('OTDELNAYA FUNCTION success, information abbout tickets --- ', dataFromPromise)
//     console.log('EDEEEEEM v otpusk!')
// }

// function failed(dataFromPromise) {
//     console.log('OTDELNAYA FUNCTION failed with data from promise --- ', dataFromPromise)
//     console.log('NE edem v otpusk')
// }
// // изначальный код, который модифицируем
// // checkRooms.then(function(dataFromPromise1){ // после успешного выполнения промиса нужно выполнить...
// //     console.log('then 1 with data from promise --- ', dataFromPromise1)
// //     console.log('edem v otpusk UHUUU!')
// // }).catch(function(dataFromPromise2){    // в случае ошибки в промисе
// //     console.log('catch with data from promise --- ', dataFromPromise2)
// //     console.log('NE edem v otpusk')
// // }
// // )


// // АСИНХРОННЫЕ ФУНКЦИИ (Async function). ПОТРЕБЛЕНИЕ (использование и прочтение) ПРОМИСА
// // асинхронные функции делают потребление промисов ещё более удобным
// // str.trim() очищает строку от пробелов

// function promiseFunction(){     
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             res = false;
//             if (res) {
//                 resolve('DONE!')
//             } else {
//                 reject('Fatal!')
//             }
//         }, 500)
//     })
// }

// // создание АСИНХРОННОЙ Ф-ИИ
// async function startPromise() {
//     try{
//         const result = await promiseFunction()  // await ждёт выполнения промиса (Где ещё может использоваться await???)
//         console.log(result)                     // resolve
//     } catch (error) {
//         console.log(error)                      // reject
//         // ПОЧЕМУ ПЕРЕДАЁТСЯ ТЕКСТ ИЗ reject, а не текст самой ошибки???
//     }
// }

// startPromise() // if res = true, we see in console --- 'DONE!'

// ------ НЕСКОЛЬКО АСИНХРОННЫХ ОПЕРАЦИЙ. СЕРИЯ ПРОМИСОВ. ------
// function checkRooms() {
//     return new Promise( function (resolve, reject) {
//         setTimeout( function () {
//                 console.log('+ Проверяем Номера В Отеле +');
//                 // тут должен быть код, отправляющий запрос в отель
//                 let availableRooms = true;

//                 if (availableRooms){
//                     resolve('Номера Есть');
//                 } else {
//                     reject('Нет Номеров');
//                 }
//         }, 1500);
//     }
//     );
// }

// // почему в MDN Web Docs примеры с var (setTimeout)???
// function checkTickets(data) {
//     return new Promise( function (resolve, reject) {
//         setTimeout( () => {
//             console.log('checkTickets');
//             console.log('Answer from checkRooms -- ', data);
//             console.log('+ Проверяем Авиабилеты +');
//             // тут должен быть код, отправляющий запрос в авиакомпанию
//             const availableTickets = true;

//             if (availableTickets) {
//                 let message = "Bileti Est";
//                 resolve(message);
//             } else {
//                 let message = "Net Biletov haha";
//                 reject(message);
//             }
//         }, 1000)
//     }
//     )
// }

// function submitVacation(dataFromPromise) {
//     console.log('submitVacation, information abbout tickets --- ', dataFromPromise)
//     console.log('EDEEEEEM v otpusk)))))))')
// }

// function cancelVacation(dataFromPromise) {
//     console.log('cancelVacation failed with data from promise --- ', dataFromPromise)
//     console.log('NE edem v otpusk(((((((')
// }

// // КОГДА МЫ ПОТРЕБЛЯЕМ ПРОМИСЫ ЧЕРЕЗ await ОНИ ВЫПОЛНЯЮТСЯ СТРОГО ПО ЦЕПОЧКЕ 
// async function checkVacation() {
//     try {
//         const roomsResult = await checkRooms(); // что будет, если не написать await
//         const ticketsResult = await checkTickets(roomsResult);
// // checkRooms и checkTickets даже не запускаются блееееее
// // результат в консоли: cancelVacation failed with data from promise ---  undefined
//         submitVacation(ticketsResult)

//     } catch (error) {
//         cancelVacation(ticketsResult)
//     }
// }

// checkVacation()


// хреновый вариант без try catch
// async function checkVacation() {

//         const roomsResult = await checkRooms(); // что будет, если не написать await
//         const ticketsResult = await checkTickets(roomsResult);

// // похоже, что checkRooms и checkTickets даже не запускаются бле

//         if (ticketsResult){
//             submitVacation(ticketsResult)
//         } else {
//             cancelVacation(ticketsResult)
//         }

// }

// ПРИМЕР fetch С ПРОМИСАМИ, ПОЛУЧЕНИЕ ДАННЫХ ПО API (fetch API)
// https://www.cbr-xml-daily.ru/

// fetch('https://www.cbr-xml-daily.ru/daily_json.js') 
// // потребление fetch через цепочку then
// // получение данных с сервера, возврашает promise (потому что запрос асинхронный)
//     .then(function (data) {
//         // json-file response
//         return data.json
//         // data.text - если получаем текстовый response 
//     }).then(function (data) {
//         console.log(data)
//     }).catch(() => {
//         console.log('contact the administrator')
//     })

// function renderRates(data) {
//     // .toFixed(2); оставляет 2 знака после запятой
//     const usdRate = data.Valute.USD.Value.toFixed(2); // число, USD тариф
//     const eurRate = data.Valute.EUR.Value.toFixed(2); // число, EUR тариф

//     const usdElement = document.querySelector('#usd');
//     const eurElement = document.querySelector('#eur');

//     usdElement.innerText = usdRate;
//     eurElement.innerText = eurRate;
// }

// // АСИНХРОННАЯ ФУНКЦИЯ ВСЕГДА ВОЗВРАЩАЕТ PROMISE
// async function getCurrencies () {   // получить валюты
//     // 1. Получить данные с сервера
//     const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
//     const response = await fetch(url);  // json-file
//     const data = await response.json(); // js-объект

//     console.log(data.Valute.USD.Value); // этот путь можно найти в полученном с сервера файле
//     console.log(data.Valute.EUR.Value); // эти значения чувствительны к регистру


//     // 2. Отобразить данные на странице
//     renderRates(data);
//     // return data; // вернёт PROMISE
// }

// getCurrencies();

// function toCamelCase(str){
//     let index = 0;
//     let arr = str.split("");
    
//     if (str.includes('-')) {
//         while (index > -1) {
//             index = arr.indexOf('-', index);
//             console.log('index = ', index)
//             console.log('str[index] = ', str[index])

//             arr[index] = '';
//             arr[index+1] = arr[index+1].toUpperCase();
//             index = arr.indexOf('-', index);
//         } 
//     }

//     if (str.includes('_')) {
//         while (index > -1) {
//             index = arr.indexOf('_', index);
//             console.log('index = ', index)
//             console.log('str[index] = ', str[index])

//             arr[index] = '';
//             arr[index+1] = arr[index+1].toUpperCase();
//             index = arr.indexOf('_', index);
//         } 
//     }

//     console.log(arr.join(''))

//     return arr.join('')
// }

toCamelCase('The_Stealth_Warrior')

function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c, v) => { console.log(c); console.log(_); console.log(v); c.toUpperCase()});
  }

// Подробное объяснение:
// \w - любая цифра, буква или знак подчеркивания.
// \s - это пробел.
// [^\w\s] - это не цифра, буква, пробел или символ подчеркивания.
// [^\w\s]|_ - это то же самое, что и # 3, за исключением того, что подчеркивания добавлены обратно.

// НАЙТИ В МАССИВЕ ЧИСЛО, КОТОРОЕ ПОВТОРЯЕТСЯ НЕЧЁТНОЕ КОЛИЧЕСТВО РАЗ
A = [1, 2, -9, -9, 2, 33, 33, 2, 33, 2, 1, 33, 33]

function findOdd(A) {
    return A.reduce(function(c,v){return c^v;},0);
  }
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
console.log(A.reduce(function(c,v){return c^v;},0))
console.log(A.reduce((a, b) => a ^ b))
// ^ выполняет исключительную ИЛИ (XOR), например
// 110 XOR 011, дает 101

// 0 ^ 0 => 0
// 0 ^ 1 => 1
// 1 ^ 0 => 1
// 1 ^ 1 => 0

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }

// arr.sort()  - сортирует массив
// arr.find    - возвращает значение первого элемента в предоставленном массиве, 
//               который удовлетворяет предоставленной функции тестирования. 
//               Если никакие значения не удовлетворяют функции тестирования, возвращается значение undefined.
// arr.filter  - создает новый массив со всеми элементами, 
//               прошедшими проверку, реализованную предоставленной функцией.

// function high(x){
//     let arr = x.split(" ");
//     let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
//     const summArr = arr.map((element) => element.split("").reduce((previousValue, currentValue) => previousValue + (abc.indexOf(currentValue) + 1), 0 ));

//     return arr[summArr.indexOf(Math.max.apply(null, summArr))];
// }

// high('man i need a taxi up to ubud')

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b) => {a + b.charCodeAt(0)-96}, 0));

//     return s.split(' ')[as.indexOf(Math.max(...as))];
// }

// function solution(number){
//     let digits = String(+number).split(""),
//         key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//                    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//                    "","I","II","III","IV","V","VI","VII","VIII","IX"],
//         roman = "",
//         i = 3;

//         console.log('+number ', +number)

//         while (i--)
//             roman = (key[+digits.pop() + (i * 10)] || "") + roman;

//         console.log('+digits.pop() ', +digits.pop())
//         console.log('key[+digits.pop() + (i * 10)] ', key[+digits.pop() + (1 * 10)])    
//         console.log('Array(+digits.join("") + 1).join("M") + roman; ', Array(+digits.join("") + 1).join("M") + roman)
        
//         return Array(+digits.join("") + 1).join("M") + roman;
// }

// function solution(number) {
//   let result   = '',
//       decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//       roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

//   decimals.map(function (value, index) {
//     while (number >= value) {
//       result += roman[index];
//       number -= value;
//     }
//   });
  
//   console.log('result', result)
//   return result;
// }

// solution(2000)


// ПРОСТОЕ ЧИСЛО, ПРОХОДИТ ПРОВЕРКИ НО ПРОИСХОДИТ ОШИБКА ВРЕМЕНИ
// Нераци ональное решение
// function isPrime(num) {
//     let result = false;
    
//     if (!Number.isInteger(Math.sqrt(num))) { 
//       if (!Number.isInteger(num/2)) {
//         for (let i = 2; i < num; i++) {

//             if (!Number.isInteger(Math.sqrt(i))) {
//               if (i!=num){
//                 result = !(num % i === 0);
//                 if (!result) { break; }
//               }
//             }
          
//         }
//       }
//     }
//     return (num === 2) ? true : result;
//   }
//   isPrime(3)
  
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false;
  return num >= 2;
}

  // Количество суммы цифр, пока не получится одна цифра
// Моё решение
// function persistence(num) {
// let summ;
// let i = 0;
// let result = 0;

// do {
// summ = 1;
// while (num != 0) {
// summ = summ*(num % 10);
// num = (num/10) | 0;
// i++;
// }
// result ++;

// if (summ > 9) {
// num = summ;
// }

// if ((i === 1)&&(num === 0)) {
// console.log('my sdes')
// console.log(0)
// return 0;
// }
// } while (summ > 9)

// console.log(result)
// return result;
// }

persistence(4)

function persistence(num) {
let times = 0;

num = num.toString();

while (num.length > 1) {
times++;
num = num.split('').map(Number).reduce((a, b) => a * b).toString();
}

return times;
}


// JSON.stringify([1,{a:1},2]) == JSON.stringify([1,{a:1},2])
// сравнение массивов

//ПРОВЕРКА НА АНОГРАММЫ - САМ СДЕЛАЛЬ))
function anagrams(word, words) {
return words.filter(anagram => word.split('').sort().join('') === anagram.split('').sort().join(''));
}


// ПОВЕРКА НА ПРАВИЛЬНЫЙ ПОРЯДОК СКОБОК
function validBraces(braces){
let i;

do {
i = 0
if (braces.indexOf('{}') != -1){
braces = braces.replace('{}', "");
i++;
}
if (braces.indexOf('()') != -1){
braces = braces.replace('()', "");
i++
}
if (braces.indexOf('[]') != -1){
braces = braces.replace('[]', "");
i++
}
} while (i != 0);

return !Boolean(braces);
}

// ВАРИАНТЫ ПОЛУЧШЕ
// function validBraces(braces){
// while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
// braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
// }
// return braces.length == 0;
// }

// function validBraces(braces){
// while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
// return !braces.length;
// }

// ВЫСТРАИВАНИЕ СТРОКИ ИЗ МАССИВА ОБЪЕКТОВ (Lisa, Bart)
function list(names){
    switch (names.length){
        case (1):
          return names[0].name;
        case (0):
          return '';
        default:
          return names.map((element, index, array) => { 
             switch (index){
                case (array.length - 2):
                  return element.name + ' & ';
                case (array.length - 1):
                  return names[array.length - 1].name;
                default:
                  return element.name + ', ' }
          }).join('');
    }
  }

// ПОРЯДОК СЛОВ ПО ЦИФРАМ В НИХ
//   function order(words){
//     let result = []
//     let index;

//     words.split(' ').forEach((word) => {
//       word.split('').forEach((symbol) => { if ( !isNaN(+symbol) ){index = +symbol;} })  // !isNaN(Number(symbol)) ){index = Number(symbol);}
//       result[index - 1] = word;
//     })
  
//     return result.join(' ');
//   }

//   order("4of Fo1r pe6ople g3ood th5e the2")

  // ИЗУЧИТЬ
  function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }

  function knight(start, finish) {
    let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let chessBoard = new Array(8).map(() => {

      console.log('z p[kgerbmeriob')

      let str = [];

      for (let i = 0; i < 8; i++){
        str.push(String( alfabet[i]+(i+1) ));
      }
      return str;
    }
      // alfabet.map((char) => {
      //   String(char+(index+1)); 
        
      //   console.log(char+(index+1))
      // })
    )


    console.log(chessBoard)
  }

  knight('a1', 'f3')