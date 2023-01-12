---
tags: [Hard, Array]
---

# First Missing Positive

Given an unsorted integer array, find the smallest missing positive integer.

**Example 1:**

```
Input: [1,2,0]
Output: 3
```

**Example 2:**

```
Input: [3,4,-1,1]
Output: 2
```

**Example 3:**

```
Input: [7,8,9,11,12]
Output: 1
```

**Note:**

Your algorithm should run in **O**(**n**) time and uses constant extra space.

<details>
<summary>Solution</summary>

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	var len = nums.length;
	var tmp = 0;
	var i = 0;
	while (i < len) {
		tmp = nums[i];
		if (tmp > 0 && tmp !== i + 1 && tmp !== nums[tmp - 1]) swap(nums, i, tmp - 1);
		else i++;
	}
	for (var j = 0; j < len; j++) {
		if (nums[j] !== j + 1) return j + 1;
	}
	return len + 1;
};

var swap = function (arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};
```

**Complexity:**

-   Time complexity : O(n).
-   Space complexity : O(1).

</details>
