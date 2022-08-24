"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4044],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7640:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9496),r=n(1626),i="tabItem_zeWL";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},866:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5443),r=n(9496),i=n(1626),l=n(4252),o=n(1135),u=n(9162),p=n(3946),c="tabList_gs2P",s="tabItem_Ugfh";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,O=(0,r.useState)(y),C=O[0],T=O[1],E=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var L=N[b];null!=L&&L!==C&&g.some((function(e){return e.value===L}))&&T(L)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==C&&(I(t),T(a),null!=b&&x(b,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var i,l=E.indexOf(e.currentTarget)-1;n=null!=(i=E[l])?i:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9570:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(5443),r=n(3010),i=(n(9496),n(9613)),l=n(866),o=n(7640),u=["components"],p={title:"Input Dialog"},c=void 0,s={unversionedId:"ox_lib/Interface/Client/input",id:"ox_lib/Interface/Client/input",title:"Input Dialog",description:"The input dialog window allows you to take data from the user",source:"@site/docs/ox_lib/Interface/Client/input.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/input",permalink:"/docs/ox_lib/Interface/Client/input",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/input.md",tags:[],version:"current",lastUpdatedAt:1661334953,formattedLastUpdatedAt:"8/24/2022",frontMatter:{title:"Input Dialog"},sidebar:"ox_lib",previous:{title:"Context Menu",permalink:"/docs/ox_lib/Interface/Client/context"},next:{title:"Menu",permalink:"/docs/ox_lib/Interface/Client/menu"}},d={},m=[{value:"lib.inputDialog",id:"libinputdialog",level:3}],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The input dialog window allows you to take data from the user\nby setting input fields."),(0,i.kt)("h3",{id:"libinputdialog"},"lib.inputDialog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- heading: string\n-- rows: strings array or table\n    -- type: "input" or "number" or "checkbox" or "select" or "slider"\n    -- label: string\n    -- options: table array (optional - used ONLY with "select" type)\n        -- value: string\n        -- label: string\n        -- default: string (optional - any of the values)\n    -- password: boolean (optional - used ONLY with "input" type)\n    -- icon: string (optional - used ONLY with "input" type)\n    -- placeholder: string (optional - used ONLY with "input" or "number" type)\n    -- default: string or number (optional)\n    -- checked: boolean (optional - used ONLY with "checkbox" type)\n    -- min: number (optional - used ONLY with "slider" type)\n    -- max: number (optional - used ONLY with "slider" type)\n    -- step: number (optional - used ONLY with "slider" type)\n\nlib.inputDialog(heading, rows)\n')),(0,i.kt)("p",null,"The callback data is promise based meaning that the thread will\nnot continue executing until the user either sends the data\nor exits the popup."),(0,i.kt)("p",null,"The data returned will be a table, indexes represent the rows\nsent to the dialog, so if we want data from the first field that\nwould be index ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", if we want data from the third field, that would\nbe index ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", etc..."),(0,i.kt)("p",null,"The standard input rows will always return a string, if you want a row to be of\nnumber data type, you can use set the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,i.kt)("p",null,"If a user left an input field empty it will return ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,i.kt)("p",null,"You can also add checkboxes that will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if checked and ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," if unchecked.",(0,i.kt)("br",{parentName:"p"}),"\n","Look at the ",(0,i.kt)("em",{parentName:"p"},"Advanced")," example for it's usage."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using the advanced method you can define ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," with type ",(0,i.kt)("inlineCode",{parentName:"p"},'"input"')," and\nyou can define ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," with type ",(0,i.kt)("inlineCode",{parentName:"p"},'"select"'),"."),(0,i.kt)("p",{parentName:"div"},"Doing so otherwise ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"will"))," result in errors."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"basic",label:"Basic",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local input = lib.inputDialog('Police locker', {'Locker number', 'Locker passcode'})\n\nif input then\n    local lockerNumber = tonumber(input[1])\n    local lockerPasscode = input[2]\n\n    print(lockerNumber, lockerPasscode)\nend\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/RvFFZqv.png",alt:"Example image"}))),(0,i.kt)(o.Z,{value:"advanced",label:"Advanced",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local input = lib.inputDialog(\'Police locker\', {\n    { type = "input", label = "Locker number", placeholder = "123" },\n    { type = "checkbox", label = "Some checkbox" },\n    { type = "input", label = "Locker PIN", password = true, icon = \'lock\' },\n    { type = "checkbox", label = "Some other checkbox", checked = true },\n    { type = \'select\', label = \'Value select\', options = {\n        { value = \'option1\', label = \'Option 1\' },\n        { value = \'option2\', label = \'Option 2\' },\n        { value = \'option3\', label = \'Option 3\'},\n    }},\n    { type = "number", label = "Number counter", default = 12 }\n})\nprint(json.encode(input, {indent=true}))\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/9dBA2d2.png",alt:"Example image"})," ",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ILdFeot.png",alt:"Select example"})))))}b.isMDXComponent=!0}}]);