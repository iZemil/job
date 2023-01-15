---
tags: [Easy, Array, Greedy]
title: Buy and Sell Stocks 2
---

import Algo from '@site/src/components/Algo';

Say you have an array for which the **i**-th element is the price of a given stock on day **i**.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

> You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```

<Algo
placeholder={`function main (prices) {
    return;
}`}
tests={[
{ input: [[7,1,5,3,6,4]], output: 7},
{ input: [[1,2,3,4,5]], output: 4},
{ input: [[7,6,4,3,1]], output: 0},
]}
/>

<details>
<summary>Solution</summary>

**Complexity:**

-   Time complexity: O(n).
-   Space complexity: O(1).

```javascript
function maxProfit(prices) {
	let max = 0;
	for (var i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			max += prices[i] - prices[i - 1];
		}
	}

	return max;
}
```

</details>
