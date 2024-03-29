---
tags: [Hard, String, Dynamic Programming]
---

# Distinct Subsequences

Given a string **S** and a string **T**, count the number of distinct subsequences of **S** which equals **T**.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `"ACE"` is a subsequence of `"ABCDE"` while `"AEC"` is not).

**Example 1:**

```
Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:

As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
```

**Example 2:**

```
Input: S = "babgbag", T = "bag"
Output: 5
Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
```

<details>
<summary>Solution</summary>

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
	var dp = Array(s.length)
		.fill(0)
		.map((_) => Array(t.length));
	return helper(s, t, 0, 0, dp);
};

var helper = function (s, t, sIndex, tIndex, dp) {
	if (tIndex === t.length) return 1;
	if (sIndex === s.length) return 0;
	if (dp[sIndex][tIndex] === undefined) {
		if (s[sIndex] === t[tIndex]) {
			dp[sIndex][tIndex] = helper(s, t, sIndex + 1, tIndex + 1, dp) + helper(s, t, sIndex + 1, tIndex, dp);
		} else {
			dp[sIndex][tIndex] = helper(s, t, sIndex + 1, tIndex, dp);
		}
	}
	return dp[sIndex][tIndex];
};
```

**Complexity:**

-   Time complexity: O(m\*n).
-   Space complexity: O(m\*n).

</details>
