"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7499],{9613:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>y});var l=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),u=function(e){var a=l.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=u(e.components);return l.createElement(s.Provider,{value:a},e.children)},i={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),y=r,m=d["".concat(s,".").concat(y)]||d[y]||i[y]||n;return t?l.createElement(m,p(p({ref:a},c),{},{components:t})):l.createElement(m,p({ref:a},c))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,p=new Array(n);p[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var u=2;u<n;u++)p[u]=t[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6489:(e,a,t)=>{t.d(a,{Z:()=>p});var l=t(9496),r=t(5924);const n="tabItem_De_A";function p(e){let{children:a,hidden:t,className:p}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,p),hidden:t},a)}},3408:(e,a,t)=>{t.d(a,{Z:()=>y});var l=t(4250),r=t(9496),n=t(5924),p=t(6704),o=t(8876),s=t(4138),u=t(2509);const c="tabList_V3hT",i="tabItem_B35_";function d(e){var a;const{lazy:t,block:p,defaultValue:d,values:y,groupId:m,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=y??v.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),k=(0,o.l)(b,((e,a)=>e.value===a.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:f}=(0,s.U)(),[N,x]=(0,r.useState)(h),S=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=m){const e=T[m];null!=e&&e!==N&&b.some((a=>a.value===e))&&x(e)}const I=e=>{const a=e.currentTarget,t=S.indexOf(a),l=b[t].value;l!==N&&(Z(a),x(l),null!=m&&f(m,String(l)))},w=e=>{var a;let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]??S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]??S[S.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":p},g)},b.map((e=>{let{value:a,label:t,attributes:p}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>S.push(e),onKeyDown:w,onClick:I},p,{className:(0,n.Z)("tabs__item",i,null==p?void 0:p.className,{"tabs__item--active":N===a})}),t??a)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function y(e){const a=(0,p.Z)();return r.createElement(d,(0,l.Z)({key:String(a)},e))}},6365:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var l=t(4250),r=(t(9496),t(9613)),n=t(3408),p=t(6489);const o={title:"Methods"},s=void 0,u={unversionedId:"ox_core/Player/Server/methods",id:"ox_core/Player/Server/methods",title:"Methods",description:"These functions are inherited by instances of CPlayer.",source:"@site/docs/ox_core/Player/Server/methods.md",sourceDirName:"ox_core/Player/Server",slug:"/ox_core/Player/Server/methods",permalink:"/docs/ox_core/Player/Server/methods",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Player/Server/methods.md",tags:[],version:"current",lastUpdatedAt:1669480676,formattedLastUpdatedAt:"Nov 26, 2022",frontMatter:{title:"Methods"},sidebar:"ox_core",previous:{title:"Events",permalink:"/docs/ox_core/Player/Server/events"},next:{title:"Server",permalink:"/docs/ox_core/Vehicle/Server/"}},c={},i=[{value:"player.set",id:"playerset",level:2},{value:"player.setdb",id:"playersetdb",level:2},{value:"player.get",id:"playerget",level:2},{value:"player.getCoords",id:"playergetcoords",level:2},{value:"player.setGroup",id:"playersetgroup",level:2},{value:"player.getGroup",id:"playergetgroup",level:2},{value:"player.getGroup",id:"playergetgroup-1",level:2},{value:"player.hasGroup",id:"playerhasgroup",level:2},{value:"player.getPlayersInScope",id:"playergetplayersinscope",level:2},{value:"player.isPlayerInScope",id:"playerisplayerinscope",level:2},{value:"player.triggerScopedEvent",id:"playertriggerscopedevent",level:2}],d={toc:i};function y(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These functions are inherited by instances of ",(0,r.kt)("a",{parentName:"p",href:"../Server/"},"CPlayer"),"."),(0,r.kt)("h2",{id:"playerset"},"player.set"),(0,r.kt)("p",null,"Update the player's metadata, optionally syncing it with the client."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local key, value = 'iq', 300\nplayer.set(key, value)\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const [key, value] = ['iq', 300];\nplayer.set(key, value);\n")))),(0,r.kt)("h2",{id:"playersetdb"},"player.setdb"),(0,r.kt)("p",null,"Update the player's metadata and store in the DB, optionally syncing it with the client."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local key, value = 'iq', 300\nplayer.setdb(key, value)\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const [key, value] = ['iq', 300];\nplayer.setdb(key, value);\n")))),(0,r.kt)("h2",{id:"playerget"},"player.get"),(0,r.kt)("p",null,"Return the player's metadata. Sending an argument will retrieve a specific metadata key."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local data = player.get()\nlocal iq = player.get('iq')\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const data = player.get();\nconst iq = player.get('iq');\n")))),(0,r.kt)("h2",{id:"playergetcoords"},"player.getCoords"),(0,r.kt)("p",null,"Return the player's world position."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local coords = player.getCoords()\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const coords = player.getCoords();\n")))),(0,r.kt)("h2",{id:"playersetgroup"},"player.setGroup"),(0,r.kt)("p",null,"Updates the player's grade for the given group. Any value below 1 will remove the group from the player."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local group, grade = 'police', 3\nplayer.setGroup(group, grade)\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const [group, grade] = ['police', 3];\nplayer.setGroup(group, grade);\n")))),(0,r.kt)("h2",{id:"playergetgroup"},"player.getGroup"),(0,r.kt)("p",null,"Returns the player's current grade for a given group."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local grade = player.getGroup()\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const grade = player.getGroup();\n")))),(0,r.kt)("h2",{id:"playergetgroup-1"},"player.getGroup"),(0,r.kt)("p",null,"Returns an object of all groups the player is in, with the current grade as the value."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local groups = player.getGroups()\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const groups = player.getGroups();\n")))),(0,r.kt)("h2",{id:"playerhasgroup"},"player.hasGroup"),(0,r.kt)("p",null,"Check if the player is a member of a given group, and returns the matching group name and grade.",(0,r.kt)("br",{parentName:"p"}),"\n","The filter can be a string, array, or object where key is the group, and value is the minimum grade."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local filter = { police = 0, sheriff = 0 }\nlocal group, grade = player.hasGroup(filter)\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const filter = { police: 0, sheriff: 0 };\nconst [group, grade] = player.hasGroup(filter);\n")))),(0,r.kt)("h2",{id:"playergetplayersinscope"},"player.getPlayersInScope"),(0,r.kt)("p",null,"Return an array of all player id's inside the player's scope."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local inScope = player.getPlayersInScope()\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const inScope = player.getPlayersInScope();\n")))),(0,r.kt)("h2",{id:"playerisplayerinscope"},"player.isPlayerInScope"),(0,r.kt)("p",null,"Check if the given source is inside the player's scope."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local target = 2\nlocal inScope = player.isPlayerInScope(target)\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const target = 2;\nconst inScope = player.isPlayerInScope(target);\n")))),(0,r.kt)("h2",{id:"playertriggerscopedevent"},"player.triggerScopedEvent"),(0,r.kt)("p",null,"Trigger a client event for all players in the player's scope."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"player.triggerScopedEvent(eventName, ...)\n"))),(0,r.kt)(p.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"player.triggerScopedEvent(eventName, ...)\n")))))}y.isMDXComponent=!0}}]);