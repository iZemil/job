"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[7888],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3384:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const s={},a="How to create a clustering in NodeJS?",i={unversionedId:"questions/nodejs/nodejs-clustering",id:"questions/nodejs/nodejs-clustering",title:"How to create a clustering in NodeJS?",description:"Clustering in Node.js refers to the ability to create a group of child processes that can share server ports and work together to handle incoming requests. Clustering is a way to improve the performance and scalability of a Node.js application, by taking advantage of multiple CPU cores and distributing the workload across multiple processes.",source:"@site/interview/questions/nodejs/nodejs-clustering.md",sourceDirName:"questions/nodejs",slug:"/questions/nodejs/nodejs-clustering",permalink:"/questions/nodejs/nodejs-clustering",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/nodejs/nodejs-clustering.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is a Buffer in NodeJS?",permalink:"/questions/nodejs/nodejs-buffer"},next:{title:"How do you handle errors in a NodeJS application?",permalink:"/questions/nodejs/nodejs-error-handling"}},c={},l=[],u={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-a-clustering-in-nodejs"},"How to create a clustering in NodeJS?"),(0,o.kt)("p",null,"Clustering in Node.js refers to the ability to create a group of child processes that can share server ports and work together to handle incoming requests. Clustering is a way to improve the performance and scalability of a Node.js application, by taking advantage of multiple CPU cores and distributing the workload across multiple processes."),(0,o.kt)("p",null,"To create a cluster in Node.js, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster")," module, which is part of the Node.js core. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster")," module allows you to create a master process that can spawn and manage a group of worker processes. Each worker process runs a separate instance of the application, and the master process distributes incoming requests to the workers using a round-robin algorithm."),(0,o.kt)("p",null,"Here is an example of how to create a cluster in Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cluster = require('cluster');\nconst http = require('http');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n    console.log(`Master ${process.pid} is running`);\n\n    // Fork workers.\n    for (let i = 0; i < numCPUs; i++) {\n        cluster.fork();\n    }\n\n    cluster.on('exit', (worker, code, signal) => {\n        console.log(`worker ${worker.process.pid} died`);\n    });\n} else {\n    // Workers can share any TCP connection\n    // In this case it is an HTTP server\n    http.createServer((req, res) => {\n        res.writeHead(200);\n        res.end('hello world\\n');\n    }).listen(8000);\n\n    console.log(`Worker ${process.pid} started`);\n}\n")),(0,o.kt)("p",null,"In this example, the master process creates a worker process for each CPU core, and each worker process runs an HTTP server that listens on port 8000. When an incoming request is received, the master process distributes it to one of the worker processes using a round-robin algorithm. This allows the application to handle multiple requests concurrently and improve its overall performance and scalability."))}p.isMDXComponent=!0}}]);