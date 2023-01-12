---
tags: [Medium, Tree, 'Breadth-first Search']
---

# Binary Tree Level Order Traversal

Given a binary tree, return the _level order_ traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its level order traversal as:

```
[
  [3],
  [9,20],
  [15,7]
]
```

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	return helper([[root]], 0);
};

var helper = function (res, level) {
	var now = res[level];
	var next = [];

	for (var i = 0; i < now.length; i++) {
		if (now[i].left) next.push(now[i].left);
		if (now[i].right) next.push(now[i].right);
		now[i] = now[i].val;
	}

	if (next.length) {
		res.push(next);
		helper(res, level + 1);
	}

	return res;
};
```

**Complexity:**

-   Time complexity : O(n).
-   Space complexity : O(n).

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	return helper([], root, 0);
};

var helper = function (res, root, level) {
	if (root) {
		if (!res[level]) res[level] = [];
		res[level].push(root.val);
		helper(res, root.left, level + 1);
		helper(res, root.right, level + 1);
	}
	return res;
};
```

**Complexity:**

-   Time complexity : O(n).
-   Space complexity : O(n).

</details>
