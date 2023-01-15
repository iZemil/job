---
tags: [Easy, Array, Greedy]
title: Buy and Sell Stocks 2
---

import Algo from '@site/src/components/Algo';

Say you have an array for which the **i**-th element is the price of a given stock on day **i**.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

> You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example:**

```
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
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

-   Time complexity: O(n)
-   Space complexity: O(1)

```javascript
function maxProfit(prices) {
	let profit = 0;
	prices.forEach((price, index) => {
		const prevPrice = prices[index - 1];
		if (price > prevPrice) {
			profit += price - prevPrice;
		}
	});
	return profit;
}
```

</details>
