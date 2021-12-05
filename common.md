## Junior level

## Middle level

## Senior level

Общее программирование и JS
• Что такое колбек функция, привести пример
• Какие способы хранения информации есть на клиенте 1. Cookies 2. Web Storage API (localStorage, sessionStorage) 3. IndexDB 4. JS variables 5. DOM Node Storage (dataset property or setAttribute(), getAttribute(), eg: someElement.dataset.store = ‘some value’) 6. Cache API
• Реализовать Counter через функцию
const counter = Counter();
counter.inc();
counter.dec();
Ответ:
function Counter() {
let count = 0;

    return {
        inc() {
            return count += 1;
        },
        dec() {
            return count -= 1;
        }
    }

}
• Рассмотрим SOLID паттерн на практике
Какой принцип необходимо использовать в примере ниже:
class TodoList {
constructor() {
this.items = []
}
addItem(text) {
this.items.push(text)
}
removeItem(index) {
this.items = items.splice(index, 1)
}
toString() {
return this.items.toString()
}
save(filename) {
fs.writeFileSync(filename, this.toString())
}
load(filename) { // Some implementation }
}
В данном случае это Принцип единой ответственности (Поведение класса направлено на обеспечение единой ответственности). Примерный ответ:
class TodoList {
constructor() {
this.items = []
}
addItem(text) {
this.items.push(text)
}
removeItem(index) {
this.items = items.splice(index, 1)
}
toString() {
return this.items.toString()
}
}

class DatabaseManager {
saveToFile(data, filename) {
fs.writeFileSync(filename, data.toString())
}
loadFromFile(filename) {
// Some implementation
}
}
ПРИНЦИП ОТКРЫТОСТИ/ЗАКРЫТОСТИ(программные сущности (классы, модули, функции и т. п.) должны быть открыты для расширения, но закрыты для изменения)
class Coder {
constructor(fullName, language, hobby, education, workplace, position) {
this.fullName = fullName
this.language = language
this.hobby = hobby
this.education = education
this.workplace = workplace
this.position = position
}
}

class CoderFilter {
filterByName(coders, fullName) {
return coders.filter(coder => coder.fullName === fullName)
}

filterBySize(coders, language) {
return coders.filter(coder => coder.language === language)
}

filterByHobby(coders, hobby) {
return coders.filter(coder => coder.hobby === hobby)
}
}
The problem with CoderFilter is that if we want to filter by any other new property we have to change CodeFilter's code. Let's solve this problem by creating a filterByProp function.
const filterByProp = (array, propName, value) => array.filter(element => element[propName] === value)

    • Как создать приватную переменную в Javascript:

function func() {
var priv = "secret code";
return function() {
return priv;
}
}
var getPriv = func();
• Использование bind функции на практике, можно отправить кандидату следующий код:
function fullName() {
return "Hello, this is " + this.first + " " + this.last;
}
console.log(fullName()); // => Hello this is undefined undefined
Ответ
// create a person object and pass its values to the fullName function
const person = {first: "Foo", last: "Bar"};
console.log(fullName.bind(person)()); // => Hello this is Foo Bar
