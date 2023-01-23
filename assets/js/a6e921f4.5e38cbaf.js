"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[7283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},s="What is React Context?",c={unversionedId:"questions/reactjs/reactjs-context",id:"questions/reactjs/reactjs-context",title:"What is React Context?",description:"Context\xa0provides a way to pass data through the component tree without having to pass props down manually at every level.",source:"@site/interview/questions/reactjs/reactjs-context.md",sourceDirName:"questions/reactjs",slug:"/questions/reactjs/reactjs-context",permalink:"/questions/reactjs/reactjs-context",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/reactjs/reactjs-context.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to bind methods in JSX callbacks?",permalink:"/questions/reactjs/reactjs-bind-methods"},next:{title:"What is the diff Element vs Component?",permalink:"/questions/reactjs/reactjs-element-vs-component"}},i={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-react-context"},"What is React Context?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Context"),"\xa0provides a way to pass data through the component tree without having to pass props down manually at every level."),(0,o.kt)("p",null,"For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'//Lets create a context with a default theme value "luna"\nconst ThemeContext = React.createContext(\'luna\');\n// Create App component where it uses provider to pass theme value in the tree\nclass App extends React.Component {\n    render() {\n        return (\n            <ThemeContext.Provider value="nova">\n                <Toolbar />\n            </ThemeContext.Provider>\n        );\n    }\n}\n// A middle component where you don\'t need to pass theme prop anymore\nfunction Toolbar(props) {\n    return (\n        <div>\n            <ThemedButton />\n        </div>\n    );\n}\n// Lets read theme value in the button component to use\nclass ThemedButton extends React.Component {\n    static contextType = ThemeContext;\n    render() {\n        return <Button theme={this.context} />;\n    }\n}\n')))}u.isMDXComponent=!0}}]);