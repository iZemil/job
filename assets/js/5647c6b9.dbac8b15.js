"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(n),f=a,h=y["".concat(p,".").concat(f)]||y[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[y]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="What is `as` syntax in TypeScript?",s={unversionedId:"questions/typescript/ts-as",id:"questions/typescript/ts-as",title:"What is `as` syntax in TypeScript?",description:"The as syntax in TypeScript is used to perform type assertions, which allow you to override the type of a value and tell the compiler that you know the type of the value more specifically. Type assertions are a way to provide additional type information to the compiler, and they can be useful when you want to narrow the type of a value or when you want to use a value in a context where the compiler cannot infer the correct type.",source:"@site/interview/questions/typescript/ts-as.md",sourceDirName:"questions/typescript",slug:"/questions/typescript/ts-as",permalink:"/questions/typescript/ts-as",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/typescript/ts-as.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What are template literal types?",permalink:"/questions/typescript/template-literal-type"},next:{title:"What is the `declare` keyword in TypeScript?",permalink:"/questions/typescript/ts-declare"}},p={},l=[],c={toc:l};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-as-syntax-in-typescript"},"What is ",(0,a.kt)("inlineCode",{parentName:"h1"},"as")," syntax in TypeScript?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," syntax in TypeScript is used to perform type assertions, which allow you to override the type of a value and tell the compiler that you know the type of the value more specifically. Type assertions are a way to provide additional type information to the compiler, and they can be useful when you want to narrow the type of a value or when you want to use a value in a context where the compiler cannot infer the correct type."),(0,a.kt)("p",null,'Type assertions can be used in two forms: the "angle-bracket" syntax, and the ',(0,a.kt)("inlineCode",{parentName:"p"},"as")," syntax. The angle-bracket syntax uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," characters to enclose the type that you want to assert, and it is typically used for type assertions on primitive types. The ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," syntax uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," keyword followed by the type that you want to assert, and it is typically used for type assertions on object types."),(0,a.kt)("p",null,"Here is an example of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," syntax for type assertions in TypeScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let x: any = 'Hello';\n\nlet y = x as string;  // type of y is 'string'\n\nlet z: number = y as any;  // type of z is 'number'\n")),(0,a.kt)("p",null,"Type assertions can be a useful technique in TypeScript, as they allow you to provide additional type information to the compiler and to override the type of a value when necessary. It is important to use type assertions appropriately, as they can affect the type safety and reliability of the code."))}y.isMDXComponent=!0}}]);