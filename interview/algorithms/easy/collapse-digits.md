---
tags: [Easy, Math]
title: Collapse Digits
---

import Algo from '@site/src/components/Algo';

Given a non-negative integer `num`, repeatedly add all its digits until the result has only one digit.

**Example:**

```
Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.
```

<Algo
placeholder={`function main (input) {
    return;
}`}
tests={[
{ input: [38], output: 2},
{ input: [103], output: 4},
{ input: [987], output: 6},
]}
/>

<details>
<summary>Solution</summary>

```javascript
function collapseDigits(num) {
	return 1 + ((num - 1) % 9);
}
```

</details>
