---
sidebar_position: 2
---

# Complexity and Big O

Complexity is a way to measure the performance of an algorithm in terms of the amount of resources (such as time or space) it consumes. There are **two main types of complexities**: **_Time_** complexity and **_Space_** complexity.

## What is O(n)?

Big O notation is a way to express the upper bound of an algorithm's time complexity. It provides an asymptotic upper bound, meaning that it describes how the algorithm's running time grows as the input size increases, rather than giving the exact running time for a specific input size.

**When calculating the Big O Notation, two rules are used:**

**1. Constants are dropped.** We are only interested in the part of the formula that depends on the size of the input data. Simply put, it is the number n itself, its degrees, logarithms, factorials, and exponents, where the number is to the power of n.

:::info Examples

-   O(3n) = O(n)
-   O(10000 n^2) = O(n^2)
-   O(2n \* log n) = O(n \* log n)

:::

**2. If O has a sum, we are interested in the fastest growing summand.** This is called asymptotic complexity estimation.

:::info Examples

-   O(n^2 + n) = O(n^2)
-   O(n^3 + 100n \* log n) = O(n^3)
-   O(n! + 999) = O(n!)
-   O(1,1^n + n^100) = O(1,1^n)

:::

## Time Complexity

The time complexity of an algorithm is a measure of the amount of time the algorithm takes to run. Time complexity is typically expressed using **big O notation**.

```js
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}
```

The time complexity of this function is _O(n)_, where n is the size of the array. This is because the worst-case time complexity occurs when the target is not in the array and we have to iterate through all n elements to confirm its absence.

## Space Complexity

The space complexity of an algorithm is a measure of the amount of memory the algorithm uses. Also expressed using big O notation.

For example, consider the following function which takes a number and returns the nth Fibonacci number using recursion:

```js
function fibonacci(n) {
	if (n <= 1) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
```

The space complexity of this function is O(n) because each call to the fibonacci function creates a new function call on the call stack, and in the worst-case, we need to call the function n times in order to calculate the nth Fibonacci number.

## Speed Table

Here is a good <a href="https://www.bigocheatsheet.com/" target="_blank" rel="noindex nofollow">cheatsheet</a> on the complexity of algorithms.

Example below illustrates algorithm complexity and its performance characteristics depending on the number of operations:

| ops   | log(n) | n        | n\*log(n) | n^2    | n^3    | 2^n          | n!           | n^n          |
| ----- | ------ | -------- | --------- | ------ | ------ | ------------ | ------------ | ------------ |
| 10    | 3 ns   | 10 ns    | 33 ns     | 100 ns | 1 μs   | 1 μs         | 3 ms         | 10 s         |
| 100   | 6 ns   | 100 ns   | 664 ns    | 10 μs  | 1 ms   | 4\*10^16 yr  | 3\*10^141 yr | 3\*10^183 yr |
| 1000  | 10 ns  | 1000 ns  | 10 μs     | 1 ms   | 1 s    | 3\*10^243 yr | -            | -            |
| 10000 | 13 ns  | 10000 ns | 1 ms      | 0.1 s  | 16 min | -            | -            | -            |

> It took 1 nanosecond for one operation

## Code Examples

Try to define time/space complexities.

1. **Array Access**

```js
function getElement(arr, index) {
	return arr[index];
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(1)
-   Space Complexity: O(1)

</details>

2. **Linear Search**

```js
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(n)
-   Space Complexity: O(1)

</details>

3. **Binary Search**

```js
function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(log n)
-   Space Complexity: O(1)

</details>

4. **BubbleSort**

```js
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(n^2)
-   Space Complexity: O(1)

</details>

5. **Quicksort**

```js
function quickSort(arr, left, right) {
	let index;
	if (arr.length > 1) {
		index = partition(arr, left, right);
		if (left < index - 1) {
			quickSort(arr, left, index - 1);
		}
		if (index < right) {
			quickSort(arr, index, right);
		}
	}
	return arr;
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(n log n) (average case) and O(n^2) (worst case)
-   Space Complexity: O(log n)

</details>

6. **Merge Sort**

```js
function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let middle = Math.floor(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(n log n)
-   Space Complexity: O(n)

</details>

7. **Example code**

```js
function fn(int, n) {
	if (n <= 0) {
		return 1;
	}

	return 1 + fn(n - 1);
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(n)
-   Space Complexity: O(n)

</details>

7. **Example code**

```js
function fn(int1) {
	if (int1 <= 0) {
		return 1;
	}

	return 1 + fn(int1 - 5);
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(n)
-   Space Complexity: O(n)

</details>

7. **Example code**

```js
function fn(int1) {
	if (int1 <= 0) {
		return 1;
	}

	return 1 + fn(int1 / 5);
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(log(n))
-   Space Complexity: O(n)

</details>

7. **Example code**

```js
function fn(int1, int2, int3) {
	if (int1 <= 0) {
		console.log('1');
	} else {
		fn(int1 - 1, int2 + 1, int3);
		fn(int1 - 1, int2, int3 + 1);
	}
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(2^n)
-   Space Complexity: O(n)

</details>

7. **Example code**

```js
function fn(int1) {
	for (i = 0; i < int1; i += 2) {
		console.log(i);
	}

	if (int1 <= 0) {
		return 1;
	} else {
		return 1 + fn(int1 - 5);
	}
}
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time Complexity: O(n^2)
-   Space Complexity: O(n)

</details>
