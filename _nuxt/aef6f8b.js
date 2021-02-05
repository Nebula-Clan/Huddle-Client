(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{508:function(t,e,o){"use strict";o.r(e);var r={name:"Menu-Icon-Loader",props:["numberOfItems"]},n=o(38),l=o(39),c=o.n(l),d=o(499),m=o(516),v=o(852),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{attrs:{elevation:"2"}},[e("v-skeleton-loader",{attrs:{elevation:"2",type:"card-heading"}}),this._v(" "),e("v-divider",{staticClass:"primary my-2"}),this._v(" "),this._l(this.numberOfItems,(function(i){return e("v-skeleton-loader",{key:i,attrs:{elevation:"2",type:"list-item-avatar"}})}))],2)}),[],!1,null,"2cbb5afc",null);e.default=component.exports;c()(component,{VCard:d.a,VDivider:m.a,VSkeletonLoader:v.a})},509:function(t,e,o){"use strict";o.r(e);var r={name:"Categories-List",props:["categories","avatarSize","avatarPadding"]},n=o(38),l=o(39),c=o.n(l),d=o(211),m=o(215),v=o(135),h=o(117),f=o(218),x=o(115),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list",{attrs:{dense:""}},[o("v-list-item-group",t._l(t.categories,(function(e,i){return o("nuxt-link",{key:i,staticClass:"text-decoration-none",attrs:{to:"/explore?category="+e.title}},[o("v-list-item",{class:void 0===t.avatarPadding?"":t.avatarPadding},[o("v-list-item-icon",[void 0===t.avatarSize?o("v-icon",{domProps:{textContent:t._s(e.icon)}}):o("v-icon",{attrs:{size:t.avatarSize},domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)],1)}),[],!1,null,"408fca29",null);e.default=component.exports;c()(component,{VIcon:d.a,VList:m.a,VListItem:v.a,VListItemContent:h.a,VListItemGroup:f.a,VListItemIcon:x.a,VListItemTitle:h.c})},511:function(t,e,o){"use strict";o.r(e);var r={name:"No-Result",props:["text"]},n=o(38),l=o(39),c=o.n(l),d=o(851),m=o(298),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-img",{staticClass:"mx-auto",attrs:{src:o(530),alt:"empty","max-width":"600px",contain:""}}),this._v(" "),e("v-alert",{attrs:{border:"left","colored-border":"",type:"info",elevation:"2"}},[this._v("\n    Did not match any "+this._s(this.text)+".\n  ")])],1)}),[],!1,null,"1e79e64f",null);e.default=component.exports;c()(component,{VAlert:d.a,VImg:m.a})},530:function(t,e,o){t.exports=o.p+"img/empty.7fce4cb.svg"},559:function(t,e,o){var content=o(690);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("4c15d202",content,!0,{sourceMap:!1})},560:function(t,e,o){var content=o(695);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("15bab0d5",content,!0,{sourceMap:!1})},635:function(t,e,o){"use strict";o.r(e);o(32);var r=o(118),n={name:"Explore-Posts",components:{NoResult:o(511).default,UserAvatar:r.default},props:["posts","isLoading"],computed:{postColumns:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return 6;case"md":case"lg":return 4;case"xl":return 3}}}},l=(o(689),o(38)),c=o(39),d=o.n(c),m=o(477),v=o(499),h=o(497),f=o(493),x=o(120),y=o(691),C=o(298),_=o(135),L=o(117),w=o(491),E=o(852),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isLoading?o("v-row",t._l(24,(function(e){return o("v-col",{key:e,staticClass:"d-flex child-flex",attrs:{cols:t.postColumns}},[o("v-skeleton-loader",{attrs:{elevation:"2",type:"image"}})],1)})),1):t.posts.length>0?o("v-row",t._l(t.posts,(function(e,r){return o("v-col",{key:r,staticClass:"d-flex child-flex",attrs:{cols:t.postColumns}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var l=n.hover;return[o("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4"}},[o("v-img",{staticClass:"rounded-0 grey lighten-2",attrs:{src:t.$axios.defaults.baseURL+"/media/"+e.header_image,"lazy-src":"https://picsum.photos/10/6?image="+(r%30+10),"aspect-ratio":"1"}},[o("v-expand-transition",[l?o("v-card",{staticClass:"mx-auto",attrs:{height:"100%",color:"rounded-0 primary darken"}},[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline mb-1 mt-4"},[t._v("\n                    "+t._s(e.title)+"\n                  ")])],1),t._v(" "),o("UserAvatar",{staticClass:"mt-4",attrs:{color:"primary",size:"50","avatar-src":e.author.profile_picture,"avatar-string":e.author.username}})],1),t._v(" "),o("v-card-text",[t._v("\n                "+t._s(t.$vuetify.breakpoint.xsOnly?e.description.substring(0,40)+"...":t.$vuetify.breakpoint.lgAndUp?e.description.substring(0,200)+"...":e.description.substring(0,100)+"...")+"\n              ")]),t._v(" "),o("v-card-actions",{staticClass:"see-more"},[o("v-btn",{staticClass:"see-more-btn pa-2",attrs:{outlined:"",to:"/posts/"+e.id,text:""}},[t._v("\n                  See more...\n                ")])],1)],1):t._e()],1)],1)],1)]}}],null,!0)})],1)})),1):o("NoResult",{attrs:{text:"post"}})}),[],!1,null,"7c818e0a",null);e.default=component.exports;d()(component,{UserAvatar:o(118).default,NoResult:o(511).default}),d()(component,{VBtn:m.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCol:f.a,VExpandTransition:x.a,VHover:y.a,VImg:C.a,VListItem:_.a,VListItemContent:L.a,VListItemTitle:L.c,VRow:w.a,VSkeletonLoader:E.a})},636:function(t,e,o){"use strict";o.r(e);var r=o(118),n=o(511),l=o(508),c={name:"Explore-People",components:{Avatar:o(225).default,MenuIconLoader:l.default,NoResult:n.default,UserAvatar:r.default},props:["people","isLoading"]},d=o(38),m=o(39),v=o.n(m),h=o(499),f=o(516),x=o(215),y=o(135),C=o(217),_=o(117),L=o(218),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isLoading?o("v-card",{staticClass:"mx-auto pt-2",attrs:{"max-width":"100%",tile:""}},[o("MenuIconLoader",{attrs:{"number-of-items":40}})],1):t.people.length>0?o("v-card",{staticClass:"mx-auto pt-4",attrs:{"max-width":"100%",tile:""}},[o("span",{staticClass:"ml-3 text-h4"},[t._v("Accounts")]),t._v(" "),o("v-divider",{staticClass:"mt-4"}),t._v(" "),o("v-list",{attrs:{dense:""}},[o("v-list-item-group",{attrs:{color:"primary"}},t._l(t.people,(function(e,i){return o("v-list-item",{key:i,staticClass:"py-1",attrs:{to:"/profile/"+e.username}},[o("v-list-item-avatar",[o("Avatar",{attrs:{avatarUrl:t.$axios.defaults.baseURL+e.profile_picture,substituteChar:e.username[0],avatarSize:40}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{staticClass:"text-body-1",domProps:{textContent:t._s(e.username)}}),t._v(" "),o("v-list-item-title",{staticClass:"mt-1 text-caption",domProps:{textContent:t._s(e.first_name+"  "+e.last_name)}})],1)],1)})),1)],1)],1):o("NoResult",{attrs:{text:"user"}})}),[],!1,null,"035dfa8f",null);e.default=component.exports;v()(component,{MenuIconLoader:o(508).default,Avatar:o(225).default,NoResult:o(511).default}),v()(component,{VCard:h.a,VDivider:f.a,VList:x.a,VListItem:y.a,VListItemAvatar:C.a,VListItemContent:_.a,VListItemGroup:L.a,VListItemTitle:_.c})},637:function(t,e,o){"use strict";o.r(e);var r=o(511),n={name:"Explore-Hashtags",components:{MenuIconLoader:o(508).default,NoResult:r.default},props:["hashtags","isLoading"]},l=o(38),c=o(39),d=o.n(c),m=o(499),v=o(516),h=o(211),f=o(215),x=o(135),y=o(117),C=o(218),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isLoading?o("v-card",{staticClass:"mx-auto pt-2",attrs:{"max-width":"100%",tile:""}},[o("MenuIconLoader",{attrs:{"number-of-items":40}})],1):t.hashtags.length>0?o("v-card",{staticClass:"mx-auto pt-4",attrs:{"max-width":"100%",tile:""}},[o("span",{staticClass:"ml-3 text-h4"},[t._v("Hashtags")]),t._v(" "),o("v-divider",{staticClass:"mt-4"}),t._v(" "),o("v-list",{attrs:{dense:""}},t._l(t.hashtags,(function(e,r){return o("nuxt-link",{key:r,staticClass:"text-decoration-none",attrs:{to:"/explore?hashtag="+e.text}},[o("v-list-item-group",{attrs:{color:"primary"}},t._l(t.hashtags,(function(e,r){return o("v-list-item",{key:r},[o("v-icon",{staticClass:"py-2 pr-4",attrs:{size:"35"}},[t._v("\n            mdi-tag-outline\n          ")]),t._v(" "),o("v-list-item-content",[t._v("\n            "+t._s("#"+e.text)+"\n          ")])],1)})),1)],1)})),1)],1):o("NoResult",{attrs:{text:"hashtag"}})}),[],!1,null,"1426fe97",null);e.default=component.exports;d()(component,{MenuIconLoader:o(508).default,NoResult:o(511).default}),d()(component,{VCard:m.a,VDivider:v.a,VIcon:h.a,VList:f.a,VListItem:x.a,VListItemContent:y.a,VListItemGroup:C.a})},638:function(t,e,o){"use strict";o.r(e);var r=o(509),n=o(511),l={name:"Explore-Categories",components:{MenuIconLoader:o(508).default,NoResult:n.default,CategoriesList:r.default},props:["categories","isLoading"]},c=o(38),d=o(39),m=o.n(d),v=o(499),h=o(516),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return this.isLoading?e("v-card",{staticClass:"mx-auto pt-2",attrs:{"max-width":"100%",tile:""}},[e("MenuIconLoader",{attrs:{"number-of-items":40}})],1):this.categories.length>0?e("v-card",{staticClass:"mx-auto pt-4",attrs:{"max-width":"100%",tile:""}},[e("span",{staticClass:"ml-3 text-h4"},[this._v("Categories")]),this._v(" "),e("v-divider",{staticClass:"mt-4"}),this._v(" "),e("CategoriesList",{attrs:{categories:this.categories,avatarSize:"35",avatarPadding:"py-2"}})],1):e("NoResult",{attrs:{text:"category"}})}),[],!1,null,"059172ba",null);e.default=component.exports;m()(component,{MenuIconLoader:o(508).default,CategoriesList:o(509).default,NoResult:o(511).default}),m()(component,{VCard:v.a,VDivider:h.a})},639:function(t,e,o){"use strict";o.r(e);var r=o(511),n=o(118),l={name:"Explore-Communities",props:["communities","isLoading"],components:{MenuIconLoader:o(508).default,UserAvatar:n.default,NoResult:r.default}},c=o(38),d=o(39),m=o.n(d),v=o(499),h=o(516),f=o(215),x=o(135),y=o(217),C=o(117),_=o(218),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isLoading?o("v-card",{staticClass:"mx-auto pt-2",attrs:{"max-width":"100%",tile:""}},[o("MenuIconLoader",{attrs:{"number-of-items":40}})],1):t.communities.length>0?o("v-card",{staticClass:"mx-auto pt-4",attrs:{"max-width":"100%",tile:""}},[o("span",{staticClass:"ml-3 text-h4"},[t._v("Accounts")]),t._v(" "),o("v-divider",{staticClass:"mt-4"}),t._v(" "),o("v-list",{attrs:{dense:""}},[o("v-list-item-group",{attrs:{color:"primary"}},t._l(t.communities,(function(e,i){return o("v-list-item",{key:i,staticClass:"py-1",attrs:{to:"/community/"+e.name}},[o("v-list-item-avatar",[o("UserAvatar",{attrs:{color:"primary","avatar-src":e.picture,"avatar-string":e.name}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{staticClass:"text-body-1",domProps:{textContent:t._s(e.name)}}),t._v(" "),o("v-list-item-title",{staticClass:"mt-1 text-caption",domProps:{textContent:t._s(e.about)}})],1)],1)})),1)],1)],1):o("NoResult",{attrs:{text:"user"}})}),[],!1,null,"530e967c",null);e.default=component.exports;m()(component,{MenuIconLoader:o(508).default,UserAvatar:o(118).default,NoResult:o(511).default}),m()(component,{VCard:v.a,VDivider:h.a,VList:f.a,VListItem:x.a,VListItemAvatar:y.a,VListItemContent:C.a,VListItemGroup:_.a,VListItemTitle:C.c})},689:function(t,e,o){"use strict";var r=o(559);o.n(r).a},690:function(t,e,o){(e=o(14)(!1)).push([t.i,".see-more[data-v-7c818e0a]{position:absolute;bottom:0;right:0}.see-more .see-more-btn[data-v-7c818e0a]{border:3px solid #fff}",""]),t.exports=e},694:function(t,e,o){"use strict";var r=o(560);o.n(r).a},695:function(t,e,o){(e=o(14)(!1)).push([t.i,".explore-nav[data-v-24ceb5e8]{width:100%;position:fixed;bottom:0;left:0}",""]),t.exports=e},864:function(t,e,o){"use strict";o.r(e);o(7),o(11),o(8),o(308),o(16),o(17),o(13),o(9);var r=o(2),n=o(28),l=o(635),c=o(636),d=o(637),m=o(638),v=o(119),h=o(639);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"explore",components:{ExploreCommunities:h.default,ExploreCategories:m.default,ExploreHashtags:d.default,ExplorePeople:c.default,ExplorePosts:l.default},data:function(){return{pageIndex:0,posts:[],people:[],communities:[],categories:[],hashtags:[],loading:{isPostLoading:!0,isCategoryLoading:!0,isHashtagsLoading:!0,isUsersLoading:!0,isCommunitiesLoading:!0}}},mounted:function(){this.explore()},computed:{isPageLoading:function(){for(var t=0,e=Object.entries(this.loading);t<e.length;t++){var o=Object(n.a)(e[t],2);o[0];if(o[1])return!0}return!1},menuName:function(){switch(this.pageIndex){case 0:return"ALL";case 1:return"PEOPLE";case 2:return"COMMUNITIES";case 3:return"HASHTAGS";case 4:return"CATEGORIES";default:return}},color:function(){switch(this.value){case 0:return"blue-grey";case 1:return"teal";case 2:return"brown";case 3:return"indigo";default:return"blue-grey"}}},methods:x(x(x(x(x(x(x(x(x({},Object(v.b)("modules/category/category",["getAllCategories"])),Object(v.b)("modules/explore",["explorePosts"])),Object(v.b)("modules/explore",["explorePeople"])),Object(v.b)("modules/explore",["searchPosts"])),Object(v.b)("modules/explore",["searchHashtags"])),Object(v.b)("modules/explore",["searchCategories"])),Object(v.b)("modules/explore",["searchCommunities"])),Object(v.b)("modules/explore",["explorePostsWithHashtag"])),{},{explore:function(){this.loading={isPostLoading:!0,isCategoryLoading:!0,isCommunitiesLoading:!0,isHashtagsLoading:!0,isUsersLoading:!0},this.fetchPosts(),this.fetchPeople(),this.fetchCommunities(),this.fetchHashtags(),this.fetchCategories()},fetchPosts:function(){var t=this;if(this.isKeywordEmpty(this.$route.query))if(this.isHashtagEmpty(this.$route.query)){var e=this.isCategoryEmpty(this.$route.query)?"":this.$route.query.category;this.explorePosts({category:e}).then((function(e){var data=e.data;t.posts=data.posts,t.loading.isPostLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))}else{var o=this.$route.query.hashtag;this.explorePostsWithHashtag({hashtag:o}).then((function(e){var data=e.data;t.posts=data.posts,t.loading.isPostLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))}else this.searchPosts({keyword:this.$route.query.keyword}).then((function(e){var data=e.data;t.posts=data.posts_finded,t.loading.isPostLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},fetchCategories:function(){var t=this;this.isKeywordEmpty(this.$route.query)?this.getAllCategories().then((function(e){var data=e.data;t.categories=data.categories,t.loading.isCategoryLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})})):this.searchCategories({keyword:this.$route.query.keyword}).then((function(e){var data=e.data;t.categories=data.categories,t.loading.isCategoryLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},fetchPeople:function(){var t=this,e=this.isKeywordEmpty(this.$route.query)?void 0:this.$route.query.keyword;this.explorePeople({keyword:e}).then((function(e){var data=e.data;t.people=data.users_finded,t.loading.isUsersLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},fetchHashtags:function(){var t=this,e=this.isKeywordEmpty(this.$route.query)?void 0:this.$route.query.keyword;this.searchHashtags({keyword:e}).then((function(e){var data=e.data;t.hashtags=data.hashtags,t.loading.isHashtagsLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},fetchCommunities:function(){var t=this,e=this.isKeywordEmpty(this.$route.query)?void 0:this.$route.query.keyword;this.searchCommunities({keyword:e}).then((function(e){var data=e.data;t.communities=data.communities,t.loading.isCommunitiesLoading=!1})).catch((function(e){return t.$notifier.showMessage({content:e.message,color:"error"})}))},isCategoryEmpty:function(t){return void 0===t||(void 0===t.category||(null===t.category||""===t.category))},isKeywordEmpty:function(t){return void 0===t||(void 0===t.keyword||(null===t.keyword||""===t.keyword))},isHashtagEmpty:function(t){return void 0===t||(void 0===t.hashtag||(null===t.hashtag||""===t.hashtag))}}),watch:{"$route.query.keyword":function(){this.explore()},"$route.query.category":function(){this.pageIndex=0,this.explore()},"$route.query.hashtag":function(){this.pageIndex=0,this.explore()}}},C=(o(694),o(38)),_=o(39),L=o.n(_),w=o(879),E=o(477),I=o(538),P=o(493),V=o(211),O=o(491),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"px-10 py-5"},[o("v-col",{attrs:{cols:"12",xl:"1",lg:"1",md:"1",sm:"0"}}),t._v(" "),o("v-col",{staticClass:"mb-10",attrs:{cols:"12",xl:"10",lg:"10",md:"10",sm:"12"}},[t.isKeywordEmpty(this.$route.query)?t.isCategoryEmpty(this.$route.query)?t.isHashtagEmpty(this.$route.query)?t._e():o("v-chip",{staticClass:"mb-4 ",attrs:{color:"blue darken-2",label:""}},[o("v-icon",{attrs:{left:""}},[t._v("\n        mdi-tag-multiple\n      ")]),t._v("\n      "+t._s(this.$route.query.hashtag)+"\n    ")],1):o("v-chip",{staticClass:"mb-4 ",attrs:{color:"blue darken-2",label:""}},[o("v-icon",{attrs:{left:""}},[t._v("\n        mdi-tag-faces\n      ")]),t._v("\n      "+t._s(this.$route.query.category)+"\n    ")],1):o("v-chip",{staticClass:"mb-4 ",attrs:{color:"blue darken-2",label:""}},[o("v-icon",{attrs:{left:""}},[t._v("\n        mdi-magnify\n      ")]),t._v("\n      "+t._s(this.$route.query.keyword)+"\n    ")],1),t._v(" "),o("ExplorePosts",{directives:[{name:"show",rawName:"v-show",value:"ALL"===t.menuName,expression:"menuName === 'ALL'"}],attrs:{posts:t.posts,"is-loading":t.isPageLoading}}),t._v(" "),o("ExplorePeople",{directives:[{name:"show",rawName:"v-show",value:"PEOPLE"===t.menuName,expression:"menuName === 'PEOPLE'"}],attrs:{people:t.people,"is-loading":t.isPageLoading}}),t._v(" "),o("ExploreCommunities",{directives:[{name:"show",rawName:"v-show",value:"COMMUNITIES"===t.menuName,expression:"menuName === 'COMMUNITIES'"}],attrs:{communities:t.communities,"is-loading":t.isPageLoading}}),t._v(" "),o("ExploreHashtags",{directives:[{name:"show",rawName:"v-show",value:"HASHTAGS"===t.menuName,expression:"menuName === 'HASHTAGS'"}],attrs:{hashtags:t.hashtags,"is-loading":t.isPageLoading}}),t._v(" "),o("ExploreCategories",{directives:[{name:"show",rawName:"v-show",value:"CATEGORIES"===t.menuName,expression:"menuName==='CATEGORIES'"}],attrs:{categories:t.categories,"is-loading":t.isPageLoading}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",xl:"1",lg:"1",md:"1",sm:"0"}}),t._v(" "),o("div",[o("div",{staticClass:"explore-nav"},[o("v-bottom-navigation",{staticClass:"pb-1",attrs:{"background-color":"primary",color:"white"},model:{value:t.pageIndex,callback:function(e){t.pageIndex=e},expression:"pageIndex"}},[o("v-btn",[o("span",{staticClass:"pt-1"},[t._v("Explore")]),t._v(" "),o("v-icon",[t._v("mdi-compass")])],1),t._v(" "),o("v-btn",[o("span",{staticClass:"pt-1"},[t._v("People")]),t._v(" "),o("v-icon",[t._v("mdi-account-outline")])],1),t._v(" "),o("v-btn",[o("span",{staticClass:"pt-1"},[t._v("Communities")]),t._v(" "),o("v-icon",[t._v("mdi-account-multiple-outline")])],1),t._v(" "),o("v-btn",[o("span",{staticClass:"pt-1"},[t._v("Hashtags")]),t._v(" "),o("v-icon",[t._v("mdi-tag-multiple")])],1),t._v(" "),o("v-btn",[o("span",{staticClass:"pt-1"},[t._v("Categories")]),t._v(" "),o("v-icon",[t._v("mdi-tag-faces")])],1)],1)],1)])],1)}),[],!1,null,"24ceb5e8",null);e.default=component.exports;L()(component,{ExplorePosts:o(635).default,ExplorePeople:o(636).default,ExploreCommunities:o(639).default,ExploreHashtags:o(637).default,ExploreCategories:o(638).default}),L()(component,{VBottomNavigation:w.a,VBtn:E.a,VChip:I.a,VCol:P.a,VIcon:V.a,VRow:O.a})}}]);