# What is ReactJS?

React creates a virtual DOM. When the state changes in a component, it first runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.

## What are the advantages of using React?

**High performance:** React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.

- It is easy to know how a component is rendered, you just need to look at the render function.
- JSX makes it easy to read the code of your components. It is also really easy to see the layout, or how components are plugged/combined.
- You can render React on the server side. This improves SEO and performance.
- It is easy to test.
- You can use React with any framework you wish as it is only a view layer.