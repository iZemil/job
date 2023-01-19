"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[53],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||y[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="Interfaces vs Types",p={unversionedId:"questions/typescript/interface-vs-type",id:"questions/typescript/interface-vs-type",title:"Interfaces vs Types",description:"-   different syntax",source:"@site/interview/questions/typescript/interface-vs-type.md",sourceDirName:"questions/typescript",slug:"/questions/typescript/interface-vs-type",permalink:"/questions/typescript/interface-vs-type",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/typescript/interface-vs-type.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is difference between enum vs const?",permalink:"/questions/typescript/enum-vs-const"},next:{title:"Why and how to use `never`?",permalink:"/questions/typescript/never-type"}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interfaces-vs-types"},"Interfaces vs Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"different syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface SetPoint {\n    (x: number, y: number): void;\n}\n\ntype SetPoint = (x: number, y: number) => void;\n\n// extening\ninterface PartialPointX {\n    x: number;\n}\ninterface Point extends PartialPointX {\n    y: number;\n}\n\ntype PartialPointX = { x: number };\ntype Point = PartialPointX & { y: number };\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"other type creation only with type:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// primitive\ntype Name = string;\n\n// object\ntype PartialPointX = { x: number };\ntype PartialPointY = { y: number };\n\n// map\ntype TMap = new Map<string, number>;\n\n// union\ntype PartialPoint = PartialPointX | PartialPointY;\n\n// tuple\ntype Data = [number, string];\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both can be implemented by classes"),(0,i.kt)("li",{parentName:"ul"},"interface merging")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Point {\n    x: number;\n}\ninterface Point {\n    y: number;\n}\n\nconst point: Point = { x: 1, y: 2 };\n")))}u.isMDXComponent=!0}}]);