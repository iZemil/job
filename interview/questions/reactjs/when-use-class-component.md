# When to use a Class over a Function component?

If the component needs _state or lifecycle methods_ then use class component, otherwise use function component.

> However, from React 16.8 with the addition of Hooks, you could use state, lifecycle methods and other features that were only available in class component right in your function component.So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.