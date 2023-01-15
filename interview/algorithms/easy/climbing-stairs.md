---
tags: [Easy, 'Dynamic Programming']
title: Climbing Stairs
---

import Algo from '@site/src/components/Algo';

You are climbing a stair case. It takes **n** steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

> Given **n** will be a positive integer.

**Example:**

```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

<Algo
placeholder={`function main (n) {
    return;
}`}
tests={[
{ input: [2], output: 2},
{ input: [3], output: 3},
{ input: [4], output: 5},
{ input: [13], output: 377},
]}
/>

<details>
<summary>Solution</summary>

**Complexity:**

-   Time complexity: O(n).
-   Space complexity: O(n).

```javascript
function climbStairs(n) {
	let dp = [0, 1];

	for (let i = 0; i < n; i++) {
		dp = [dp[1], dp[0] + dp[1]];
	}

	return dp[1];
}
```

</details>
