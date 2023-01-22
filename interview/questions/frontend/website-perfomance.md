# Ways to improve website performance

-   Minimize HTTP Requests
    -   Sites are mainly slow because of too many (or too large) HTTP requests. We can eliminate unnecessary request;
        -   combined files: js to a file, css to a file
        -   CSS sprites: CSS Sprites are the preferred method for reducing the number of image requests. Combine your background images into a single image and use the CSS background-image and background-position properties to display the desired image segment.
-   Use a Content Delivery Network CDN
    -   A CDN is essentially many optimized servers around the world that deliver web content to users based on their geographic location. This means big performance improvements for site users. Because, say, if a person accessing your site in India, they will be retrieving web content from a server nearby
-   Optimize Images:
    -   image sizes make a huge difference to site speed. The larger content/images, the slower the site. we could:
        -   Changing the resolution: reducing the “quality” of the image (and thereby the file size)
        -   Compressing the picture: increasing the efficiency of image data storage
        -   Cropping the picture: when cropping, you are cutting out unneeded areas and thus making the image smaller in size
-   Put Scripts at the Bottom:
    -   Javascript files can load after the rest of your page. The simplest solution is to place your external Javascript files at the bottom of your page, just before the close of your body tag. Now more of your site can load before your scripts. Another method that allows even more control is to use the defer or async attributes when placing external .js files on your site.
        -   Async tags load the scripts while the rest of the page loads, but this means scripts can be loaded out of order. Basically, lighter files load first. This might be fine for some scripts, but can be disastrous for others.
        -   The defer attribute loads your scripts after your content has finished loading. It also runs the scripts in order. Just make sure your scripts run so late without breaking your site.
-   Add an Expires or a Cache-Control Header
    -   Web page designs are getting richer and richer, which means more scripts, stylesheets, images, and Flash in the page. A first-time visitor to your page may have to make several HTTP requests, but by using the Expires header you make those components cacheable. This avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often used with images, but they should be used on all components including scripts, stylesheets, and Flash components.
-   Gzip Components
    -   Compression reduces response times by reducing the size of the HTTP response. Gzipping generally reduces the response size by about 70%.
-   Put Stylesheets at the Top:
    -   This is because putting stylesheets in the HEAD allows the page to render progressively.
-   Avoid CSS Expressions
-   Use GET for AJAX Requests:
    -   Ajax is that it provides instantaneous feedback to the user because it requests information asynchronously from the backend web server
-   Make JavaScript and CSS External:
    -   Using external files in the real world generally produces faster pages because the JavaScript and CSS files are cached by the browser. JavaScript and CSS that are inlined in HTML documents get downloaded every time the HTML document is requested. This reduces the number of HTTP requests that are needed, but increases the size of the HTML document. On the other hand, if the JavaScript and CSS are in external files cached by the browser, the size of the HTML document is reduced without increasing the number of HTTP requests.
-   Use get to ajax request:
    -   POST is implemented in the browsers as a two-step process: sending the headers first, then sending data. So it's best to use GET, which only takes one TCP packet to send (unless you have a lot of cookies).
-   No 404s:
    -   HTTP requests are expensive so making an HTTP request and getting a useless response (i.e. 404 Not Found) is totally unnecessary and will slow down the user experience without any benefit.
-   Reduce Cookie Size:
    -   HTTP cookies are used for a variety of reasons such as authentication and personalization. Information about cookies is exchanged in the HTTP headers between web servers and browsers. It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.
-   Reduce DNS Lookups
    
-   Minify JavaScript and CSS
    
-   Avoid Redirects
    
-   Remove Duplicate Scripts
    
-   Configure Etags
    
-   Make Ajax Cacheable
    
-   Post-load Components
    
-   Preload Components
    
-   Reduce the Number of DOM Elements
    
-   Minimize the Number of iframes
    
-   Minimize DOM Access
    
-   Optimize CSS Sprites
    
-   Don't Scale Images in HTML
    
-   Make favicon.ico Small and Cacheable
    
-   Avoid Empty Image src