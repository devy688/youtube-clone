(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(e,t,a){e.exports={app:"app_app__j5nyl",navbar:"app_navbar__216nK"}},27:function(e,t,a){e.exports={videos:"video_list_videos__3DYFL"}},3:function(e,t,a){e.exports={header:"search_header_header__3Go8G",logo:"search_header_logo__1pcbb",menu:"search_header_menu__nRE6z",logo__icon:"search_header_logo__icon__tGrb6",title:"search_header_title__36gBI",search:"search_header_search__2DeYW",input:"search_header_input__2Jms7",button:"search_header_button__21shv",buttonImg:"search_header_buttonImg__2yiJh",login:"search_header_login__1Rq2v",login__title:"search_header_login__title__3m1MD"}},35:function(e,t,a){},4:function(e,t,a){e.exports={container:"video_item_container__1k5hL",grid:"video_item_grid__3DQrS",list:"video_item_list__3aD18",video:"video_item_video__1Iwqk","thumbnails-wrap":"video_item_thumbnails-wrap__2tBfI",thumbnail:"video_item_thumbnail__1X5Q-",metadata:"video_item_metadata__3srm6","channel-img":"video_item_channel-img__2mLZp",info:"video_item_info__NFxz0",title:"video_item_title__Dq7yj","channel-title":"video_item_channel-title__2e7vn",views:"video_item_views__1XAHq",date:"video_item_date__3kUeE","sub-info":"video_item_sub-info__2dT_s"}},5:function(e,t,a){e.exports={menu:"nav_bar_menu__1QjC1",name:"nav_bar_name__1uEL1"}},58:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(26),c=a.n(i),r=(a(35),a(16)),l=a(3),o=a.n(l),d=a(0),u=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),s=function(){var e=a.current.value;t(e)};return Object(d.jsxs)("header",{className:o.a.header,children:[Object(d.jsxs)("div",{className:o.a.logo,children:[Object(d.jsx)("div",{className:o.a.menu,children:Object(d.jsx)("i",{className:"fas fa-bars"})}),Object(d.jsxs)("div",{className:o.a.logo__icon,children:[Object(d.jsx)("img",{className:o.a.img,src:"images/logo.png",alt:"logo"}),Object(d.jsx)("h1",{className:o.a.title,children:"Youtube"})]})]}),Object(d.jsxs)("div",{className:o.a.search,children:[Object(d.jsx)("input",{ref:a,className:o.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&s()}}),Object(d.jsx)("button",{type:"submit",className:o.a.button,onClick:function(){s()},children:Object(d.jsx)("img",{className:o.a.buttonImg,src:"images/search.png",alt:"search"})})]}),Object(d.jsxs)("button",{className:o.a.login,children:[Object(d.jsx)("i",{className:"far fa-user-circle"}),Object(d.jsx)("span",{className:o.a.login__title,children:"LogIn"})]})]})})),_=a(5),m=a.n(_),h=Object(n.memo)((function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:m.a.menu,children:[Object(d.jsx)("i",{className:"fas fa-home"}),Object(d.jsx)("span",{className:m.a.name,children:"\ud648"})]}),Object(d.jsxs)("div",{className:m.a.menu,children:[Object(d.jsx)("i",{className:"far fa-compass"}),Object(d.jsx)("span",{className:m.a.name,children:"\ud0d0\uc0c9"})]}),Object(d.jsxs)("div",{className:m.a.menu,children:[Object(d.jsx)("i",{className:"fas fa-folder-open"}),Object(d.jsx)("span",{className:m.a.name,children:"\uad6c\ub3c5"})]})]})})),j=a(6),b=a.n(j),p=function(e){var t=e.video,a=e.video.snippet;return Object(d.jsxs)("section",{className:b.a.detail,children:[Object(d.jsx)("iframe",{className:b.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(d.jsx)("div",{className:b.a.info,children:Object(d.jsxs)("p",{className:b.a.title,children:[" ",a.title]})}),Object(d.jsx)("h3",{className:b.a["channel-title"],children:a.channelTitle}),Object(d.jsx)("pre",{className:b.a.description,children:a.description})]})},v=a(4),f=a.n(v),O=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,s="list"===e.display?f.a.list:f.a.grid;return Object(d.jsx)("li",{className:"".concat(f.a.container," ").concat(s),children:Object(d.jsxs)("div",{className:f.a.video,children:[Object(d.jsx)("div",{className:f.a["thumbnails-wrap"],children:Object(d.jsx)("img",{className:f.a.thumbnails,src:a.thumbnails.medium.url,alt:"video thumbnail",onClick:function(){return n(t)}})}),Object(d.jsxs)("div",{className:f.a.metadata,children:[Object(d.jsx)("img",{className:f.a["channel-img"],src:t.channelImgURL,alt:"channel-thumbnails"}),Object(d.jsxs)("div",{className:f.a.info,children:[Object(d.jsx)("p",{className:f.a.title,onClick:function(){return n(t)},children:a.title}),Object(d.jsx)("p",{className:f.a["channel-title"],children:a.channelTitle})]})]})]})})})),x=a(27),g=a.n(x),N=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(d.jsx)("ul",{className:g.a.videos,children:t.map((function(e){return Object(d.jsx)(O,{video:e,onVideoClick:a,display:n},e.id)}))})},y=a(8),k=a.n(y),w=function(e){var t=e.videos,a=e.selectedVideo,n=e.selectVideo;return Object(d.jsx)("div",{className:k.a.main,children:Object(d.jsxs)("section",{className:k.a.content,children:[a&&Object(d.jsx)("div",{className:k.a.detail,children:Object(d.jsx)(p,{video:a})}),Object(d.jsx)("div",{className:k.a.list,children:Object(d.jsx)(N,{videos:t,onVideoClick:n,display:a?"list":"grid"})})]})})},I=a(15),L=a.n(I);var C=function(e){var t=e.youtube,a=Object(n.useState)([]),s=Object(r.a)(a,2),i=s[0],c=s[1],l=Object(n.useState)(null),o=Object(r.a)(l,2),_=o[0],m=o[1],j=Object(n.useCallback)((function(e){m(null),t.search(e).then((function(e){c(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return c(e)}))}),[t]),Object(d.jsxs)("div",{className:L.a.app,children:[Object(d.jsx)(u,{onSearch:j}),Object(d.jsx)("nav",{className:L.a.navbar,children:Object(d.jsx)(h,{})}),Object(d.jsx)(w,{videos:i,selectedVideo:_,selectVideo:function(e){m(e)}})]})},S=a(7),q=a.n(S),D=a(9),R=a(12),E=a(28),V=a(29),F=function(){function e(t){Object(E.a)(this,e),this.youtube=t,this.videoList=[]}return Object(V.a)(e,[{key:"mostPopular",value:function(){var e=Object(R.a)(q.a.mark((function e(){var t,a=this;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.next=5,t.data.items.map((function(e){return a.getChannelInfo(e.snippet.channelId).then((function(t){return a.videoList.push(Object(D.a)(Object(D.a)({},e),{},{channelImgURL:t}))}))}));case 5:return e.abrupt("return",this.videoList);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getChannelInfo",value:function(){var e=Object(R.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("channels",{params:{part:"snippet",id:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items[0].snippet.thumbnails.default.url);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(R.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=a(30),P=a.n(B),U=(a(55),new F(P.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyBqNLe0dbLa6qvgnqDqOnFDbIvFL_KD-w0"}})));c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{youtube:U})}),document.getElementById("root"))},6:function(e,t,a){e.exports={detail:"video_detail_detail__3EFE7",info:"video_detail_info__1McHr",description:"video_detail_description__2Z2IY"}},8:function(e,t,a){e.exports={main:"main_main__BRhPu",content:"main_content__2Lbua",detail:"main_detail__1huSX",list:"main_list__21uUW"}}},[[58,1,2]]]);
//# sourceMappingURL=main.85b6e82a.chunk.js.map