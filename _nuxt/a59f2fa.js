(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{505:function(t,e,o){var content=o(540);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("67b5d29b",content,!0,{sourceMap:!1})},509:function(t,e,o){"use strict";o.r(e);var n={name:"Categories-List",props:["categories","avatarSize","avatarPadding"]},r=o(38),c=o(39),l=o.n(c),d=o(211),f=o(215),m=o(135),v=o(117),h=o(218),_=o(115),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list",{attrs:{dense:""}},[o("v-list-item-group",t._l(t.categories,(function(e,i){return o("nuxt-link",{key:i,staticClass:"text-decoration-none",attrs:{to:"/explore?category="+e.title}},[o("v-list-item",{class:void 0===t.avatarPadding?"":t.avatarPadding},[o("v-list-item-icon",[void 0===t.avatarSize?o("v-icon",{domProps:{textContent:t._s(e.icon)}}):o("v-icon",{attrs:{size:t.avatarSize},domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)],1)}),[],!1,null,"408fca29",null);e.default=component.exports;l()(component,{VIcon:d.a,VList:f.a,VListItem:m.a,VListItemContent:v.a,VListItemGroup:h.a,VListItemIcon:_.a,VListItemTitle:v.c})},518:function(t,e,o){"use strict";o.r(e);o(32),o(6);var n={name:"CreateCommunity",data:function(){return{formValid:!1,body:{name:"",about:"",picture:null,banner_picture:null},nameRules:[function(t){return!!t||"This field is required"},function(t){return t.length>=4||"Name must be at least 4 characters or more"}]}},methods:{submit:function(){var t=this,e=new FormData;e.append("name",this.body.name),e.append("about",this.body.about),e.append("picture",this.body.picture),e.append("banner_picture",this.body.banner_picture),this.$axios.post("api/community/create_community",e).then((function(){t.$notifier.showMessage({content:"".concat(t.body.name," Created! Happy writing"),color:"success"}),t.$axios.post("api/community/join_community?name=".concat(t.body.name)).then((function(){t.$emit("userState"),t.loading=!t.loading})).catch((function(e){return t.$notifier.showMessage({content:e.response.data.error.message,color:"error"})})).finally((function(){t.$emit("close"),t.body={name:"",about:"",picture:null,banner_picture:null}}))})).catch((function(e){t.$notifier.showMessage({content:e.response.data.error.message,color:"error"})}))},close:function(){this.$emit("close")}}},r=o(38),c=o(39),l=o.n(c),d=o(477),f=o(499),m=o(497),v=o(493),h=o(853),_=o(531),y=o(211),C=o(491),x=o(494),w=o(476),O=o(627),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",[o("v-icon",{staticClass:"mr-2"},[t._v("\n      mdi-plus\n    ")]),t._v("\n    Create Community\n  ")],1),t._v(" "),o("v-card-text",[o("v-row",[o("v-form",{staticStyle:{width:"100%"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:t.nameRules,counter:"",label:"Name",outlined:""},model:{value:t.body.name,callback:function(e){t.$set(t.body,"name",e)},expression:"body.name"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{"auto-grow":"",counter:"",label:"Description",outlined:""},model:{value:t.body.about,callback:function(e){t.$set(t.body,"about",e)},expression:"body.about"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-file-input",{attrs:{accept:"image/png, image/jpeg, image/bmp",label:"Select logo",outlined:"","prepend-icon":"mdi-camera","show-size":"","truncate-length":"30"},model:{value:t.body.picture,callback:function(e){t.$set(t.body,"picture",e)},expression:"body.picture"}}),t._v(" "),o("v-file-input",{attrs:{accept:"image/png, image/jpeg, image/bmp",label:"Select banner",outlined:"","prepend-icon":"mdi-camera","show-size":"","truncate-length":"30"},model:{value:t.body.banner_picture,callback:function(e){t.$set(t.body,"banner_picture",e)},expression:"body.banner_picture"}})],1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"error",outlined:"",text:""},on:{click:function(e){return t.close()}}},[t._v("\n      Close\n    ")]),t._v(" "),o("v-btn",{attrs:{color:"primary",outlined:"",text:"",type:"submit"},on:{click:t.submit}},[t._v("\n      Create\n    ")])],1)],1)}),[],!1,null,"7237cf86",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:v.a,VFileInput:h.a,VForm:_.a,VIcon:y.a,VRow:C.a,VSpacer:x.a,VTextField:w.a,VTextarea:O.a})},532:function(t,e,o){"use strict";o.r(e);o(7),o(11),o(8),o(16),o(17),o(13),o(9);var n=o(2),r=o(119);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"user.component",components:{UserAvatar:o(118).default},props:["user"],data:function(){return{profileInfo:{posts:[],followers:[],followings:[]}}},mounted:function(){this.fetchFollowers(),this.fetchFollowings(),this.fetchPosts()},methods:l(l(l(l({},Object(r.b)("modules/post",["getPostByAuthor"])),Object(r.b)("modules/follow",["getFollowers"])),Object(r.b)("modules/follow",["getFollowings"])),{},{fetchFollowings:function(){var t=this;this.getFollowings({username:this.$auth.user.username}).then((function(e){var data=e.data;t.profileInfo.followings=data.user_followings})).catch((function(e){t.$notifier.showMessage({content:e.message,color:"error"})}))},fetchFollowers:function(){var t=this;this.getFollowers({username:this.$auth.user.username}).then((function(e){var data=e.data;t.profileInfo.followers=data.user_followers})).catch((function(e){t.$notifier.showMessage({content:e.message,color:"error"})}))},fetchPosts:function(){var t=this;this.getPostByAuthor({username:this.$auth.user.username}).then((function(e){var data=e.data;t.profileInfo.posts=data.all_user_posts})).catch((function(e){t.$notifier.showMessage({content:e.message,color:"error"})}))}})},f=(o(539),o(38)),m=o(39),v=o.n(m),h=o(499),_=o(497),y=o(516),C=o(211),x=o(298),w=o(491),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"elevation-2"},[o("div",{staticClass:"profile mb-10"},[o("v-img",{staticClass:"white--text align-end custom-rounded",attrs:{src:this.$axios.defaults.baseURL+t.user.banner_picture,height:"80px"}}),t._v(" "),o("nuxt-link",{attrs:{to:"/profile/"+t.user.username}},[o("UserAvatar",{staticClass:"profile-pic",attrs:{color:"primary",size:80,"avatar-string":t.user.username,"avatar-src":t.user.profile_picture}})],1)],1),t._v(" "),o("v-card-title",{staticClass:"justify-center"},[t._v("\n    "+t._s(t.user.first_name)+" "+t._s(t.user.last_name)+"\n  ")]),t._v(" "),o("v-card-subtitle",{staticClass:"text-center"},[t._v("\n    "+t._s(t.user.username)+"\n  ")]),t._v(" "),o("v-card-text",{staticClass:"text-center"},[o("v-icon",[t._v("mdi-format-quote-open")]),t._v("\n    "+t._s(t.user.biology)+"\n    "),o("v-icon",[t._v("mdi-format-quote-close")])],1),t._v(" "),o("v-divider",{staticClass:"primary"}),t._v(" "),o("v-row",{staticClass:"text-center pa-2 justify-space-around"},[o("div",[o("b",[t._v(t._s(t.profileInfo.followings.length))]),t._v(" "),o("br"),t._v(" "),o("span",[t._v("Following")])]),t._v(" "),o("div",[o("b",[t._v(t._s(t.profileInfo.posts.length))]),t._v(" "),o("br"),t._v(" "),o("span",[t._v("Posts")])]),t._v(" "),o("div",[o("b",[t._v(t._s(t.profileInfo.followers.length))]),t._v(" "),o("br"),t._v(" "),o("span",[t._v("Followers")])])])],1)}),[],!1,null,"29cb5175",null);e.default=component.exports;v()(component,{UserAvatar:o(118).default}),v()(component,{VCard:h.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VDivider:y.a,VIcon:C.a,VImg:x.a,VRow:w.a})},533:function(t,e,o){"use strict";o.r(e);o(7),o(11),o(8),o(16),o(17),o(13),o(9);var n=o(2),r=o(119);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"categories.component",components:{CategoriesList:o(509).default},data:function(){return{categories:[]}},mounted:function(){this.fetchCategories()},methods:l(l({},Object(r.b)("modules/category/category",["getAllCategories"])),{},{fetchCategories:function(){var t=this;this.getAllCategories().then((function(e){var data=e.data;console.log(data.categories),t.categories=data.categories})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))}})},f=o(38),m=o(39),v=o.n(m),h=o(499),_=o(497),y=o(516),component=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"elevation-2"},[e("v-card-subtitle",[this._v("\n    Explore Categories\n  ")]),this._v(" "),e("v-divider",{staticClass:"primary"}),this._v(" "),e("CategoriesList",{attrs:{categories:this.categories}})],1)}),[],!1,null,"331ccf91",null);e.default=component.exports;v()(component,{CategoriesList:o(509).default}),v()(component,{VCard:h.a,VCardSubtitle:_.b,VDivider:y.a})},534:function(t,e,o){"use strict";o.r(e);var n=o(518),r={name:"communities.component",props:["communities"],components:{UserAvatar:o(118).default,CreateCommunity:n.default},data:function(){return{dialog:!1}},methods:{close:function(){this.dialog=!1,this.$emit("refresh")}}},c=o(38),l=o(39),d=o.n(l),f=o(477),m=o(499),v=o(497),h=o(680),_=o(516),y=o(211),C=o(215),x=o(135),w=o(217),O=o(117),V=o(218),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"elevation-2"},[o("v-card-subtitle",{staticClass:"d-flex justify-space-between"},[t._v("\n    Communities\n    "),o("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{"x-small":"",icon:""}},"v-btn",r,!1),n),[o("v-icon",[t._v("\n            mdi-plus\n          ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("CreateCommunity",{on:{close:t.close}})],1)],1),t._v(" "),o("v-divider",{staticClass:"primary"}),t._v(" "),o("v-list",{attrs:{dense:""}},[o("v-list-item-group",t._l(t.communities,(function(e,i){return o("nuxt-link",{key:i,staticClass:"text-decoration-none",attrs:{to:"/community/"+e.name}},[o("v-list-item",[o("v-list-item-avatar",[o("Avatar",{attrs:{avatarUrl:t.$axios.defaults.baseURL+e.picture,substituteChar:e.name[0],avatarSize:40}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("\n                "+t._s(e.name)+" | "+t._s(e.members_number)+"\n              ")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,"d57d4e70",null);e.default=component.exports;d()(component,{CreateCommunity:o(518).default,Avatar:o(225).default}),d()(component,{VBtn:f.a,VCard:m.a,VCardSubtitle:v.b,VDialog:h.a,VDivider:_.a,VIcon:y.a,VList:C.a,VListItem:x.a,VListItemAvatar:w.a,VListItemContent:O.a,VListItemGroup:V.a,VListItemTitle:O.c})},539:function(t,e,o){"use strict";var n=o(505);o.n(n).a},540:function(t,e,o){(e=o(14)(!1)).push([t.i,".profile[data-v-29cb5175]{position:relative}.profile .profile-pic[data-v-29cb5175]{position:absolute;bottom:-40px;left:calc(50% - 56px)}.profile .custom-rounded[data-v-29cb5175]{border-radius:5px 5px 0 0}b[data-v-29cb5175],span[data-v-29cb5175]{font-size:x-small}",""]),t.exports=e},585:function(t,e,o){var content=o(749);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("bf13af9e",content,!0,{sourceMap:!1})},586:function(t,e,o){var content=o(751);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("32296472",content,!0,{sourceMap:!1})},643:function(t,e,o){"use strict";o.r(e);o(7),o(36),o(11),o(8),o(57),o(181),o(32),o(16),o(17),o(13),o(26),o(65),o(9);var n=o(2),r=o(671),c=o(119);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"CreatePost",data:function(){return{draft:!1,dialog:!1,formValid:!1,hashtag:"",showCurrentHeaderImage:!1,suggestions:[],post:{id:"",title:"",description:"",contentType:"OT",category:"",content:"",headerImage:null,communityName:"",hashtags:[]},isPostPublishing:!1,isSavingDraft:!1,communities:[],categories:[],titleRules:[function(t){return!!t||"Title is required"},function(t){return t.length<=50||"Max length is 50 characters"}],descRules:[function(t){return!!t||"Description is required"},function(t){return t.length<=750||"Max length is 750 characters"}],chipsColors:["blue","red","green","purple","orange"]}},components:{Editor:r.default},mounted:function(){this.fetchCommunities(),this.fetchCategories(),this.getDraft()},methods:d(d(d(d({},Object(c.b)("modules/post",["createPost"])),Object(c.b)("modules/community/community",["getAllUserCommunities"])),Object(c.b)("modules/category/category",["getAllCategories"])),{},{publish:function(){var t=this;null!==this.post.headerImage&&void 0!==this.post.headerImage||delete this.post.headerImage,console.log(this.post),this.isPostPublishing=!0,this.createPost(this.post).then((function(e){t.$auth.redirect("home")})).catch((function(e){console.error(e),t.isPostPublishing=!1}))},addHashtags:function(){var t=this.hashtag.replace(/ /g,"");this.post.hashtags.length<5&&this.post.hashtags.push(t),this.hashtag=""},recommend:function(){var t=this,e=this.hashtag.replace(/ /g,"");this.$axios.$get("api/hashtag/similarity?&text=".concat(e)).then((function(e){t.suggestions=e.hashtags})).catch()},setHashtag:function(t){this.hashtag="",this.post.hashtags.pop(),this.post.hashtags.push(t),this.suggestions=[]},deleteHashtag:function(t){this.post.hashtags.splice(t,1)},fetchCommunities:function(){var t=this;this.getAllUserCommunities().then((function(e){var data=e.data;t.communities=data.communities.map((function(t){return t.name}))})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},fetchCategories:function(){var t=this;this.getAllCategories().then((function(e){var data=e.data;t.categories=data.categories.map((function(t){return t.title}))})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},getDraft:function(){var t=this,e=this.$route.query.draft;e&&this.$axios.get("api/draft/get_draft",{params:{draft_id:e}}).then((function(e){var o=e.data.draft_post;t.post={id:o.id,title:o.title,description:o.description,headerImage:o.header_image,content:o.post_content.content_text,hashtags:o.hashtags.map((function(t){return t.text})),contentType:o.post_content.content_type,category:o.category,communityName:""},t.draft=!0,t.showCurrentHeaderImage=!0})).catch((function(e){t.$notifier.showMessage({content:e.response.data.error.message,color:"error"})}))},saveAsDraft:function(){var t,e,o=this,data=new FormData;data.append("title",this.post.title),data.append("description",this.post.description),data.append("content_type",this.post.contentType),data.append("category",this.post.category),data.append("content",this.post.content),data.append("header_image",this.post.headerImage),data.append("community_name",this.post.communityName),this.post.hashtags.map((function(t){return data.append("hashtags",t)})),this.draft?(t="/api/draft/update_draft/",data.append("id",this.post.id),e=this.$axios.put):(t="/api/draft/create/",e=this.$axios.post),e(t,data).then((function(){return o.$notifier.showMessage({content:"Saved!",color:"success"})})).catch((function(t){return o.$notifier.showMessage({content:t.response.data.error.message,color:"error"})}))},newImageAdded:function(){this.showCurrentHeaderImage=!1}})},m=(o(750),o(38)),v=o(39),h=o.n(v),_=o(477),y=o(499),C=o(497),x=o(538),w=o(493),O=o(496),V=o(680),j=o(516),P=o(853),$=o(531),I=o(211),k=o(491),D=o(877),S=o(494),E=o(476),A=o(627),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{elevation:"2"}},[o("v-card-title",[o("v-icon",{staticClass:"pr-3"},[t._v("mdi-pencil")]),t._v("\n      New Post\n    ")],1),t._v(" "),o("Editor",{attrs:{draft:t.post.content},on:{updateEditorContent:function(e){t.post.content=e}}}),t._v(" "),o("v-divider",{staticClass:"primary"}),t._v(" "),o("v-row",{staticClass:"px-4"},[o("v-col",{staticClass:"d-flex justify-end"},[o("v-dialog",{attrs:{"max-width":"600px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"primary",outlined:""}},"v-btn",r,!1),n),[t._v("\n              publish\n            ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Create a new post")])]),t._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-form",{staticClass:"publish-form",on:{submit:function(e){return e.preventDefault(),t.publish(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:t.titleRules,counter:"",label:"Title",outlined:""},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{rules:t.descRules,"auto-grow":"",counter:"",label:"Description",outlined:""},model:{value:t.post.description,callback:function(e){t.$set(t.post,"description",e)},expression:"post.description"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-file-input",{attrs:{accept:"image/png, image/jpeg, image/bmp",label:"Select post cover",outlined:"","show-size":"","prepend-icon":"mdi-camera","truncate-length":"30"},on:{change:function(e){return t.newImageAdded()}},model:{value:t.post.headerImage,callback:function(e){t.$set(t.post,"headerImage",e)},expression:"post.headerImage"}}),t._v(" "),t.draft&&t.showCurrentHeaderImage?o("div",{staticClass:"d-flex align-center"},[o("span",{staticClass:"mr-4"},[t._v("Current: ")]),t._v(" "),o("img",{staticClass:"rounded",attrs:{alt:"previous",width:"100",height:"100",src:t.$axios.defaults.baseURL+"/media/"+t.post.headerImage}})]):t._e()],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.communities,label:"Community",outlined:""},model:{value:t.post.communityName,callback:function(e){t.$set(t.post,"communityName",e)},expression:"post.communityName"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.categories,label:"Category",outlined:""},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Up to 5 hash tags",outlined:""},on:{change:t.addHashtags,input:t.recommend},model:{value:t.hashtag,callback:function(e){t.hashtag=e},expression:"hashtag"}}),t._v(" "),t.suggestions.length>0?o("div",[o("span",[t._v("Suggestion")]),t._v(" "),t._l(t.suggestions,(function(e,i){return o("v-chip",{key:i,staticClass:"ma-1",attrs:{small:""},on:{click:function(o){return t.setHashtag(e.text)}}},[t._v("\n                          "+t._s(e.text)+"\n                        ")])}))],2):t._e(),t._v(" "),o("div",{staticClass:"my-2"},t._l(this.post.hashtags,(function(e,i){return o("v-chip",{key:i,staticClass:"ma-1",attrs:{color:t.chipsColors[i],close:"",outlined:""},on:{"click:close":function(e){return t.deleteHashtag(i)}}},[t._v("\n                          #"+t._s(e)+"\n                        ")])})),1)],1)],1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"error",outlined:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                Close\n              ")]),t._v(" "),o("v-btn",{attrs:{loading:t.isSavingDraft,color:"secondary",outlined:"",text:""},on:{click:t.saveAsDraft}},[t._v("\n                Save As Draft\n              ")]),t._v(" "),o("v-btn",{attrs:{disabled:!t.formValid,loading:t.isPostPublishing,color:"primary",outlined:"",text:""},on:{click:t.publish}},[t._v("\n                Create\n              ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"79db6466",null);e.default=component.exports;h()(component,{Editor:o(671).default}),h()(component,{VBtn:_.a,VCard:y.a,VCardActions:C.a,VCardText:C.c,VCardTitle:C.d,VChip:x.a,VCol:w.a,VContainer:O.a,VDialog:V.a,VDivider:j.a,VFileInput:P.a,VForm:$.a,VIcon:I.a,VRow:k.a,VSelect:D.a,VSpacer:S.a,VTextField:E.a,VTextarea:A.a})},671:function(t,e,o){"use strict";o.r(e);var n={props:["draft"],data:function(){return{content:"",editorOption:{theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image","video"]]}}}},methods:{onEditorBlur:function(t){},onEditorFocus:function(t){},onEditorReady:function(t){}},mounted:function(){this.content=this.draft},watch:{draft:function(t,e){this.content=this.draft}}},r=(o(748),o(38)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container-editor"},[o("client-only",[o("quill-editor",{ref:"editor",staticStyle:{"min-height":"300px"},attrs:{options:t.editorOption},on:{change:function(e){return t.$emit("updateEditorContent",t.content)},blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)}),[],!1,null,"00c9b015",null);e.default=component.exports},748:function(t,e,o){"use strict";var n=o(585);o.n(n).a},749:function(t,e,o){(e=o(14)(!1)).push([t.i,".container-editor[data-v-00c9b015]{color:#fff;margin:0 auto}.container-editor .quill-editor[data-v-00c9b015]{overflow-y:auto}",""]),t.exports=e},750:function(t,e,o){"use strict";var n=o(586);o.n(n).a},751:function(t,e,o){(e=o(14)(!1)).push([t.i,".publish-form[data-v-79db6466]{width:100%}",""]),t.exports=e},868:function(t,e,o){"use strict";o.r(e);var n=o(532),r=o(533),c=o(534),l=o(643),d={name:"new-post",components:{User:n.default,Categories:r.default,Communities:c.default,CreatePost:l.default}},f=o(38),m=o(39),v=o.n(m),h=o(496),component=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"px-5 py-8"},[e("CreatePost")],1)}),[],!1,null,"708c8c05",null);e.default=component.exports;v()(component,{CreatePost:o(643).default}),v()(component,{VContainer:h.a})}}]);