---
tags: [Medium, Array, 'Two Pointers']
title: Sum of the 3 Zero
---

Given an array `nums` of **n** integers, are there elements **a**, **b**, **c** in `nums` such that **a** + **b** + **c** = 0? Find all unique triplets in the array which gives the sum of zero.

> The solution set must not contain duplicate triplets.

**Example:**

```
Input: nums = [-1, 0, 1, 2, -1, -4]
Output:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

<details>
<summary>Solution</summary>

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	var len = nums.length;
	var res = [];
	var l = 0;
	var r = 0;
	nums.sort((a, b) => a - b);
	for (var i = 0; i < len; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		l = i + 1;
		r = len - 1;
		while (l < r) {
			if (nums[i] + nums[l] + nums[r] < 0) {
				l++;
			} else if (nums[i] + nums[l] + nums[r] > 0) {
				r--;
			} else {
				res.push([nums[i], nums[l], nums[r]]);
				while (l < r && nums[l] === nums[l + 1]) l++;
				while (l < r && nums[r] === nums[r - 1]) r--;
				l++;
				r--;
			}
		}
	}
	return res;
};
```

**Complexity:**

-   Time complexity: O(n^2).
-   Space complexity: O(1).

</details>
