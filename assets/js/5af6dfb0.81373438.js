"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[8150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||s;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={},a="What is a middleware in NodeJS?",i={unversionedId:"questions/nodejs/nodejs-middleware",id:"questions/nodejs/nodejs-middleware",title:"What is a middleware in NodeJS?",description:"In the context of Node.js, middleware refers to functions that have access to the request and response objects, and the next middleware function in the application's request-response cycle. These functions can perform tasks such as logging requests, parsing request bodies, adding response headers, and handling errors.",source:"@site/interview/questions/nodejs/nodejs-middleware.md",sourceDirName:"questions/nodejs",slug:"/questions/nodejs/nodejs-middleware",permalink:"/questions/nodejs/nodejs-middleware",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/nodejs/nodejs-middleware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is an Event Loop?",permalink:"/questions/nodejs/nodejs-event-loop"},next:{title:"How do you structure a NodeJS project?",permalink:"/questions/nodejs/nodejs-project-structure"}},d={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-a-middleware-in-nodejs"},"What is a middleware in NodeJS?"),(0,o.kt)("p",null,"In the context of Node.js, middleware refers to functions that have access to the request and response objects, and the next middleware function in the application's request-response cycle. These functions can perform tasks such as logging requests, parsing request bodies, adding response headers, and handling errors."),(0,o.kt)("p",null,"Middleware functions are used to modify the request and response objects, or to perform additional tasks before or after the primary logic of the application. They are typically organized into a chain, with each middleware function being passed to the next function in the chain."),(0,o.kt)("p",null,"In Node.js, middleware functions are commonly used in web frameworks such as Express.js to provide additional functionality to the application. For example, you might use middleware functions to handle authentication, compression, or caching, or to add CORS headers to the response."),(0,o.kt)("p",null,"Here is an example of a simple middleware function in Node.js using the Express.js framework:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function loggerMiddleware(req, res, next) {\n    console.log(`${req.method} ${req.url}`);\n    next();\n}\n\napp.use(loggerMiddleware);\n")),(0,o.kt)("p",null,"This middleware function logs the HTTP method and URL of each request to the console. The ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," function is called to pass control to the next middleware function in the chain."))}u.isMDXComponent=!0}}]);