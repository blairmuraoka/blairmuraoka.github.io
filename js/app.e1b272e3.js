(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],v=0,u=[];v<o.length;v++)n=o[v],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4fff":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.siteEntered?t._e():i("div",{attrs:{id:"enter-content"}},[i("h3",{staticClass:"name"},[t._v("Blair Muraoka Website "+t._s(t.test))]),i("button",{on:{click:function(e){return t.enterSite()}}},[t._v("Enter")])]),i("transition",{attrs:{name:"real-site"}},[t.siteEntered?i("div",{attrs:{id:"real-site"}},[i("transition",{attrs:{name:"outer"}},[t.siteEnteredCompleted?i("div",{attrs:{id:"outer"}},[i("div",{attrs:{id:"inner"}},[i("div",{class:{"name-clicked":t.nameClicked,"resume-open":3==t.activeTab},attrs:{id:"mememe"},on:{click:function(e){return t.nameClickHandler()}}},[i("div",{staticClass:"me-inner"},[i("div",{staticClass:"front"},[i("img",{staticClass:"headshot",attrs:{src:a("c7d5"),alt:""}})]),i("div",{staticClass:"back"},[i("div",{staticClass:"back-text"},[t._v("uwu")])])])]),i("CenterContent",{attrs:{activeTab:t.activeTab}}),i("div",{attrs:{id:"nav"}},[i("div",{staticClass:"nav-item",class:{selected:1==t.activeTab},on:{click:function(e){return t.setActiveTab(1)}}},[t._v(" About ")]),i("div",{staticClass:"nav-item",class:{selected:2==t.activeTab},on:{click:function(e){return t.setActiveTab(2)}}},[t._v(" Contact ")]),i("div",{staticClass:"nav-item",class:{selected:3==t.activeTab},on:{click:function(e){return t.setActiveTab(3)}}},[t._v(" Resume ")]),i("div",{staticClass:"nav-item links"},[i("a",{attrs:{target:"_blank",href:"https://github.com/blairmuraoka"}},[i("i",{staticClass:"fab fa-github-alt"})]),i("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/blair-muraoka-088746146/"}},[i("i",{staticClass:"fab fa-linkedin-in"})]),i("a",{attrs:{target:"_blank",href:"https://www.instagram.com/blaire_yasuo/"}},[i("i",{staticClass:"fab fa-instagram"})]),i("a",{attrs:{target:"_blank",href:"https://www.facebook.com/blairmuraoka"}},[i("i",{staticClass:"fab fa-facebook-f"})])])])],1)]):t._e()])],1):t._e()])],1)},r=[],n=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"resume-open":3==t.activeTab},attrs:{id:"center-content"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[1==t.activeTab?a("div",[a("p",[t._v("Hey. I graduated from the University of Hawaiʻi in the fall of 2019 with a bachelor's degree in Computer Science.")]),a("p",[t._v("I currently work as a front end developer for STAR at the University of Hawaiʻi at Mānoa.")]),a("p",[t._v("I am currently working on improving my skills in preparation for taking on a position as a full stack engineer in the future.")])]):t._e(),2==t.activeTab?a("div",{attrs:{id:"contact"}},[a("form",{staticClass:"email",attrs:{action:"https://formspree.io/mvowwprz",method:"POST"}},[a("div",[t._v("Your Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.senderEmail,expression:"senderEmail"}],staticClass:"email-from",attrs:{type:"email",name:"_replyto",placeholder:"you@you.com"},domProps:{value:t.senderEmail},on:{input:function(e){e.target.composing||(t.senderEmail=e.target.value)}}}),a("div",[t._v("Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.emailBody,expression:"emailBody"}],staticClass:"email-message",attrs:{name:"name",placeholder:"Hi Blair"},domProps:{value:t.emailBody},on:{input:function(e){e.target.composing||(t.emailBody=e.target.value)}}}),a("button",{staticClass:"submit-button",class:{disabled:""==t.emailBody||""==t.senderEmail},attrs:{type:"submit",disabled:""==t.emailBody||""==t.senderEmail}},[t._v("Send")])])]):t._e(),3==t.activeTab?a("div",{attrs:{id:"resume"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[a("h4",[t._v("Education")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[t._v("B.S in Computer Science University of Hawaii at Manoa")]),a("div",{staticClass:"row-item"},[t._v("Dec 2019")])]),a("div",{staticClass:"row"},[a("h4",[t._v("Experience")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[t._v("Front-End Developer at STAR at UH Manoa")]),a("div",{staticClass:"row-item"},[t._v("Feb 2020 - curr")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[t._v("IT Assistant")]),a("div",{staticClass:"row-item"},[t._v("Aug 2016 - Dec 2019")])]),a("div",{staticClass:"row"},[a("h4",[t._v("Skillsets")])]),a("div",{staticClass:"row no-justify"},[a("div",{staticClass:"row-item badge proficient"},[t._v("AngularJS • VueJS • ReactJS")]),a("div",{staticClass:"row-item badge proficient"},[t._v("HTML5 • CSS3 • SASS")]),a("div",{staticClass:"row-item badge proficient"},[t._v("JavaScript")]),a("div",{staticClass:"row-item badge proficient"},[t._v("Java")]),a("div",{staticClass:"row-item badge proficient"},[t._v("Agile/Scrum")]),a("div",{staticClass:"row-item badge knowledge"},[t._v("SQL")]),a("div",{staticClass:"row-item badge knowledge"},[t._v("Python")]),a("div",{staticClass:"row-item badge knowledge"},[t._v("C")]),a("div",{staticClass:"row-item badge knowledge"},[t._v("git")])]),a("div",{staticClass:"row"},[a("h4",[t._v("Coursework")])]),a("div",{staticClass:"row no-justify"},[a("div",{staticClass:"row-item badge"},[t._v("Algorithms")]),a("div",{staticClass:"row-item badge"},[t._v("Data Networks")]),a("div",{staticClass:"row-item badge"},[t._v("Database Systems")]),a("div",{staticClass:"row-item badge"},[t._v("Digital Forensics")]),a("div",{staticClass:"row-item badge"},[t._v("Discrete Math")]),a("div",{staticClass:"row-item badge"},[t._v("Logic Design and Microprocessors")]),a("div",{staticClass:"row-item badge"},[t._v("Data Science")]),a("div",{staticClass:"row-item badge"},[t._v("Programming Language Theory")])])]):t._e()])],1)}),o=[],c=(a("a9e3"),{name:"CenterContent",props:{activeTab:Number}}),l=c,d=(a("97af"),a("2877")),v=Object(d["a"])(l,n,o,!1,null,"3be8e7e3",null),u=v.exports,m={name:"App",components:{CenterContent:u},data:function(){return{name:"Blair Muraoka",siteEntered:!1,test:"",activeTab:1,nameClicked:!1,senderEmail:"",emailBody:"",siteEnteredCompleted:!1}},methods:{enterSite:function(){var t=this;this.siteEntered=!0,this.sleep(100).then((function(){return t.siteEnteredCompleted=!0}))},setActiveTab:function(t){var e=this;t!=this.activeTab&&(this.activeTab=null,this.sleep(100).then((function(){return e.activeTab=t})))},nameClickHandler:function(){this.nameClicked=!this.nameClicked},sleep:function(t){return new Promise((function(e){return setTimeout(e,t)}))}}},f=m,p=(a("5c0b"),Object(d["a"])(f,s,r,!1,null,null,null)),b=p.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("4fff"),s=a.n(i);s.a},"967b":function(t,e,a){},"97af":function(t,e,a){"use strict";var i=a("967b"),s=a.n(i);s.a},c7d5:function(t,e,a){t.exports=a.p+"img/blairlazyeye.255e1641.png"}});
//# sourceMappingURL=app.e1b272e3.js.map