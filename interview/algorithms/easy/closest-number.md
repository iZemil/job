---
tags: [Easy, Math]
title: The closest number in an array
---

import Algo from '@site/src/components/Algo';

Find the closest number in an array of numbers

<Algo
placeholder={`function main (nums, target) {
    return;
}`}
tests={[
{ input: [[4, 9, 15, 6, 2], 5], output: 4},
{ input: [[-5, 3, 12, 45, -99], 13], output: 12},
{ input: [[-1.5, 0.5, 1.46, 1.51, 1.69], 1.5], output: 1.51}
]}
/>

<details>
<summary>Solution</summary>

```js
function findClosest(nums, target) {
	return nums.reduce((prev, curr) => (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev));
}
```

</details>
