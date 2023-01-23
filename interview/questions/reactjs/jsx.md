# What is JSX?

JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React `elements`. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.

Compare examples, code written with JSX:

```jsx
function hello() {
  return <ul>
	  {['Hello', 'World'].map(key => <li key={key}>{key}</li>)}
  </ul>;
}
```

And it can be compiled to this code that does not use JSX:

```js
function hello() {
	return React.createElement(
	    "ul",
	    null,
	    ["Hello", "World"].map((key) => React.createElement("li", { key }, key)
  );
}
```

:::info

Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object

:::

> For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use **Babel**