---
tags: [Easy, Math, String]
title: Binary Sum
---

import Algo from '@site/src/components/Algo';

Given two binary strings, return their sum (also a binary string).

The input strings are both **non-empty** and contains only characters `1` or `0`.

<Algo
placeholder={`function main (a, b) {
    return;
}`}
tests={[
{ input: ['11', '1'], output: '100'},
{ input: ['1010', '1011'], output: '10101'},
]}
/>

<details>
<summary>Solution</summary>

**Complexity:**

-   Time complexity: O(n).
-   Space complexity: O(1).

```javascript
function sum(a, b) {
	const len1 = a.length;
	const len2 = b.length;
	const max = Math.max(len1, len2);
	let carry = 0;
	let val = 0;
	let res = '';

	for (let i = 0; i < max; i++) {
		val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
		carry = Math.floor(val / 2);
		res = (val % 2) + res;
	}

	if (carry) {
		res = 1 + res;
	}

	return res;
}
```

</details>
