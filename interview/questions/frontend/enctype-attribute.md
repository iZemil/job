# What does `enctype` attribute mean?

The `enctype` attribute specifies how the form-data should be encoded when submitting it to the server.

:::

The `enctype` attribute can be used only if `method="post"`

:::

## `enctype=multipart/form-data`

```html
<form action="fileupload.php" method="post" enctype="multipart/form-data"> 
    <p>Please select the file you would like to upload.</p> 
    <input type="file" name="upload"> 
    <br> 
    <input type="submit" value="Upload File">
</form>
```
No characters are encoded. This value is required when you are using forms that have a file upload control

## `enctype=application/x-www-form-urlencoded`

```html
<form action="/urlencoded?token=A87412B" method="POST" enctype="application/x-www-form-urlencoded">
    <input type="text" name="username" value=""/>
    <input type="text" name="password" value=""/>
    <input type="submit" value="Submit" />
</form>
```
Default. All characters are encoded before sent (spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values)

## `enctype=text/plain`

```html
<form action="action.do" method="get" enctype="text/plain">
    Name: <input type="text" name="name" />
    Phone: <input type="number" name="phone" />
    <input type="submit" value="Submit" />
</form>
```
Spaces are converted to "+" symbols, but no special characters are encoded. Not recommended.
