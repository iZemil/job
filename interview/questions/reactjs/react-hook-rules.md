# What rules need to be followed for hooks?

You need to follow two rules in order to use hooks:

1. Call Hooks only at the top level of your react functions. i.e, You shouldn’t call Hooks inside loops, conditions, or nested functions. This will ensure that Hooks are called in the same order each time a component renders, and it preserves the state of Hooks between multiple `useState` and `useEffect` calls.
2. Call Hooks from React Functions only. i.e, You shouldn’t call Hooks from regular JavaScript functions.