(()=>{var W=Object.create;var d=Object.defineProperty,G=Object.defineProperties,P=Object.getOwnPropertyDescriptor,V=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertyNames,N=Object.getOwnPropertySymbols,L=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var S=(e,n,o)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,g=(e,n)=>{for(var o in n||={})x.call(n,o)&&S(e,o,n[o]);if(N)for(var o of N(n))M.call(n,o)&&S(e,o,n[o]);return e},m=(e,n)=>G(e,V(n));var j=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),q=(e,n)=>{for(var o in n)d(e,o,{get:n[o],enumerable:!0})},I=(e,n,o,c)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of J(n))!x.call(e,t)&&t!==o&&d(e,t,{get:()=>n[t],enumerable:!(c=P(n,t))||c.enumerable});return e};var H=(e,n,o)=>(o=e!=null?W(L(e)):{},I(n||!e||!e.__esModule?d(o,"default",{value:e,enumerable:!0}):o,e)),z=e=>I(d({},"__esModule",{value:!0}),e);var i=(e,n,o)=>new Promise((c,t)=>{var B=s=>{try{w(o.next(s))}catch(_){t(_)}},D=s=>{try{w(o.throw(s))}catch(_){t(_)}},w=s=>s.done?c(s.value):Promise.resolve(s.value).then(B,D);w((o=o.apply(e,n)).next())});var F=j((te,T)=>{T.exports=shelter.solidWeb});var ne={};q(ne,{onLoad:()=>Z,onUnload:()=>ee});var h=H(F(),1);var A={name:"Dorion",invoke:(e,n)=>window.__TAURI__.invoke(e,n),event:{emit:(e,n)=>window.__TAURI__.event.emit(e,n),listen:(e,n)=>i(void 0,null,function*(){return window.__TAURI__.event.listen(e,n)})},app:{getVersion:()=>window.__TAURI__.app.getVersion()},process:{relaunch:()=>window.__TAURI__.process.relaunch()},apiWindow:{appWindow:{setFullscreen:e=>window.__TAURI__.window.appWindow.setFullscreen(e)}}};var E={name:"Flooed",invoke:(e,n)=>window.Flooed.invoke(e,n),event:{emit:()=>{},listen:()=>i(void 0,null,function*(){})},app:{getVersion:()=>window.Flooed.version},process:{relaunch:()=>window.Flooed.invoke("relaunch")},apiWindow:{appWindow:{setFullscreen:e=>window.Flooed.invoke("set_fullscreen",e)}}};var C={name:"Unknown",invoke:()=>i(void 0,null,function*(){}),event:{emit:()=>{},listen:()=>i(void 0,null,function*(){})},app:{getVersion:()=>"0.0.0"},process:{relaunch:()=>{}},apiWindow:{appWindow:{setFullscreen:()=>{}}}};var f="None";window.Dorion?f="Dorion":window.Flooed&&(f="Flooed");var a;switch(f){case"Dorion":a=A;break;case"Flooed":a=E;break;default:a=C;break}var b=window[f];var ue=a.name,l=a.invoke,we=a.event,_e=a.app,ge=a.process,me=a.apiWindow;var{ui:{SwitchItem:R},flux:{dispatcher:u},solid:{createSignal:$},observeDom:K,patcher:Q}=shelter,[r,v]=$(null),X='div[class*="contentColumn"] div[class*="container"]',Y=Q.instead("Notification",window,()=>{}),p=null,k=!1,y=!1,O=e=>i(void 0,null,function*(){if(e.section!=="Notifications"){k=!1,y=!1;return}else if(k)return;k=!0,p=K(X,n=>{p.now(),n.style.display="none";let o=n.nextElementSibling;if(o&&(o.style.display="none"),y)return;let c=[(0,h.createComponent)(R,{note:"Shows a red badge on the app icon when you have unread messages.",get value(){var t;return(t=r())==null?void 0:t.unread_badge},onChange:t=>i(void 0,null,function*(){v(m(g({},r()),{unread_badge:t})),yield l("write_config_file",{contents:JSON.stringify(r())}),b.shouldShowUnreadBadge=t,t?b.util.applyNotificationCount():l("notif_count",{amount:0})}),children:"Enable Unread Message Badge"}),(0,h.createComponent)(R,{note:"If you're looking for per-channel or per-server notifications, right-click the desired server icon and select Notification Settings.",get value(){var t;return(t=r())==null?void 0:t.desktop_notifications},onChange:t=>i(void 0,null,function*(){v(m(g({},r()),{desktop_notifications:t})),yield l("write_config_file",{contents:JSON.stringify(r())})}),children:"Enable Desktop Notifications"})];for(let t of c)n.parentElement.prepend(t);y=!0})}),U=e=>{r().desktop_notifications&&l("send_notification",{title:e.title,body:e.body,icon:e.icon})};u.subscribe("USER_SETTINGS_MODAL_SET_SECTION",O);u.subscribe("RPC_NOTIFICATION_CREATE",U);var Z=()=>i(void 0,null,function*(){v(JSON.parse(yield l("read_config_file")))}),ee=()=>{p==null||p.now(),u.unsubscribe("USER_SETTINGS_MODAL_SET_SECTION",O),u.unsubscribe("RPC_NOTIFICATION_CREATE",U),Y()};return z(ne);})();