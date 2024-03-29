---
tags: [Medium, 'Linked List', Math]
---

# Add Two Numbers

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example**

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

<details>
<summary>Solution</summary>

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	var carry = 0;
	var sum = 0;
	var head = new ListNode(0);
	var now = head;
	var a = l1;
	var b = l2;
	while (a !== null || b !== null) {
		sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
		carry = Math.floor(sum / 10);
		now.next = new ListNode(sum % 10);
		now = now.next;
		a = a ? a.next : null;
		b = b ? b.next : null;
	}
	if (carry) now.next = new ListNode(carry);
	return head.next;
};
```

**Complexity:**

-   Time complexity: O(max(m,n)).
-   Space complexity: O(max(m,n)).

</details>
