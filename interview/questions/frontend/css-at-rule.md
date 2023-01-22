# What is At-Rule `@`?

At-rules are `CSS statements` that instructs CSS how to behave. They begin with an at sign, `@` followed by an identifier and includes everything up to the next semicolon, `;` or the next CSS block, whichever comes first.

```css
/* General structure */
@IDENTIFIER (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

|  at-rules  |                                                             Description                                                             |
|:----------:|:-----------------------------------------------------------------------------------------------------------------------------------:|
| @charset   | Defines the character set used by the style sheet.                                                                                  |
| @import    | Tells the CSS engine to include an external style sheet.                                                                            |
| @namespace | Tells the CSS engine that all its content must be considered prefixed with an XML namespace.                                        |
| @media     | A conditional group rule that will apply its content if the device meets the criteria of the condition defined using a media query. |
| @supports  | A conditional group rule that will apply its content if the browser meets the criteria of the given condition.                      |
| @page      | Describes the aspect of layout changes that will be applied when printing the document.                                             |
| @font-face | Describes the aspect of an external font to be downloaded.                                                                          |
| @keyframes | Describes the aspect of intermediate steps in a CSS animation sequence.                                                             |