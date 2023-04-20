"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[219],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(4250),o=(n(9496),n(9613));const a={},i=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/CustomDrop",id:"ox_inventory/Functions/Server/Inventory/CustomDrop",title:"CustomDrop",description:"Drops can be created from other resources, containing a variety of items and utilising a custom label (instead of 'Drop 32648').",source:"@site/docs/ox_inventory/Functions/Server/Inventory/CustomDrop.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/CustomDrop",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CustomDrop",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/CustomDrop.md",tags:[],version:"current",lastUpdatedAt:1682003133,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"CreateTemporaryStash",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CreateTemporaryStash"},next:{title:"GetCurrentWeapon",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon"}},p={},s=[],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Drops can be created from other resources, containing a variety of items and utilising a custom label (instead of 'Drop 32648')."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:CustomDrop(prefix, items, coords, slots, maxWeight, instance, model)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"prefix: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"items: ",(0,o.kt)("inlineCode",{parentName:"li"},"table"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"name: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"count: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"metadata?: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")))),(0,o.kt)("li",{parentName:"ul"},"coords: ",(0,o.kt)("inlineCode",{parentName:"li"},"vector3")),(0,o.kt)("li",{parentName:"ul"},"slots?: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"maxWeight?: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"instance?: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"model?: ",(0,o.kt)("inlineCode",{parentName:"li"},"number"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Create a generic drop with a marker\nexports.ox_inventory:CustomDrop('Carcass', {\n    {'meat', 5, { grade = 2, type = 'deer' }},\n    {'hide', 5, { grade = 2, type = 'deer' }}\n}, coords)\n\n-- Create a drop with an entity\nexports.ox_inventory:CustomDrop('SMG', {\n    { 'WEAPON_MINISMG', 1 },\n    { 'ammo-9', 69 },\n}, GetEntityCoords(GetPlayerPed(1)), 5, 10000, nil, `w_sb_minismg`)\n")))}c.isMDXComponent=!0}}]);