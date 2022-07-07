(function(){"use strict";var e={5822:function(e,t,a){a(6992),a(8674),a(9601),a(7727);var s=a(8935),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.$route.meta.hideNavbar?e._e():a("nav-component"),a("router-view")],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("div",{staticClass:"container-fluid"},[s("RouterLink",{staticClass:"navbar-brand",attrs:{to:"/dashboard"}},[s("img",{staticClass:"d-inline-block align-text-top",attrs:{src:a(9408),alt:"",width:"25",height:"25"}}),s("span",[e._v("Regional Office X")])]),e._m(0),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[s("ul",{staticClass:"navbar-nav mb-2 mb-lg-0 "},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[s("font-awesome-icon",{staticClass:"fa-1x",attrs:{icon:"user"}}),s("span",[e._v("First Name")])],1),s("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[s("li",[s("RouterLink",{staticClass:"dropdown-item",attrs:{to:"/"}},[e._v("Account")])],1),s("li",[s("RouterLink",{staticClass:"dropdown-item",attrs:{to:"/register"}},[e._v("Register User")])],1),s("li",[s("RouterLink",{staticClass:"dropdown-item",attrs:{to:"/"}},[e._v("Logout")])],1)])])])])])],1)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Nav-Com"},c=l,d=a(1001),p=(0,d.Z)(c,n,o,!1,null,"cc4f7cf2",null),u=p.exports,m={components:{"nav-component":u}},v=m,f=(0,d.Z)(v,r,i,!1,null,null,null),g=f.exports,h=(a(1539),a(8783),a(3948),a(2809)),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"parent clearfix"},[e._m(0),s("div",{staticClass:"login"},[s("img",{attrs:{src:a(9408),alt:"logo"}}),s("div",{staticClass:"container"},[s("h1",[e._v("Regional Office X")]),e.error?s("p",{staticClass:"lead mt-5 text-danger text-center"},[e._v(e._s(e.error))]):e._e(),s("div",{staticClass:"login-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.login.email,expression:"login.email"}],attrs:{type:"email",placeholder:"E-mail Address"},domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}}),e._m(1),s("button",{staticClass:"loginBtn",on:{click:e.loginUser}},[e._v("LOG-IN")])])])])])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-illustration"},[a("div",{staticClass:"burger-btn"},[a("span"),a("span"),a("span")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"forget-pass"},[a("a",{attrs:{href:"#"}},[e._v("Forgot Password ?")])])}],w=a(7906),C=a(6198),y={data:function(){return{login:{email:"",password:""},error:""}},methods:{loginUser:function(){var e=this;return(0,C.Z)((0,w.Z)().mark((function t(){return(0,w.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post("login",e.login).then((function(t){console.log(t),e.$router.push("dashboard")})).catch((function(t){e.error=t.response.data.message,e.$toasted.error(t.response.data.message)}));case 2:case"end":return t.stop()}}),t)})))()}}},x=y,k=(0,d.Z)(x,b,_,!1,null,"68759744",null),T=k.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contianer-fluid"},[a("div",{staticClass:"container mt-5"},[a("h2",[e._v("Register User")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mt-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.first_name,expression:"register.first_name"}],staticClass:"form-control ",class:{"is-invalid":e.error.first_name},attrs:{type:"text",placeholder:"First name","aria-label":"First name"},domProps:{value:e.register.first_name},on:{input:function(t){t.target.composing||e.$set(e.register,"first_name",t.target.value)}}}),e.error.first_name?a("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.error.first_name[0])+" ")]):e._e()]),a("div",{staticClass:"col-md-6 mt-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.last_name,expression:"register.last_name"}],staticClass:"form-control",class:{"is-invalid":e.error.last_name},attrs:{type:"text",placeholder:"Last name","aria-label":"Last name"},domProps:{value:e.register.last_name},on:{input:function(t){t.target.composing||e.$set(e.register,"last_name",t.target.value)}}}),e.error.last_name?a("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.error.last_name[0])+" ")]):e._e()]),a("div",{staticClass:"col-md-6 mt-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],staticClass:"form-control",class:{"is-invalid":e.error.email},attrs:{type:"text",placeholder:"Email Address","aria-label":"Email Address"},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),e.error.email?a("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.error.email[0])+" ")]):e._e()]),a("div",{staticClass:"col-md-6 mt-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.phone,expression:"register.phone"}],staticClass:"form-control",class:{"is-invalid":e.error.phone},attrs:{type:"text",placeholder:"Phone No.","aria-label":"Phone No."},domProps:{value:e.register.phone},on:{input:function(t){t.target.composing||e.$set(e.register,"phone",t.target.value)}}}),e.error.phone?a("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.error.phone[0])+" ")]):e._e()]),a("div",{staticClass:"col-md-6 mt-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.register.section,expression:"register.section"}],staticClass:"form-select",class:{"is-invalid":e.error.section},attrs:{"aria-label":"Section"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.register,"section",t.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",disabled:"",value:""}},[e._v("Section")]),a("option",{attrs:{value:"1"}},[e._v("Regional Director")]),a("option",{attrs:{value:"2"}},[e._v("Planning")]),a("option",{attrs:{value:"3"}},[e._v("ICTS")]),a("option",{attrs:{value:"4"}},[e._v("Legal")]),a("option",{attrs:{value:"5"}},[e._v("Registration")]),a("option",{attrs:{value:"6"}},[e._v("SES")]),a("option",{attrs:{value:"7"}},[e._v("ADMIN/HR")]),a("option",{attrs:{value:"8"}},[e._v("Finance")]),a("option",{attrs:{value:"9"}},[e._v("CRITS")]),a("option",{attrs:{value:"10"}},[e._v("CPDAS")]),a("option",{attrs:{value:"11"}},[e._v("CSF")])]),e.error.section?a("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.error.section[0])+" ")]):e._e()]),a("div",{staticClass:"col-md-6 mt-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.register.user_type,expression:"register.user_type"}],staticClass:"form-select",class:{"is-invalid":e.error.user_type},attrs:{"aria-label":"Section"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.register,"user_type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",disabled:"",value:""}},[e._v("User Type")]),a("option",{attrs:{value:"3"}},[e._v("Staff")]),a("option",{attrs:{value:"2"}},[e._v("Administrator")]),a("option",{attrs:{value:"1"}},[e._v("Super Administrator")])]),e.error.user_type?a("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.error.user_type[0])+" ")]):e._e()]),a("div",{staticClass:"col-md-6 mt-4 "},[a("div",{staticClass:"input-group"},["checkbox"===e.fieldType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"form-control",class:{"is-invalid":e.error.password},attrs:{placeholder:"Password","aria-label":"Password","aria-describedby":"basic-addon2",type:"checkbox"},domProps:{checked:Array.isArray(e.register.password)?e._i(e.register.password,null)>-1:e.register.password},on:{change:function(t){var a=e.register.password,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=null,n=e._i(a,i);s.checked?n<0&&e.$set(e.register,"password",a.concat([i])):n>-1&&e.$set(e.register,"password",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.register,"password",r)}}}):"radio"===e.fieldType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"form-control",class:{"is-invalid":e.error.password},attrs:{placeholder:"Password","aria-label":"Password","aria-describedby":"basic-addon2",type:"radio"},domProps:{checked:e._q(e.register.password,null)},on:{change:function(t){return e.$set(e.register,"password",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"form-control",class:{"is-invalid":e.error.password},attrs:{placeholder:"Password","aria-label":"Password","aria-describedby":"basic-addon2",type:e.fieldType},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[a("font-awesome-icon",{staticClass:"fa-1x",staticStyle:{cursor:"pointer"},attrs:{icon:e.eyecon},on:{click:e.showPassword}})],1),e.error.password?a("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.error.password[0])+" ")]):e._e()])]),a("div",{staticClass:"col-md-6 mt-4"},[a("div",{staticClass:"input-group"},["checkbox"===e.cfieldType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password_confirmation,expression:"register.password_confirmation"}],staticClass:"form-control",attrs:{placeholder:"Confirm Password","aria-label":"Confirm Password","aria-describedby":"basic-addon2",type:"checkbox"},domProps:{checked:Array.isArray(e.register.password_confirmation)?e._i(e.register.password_confirmation,null)>-1:e.register.password_confirmation},on:{change:function(t){var a=e.register.password_confirmation,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=null,n=e._i(a,i);s.checked?n<0&&e.$set(e.register,"password_confirmation",a.concat([i])):n>-1&&e.$set(e.register,"password_confirmation",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.register,"password_confirmation",r)}}}):"radio"===e.cfieldType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password_confirmation,expression:"register.password_confirmation"}],staticClass:"form-control",attrs:{placeholder:"Confirm Password","aria-label":"Confirm Password","aria-describedby":"basic-addon2",type:"radio"},domProps:{checked:e._q(e.register.password_confirmation,null)},on:{change:function(t){return e.$set(e.register,"password_confirmation",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password_confirmation,expression:"register.password_confirmation"}],staticClass:"form-control",attrs:{placeholder:"Confirm Password","aria-label":"Confirm Password","aria-describedby":"basic-addon2",type:e.cfieldType},domProps:{value:e.register.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.register,"password_confirmation",t.target.value)}}}),a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[a("font-awesome-icon",{staticClass:"fa-1x",staticStyle:{cursor:"pointer"},attrs:{icon:e.ceyecon},on:{click:e.cshowPassword}})],1)])]),a("div",{staticClass:"col-md-6 mt-4"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:e.addNewUser}},[e._v("Submit")])])])])])},S=[],N={data:function(){return{fieldType:"password",eyecon:"eye-slash",passShow:!1,cfieldType:"password",ceyecon:"eye-slash",cpassShow:!1,register:{first_name:"",last_name:"",email:"",phone:"",section:"",user_type:"",status:"1",password:"",password_confirmation:""},error:[]}},methods:{showPassword:function(){this.passShow?(this.eyecon="eye-slash",this.fieldType="password",this.passShow=!1):(this.eyecon="eye",this.fieldType="text",this.passShow=!0)},cshowPassword:function(){this.cpassShow?(this.ceyecon="eye-slash",this.cfieldType="password",this.cpassShow=!1):(this.ceyecon="eye",this.cfieldType="text",this.cpassShow=!0)},addNewUser:function(){var e=this;return(0,C.Z)((0,w.Z)().mark((function t(){return(0,w.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post("register",e.register).then((function(t){e.$toasted.success(t.data.message),e.register={first_name:"",last_name:"",email:"",phone:"",section:"",user_type:"",status:"1",password:"",password_confirmation:""}})).catch((function(t){console.log(t.response.data),e.error=t.response.data.errors,e.$toasted.error(t.response.data.message)}));case 2:case"end":return t.stop()}}),t)})))()}},watch:{register:{handler:function(){this.error=[]},deep:!0}}},A=N,$=(0,d.Z)(A,P,S,!1,null,"028d40f9",null),E=$.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contianer-fluid"},[a("div",{staticClass:"container mt-4"},[a("h2",[e._v("List of Cooperatives ")]),a("fa",{staticClass:"fa-1x addBtn",attrs:{icon:"circle-plus"}}),e._m(0),e._m(1),e._m(2),e._m(3)],1)])},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-search"},[a("h1",{staticClass:"heading"},[e._v("Search Cooperative's Here")]),a("div",{staticClass:"searchInputWrapper"},[a("input",{staticClass:"searchInput",attrs:{type:"text",placeholder:"Type RR No. or Cooperative Name"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-4 mt-2"},[a("div",{staticClass:"box"},[a("p",[e._v("KABALIKAT NG BAYAN (KABAYAN) MULTI PURPOSE COOPERATIVE")]),a("span",[e._v("9520-10000001")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-12"},[a("h4",[e._v("Details of Cooperative")])]),a("div",{staticClass:"col-md-6 mt-3"},[a("h6",{staticClass:"mt-3"},[e._v("Cooperative Name: ")]),a("h6",{staticClass:"mt-3"},[e._v("RR No.: ")]),a("h6",{staticClass:"mt-3"},[e._v("Year Registered: ")]),a("h6",{staticClass:"mt-3"},[e._v("Date Registered: ")]),a("h6",{staticClass:"mt-3"},[e._v("Address: ")]),a("h6",{staticClass:"mt-3"},[e._v("Province: ")]),a("h6",{staticClass:"mt-3"},[e._v("Municipality: ")]),a("h6",{staticClass:"mt-3"},[e._v("Status: ")]),a("h6",{staticClass:"mt-3"},[e._v("Category: ")])]),a("div",{staticClass:"col-md-6 mt-3"},[a("h6",{staticClass:"mt-3"},[e._v("Type: ")]),a("h6",{staticClass:"mt-3"},[e._v("Nature: ")]),a("h6",{staticClass:"mt-3"},[e._v("Commodity: ")]),a("h6",{staticClass:"mt-3"},[e._v("Ammendments No: ")]),a("h6",{staticClass:"mt-3"},[e._v("Ammendment Date: ")]),a("h6",{staticClass:"mt-3"},[e._v("Old Name: ")]),a("h6",{staticClass:"mt-3"},[e._v("Contact Person: ")]),a("h6",{staticClass:"mt-3"},[e._v("CDS Assigned: ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-3 mb-3"},[a("div",{staticClass:"card bg-success"},[a("p",[e._v("1678")]),a("span",[e._v("Compliant")])])]),a("div",{staticClass:"col-md-3 mb-3"},[a("div",{staticClass:"card bg-primary"},[a("p",[e._v("678")]),a("span",[e._v("Non-Compliant")])])]),a("div",{staticClass:"col-md-3 mb-3"},[a("div",{staticClass:"card bg-warning"},[a("p",[e._v("678")]),a("span",[e._v("Under Dissolution")])])]),a("div",{staticClass:"col-md-3 mb-3"},[a("div",{staticClass:"card bg-danger"},[a("p",[e._v("678")]),a("span",[e._v("Dissolve")])])])])}],F={},R=(0,d.Z)(F,Z,L,!1,null,"04d186fe",null),O=R.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contianer-fluid"},[e.showLoader?s("div",{staticClass:"waitingContainer"},[s("img",{staticClass:"waitingLogo",attrs:{src:a(9408),alt:""}})]):e._e(),s("div",{staticClass:"container mt-5"},[s("h2",[e._v("PDF Application")]),e._m(0),s("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-6 mt-5"},[s("div",{staticClass:"input-group"},[s("input",{ref:"inputMergeFile",staticClass:"form-control",attrs:{type:"file",accept:".pdf",id:"inputPdfMerge","aria-describedby":"inputGroupFileAddon03","aria-label":"Upload",multiple:""},on:{change:e.onChangeFileMerge}})]),s("button",{staticClass:"btn btn-success mt-2",attrs:{type:"button"},on:{click:e.pdfMerge}},[e._v("Merge")])])])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-6 mt-5"},[s("div",{staticClass:"input-group"},[s("input",{ref:"inputSplitFile",staticClass:"form-control",attrs:{type:"file",accept:".pdf",id:"inputPdfSplit","aria-describedby":"inputGroupFileAddon04","aria-label":"Upload"},on:{change:e.onChangeFileSplit}})]),s("div",{staticClass:"form-check form-switch mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.splitType,expression:"splitType"}],staticClass:"form-check-input",attrs:{type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},domProps:{checked:Array.isArray(e.splitType)?e._i(e.splitType,null)>-1:e.splitType},on:{change:[function(t){var a=e.splitType,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=null,n=e._i(a,i);s.checked?n<0&&(e.splitType=a.concat([i])):n>-1&&(e.splitType=a.slice(0,n).concat(a.slice(n+1)))}else e.splitType=r},e.onChangeSwitch]}}),s("label",{staticClass:"form-check-label",attrs:{for:"flexSwitchCheckDefault"}},[e._v(e._s(e.splitTypeText))])]),e.splitType?s("label",{staticClass:"form-label mt-2"},[e._v("Split Range")]):e._e(),e.splitType?s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.range.from,expression:"range.from"}],staticClass:"form-control",attrs:{type:"text",placeholder:"From","aria-label":"From"},domProps:{value:e.range.from},on:{input:function(t){t.target.composing||e.$set(e.range,"from",t.target.value)}}}),s("span",{staticClass:"input-group-text"},[e._v("-")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.range.to,expression:"range.to"}],staticClass:"form-control",attrs:{type:"text",placeholder:"To","aria-label":"To"},domProps:{value:e.range.to},on:{input:function(t){t.target.composing||e.$set(e.range,"to",t.target.value)}}})]):e._e(),s("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"button"},on:{click:e.pdfSplit}},[e._v("Split")])])])])])])])},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("button",{staticClass:"nav-link active",attrs:{id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"}},[e._v("Merge")])]),a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("button",{staticClass:"nav-link",attrs:{id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"}},[e._v("Split")])])])}],U=(a(285),a(1637),{data:function(){return{error:[],pdf:null,attachments:[],range:{from:1,to:null},filename:"",splitTypeText:"Combine Selected Range",splitType:!0,showLoader:!1}},methods:{onChangeSwitch:function(){this.splitType?this.splitTypeText="Combine Selected Range":this.splitTypeText="Split All Page"},onChangeFileSplit:function(e){this.pdf=e.target.files[0]},onChangeFileMerge:function(e){this.attachments=[];var t=e.target.files;if(!t.length)return!1;for(var a=0;a<t.length;a++)this.attachments.push(t[a])},pdfSplit:function(){var e=this;return(0,C.Z)((0,w.Z)().mark((function t(){var a;return(0,w.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(1!=e.splitType||0!=e.range.from&&null!=e.range.to){t.next=4;break}e.$toasted.error("Range FROM must be more than ZERO!"),t.next=12;break;case 4:return a=new FormData,a.append("pdf",e.pdf),a.append("from",e.range.from),a.append("to",e.range.to),a.append("type",e.splitType),e.showLoader=!0,t.next=12,e.axios.post("pdfsplit",a).then((function(t){e.$toasted.success(t.data.message),e.filename=t.data.filename,e.pdf=null,e.$refs.inputSplitFile.value=null,e.showLoader=!1,e.downloadFile("split")})).catch((function(t){console.log(t.response.data),e.error=t.response.data.errors,e.$toasted.error(t.response.data.message),e.showLoader=!1}));case 12:case"end":return t.stop()}}),t)})))()},downloadFile:function(){var e=arguments,t=this;return(0,C.Z)((0,w.Z)().mark((function a(){var s,r;return(0,w.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:"merge",r="pdf",r=1==t.splitType&&"split"==s?"pdf":0==t.splitType&&"split"==s?"zip":"merge",a.next=5,t.axios.get("dlpdf/"+t.filename+"/"+r,{responseType:"arraybuffer"}).then((function(e){var a=new Blob([e.data],{type:"application/pdf"}),s=document.createElement("a");s.href=window.URL.createObjectURL(a),s.download=t.filename,s.click()}));case 5:case"end":return a.stop()}}),a)})))()},pdfMerge:function(){var e=this;return(0,C.Z)((0,w.Z)().mark((function t(){var a,s;return(0,w.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.attachments.length<2)){t.next=3;break}return e.$toasted.error("Please upload 2 or more PDF files."),t.abrupt("return",!1);case 3:for(a=new FormData,s=0;s<e.attachments.length;s++)a.append("pdfs[]",e.attachments[s]);return e.showLoader=!0,t.next=8,e.axios.post("pdfmerge",a).then((function(t){e.$toasted.success(t.data.message),e.filename=t.data.filename,e.attachments=[],e.$refs.inputMergeFile.value=null,e.showLoader=!1,e.downloadFile()})).catch((function(t){console.log(t.response.data),e.error=t.response.data.errors,e.$toasted.error(t.response.data.message),e.showLoader=!1}));case 8:case"end":return t.stop()}}),t)})))()}}}),j=U,I=(0,d.Z)(j,D,M,!1,null,"040b0082",null),B=I.exports;s.Z.use(h.Z);var q=[{path:"/",name:"pdfView",component:B,meta:{hideNavbar:!0}},{path:"/login",name:"login",component:T,meta:{hideNavbar:!0}},{path:"/dashboard",name:"dashboard",component:function(){return a.e(443).then(a.bind(a,9427))}},{path:"/cooplist",name:"cooplist",component:O},{path:"/register",name:"register",component:E},{path:"/pdfapp",name:"pdfapp",component:B}],G=new h.Z({mode:"history",base:"/cda/",routes:q}),K=G,Y=a(4665);s.Z.use(Y.ZP);var H=new Y.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),V=a(6166),X=a.n(V),z=a(9168),Q=a.n(z),W=(a(4232),a(81)),J=a(6978),ee=a(9009);W.vI.add(J.ILF,J.Y27,J.Mdf,J.Aq,J.wn1,J.r8p,J.EQ8),s.Z.config.productionTip=!1,s.Z.component("font-awesome-icon",ee.GN);var te={duration:3e3,position:"bottom-right"};s.Z.use(Q(),te),s.Z.use({install:function(e){e.prototype.axios=X().create({baseURL:"https://cdaapi.000webhostapp.com/api/"})}}),new s.Z({router:K,store:H,axios:X(),render:function(e){return e(g)}}).$mount("#app")},9408:function(e,t,a){e.exports=a.p+"img/cdalogo.954d19e0.png"}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,i){if(!s){var n=1/0;for(d=0;d<e.length;d++){s=e[d][0],r=e[d][1],i=e[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||n>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(o=!1,i<n&&(n=i));if(o){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,r,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,s){return a.f[s](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about-legacy.a1504421.js"}}(),function(){a.miniCssF=function(e){return"css/about.c321f898.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cda10app:";a.l=function(s,r,i,n){if(e[s])e[s].push(r);else{var o,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==s||p.getAttribute("data-webpack")==t+i){o=p;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+i),o.src=s),e[s]=[r];var u=function(t,a){o.onerror=o.onload=null,clearTimeout(m);var r=e[s];if(delete e[s],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p="/cda/"}(),function(){var e=function(e,t,a,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)a();else{var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=o,r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var r=a[s],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var n=document.getElementsByTagName("style");for(s=0;s<n.length;s++){r=n[s],i=r.getAttribute("data-href");if(i===e||i===t)return r}},s=function(s){return new Promise((function(r,i){var n=a.miniCssF(s),o=a.p+n;if(t(n,o))return r();e(s,o,r,i)}))},r={143:0};a.f.miniCss=function(e,t){var a={443:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=s(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,s){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)s.push(r[2]);else{var i=new Promise((function(a,s){r=e[t]=[a,s]}));s.push(r[2]=i);var n=a.p+a.u(t),o=new Error,l=function(s){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",o.name="ChunkLoadError",o.type=i,o.request=n,r[1](o)}};a.l(n,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,n=s[0],o=s[1],l=s[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var d=l(a)}for(t&&t(s);c<n.length;c++)i=n[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},s=self["webpackChunkcda10app"]=self["webpackChunkcda10app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(5822)}));s=a.O(s)})();
//# sourceMappingURL=app-legacy.055112b3.js.map