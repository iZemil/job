---
tags: [Medium, Array, 'Two Pointers']
title: Sum of the 3 Closest
---

import Algo from '@site/src/components/Algo';

Given an array `nums` of **n** integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

**Example:**

```
Input: nums = [-1, 2, 1, -4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2 (-1 + 2 + 1 = 2)
```

<Algo
placeholder={`function main (nums, target) {
    return;
}`}
tests={[
{ input: [[-1, 2, 1, -4], 1], output: 2},
{ input: [[-1, 20, 10, 14, 12, 13], 13], output: 21},
]}
/>

<details>
<summary>Solution</summary>

**Complexity:**

-   Time complexity: O(n^2).
-   Space complexity: O(1).

```javascript
function threeSumClosest(nums, target) {
	let len = nums.length;
	let res = nums[0] + nums[1] + nums[2];
	let sum = 0;
	let l = 0;
	let r = 0;

	nums.sort((a, b) => a - b);

	for (let i = 0; i < len - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		l = i + 1;
		r = len - 1;
		while (l < r) {
			sum = nums[i] + nums[l] + nums[r];
			if (sum < target) {
				l++;
			} else if (sum > target) {
				r--;
			} else {
				return sum;
			}
			if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
		}
	}
	return res;
}
```

</details>
