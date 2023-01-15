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
{ input: [3], output: ["7:00","11:00","3:01","3:02","3:04","3:08","3:16","3:32","5:01","5:02","5:04","5:08","5:16","5:32","9:01","9:02","9:04","9:08","9:16","9:32","1:03","1:05","1:09","1:17","1:33","1:06","1:10","1:18","1:34","1:12","1:20","1:36","1:24","1:40","1:48","6:01","6:02","6:04","6:08","6:16","6:32","10:01","10:02","10:04","10:08","10:16","10:32","2:03","2:05","2:09","2:17","2:33","2:06","2:10","2:18","2:34","2:12","2:20","2:36","2:24","2:40","2:48","4:03","4:05","4:09","4:17","4:33","4:06","4:10","4:18","4:34","4:12","4:20","4:36","4:24","4:40","4:48","8:03","8:05","8:09","8:17","8:33","8:06","8:10","8:18","8:34","8:12","8:20","8:36","8:24","8:40","8:48","0:07","0:11","0:19","0:35","0:13","0:21","0:37","0:25","0:41","0:49","0:14","0:22","0:38","0:26","0:42","0:50","0:28","0:44","0:52","0:56"]},
{ input: [8], output: ["7:31","7:47","7:55","7:59","11:31","11:47","11:55","11:59"]},
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
