---
sidebar_position: 1
---

# Data Structures

A data structure is a specific way of organizing and storing data in a computer's memory, such that it can be accessed and modified efficiently. Examples of data structures include arrays, linked lists, stacks, queues, and trees.

**Arrays**

```js
let myArray = [1, 2, 3, 4, 5];
```

**Linked Lists**

```js
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
}
```

**Stacks**

```js
class Stack {
	constructor() {
		this.stack = [];
	}

	push(val) {
		this.stack.push(val);
	}
	pop() {
		return this.stack.pop();
	}
	peek() {
		return this.stack[this.stack.length - 1];
	}
}
```

**Queues**

```js
class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(val) {
		this.queue.push(val);
	}
	dequeue() {
		return this.queue.shift();
	}
	peek() {
		return this.queue[0];
	}
}
```

**Trees**

```js
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}
}
```
