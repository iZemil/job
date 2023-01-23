# Why to use virtual DOM?

**Virtual DOM (VDOM):** React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.

- The virtual DOM **is faster to update than the real DOM** because React uses a clever technique to minimize the number of updates that need to be made to the real DOM.
- The virtual DOM **is implemented in JavaScript**, which is generally faster to execute than the native code that is used to manipulate the real DOM.

## Is the Shadow DOM the same as the Virtual DOM?

No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

## What is reconciliation?

When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called _reconciliation_.