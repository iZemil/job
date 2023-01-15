---
tags: [Easy, Math]
title: Add Strings
---

import Algo from '@site/src/components/Algo';

Given two non-negative integers `num1` and `num2` represented as string, return the sum of `num1` and `num2`.

**Note:**

-   The length of both `num1` and `num2` is < 5100.
-   Both `num1` and `num2` contains only digits `0-9`.
-   Both `num1` and `num2` does not contain any leading zero.
-   You **must not use any built-in BigInteger library** or **convert the inputs to integer** directly.

<Algo
placeholder={`function main (num1, num2) {
    return;
}`}
tests={[
{ input: ['63', '181'], output: '244'},
{ input: ['11', '1'], output: '12'},
{ input: ['1010', '1011'], output: '2021'},
]}
/>

<details>
<summary>Solution</summary>

```javascript
function addStrings(num1, num2) {
	const len1 = num1.length;
	const len2 = num2.length;
	const max = Math.max(len1, len2);
	const res = Array(max);
	let carry = 0;
	let val = 0;

	for (var i = 0; i < max; i++) {
		val = Number(num1[len1 - 1 - i] || 0) + Number(num2[len2 - 1 - i] || 0) + carry;
		carry = Math.floor(val / 10);
		res[max - 1 - i] = val % 10;
	}

	return (carry || '') + res.join('');
}
```

</details>
