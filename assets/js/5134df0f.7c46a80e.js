"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?r.createElement(m,s(s({ref:t},f),{},{components:n})):r.createElement(m,s({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},s="What are the different types of CSS units, and how do they work?",a={unversionedId:"questions/frontend/css-units",id:"questions/frontend/css-units",title:"What are the different types of CSS units, and how do they work?",description:"The different types of CSS units are:",source:"@site/interview/questions/frontend/css-units.md",sourceDirName:"questions/frontend",slug:"/questions/frontend/css-units",permalink:"/questions/frontend/css-units",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/frontend/css-units.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"When to use Microtasks?",permalink:"/questions/frontend/browser-microtasks"},next:{title:"What is CSS?",permalink:"/questions/frontend/css"}},l={},u=[{value:"rem vs em",id:"rem-vs-em",level:2}],f={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-are-the-different-types-of-css-units-and-how-do-they-work"},"What are the different types of CSS units, and how do they work?"),(0,o.kt)("p",null,"The different types of CSS units are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Absolute units: Absolute units are fixed units that are not affected by the user's environment. Absolute units include pixels (px), points (pt), and inches (in)."),(0,o.kt)("li",{parentName:"ul"},"Relative units: Relative units are flexible units that are based on the user's environment. Relative units include percentages (%), ems (em), and rems (rem)."),(0,o.kt)("li",{parentName:"ul"},"Viewport units: Viewport units are units that are based on the size and the dimensions of the viewport. Viewport units include vh, vw, vmin, and vmax."),(0,o.kt)("li",{parentName:"ul"},"Flexible units: Flexible units are units that are based on the size and the dimensions of the parent element. Flexible units include fractions (fr).")),(0,o.kt)("h2",{id:"rem-vs-em"},"rem vs em"),(0,o.kt)("p",null,'The "rem" (root em) and "em" (em) units are used in CSS to specify the size of the font and other elements in an HTML document. The main difference between "rem" and "em" is the way that they are calculated.'),(0,o.kt)("p",null,'"rem" is calculated based on the root element (html) of the document. The default font size of the root element is 16px, so "1rem" is equal to 16px. If the font size of the root element is changed, all "rem" values will be calculated based on the new font size.'),(0,o.kt)("p",null,'"em" is calculated based on the font size of the parent element. If the font size of the parent element is 16px, "1em" is equal to 16px. If the font size of the parent element is changed, all "em" values will be calculated based on the new font size.'),(0,o.kt)("p",null,'In general, "rem" is used to specify sizes that are independent of the font size of the parent element, while "em" is used to specify sizes that are relative to the font size of the parent element.'),(0,o.kt)("p",null,'For example, if you want to specify a font size that is independent of the font size of the parent element, you can use "rem" (e.g. "font-size: 1.5rem;"). If you want to specify a font size that is relative to the font size of the parent element, you can use "em" (e.g. "font-size: 1.5em;").'))}c.isMDXComponent=!0}}]);