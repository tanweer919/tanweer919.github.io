(function(t){function a(a){for(var n,r,s=a[0],l=a[1],c=a[2],d=0,v=[];d<s.length;d++)r=s[d],o[r]&&v.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(a);while(v.length)v.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,s=1;s<e.length;s++){var l=e[s];0!==o[l]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},o={app:0},i=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("1356"),o=e.n(n);o.a},1356:function(t,a,e){},3761:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),o=e("bb71");e("da64"),e("15f5");n["a"].use(o["a"],{iconfont:"fa"});var i=e("00e7"),r=e.n(i);n["a"].use(r.a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-content",{staticClass:"mt-2 mb-5 pa-1"},[e("transition",{attrs:{name:"fadeUp"}},[e("router-view")],1)],1),e("BottomNav")],1)},l=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",[e("v-bottom-nav",{staticClass:"bottomnav",attrs:{active:t.bottomNav,color:t.color,value:!0,dark:"",shift:"",app:"",fixed:""},on:{"update:active":function(a){t.bottomNav=a}}},t._l(t.links,function(a){return e("v-btn",{key:a.title,staticClass:"font-weight-bold",attrs:{to:a.to,dark:""}},[e("span",[t._v(t._s(a.title))]),e("v-icon",[t._v(t._s(a.icon))])],1)}),1)],1)},u=[],d={data:function(){return{bottomNav:4,links:[{to:"/",title:"About",icon:"fa-user"},{to:"/skills",title:"Skills",icon:"fa-tools"},{to:"/education",title:"Education",icon:"fa-graduation-cap"},{to:"/experience",title:"Experience",icon:"fa-briefcase"},{to:"/projects",title:"Projects",icon:"fa-tasks"}]}},computed:{color:function(){switch(this.bottomNav){case 0:return"indigo";case 1:return"blue";case 2:return"light-green";case 3:return"red";case 5:return"teal";default:return"indigo"}}}},v=d,f=(e("a3e5"),e("2877")),p=e("6544"),h=e.n(p),m=e("887a"),b=e("8336"),g=e("b0af"),w=e("132d"),_=Object(f["a"])(v,c,u,!1,null,"27a47912",null),x=_.exports;h()(_,{VBottomNav:m["a"],VBtn:b["a"],VCard:g["a"],VIcon:w["a"]}),e("9ddc");var y={components:{BottomNav:x},data:function(){return{}},beforeMount:function(){this.$cookie.get("ipAdd")||this.$cookie.set("ipAdd","1.1.1.1"),this.$cookie.get("ipAdd")&&console.log(this.$cookie.get("ipAdd"))}},k=y,C=(e("034f"),e("7496")),V=e("549c"),S=Object(f["a"])(k,s,l,!1,null,null,null),j=S.exports;h()(S,{VApp:C["a"],VContent:V["a"]});var A=e("8c4f"),T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-card",{staticClass:"ma-auto",attrs:{color:"#26c6da",dark:"","max-width":"800"}},[e("v-card-title",[e("div",{staticClass:"mx-auto"},[e("v-icon",{staticClass:"mx-2 mb-1",attrs:{large:""}},[t._v("fa-user-tie ")]),e("span",{staticClass:"display-2 font-weight-light"},[t._v("About me")])],1)]),e("v-card-text",[e("v-layout",{attrs:{wrap:"",row:"","justify-center":"","align-end":""}},[e("v-flex",[e("v-avatar",{attrs:{size:"150"}},[e("img",{attrs:{src:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/40104076_2136247516616966_2264178171425325056_n.jpg?_nc_cat=106&_nc_ht=scontent.fpat1-1.fna&oh=17c2383d441a59b23613cf409ebd2162&oe=5CBD0398"}})])],1),e("v-flex",{attrs:{grow:""}},[e("span",{staticClass:"display-2"},[e("span",{staticClass:"font-weight-bold"},[t._v("Tanweer Anwar")]),e("br")]),e("span",[t._v("Web Developer")]),t._v(" |\n            "),e("span",[t._v("ML Enthusiast")]),e("br"),e("blockquote",{staticClass:"blockquote"},[t._v("\n              I like to play with all the cool technologies in web and android development.\n              And Loves to build and learn new things everyday.\n            ")])])],1)],1),e("v-card-actions",{staticClass:"teal"},[e("v-layout",{attrs:{"justify-center":"",wrap:""}},t._l(t.links,function(a){return e("v-btn",{key:a.icon,class:{"mx-0":t.$vuetify.breakpoint.smAndDown,"mx-4":t.$vuetify.breakpoint.mdAndUp},attrs:{fab:"",icon:"",href:a.to,target:"_blank"}},[e("v-icon",{attrs:{size:"30px"}},[t._v(t._s(a.icon))])],1)}),1)],1)],1),e("SpeedDial")],1)},O=[],E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-fab-transition",[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],staticClass:"mb-5",attrs:{color:"pink",fab:"",dark:"",large:"",fixed:"",bottom:"",right:""},on:{click:t.onClick}},[e("v-icon",[t._v(t._s(t.icon))])],1)],1)},$=[],B={data:function(){return{hidden:!0,loved:!1}},beforeMount:function(){this.hidden=!1},computed:{icon:function(){return this.loved?"fas fa-heart":"far fa-heart"}},methods:{onClick:function(){this.loved=!this.loved}}},D=B,M=e("0789"),I=Object(f["a"])(D,E,$,!1,null,null,null),N=I.exports;h()(I,{VBtn:b["a"],VFabTransition:M["a"],VIcon:w["a"]});var F={components:{SpeedDial:N},data:function(){return{links:[{icon:"fab fa-facebook",to:"https://www.facebook.com/mohammed.tanweeranwar"},{icon:"fab fa-github",to:"https://github.com/tanweer919"},{icon:"fab fa-twitter",to:"https://twitter.com/Tanweer919"},{icon:"fab fa-linkedin",to:"https://www.linkedin.com/in/tanweer-anwar-a39b9154/"},{icon:"fab fa-instagram",to:"https://www.instagram.com/__gb_11/"}]}}},P=F,J=e("8212"),L=e("99d9"),q=e("12b2"),z=e("a523"),G=e("0e8f"),U=e("a722"),Q=Object(f["a"])(P,T,O,!1,null,null,null),R=Q.exports;h()(Q,{VAvatar:J["a"],VBtn:b["a"],VCard:g["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:q["a"],VContainer:z["a"],VFlex:G["a"],VIcon:w["a"],VLayout:U["a"]});var H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-card",[e("v-card-title",{staticClass:"main-card"},[e("div",{staticClass:"white--text mx-auto"},[e("v-icon",{staticClass:"white--text"},[t._v("fa-tools")]),e("span",{staticClass:"display-1 font-weight-light"},[t._v("Skills")])],1)]),e("v-card-text",[e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},t._l(t.skills,function(a){return e("v-flex",{key:a.title,attrs:{md3:"",sm6:"",xs12:""}},[[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return e("v-card",{staticClass:"text-xs-center skill-card ma-3 evaluation-2",class:"elevation-"+(o?12:4),attrs:{color:a.background}},[e("v-card-title",[e("div",{staticClass:"mx-auto"},[e("v-progress-circular",{attrs:{value:a.value,color:a.color,rotate:360,width:"15",size:"100"}},[t._v("\n                                        "+t._s(a.value)+"\n                                        ")])],1)]),e("v-card-actions",[e("v-spacer"),e("v-layout",{attrs:{"justify-space-around":""}},[e("div",{staticClass:"headline"},[e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",{class:a.color+"--text",attrs:{slot:"activator",outline:"",color:a.color},slot:"activator"},[e("v-icon",{attrs:{small:""}},[t._v(t._s(a.icon))]),t._v(t._s(a.title)+"\n                                            ")],1),e("span",[t._v("Duration: "+t._s(a.duration))])],1)],1),e("v-btn",{attrs:{icon:""},on:{click:function(t){a.show=!a.show}}},[e("v-icon",[t._v(t._s(a.show?"keyboard_arrow_up":"keyboard_arrow_down"))])],1)],1)],1),e("v-slide-y-transition",[e("v-card-text",{directives:[{name:"show",rawName:"v-show",value:a.show,expression:"skill.show"}],staticClass:"white black--text"},[t._v("\n                                    "+t._s(a.details)+"\n                                ")])],1)],1)}}])})]],2)}),1)],1)],1),e("SpeedDial")],1)},W=[],Y=(e("ac6a"),{components:{SpeedDial:N},data:function(){return{skills:[{title:"Javascript",value:0,absoluteValue:60,color:"indigo",background:"#d6f6ff",icon:"fab fa-js-square",show:!1,duration:"2 years",details:"JavaScript often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."},{title:"Python",value:0,absoluteValue:80,color:"white",background:"#0894a1",icon:"fab fa-python",show:!1,duration:"3 years",details:"Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991"},{title:"Node.js",value:0,absoluteValue:70,color:"#424242",background:"#00EEFA",icon:"fab fa-node",show:!1,duration:"1 year",details:"Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. It is a JavaScript runtime built on Chrome's V8 JavaScript engine."},{title:"Vue.js",value:0,absoluteValue:80,color:"red",background:"#68EFBF",icon:"fab fa-vuejs",show:!1,duration:"1 year",details:"Vue is a progressive framework for building user interfaces."},{title:"Flutter",value:0,absoluteValue:40,color:"blue",background:"#F2EFDF",icon:"fab fa-android",show:!1,duration:"6 months",details:"Flutter is Google's mobile UI framework for crafting high-quality native experiences on iOS and Android in record time."},{title:"MongoDB",value:0,absoluteValue:60,color:"#000000",background:"#F5DFFB",icon:"fas fa-database",show:!1,duration:"1 year",details:"MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata."},{title:"MySQL",value:0,absoluteValue:50,color:"cyan",background:"#1B1A28",icon:"fas fa-database",show:!1,duration:"3 years",details:"MySQL is an open source relational database management system (RDBMS)"}],interval:{}}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this,a=0;this.interval=setInterval(function(){10!==a?(a+=1,t.skills.forEach(function(t){t.absoluteValue!==t.value&&(t.value+=10)})):clearInterval(t.interval)},300)}}),K=Y,X=(e("bdc8"),e("ce87")),Z=e("490a"),tt=e("9910"),at=e("3a2f"),et=Object(f["a"])(K,H,W,!1,null,"254a4de8",null),nt=et.exports;h()(et,{VBtn:b["a"],VCard:g["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:q["a"],VContainer:z["a"],VFlex:G["a"],VHover:X["a"],VIcon:w["a"],VLayout:U["a"],VProgressCircular:Z["a"],VSlideYTransition:M["b"],VSpacer:tt["a"],VTooltip:at["a"]});var ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-card",[e("v-card-title",{staticClass:"mx-auto indigo white--text headline"},[e("div",{staticClass:"mx-auto white--text"},[e("v-icon",{staticClass:"white--text mb-1"},[t._v("fa-graduation-cap")]),e("span",{staticClass:"display-1 font-weight-light"},[t._v("Education")])],1)]),e("v-card-text",[e("v-timeline",{staticClass:"px-0",attrs:{dense:t.dense,"align-top":""}},t._l(t.items,function(a,n){return e("v-timeline-item",{key:n,attrs:{color:a.color,icon:a.icon,"fill-dot":""}},[e("v-card",{staticClass:"mx-0",attrs:{color:a.color,dark:""}},[e("v-card-title",{staticClass:"body-1"},[t._v(t._s(a.title))]),e("v-card-text",{staticClass:"white text--primary"},[e("p",{staticClass:"title"},[t._v(t._s(a.text))]),e("v-menu",{model:{value:a.menu,callback:function(e){t.$set(a,"menu",e)},expression:"item.menu"}},[e("v-icon",{staticClass:"black--text text--lighten-4 mt-1",attrs:{slot:"activator"},slot:"activator"},[t._v("event")]),e("v-date-picker",{attrs:{readonly:"",disabled:"",color:a.color},model:{value:a.startdate,callback:function(e){t.$set(a,"startdate",e)},expression:"item.startdate"}})],1),e("span",[t._v(" "+t._s(a.date))])],1)],1)],1)}),1)],1)],1)],1)},it=[],rt={data:function(){return{items:[{color:"red lighten-2",icon:"fa-school",title:"Secondary school",text:"St. Clare's School",date:"March 2007 - March 2013",menu:!1,startdate:"2007-03-01"},{color:"cyan",icon:"fa-university",title:"Higher Secondary School",text:"Guru Gobind Singh Public",date:"June 2013 - March 2015",menu:!1,startdate:"2013-06-20"},{color:"green lighten-1",icon:"fa-graduation-cap",title:"Undergraduation",text:"Netaji Subhash Engineering College",date:"July 2016 - July 2020",menu:!1,startdate:"2016-07-29"}]}},computed:{dense:function(){return!!this.$vuetify.breakpoint.smAndDown}}},st=rt,lt=e("2e4b"),ct=e("e449"),ut=e("8414"),dt=e("1e06"),vt=Object(f["a"])(st,ot,it,!1,null,null,null),ft=vt.exports;h()(vt,{VCard:g["a"],VCardText:L["b"],VCardTitle:q["a"],VContainer:z["a"],VDatePicker:lt["a"],VIcon:w["a"],VMenu:ct["a"],VTimeline:ut["a"],VTimelineItem:dt["a"]});var pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",[e("v-card-title")],1)},ht=[],mt={},bt=Object(f["a"])(mt,pt,ht,!1,null,null,null),gt=bt.exports;h()(bt,{VCard:g["a"],VCardTitle:q["a"]});var wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-card",[e("v-card-title",{staticClass:"mx-auto indigo white--text headline"},[e("div",{staticClass:"mx-auto white--text"},[e("v-icon",{staticClass:"white--text mb-1"},[t._v("fa-tasks")]),e("span",{staticClass:"display-1 font-weight-light"},[t._v("Projects")])],1)]),e("v-card-text",[e("v-timeline",{staticClass:"px-0",attrs:{dense:t.dense,"align-top":""}},t._l(t.items,function(a,n){return e("v-timeline-item",{key:n,attrs:{color:a.color,icon:a.icon,"fill-dot":""}},[e("v-card",{staticClass:"mx-0",attrs:{color:a.color,dark:""}},[e("v-card-title",{staticClass:"body-1"},[t._v("Project "+t._s(n+1))]),e("v-card-text",{staticClass:"white text--primary"},[e("p",{staticClass:"title"},[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.text))])]),e("v-card-actions",{staticClass:"white"},[e("v-rating",{attrs:{length:5,"empty-icon":"far fa-heart","full-icon":"fas fa-heart",hover:t.hover,color:a.color,"background-color":"grey lighten-1"}}),e("v-spacer"),e("v-btn",{staticClass:"primary--text",attrs:{flat:""}},[t._v("Check out")])],1)],1)],1)}),1)],1)],1)],1)},_t=[],xt={data:function(){return{items:[{color:"cyan",icon:"fa-check",title:"ChatOnn",text:"A realtime web based chat application",link:"",menu:!1},{color:"green lighten-1",icon:"fa-check",title:"BlogApp",text:"A blogging app buit in Node.js",link:"",menu:!1}],hover:!0}},computed:{dense:function(){return!!this.$vuetify.breakpoint.smAndDown}}},yt=xt,kt=e("1d4d"),Ct=Object(f["a"])(yt,wt,_t,!1,null,null,null),Vt=Ct.exports;h()(Ct,{VBtn:b["a"],VCard:g["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:q["a"],VContainer:z["a"],VIcon:w["a"],VRating:kt["a"],VSpacer:tt["a"],VTimeline:ut["a"],VTimelineItem:dt["a"]}),n["a"].use(A["a"]);var St=new A["a"]({mode:"history",routes:[{path:"/",name:"about",component:R},{path:"/skills",name:"skills",component:nt},{path:"/education",name:"education",component:ft},{path:"/experience",name:"experience",component:gt},{path:"/projects",name:"projects",component:Vt}],scrollBehavior:function(t,a,e){return{x:0,y:0}}});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)},router:St}).$mount("#app")},7787:function(t,a,e){},a3e5:function(t,a,e){"use strict";var n=e("3761"),o=e.n(n);o.a},bdc8:function(t,a,e){"use strict";var n=e("7787"),o=e.n(n);o.a}});
//# sourceMappingURL=app.a2b711cc.js.map