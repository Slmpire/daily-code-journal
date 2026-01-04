import{r as m,a as B,R as I}from"./react-vendor-wGySg1uH.js";import{g as U,o as F,s as J,a as H,c as q}from"./firebase-auth-BZMryOwu.js";import{H as z}from"./firebase-core-KR78PDdE.js";import{g as Y,e as G,c as V,q as K,o as Z,a as X,d as w,s as y,b as $}from"./firebase-firestore-CdMnUkV4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();var O={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=m,ee=Symbol.for("react.element"),te=Symbol.for("react.fragment"),se=Object.prototype.hasOwnProperty,oe=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,re={key:!0,ref:!0,__self:!0,__source:!0};function P(s,t,o){var r,n={},l=null,c=null;o!==void 0&&(l=""+o),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)se.call(t,r)&&!re.hasOwnProperty(r)&&(n[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:ee,type:s,key:l,ref:c,props:n,_owner:oe.current}}k.Fragment=te;k.jsx=P;k.jsxs=P;O.exports=k;var e=O.exports,S={},T=B;S.createRoot=T.createRoot,S.hydrateRoot=T.hydrateRoot;const ne={apiKey:"AIzaSyCzkW-duMJG0oofxiP1_RuUxeSZTFE3OPg",authDomain:"daily-code-journal.firebaseapp.com",projectId:"daily-code-journal",storageBucket:"daily-code-journal.firebasestorage.app",messagingSenderId:"120707589758",appId:"1:120707589758:web:a805f734ca9fb204d21a2f"},W=z(ne),v=U(W),f=Y(W);G(f).catch(s=>{s.code==="failed-precondition"?console.warn("Multiple tabs open, persistence enabled in first tab only"):s.code==="unimplemented"&&console.warn("Browser does not support offline persistence")});function ie(){const[s,t]=m.useState(null),[o,r]=m.useState(!0);return m.useEffect(()=>F(v,d=>{t(d),r(!1)}),[]),{user:s,loading:o,login:async(c,d)=>{try{return{success:!0,user:(await H(v,c,d)).user}}catch(a){if(a.code==="auth/user-not-found"||a.code==="auth/invalid-credential")try{return{success:!0,user:(await q(v,c,d)).user,newUser:!0}}catch(i){return{success:!1,error:i.message}}return{success:!1,error:a.message}}},logout:async()=>{try{return await J(v),{success:!0}}catch(c){return{success:!1,error:c.message}}}}}const ae=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),R=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),e.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),le=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),A=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),ce=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),e.jsx("polyline",{points:"16 17 21 12 16 7"}),e.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),de=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),M=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),he=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"8",r:"7"}),e.jsx("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"})]}),ue=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),me=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),pe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]});function xe({onLogin:s}){const[t,o]=m.useState(""),[r,n]=m.useState(""),[l,c]=m.useState(!1),[d,a]=m.useState(""),i=async h=>{h.preventDefault(),a(""),c(!0);const p=await s(t,r);p.success||a(p.error),c(!1)};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-4 text-purple-300",children:e.jsx(R,{})}),e.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Daily Code Journal"}),e.jsx("p",{className:"text-purple-200",children:"Sign in to continue"})]}),e.jsxs("form",{onSubmit:i,children:[e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"email",value:t,onChange:h=>o(h.target.value),placeholder:"your.email@example.com",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400",required:!0,disabled:l})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"password",value:r,onChange:h=>n(h.target.value),placeholder:"Password (min 6 characters)",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400",required:!0,minLength:6,disabled:l})}),d&&e.jsx("div",{className:"mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm",children:d}),e.jsx("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Loading...":"Sign In / Sign Up"})]}),e.jsx("p",{className:"text-white/60 text-sm text-center mt-4",children:"Your data is securely stored in the cloud and synced across devices."})]})})}function ge({profile:s,setProfile:t,onSave:o}){return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-4 text-purple-300",children:e.jsx(de,{})}),e.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Setup Your Profile"}),e.jsx("p",{className:"text-purple-200",children:"Tell us a bit about yourself"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"Full Name"}),e.jsx("input",{type:"text",value:s.name,onChange:r=>t({...s,name:r.target.value}),placeholder:"John Doe",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"Nickname / GitHub Username"}),e.jsx("input",{type:"text",value:s.nickname,onChange:r=>t({...s,nickname:r.target.value}),placeholder:"johndoe",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"})]}),e.jsx("button",{onClick:()=>o(s),className:"w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all",children:"Save Profile"})]})]})})}function fe({currentStreak:s,totalEntries:t,completionScore:o}){return e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-200 mb-1",children:[e.jsx("div",{className:"w-5 h-5",children:e.jsx(A,{})}),e.jsx("span",{className:"text-sm",children:"Current Streak"})]}),e.jsxs("div",{className:"text-3xl font-bold text-white",children:[s," days"]})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-200 mb-1",children:[e.jsx("div",{className:"w-5 h-5",children:e.jsx(le,{})}),e.jsx("span",{className:"text-sm",children:"Total Entries"})]}),e.jsx("div",{className:"text-3xl font-bold text-white",children:t})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-200 mb-1",children:[e.jsx("div",{className:"w-5 h-5",children:e.jsx(he,{})}),e.jsx("span",{className:"text-sm",children:"Completion Rate"})]}),e.jsxs("div",{className:"text-3xl font-bold text-white",children:[o,"%"]})]})]})}function we({streakHistory:s}){return s.length===0?null:e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-6",children:[e.jsxs("h3",{className:"text-white font-semibold mb-3 flex items-center gap-2",children:[e.jsx(A,{})," All Streaks"]}),e.jsx("div",{className:"space-y-2",children:s.map((t,o)=>e.jsxs("div",{className:"bg-white/10 rounded-lg p-3 flex justify-between items-center",children:[e.jsxs("span",{className:"text-white",children:[t.start," to ",t.end]}),e.jsxs("span",{className:"text-purple-300 font-bold",children:[t.count," days 🔥"]})]},o))})]})}const be=["😊","🤔","😤","🔥","😴","🎉","😅","💪"];function je({selectedDate:s,setSelectedDate:t,currentEntry:o,setCurrentEntry:r,onSave:n,onExportMarkdown:l,onPrint:c}){const d=()=>new Date().toISOString().split("T")[0];return e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl",children:[e.jsxs("div",{className:"mb-6",children:[e.jsxs("label",{className:"flex items-center gap-2 text-white mb-2 font-medium",children:[e.jsx("div",{className:"w-5 h-5",children:e.jsx(ae,{})}),"Select Date"]}),e.jsx("input",{type:"date",value:s,onChange:a=>t(a.target.value),max:d(),className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"What I worked on"}),e.jsx("textarea",{value:o.worked,onChange:a=>r({...o,worked:a.target.value}),placeholder:"Describe what you built or worked on today...",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-24"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"What I learned"}),e.jsx("textarea",{value:o.learned,onChange:a=>r({...o,learned:a.target.value}),placeholder:"New concepts, techniques, or insights...",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-24"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"Challenges"}),e.jsx("textarea",{value:o.challenges,onChange:a=>r({...o,challenges:a.target.value}),placeholder:"Bugs, obstacles, or tough problems...",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-20"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"Tomorrow's goals"}),e.jsx("textarea",{value:o.goals,onChange:a=>r({...o,goals:a.target.value}),placeholder:"What you want to accomplish next...",className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-20"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"Did you complete today's tasks?"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("button",{onClick:()=>r({...o,tasksCompleted:!0}),className:`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${o.tasksCompleted?"bg-green-500 text-white":"bg-white/20 text-white/70 hover:bg-white/30"}`,children:[e.jsx(me,{})," Yes"]}),e.jsxs("button",{onClick:()=>r({...o,tasksCompleted:!1}),className:`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${o.tasksCompleted?"bg-white/20 text-white/70 hover:bg-white/30":"bg-red-500 text-white"}`,children:[e.jsx(pe,{})," No"]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"Today's mood"}),e.jsx("div",{className:"flex gap-2 flex-wrap",children:be.map(a=>e.jsx("button",{onClick:()=>r({...o,mood:a}),className:`text-3xl p-3 rounded-lg transition-all ${o.mood===a?"bg-purple-500 scale-110":"bg-white/20 hover:bg-white/30"}`,children:a},a))})]})]}),e.jsxs("div",{className:"flex gap-3 mt-6 flex-wrap",children:[e.jsx("button",{onClick:n,className:"flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all",children:"💾 Save Entry"}),e.jsx("button",{onClick:l,className:"px-6 bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30",children:"⬇️ Export .md"}),e.jsxs("button",{onClick:c,className:"px-6 bg-green-500/30 text-white py-3 rounded-lg font-semibold hover:bg-green-500/40 transition-all border border-green-400/30 flex items-center gap-2",title:"Print or Save as PDF",children:[e.jsx(M,{})," Print"]})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg",children:e.jsxs("p",{className:"text-blue-100 text-sm",children:[e.jsx("strong",{children:"📝 Daily workflow:"})," Write entry → Mark tasks → Save → Export .md → Commit to GitHub!"]})})]})}function ve({entries:s,onSelectEntry:t,onExportAll:o,notificationTime:r,notificationsEnabled:n,onToggleNotifications:l,onSaveNotificationTime:c}){return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-white",children:"All Entries"}),e.jsxs("button",{onClick:o,className:"px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2",children:[e.jsx(M,{})," Export All"]})]}),Object.keys(s).length===0?e.jsx("p",{className:"text-white/60 text-center py-8",children:"No entries yet. Start writing!"}):e.jsx("div",{className:"space-y-2",children:Object.keys(s).sort().reverse().map(d=>{const a=s[d];return e.jsx("button",{onClick:()=>t(d),className:"w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-white font-medium block",children:d}),e.jsx("span",{className:"text-white/60 text-sm",children:a.tasksCompleted?"✅ Completed":"❌ Not Completed"})]}),e.jsx("span",{className:"text-2xl",children:a.mood})]})},d)})})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center gap-2",children:[e.jsx(ue,{})," Reminder Settings"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-white",children:"Enable daily reminders"}),e.jsx("button",{onClick:l,className:`px-4 py-2 rounded-lg font-medium transition-all ${n?"bg-green-500 text-white":"bg-white/20 text-white/70"}`,children:n?"ON":"OFF"})]}),n&&e.jsxs("div",{children:[e.jsx("label",{className:"text-white font-medium mb-2 block",children:"Reminder Time"}),e.jsx("input",{type:"time",value:r,onChange:d=>c(d.target.value),className:"w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"})]})]})]})]})}function ye(s){const[t,o]=m.useState({}),[r,n]=m.useState(!0);m.useEffect(()=>{s&&l()},[s]);const l=async()=>{if(s)try{const a=V(f,"users",s,"entries"),i=K(a,Z("date","desc")),h=await X(i),p={};h.forEach(x=>{const u=x.data();p[u.date]={worked:u.worked||"",learned:u.learned||"",challenges:u.challenges||"",goals:u.goals||"",mood:u.mood||"😊",tasksCompleted:u.tasksCompleted||!1}}),o(p),await c(p)}catch(a){console.error("Error loading entries:",a)}finally{n(!1)}},c=async a=>{try{const i=localStorage.getItem(`journal-entries-${s}`);if(i){const h=JSON.parse(i);let p=0;for(const[x,u]of Object.entries(h))a[x]||(await d(x,u),a[x]=u,p++);p>0&&(console.log(`✅ Migrated ${p} entries from localStorage to Firestore`),o(a),localStorage.removeItem(`journal-entries-${s}`),localStorage.removeItem(`streak-history-${s}`))}}catch(i){console.error("Error migrating data:",i)}},d=async(a,i)=>{if(!(!s||!a))try{const h=w(f,"users",s,"entries",a);return await y(h,{date:a,worked:i.worked||"",learned:i.learned||"",challenges:i.challenges||"",goals:i.goals||"",mood:i.mood||"😊",tasksCompleted:i.tasksCompleted||!1,updatedAt:new Date().toISOString()}),o(p=>({...p,[a]:i})),{success:!0}}catch(h){return console.error("Error saving entry:",h),{success:!1,error:h.message}}};return{entries:t,loading:r,saveEntry:d,reloadEntries:l}}function ke(s){const t=Object.keys(s).sort();if(t.length===0)return[];const o=[];let r={start:t[0],end:t[0],count:1};for(let n=1;n<t.length;n++){const l=new Date(t[n-1]),c=new Date(t[n]),d=Math.floor((c-l)/(1e3*60*60*24));d===1?(r.end=t[n],r.count++):d>1&&(o.push({...r}),r={start:t[n],end:t[n],count:1})}return o.push(r),o}function Ne(s){if(s.length===0)return 0;const t=s[s.length-1],o=new Date().toISOString().split("T")[0],r=new Date;r.setDate(r.getDate()-1);const n=r.toISOString().split("T")[0];return t.end===o||t.end===n?t.count:0}function Se(s,t,o){const l=`# ${new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

**Author:** ${o.name} (@${o.nickname})
**Tasks Completed:** ${t.tasksCompleted?"✅ Yes":"❌ No"}

## What I worked on
${t.worked||"Nothing recorded"}

## What I learned
${t.learned||"Nothing recorded"}

## Challenges
${t.challenges||"None"}

## Tomorrow's goals
${t.goals||"Not set"}

## Mood: ${t.mood}
`,c=new Blob([l],{type:"text/markdown"}),d=URL.createObjectURL(c),a=document.createElement("a");a.href=d,a.download=`${s}.md`,a.click(),URL.revokeObjectURL(d)}function Ce(s,t,o){const n=new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),l=window.open("","_blank");l.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Journal Entry - ${n}</title>
      <style>
        body {
          font-family: 'Georgia', serif;
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 3px solid #3498db;
          padding-bottom: 10px;
        }
        h2 {
          color: #34495e;
          margin-top: 30px;
          margin-bottom: 10px;
        }
        .author {
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 30px;
        }
        .status {
          display: inline-block;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .completed { background: #d4edda; color: #155724; }
        .incomplete { background: #f8d7da; color: #721c24; }
        .content {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          white-space: pre-wrap;
        }
        .mood {
          font-size: 2em;
          text-align: center;
          margin: 20px 0;
        }
        @media print {
          body { margin: 20px; }
        }
      </style>
    </head>
    <body>
      <h1>${n}</h1>
      <p class="author">Author: ${o.name} (@${o.nickname})</p>
      <div class="status ${t.tasksCompleted?"completed":"incomplete"}">
        ${t.tasksCompleted?"✅ Tasks Completed":"❌ Tasks Not Completed"}
      </div>
      
      <h2>What I worked on</h2>
      <div class="content">${t.worked||"Nothing recorded"}</div>
      
      <h2>What I learned</h2>
      <div class="content">${t.learned||"Nothing recorded"}</div>
      
      <h2>Challenges</h2>
      <div class="content">${t.challenges||"None"}</div>
      
      <h2>Tomorrow's goals</h2>
      <div class="content">${t.goals||"Not set"}</div>
      
      <div class="mood">Mood: ${t.mood}</div>
    </body>
    </html>
  `),l.document.close(),l.print()}function De(s,t){const o=Object.keys(s).sort();if(o.length===0){alert("No entries to export");return}let r=`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${t.name}'s Coding Journal</title>
      <style>
        body {
          font-family: 'Georgia', serif;
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        h1 { color: #2c3e50; text-align: center; margin-bottom: 40px; }
        .entry {
          page-break-inside: avoid;
          margin-bottom: 50px;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
        }
        .entry-date {
          color: #3498db;
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .status {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.9em;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .completed { background: #d4edda; color: #155724; }
        .incomplete { background: #f8d7da; color: #721c24; }
        h3 { color: #34495e; margin-top: 15px; margin-bottom: 5px; }
        .content { margin-bottom: 15px; white-space: pre-wrap; }
        .mood { font-size: 1.5em; }
        @media print {
          body { margin: 20px; }
          .entry { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <h1>📔 ${t.name}'s Coding Journal</h1>
  `;o.forEach(l=>{const c=s[l],a=new Date(l).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});r+=`
      <div class="entry">
        <div class="entry-date">${a}</div>
        <div class="status ${c.tasksCompleted?"completed":"incomplete"}">
          ${c.tasksCompleted?"✅ Tasks Completed":"❌ Tasks Not Completed"}
        </div>
        
        <h3>What I worked on</h3>
        <div class="content">${c.worked||"Nothing recorded"}</div>
        
        <h3>What I learned</h3>
        <div class="content">${c.learned||"Nothing recorded"}</div>
        
        <h3>Challenges</h3>
        <div class="content">${c.challenges||"None"}</div>
        
        <h3>Tomorrow's goals</h3>
        <div class="content">${c.goals||"Not set"}</div>
        
        <div class="mood">Mood: ${c.mood}</div>
      </div>
    `}),r+=`
    </body>
    </html>
  `;const n=window.open("","_blank");n.document.write(r),n.document.close(),n.print()}function Ee(s,t){const{entries:o,loading:r,saveEntry:n}=ye(s),[l,c]=m.useState([]),[d,a]=m.useState({worked:"",learned:"",challenges:"",goals:"",mood:"😊",tasksCompleted:!1}),[i,h]=m.useState("");m.useEffect(()=>{h(p())},[]),m.useEffect(()=>{Object.keys(o).length>0&&x(o)},[o]),m.useEffect(()=>{i&&o[i]?a(o[i]):i&&a({worked:"",learned:"",challenges:"",goals:"",mood:"😊",tasksCompleted:!1})},[i,o]);const p=()=>new Date().toISOString().split("T")[0],x=g=>{const b=ke(g);c(b)};return{entries:o,loading:r,streakHistory:l,currentEntry:d,setCurrentEntry:a,selectedDate:i,setSelectedDate:h,saveEntry:async()=>{if(!i)return;const g=await n(i,d);g.success?alert("✅ Entry saved to cloud!"):alert("❌ Failed to save: "+g.error)},getCurrentStreak:()=>Ne(l),getCompletionScore:()=>{const g=Object.values(o);if(g.length===0)return 0;const b=g.filter(N=>N.tasksCompleted).length;return Math.round(b/g.length*100)},exportToMarkdown:()=>{if(!i||!o[i]){alert("No entry for this date");return}Se(i,o[i],t)},printEntry:()=>{if(!i||!o[i]){alert("No entry for this date");return}Ce(i,o[i],t)},exportAllToPDF:()=>{De(o,t)}}}function Le(s){const[t,o]=m.useState("18:00"),[r,n]=m.useState(!1);m.useEffect(()=>{s&&l()},[s]),m.useEffect(()=>{r&&c()},[t,r]);const l=async()=>{try{const i=await $(w(f,"users",s,"settings","notifications"));if(i.exists()){const h=i.data();o(h.time||"18:00"),n(h.enabled||!1)}}catch(i){console.error("Error loading notification settings:",i)}},c=()=>{const[i,h]=t.split(":"),p=new Date,x=new Date;x.setHours(parseInt(i),parseInt(h),0,0),x<=p&&x.setDate(x.getDate()+1);const u=x-p;setTimeout(()=>{Notification.permission==="granted"&&new Notification("📔 Daily Code Journal Reminder",{body:"Time to log your coding day! Don't break the streak!",icon:"📔",badge:"🔥"}),c()},u)};return{notificationTime:t,notificationsEnabled:r,toggleNotifications:async()=>{const i=!r;if(i&&Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){alert("Please enable notifications in your browser settings");return}try{await y(w(f,"users",s,"settings","notifications"),{enabled:i,time:t}),n(i)}catch(h){console.error("Error saving notification settings:",h)}},saveNotificationTime:async i=>{try{await y(w(f,"users",s,"settings","notifications"),{enabled:r,time:i}),o(i)}catch(h){console.error("Error saving notification time:",h)}}}}function Te({userId:s,userProfile:t,onLogout:o}){const[r,n]=m.useState("today"),{entries:l,loading:c,streakHistory:d,currentEntry:a,setCurrentEntry:i,selectedDate:h,setSelectedDate:p,saveEntry:x,getCurrentStreak:u,getCompletionScore:j,exportToMarkdown:C,printEntry:D,exportAllToPDF:E}=Ee(s,t),{notificationTime:L,notificationsEnabled:g,toggleNotifications:b,saveNotificationTime:N}=Le(s);return c?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center",children:e.jsx("div",{className:"text-white text-xl",children:"Loading your journal..."})}):e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-8 pt-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-white font-semibold",children:t.name}),e.jsxs("p",{className:"text-purple-200 text-sm",children:["@",t.nickname]})]}),e.jsx("button",{onClick:o,className:"p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all",title:"Logout",children:e.jsx(ce,{})})]})]}),e.jsxs("h1",{className:"text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3",children:[e.jsx("div",{className:"w-12 h-12",children:e.jsx(R,{})}),"Daily Code Journal"]}),e.jsx("p",{className:"text-purple-200",children:"Document your coding journey, one day at a time"}),e.jsx("p",{className:"text-purple-300 text-sm mt-2",children:"☁️ Synced across all your devices"})]}),e.jsxs("div",{className:"flex gap-2 mb-6 justify-center",children:[e.jsx("button",{onClick:()=>n("today"),className:`px-6 py-2 rounded-lg font-medium transition-all ${r==="today"?"bg-purple-500 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"Today's Entry"}),e.jsx("button",{onClick:()=>n("history"),className:`px-6 py-2 rounded-lg font-medium transition-all ${r==="history"?"bg-purple-500 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"History"})]}),e.jsx(fe,{currentStreak:u(),totalEntries:Object.keys(l).length,completionScore:j()}),e.jsx(we,{streakHistory:d}),r==="today"?e.jsx(je,{selectedDate:h,setSelectedDate:p,currentEntry:a,setCurrentEntry:i,onSave:x,onExportMarkdown:C,onPrint:D}):e.jsx(ve,{entries:l,onSelectEntry:_=>{p(_),n("today")},onExportAll:E,notificationTime:L,notificationsEnabled:g,onToggleNotifications:b,onSaveNotificationTime:N})]})})}function $e(){const{user:s,loading:t,login:o,logout:r}=ie(),[n,l]=m.useState({name:"",nickname:""}),[c,d]=m.useState(!1),[a,i]=m.useState(!0);m.useEffect(()=>{s?h():i(!1)},[s]);const h=async()=>{if(s)try{const u=await $(w(f,"profiles",s.uid));u.exists()?(l(u.data()),d(!1)):d(!0)}catch(u){console.error("Error loading profile:",u)}finally{i(!1)}},p=async u=>{if(!u.name||!u.nickname){alert("Please fill in both name and nickname");return}try{await y(w(f,"profiles",s.uid),u),l(u),d(!1),alert("✅ Profile saved!")}catch(j){console.error("Error saving profile:",j),alert("Failed to save profile. Please try again.")}},x=async()=>{(await r()).success&&(l({name:"",nickname:""}),d(!1))};return t||a?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center",children:e.jsx("div",{className:"text-white text-xl",children:"Loading..."})}):s?c?e.jsx(ge,{profile:n,setProfile:l,onSave:p}):e.jsx(Te,{userId:s.uid,userProfile:n,onLogout:x}):e.jsx(xe,{onLogin:o})}S.createRoot(document.getElementById("root")).render(e.jsx(I.StrictMode,{children:e.jsx($e,{})}));
