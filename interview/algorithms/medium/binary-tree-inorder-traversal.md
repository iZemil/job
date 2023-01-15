---
tags: [Medium, 'Hash Table', Stack, Tree]
title: Binary Tree Inorder Traversal
---

Given a binary tree, return the **inorder** traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?

<details>
<summary>Solution</summary>

**Complexity:**

-   Time complexity: O(n)
-   Space complexity: O(n)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function inorderTraversal(root) {
	let res = [];
	helper(root, res);
	return res;
}

function helper(root, res) {
	if (!root) return;
	if (root.left) helper(root.left, res);
	res.push(root.val);
	if (root.right) helper(root.right, res);
}
```

</details>

<details>
<summary>Solution</summary>

**Complexity:**

-   Time complexity: O(n)
-   Space complexity: O(n)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
	let stack = [];
	let now = root;
	let res = [];

	while (now || stack.length) {
		while (now) {
			stack.push(now);
			now = now.left;
		}
		now = stack.pop();
		res.push(now.val);
		now = now.right;
	}

	return res;
}
```

</details>
