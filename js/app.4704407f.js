(function(e){function t(t){for(var i,s,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},r=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2dbf":function(e,t,a){},"4fff":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e.siteEntered?e._e():i("div",{attrs:{id:"enter-content"}},[i("h3",{staticClass:"name"},[e._v("Blair Muraoka Website "+e._s(e.test))]),i("div",[e._v("email: blairmuraoka@gmail.com")]),i("button",{on:{click:function(t){return e.enterSite()}}},[e._v("Enter")])]),i("transition",{attrs:{name:"real-site"}},[e.siteEntered?i("div",{attrs:{id:"real-site"}},[i("transition",{attrs:{name:"outer"}},[e.siteEnteredCompleted?i("div",{class:{"resume-selected":3==e.activeTab},attrs:{id:"outer"}},[i("div",{attrs:{id:"inner"}},[i("div",{class:{"name-clicked":e.nameClicked,"resume-open":3==e.activeTab},attrs:{id:"mememe"},on:{click:function(t){return e.nameClickHandler()}}},[i("div",{staticClass:"me-inner"},[i("div",{staticClass:"front"},[i("img",{staticClass:"headshot",attrs:{src:a("c7d5"),alt:""}})]),i("div",{staticClass:"back"},[i("div",{staticClass:"back-text"},[e._v("uwu")])])])]),i("CenterContent",{attrs:{activeTab:e.activeTab}}),i("div",{attrs:{id:"nav"}},[i("div",{staticClass:"nav-item",class:{selected:1==e.activeTab},on:{click:function(t){return e.setActiveTab(1)}}},[e._v(" About ")]),i("div",{staticClass:"nav-item",class:{selected:2==e.activeTab},on:{click:function(t){return e.setActiveTab(2)}}},[e._v(" Contact ")]),i("div",{staticClass:"nav-item",class:{selected:3==e.activeTab},on:{click:function(t){return e.setActiveTab(3)}}},[e._v(" Resume ")]),i("div",{staticClass:"nav-item links"},[i("a",{attrs:{target:"_blank",href:"https://github.com/blairmuraoka"}},[i("i",{staticClass:"fab fa-github-alt"})]),i("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/blair-muraoka-088746146/"}},[i("i",{staticClass:"fab fa-linkedin-in"})]),i("a",{attrs:{target:"_blank",href:"https://www.instagram.com/blaire_yasuo/"}},[i("i",{staticClass:"fab fa-instagram"})]),i("a",{attrs:{target:"_blank",href:"https://www.facebook.com/blairmuraoka"}},[i("i",{staticClass:"fab fa-facebook-f"})])])])],1)]):e._e()])],1):e._e()])],1)},r=[],s=(a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"resume-open":3==e.activeTab},attrs:{id:"center-content"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[1==e.activeTab?a("div",[a("p",[e._v("Hey. I graduated from the University of Hawaiʻi in the fall of 2019 with a bachelor's degree in Computer Science.")]),a("p",[e._v("I currently work as a front end developer for STAR at the University of Hawaiʻi at Mānoa.")]),a("p",[e._v(" I enjoy Japanese culture and study Japanese on my off time, as well as learn new skillsets to become a better programmer. I am casually looking for work in Japan. ")])]):e._e(),2==e.activeTab?a("div",{attrs:{id:"contact"}},[a("form",{staticClass:"email",attrs:{action:"https://formspree.io/mvowwprz",method:"POST"}},[a("div",[e._v("Your Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.senderEmail,expression:"senderEmail"}],staticClass:"email-from",attrs:{type:"email",name:"_replyto",placeholder:"you@you.com"},domProps:{value:e.senderEmail},on:{input:function(t){t.target.composing||(e.senderEmail=t.target.value)}}}),a("div",[e._v("Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.emailBody,expression:"emailBody"}],staticClass:"email-message",attrs:{name:"name",placeholder:"Hi Blair"},domProps:{value:e.emailBody},on:{input:function(t){t.target.composing||(e.emailBody=t.target.value)}}}),a("button",{staticClass:"submit-button",class:{disabled:""==e.emailBody||""==e.senderEmail},attrs:{type:"submit",disabled:""==e.emailBody||""==e.senderEmail}},[e._v("Send")])])]):e._e(),3==e.activeTab?a("div",{attrs:{id:"resume"}},[a("div",{staticClass:"row "},[a("div",{staticClass:"row-item"},[a("h3",[e._v("Blair Muraoka")])]),a("div",{staticClass:"row-item"},[e._v("Email: "),a("a",{attrs:{href:"mailto:blairmuraoka@gmail.com"}},[e._v("blairmuraoka@gmail.com")])])]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[a("h4",[e._v("Education")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[e._v("B.S in Computer Science University of Hawaiʻi at Mānoa")]),a("div",{staticClass:"row-item"},[e._v("Dec 2019")])]),a("div",{staticClass:"row"},[a("h4",[e._v("Experience")])]),e._l(e.workExperience,(function(t,i){return a("div",{key:i,staticClass:"row experience-item",on:{click:function(e){t.showMore=!t.showMore}}},[a("div",{staticClass:"row-item",attrs:{title:t.showMore?"Collapse "+t.title:"Expand "+t.title}},[e._v(e._s(t.title))]),a("div",{staticClass:"row-item"},[e._v(e._s(t.start)+" - "+e._s(null==t.end?"present":t.end))]),a("transition",{attrs:{name:"expand-down",mode:"out-in"}},[t.showMore?a("div",{staticClass:"row-item details-expanded"},[a("ul",e._l(t.details,(function(t,i){return a("li",{key:i,staticClass:"list-item"},[e._v(e._s(t))])})),0)]):e._e()])],1)})),a("div",{staticClass:"row"},[a("h4",[e._v("Skillsets")])]),a("div",{staticClass:"row no-justify"},e._l(e.skills,(function(t,i){return a("div",{key:i,staticClass:"row-item badge",class:{proficient:2==t.proficiency,knowledge:1==t.proficiency}},[e._v(" "+e._s(t.name)+" ")])})),0),a("div",{staticClass:"row"},[a("h4",[e._v("Coursework")])]),a("div",{staticClass:"row no-justify"},e._l(e.coursework,(function(t,i){return a("div",{key:i,staticClass:"row-item badge"},[e._v(e._s(t))])})),0)],2):e._e()])],1)}),o=[],c=(a("a9e3"),{name:"CenterContent",props:{activeTab:Number},data:function(){return{senderEmail:"",emailBody:"",workExperience:[{title:"Front End Developer @ STAR at UH Manoa",start:"Feb 2020",end:null,details:["Redesigned user interfaces for university services site with 50,000+ users","Implement design team's mockups into responsive and interactive features using HTML/CSS3 + JavaScript","Developed front-end for 10+ websites using AngularJS and ReactJS","Developed app integration with REST and external APIs such as Google and Zoom"],showMore:!0},{title:"IT Assistant @ SoA at UH Manoa",start:"Aug 2016",end:"Dec 2019",details:["Managed lab equipment, hardware, and software at the School of Architecture @ UH Manoa","Solved day-to-day software/hardware issues with faculty, staff, and student's devices"],showMore:!1}],skills:[{name:"AngularJS",proficiency:2},{name:"VueJS",proficiency:2},{name:"ReactJS",proficiency:2},{name:"HTML5",proficiency:2},{name:"CSS3",proficiency:2},{name:"Sass",proficiency:2},{name:"JavaScript",proficiency:2},{name:"Java",proficiency:2},{name:"jQuery",proficiency:2},{name:"REST",proficiency:2},{name:"Agile",proficiency:2},{name:"SCRUM Methodology",proficiency:2},{name:"JSP",proficiency:1},{name:"SQL",proficiency:1},{name:"Python",proficiency:1},{name:"git",proficiency:1},{name:"C",proficiency:1}],coursework:["Algorithms","Data Networks","Database Systems","Digital Forensics","Discrete Math","Logic Design and Microprocessors","Data Science","Programming Language Theory"]}}}),l=c,d=(a("b2ca"),a("2877")),u=Object(d["a"])(l,s,o,!1,null,"b80e7f6c",null),m=u.exports,v={name:"App",components:{CenterContent:m},data:function(){return{name:"Blair Muraoka",siteEntered:!1,test:"",activeTab:1,nameClicked:!1,senderEmail:"",emailBody:"",siteEnteredCompleted:!1}},methods:{enterSite:function(){var e=this;this.siteEntered=!0,this.sleep(100).then((function(){return e.siteEnteredCompleted=!0}))},setActiveTab:function(e){var t=this;e!=this.activeTab&&(this.activeTab=null,this.sleep(100).then((function(){return t.activeTab=e})))},nameClickHandler:function(){this.nameClicked=!this.nameClicked},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}}},f=v,p=(a("5c0b"),Object(d["a"])(f,n,r,!1,null,null,null)),b=p.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var i=a("4fff"),n=a.n(i);n.a},b2ca:function(e,t,a){"use strict";var i=a("2dbf"),n=a.n(i);n.a},c7d5:function(e,t,a){e.exports=a.p+"img/blairlazyeye.255e1641.png"}});
//# sourceMappingURL=app.4704407f.js.map