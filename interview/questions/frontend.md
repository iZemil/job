---
sidebar_position: 3
title: Frontend
---

# Frontend Questions

## What is DOM?

The DOM (Document Object Model) is a representation of the structure and the content of a web page, as an object tree. It consists of a set of objects and properties that represent the elements, the attributes, and the content of a web page, and it is used to manipulate and access the content and the structure of a web page.

### What is HTML?

HTML (HyperText Markup Language) is a markup language used to structure and format the content of web pages. It consists of a set of tags and attributes that define the structure and the formatting of the content, and it is used to create the layout and the appearance of web pages.

CSS (Cascading Style Sheets) is a stylesheet language used to style and format the content of web pages. It consists of a set of rules and declarations that define the styling of elements in a web page, and it is used to control the layout, the colors, the fonts, and the other visual aspects of web pages.

### What is the difference between attributes and properties?

### What is Event Propagation?

Event propagation refers to the way that events are processed in an HTML document. When an event is triggered on an element, it can be processed in two ways:

1. Capturing phase: The event starts at the top of the document and is propagated down to the element that triggered the event.
2. Bubbling phase: The event starts at the element that triggered the event and is propagated up to the top of the document.

### What is Event Bubbling?

Event bubbling is a type of event propagation that occurs during the bubbling phase. When an event is triggered on an element, it is propagated up to its parent elements, until it reaches the top of the document. Event bubbling allows you to handle events on multiple elements that are nested inside each other.

### What is Event Capturing?

Event capturing is a type of event propagation that occurs during the capturing phase. When an event is triggered on an element, it is propagated down to its child elements, until it reaches the element that triggered the event. Event capturing allows you to handle events on multiple elements that are nested inside each other.

### Difference between attributes and properties in DOM

In JavaScript, attributes and properties are both used to store data in an object or an element, but they have some important differences.

An attribute is a default value that is defined in the HTML code of an element, and it can be accessed using the `getAttribute()` method of the element. An attribute reflects the default value of an element, and it can be modified using the `setAttribute()` method.

A property is a value that is associated with an object or an element, and it can be accessed and modified using the dot notation (e.g., `object.property`) or the square bracket notation (e.g., `object['property']`). A property reflects the current state of an object or an element, and it is typically used to store data that is related to the object or element.

Here is an example that illustrates the difference between attributes and properties:

```js
<input type="text" id="input" value="Hello">

const input = document.getElementById('input');

console.log(input.getAttribute('value'));  // logs "Hello"
console.log(input.value);  // logs "Hello"

input.setAttribute('value', 'World');
console.log(input.getAttribute('value'));  // logs "World"
console.log(input.value);  // logs "Hello"

input.value = 'Hello';
console.log(input.getAttribute('value'));  // logs "World"
console.log(input.value);  // logs "Hello"
```

In this example, the `input` element has a `value` attribute with the default value "Hello". The `input` element also has a `value` property that reflects the current value of the element.

When the `getAttribute()` and `setAttribute()` methods are used, the `value` attribute is accessed and modified, while the `value` property remains unchanged. On the other hand, when the `value` property is modified using the dot notation, the `value` attribute.

### Ways to store data in browser?

1. Cookies
2. Web Storage API (local/session)
3. IndexDB
4. JS variables
5. DOM Node Storage (dataset property or setAttribute(), getAttribute(), eg: someElement.dataset.store = ‘some value’)
6. Cache API

### What is SPA and how to make it SEO-friendly?

A Single Page Application (SPA) is a web application that is designed to work as a single page. It is built using client-side technologies such as HTML, CSS, and JavaScript, and it is loaded in the browser as a single HTML document. SPAs use a combination of client-side rendering, data binding, and AJAX (Asynchronous JavaScript and XML) to update the content and the layout of the page without reloading the page. SPAs are fast and responsive, and they offer a seamless and immersive experience to the users.

However, one of the challenges of building SPAs is making them SEO-friendly, as search engines rely on the HTML content of the pages to index and rank the web applications. Here are some tips on how to make a SPA SEO-friendly:

