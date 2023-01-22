# What is difference between `span` tag and `div` tag?

The primary difference between div and span tag is their default behavior. By default, a `<div>` is a **block-level-element** and a `<span>` is an **inline element**.

-   `<div>` is a block level element which means it will render it on it's own line with a width of a 100% of the parent element.
-   `<span>` is an inline element which means it will render on the same line as the previous element, if it is also an inline element, and it's width will be determined by it's content.

```html
<div>Block <span>text inside</span> Block</div>
```