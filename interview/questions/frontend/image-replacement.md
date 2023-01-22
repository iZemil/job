# What image replacement techniques you know, and which do you use?

**Technique: 01:**

```css
h1#technique-one {
  width: 250px;
  height: 25px;
  background-image: url(logo.gif);
}

h1#technique-one span {
  display: none;
}
```

```html
<h1 id="technique-one">
  <span>CSS-Tricks</span>
</h1>
```

**Technique: 02:**

```css
h1.technique-two {
  width: 2350px; 
  height: 75px;
  background: url("images/header-image.jpg") top right;
  margin: 0 0 0 -2000px;
}
```

```html
<h1 class="technique-two">
  CSS-Tricks
</h1>
```

**Technique: 03:**

```css
h1.technique-three {
  width: 350px; 
  height: 75px;
  background: url("images/header-image.jpg");
  text-indent: -9999px;
}
```

```html
<h1 class="technique-three">
  CSS-Tricks
</h1>
```

**Technique: 04:**

```css
h1.technique-four {
	width: 350px; 
    height: 75px;
	background: url("images/header-image.jpg");
	text-indent: -9999px;
}
```

```html
<h1 class="technique-four">
  <a href="#">
    <img src="images/header-image.jpg" alt="CSS-Tricks" />
  </a>
</h1>
```

**Technique: 05:**

```css
h1.technique-five {
	width: 350px; 
  height: 75px;
	background: url("images/header-image.jpg");
}
h1.technique-five span {
  display: none;
}
```

```html
<h1 class="technique-five">
  <img src="images/blank.gif" alt="CSS-Tricks" />
  <span>CSS-Tricks</span>
</h1>
```

**Technique: 06:**

```css
h1.technique-six {
	width: 350px;
	padding: 75px 0 0 0;
	height: 0;
	background: url("images/header-image.jpg") no-repeat;
	overflow: hidden;
}
```

```html
<h1 class="technique-six">
  CSS-Tricks
</h1>
```

**Technique: 07:**

```css
h1.technique-seven {
	width: 350px; 
  height: 75px;
	background: url("images/header-image.jpg") no-repeat;
}
h1.technique-seven span {
  display: block;
  width: 0;
  height: 0;
  overflow: hidden;
}
```

```html
<h1 class="technique-seven">
	<span>CSS-Tricks</span>
</h1>
```

**Technique: 08:**

```css
h1.technique-eight {
	width: 350px; 
  height: 75px;
	position: relative;
}
h1.technique-eight span {
  background: url("images/header-image.jpg");
  position: absolute;
  width: 100%;
  height: 100%;
}
```

```html
<h1 class="technique-eight">
  <span></span>CSS-Tricks
</h1>
```
**Technique: 09:**

```css
h1.technique-nine {
  width: 350px; 
  height: 75px;
  background: url("images/header-image.jpg") no-repeat;
  font-size: 1px;
  color: white;
}
```

```html
<h1 class="technique-nine">
  CSS-Tricks
</h1>
```