1.  Use server-side rendering: Server-side rendering (SSR) is a technique that is used to generate and render the HTML content of the pages on the server, and to send the rendered HTML to the browser. SSR allows search engines to index and rank the content of the pages, as they can access and crawl the HTML content of the pages.
2.  Use progressive enhancement: Progressive enhancement is a technique that is used to build web applications that are accessible and functional for all users, regardless of their devices and capabilities. Progressive enhancement allows you to use client-side technologies such as JavaScript and AJAX to enhance the functionality and the interactivity of the web application, but it also allows you to use HTML and CSS to structure and style the content and the layout of the web application. This ensures that the web application is accessible and functional for all users, including search engines.
3.  Use prerendering: Prerendering is a technique that is used to generate and render the HTML content of the pages on the server, and to send the rendered HTML to the browser as a static snapshot. Prerendering allows search engines to index and rank the content of the pages, as they can access and crawl the HTML content of the pages. Prerendering also allows you to use client-side technologies such as JavaScript and AJAX to enhance the functionality and the interactivity of the web application, but it ensures that the web application is accessible and functional for all users, including search engines.
4.  Use structured data and metadata: Structured data and metadata are tags and attributes that are used to mark up the content of the pages with semantic and contextual information. Structured data and metadata allow search engines to understand the content and the context of the pages, and to index and rank the pages accordingly. You should use structured data and metadata to mark up the content of the pages with information such as the titles, the descriptions, the images, the links, and the categories of the pages.
5.  Use sitemaps and robots.txt: Sitemaps and robots.txt are files that are used to tell search engines which pages of the web application are allowed to be indexed and which pages are not allowed to be indexed. You should use sitemaps and robots.txt to specify the pages of the web application that you want to be indexed and ranked by search engines, and to exclude the pages that you do not want to be indexed and ranked.

## What is CSS?

CSS (Cascading Style Sheets) is a style sheet language that is used to describe the look and the formatting of a HTML document. CSS is used to control the layout, the colors, the fonts, the spacing, and the transitions of the elements in a web page or an application.

### What is the difference between "display: block" and "display: inline" in CSS?

### What is the difference between "display: inline-block" and "display: block" in CSS?

### What is the difference between "display: none" and "visibility: hidden" and "opacity: 0" in CSS?

display: none - hide element from view, but visibility/hidden make place empty.

The main difference between opacity and visibility is that "opacity" affects the transparency of the element and its children, while "visibility" only affects the visibility of the element.

### What is the difference between "padding" and "margin" in CSS?

-   The "padding" and "margin" properties are used to control the space around the elements in an HTML document.

"padding" is the space inside an element, between the element's content and its border. "padding" can be applied to all four sides of an element, or to specific sides, using the "padding-top", "padding-right", "padding-bottom", and "padding-left" properties.

"margin" is the space outside an element, between the element's border and the next element. "margin" can be applied to all four sides of an element, or to specific sides, using the "margin-top", "margin-right", "margin-bottom", and "margin-left" properties.

The main difference between "padding" and "margin" is the location of the space. "Padding" is inside the element, while "margin" is outside the element.

### What are the different ways to apply CSS to an HTML document?

The different ways to apply CSS to an HTML document are:
- Inline styles: Inline styles are styles that are defined within the HTML element, using the "style" attribute. Inline styles apply to a single element, and they have the highest priority.
- Embedded styles: Embedded styles are styles that are defined within the "style" element in the head of the HTML document. Embedded styles apply to all elements in the document, and they have a higher priority than external styles.
- External styles: External styles are styles that are defined in a separate CSS file, and that are linked to the HTML document using the "link" element in the head of the document. External styles apply to all elements in the document, and they have the lowest priority.

### What CSS style type do you prefer and why?

className and css/scss/stylus/modules; inline styles; CSS-in-JS

### What are the different types of CSS units, and how do they work?

The different types of CSS units are:
- Absolute units: Absolute units are fixed units that are not affected by the user's environment. Absolute units include pixels (px), points (pt), and inches (in).
- Relative units: Relative units are flexible units that are based on the user's environment. Relative units include percentages (%), ems (em), and rems (rem).
- Viewport units: Viewport units are units that are based on the size and the dimensions of the viewport. Viewport units include vh, vw, vmin, and vmax.
- Flexible units: Flexible units are units that are based on the size and the dimensions of the parent element. Flexible units include fractions (fr).

