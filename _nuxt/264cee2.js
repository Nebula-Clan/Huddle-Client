(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{485:function(t,e,o){var content=o(506);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("2fb50821",content,!0,{sourceMap:!1})},486:function(t,e,o){"use strict";o.r(e);var r={name:"NewComment",data:function(){return{replayText:"",isFormValid:!1,commentRules:[function(p){return!!p||"Type Something"},function(p){return p.length>=3||"Must be at least 3 characters"},function(p){return p.length<=500||"Must be lower than 100 characters"}]}},props:["isLoadingToSend","submitComment"]},n=o(35),l=o(36),c=o.n(l),d=o(464),v=o(533),m=o(534),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{model:{value:t.isFormValid,callback:function(e){t.isFormValid=e},expression:"isFormValid"}},[o("v-textarea",{attrs:{rules:t.commentRules,outlined:"","auto-grow":"",counter:"500",label:"Reply the post"},model:{value:t.replayText,callback:function(e){t.replayText=e},expression:"replayText"}}),t._v(" "),o("div",{staticClass:"pb-2 d-flex flex-row-reverse"},[o("v-btn",{staticClass:"mt-2",attrs:{outlined:"",depressed:"",color:"primary",loading:t.isLoadingToSend,disabled:!t.isFormValid,elevation:"2"},on:{click:function(e){return t.submitComment({replayText:t.replayText})}}},[t._v("\n      Send\n    ")])],1)],1)}),[],!1,null,"8b82cee6",null);e.default=component.exports;c()(component,{VBtn:d.a,VForm:v.a,VTextarea:m.a})},492:function(t,e,o){"use strict";o.r(e);o(6),o(11),o(8),o(16),o(17),o(12),o(9);var r=o(2),n=o(117),l=o(116),c=o(496);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Post-quick-view",components:{NewComment:o(486).default,UserAvatar:l.default},props:["post"],data:function(){return{isCommentToPostExpanded:!1,isLoadingToSendComment:!1,chipsColors:["blue","red","green","purple","orange"],like:!1,dislike:!1}},computed:{likedPost:function(){return this.dislike||!this.post.is_liked&&!this.like?"":"pink"},postDateDuration:function(){return Object(c.a)(this.post.date_created)}},methods:v(v(v({},Object(n.b)("modules/profile/profileLikes",["submitLikeAtPostWithID","deleteLikeAtPostWithID"])),Object(n.b)("modules/comment/post_comment",["replyToPost"])),{},{likePost:function(){var t=this;this.like?this.deleteLikeAtPostWithID(this.post.id).then((function(e){e.data;t.like=!1,t.dislike=!0})).catch((function(e){403==e.response.status&&t.showErrorWithMessage("Please Login in or Sign Up")})):this.submitLikeAtPostWithID(this.post.id).then((function(e){e.data;t.like=!0,t.dislike=!1})).catch((function(e){403==e.response.status&&t.showErrorWithMessage("Please Login in or Sign Up")}))},showErrorWithMessage:function(t){this.$notifier.showMessage({content:t,color:"error"})},replyComment:function(t){var e=this;this.isLoadingToSendComment=!0,this.replyToPost({postId:this.post.id,content:t.replayText}).then((function(t){t.data;e.isLoadingToSendComment=!1,e.isCommentToPostExpanded=!e.isCommentToPostExpanded,e.$notifier.showMessage({content:"Sent",color:"success"})})).catch((function(t){e.showErrorWithMessage(t)}))}})},h=(o(505),o(35)),f=o(36),_=o.n(f),x=o(464),w=o(484),y=o(523),C=o(477),k=o(118),P=o(205),V=o(476),L=o(65),O=o(479),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mb-2 pa-1",attrs:{elevation:"2"}},[o("v-row",[o("v-col",{staticClass:"ml-5"},[o("v-row",{staticClass:"pb-1"},[o("nuxt-link",{staticClass:"text-decoration-none white--text",attrs:{to:"/posts/"+t.post.id}},[o("h2",[t._v(t._s(t.post.title))])]),t._v(" "),null!==t.post.category?o("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/explore/category?category="+t.post.category.title+"&order=new"}},[o("v-sheet",{attrs:{outlined:"",elevation:"1",color:"blue px-3 mt-1 ml-4 rounded-pill"}},[o("span",[t._v("\n                "+t._s(t.post.category.title)+"\n              ")])])],1):t._e()],1),t._v(" "),o("v-row",{staticClass:"pb-1"},[o("div",{staticClass:"mr-2"},[o("v-icon",{attrs:{size:"15"}},[t._v("\n            mdi-clock\n          ")]),t._v(" "),o("span",{staticStyle:{"font-size":"smaller"}},[t._v(t._s(t.postDateDuration))])],1)])],1),t._v(" "),o("v-col",{staticClass:"text-right",attrs:{cols:"2"}},[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),o("span",[t._v("More")])])],1)],1),t._v(" "),o("v-row",[t.post.header_image&&"/media/undefined"!==t.post.header_image?o("v-col",{staticClass:"mx-5 header-image"},[o("img",{attrs:{alt:"image",src:t.$axios.defaults.baseURL+"/media/"+t.post.header_image}})]):t._e()],1),t._v(" "),o("v-row",[o("v-col",{staticClass:"mx-5"},[o("p",[t._v(t._s(t.post.description))])])],1),t._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex justify-right ml-2"},t._l(t.post.hashtags,(function(e,i){return o("v-chip",{key:i,staticClass:"mx-1",attrs:{nuxt:"",to:"/search/hashtag?keyword="+e.text+"&sort=latest",outlined:"",small:"",color:t.chipsColors[i]}},[t._v("\n        #"+t._s(e.text)+"\n      ")])})),1)],1),t._v(" "),o("v-row",{staticClass:"mx-2"},[o("v-col",[o("nuxt-link",{staticClass:"text-decoration-none white--text d-flex",attrs:{to:"/profile/"+t.post.author.username}},[o("div",[o("UserAvatar",{attrs:{color:"primary","avatar-string":t.post.author.username,"avatar-src":t.post.author.profile_picture}})],1),t._v(" "),o("div",{staticClass:"d-flex flex-column ml-3"},[o("span",[o("b",[t._v(t._s(t.post.author.username))])]),t._v(" "),o("span",{staticStyle:{"font-size":"smaller"}},[t._v(t._s(t.post.author.first_name)+" "+t._s(t.post.author.last_name))])])])],1),t._v(" "),o("v-col",{staticClass:"text-right d-flex justify-end align-center"},[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:t.likedPost,icon:""},on:{click:t.likePost}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-heart")])],1)]}}])},[t._v(" "),o("span",[t._v("Like")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){t.isCommentToPostExpanded=!t.isCommentToPostExpanded}}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-comment")])],1)]}}])},[t._v(" "),o("span",[t._v("Comment")])])],1)],1),t._v(" "),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isCommentToPostExpanded,expression:"isCommentToPostExpanded"}],staticClass:"ml-3 mt-3"},[o("NewComment",{attrs:{"is-loading-to-send":t.isLoadingToSendComment,"submit-comment":t.replyComment}})],1)])],1)}),[],!1,null,"f456b1a4",null);e.default=component.exports;_()(component,{UserAvatar:o(116).default,NewComment:o(486).default}),_()(component,{VBtn:x.a,VCard:w.a,VChip:y.a,VCol:C.a,VExpandTransition:k.a,VIcon:P.a,VRow:V.a,VSheet:L.a,VTooltip:O.a})},496:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"b",(function(){return l}));o(27);function r(t){var e=new Date(t).getTime(),o=(new Date).getTime();return o-e<36e5?Math.floor((o-e)/6e4)+" m":o-e>36e5&&o-e<864e5?Math.floor((o-e)/36e5)+" h":Math.floor((o-e)/864e5)+" day(s)"}function n(t){return"".concat($nuxt.$axios.defaults.baseURL,"/media/").concat(t)}function l(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1})}},499:function(t,e,o){var content=o(526);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("caf16300",content,!0,{sourceMap:!1})},505:function(t,e,o){"use strict";var r=o(485);o.n(r).a},506:function(t,e,o){(e=o(13)(!1)).push([t.i,".header-image[data-v-f456b1a4]{text-align:center}.header-image img[data-v-f456b1a4]{width:90%;height:250px;border-radius:5px}",""]),t.exports=e},516:function(t,e,o){"use strict";o.r(e);o(6),o(42),o(11),o(8),o(16),o(17),o(12),o(9);var r=o(2),n=o(117);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Write",props:["community"],data:function(){return{text:null,post:{title:"",description:"",contentType:"OT",category:"",content:"",headerImage:null,hashtags:[],communityName:null}}},methods:c(c({},Object(n.b)("modules/post",["createPost"])),{},{publish:function(){var t=this;this.community&&(this.post.communityName=this.community),this.post.description=this.text,this.post.content=this.text,this.createPost(this.post).then((function(){t.$notifier.showMessage({content:"Posted, hurray!",color:"success"}),t.$emit("posted")})).catch((function(e){t.$notifier.showMessage({content:e.message,color:"error"})}))}})},v=o(35),m=o(36),h=o.n(m),f=o(464),_=o(484),x=o(482),w=o(477),y=o(508),C=o(205),k=o(476),P=o(534),V=o(479),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{elevation:"2"}},[o("v-card-title",[o("v-icon",{staticClass:"pr-3"},[t._v("mdi-pencil")]),t._v("\n    Create a post\n  ")],1),t._v(" "),o("v-textarea",{staticClass:"px-2",attrs:{"auto-grow":"",clearable:"",label:"Quick post",name:"input-7-4",outlined:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),o("v-divider",{staticClass:"primary"}),t._v(" "),o("v-row",{staticClass:"px-4"},[o("v-col",{attrs:{cols:"6"}},[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-help-circle")])],1)]}}])},[t._v(" "),o("span",[t._v("Create a question")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",to:"/new-post"}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-newspaper")])],1)]}}])},[t._v(" "),o("span",[t._v("Create an article")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-poll")])],1)]}}])},[t._v(" "),o("span",[t._v("Create a poll")])])],1),t._v(" "),o("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.publish}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-send")])],1)]}}])},[t._v(" "),o("span",[t._v("Send post")])])],1)],1)],1)}),[],!1,null,"f743fd90",null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:_.a,VCardTitle:x.d,VCol:w.a,VDivider:y.a,VIcon:C.a,VRow:k.a,VTextarea:P.a,VTooltip:V.a})},525:function(t,e,o){"use strict";var r=o(499);o.n(r).a},526:function(t,e,o){var r=o(13),n=o(500),l=o(527);e=r(!1);var c=n(l);e.push([t.i,".intro[data-v-77b15ea0]{border-radius:0 10px 10px 0;background-image:url("+c+");background-size:cover;min-width:80vh}.intro .intro-text[data-v-77b15ea0]{color:#000;width:80%;margin:auto;background-color:hsla(0,0%,100%,.6)}.intro .intro-text h1[data-v-77b15ea0],.intro .intro-text p[data-v-77b15ea0]{color:#2e0057}",""]),t.exports=e},527:function(t,e,o){t.exports=o.p+"img/universe.c0212ee.jpg"},528:function(t,e,o){"use strict";o.r(e);var r={name:"Post-Quick-View-Loader"},n=o(35),l=o(36),c=o.n(l),d=o(524),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"mb-2 pa-1",attrs:{elevation:"2",type:"card-heading, image, list-item-three-line, list-item-avatar"}})}),[],!1,null,"a0a7c404",null);e.default=component.exports;c()(component,{VSkeletonLoader:d.a})},529:function(t,e,o){"use strict";o.r(e);var r={name:"Write-Loader"},n=o(35),l=o(36),c=o.n(l),d=o(484),v=o(482),m=o(477),h=o(508),f=o(205),_=o(476),x=o(524),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mb-2 pa-1",attrs:{elevation:"2"}},[o("v-card-title",[o("v-icon",{staticClass:"pr-3"},[t._v("mdi-pencil")]),t._v("\n    Create a post\n  ")],1),t._v(" "),o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"mb-2 pa-1",attrs:{height:"150",elevation:"2",type:"image"}}),t._v(" "),o("br"),t._v(" "),o("v-divider",{staticClass:"primary"}),t._v(" "),o("v-row",{staticClass:"px-4"},[o("v-col",{attrs:{cols:"1"}},[o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{"border-radius":"300px !important"},attrs:{height:"40",width:"40",elevation:"2",type:"image"}})],1),t._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{"border-radius":"300px !important"},attrs:{height:"40",width:"40",elevation:"2",type:"image"}})],1),t._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{"border-radius":"300px !important"},attrs:{height:"40",width:"40",elevation:"2",type:"image"}})],1),t._v(" "),o("v-col"),t._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{"border-radius":"800px !important"},attrs:{height:"40",width:"40",elevation:"2",type:"image"}})],1)],1)],1)}),[],!1,null,"3180590a",null);e.default=component.exports;c()(component,{VCard:d.a,VCardTitle:v.d,VCol:m.a,VDivider:h.a,VIcon:f.a,VRow:_.a,VSkeletonLoader:x.a})},530:function(t,e,o){"use strict";o.r(e);var r={name:"intro"},n=(o(525),o(35)),component=Object(n.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro d-flex justify-center elevation-20"},[e("div",{staticClass:"intro-text pa-5 rounded-lg text-center"},[e("h1",[this._v("Huddle Is Your Universe!")]),this._v(" "),e("p",{staticClass:"mt-10 font-weight-black"},[this._v("Write what comes to your mind ...")]),this._v(" "),e("p",{staticClass:"font-weight-bold"},[this._v("Explore other universes...")]),this._v(" "),e("p",{staticClass:"font-weight-medium"},[this._v("And more fun stuff...")])])])}],!1,null,"77b15ea0",null);e.default=component.exports},566:function(t,e,o){var content=o(714);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("5986c98e",content,!0,{sourceMap:!1})},567:function(t,e,o){var content=o(716);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("39897316",content,!0,{sourceMap:!1})},613:function(t,e,o){"use strict";o.r(e);var r={name:"People",components:{UserAvatar:o(116).default},props:["people"],data:function(){return{dialog:!1}}},n=o(35),l=o(36),c=o.n(l),d=o(207),v=o(464),m=o(484),h=o(482),f=o(481),_=o(817),x=o(205),w=o(208),y=o(134),C=o(115),k=o(211),P=o(478),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",[o("v-icon",{staticClass:"mr-2"},[t._v("\n      mdi-account-multiple\n    ")]),t._v("\n    People\n  ")],1),t._v(" "),o("v-card-text",[o("v-list",{attrs:{dense:"",rounded:""}},[o("v-list-item-group",t._l(this.people,(function(e,i){return o("v-list-item",{key:i,staticClass:"d-flex align-center",attrs:{to:"/profile/"+e.username}},[o("v-list-item-content",[o("div",{staticClass:"d-flex align-center"},[o("UserAvatar",{attrs:{color:"primary","avatar-string":e.username,"avatar-src":e.profile_picture}}),t._v(" "),o("v-list-item-title",[o("b",[t._v(t._s(e.username))]),t._v(" "),o("br"),t._v(" "),o("span",{staticStyle:{"font-size":"xx-small"}},[t._v(t._s(e.first_name)+" "+t._s(e.last_name))])])],1)])],1)})),1)],1),t._v(" "),o("br"),t._v(" "),o("v-dialog",{attrs:{"max-width":"600px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[t.people.length>15?o("v-btn",t._g(t._b({attrs:{color:"primary",outlined:"",small:""}},"v-btn",n,!1),r),[t._v("\n          See all\n        ")]):t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("People")])]),t._v(" "),o("v-card-text",[o("v-container",[o("v-list",{attrs:{rounded:""}},[o("v-list-item-group",t._l(this.people,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[o("div",{staticClass:"d-flex"},[o("v-avatar",{staticClass:"mr-2",attrs:{size:"40"}},[o("img",{attrs:{src:t.$axios.defaults.baseURL+e.profile_picture,alt:""}})]),t._v(" "),o("v-list-item-title",[t._v("@"+t._s(e.username))])],1)])],1)})),1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"error",outlined:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n            Close\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"e2ec847c",null);e.default=component.exports;c()(component,{UserAvatar:o(116).default}),c()(component,{VAvatar:d.a,VBtn:v.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VContainer:f.a,VDialog:_.a,VIcon:x.a,VList:w.a,VListItem:y.a,VListItemContent:C.a,VListItemGroup:k.a,VListItemTitle:C.c,VSpacer:P.a})},614:function(t,e,o){"use strict";o.r(e);var r={name:"About",props:["name","about"]},n=o(35),l=o(36),c=o.n(l),d=o(484),v=o(482),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",[e("v-card-title",[this._v("\n    "+this._s(this.name)+"\n  ")]),this._v(" "),e("v-card-subtitle",[this._v("About")]),this._v(" "),e("v-card-text",[this._v("\n    "+this._s(this.about)+"\n  ")])],1)}),[],!1,null,"a7841dce",null);e.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d})},615:function(t,e,o){"use strict";o.r(e);var r={name:"Header-Loader"},n=(o(715),o(35)),l=o(36),c=o.n(l),d=o(484),v=o(524),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]},[e("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{type:"image"}}),this._v(" "),e("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{height:"100",type:"image"}}),this._v(" "),e("v-card",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"pa-2"},[e("v-skeleton-loader",{staticClass:"mx-auto avatar",staticStyle:{"border-radius":"300px !important"},attrs:{height:"150",width:"150",type:"image"}}),this._v(" "),e("v-skeleton-loader",{staticClass:"mt-10",attrs:{type:"table-thead",types:{"table-thead":"heading@3"}}})],1)],1)}),[],!1,null,"5c548186",null);e.default=component.exports;c()(component,{VCard:d.a,VSkeletonLoader:v.a})},713:function(t,e,o){"use strict";var r=o(566);o.n(r).a},714:function(t,e,o){(e=o(13)(!1)).push([t.i,".header-image[data-v-f7b79264]{height:300px}.header-image img[data-v-f7b79264]{width:100%;height:300px}.logo[data-v-f7b79264]{height:100px;position:relative}.logo[data-v-f7b79264],.logo .avatar[data-v-f7b79264]{background-color:#23241f}.logo .avatar[data-v-f7b79264]{border:1px solid hsla(0,0%,86.7%,.86667);border-radius:50%;position:absolute;top:-120px;left:calc(50% - 75px)}.logo h1[data-v-f7b79264]{position:absolute;bottom:10px}.custom-loader[data-v-f7b79264]{-webkit-animation:loader-data-v-f7b79264 1s infinite;animation:loader-data-v-f7b79264 1s infinite;display:flex}@-webkit-keyframes loader-data-v-f7b79264{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes loader-data-v-f7b79264{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@media screen and (max-width:576px){.btn-lj[data-v-f7b79264],.col-left[data-v-f7b79264]{margin:10px!important}.col-left[data-v-f7b79264]{display:inline-grid!important}.col-left .col-left-item[data-v-f7b79264]{margin:5px!important}}",""]),t.exports=e},715:function(t,e,o){"use strict";var r=o(567);o.n(r).a},716:function(t,e,o){(e=o(13)(!1)).push([t.i,".avatar[data-v-5c548186]{border-radius:50%;position:absolute;top:-120px;left:calc(50% - 75px)}",""]),t.exports=e},798:function(t,e,o){"use strict";o.r(e);o(11),o(29),o(306);var r=o(26);o(85);var n={name:"Intro",props:["data","userJoined"],data:function(){return{loading:!1}},methods:{userState:function(){this.loading=!this.loading,this.userJoined?this.leave():this.join()},join:function(){var t=this;this.$axios.post("api/community/join_community?name=".concat(this.data.name)).then((function(){t.$emit("userState"),t.loading=!t.loading})).catch()},leave:function(){var t=this;this.$axios.$delete("api/community/leave_community?name=".concat(this.data.name)).then((function(){t.$emit("userState"),t.loading=!t.loading})).catch()},getDate:function(){return t=this.data.since,new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"numeric"});var t}},watch:{},mounted:function(){console.log(this.data.banner)}},l=(o(713),o(35)),c=o(36),d=o.n(c),v=o(207),m=o(464),h=o(477),f=o(205),_=o(476),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",{staticClass:"header-image"},["/media/null"!==t.data.banner?o("img",{attrs:{alt:"",src:t.$axios.defaults.baseURL+t.data.banner}}):t._e()]),t._v(" "),o("v-row",{staticClass:"logo elevation-2"},[o("v-col",{staticClass:"d-flex align-center",attrs:{"order-md":"1",md:"4",cols:"3"}},[o("div",{staticClass:"d-flex align-center ml-10 col-left"},[o("div",{staticClass:"mr-2 col-left-item d-flex align-center"},[o("v-icon",{attrs:{color:"primary"}},[t._v("mdi-calendar")]),t._v(" "),o("span",{staticClass:"primary--text",staticStyle:{"font-size":"small"}},[t._v(t._s(t.getDate()))])],1),t._v(" "),o("div",{staticClass:"ml-2 col-left-item d-flex align-center"},[o("v-icon",{attrs:{color:"primary"}},[t._v("mdi-account")]),t._v(" "),o("span",{staticClass:"primary--text",staticStyle:{"font-size":"small"}},[t._v(t._s(t.data.members))])],1)])]),t._v(" "),o("v-col",{staticClass:"text-center d-flex justify-center",attrs:{"order-md":"2",md:"4",cols:"6"}},[o("v-avatar",{staticClass:"avatar",attrs:{size:"150"}},[o("img",{attrs:{alt:"",src:t.$axios.defaults.baseURL+t.data.logo}})]),t._v(" "),o("h1",[t._v(t._s(t.data.name))])],1),t._v(" "),o("v-col",{staticClass:"d-flex justify-end align-center",attrs:{"order-md":"3",md:"4",cols:"3"}},[o("v-btn",{staticClass:"mr-10 btn-lj",attrs:{small:t.$vuetify.breakpoint.xsOnly,outlined:"",loading:t.loading,disabled:t.loading,color:"primary"},on:{click:t.userState}},[t.userJoined?o("v-icon",{staticClass:"mr-2"},[t._v("mdi-account-minus")]):o("v-icon",{staticClass:"mr-2"},[t._v("mdi-account-plus")]),t._v(" "),t.userJoined?o("span",[t._v("Leave")]):o("span",[t._v("Join")])],1)],1)],1)],1)}),[],!1,null,"f7b79264",null),x=component.exports;d()(component,{VAvatar:v.a,VBtn:m.a,VCol:h.a,VIcon:f.a,VRow:_.a});var w=o(613),y=o(492),C=o(614),k=o(516),P=o(529),V=o(615),L={name:"communityName",components:{PostQuickViewLoader:o(528).default,HeaderLoader:V.default,WriteLoader:P.default,Write:k.default,About:C.default,People:w.default,Intro:x,PostQuickView:y.default},data:function(){return{introData:null,isUserJoined:!1,members:null,posts:null,name:null,loading:{isPostLoading:!0,isCommunityLoading:!0}}},mounted:function(){this.getInfo(),this.getPosts(),this.getPeople()},computed:{isPageLoading:function(){for(var t=0,e=Object.entries(this.loading);t<e.length;t++){var o=Object(r.a)(e[t],2);o[0];if(o[1])return!0}return!1}},methods:{getInfo:function(){var t=this;this.name=this.$route.params.community_name,this.$axios.get("api/community/get_community?name=".concat(this.name,"&summery=t")).then((function(e){t.introData={id:e.data.community.id,name:e.data.community.name,logo:e.data.community.picture,banner:e.data.community.banner_picture,members:e.data.community.members_number,since:e.data.community.date_created,about:e.data.community.about},t.loading.isCommunityLoading=!1,t.loading.isPostLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},getPosts:function(){var t=this;this.$axios.get("api/community/community_posts?name=".concat(this.name)).then((function(e){return t.posts=e.data.posts})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},getPeople:function(){var t=this;this.$axios.get("api/community/community_members?name="+this.name).then((function(e){t.members=e.data.members;var o=t.members.filter((function(u){return u.username===t.$auth.user.username}));t.isUserJoined=1===o.length})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},refreshPage:function(){this.getPeople(),this.getInfo()}}},O=o(484),j=o(524),S=Object(l.a)(L,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.introData?o("Intro",{directives:[{name:"show",rawName:"v-show",value:!t.isPageLoading,expression:"!isPageLoading"}],attrs:{data:t.introData,userJoined:t.isUserJoined},on:{userState:t.refreshPage}}):t._e(),t._v(" "),o("HeaderLoader",{directives:[{name:"show",rawName:"v-show",value:t.isPageLoading,expression:"isPageLoading"}]}),t._v(" "),o("v-row",{staticClass:"pa-5"},[o("v-col",{attrs:{"order-md":"1",order:"1",cols:"12",md:"3"}},[t.introData?o("About",{directives:[{name:"show",rawName:"v-show",value:!t.isPageLoading,expression:"!isPageLoading"}],attrs:{about:t.introData.about,name:t.introData.name}}):t._e(),t._v(" "),o("v-card",{directives:[{name:"show",rawName:"v-show",value:t.isPageLoading,expression:"isPageLoading"}],staticClass:"pa-2"},[o("div",{staticClass:"ma-2"},[o("v-skeleton-loader",{attrs:{type:"heading"}})],1),t._v(" "),o("div",{staticClass:"ma-2"},[o("v-skeleton-loader",{attrs:{type:"paragraph, paragraph, paragraph, paragraph"}})],1)])],1),t._v(" "),o("v-col",{attrs:{"order-md":"2",order:"3",cols:"12",md:"6"}},[t.name?o("Write",{directives:[{name:"show",rawName:"v-show",value:!t.isPageLoading,expression:"!isPageLoading"}],attrs:{community:t.name},on:{posted:t.getPosts}}):t._e(),t._v(" "),o("WriteLoader",{directives:[{name:"show",rawName:"v-show",value:t.isPageLoading,expression:"isPageLoading"}]}),t._v(" "),o("br"),t._v(" "),t._l(t.posts,(function(e){return t.posts?o("PostQuickView",{directives:[{name:"show",rawName:"v-show",value:!t.isPageLoading,expression:"!isPageLoading"}],key:e.id,attrs:{post:e}}):t._e()})),t._v(" "),t._l(5,(function(i){return o("PostQuickViewLoader",{directives:[{name:"show",rawName:"v-show",value:t.isPageLoading,expression:"isPageLoading"}],key:i})}))],2),t._v(" "),o("v-col",{attrs:{"order-md":"3",order:"2",cols:"12",md:"3"}},[t.members?o("People",{directives:[{name:"show",rawName:"v-show",value:!t.isPageLoading,expression:"!isPageLoading"}],attrs:{people:t.members}}):t._e(),t._v(" "),o("v-card",{directives:[{name:"show",rawName:"v-show",value:t.isPageLoading,expression:"isPageLoading"}],staticClass:"pa-2"},[o("div",{staticClass:"ma-2"},[o("v-skeleton-loader",{attrs:{type:"heading"}})],1),t._v(" "),t._l(10,(function(i){return o("div",{key:i,staticClass:"ma-2"},[o("v-skeleton-loader",{attrs:{type:"list-item-avatar"}})],1)}))],2)],1)],1)],1)}),[],!1,null,"683f32ad",null);e.default=S.exports;d()(S,{Intro:o(530).default,HeaderLoader:o(615).default,About:o(614).default,Write:o(516).default,WriteLoader:o(529).default,PostQuickView:o(492).default,PostQuickViewLoader:o(528).default,People:o(613).default}),d()(S,{VCard:O.a,VCol:h.a,VRow:_.a,VSkeletonLoader:j.a})}}]);