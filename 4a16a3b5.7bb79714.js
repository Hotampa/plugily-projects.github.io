(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{147:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(147)),l={id:"files",title:"Plugin files explained",sidebar_label:"Plugin files explained"},o={unversionedId:"murdermystery/support/files",id:"murdermystery/support/files",isDocsHomePage:!1,title:"Plugin files explained",description:"---",source:"@site/docs/murdermystery/support/plugin-files-explained.md",slug:"/murdermystery/support/files",permalink:"/murdermystery/support/files",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/murdermystery/support/plugin-files-explained.md",version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1614472446,sidebar_label:"Plugin files explained",sidebar:"docs",previous:{title:"Developer API",permalink:"/murdermystery/development/api"},next:{title:"FAQ",permalink:"/murdermystery/support/faq"}},s=[{value:"Basic files",id:"basic-files",children:[{value:"arenas.yml",id:"arenasyml",children:[]},{value:"bungee.yml",id:"bungeeyml",children:[]},{value:"config.yml",id:"configyml",children:[]},{value:"mysql.yml",id:"mysqlyml",children:[]}]},{value:"Additional content",id:"additional-content",children:[{value:"Language and locales",id:"language-and-locales",children:[]},{value:"<strong>Valid localizations (gathered via POEditor API):</strong>",id:"valid-localizations-gathered-via-poeditor-api",children:[]}]},{value:"Stats storage types",id:"stats-storage-types",children:[{value:"<strong>Current stats storage types for player statistics:</strong>",id:"current-stats-storage-types-for-player-statistics",children:[]}]}],c={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"a.k.a Plugin configuration section"),Object(i.b)("h2",{id:"basic-files"},"Basic files"),Object(i.b)("h3",{id:"arenasyml"},"arenas.yml"),Object(i.b)("p",null,"This file is only for in-game usage. It's not recommended to edit it while the server is on! The file contains all information about created arenas."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/arenas.yml"},"Latest arenas.yml"))),Object(i.b)("h3",{id:"bungeeyml"},"bungee.yml"),Object(i.b)("p",null,"BungeeCord configuration is there. You must enable bungee support first in ",Object(i.b)("strong",{parentName:"p"},"config.yml"),". Set ",Object(i.b)("strong",{parentName:"p"},"BungeeActivated")," to ",Object(i.b)("strong",{parentName:"p"},"true")," to enable it."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/bungee.yml"},"Latest bungee.yml"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"}," ",Object(i.b)("strong",{parentName:"p"},"What is MOTD Manager?")," MOTD Manager modifies server's MOTD to make it readable by Server Bungeecord systems like ",Object(i.b)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/timocloud-the-most-efficient-cloud-system.53757/"},"Timo Cloud"),", ",Object(i.b)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/cloudnet-v3-the-cloud-network-environment-technology.42059/"},"CloudNet "),"and ",Object(i.b)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/bungeesigns.6563/"},"Bungee Signs"),". MOTD is based on game state if that option is enabled."))),Object(i.b)("h3",{id:"configyml"},"config.yml"),Object(i.b)("p",null,"config.yml is very well commented. No need to explain more any part of it."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/config.yml"},"Latest config.yml"))),Object(i.b)("h3",{id:"mysqlyml"},"mysql.yml"),Object(i.b)("p",null,"Here you can set up MySQL plugin configuration. You need to enable MySQL first in ",Object(i.b)("strong",{parentName:"p"},"config.yml"),". Set ",Object(i.b)("strong",{parentName:"p"},"DatabaseActivated")," option to ",Object(i.b)("strong",{parentName:"p"},"true"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/mysql.yml"},"Latest mysql.yml"))),Object(i.b)("h2",{id:"additional-content"},"Additional content"),Object(i.b)("h3",{id:"language-and-locales"},"Language and locales"),Object(i.b)("p",null,"Plugin is 95% translatable via ",Object(i.b)("strong",{parentName:"p"},"language.yml")," file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/language.yml"},"Latest language.yml"))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("h2",{parentName:"div",id:"attention"},"Attention"),Object(i.b)("p",{parentName:"div"},"As we got locales the plugin will create other files on the folder ",Object(i.b)("inlineCode",{parentName:"p"},"/locales")),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("strong",{parentName:"p"},"only file you should edit")," is the",Object(i.b)("inlineCode",{parentName:"p"},"language.yml")," on the main plugin folder!"))),Object(i.b)("p",null,"However, you can use localization support which is implemented in MM."),Object(i.b)("p",null,"To change locale of plugin go to ",Object(i.b)("strong",{parentName:"p"},"config.yml")," and modify ",Object(i.b)("strong",{parentName:"p"},"locale")," value."),Object(i.b)("h3",{id:"valid-localizations-gathered-via-poeditor-api"},Object(i.b)("strong",{parentName:"h3"},"Valid localizations ","(","gathered via POEditor API",")",":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"#    default - English language. Uses 'language.yml'.\n#    de - Deutsche sprache          pl - J\u0119zyk polski\n#    fr - Langue fran\xe7aise          cn - \u7b80\u4f53\u4e2d\u6587\n#    zh_tw - \u4e2d\u6587(\u7e41\u9ad4)              kr - \ud55c\uad6d\uc5b4\n#    id - Bhasa Indonesia           hu - Magyar nyelv\n#    cs - \u010cesk\xfd jazyk               ro - Limba rom\xe2n\u0103\n#    vn - Ti\u1ebfng Vi\u1ec7t                it - Lingua italiana\n#    ru - \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a              es - Idioma espa\xf1ol\n#    nl - Nederlandse taal          pt_br - Portugu\xeas (Brasil)\n#    tr - T\xfcrk dili                 sk - Slovensk\xfd jazyk\n#    ja - Japanese                  af - Afrikaans\n#    dk - Danish                    th - Thai\n#    uk - Ukrainian\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"}," ",Object(i.b)("a",{parentName:"p",href:"https://translate.plugily.xyz"},"You can always translate our plugin for free by joining here ","(","click",")")))),Object(i.b)("h2",{id:"stats-storage-types"},"Stats storage types"),Object(i.b)("h3",{id:"current-stats-storage-types-for-player-statistics"},Object(i.b)("strong",{parentName:"h3"},"Current stats storage types for player statistics:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Flat file ","(",".yml",")"," - enabled by default"),Object(i.b)("li",{parentName:"ul"},"MySQL ","(","database",")"," - can be enabled in config.yml ","(","see ",Object(i.b)("a",{parentName:"li",href:"/murdermystery/support/files#mysql-yml"},"mysql.yml"),")")))}p.isMDXComponent=!0}}]);