### rem vs em

The "rem" (root em) and "em" (em) units are used in CSS to specify the size of the font and other elements in an HTML document. The main difference between "rem" and "em" is the way that they are calculated.

"rem" is calculated based on the root element (html) of the document. The default font size of the root element is 16px, so "1rem" is equal to 16px. If the font size of the root element is changed, all "rem" values will be calculated based on the new font size.

"em" is calculated based on the font size of the parent element. If the font size of the parent element is 16px, "1em" is equal to 16px. If the font size of the parent element is changed, all "em" values will be calculated based on the new font size.

In general, "rem" is used to specify sizes that are independent of the font size of the parent element, while "em" is used to specify sizes that are relative to the font size of the parent element.

For example, if you want to specify a font size that is independent of the font size of the parent element, you can use "rem" (e.g. "font-size: 1.5rem;"). If you want to specify a font size that is relative to the font size of the parent element, you can use "em" (e.g. "font-size: 1.5em;").

### What is responsive design, and how do you implement it in CSS?

Responsive design is a design approach that is used to create web sites and applications that are adaptable and flexible, and that work well on different devices and screen sizes. Responsive design is based on the concept of fluid grids, flexible images, and media queries.

To implement responsive design in CSS, you can use the following techniques:
- Use relative units, such as percentages or viewport units, to define the dimensions and the positions of the elements.
- Use media queries to apply different styles based on the size and the dimensions of the viewport.
- Use flexible layouts, such as block layout or flexbox layout, to create flexible and adaptable layouts that adjust to the size and the dimensions of the viewport.
-  Use flexible images, by using the "max-width" property or the "object-fit" property, to make the images adapt to the size and the dimensions of the viewport.

## What is ReactJS, its pros and cons?

### Props vs State

- Props get passed to the component similar to function parameters
- State is managed within the component similar to variables declared within a function.

### What is Virtual DOM?

### What is JSX?

### Why is it used className, neither class in React?

### What is React Component?

### Controlled vs Uncontrolled components

A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

### Describe a React Lifecycle

### What is Redux and its principes?

### Differences between redux-saga and redux-thunk?

Both Redux Thunk and Redux Saga take care of dealing with side effects. In most of the scenarios, Thunk uses Promises to deal with them, whereas Saga uses Generators. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.

### Describe React Context API

### What is Ref and why to use it?

### What is SynteticEvent in React?

### Describe react routing

### Functional components vs Class components

### What is the problem with code below?

```js
this.setState({
	counter: this.state.counter + this.props.increment,
});
```

Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

```js
// Correct
this.setState((state, props) => ({
	counter: state.counter + props.increment
}));
```

### React useCallback vs useMemo?

- `useCallback` memoizes a function
- `useMemo` memoizes a computed value

```js
const fn = () => 42 // assuming expensive calculation here
const memoFn = useCallback(fn, [dep]) // (1)
const memoFnReturn = useMemo(fn, [dep]) // (2)
```

