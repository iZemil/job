---
tags: [Hard, Stack, Tree]
---

# Binary Tree Postorder Traversal

Given a binary tree, return the **postorder** traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
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
var postorderTraversal = function (root) {
	var res = [];
	helper(root, res);
	return res;
};

var helper = function (root, res) {
	if (!root) return;
	helper(root.left, res);
	helper(root.right, res);
	res.push(root.val);
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
var postorderTraversal = function (root) {
	if (!root) return [];
	var res = [];
	var stack = [];
	var node = root;
	while (node || stack.length) {
		if (node) {
			stack.push(node);
			res.unshift(node.val);
			node = node.right;
		} else {
			node = stack.pop();
			node = node.left;
		}
	}
	return res;
};
```

**Complexity:**

-   Time complexity: O(n).
-   Space complexity: O(n).

</details>
