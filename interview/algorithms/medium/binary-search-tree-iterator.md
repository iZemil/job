---
tags: [Medium, Stack, Tree, Design]
---

# Binary Search Tree Iterator

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling `next()` will return the next smallest number in the BST.

_Note:_ `next()` and `hasNext()` should run in average O(1) time and uses O(_h_) memory, where _h_ is the height of the tree.

**Credits:**Special thanks to @ts for adding this problem and creating all test cases.

<details>
<summary>Solution</summary>

```javascript
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function (root) {
	this.stack = [];
	this.pushAll(root);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
	return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
	var node = this.stack.pop();
	this.pushAll(node.right);
	return node.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

BSTIterator.prototype.pushAll = function (node) {
	while (node) {
		this.stack.push(node);
		node = node.left;
	}
};
```

</details>
