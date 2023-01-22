# Explain the diff `translate` vs positioning

`translate()` is a value of CSS `transform`. Changing `transform` or `opacity` does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers `reflow`. `transform` causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence `translate()` is more efficient and will result in shorter paint times for smoother animations.

When using `translate()`, the element still occupies its original space (sort of like `position: relative`), unlike in changing the absolute positioning.

**Example:**

If we combine `position:relative` with one of the offset properties `top`, `bottom`, `left` or `right` the element will be moved from its original place in the layout whilst preserving the space in the document it once occupied. The element will be moved on to a new layer and its “layer order” or its stacking order can then be controlled with the `z-index` property.

```css
.thing {
  position: relative;
  top: 100px;
  left: 50px;
}
```

In the above example the element will be moved 100px away from the top and 50px away from the left of its original position.

When using `transform:translate(x,y)` we get a very similar visual result to using relative position. The same result as above could be achieved with the following snippet:

```css
.thing {
  transform: translate(50px, 100px);
}
```

In this case, we are translating the coordinates of the element by `50px` along the x-axis and `100px` along the y-axis. The end result is visually the same as the previous `position` example.