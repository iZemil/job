---
sidebar_position: 99
---

# SOLID

https://coder-question.com/cq-blog/529020 and https://duncan-mcardle.medium.com/solid-principle-2-open-closed-javascript-fc49b577a377#:~:text=The%20open%2Dclosed%20principle%20says,the%20need%20to%20modify%20it.

CHECK this: https://medium.com/webbdev/solid-4ffc018077da

#### What is using below?

```js
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

```js
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

---

#### ПРИНЦИП ОТКРЫТОСТИ/ЗАКРЫТОСТИ(программные сущности (классы, модули, функции и т. п.) должны быть открыты для расширения, но закрыты для изменения)

```js
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

```js
const filterByProp = (array, propName, value) => array.filter((element) => element[propName] === value);
```
