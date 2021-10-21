(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{23:function(e,t,a){e.exports={videos:"video_list_videos__3DYFL"}},3:function(e,t,a){e.exports={container:"video_item_container__1k5hL",grid:"video_item_grid__3DQrS",list:"video_item_list__3aD18",video:"video_item_video__1Iwqk",thumbnail:"video_item_thumbnail__1X5Q-",metadata:"video_item_metadata__3srm6",title:"video_item_title__Dq7yj",channelTitle:"video_item_channelTitle__lMkzh"}},31:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__3Go8G",logo:"search_header_logo__1pcbb",title:"search_header_title__36gBI",input:"search_header_input__2Jms7",button:"search_header_button__21shv",buttonImg:"search_header_buttonImg__2yiJh"}},5:function(e,t,a){e.exports={app:"app_app__j5nyl",content:"app_content__2dOYH",detail:"app_detail__1BUiW",list:"app_list__y7oLm"}},52:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(22),s=a.n(c),r=(a(31),a(12)),o=a(4),l=a.n(o),u=a(0),d=Object(i.memo)((function(e){var t=e.onSearch,a=Object(i.useRef)(),n=function(){var e=a.current.value;t(e)};return Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsxs)("div",{className:l.a.logo,children:[Object(u.jsx)("img",{className:l.a.img,src:"/images/logo.png",alt:"logo"}),Object(u.jsx)("h1",{className:l.a.title,children:"Youtube"})]}),Object(u.jsx)("input",{ref:a,className:l.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(u.jsx)("button",{type:"submit",className:l.a.button,onClick:function(){n()},children:Object(u.jsx)("img",{className:l.a.buttonImg,src:"/images/search.png",alt:"search"})})]})})),h=a(3),p=a.n(h),_=Object(i.memo)((function(e){var t=e.video,a=e.video.snippet,i=e.onVideoClick,n="list"===e.display?p.a.list:p.a.grid;return Object(u.jsx)("li",{className:"".concat(p.a.container," ").concat(n),onClick:function(){return i(t)},children:Object(u.jsxs)("div",{className:p.a.video,children:[Object(u.jsx)("img",{className:p.a.thumbnails,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(u.jsxs)("div",{className:p.a.metadata,children:[Object(u.jsx)("p",{className:p.a.title,children:a.title}),Object(u.jsx)("p",{className:p.a.channelTitle,children:a.channelTitle})]})]})})})),m=a(23),b=a.n(m),j=function(e){var t=e.videos,a=e.onVideoClick,i=e.display;return Object(u.jsx)("ul",{className:b.a.videos,children:t.map((function(e){return Object(u.jsx)(_,{video:e,onVideoClick:a,display:i},e.id)}))})},v=a(5),O=a.n(v),x=a(9),f=a.n(x),y=function(e){var t=e.video,a=e.video.snippet;return Object(u.jsxs)("section",{className:f.a.detail,children:[Object(u.jsx)("iframe",{className:f.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(u.jsx)("h2",{children:a.title}),Object(u.jsx)("h3",{children:a.channelTitle}),Object(u.jsx)("pre",{className:f.a.description,children:a.description})]})};var g=function(e){var t=e.youtube,a=Object(i.useState)([]),n=Object(r.a)(a,2),c=n[0],s=n[1],o=Object(i.useState)(null),l=Object(r.a)(o,2),h=l[0],p=l[1],_=Object(i.useCallback)((function(e){p(null),t.search(e).then((function(e){s(e)}))}),[t]);return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(u.jsxs)("div",{className:O.a.app,children:[Object(u.jsx)(d,{onSearch:_}),Object(u.jsxs)("section",{className:O.a.content,children:[h&&Object(u.jsx)("div",{className:O.a.detail,children:Object(u.jsx)(y,{video:h})}),Object(u.jsx)("div",{className:O.a.list,children:Object(u.jsx)(j,{videos:c,onVideoClick:function(e){p(e)},display:h?"list":"grid"})})]})]})},N=a(13),k=a(6),w=a.n(k),I=a(11),S=a(24),q=a(25),C=function(){function e(t){Object(S.a)(this,e),this.youtube=t}return Object(q.a)(e,[{key:"mostPopular",value:function(){var e=Object(I.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(I.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),D=a(26),L=new C(a.n(D).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyBqNLe0dbLa6qvgnqDqOnFDbIvFL_KD-w0"}}));s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(g,{youtube:L})}),document.getElementById("root"))},9:function(e,t,a){e.exports={detail:"video_detail_detail__3EFE7",description:"video_detail_description__2Z2IY"}}},[[52,1,2]]]);
//# sourceMappingURL=main.9da15563.chunk.js.map