(1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time you invoke memoFn, that complex computation starts again.
(2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.

## What is an Event Loop?

In JavaScript, the event loop is a mechanism that is used to execute code asynchronously. It is a loop that continuously checks for and processes events that are added to the event queue.

The event loop works in conjunction with the call stack and the task queue. The call stack is a data structure that is used to store the execution context of the code that is currently being executed. It is a stack of frames, with the most recently called function at the top of the stack.

The task queue is a data structure that is used to store tasks that are waiting to be executed. Tasks are added to the task queue when they are created, and they are removed from the task queue and added to the call stack when they are ready to be executed.

The event loop is responsible for checking the task queue and adding tasks to the call stack when they are ready to be executed. It runs continuously, and it processes tasks in the order in which they are added to the task queue.

### Explain the diff Tasks vs Microtasks

A **task** is any JavaScript code which is scheduled to be run by the standard mechanisms such as initially starting to run a program, an event callback being run, or an interval or timeout being fired. These all get scheduled on the **task queue**.

Tasks get added to the task queue when:

-   A new JavaScript program or subprogram is executed (such as from a console, or by running the code in a `<script>` element) directly.
-   An event fires, adding the event's callback function to the task queue.
-   A timeout or interval created with `setTimeout()` or `setInterval()` is reached, causing the corresponding callback to be added to the task queue.

The event loop driving your code handles these tasks one after another, in the order in which they were enqueued. The oldest runnable task in the task queue will be executed during a single iteration of the event loop. After that, microtasks will be executed until the microtask queue is empty, and then the browser may choose to update rendering. Then the browser moves on to the next iteration of event loop.

**There are two key differences:**

1. Each time a task exits, the event loop checks to see if the task is returning control to other JavaScript code. If not, it runs all of the microtasks in the microtask queue. The microtask queue is, then, processed multiple times per iteration of the event loop, including after handling events and other callbacks.
2. If a microtask adds more microtasks to the queue by calling `queueMicrotask()`, those newly-added microtasks *execute before the next task is run*. That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added.

### When to use Microtasks?

It's important to note again that most developers won't use microtasks much, if at all. They're a highly specialized feature of modern browser-based JavaScript development, allowing you to schedule code to jump in front of other things in the long set of things waiting to happen on the user's computer. _Abusing this capability will lead to performance problems._

The main reason to use microtasks is that: to ensure consistent ordering of tasks, even when results or data is available synchronously, but while simultaneously reducing the risk of user-discernible delays in operations.

1. One situation in which microtasks can be used to ensure that the ordering of execution is always consistent is when promises are used in one clause of an `if...else` statement (or other conditional statement), but not in the other clause. Consider code such as this:

```js
customElement.prototype.getData = (url) => {
	if (this.cache[url]) {
		this.data = this.cache[url];
		this.dispatchEvent(new Event('load'));
	} else {
		fetch(url)
			.then((result) => result.arrayBuffer())
			.then((data) => {
				this.cache[url] = data;
				this.data = data;
				this.dispatchEvent(new Event('load'));
			});
	}
};
```

The problem introduced here is that by using a task in one branch of the `if...else` statement (in the case in which the image is available in the cache) but having promises involved in the `else` clause, we have a situation in which the order of operations can vary; for example, as seen below.

```js
element.addEventListener('load', () => console.log('Loaded data'));
console.log('Fetching data…');
element.getData();
console.log('Data fetched');
```

Executing this code twice in a row gives the following results.

When the data is not cached:

```
Fetching data
Data fetched
Loaded data
```

When the data is cached:

```
Fetching data
Loaded data
Data fetched
```

Even worse, sometimes the element's `data` property will be set and other times it won't be by the time this code finishes running.

We can ensure consistent ordering of these operations by using a microtask in the `if` clause to balance the two clauses:

```js
customElement.prototype.getData = (url) => {
	if (this.cache[url]) {
		queueMicrotask(() => {
			this.data = this.cache[url];
			this.dispatchEvent(new Event('load'));
		});
	} else {
		fetch(url)
			.then((result) => result.arrayBuffer())
			.then((data) => {
				this.cache[url] = data;
				this.data = data;
				this.dispatchEvent(new Event('load'));
			});
	}
};
```

This balances the clauses by having both situations handle the setting of `data` and firing of the `load` event within a microtask (using `queueMicrotask()` in the `if` clause and using the promises used by `fetch()` in the `else` clause).

2. You can also use microtasks to collect multiple requests from various sources into a single batch, avoiding the possible overhead involved with multiple calls to handle the same kind of work.

The snippet below creates a function that batches multiple messages into an array, using a microtask to send them as a single object when the context exits.

```js
const messageQueue = [];

let sendMessage = (message) => {
	messageQueue.push(message);

	if (messageQueue.length === 1) {
		queueMicrotask(() => {
			const json = JSON.stringify(messageQueue);
			messageQueue.length = 0;
			fetch('url-of-receiver', json);
		});
	}
};
```
