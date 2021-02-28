(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{147:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,s=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return r?a.a.createElement(s,c(c({ref:t},p),{},{components:r})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),l=(r(0),r(147)),o={id:"scoreboard",title:"Scoreboard",sidebar_label:"Scoreboard"},c={unversionedId:"murdermystery/placeholders/scoreboard",id:"murdermystery/placeholders/scoreboard",isDocsHomePage:!1,title:"Scoreboard",description:"---",source:"@site/docs/murdermystery/placeholders/scoreboard.md",slug:"/murdermystery/placeholders/scoreboard",permalink:"/murdermystery/placeholders/scoreboard",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/murdermystery/placeholders/scoreboard.md",version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1614471297,sidebar_label:"Scoreboard",sidebar:"docs",previous:{title:"PlaceholderAPI",permalink:"/murdermystery/placeholders/placeholderapi"},next:{title:"Developer API",permalink:"/murdermystery/development/api"}},b=[],p={toc:b};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("p",null,"Find your variable for the ingame scoreboard"),Object(l.b)("p",null,"These are the ",Object(l.b)("strong",{parentName:"p"},"internal")," placeholders for MurderMystery. They are included with the plugin, so you do not have to download them."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variables"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%MIN","_","PLAYERS%"),Object(l.b)("td",{parentName:"tr",align:null},"Minimum players size")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%MAX","_","PLAYERS%"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum players size")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%PLAYERS%"),Object(l.b)("td",{parentName:"tr",align:null},"Size of players in arena")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%INNOCENTS%"),Object(l.b)("td",{parentName:"tr",align:null},"Amount of innocent players alive ","(","including detective",")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%TIME%"),Object(l.b)("td",{parentName:"tr",align:null},"Current arena timer ","(","ex. 10 seconds before start",")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%FORMATTED","_","TIME%"),Object(l.b)("td",{parentName:"tr",align:null},"Formatted above-mentioned placeholder ","(","ex. 0m10s",")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%MAPNAME%"),Object(l.b)("td",{parentName:"tr",align:null},"Name of the map")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%SCORE%"),Object(l.b)("td",{parentName:"tr",align:null},"Current in-game score of player")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%KILLS%"),Object(l.b)("td",{parentName:"tr",align:null},"Current in-game kills of murderer")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%ROLE%"),Object(l.b)("td",{parentName:"tr",align:null},"Role of player - murderer, innocent, detective")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%DETECTIVE","_","STATUS%"),Object(l.b)("td",{parentName:"tr",align:null},"Status of detective - alive, bow dropped, bow picked")))),Object(l.b)("p",null,"You can also use the ",Object(l.b)("a",{parentName:"p",href:"https://www.spigotmc.org/wiki/placeholderapi-placeholders/"},Object(l.b)("strong",{parentName:"a"},"placeholders")," "),"from ",Object(l.b)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/placeholderapi.6245/"},Object(l.b)("strong",{parentName:"a"},"PlaceholderAPI")),"."))}i.isMDXComponent=!0}}]);