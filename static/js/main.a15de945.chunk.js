(this["webpackJsonpigor-cv-v1"]=this["webpackJsonpigor-cv-v1"]||[]).push([[0],{119:function(e,t,a){},219:function(e,t,a){},221:function(e,t,a){},246:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(102),s=a.n(i),r=(a(70),a(20)),o=a(5),l=(a(119),a(8)),u=a(6),d=a(2),j=a(12),b=a(11),m=(a(219),a(0)),h=function(e){return Object(m.jsx)("div",{className:"d-flex justify-content-start textError",children:e.children})},O=function(e){var t=e.itemId,a=e.placeholder,n=e.itemType,c=e.itemName,i=e.itemLabel,s=e.important,r=(e.errors,e.component);return Object(m.jsxs)("div",{className:"mb-1",children:[Object(m.jsxs)("label",{htmlFor:t,className:"textColor form-label",children:[i," ",s?Object(m.jsx)("span",{className:"redText",children:"*"}):""]}),Object(m.jsx)(j.a,{name:c,component:h}),Object(m.jsx)(j.b,{className:"form-control customField",id:t,placeholder:a,type:n,name:c,component:r})]})},x=(a(221),function(e){var t=e.setNewItem,a=b.a({title:b.b().required('The field "Email" is required'),content:b.b().required('The field "Password" is required')});return Object(m.jsx)("div",{className:"addForm",children:Object(m.jsx)(j.d,{initialValues:{title:"",content:""},validationSchema:a,onSubmit:function(e,a){var n=a.resetForm;t([e]),n({})},children:function(e){var t=e.isValid,a=e.errors,n=e.dirty;return Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center",children:Object(m.jsx)("div",{className:"col-xl-6",children:Object(m.jsxs)(j.c,{className:"d-flex flex-column m-5 mt-3",children:[Object(m.jsx)(O,{itemId:"Title",placeholder:"Title",itemType:"text",itemName:"title",itemLabel:"Title",important:!0,errors:a}),Object(m.jsx)(O,{itemId:"Content",placeholder:"Content",itemType:"text",itemName:"content",itemLabel:"Content",important:!0,errors:a}),Object(m.jsx)("button",{type:"submit",disabled:!t||!n,className:"btnColor btn btn-success mt-3",children:"ADD"})]})})})})}})})}),f=a(13),g=a(108).a.initializeApp({apiKey:"AIzaSyDhKw9Eb9m3OTYaB-jnEmH8aN90BQuy7L8",authDomain:"igor-shyian-cv.firebaseapp.com",databaseURL:"https://igor-shyian-cv-default-rtdb.europe-west1.firebasedatabase.app",projectId:"igor-shyian-cv",storageBucket:"igor-shyian-cv.appspot.com",messagingSenderId:"956284595409",appId:"1:956284595409:web:d21e358c4c2f74a454a9f0"}),p="1jKn5iEhG6SiZxMUAe6MPNbfu4F2",v=function(e){var t=e.myData,a=e.receiveNewItem,c=e.receiveDeleteItem,i=Object(f.a)(g.auth()),s=Object(d.a)(i,1)[0],r=Object(n.useState)(!0),o=Object(d.a)(r,2),l=o[0],u=o[1];return Object(n.useEffect)((function(){0!==t.length?u(!1):u(!0)}),[t]),Object(m.jsxs)(m.Fragment,{children:[l&&Object(m.jsx)("h3",{className:"d-flex justify-content-center text-white",children:"The database is empty."}),t.map((function(e,t,a){var n=!1;return t===a.length-1&&(n=!0),Object(m.jsxs)("div",{className:"col-12 mb-3 d-flex justify-content-between",children:[Object(m.jsx)("div",{className:"col-1"}),Object(m.jsxs)("div",{className:"col-10 d-flex justify-content-between ".concat(n?"":"dataItem"),children:[Object(m.jsx)("h6",{className:"textColor",children:e.title}),Object(m.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(m.jsx)("span",{className:"textColor",children:e.content}),s&&p===s.uid?Object(m.jsx)("button",{type:"button",className:"btn btn-danger btn-sm",style:{marginLeft:"30px"},onClick:function(){return c(e.id)},children:"delete"}):Object(m.jsx)("div",{})]})]}),Object(m.jsx)("div",{className:"col-1"})]},t)})),s&&p===s.uid?Object(m.jsx)("div",{children:Object(m.jsx)(x,{setNewItem:a})}):Object(m.jsx)("div",{})]})},N=a(17),w=a.n(N),y=a(30),I=a(55),S=a.n(I),k="https://igor-shyian-cv-default-rtdb.europe-west1.firebasedatabase.app",P=function(e,t,a){return Object(y.a)(w.a.mark((function n(){var c,i;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S.a.get("".concat(k,"/").concat(e,"/").concat(t,".json"));case 3:if(null==(c=n.sent).data){n.next=7;break}return i=Object.keys(c.data).map((function(e){return Object(l.a)(Object(l.a)({},c.data[e]),{},{id:e})})),n.abrupt("return",i);case 7:return n.abrupt("return",null);case 10:n.prev=10,n.t0=n.catch(0),a(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},T=function(e,t,a,n){return Object(y.a)(w.a.mark((function c(){var i;return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,S.a.post("".concat(k,"/").concat(t,"/").concat(a,".json"),e);case 3:return i=c.sent,c.abrupt("return",i.data.name);case 7:c.prev=7,c.t0=c.catch(0),n(c.t0.message);case 10:case"end":return c.stop()}}),c,null,[[0,7]])})))()},C=function(e,t,a,n){return Object(y.a)(w.a.mark((function c(){return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,S.a.delete("".concat(k,"/").concat(t,"/").concat(a,"/").concat(e,".json"));case 3:c.next=8;break;case 5:c.prev=5,c.t0=c.catch(0),n(c.t0.message);case 8:case"end":return c.stop()}}),c,null,[[0,5]])})))()},A=a.p+"static/media/spinner.c4a0bf72.svg",E=function(e){e.classes;return Object(m.jsx)("div",{className:"d-flex justify-content-center",children:Object(m.jsx)("img",{src:A,alt:"Loading..."})})},L=a(259),M=Object(n.createContext)(),F=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(d.a)(a,2),i=c[0],s=c[1],r=Object(n.useState)(!1),o=Object(d.a)(r,2),l=o[0],u=o[1],j=Object(n.useState)(""),b=Object(d.a)(j,2),h=b[0],O=b[1],x=function(){s(!1),u(!1)};return Object(m.jsx)(M.Provider,{value:{showAlert:function(e,t){O(e),s(!0),t&&u(t),setTimeout(x,5e3)},hideAlert:x,alertMsg:h,isVisible:i,alertSuccess:l},children:t})},R=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(d.a)(i,2),r=s[0],o=s[1],j=Object(n.useState)([]),b=Object(d.a)(j,2),h=b[0],O=b[1],x=Object(n.useState)(""),p=Object(d.a)(x,2),N=p[0],w=p[1],y=Object(f.a)(g.auth()),I=Object(d.a)(y,1)[0],S=Object(L.a)(),k=S.t,A=S.i18n,F=Object(n.useContext)(M).showAlert;return Object(n.useEffect)((function(){P(A.language,"personalData",F).then((function(e){e&&c(e),o(!1)})).catch((function(e){o(!1),F(e.message)}))}),[A.language]),Object(n.useEffect)((function(){if(I&&0!==h.length){var e={reviewId:I.uid,title:h[0].title,content:h[0].content};T(e,A.language,"personalData",F).then((function(t){return c([].concat(Object(u.a)(a),[Object(l.a)(Object(l.a)({},e),{},{id:t})]))}))}}),[h]),Object(n.useEffect)((function(){""!==N&&C(N,A.language,"personalData",F).then((function(){return c(a.filter((function(e){return e.id!==N})))}))}),[N]),Object(m.jsxs)("div",{className:"row customBorder",children:[Object(m.jsx)("h3",{className:"col-12 text-white text-uppercase d-flex justify-content-center mb-4 mt-3",children:k("personalData.title")}),r?Object(m.jsx)(E,{}):Object(m.jsx)(v,{myData:a,receiveNewItem:function(e){O(e)},receiveDeleteItem:function(e){w(e)}})]})},D=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(d.a)(i,2),r=s[0],o=s[1],j=Object(n.useState)([]),b=Object(d.a)(j,2),h=b[0],O=b[1],x=Object(n.useState)(""),p=Object(d.a)(x,2),N=p[0],w=p[1],y=Object(f.a)(g.auth()),I=Object(d.a)(y,1)[0],S=Object(L.a)(),k=S.t,A=S.i18n,F=Object(n.useContext)(M).showAlert;return Object(n.useEffect)((function(){P(A.language,"education",F).then((function(e){e&&c(e),o(!1)})).catch((function(e){o(!1),F(e.message)}))}),[A.language]),Object(n.useEffect)((function(){if(I&&0!==h.length){var e={reviewId:I.uid,title:h[0].title,content:h[0].content};T(e,A.language,"education",F).then((function(t){return c([].concat(Object(u.a)(a),[Object(l.a)(Object(l.a)({},e),{},{id:t})]))}))}}),[h]),Object(n.useEffect)((function(){""!==N&&C(N,A.language,"education",F).then((function(){return c(a.filter((function(e){return e.id!==N})))}))}),[N]),Object(m.jsxs)("div",{className:"row customBorder",children:[Object(m.jsx)("h3",{className:"col-12 text-white text-uppercase d-flex justify-content-center mb-4 mt-3",children:k("education.title")}),r?Object(m.jsx)(E,{}):Object(m.jsx)(v,{myData:a,receiveNewItem:function(e){O(e)},receiveDeleteItem:function(e){w(e)}})]})},H=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(d.a)(i,2),r=s[0],o=s[1],j=Object(n.useState)([]),b=Object(d.a)(j,2),h=b[0],O=b[1],x=Object(n.useState)(""),p=Object(d.a)(x,2),N=p[0],w=p[1],y=Object(f.a)(g.auth()),I=Object(d.a)(y,1)[0],S=Object(L.a)(),k=S.t,A=S.i18n,F=Object(n.useContext)(M).showAlert;return Object(n.useEffect)((function(){P(A.language,"experience",F).then((function(e){e&&c(e),o(!1)})).catch((function(e){o(!1),F(e.message)}))}),[A.language]),Object(n.useEffect)((function(){if(I&&0!==h.length){var e={reviewId:I.uid,title:h[0].title,content:h[0].content};T(e,A.language,"experience",F).then((function(t){return c([].concat(Object(u.a)(a),[Object(l.a)(Object(l.a)({},e),{},{id:t})]))}))}}),[h]),Object(n.useEffect)((function(){""!==N&&C(N,A.language,"experience",F).then((function(){return c(a.filter((function(e){return e.id!==N})))}))}),[N]),Object(m.jsxs)("div",{className:"row customBorder",children:[Object(m.jsx)("h3",{className:"col-12 text-white text-uppercase d-flex justify-content-center mb-4 mt-3",children:k("experience.title")}),r?Object(m.jsx)(E,{}):Object(m.jsx)(v,{myData:a,receiveNewItem:function(e){O(e)},receiveDeleteItem:function(e){w(e)}})]})},q=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(d.a)(i,2),r=s[0],o=s[1],j=Object(n.useState)([]),b=Object(d.a)(j,2),h=b[0],O=b[1],x=Object(n.useState)(""),p=Object(d.a)(x,2),N=p[0],w=p[1],y=Object(f.a)(g.auth()),I=Object(d.a)(y,1)[0],S=Object(L.a)(),k=S.t,A=S.i18n,F=Object(n.useContext)(M).showAlert;return Object(n.useEffect)((function(){P(A.language,"otherInformation",F).then((function(e){e&&c(e),o(!1)})).catch((function(e){o(!1),F(e.message)}))}),[A.language]),Object(n.useEffect)((function(){if(I&&0!==h.length){var e={reviewId:I.uid,title:h[0].title,content:h[0].content};T(e,A.language,"otherInformation",F).then((function(t){return c([].concat(Object(u.a)(a),[Object(l.a)(Object(l.a)({},e),{},{id:t})]))}))}}),[h]),Object(n.useEffect)((function(){""!==N&&C(N,A.language,"otherInformation",F).then((function(){return c(a.filter((function(e){return e.id!==N})))}))}),[N]),Object(m.jsxs)("div",{className:"row customBorder",children:[Object(m.jsx)("h3",{className:"col-12 text-white text-uppercase d-flex justify-content-center mb-4 mt-3",children:k("otherInformation.title")}),r?Object(m.jsx)(E,{}):Object(m.jsx)(v,{myData:a,receiveNewItem:function(e){O(e)},receiveDeleteItem:function(e){w(e)}})]})},G=function(){return Object(m.jsx)("div",{className:"dataPage",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(R,{}),Object(m.jsx)(D,{}),Object(m.jsx)(H,{}),Object(m.jsx)(q,{})]})})},Z=(a(246),a(68)),B=a(113),K=a(43),J=a(35),W={ru:{translation:J},en:{translation:J},pl:{translation:J}};Z.a.use(B.a).use(K.e).init({resources:W,fallbackLng:"en",detection:{order:["localStorage","cookie"],cache:["localStorage","cookie"]},interpolation:{escapeValue:!1}});Z.a;var U=function(){var e=Object(f.a)(g.auth()),t=Object(d.a)(e,1)[0],a=Object(L.a)(),c=a.t,i=a.i18n,s=Object(n.useState)(i.language),o=Object(d.a)(s,2),l=o[0],u=o[1],j=function(e){i.changeLanguage(e),u(e),console.log(i.language)};return Object(m.jsx)("nav",{className:"header sticky-top navbar navbar-expand-lg navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("h3",{className:"headerLogo navbar-brand",children:c("header.title")}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(m.jsxs)("div",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(m.jsx)(r.b,{className:"customLink",to:"aboutMe",children:c("header.aboutMeLink")}),Object(m.jsx)(r.b,{className:"customLink",to:"data",children:c("header.dataLink")}),Object(m.jsx)(r.b,{className:"customLink",to:"contact",children:c("header.contactLink")})]}),Object(m.jsx)("div",{className:" headerItems navbar-nav ml-2 mb-lg-0",children:Object(m.jsxs)("div",{className:"dropdown",children:[Object(m.jsxs)("button",{className:"dropdownButton dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:[c("header.langMenu"),": ",Object(m.jsx)("span",{className:"activeLang",children:l})]}),Object(m.jsxs)("ul",{className:"dropdownMenu dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"dropdownItem",onClick:function(){return j("en")},children:"EN"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"dropdownItem",onClick:function(){return j("pl")},children:"PL"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"dropdownItem",onClick:function(){return j("ru")},children:"RU"})})]})]})}),t?Object(m.jsxs)("div",{className:"navbar-nav ml-2 mb-lg-0",children:[Object(m.jsxs)("span",{className:"spanHello",children:[c("header.sayHello"),": ",t.email]}),Object(m.jsx)("button",{className:"singOutButton",onClick:function(){return g.auth().signOut()},children:c("header.singOutLink")})]}):Object(m.jsxs)("div",{className:"headerItems navbar-nav ml-2 mb-lg-0",children:[Object(m.jsx)(r.b,{className:"customLink",to:"login",children:c("header.loginLink")}),Object(m.jsx)(r.b,{className:"customLink",to:"registration",children:c("header.registrationLink")})]})]})]})})},V=(a(250),a.p+"static/media/myPhoto.74cee90a.png"),Y=function(){var e=Object(L.a)().t;return Object(m.jsx)("div",{className:"mainPage",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row gy-3",children:[Object(m.jsx)("div",{className:"col-md-5 d-flex justify-content-center",children:Object(m.jsx)("img",{className:"mainPagePhoto",alt:"MyPhoto",src:V})}),Object(m.jsxs)("div",{className:"col-md-7 mainPageText flex-column",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e("mainPage.title")}),Object(m.jsx)("h3",{children:e("mainPage.subtitle")})]}),Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsx)("h5",{children:e("mainPage.mainPageTextTitle")}),Object(m.jsxs)("div",{className:"mb-5",children:[e("mainPage.mainPageText"),Object(m.jsx)(r.b,{className:"customLink",to:"data",children:" My CV"}),"."]})]})]})]})})})},X=a(69),Q=(a(251),a(114)),z=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([{}]),s=Object(d.a)(i,2),r=s[0],o=s[1],l=Object(f.a)(g.auth()),h=Object(d.a)(l,1)[0],x=Object(L.a)().t,p=Object(n.useContext)(M).showAlert,v=b.a({fullName:b.b().min(3,'The field "Full Name" cannot be shorter than 3 characters').required('The field "Full Name" is required'),email:b.b().min(6,'The field "Email" cannot be shorter than 5 characters').required('The field "Email" is required').email('The field "Email" is not valid'),message:b.b().min(10,'The field "Message" cannot be shorter than 10 characters').required('The field "Message" is required')});return Object(m.jsx)("div",{className:"contactPage",children:h?a?Object(m.jsx)(E,{}):Object(m.jsx)(j.d,{initialValues:{fullName:"",email:"",message:""},validationSchema:v,onSubmit:function(e,t){var a=t.resetForm;o([].concat(Object(u.a)(r),[e])),a({})},children:function(e){var t=e.isValid,a=e.errors,n=e.dirty,i=Object(X.a)(e,["isValid","errors","dirty"]);return Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(m.jsx)("div",{className:"col-12 textColor d-flex justify-content-center",children:Object(m.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(m.jsx)("h3",{className:"text-uppercase ",children:x("contactPage.title")}),Object(m.jsxs)("h6",{className:"textColor",children:[Object(m.jsx)("span",{className:"redText",children:"* "}),x("contactPage.description")]})]})}),Object(m.jsx)("div",{className:"col-xl-6",children:Object(m.jsxs)(j.c,{onSubmit:function(e){!function(e,t){t(e),c(!0),Q.a.sendForm("service_igor_cv","template_lh3g5jq0z5ka1p8",e.target,"user_pd2TWn303wRDhFVhD7vuA").then((function(){c(!1),p("Your message send.",!0)}),(function(e){c(!1),p(e.text)}))}(e,i.handleSubmit)},className:"d-flex flex-column m-3",children:[Object(m.jsx)("input",{type:"hidden",id:"userEmail",name:"userEmail",value:null===h||void 0===h?void 0:h.email}),Object(m.jsx)(O,{itemId:"FullName",placeholder:x("contactPage.input_1"),itemType:"text",itemName:"fullName",itemLabel:x("contactPage.input_1"),important:!0,errors:a}),Object(m.jsx)(O,{itemId:"Email",placeholder:x("contactPage.input_2"),itemType:"email",itemName:"email",itemLabel:x("contactPage.input_2"),important:!0,errors:a}),Object(m.jsx)(O,{itemId:"Message",placeholder:x("contactPage.input_3"),itemType:"text",itemName:"message",itemLabel:x("contactPage.input_3"),important:!0,errors:a,component:_}),Object(m.jsx)("button",{type:"submit",disabled:!t||!n,className:"btnColor btn btn-secondary mt-3",children:x("contactPage.submitButton")})]})})]})})}}):Object(m.jsxs)("div",{className:"emptyContactPage",children:[Object(m.jsx)("h3",{className:"text-uppercase",children:x("contactPage.title")}),Object(m.jsx)("h4",{children:x("contactPage.subtitle")})]})})},_=function(e){var t=e.field,a=e.form,n=(a.touched,a.errors,Object(X.a)(e,["field","form"]));return Object(m.jsx)("textarea",Object(l.a)(Object(l.a)(Object(l.a)({},t),n),{},{className:"form-control customField"}))},$=(a(252),a(253),c.a.createContext()),ee=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(d.a)(a,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){g.auth().onAuthStateChanged((function(e){s(e)}))}),[i]),Object(m.jsx)($.Provider,{value:{currentUser:i},children:t})},te=function(e){var t=e.pageTitle,a=e.errors,n=e.isValid,c=e.dirty,i=e.sendButton,s=Object(L.a)().t;return Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(m.jsx)("div",{className:"col-12 textColor d-flex justify-content-center",children:Object(m.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(m.jsx)("h3",{children:t}),Object(m.jsxs)("h6",{className:"textColor",children:[Object(m.jsx)("span",{className:"redText",children:"* "}),s("contactPage.description")]})]})}),Object(m.jsx)("div",{className:"col-xl-6",children:Object(m.jsxs)(j.c,{className:"d-flex flex-column m-5 mt-3",children:[Object(m.jsx)(O,{itemId:"Email",placeholder:s("LoginAndRegisterForm.email"),itemType:"email",itemName:"email",itemLabel:s("LoginAndRegisterForm.email"),important:!0,errors:a}),Object(m.jsx)(O,{itemId:"Password",placeholder:s("LoginAndRegisterForm.password"),itemType:"password",itemName:"password",itemLabel:s("LoginAndRegisterForm.password"),important:!0,errors:a}),Object(m.jsx)("button",{type:"submit",disabled:!n||!c,className:"btnColor btn btn-secondary mt-3",children:i})]})})]})})},ae=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(o.g)(),s=Object(L.a)().t,r=Object(n.useContext)(M).showAlert,l=function(){var e=Object(y.a)(w.a.mark((function e(t,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,g.auth().signInWithEmailAndPassword(t,a).then((function(){i.push("/aboutMe"),c(!1)}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),c(!1),r(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,a){return e.apply(this,arguments)}}();if(Object(n.useContext)($).currentUser)return Object(m.jsx)(o.a,{to:"/aboutMe"});var u=b.a({email:b.b().min(6,'The field "Email" cannot be shorter than 6 characters').required('The field "Email" is required').email('The field "Email" is not valid'),password:b.b().min(6,'The field "Password" cannot be shorter than 6 characters').required('The field "Password" is required')});return Object(m.jsx)("div",{className:"loginPage",children:a?Object(m.jsx)(E,{}):Object(m.jsx)(j.d,{initialValues:{email:"",password:""},validationSchema:u,onSubmit:function(e,t){var a=t.resetForm;l(e.email,e.password),a({})},children:function(e){var t=e.isValid,a=e.errors,n=e.dirty;return Object(m.jsx)(te,{sendButton:s("loginPage.submitButton"),pageTitle:s("loginPage.title"),errors:a,dirty:n,isValid:t})}})})},ne=(a(255),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(o.g)(),s=Object(L.a)().t,r=Object(n.useContext)(M).showAlert,l=function(){var e=Object(y.a)(w.a.mark((function e(t,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,g.auth().createUserWithEmailAndPassword(t,a).then((function(){i.push("/aboutMe"),c(!1)}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),c(!1),r(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,a){return e.apply(this,arguments)}}();if(Object(n.useContext)($).currentUser)return Object(m.jsx)(o.a,{to:"/aboutMe"});var u=b.a({email:b.b().min(6,'The field "Email" cannot be shorter than 6 characters').required('The field "Email" is required').email('The field "Email" is not valid'),password:b.b().min(6,'The field "Password" cannot be shorter than 6 characters').required('The field "Password" is required')});return Object(m.jsx)("div",{className:"RegistrationPage",children:a?Object(m.jsx)(E,{}):Object(m.jsx)(j.d,{initialValues:{email:"",password:""},validationSchema:u,onSubmit:function(e,t){var a=t.resetForm;l(e.email,e.password),a({})},children:function(e){var t=e.isValid,a=e.errors,n=e.dirty;return Object(m.jsx)(te,{sendButton:s("registrationPage.submitButton"),pageTitle:s("registrationPage.title"),errors:a,dirty:n,isValid:t})}})})}),ce=(a(256),a.p+"static/media/reactlogo.3b091593.png"),ie=a.p+"static/media/firebase.362c49e1.png",se=a.p+"static/media/formik.9112cd9b.png",re=a.p+"static/media/typescript.3e4cdc40.png",oe=a.p+"static/media/i18next.3a5d0938.png",le=function(){var e=Object(L.a)().t;return Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-6 mt-1 d-flex justify-content-center align-items-center",children:[Object(m.jsx)("h6",{children:e("footer.footerText")}),Object(m.jsx)("img",{style:{height:"35px"},alt:"GitHubImg",src:"data:image/png;base64,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"})]}),Object(m.jsxs)("div",{className:"col-sm-6 mt-1 d-flex justify-content-center align-items-center",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{style:{height:"45px"},alt:"GitHubImg",src:ce}),Object(m.jsx)("img",{style:{height:"20px",paddingLeft:"10px"},alt:"GitHubImg",src:re})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{style:{height:"45px"},alt:"GitHubImg",src:ie}),Object(m.jsx)("img",{style:{height:"45px"},alt:"GitHubImg",src:oe})]}),Object(m.jsx)("img",{style:{height:"40px"},alt:"GitHubImg",src:se})]})]})})})},ue=(a(257),function(){var e=Object(n.useContext)(M),t=e.isVisible,a=e.hideAlert,c=e.alertMsg,i=e.alertSuccess;return t?Object(m.jsxs)("div",{className:"alert alert-dismissible fixed-top ".concat(i?"alert-success":"alert-warning"),children:[i?Object(m.jsx)("strong",{children:"Success!"}):Object(m.jsx)("strong",{children:"Warning!"}),"\xa0",c,Object(m.jsx)("button",{onClick:a,type:"button",className:"btn-close","aria-label":"Close"})]}):null});var de=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(F,{children:Object(m.jsx)(ee,{children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(U,{}),Object(m.jsx)(ue,{}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/aboutMe",component:Y}),Object(m.jsx)(o.b,{exact:!0,path:"/data",component:G}),Object(m.jsx)(o.b,{exact:!0,path:"/contact",component:z}),Object(m.jsx)(o.b,{exact:!0,path:"/login",component:ae}),Object(m.jsx)(o.b,{exact:!0,path:"/registration",component:ne}),Object(m.jsx)(o.a,{to:"/aboutMe"})]}),Object(m.jsx)(le,{})]})})})})};s.a.render(Object(m.jsx)(n.Suspense,{fallback:Object(m.jsx)("div",{className:"app",children:Object(m.jsx)(E,{})}),children:Object(m.jsx)(de,{})}),document.getElementById("root"))},35:function(e){e.exports=JSON.parse('{"header":{"title":"Igor Shyian","aboutMeLink":"about me","dataLink":"my cv","contactLink":"contact","langMenu":"language","loginLink":"login","registrationLink":"registration","singOutLink":"sing out","sayHello":"Hello"},"personalData":{"title":"personal data"},"education":{"title":"education"},"experience":{"title":"experience"},"otherInformation":{"title":"other information"},"mainPage":{"title":"Hello, my name is Igor.","subtitle":"I\'m a junior frontend developer (React developer).","mainPageTextTitle":"Some information about me:","mainPageText":"This year I graduated from the University of Computer Science, after which I began to study JavaScript and React.js more seriously. At the moment, I have mastered React quite well and I want to continue to develop in this direction.I try to work with the most modern technology, so I use React hooks, but I can also use Redux. You can find more information about my skills on the page:"},"contactPage":{"title":"contact form","description":"Means that the field is required !","subtitle":"Please login to fill out the contact form.","input_1":"Full name","input_2":"Email","input_3":"Your message","submitButton":"SEND"},"loginPage":{"title":"LOGIN FORM","submitButton":"LOG IN"},"registrationPage":{"title":"REGISTRATION FORM","submitButton":"REGISTRATION"},"LoginAndRegisterForm":{"email":"Email","password":"Password"},"footer":{"footerText":"\xa9 2021 Developed by Igor Shyian"}}')},70:function(e,t,a){}},[[258,1,2]]]);
//# sourceMappingURL=main.a15de945.chunk.js.map