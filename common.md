## Junior level

### Базовые JS типы

-   undefined
-   null
-   boolean
-   string
-   number
-   bigint
-   symbol
-   object

### Привести один тип к другому

```javascript
// 1 => '1'
// '1' => 1
// some => false
// some => true
// some => Nan что такое Nan и какой тип имеет
```

### Для чего используется оператор "&&"?

### Для чего используется оператор "||" (Логическое или)?

### В чем разница между операторами "==" и "==="?

### Для чего используется оператор "!!" (Логическое и)?

### Что такое Map, Set и примеры использования

### Что такое колбек функция, привести примеры

### var, let, const

```javascript
var a = 2;
foo(); // works because `foo()` declaration is "hoisted"

function foo() {
	a = 3;
	console.log(a); // 3
	var a; // declaration is "hoisted" to the top of `foo()`
}
console.log(a); // 2
```

### Что такое методы и свойства

### Для чего используется ключевое слово «new»?

### Способы перебора массивов

### Условия в js

## Middle level

### Как создать приватную переменную в Javascript:

```javascript
function func() {
	const priv = 'secret code';
	return function () {
		return priv;
	};
}
var getPriv = func();
```

### Реализовать Counter через функцию

```javascript
const counter = Counter();
counter.inc();
counter.dec();
```

Ответ:

```javascript
function Counter() {
	let count = 0;

	return {
		inc() {
			return (count += 1);
		},
		dec() {
			return (count -= 1);
		},
	};
}
```

### Использование Promises

#### Какие состояния:

-   ожидание (pending): начальное состояние, не выполнено и не отклонено.
-   выполнено (fulfilled): операция завершена успешно.
-   отклонено (rejected): операция завершена с ошибкой.

#### Promise.all примеры использования

### Как обрабатывать ошибки с Promise

### Работа с контекстом:

```javascript
function fullName() {
	return 'Hello, this is ' + this.first + ' ' + this.last;
}
console.log(fullName()); // => Hello this is undefined undefined
```

Ответ

```javascript
// create a person object and pass its values to the fullName function
const person = { first: 'Foo', last: 'Bar' };
console.log(fullName.bind(person)()); // => Hello this is Foo Bar
```

### IIFE

Immediately Invoked Function Expressions (IIFEs) — это синтаксическая конструкция, позволяющая вызвать функцию сразу же в месте ее определения.

Для чего может применяться?

-   Шаблон "модуль" с помощью IIFE и замыканий:

```javascript
var counter = (function () {
	var i = 0;

	return {
		get: function () {
			return i;
		},
		set: function (val) {
			i = val;
		},
		increment: function () {
			return ++i;
		},
	};
})();

console.log(counter.get()); // 0
counter.set(3);
console.log(counter.increment()); // 4
```

### Arrow functions: Что такое, какие особенности?

-   Стрелочные функции не содержат собственный контекст this, а используют значение this окружающего контекста.
-   Стрелочные функции не имеют собственного объекта arguments, поэтому в теле стрелочных функций arguments будет ссылаться на переменную в окружающей области.
-   Стрелочные функции не могут быть использованы как конструктор и вызовут ошибку при использовании с new.
-   Ключевое слово yield не может быть использовано в теле стрелочной функции. Как следствие стрелочные функции не могут быть использованы как генераторы.

```javascript
'use strict';
var obj = {
	i: 10,
	b: () => console.log(this.i, this),
	c: function () {
		console.log(this.i, this);
	},
};
obj.b(); // prints undefined, Window {...} (или глобальный объект)
obj.c(); // prints 10, Object {...}
```

### Реализовать сортировку массива

```javascript
const arr = [0, 3, 2, 43, 57, 6, 23, 1, 554, 5, 45, 3, 7, 8];
```

## Senior level

### Что такое Proxy объект, привести пример использования

### Рассмотрим SOLID паттерн на практике. Какой принцип необходимо использовать в примере ниже:

```javascript
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
```

В данном случае это Принцип единой ответственности (Поведение класса направлено на обеспечение единой ответственности). Примерный ответ:

```javascript
class TodoList {
	constructor() {
		this.items = [];
	}
	addItem(text) {
		this.items.push(text);
	}
	removeItem(index) {
		this.items = items.splice(index, 1);
	}
	toString() {
		return this.items.toString();
	}
}

class DatabaseManager {
	saveToFile(data, filename) {
		fs.writeFileSync(filename, data.toString());
	}
	loadFromFile(filename) {
		// Some implementation
	}
}
```

### ПРИНЦИП ОТКРЫТОСТИ/ЗАКРЫТОСТИ(программные сущности (классы, модули, функции и т. п.) должны быть открыты для расширения, но закрыты для изменения)

```javascript
class Coder {
	constructor(fullName, language, hobby, education, workplace, position) {
		this.fullName = fullName;
		this.language = language;
		this.hobby = hobby;
		this.education = education;
		this.workplace = workplace;
		this.position = position;
	}
}

class CoderFilter {
	filterByName(coders, fullName) {
		return coders.filter((coder) => coder.fullName === fullName);
	}

	filterBySize(coders, language) {
		return coders.filter((coder) => coder.language === language);
	}

	filterByHobby(coders, hobby) {
		return coders.filter((coder) => coder.hobby === hobby);
	}
}
```

The problem with CoderFilter is that if we want to filter by any other new property we have to change CodeFilter's code. Let's solve this problem by creating a filterByProp function.

```javascript
const filterByProp = (array, propName, value) => array.filter((element) => element[propName] === value);
```

### Generators
