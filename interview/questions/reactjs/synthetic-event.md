# What is the SyntheticEvent in ReactJS?

Your event handlers will be passed instances of `SyntheticEvent`, a cross-browser wrapper around the browser’s native event

It has the same interface as the browser’s native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

```jsx
function Example() {
	const handleFocus = (e) => {
		if (e.currentTarget === e.target) {
          console.log('focused self');
        } else {
          console.log('focused child', e.target);
        }
        
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus entered self');
        }
	}

	return (
	    <div tabIndex={1} onFocus={handleFocus}>
      <input id="1" />
      <input id="2" />
    </div>
  );
}
```