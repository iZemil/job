---
tags: [Easy, Backtracking, 'Bit Manipulation']
title: Binary Watch
---

import Algo from '@site/src/components/Algo';

A binary watch has 4 LEDs on the top which represent the **hours** (**0-11**), and the 6 LEDs on the bottom represent the **minutes** (**0-59**).
Each LED represents a zero or one, with the least significant bit on the right.

![](https://upload.wikimedia.org/wikipedia/commons/8/8b/Binary_clock_samui_moon.jpg)

For example, the above binary watch reads "3:25".

Given a non-negative integer _n_ which represents the number of LEDs that are currently on, return all possible times the watch could represent.

**Note:**

-   The order of output does not matter.
-   The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
-   The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".

<Algo
placeholder={`function main (num) {
    return;
}`}
tests={[
{ input: [1], output: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]},
]}
/>

<details>
<summary>Solution</summary>

```javascript
function readBinaryWatch(num) {
	var res = [];
	helper(num, 0, 0, res, 0);
	return res;
}

function helper(num, hours, minute, res, index) {
	if (num < 0 || index > 10 || hours > 11 || minute > 59) {
		return;
	} else if (num === 0) {
		res.push(hours + ':' + (minute < 10 ? '0' + minute : minute));
	} else if (index < 4) {
		helper(num - 1, hours + Math.pow(2, index), minute, res, index + 1);
		helper(num, hours, minute, res, index + 1);
	} else if (index >= 4) {
		helper(num - 1, hours, minute + Math.pow(2, index - 4), res, index + 1);
		helper(num, hours, minute, res, index + 1);
	}
}
```

</details>
