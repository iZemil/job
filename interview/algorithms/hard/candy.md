---
tags: [Hard, Greedy]
---

# Candy

There are **N** children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

-   Each child must have at least one candy.
-   Children with a higher rating get more candies than their neighbors.

What is the minimum candies you must give?

**Example 1:**

```
Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
```

**Example 2:**

```
Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.
```

<details>
<summary>Solution</summary>

```javascript
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
	var len = ratings.length;
	var res = [];
	var sum = 0;
	for (var i = 0; i < len; i++) {
		res.push(i !== 0 && ratings[i] > ratings[i - 1] ? res[i - 1] + 1 : 1);
	}
	for (var j = len - 1; j >= 0; j--) {
		if (j !== len - 1 && ratings[j] > ratings[j + 1]) res[j] = Math.max(res[j], res[j + 1] + 1);
		sum += res[j];
	}
	return sum;
};
```

**Complexity:**

-   Time complexity : O(n).
-   Space complexity : O(n).

</details>
