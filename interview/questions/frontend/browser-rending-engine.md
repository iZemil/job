# How does the browser rendering engine work?

In order to render content the browser has to go through a series of steps:

1. Constructing the DOM Tree
2. Constructing the CSSOM Tree
3. Running JavaScript - parser blocking resource
4. Creating the Render Tree
5. Generating the Layout (Once the browser knows which rules apply to an element it can begin to calculate how much space it takes up and where it is on screen. The web's layout model means that one element can affect others, for example the width of the `<body>` element typically affects its children's widths and so on all the way up and down the tree, so the process can be quite involved for the browser.)
6. Painting (Painting is the process of filling in pixels. It involves drawing out text, colors, images, borders, and shadows, essentially every visual part of the elements. The drawing is typically done onto multiple surfaces, often called layers)
7. Compositing (Since the parts of the page were drawn into potentially multiple layers they need to be drawn to the screen in the correct order so that the page renders correctly. This is especially important for elements that overlap another, since a mistake could result in one element appearing over the top of another incorrectly)