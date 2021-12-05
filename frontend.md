## Junior level

-   Какие способы хранения информации есть на клиенте:

    1. Cookies
    2. Web Storage API (localStorage, sessionStorage)
    3. IndexDB
    4. JS variables
    5. DOM Node Storage (dataset property or setAttribute(), getAttribute(), eg: someElement.dataset.store = ‘some value’)
    6. Cache API

## Middle level

## Senior level

Фронтенд
HTML/CSS
• Семантическая верстка
• CSS селекторы
• Какие существуют типы стилей css для html: inline css, external stylesheet, internal stylesheet
• Типы графики в html: canvas and svg
ReactJS
• Кратко рассказать, что такое реакт:
• Props vs State
• Расскажи о преимуществах и недостатках реакта:
• Что такое Virtual DOM:
• Что такое JSX, для чего мы используем className, а не class:
• Что такое Реакт Компонент:
• State vs Props:
Props get passed to the component similar to function parameters
State is managed within the component similar to variables declared within a function.
• Controlled vs Uncontrolled components:
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
• Описать работу React lifecycle:

    • Описать работу с Redux, принципы (single source of truth, state is read-only (action creator, reducer), Changes are made with pure functions)
    • Redux: mapStateToProps vs mapDispatchToProps
    • What are the differences between redux-saga and redux-thunk?

Both Redux Thunk and Redux Saga take care of dealing with side effects. In most of the scenarios, Thunk uses Promises to deal with them, whereas Saga uses Generators. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.
• React Context API
• Реализовать модальное окно, при нажатии вне, оно закрывается (лучше на порталах)
https://replit.com/@EmilZaripovFL/React#src/components/Modal.tsx
• Какие способы работы css and react знаешь и какой предпочтительный (className and css/scss/stylus/modules; inline styles; CSS-in-JS)
• Рассказать о выбранных инструментах для создания одностраничного сайта с контактной формой
• Использование Ref
• Синтетические события (SynteticEvent) что такое, зачем придумано
• Routing
• Functional components vs Class components:
• React Hooks: Explain why and when would you use useMemo()?
Answer
Why:
In the lifecycle of a component, React re-renders the component when an update is made. When React checks for any changes in a component, it may detect an unintended or unexpected change due to how JavaScript handles equality and shallow comparisons. This change in the React application will cause it to re-render unnecessarily.

Additionally, if that re-rendering is an expensive operation, like a long for loop, it can hurt performance. Expensive operations can be costly in either time, memory, or processing.

When:
Optimal if the wrapped function is large and expensive.

How:
Memoization is an optimization technique which passes a complex function to be memoized. In memoization, the result is “remembered” when the same parameters are passed-in subsequently.

const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [a, b]);
useMemo takes in a function and an array of dependencies. The dependency’s list are the elements useMemo watches: if there are no changes, the function result will stay the same. Otherwise, it will re-run the function. If they don’t change, it doesn’t matter if our entire component re-renders, the function won’t re-run but instead return the stored result.
• Проблема следующего кода:
this.setState({
counter: this.state.counter + this.props.increment,
});
Answer
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
// Correct
this.setState((state, props) => ({
counter: state.counter + props.increment
}));
• Разница между useCallback и useMemo?
With useCallback you memoize functions, useMemo memoizes any computed value:
const fn = () => 42 // assuming expensive calculation here
const memoFn = useCallback(fn, [dep]) // (1)
const memoFnReturn = useMemo(fn, [dep]) // (2)
(1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time you invoke memoFn, that complex computation starts again.
(2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.
• В
