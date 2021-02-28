(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),i=(a(0),a(147)),l={id:"cmdsandperms",title:"Commands and permissions",sidebar_label:"Commands and permissions"},b={unversionedId:"villagedefense/setup/cmdsandperms",id:"villagedefense/setup/cmdsandperms",isDocsHomePage:!1,title:"Commands and permissions",description:"---",source:"@site/docs/villagedefense/setup/cmd-perms.md",slug:"/villagedefense/setup/cmdsandperms",permalink:"/villagedefense/setup/cmdsandperms",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/villagedefense/setup/cmd-perms.md",version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1614472446,sidebar_label:"Commands and permissions",sidebar:"docs",previous:{title:"Simple Setup",permalink:"/villagedefense/setup/simple"},next:{title:"Free Maps",permalink:"/villagedefense/setup/maps"}},s=[{value:"Player",id:"player",children:[]},{value:"Admin",id:"admin",children:[]},{value:"Basic permissions",id:"basic-permissions",children:[]},{value:"Custom permissions",id:"custom-permissions",children:[]},{value:"Kits permissions",id:"kits-permissions",children:[]}],o={toc:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"Overview about all commands and permissions"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"[","required argument","]"," ","(","optional argument",")"))),Object(i.b)("h2",{id:"player"},"Player"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Command"),Object(i.b)("th",{parentName:"tr",align:null},"Permission"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd join ","[arena]"),Object(i.b)("td",{parentName:"tr",align:null},"villagedefense.join.%arena% villagedefense.join.* (all arenas)"),Object(i.b)("td",{parentName:"tr",align:null},"Joins specified arena")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd randomjoin"),Object(i.b)("td",{parentName:"tr",align:null},"Requires permission villagedefense.join.* to access all arenas"),Object(i.b)("td",{parentName:"tr",align:null},"Joins random not started arena")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd arenas"),Object(i.b)("td",{parentName:"tr",align:null},"villagedefense.arenas"),Object(i.b)("td",{parentName:"tr",align:null},"Overview over all arenas in one GUI. Select one to join")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd stats (online player)"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Shows your stats")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd leave"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Quits current game. You can disable game quit in config.yml")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd top ","[statistic]"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Shows top 10 users from requested statistic")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd selectkit"),Object(i.b)("td",{parentName:"tr",align:null},"villagedefense.command.selectkit"),Object(i.b)("td",{parentName:"tr",align:null},"Change kit while being in game")))),Object(i.b)("h2",{id:"admin"},"Admin"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"}," You can use ",Object(i.b)("inlineCode",{parentName:"p"},"villagedefense.admin.*")," permission to give all admin commands permission"))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Command"),Object(i.b)("th",{parentName:"tr",align:null},"Permission"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Valid excecutors"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.updatenotify")),Object(i.b)("td",{parentName:"tr",align:null},"Notifies about plugin update on join"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.command.override")),Object(i.b)("td",{parentName:"tr",align:null},"Allows to use every command while being in-game"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.sign.create")," ",Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.sign.break")),Object(i.b)("td",{parentName:"tr",align:null},"You can create or break signs with those permissions"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd create ","[","arena","]"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.create")),Object(i.b)("td",{parentName:"tr",align:null},"Creates new arena with specified name"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vd ","[","arena","]"," edit"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.create")),Object(i.b)("td",{parentName:"tr",align:null},"Edits existing arena"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda list"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.list")),Object(i.b)("td",{parentName:"tr",align:null},"Prints list of available arenas"),Object(i.b)("td",{parentName:"tr",align:null},"Player/Console")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda stop"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.stopgame")),Object(i.b)("td",{parentName:"tr",align:null},"Stops game you're playing"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda forcestart"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.forcestart")),Object(i.b)("td",{parentName:"tr",align:null},"Force starts game you're in"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda respawn ","(","player",")"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.respawn villagedefense.admin.respawn.others")),Object(i.b)("td",{parentName:"tr",align:null},"Respawn you/specified player in your arena"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda spychat"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.spychat")),Object(i.b)("td",{parentName:"tr",align:null},"Toggles all arenas chat visibility ","(","multi-arena feature only",")"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda reload"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.reload")),Object(i.b)("td",{parentName:"tr",align:null},"Reloads all game instances ",Object(i.b)("strong",{parentName:"td"},"they will be stopped.  Usage highly discouraged!")),Object(i.b)("td",{parentName:"tr",align:null},"Player/Console")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda delete ","[","arena","]"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.delete")),Object(i.b)("td",{parentName:"tr",align:null},"Deletes specified arena"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda tp ","[","arena","]"," ","[","location type","]"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.teleport")),Object(i.b)("td",{parentName:"tr",align:null},"Teleports to specified arena location ",Object(i.b)("strong",{parentName:"td"},"Location types:")," START, END, LOBBY"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda clear ","[","mobtype","]"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.clear")),Object(i.b)("td",{parentName:"tr",align:null},"Clears specified mobs in your game"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda addorbs ","[","amount","]"," ","(","player",")"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.addorbs villagedefense.admin.addorbs.others")),Object(i.b)("td",{parentName:"tr",align:null},"Adds orbs ","(","game currency",")"," to you/specified player"),Object(i.b)("td",{parentName:"tr",align:null},"Player/Console when player argument is specified")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda addlevel ","[","number","]"," ","(","player",")"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.addlevel")),Object(i.b)("td",{parentName:"tr",align:null},"Add levels to player"),Object(i.b)("td",{parentName:"tr",align:null},"Player/Console")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda setlevel ","[","number","]"," ","(","player",")"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.setlevel")),Object(i.b)("td",{parentName:"tr",align:null},"Set levels of player"),Object(i.b)("td",{parentName:"tr",align:null},"Player/Console")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda setwave ","[","number","]"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.setwave")),Object(i.b)("td",{parentName:"tr",align:null},"Sets wave of game"),Object(i.b)("td",{parentName:"tr",align:null},"Player")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/vda setprice ","[","amount","]"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"villagedefense.admin.setprice")),Object(i.b)("td",{parentName:"tr",align:null},"Sets price of holding item ","(","use this for shop otherwise item won't work",")"),Object(i.b)("td",{parentName:"tr",align:null},"Player")))),Object(i.b)("h2",{id:"basic-permissions"},"Basic permissions"),Object(i.b)("p",null,"Basic permissions are default permissions for games. Default permissions can be found in ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"config.yml"),".")," You can edit them to your likings."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},'Basic-Permissions:\n  Full-Games-Permission: "villagedefense.fullgames"\n  Vip-Permission: "villagedefense.vip"\n  Mvp-Permission: "villagedefense.mvp"\n  Elite-Permission: "villagedefense.elite"\n  Arena-Edit-Permission: "villagedefense.edit"\n  Join-Permission: "villagedefense.join.<arena>"\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Full-Games-Permission")," - Permission to join full arenas"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Vip-Permission")," - Gives permission to ",Object(i.b)("strong",{parentName:"p"},"donator kits"),", joining ",Object(i.b)("strong",{parentName:"p"},"full games")," and getting ",Object(i.b)("strong",{parentName:"p"},"50% more orbs")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Mvp-Permission")," - Same as ",Object(i.b)("inlineCode",{parentName:"p"},"Vip-Permission")," but gives ",Object(i.b)("strong",{parentName:"p"},"100% more orbs")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Elite-Permission")," - Same as ",Object(i.b)("inlineCode",{parentName:"p"},"Vip-Permission")," but gives ",Object(i.b)("strong",{parentName:"p"},"150% more orbs")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Arena-Edit-Permission")," - Permission for creating arenas, overrides disabled commands option via config.yml"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Join-Permission")," - Permission to join arenas")),Object(i.b)("h2",{id:"custom-permissions"},"Custom permissions"),Object(i.b)("p",null,"Custom permissions are used for giving your players more orbs in game. Nothing more, nothing less."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Warn!")," Using dots ",Object(i.b)("inlineCode",{parentName:"p"},".")," in custom permissions will not work and will break permission, don't use them!"))),Object(i.b)("p",null,"Custom permissions can be set up in ",Object(i.b)("strong",{parentName:"p"},"config.yml"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"CustomPermissions:\n  player-booster: 10\n  vip-booster: 100\n  staff-booster: 1000\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"player-booster")," - Gives player with this permission 10% more orbs on pickup"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"vip-booster")," - Gives player 100% more orbs"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"staff-booster")," - 1000% more orbs")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Avoid low percent values!")," Remember that 10% more orbs are actually nothing because it's 5~8 orbs + ",Object(i.b)("strong",{parentName:"p"},"only 10% of this value more")," so you won't see any significant increase, use higher values too see the difference"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Permissions can be combined!")," Giving player permission ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"player.booster"))," and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vip.booster"))," will receive 110% more orbs on the pickup!"))),Object(i.b)("h2",{id:"kits-permissions"},"Kits permissions"),Object(i.b)("p",null,"Every kit has its own permission node to access it. Even if it's level kit, you can still unlock it getting its permission."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Archer kit permission - ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"villagedefense.kit.archer"))),Object(i.b)("li",{parentName:"ul"},"Tornado kit permission - ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"villagedefense.kit.tornado"))),Object(i.b)("li",{parentName:"ul"},"Heavy Tank kit permission - ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"villagedefense.kit.heavytank")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Info!")," ",Object(i.b)("strong",{parentName:"p"},"Premium kits")," also unlocks with Vip/Mvp or Elite permissions and ",Object(i.b)("strong",{parentName:"p"},"leveled kits")," are unlocked too when certain level is reached."))))}c.isMDXComponent=!0},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=n,O=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return a?r.a.createElement(O,b(b({ref:t},o),{},{components:a})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);