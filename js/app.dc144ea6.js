(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e0c3080f"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=a[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,o[1](u)}a[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/thoughts/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=u;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"11d3":function(t,e,o){},"46a5":function(t,e,o){"use strict";o("11d3")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],i=(o("5c0b"),o("2877")),s={},c=Object(i["a"])(s,a,r,!1,null,null,null),u=c.exports,l=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("HelloWorld")],1)},d=[],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thoughts-wrapper"},[o("div",{staticClass:"thoughts"},[o("draggable",t._b({attrs:{group:"thoughts"},on:{start:function(e){return t.dragStart()},end:function(e){return t.dragEnd()}},model:{value:t.localThoughts,callback:function(e){t.localThoughts=e},expression:"localThoughts"}},"draggable",t.dragOptions,!1),[o("transition-group",{attrs:{type:"transition",name:t.drag?null:"flip-list"}},t._l(t.localThoughts,(function(e,n){return o("div",{key:e.text,staticClass:"thoughts-list"},[o("transition",{attrs:{name:"fade"}},[e.active?o("div",{staticClass:"thought-meta-published"},[t._v(" "+t._s(t.format(e.date))+" ")]):t._e()]),o("div",{staticClass:"thought",class:{active:e.active},on:{click:function(e){return t.toggleActive(n)}}},[o("p",[t._v(t._s(e.text))])]),o("transition",{attrs:{name:"fade"}},[o("div",{staticClass:"thought-buttons"},[e.active?o("div",{staticClass:"delete-thought",on:{click:function(e){return t.removeThought(n)}}},[t._v(" delete ")]):t._e(),e.active?o("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.text,expression:"thought.text",arg:"copy"}],staticClass:"copy-thought",on:{click:function(e){return t.copyThought(n)}}},[t._v(" "+t._s(e.copied?"copied":"copy")+" ")]):t._e()])])],1)})),0)],1)],1),o("div",{staticClass:"sticky"},[o("transition",{attrs:{name:"fade"}},[t.showForm?o("div",{staticClass:"new-thought"},[o("div",{staticClass:"thought-meta"},[o("div",{staticClass:"form-buttons"},[o("div",{staticClass:"delete-button",on:{click:t.deleteAll}},[t._v("Delete all")])]),o("span",{staticClass:"counter"},[t._v(t._s(160-t.thoughtObj.text.length))])]),o("div",{staticClass:"thought-form"},[o("div",{attrs:{id:"thought-content",contenteditable:"true"},on:{input:t.onInput}})])]):t._e()]),o("div",{attrs:{id:"submit-buttons"}},[t.showForm?o("div",{attrs:{id:"cancel"},on:{click:function(e){t.showForm=!1}}},[t._v("Cancel")]):t._e(),o("div",{attrs:{id:"add-save"},on:{click:function(e){t.showForm?t.addThought():t.setShowForm()}}},[t._v(" "+t._s(t.showForm?"Save":"Add thought")+" ")])])],1)])},f=[],v=(o("159b"),o("a434"),o("c72b")),p=o("b76a"),m=o.n(p),b={name:"HelloWorld",components:{draggable:m.a},data:function(){return{drag:!1,showForm:!1,localThoughts:[],thoughtObj:{text:""},tags:["Pensée","Note","Code"]}},mounted:function(){if(this.$ga.page("/"),localStorage.getItem("thoughts"))try{this.localThoughts=JSON.parse(localStorage.getItem("thoughts")),console.log(JSON.stringify(this.localThoughts,null,2))}catch(t){localStorage.removeItem("thoughts")}},computed:{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost",delay:200}}},methods:{onInput:function(t){this.thoughtObj.text=t.target.innerText},toggleActive:function(t){var e=this.localThoughts[t];e.active=!e.active,this.$set(this.localThoughts,t,e),this.$ga.event("thought","setActive","set active",1)},setShowForm:function(){this.showForm=!0,setTimeout((function(){document.getElementById("thought-content").focus()}),0)},addThought:function(){if(this.thoughtObj.text){var t=this.thoughtObj.text,e=new Date;this.localThoughts.unshift({text:t,date:e}),this.thoughtObj.text="",this.showForm=!1,this.saveThoughts(),window.scrollTo(0,0),this.$ga.event("thought","new",t,1)}},saveThoughts:function(){this.localThoughts.forEach((function(t){delete t.active,delete t.copied}));var t=JSON.stringify(this.localThoughts);console.log(JSON.stringify(this.localThoughts,null,2)),localStorage.setItem("thoughts",t)},removeThought:function(t){this.localThoughts.splice(t,1),this.saveThoughts(),window.location.reload(),this.$ga.event("thought","delete","delete single",1)},copyThought:function(t){var e=this.localThoughts[t];e.copied=!e.copied,this.$set(this.localThoughts,t,e),this.$ga.event("thought","copied",e.text,1)},deleteAll:function(){localStorage.clear(),window.location.reload(),this.$ga.event("thought","deleteAll","deleted all",1)},dragStart:function(){this.drag=!0,window.navigator.vibrate(10)},dragEnd:function(){this.drag=!1,window.navigator.vibrate(10),this.saveThoughts()},format:v["a"]}},w=b,y=(o("46a5"),Object(i["a"])(w,g,f,!1,null,"08b13888",null)),T=y.exports,_={name:"Home",components:{HelloWorld:T}},O=_,x=Object(i["a"])(O,h,d,!1,null,null,null),j=x.exports;n["a"].use(l["a"]);var C=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],S=new l["a"]({mode:"history",base:"/thoughts/",routes:C}),k=S,A=o("2f62");n["a"].use(A["a"]);var F=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$=o("4eb5"),E=o.n($),P=o("0284"),N=o.n(P),I=o("b85c"),J=o("9483");Object(J["a"])("".concat("/thoughts/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),caches.keys().then((function(t){var e,o=Object(I["a"])(t);try{for(o.s();!(e=o.n()).done;){var n=e.value;caches.delete(n)}}catch(a){o.e(a)}finally{o.f()}}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,n["a"].use(E.a),n["a"].use(N.a,{id:"UA-155398591-1"}),new n["a"]({router:k,store:F,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"9c0c":function(t,e,o){}});
//# sourceMappingURL=app.dc144ea6.js.map