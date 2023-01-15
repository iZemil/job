---
tags: [Easy, Math]
title: Excel Sheet Column Number
---

import Algo from '@site/src/components/Algo';

Given a column title as appear in an Excel sheet, return its corresponding column number.

**Example:**

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

<Algo
placeholder={`function main (col) {
    return;
}`}
tests={[
{ input: ['A'], output: 1},
{ input: ['Z'], output: 26},
{ input: ['AA'], output: 27},
{ input: ['AB'], output: 28},
{ input: ['ZY'], output: 701},
]}
/>

<details>
<summary>Solution</summary>

**Complexity:**

-   Time complexity: O(n)
-   Space complexity: O(1)

```javascript
function main(col) {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const dict = Object.fromEntries(letters.split('').map((it, index) => [it, index + 1]));
	const lettersLen = letters.length;
	const colLen = col.length;

	return col
		.toUpperCase()
		.split('')
		.reduce((acc, letter, index) => acc + Math.pow(lettersLen, colLen - (index + 1)) * dict[letter], 0);
}
```

</details>
