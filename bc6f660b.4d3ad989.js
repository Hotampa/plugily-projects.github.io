(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(147)),o={id:"faq",title:"FAQ",sidebar_label:"FAQ"},l={unversionedId:"villagedefense/support/faq",id:"villagedefense/support/faq",isDocsHomePage:!1,title:"FAQ",description:"---",source:"@site/docs/villagedefense/support/faq.md",slug:"/villagedefense/support/faq",permalink:"/villagedefense/support/faq",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/villagedefense/support/faq.md",version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1614460980,sidebar_label:"FAQ",sidebar:"docs",previous:{title:"Plugin files explained",permalink:"/villagedefense/support/files"},next:{title:"Useful server admin tips",permalink:"/villagedefense/support/servertips"}},s=[{value:"<strong>Limitation of liability disclaimer</strong>",id:"limitation-of-liability-disclaimer",children:[]},{value:"Supported versions of Village Defense",id:"supported-versions-of-village-defense",children:[]},{value:"Players can&#39;t join through signs",id:"players-cant-join-through-signs",children:[]},{value:"How power-ups work?",id:"how-power-ups-work",children:[{value:"<strong>There are few types of them right now:</strong>",id:"there-are-few-types-of-them-right-now",children:[]}]},{value:"Special shop items",id:"special-shop-items",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"Some basic questions and answers"),Object(i.b)("h2",{id:"limitation-of-liability-disclaimer"},Object(i.b)("strong",{parentName:"h2"},"Limitation of liability disclaimer")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Village Defense")," plugin ",Object(i.b)("strong",{parentName:"p"},"SHOULD BE RUN")," on a separate world when using it on multi-mode servers like Factions, Survival, SkyBlock etc."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"What Village Defense modifies in the world:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Blocks mob spawning other than Village Defense ones"),Object(i.b)("li",{parentName:"ul"},"Cleans hoppers inventories"),Object(i.b)("li",{parentName:"ul"},"Manipulates Villager entities"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Might not be compatible with other minigames ","(","zombies/villagers will be invisible",")"))),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Using Village Defense you accept GPLv3 license and limitations of liability that Village Defense can cause, please become acquainted with following warnings before using Village Defense on a production server.")))),Object(i.b)("h2",{id:"supported-versions-of-village-defense"},"Supported versions of Village Defense"),Object(i.b)("p",null,"Supported versions are currently 1.11 - 1.16.XIf your plugin doesn't startup and you don't have this version you're receiving this message:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"  _   _           _                                                    _                _\n | \\ | |   ___   | |_     ___   _   _   _ __    _ __     ___    _ __  | |_    ___    __| |\n |  \\| |  / _ \\  | __|   / __| | | | | | '_ \\  | '_ \\   / _ \\  | '__| | __|  / _ \\  / _` |\n | |\\  | | (_) | | |_    \\__ \\ | |_| | | |_) | | |_) | | (_) | | |    | |_  |  __/ | (_| |\n |_| \\_|  \\___/   \\__|   |___/  \\__,_| | .__/  | .__/   \\___/  |_|     \\__|  \\___|  \\__,_|\n                                       |_|     |_|\nYour server version is not supported by Village Defense!\nSadly, we must shut off. Maybe you consider changing your server version?\n")),Object(i.b)("h2",{id:"players-cant-join-through-signs"},"Players can't join through signs"),Object(i.b)("p",null,"This is a very common problem in every minigame plugin."),Object(i.b)("p",null,"It's ",Object(i.b)("strong",{parentName:"p"},"caused by spawn protection")," feature in vanilla Minecraft."),Object(i.b)("p",null,"To disable this go to ",Object(i.b)("strong",{parentName:"p"},"server.properties")," and change ",Object(i.b)("strong",{parentName:"p"},"spawn-protection")," value ",Object(i.b)("strong",{parentName:"p"},"to 0"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Info!")," You can no longer create signs in radius of spawn protection since ",Object(i.b)("strong",{parentName:"p"},"Village Defense 4.2.1"),", you'll be warned instead."))),Object(i.b)("h2",{id:"how-power-ups-work"},"How power-ups work?"),Object(i.b)("p",null,"Power-ups added in Village Defense ",Object(i.b)("strong",{parentName:"p"},"3.3.0")," enhances your game a bit."),Object(i.b)("h4",{id:"requires-holographic-displays-to-work"},Object(i.b)("strong",{parentName:"h4"},"Requires")," ",Object(i.b)("a",{parentName:"h4",href:"https://dev.bukkit.org/projects/holographic-displays"},Object(i.b)("strong",{parentName:"a"},"Holographic Displays"))," ",Object(i.b)("strong",{parentName:"h4"},"to work!")),Object(i.b)("h3",{id:"there-are-few-types-of-them-right-now"},Object(i.b)("strong",{parentName:"h3"},"There are few types of them right now:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Map clean power-up ","(","Cleans map from all zombies that are spawned, not every zombie from the pool",")"),Object(i.b)("li",{parentName:"ul"},"Double damage power-up ","(","Every player gets Strength I potion for 15 seconds by default",")"),Object(i.b)("li",{parentName:"ul"},"Healing power-up ","(","Every player gets Regeneration I for 10 seconds by default",")"),Object(i.b)("li",{parentName:"ul"},"Golem raid power-up ","(","3 golems are spawned in the village by default",")"),Object(i.b)("li",{parentName:"ul"},"One shot one kill power-up ","(","Every zombie can be killed for one hit ","(","Strength 255",")"," for 15 seconds by default",")")),Object(i.b)("p",null,"Every option and messages from these power-ups are configurable. Drop chance, time of power-up, disabling/enabling specific power-ups are configurable via ",Object(i.b)("strong",{parentName:"p"},"config.yml"),". Messages are configurable via ",Object(i.b)("strong",{parentName:"p"},"language.yml"),"."),Object(i.b)("h2",{id:"special-shop-items"},"Special shop items"),Object(i.b)("p",null,"There are few special shop items that you can put into the shop to enhance gameplay a bit."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Entity items"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Spawn Wolf item Item for spawning wolves in game. It should be named 'Spawn Wolf' or like you've translated it in language.yml under ",Object(i.b)("inlineCode",{parentName:"li"},"In-Game.Messages.Shop-Messages.Wolf-Item-Name"),". It can be any item, ",Object(i.b)("strong",{parentName:"li"},"only display name of item will be checked while buying it!")),Object(i.b)("li",{parentName:"ul"},"Spawn Golem item Item for spawning golems in game. It should be named 'Spawn Golem' or like you've translated it in language.yml under ",Object(i.b)("inlineCode",{parentName:"li"},"In-Game.Messages.Shop-Messages.Golem-Item-Name"),". It can be any item, ",Object(i.b)("strong",{parentName:"li"},"only display name of item will be checked while buying it!")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Special kit items"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Soon")))))}c.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);