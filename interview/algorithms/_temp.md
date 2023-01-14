---
sidebar_position: 3
id: tasks-index
title: Tasks
tags:
    - Demo
---

# Javascript Algorithmic Tasks

import BrowserWindow from '@site/src/components/BrowserWindow';

```jsx live noInline
render(<>Algo</>);
```

### How to execute string as function

```js
const scriptStr = "console.log('hey');";

eval(scriptStr);
new Function(scriptStr)();
```

### What is the result?

```mdx-code-block
<BrowserWindow>
```

```js
var funcs = [];
for (var i = 0; i < 3; i++) {
	funcs[i] = function () {
		console.log('My value: ' + i);
	};
}

for (const f of funcs) {
	f();
}
```

```mdx-code-block
</BrowserWindow>
```

### And classical solution with closure:

```js
var funcs = [];
function createfunc(i) {
	return function () {
		console.log('My value: ' + i);
	};
}

for (var i = 0; i < 3; i++) {
	funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
	// and now let's run each one to see
	funcs[j]();
}
```

### Inheritance instanceof

```js
class Person {}

class Chief extends Person {}

class Programmer extends Person {}

const programmer = new Programmer();

console.log(programmer instanceof Person);
console.log(programmer instanceof Programmer);
console.log(programmer instanceof Object);
console.log(programmer instanceof Chief);
```

### How to create a private variable?

```js
function func() {
	const priv = 'secret code';
	return function () {
		return priv;
	};
}
var getPriv = func();
```

### Counter function as below

```js
const counter = Counter();
counter.inc();
counter.dec();

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

### ts: get Values of object type

## Example Tasks

### Amazon interview

```
Question: You are given a dictionary containing thousands of words and a sentence with no spaces.
Write an algorithm to reconstruct the sentence by inserting spaces in the appropriate positions.

Example:

["the", "sky", "is", "blue", "the", "grass", "is", "green"]

input: "theskyisblue" output: "the sky is blue"

input: "thegrassisgreen" output: "the grass is green"

```

```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
	var dp = Array(s.length);
	var map = {};
	var res = [];

	for (var i = 0; i < wordDict.length; i++) {
		map[wordDict[i]] = true;
	}

	return find(s, map, dp, 0);
};

const find = function (s, map, dp, index) {
	if (dp[index]) return dp[index];

	var str = '';
	var tmp = null;
	var len = s.length;

	dp[index] = [];

	for (var i = index; i < len; i++) {
		str = s.substring(index, i + 1);
		if (!map[str]) continue;
		if (i === len - 1) {
			dp[index].push(str);
			break;
		}
		tmp = find(s, map, dp, i + 1);
		for (var j = 0; j < tmp.length; j++) {
			dp[index].push(str + ' ' + tmp[j]);
		}
	}

	return dp[index];
};
```

///////////

```javascript
/**
* Написать функцию sostavChisla(massivChisel: number[], chislo: number), 
  которая бы находила все возможные комбинации чисел из massivChisel, 
  сумма которых равна chislo. При этом:
  1) massivChisel содержит, только уникальные положительные числа (> 0)
  2) в комбинации не должно быть повторений чисел
  3) все комбинации должны быть уникальными
  
  Для проверки работоспособности функции запустить runTests()
  
  @param massivChisel: number[]
  @param chislo: number[]
  @return Array<Array<number>>
*/
function sostavChisla(massivChisel, chislo) {
	var result = [];
	var temp = [];
	var n = massivChisel.length;

	function search(i, sum) {
		if (i === n) {
			if (sum === chislo) {
				result.push([...temp]);
			}
			return;
		}

		temp.push(massivChisel[i]);
		search(i + 1, sum + massivChisel[i]);
		temp.pop();

		search(i + 1, sum);
	}

	search(0, 0);

	return result;
}

function sostavChisla1(massivChisel, chislo) {
	const result = [];
	const numbers = [...new Set(massivChisel)].sort();

	findNumberAndSave(result, [], 0, numbers, chislo);

	return result;
}

function findNumberAndSave(result, combination, index, rest, target) {
	if (target < 0) {
		return;
	}

	if (target === 0) {
		return result.push(combination);
	}

	for (var i = index; i < rest.length; i++) {
		if (rest[i] > target) {
			break;
		}

		if (i > index && rest[i] === rest[i - 1]) {
			continue;
		}

		findNumberAndSave(result, [...combination, rest[i]], i + 1, rest, target - rest[i]);
	}
}

function compareNumericArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	arr1 = [...arr1].sort();
	arr2 = [...arr2].sort();

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

function compareArraysOfNumericArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let el1 of arr1) {
		if (arr2.findIndex((el2) => compareNumericArrays(el1, el2)) < 0) {
			return false;
		}
	}

	return true;
}

runTests();

function runTests() {
	const tests = [
		{
			chislo: 5,
			massivChisel: [8, 2, 3, 4, 6, 7, 1],
			result: [
				[2, 3],
				[4, 1],
			],
		},
		{
			chislo: 99,
			massivChisel: [8, 2, 3, 4, 6, 7, 1],
			result: [],
		},
		{
			chislo: 8,
			massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
			result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]],
		},
		{
			chislo: 8,
			massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
			result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]],
		},
		{
			chislo: 15,
			massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
			result: [
				[1, 2, 3, 4, 5],
				[2, 3, 4, 6],
				[1, 3, 5, 6],
				[4, 5, 6],
				[1, 3, 4, 7],
				[1, 2, 5, 7],
				[3, 5, 7],
				[2, 6, 7],
				[1, 2, 4, 8],
				[3, 4, 8],
				[2, 5, 8],
				[1, 6, 8],
				[7, 8],
			],
		},
	];

	let errors = 0;
	for (const test of tests) {
		let result;
		try {
			result = sostavChisla(test.massivChisel, test.chislo);

			if (!compareArraysOfNumericArrays(result, test.result)) {
				errors++;
				console.log('--------------------------------------------');
				console.log('failed for test', test, 'Got result', result);
			}
		} catch (e) {
			errors++;
			console.log('failed for', test, 'exception', e.message);
		}
	}

	if (errors === 0) {
		console.log('checkStringForBracects test successfuly completed');
	} else {
		console.log(`checkStringForBracects test failed with ${errors} errors`);
	}
}
```
