---
tags: [Hard, String, 'Dynamic Programming']
---

# Edit Distance

Given two words **word1** and **word2**, find the minimum number of operations required to convert **word1** to **word2**.

You have the following 3 operations permitted on a word:

-   Insert a character
-   Delete a character
-   Replace a character

**Example 1:**

```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

**Example 2:**

```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

<details>
<summary>Solution</summary>

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	var n = word1.length;
	var m = word2.length;
	var dp = Array(n);

	for (var i = 0; i < n; i++) {
		dp[i] = Array(m);
		for (var j = 0; j < m; j++) {
			dp[i][j] = Math.min(
				getDp(i - 1, j, dp) + 1,
				getDp(i, j - 1, dp) + 1,
				getDp(i - 1, j - 1, dp) + (word1[i] === word2[j] ? 0 : 1)
			);
		}
	}

	return getDp(n - 1, m - 1, dp);
};

var getDp = function (i, j, dp) {
	if (i < 0 && j < 0) return 0;
	if (i < 0) return j + 1;
	if (j < 0) return i + 1;
	return dp[i][j];
};
```

**Complexity:**

-   Time complexity : O(m\*n).
-   Space complexity : Om\*(n).

</details>
