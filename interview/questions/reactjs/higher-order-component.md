# What is a higher order component?

A higher-order component is a function that takes a component and returns a new component. HOC's allow you to reuse code, logic and bootstrap abstraction.

:::info

The higher order component (function) is **a pattern** that emerges from React’s compositional nature.

:::

The most common is probably Redux’s connect function. Beyond simply sharing utility libraries and simple composition, HOCs are the best way to share behavior between React Components.

Example of HOC:

```jsx
function WithLoading(Component) {
	return function WithLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		
		return <p>Fetching data...</p>;    
	};
}

const ListWithLoading = WithLoading(List);

const ExampleComponent = ({ data, isLoading }) => {
	return <ListWithLoading isLoading={isLoading} data={data} />;
};
```