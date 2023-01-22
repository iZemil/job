# Explain the use of `rel="nofollow"`, `rel="noreferrer"`, `rel="noopener"` attributes?

## `rel="nofollow"`

When `rel="nofollow"` tag is used, it instruct the search engines not to pass any PageRank from one page to the other. It does not allow it to pass the authority to the specific website. The main advantage of using this attribute is to control the spam attack.

There may be times, when you do not have control over what people publish on your websites, for example some blog comments and some kind of forum posting.

```html
<a href="https://www.website.com" rel="nofollow">Link to yoursite.com</a>
```

## `rel="noreferrer"`

Noreferrer is related to analytics and tracking. The referrer value shows the previous page where a user came from. By using the noreferrer attribute on a link, you are preventing other pages from seeing that traffic came from a click on your link.

```html
<a href="https://www.website.com" rel="noreferrer">Link to yoursite.com</a>
```

## `rel="noopener"`

It prevents the new page from being able to access the `window.opener` property and will make it run in a separate process. noopener tag works as a security fix which prevents malicious links to take control over an opened tab.

```html
<a href="https://www.website.com" target="_blank" rel="noopener">Link to yoursite.com</a>
```