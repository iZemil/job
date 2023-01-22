# What is the difference between pseudo-class and pseudo-element?

A pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example `:hover`. A pseudo-element however allows us to create items that do not normally exist in the document tree, for example `::after`.

**Pseudo-classes:**

Pseudo-classes select regular elements but under certain conditions, like when their position relative to siblings or when they're under a particular state. Here is a list of pseudo-classes in CSS3:

**a) Dynamic pseudo-classes:**

-   :link
-   :visited
-   :hover
-   :active
-   :focus

**b) UI element states pseudo-classes:**

-   :enabled
-   :disabled
-   :checked

**c) Structural pseudo-classes:**

-   :first-child
-   :nth-child(n)
-   :nth-last-child(n)
-   :nth-of-type(n)
-   :nth-last-of-type(n)
-   :last-child
-   :first-of-type
-   :last-of-type
-   :only-child
-   :only-of-type
-   :root
-   :empty

**d) Other pseudo-classes:**

:not(x) :target :lang(language)

**Pseudo-elements:**

Pseudo-elements effectively create new elements that are not specified in the markup of the document and can be manipulated much like a regular element.

-   ::before
-   ::after
-   ::first-letter
-   ::first-line
-   ::selection