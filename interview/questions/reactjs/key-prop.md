# Why to use `key` prop for list items?

Keys are very important in lists for the following reasons:

- A key is a unique identifier and it is used to **identify which items have changed**, been updated or deleted from the lists
- It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, **it increases performance**, as only the updated components are re-rendered

``` jsx
function Example() {
  const numbers = [1, 2, 3, 4, 5];
  
  return numbers.map((num) => <li>{num}</li>)
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Example />);
```

:::caution

Warning: Each child in a list should have a unique 'key' prop.

:::