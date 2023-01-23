# What is ReactJS `ref`?

Refs are used to get reference to a DOM node or an instance of a component in React. Good examples of when to use refs are for managing focus/text selection, triggering imperative animations, or integrating with third-party DOM libraries. You should avoid using string refs and inline ref callbacks. Callback refs are advised by React.

## How to create refs?

There are two approaches

1.  This is a recently added approach. _Refs_ are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use _refs_ throughout the component, just assign the _ref_ to the instance property within constructor.
    
```jsx
class MyComponent extends React.Component {
  constructor(props) {
	super(props);
	this.myRef = React.createRef();
  }
  
  render() {
	return <div ref={this.myRef} />;
  }
}
```

2.  You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element is accessed as follows,
```jsx
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.txtSearch = null;
		this.state = { term: "" };
		
		this.setInputSearchRef = (e) => {
			this.txtSearch = e;
		};
	}
  
	onInputChange(event) {
		this.setState({ term: this.txtSearch.value });
	}
	  
	render() {
		return (
			<input
				value={this.state.term}
				onChange={this.onInputChange.bind(this)}
				ref={this.setInputSearchRef}
			/>
		);
	}
} 
```

You can also use _refs_ in function components using **closures**.

**Note**: You can also use inline ref callbacks even though it is not a recommended approach.

## What are forward refs?

_Ref forwarding_ is a feature that lets some components take a _ref_ they receive, and pass it further down to a child.

```jsx
const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{"Forward Ref"}</ButtonElement>;
```