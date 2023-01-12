---
tags: [Easy, Math]
---

# Add Digits

Given a non-negative integer `num`, repeatedly add all its digits until the result has only one digit.

**Example:**

```
Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.
```

**Follow up:**
Could you do it without any loop/recursion in O(1) runtime?

<details>
<summary>Solution</summary>

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	return 1 + ((num - 1) % 9);
};
```

**Complexity:**

-   Time complexity : O(1).
-   Space complexity : O(1).

</details>
