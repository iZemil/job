---
sidebar_position: 999
---

# Algorithms

TODO: Main definitions
TODO: Review and Classify the main algorithms

Skip the algorithm lottery study. It’s called a lottery for a reason. What are the chances you’ll study the right algorithms? Besides, the best interviewers will also skip the lottery and instead ask you to demonstrate your ability to code and come up with solutions to common problems you’ll actually encounter on the real job.

### Big O

### Amazon interview

```
Question: You are given a dictionary containing thousands of words and a sentence with no spaces.
Write an algorithm to reconstruct the sentence by inserting spaces in the appropriate positions.

Example:

["the", "sky", "is", "blue", "the", "grass", "is", "green"]

input: "theskyisblue" output: "the sky is blue"

input: "thegrassisgreen" output: "the grass is green"

```

```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
	var dp = Array(s.length);
	var map = {};
	var res = [];

	for (var i = 0; i < wordDict.length; i++) {
		map[wordDict[i]] = true;
	}

	return find(s, map, dp, 0);
};

const find = function (s, map, dp, index) {
	if (dp[index]) return dp[index];

	var str = '';
	var tmp = null;
	var len = s.length;

	dp[index] = [];

	for (var i = index; i < len; i++) {
		str = s.substring(index, i + 1);
		if (!map[str]) continue;
		if (i === len - 1) {
			dp[index].push(str);
			break;
		}
		tmp = find(s, map, dp, i + 1);
		for (var j = 0; j < tmp.length; j++) {
			dp[index].push(str + ' ' + tmp[j]);
		}
	}

	return dp[index];
};
```
