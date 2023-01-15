---
tags: [Medium, Stack, Tree]
---

# Binary Tree Preorder Traversal

Given a binary tree, return the **preorder** traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?

<details>
<summary>Solution</summary>

</details> 1

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
var preorderTraversal = function (root) {
	var res = [];
	helper(root, res);
	return res;
};

var helper = function (root, res) {
	if (!root) return;
	res.push(root.val);
	helper(root.left, res);
	helper(root.right, res);
};
```

**Explain:**

nope.

**Complexity:**

-   Time complexity: O(n).
-   Space complexity: O(n).

<details>
<summary>Solution</summary>

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
var preorderTraversal = function (root) {
	if (!root) return [];
	var res = [];
	var queue = [root];
	var node = null;
	while (queue.length) {
		node = queue.pop();
		res.push(node.val);
		if (node.right) queue.push(node.right);
		if (node.left) queue.push(node.left);
	}
	return res;
};
```

**Complexity:**

-   Time complexity: O(n).
-   Space complexity: O(n).

</details>
