---
sidebar_position: 2
---

# Complexity and Big O

Complexity is a way to measure the performance of an algorithm in terms of the amount of resources (such as time or space) it consumes. There are two main types of complexities: time complexity and space complexity. Time complexity measures the amount of time an algorithm takes to execute as a function of the input size, while space complexity measures the amount of memory an algorithm uses as a function of the input size.

Big O notation is a way to express the upper bound of an algorithm's time complexity. It provides an asymptotic upper bound, meaning that it describes how the algorithm's running time grows as the input size increases, rather than giving the exact running time for a specific input size.

## Time Complexity

The time complexity of an algorithm is a measure of the amount of time the algorithm takes to run, as a function of the size of the input. Time complexity is typically expressed using **big O notation**, which describes the upper bound of the running time.

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

The time complexity of this function is O(n), where n is the size of the array. This is because the worst-case time complexity occurs when the target is not in the array and we have to iterate through all n elements to confirm its absence.

## Space Complexity

The space complexity of an algorithm is a measure of the amount of memory the algorithm uses, as a function of the size of the input. Like time complexity, space complexity is also typically expressed using big O notation.

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

## Javascript Examples

1. Linear Search

-   Time Complexity - O(n)
-   Space Complexity - O(1)

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

2. Binary Search

-   Time Complexity - O(log n)
-   Space Complexity - O(1)

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

3. BubbleSort

-   Time Complexity - O(n^2)
-   Space Complexity - O(1)

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

4. Quicksort

-   Time Complexity - O(n log n) (average case) O(n^2) (worst case),
-   Space Complexity - O(log n)

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

5. Depth First Search (DFS)

-   Time Complexity: O(V+E)
-   Space Complexity: O(V)

```js
function depthFirstSearch(graph, vertex) {
	let visited = new Set();
	dfsHelper(vertex, visited, graph);
}

function dfsHelper(vertex, visited, graph) {
	if (visited.has(vertex)) {
		return;
	}
	visited.add(vertex);
	console.log(vertex);
	let neighbors = graph.getNeighbors(vertex);
	for (let neighbor of neighbors) {
		dfsHelper(neighbor, visited, graph);
	}
}
```

6. Breadth First Search (BFS)

-   Time Complexity: O(V+E)
-   Space Complexity: O(V)

```js
function breadthFirstSearch(graph, vertex) {
	let queue = [vertex];
	let visited = new Set();
	while (queue.length > 0) {
		let current = queue.shift();
		if (visited.has(current)) {
			continue;
		}
		visited.add(current);
		console.log(current);
		let neighbors = graph.getNeighbors(current);
		for (let neighbor of neighbors) {
			queue.push(neighbor);
		}
	}
}
```

7. Merge Sort

-   Time Complexity: O(n log n)
-   Space Complexity: O(n)

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
