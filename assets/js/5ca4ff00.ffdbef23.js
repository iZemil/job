"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[1759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(n),f=o,d=l["".concat(p,".").concat(f)]||l[f]||y[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Why and how to use `never`?",s={unversionedId:"questions/typescript/never-type",id:"questions/typescript/never-type",title:"Why and how to use `never`?",description:"The never type is used to represent values that are never expected to occur or that are not intended to be used, such as the result of a function that always throws an exception or an infinite loop that never returns. The never type is a useful way to express the absence of a value or the impossibility of a scenario, and it can help to prevent errors and improve code quality by indicating that a value or a function is not intended to be used or accessed.",source:"@site/interview/questions/typescript/never-type.md",sourceDirName:"questions/typescript",slug:"/questions/typescript/never-type",permalink:"/questions/typescript/never-type",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/typescript/never-type.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interfaces vs Types",permalink:"/questions/typescript/interface-vs-type"},next:{title:"What are template literal types?",permalink:"/questions/typescript/template-literal-type"}},p={},c=[],u={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-and-how-to-use-never"},"Why and how to use ",(0,o.kt)("inlineCode",{parentName:"h1"},"never"),"?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"never")," type is used to represent values that are never expected to occur or that are not intended to be used, such as the result of a function that always throws an exception or an infinite loop that never returns. The ",(0,o.kt)("inlineCode",{parentName:"p"},"never")," type is a useful way to express the absence of a value or the impossibility of a scenario, and it can help to prevent errors and improve code quality by indicating that a value or a function is not intended to be used or accessed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function fail(message: string): never {\n  throw new Error(message);\n}\n\nfunction infiniteLoop(): never {\n  while (true) {\n    // ...\n  }\n}\n\nlet x: never = fail('Something went wrong');  // ok\nlet y: never = infiniteLoop();  // ok\n\nlet z: number = x;  // error: Type 'never' is not assignable to type 'number'\nlet w: string = x;  // error: Type 'never' is not assignable to type 'string'\n")))}l.isMDXComponent=!0}}]);