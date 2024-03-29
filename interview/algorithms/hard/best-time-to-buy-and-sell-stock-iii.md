---
tags: [Hard, Array, 'Dynamic Programming']
title: Buy and Sell Stock 3
---

Say you have an array for which the **i**th element is the price of a given stock on day **i**.

Design an algorithm to find the maximum profit. You may complete at most **two** transactions.

> \*\*You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```

**Example 3:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

<details>
<summary>Solution</summary>

**Complexity:**

-   Time complexity: O(n)
-   Space complexity: O(1)

```javascript
function maxProfit(prices) {
	let buy1 = Number.MIN_SAFE_INTEGER;
	let sell1 = 0;
	let buy2 = Number.MIN_SAFE_INTEGER;
	let sell2 = 0;

	for (let i = 0; i < prices.length; i++) {
		buy1 = Math.max(buy1, -prices[i]);
		sell1 = Math.max(sell1, buy1 + prices[i]);
		buy2 = Math.max(buy2, sell1 - prices[i]);
		sell2 = Math.max(sell2, buy2 + prices[i]);
	}
	return sell2;
}
```

</details>
