import{i as h,ao as C,r as g,l as H,o as d,c as f,g as o,A as s,h as y,T as _,d as u,t as r,J as k,a8 as z,ap as b}from"./index.8e9cc30a.js";import{_ as v}from"./index.vue.b7077a39.js";const w={key:0,class:"w-[80%] fixed top-1/3 left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:w-[35%]"},T={class:"text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2"},V={class:"text-base text-zinc-900 dark:text-zinc-200 mb-2"},S={class:"flex justify-end"},N={name:"index",props:{title:{type:String},content:{type:String,required:!0},cancelText:{type:String,default:"\u53D6\u6D88"},confirmText:{type:String,default:"\u786E\u5B9A"},cancelHandler:{type:Function},confirmHandler:{type:Function},close:{type:Function}},setup(e){const n=e;C(p=>({"4710ffa0":c}));const t=g(!1),i=()=>{t.value=!0};H(()=>{i()});const c="0.5s",l=()=>{n.cancelHandler&&n.cancelHandler(),a()},m=()=>{n.confirmHandler&&n.confirmHandler(),a()},a=()=>{t.value=!1,setTimeout(()=>{n.close&&n.close()},parseInt(c.replace("0.","").replace("s","")*100))};return(p,x)=>(d(),f("div",null,[o(_,{name:"fade"},{default:s(()=>[t.value?(d(),f("div",{key:0,onClick:a,class:"w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"})):y("",!0)]),_:1}),o(_,{name:"up"},{default:s(()=>[t.value?(d(),f("div",w,[u("div",T,r(e.title),1),u("div",V,r(e.content),1),u("div",S,[o(v,{type:"info",class:"mr-2",onClick:l},{default:s(()=>[k(r(e.cancelText),1)]),_:1}),o(v,{type:"primary",onClick:m},{default:s(()=>[k(r(e.confirmText),1)]),_:1})])])):y("",!0)]),_:1})]))}},B=h(N,[["__scopeId","data-v-4f465e3e"]]),I=(e,n,t="\u53D6\u6D88",i="\u786E\u5B9A")=>new Promise((c,l)=>{e&&!n&&(n=e,e="");const x=z(B,{title:e,content:n,cancelText:t,confirmText:i,confirmHandler:()=>{c()},cancelHandler:()=>{l(new Error("\u53D6\u6D88\u6309\u94AE\u70B9\u51FB"))},close:()=>{b(null,document.body)}});b(x,document.body)});export{I as c};