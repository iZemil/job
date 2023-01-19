# What are the different types of CSS units, and how do they work?

The different types of CSS units are:
- Absolute units: Absolute units are fixed units that are not affected by the user's environment. Absolute units include pixels (px), points (pt), and inches (in).
- Relative units: Relative units are flexible units that are based on the user's environment. Relative units include percentages (%), ems (em), and rems (rem).
- Viewport units: Viewport units are units that are based on the size and the dimensions of the viewport. Viewport units include vh, vw, vmin, and vmax.
- Flexible units: Flexible units are units that are based on the size and the dimensions of the parent element. Flexible units include fractions (fr).

## rem vs em

The "rem" (root em) and "em" (em) units are used in CSS to specify the size of the font and other elements in an HTML document. The main difference between "rem" and "em" is the way that they are calculated.

"rem" is calculated based on the root element (html) of the document. The default font size of the root element is 16px, so "1rem" is equal to 16px. If the font size of the root element is changed, all "rem" values will be calculated based on the new font size.

"em" is calculated based on the font size of the parent element. If the font size of the parent element is 16px, "1em" is equal to 16px. If the font size of the parent element is changed, all "em" values will be calculated based on the new font size.

In general, "rem" is used to specify sizes that are independent of the font size of the parent element, while "em" is used to specify sizes that are relative to the font size of the parent element.

For example, if you want to specify a font size that is independent of the font size of the parent element, you can use "rem" (e.g. "font-size: 1.5rem;"). If you want to specify a font size that is relative to the font size of the parent element, you can use "em" (e.g. "font-size: 1.5em;").