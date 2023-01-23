# What is the diff `useState` vs `useRef`?
    
1. `useState` causes components to re-render after state updates whereas `useRef` doesn’t cause a component to re-render when the value or state changes. Essentially, `useRef` is like a “box” that can hold a mutable value in its (.current) property.
2. `useState` allows us to update the state inside components. While `useRef` allows referencing DOM elements.