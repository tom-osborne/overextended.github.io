"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=u(n),f=o,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6694:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={title:"lib.callback"},c=void 0,u={unversionedId:"ox_lib/Imports/Client/lib.callback/index",id:"ox_lib/Imports/Client/lib.callback/index",title:"lib.callback",description:"",source:"@site/docs/ox_lib/Imports/Client/lib.callback/index.md",sourceDirName:"ox_lib/Imports/Client/lib.callback",slug:"/ox_lib/Imports/Client/lib.callback/",permalink:"/docs/ox_lib/Imports/Client/lib.callback/",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Imports/Client/lib.callback/index.md",tags:[],version:"current",frontMatter:{title:"lib.callback"},sidebar:"docs",previous:{title:"lib.disableControls",permalink:"/docs/ox_lib/Imports/Client/disableControls"},next:{title:"lib.callback.await",permalink:"/docs/ox_lib/Imports/Client/lib.callback/await"}},p={},s=[],b={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- name: string\n-- delay: number or false\n-- cb: function\nlib.callback(name, delay, cb, ...)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback('ox_inventory:getItemCount', false, function(count)\n    print(count)\nend, 'water', {type = 'fresh'})\n")))}f.isMDXComponent=!0}}]);