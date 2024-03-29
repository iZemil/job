# What are the different ways to apply CSS to an HTML document?

The different ways to apply CSS to an HTML document are:

-   Inline styles: Inline styles are styles that are defined within the HTML element, using the "style" attribute. Inline styles apply to a single element, and they have the highest priority.

```html
<p style="font-weight:bold;">Bold Font</p>
```

-   Embedded styles: Embedded styles are styles that are defined within the "style" element in the head of the HTML document. Embedded styles apply to all elements in the document, and they have a higher priority than external styles.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Internal CSS Example</title>
		<style>
			p {
				color: red;
			}

			a {
				color: blue;
			}
		</style>
		...
	</head>
</html>
```

-   External styles: External styles are styles that are defined in a separate CSS file, and that are linked to the HTML document using the "link" element in the head of the document. External styles apply to all elements in the document, and they have the lowest priority.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>External CSS Example</title>
		<link rel="stylesheet" type="text/css" href="/path/to/some-style.css" />
		...
	</head>
</html>
```
