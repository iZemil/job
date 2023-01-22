# What is the responsive design, and how do you implement it?

Responsive design is a design approach that is used to create web sites and applications that are adaptable and flexible, and that work well on different devices and screen sizes. Responsive design is based on the concept of fluid grids, flexible images, and media queries.

To implement responsive design in CSS, you can use the following techniques:
- Use relative units, such as percentages or viewport units, to define the dimensions and the positions of the elements.
- Use media queries to apply different styles based on the size and the dimensions of the viewport.
```css
/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {
  .main {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
```
- Use flexible layouts, such as block layout or flexbox layout, to create flexible and adaptable layouts that adjust to the size and the dimensions of the viewport.
-  Use flexible images, by using the "max-width" property or the "object-fit" property, to make the images adapt to the size and the dimensions of the viewport.

**Extra ways:**

1. Setting the viewport:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. Show different Images depending on Browser Width:

The HTML `<picture>` element allows you to define different images for different browser window sizes.

```html
<picture>
  <source srcset="img_small.jpg" media="(max-width: 600px)">
  <source srcset="img_large.jpg" media="(max-width: 1500px)">
  <source srcset="img.jpg">
  <img src="img_small.jpg" alt="Image">
</picture>
```

3. Responsive Text Size:

The text size can be set with a "vw" unit, which means the "viewport width". That way the text size will follow the size of the browser window.

<span style="font-size:10vw">Hello World</span>
```html
<span style="font-size:10vw">Hello World</span>
```