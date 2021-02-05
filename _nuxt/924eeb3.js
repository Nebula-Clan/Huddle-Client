(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{531:function(e,t,r){"use strict";r(7),r(11),r(77),r(8),r(40),r(16),r(17),r(13),r(179),r(64),r(9),r(51);var n=r(2),o=r(4),l=r(87),c=r(104);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},549:function(e,t,r){e.exports=r.p+"img/login-background.21f4ab8.jpg"},595:function(e,t,r){var content=r(771);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("1121c5dc",content,!0,{sourceMap:!1})},652:function(e,t,r){"use strict";r.r(t);r(40),r(6),r(64),r(46),r(52),r(628);var n=r(118),o={name:"ProfileInfo",components:{ProfileInfoLoader:r(672).default,UserAvatar:n.default},data:function(){return{pageLoaded:!1,formValid:!1,loading:!1,changedFields:[],profileImage:null,bannerImage:null,profile:{username:"",first_name:"",last_name:"",biology:"",profile_picture:"",banner_picture:""},rules:[function(e){return!!e||"This field cannot be empty"},function(e){return e.length>=4||"This field must be at least 4 characters or more"}]}},methods:{getProfile:function(){var e=this;this.pageLoaded=!1,this.$axios.get("/api/profile/public",{params:{username:this.$auth.user.username}}).then((function(t){e.profile=t.data,t.data.profile_picture&&(e.profileImage=e.$axios.defaults.baseURL+t.data.profile_picture),t.data.banner_picture&&(e.bannerImage=e.$axios.defaults.baseURL+t.data.banner_picture),e.changedFields=[],e.pageLoaded=!0})).catch()},setProfile:function(){var e=this;this.loading=!0;var t=new FormData;this.changedFields.includes("username")&&t.append("username",this.profile.username),this.changedFields.includes("first_name")&&t.append("first_name",this.profile.first_name),this.changedFields.includes("last_name")&&t.append("last_name",this.profile.last_name),this.changedFields.includes("bio")&&t.append("biology",this.profile.biology),this.changedFields.includes("profile_picture")&&t.append("profile_picture",this.profile.profile_picture),this.changedFields.includes("banner_picture")&&t.append("banner_picture",this.profile.banner_picture),this.$axios.put("api/profile/update_profile",t).then((function(){return e.$notifier.showMessage({content:"Profile updated successfully",color:"success"})})).catch((function(t){return e.$notifier.showMessage({content:t.response.data.error.message,color:"error"})})).finally((function(){e.loading=!1,e.$auth.fetchUser()}))},changed:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.changedFields.push(e),"banner_picture"===e?this.bannerImage=URL.createObjectURL(t):"profile_picture"===e&&(this.profileImage=URL.createObjectURL(t))},changeImage:function(e){document.getElementById(e).click()}},mounted:function(){this.getProfile()}},l=(r(770),r(38)),c=r(39),d=r.n(c),f=r(213),h=r(477),m=r(493),v=r(853),w=r(531),_=r(211),y=r(491),x=r(476),P=r(627),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{on:{submit:function(t){return t.preventDefault(),e.setProfile(t)}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[n("v-row",[n("v-col",[e.pageLoaded?n("section",{staticClass:"images"},[n("div",{staticClass:"banner"},[null!==e.bannerImage?n("img",{staticClass:"banner-img rounded",attrs:{src:e.bannerImage,alt:"banner-img"}}):e._e(),e._v(" "),null===e.bannerImage?n("img",{staticClass:"banner-img rounded",attrs:{src:r(549),alt:"banner-img"}}):e._e(),e._v(" "),n("div",{staticClass:"overlay-banner rounded d-flex justify-center align-center"},[n("v-btn",{attrs:{color:"primary",icon:""},on:{click:function(t){return e.changeImage("banner-img")}}},[n("v-icon",[e._v(" mdi-pencil ")])],1)],1)]),e._v(" "),n("div",{staticClass:"profile"},[n("v-avatar",{staticClass:"profile-img",attrs:{size:"150"}},[null!==e.profileImage?n("img",{attrs:{alt:e.$auth.user.username,src:e.profileImage}}):e._e(),e._v(" "),null===e.profileImage?n("UserAvatar",{attrs:{size:"150px",color:"purple","avatar-string":e.$auth.user.username}}):e._e()],1),e._v(" "),n("div",{staticClass:"overlay-profile d-flex justify-center align-center"},[n("v-btn",{attrs:{color:"primary",icon:""},on:{click:function(t){return e.changeImage("profile-img")}}},[n("v-icon",[e._v(" mdi-pencil ")])],1)],1)],1)]):e._e(),e._v(" "),e.pageLoaded?e._e():n("ProfileInfoLoader")],1)],1),e._v(" "),n("v-row",[n("v-col",[n("v-file-input",{staticStyle:{display:"none"},attrs:{id:"profile-img",accept:"image/png, image/jpeg, image/bmp",outlined:"","truncate-length":"30"},on:{change:function(t){return e.changed("profile_picture",t)}},model:{value:e.profile.profile_picture,callback:function(t){e.$set(e.profile,"profile_picture",t)},expression:"profile.profile_picture"}}),e._v(" "),n("v-file-input",{staticStyle:{display:"none"},attrs:{id:"banner-img",accept:"image/png, image/jpeg, image/bmp",outlined:"","truncate-length":"30"},on:{change:function(t){return e.changed("banner_picture",t)}},model:{value:e.profile.banner_picture,callback:function(t){e.$set(e.profile,"banner_picture",t)},expression:"profile.banner_picture"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.rules,counter:"",label:"Username",outlined:""},on:{keydown:function(t){return e.changed("username")}},model:{value:e.profile.username,callback:function(t){e.$set(e.profile,"username",t)},expression:"profile.username"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.rules,counter:"",label:"First Name",outlined:""},on:{keydown:function(t){return e.changed("first_name")}},model:{value:e.profile.first_name,callback:function(t){e.$set(e.profile,"first_name",t)},expression:"profile.first_name"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{rules:e.rules,counter:"",label:"Last Name",outlined:""},on:{keydown:function(t){return e.changed("last_name")}},model:{value:e.profile.last_name,callback:function(t){e.$set(e.profile,"last_name",t)},expression:"profile.last_name"}}),e._v(" "),n("v-textarea",{attrs:{"auto-grow":"",counter:"",label:"Bio",outlined:"",rows:"1"},on:{keydown:function(t){return e.changed("bio")}},model:{value:e.profile.biology,callback:function(t){e.$set(e.profile,"biology",t)},expression:"profile.biology"}})],1),e._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[n("v-btn",{attrs:{disabled:0===e.changedFields.length||!e.formValid,loading:e.loading,color:"accent",outlined:"",type:"submit"}},[e._v("\n        Apply changes\n      ")])],1)],1)],1)}),[],!1,null,"3c9f3927",null);t.default=component.exports;d()(component,{UserAvatar:r(118).default,ProfileInfoLoader:r(672).default}),d()(component,{VAvatar:f.a,VBtn:h.a,VCol:m.a,VFileInput:v.a,VForm:w.a,VIcon:_.a,VRow:y.a,VTextField:x.a,VTextarea:P.a})},653:function(e,t,r){"use strict";r.r(t);var n={name:"Change-Password",data:function(){var e=this;return{loading:!1,formValid:!1,password:{currentPassword:"",newPassword:"",repeatNewPassword:""},rules:[function(e){return!!e||"This field cannot be empty"},function(e){return e.length>=8||"Password must be at least 8 characters or more"}],confirmPasswordRules:[function(e){return!!e||"This field cannot be empty"},function(e){return e.length>=8||"Password must be at least 8 characters or more"},function(t){return t===e.password.newPassword||"Provided password does not match"}]}},methods:{setPassword:function(){var e=this,t=new FormData;t.append("new_password",this.password.newPassword),t.append("old_password",this.password.currentPassword),this.$axios.put("api/profile/update_password",t).then((function(){return e.$notifier.showMessage({content:"Password updated successfully",color:"success"})})).catch((function(t){return e.$notifier.showMessage({content:t.response.data.error.message,color:"error"})}))}}},o=r(38),l=r(39),c=r.n(l),d=r(477),f=r(493),h=r(531),m=r(491),v=r(476),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{on:{submit:function(t){return t.preventDefault(),e.setPassword(t)}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:e.rules,counter:"",type:"password",label:"Current Password",outlined:""},model:{value:e.password.currentPassword,callback:function(t){e.$set(e.password,"currentPassword",t)},expression:"password.currentPassword"}}),e._v(" "),r("v-text-field",{attrs:{rules:e.rules,type:"password",counter:"",label:"New Password",outlined:""},model:{value:e.password.newPassword,callback:function(t){e.$set(e.password,"newPassword",t)},expression:"password.newPassword"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{rules:e.confirmPasswordRules,counter:"",type:"password",label:"Repeat Password",outlined:""},model:{value:e.password.repeatNewPassword,callback:function(t){e.$set(e.password,"repeatNewPassword",t)},expression:"password.repeatNewPassword"}})],1),e._v(" "),r("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[r("v-btn",{attrs:{type:"submit",disabled:!e.formValid,color:"accent",outlined:""}},[e._v("\n        Apply changes\n      ")])],1)],1)],1)}),[],!1,null,"62455b82",null);t.default=component.exports;c()(component,{VBtn:d.a,VCol:f.a,VForm:h.a,VRow:m.a,VTextField:v.a})},672:function(e,t,r){"use strict";r.r(t);var n={name:"Profile-Info-Loader"},o=r(38),l=r(39),c=r.n(l),d=r(852),component=Object(o.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"image"}})}),[],!1,null,"13aa563a",null);t.default=component.exports;c()(component,{VSkeletonLoader:d.a})},770:function(e,t,r){"use strict";var n=r(595);r.n(n).a},771:function(e,t,r){(t=r(14)(!1)).push([e.i,".images[data-v-3c9f3927]{position:relative;text-align:center;margin-bottom:100px}.images .banner[data-v-3c9f3927]{width:100%;height:300px}.images .banner .banner-img[data-v-3c9f3927]{width:100%;height:300px;border:.5px solid #4b4b4b}.images .overlay-banner[data-v-3c9f3927]{position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);opacity:0;transition:.3s ease}.images .profile[data-v-3c9f3927]{position:relative;width:100%}.images .profile .profile-img[data-v-3c9f3927]{position:absolute;bottom:-75px;left:calc(50% - 75px);border:.5px solid #4b4b4b}.images .profile .overlay-profile[data-v-3c9f3927]{position:absolute;bottom:-75px;left:calc(50% - 75px);border-radius:50%;width:150px;height:150px;background-color:rgba(0,0,0,.5);opacity:0;transition:.3s ease}.banner:hover .overlay-banner[data-v-3c9f3927],.images .profile:hover .overlay-profile[data-v-3c9f3927]{opacity:1}",""]),e.exports=t},872:function(e,t,r){"use strict";r.r(t);var n=r(652),o={name:"profile",components:{ChangePassword:r(653).default,ProfileInfo:n.default}},l=r(38),c=r(39),d=r.n(c),f=r(499),h=r(497),m=r(493),v=r(516),w=r(491),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",[t("v-card-title",[this._v("\n    Edit Your Profile\n  ")]),this._v(" "),t("v-card-text",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("ProfileInfo")],1),this._v(" "),t("v-divider",{staticClass:"mx-10"}),this._v(" "),t("v-col",{attrs:{cols:"12"}},[t("ChangePassword")],1)],1)],1)],1)}),[],!1,null,"42848d63",null);t.default=component.exports;d()(component,{ProfileInfo:r(652).default,ChangePassword:r(653).default}),d()(component,{VCard:f.a,VCardText:h.c,VCardTitle:h.d,VCol:m.a,VDivider:v.a,VRow:w.a})}}]);