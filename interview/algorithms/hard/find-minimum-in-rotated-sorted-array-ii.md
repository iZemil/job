---
tags: [Hard, Array, 'Binary Search']
---

# Find Minimum in Rotated Sorted Array II

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  `[0,1,2,4,5,6,7]` might become  `[4,5,6,7,0,1,2]`).

Find the minimum element.

The array may contain duplicates.

**Example 1:**

```
Input: [1,3,5]
Output: 1
```

**Example 2:**

```
Input: [2,2,2,0,1]
Output: 0
```

**Note:**

-   This is a follow up problem to Find Minimum in Rotated Sorted Array.
-   Would allow duplicates affect the run-time complexity? How and why?

<details>
<summary>Solution</summary>

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	var left = 0;
	var right = nums.length - 1;
	var mid = 0;
	while (left < right) {
		mid = Math.floor((left + right) / 2);
		if (nums[mid] > nums[right]) {
			left = mid + 1;
		} else if (nums[mid] < nums[right]) {
			right = mid;
		} else {
			right--;
		}
	}
	return nums[left];
};
```

**Complexity:**

-   Time complexity: O(n).
-   Space complexity: O(n).

</details>
