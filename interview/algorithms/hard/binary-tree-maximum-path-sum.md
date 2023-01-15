---
tags: [Hard, Tree, 'Depth-first Search']
---

# Binary Tree Maximum Path Sum

Given a **non-empty** binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain **at least one node** and does not need to go through the root.

**Example 1:**

```
Input: [1,2,3]

       1
      / \
     2   3

Output: 6
```

**Example 2:**

```
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
```

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
 * @return {number}
 */
var maxPathSum = function (root) {
	var max = Number.MIN_SAFE_INTEGER;
	var maxSum = function (node) {
		if (!node) return 0;
		var left = Math.max(maxSum(node.left), 0);
		var right = Math.max(maxSum(node.right), 0);
		max = Math.max(left + right + node.val, max);
		return Math.max(left, right) + node.val;
	};
	maxSum(root);
	return max;
};
```

**Complexity:**

-   Time complexity: O(n).
-   Space complexity: O(n).

</details>
