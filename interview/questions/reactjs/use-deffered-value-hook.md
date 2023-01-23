# How to use `useDeferredValue` hook?

-   `useDeferredValue` is a React Hook that lets you defer updating a part of the UI.
-   basically it let you perform the debouncing technique with lesser code.

```jsx
//usage
import { useState, useDeferredValue } from 'react';
//userList component takes searchText to fetch user's list
import UserList from './UserList.js';

export default function App() {
	const [searchText, setSearchText] = useState('');
	//pass searchText as default visible value in useDeferredValue
	const deferredQuery = useDeferredValue(searchText);

	return (
		<>
			<label>
				Search user:
				<input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
			</label>
			<div>
				<UserList searchText={deferredQuery} />
			</div>
		</>
	);
}
```
