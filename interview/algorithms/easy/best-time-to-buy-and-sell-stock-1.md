---
tags: [Easy, Array, 'Dynamic Programming']
title: Buy and Sell Stocks 1
---

import Algo from '@site/src/components/Algo';

Say you have an array for which the **i**-th element is the price of a given stock on day **i**.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

> Note that you cannot sell a stock before you buy one.

**Example:**

```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on 5 (price = 6) with profit = 5
```

<Algo
placeholder={`function main (prices) {
    return;
}`}
tests={[
{ input: [[7,1,5,3,6,4]], output: 5},
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
	let minPrice = Number.MAX_SAFE_INTEGER;
	let maxProfit = 0;

	prices.forEach((price) => {
		if (price < minPrice) {
			minPrice = price;
		} else if (price - minPrice > maxProfit) {
			maxProfit = price - minPrice;
		}
	});

	return maxProfit;
}
```

</details>
