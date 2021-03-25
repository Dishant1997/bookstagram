/*! For license information please see 5.aced7bc2.chunk.js.LICENSE.txt */
(this.webpackJsonpBookstagram=this.webpackJsonpBookstagram||[]).push([[5],{230:function(e,s,t){"use strict";var c=t(2),a=(t(0),t(24)),i=t(7),n=t(61);s.a=Object(i.i)((function(){return Object(c.jsxs)("div",{class:"sidebar",children:[Object(c.jsx)("div",{class:"brand-logo",children:Object(c.jsx)("a",{href:"index.html",children:Object(c.jsx)("img",{src:n.a,alt:"logo",height:"75px",width:"75px"})})}),Object(c.jsxs)("div",{class:"menu",children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/home","data-toggle":"tooltip","data-placement":"right",title:"Home",children:Object(c.jsx)("span",{children:Object(c.jsx)("i",{class:"icofont-ui-home"})})})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/my-books","data-toggle":"tooltip","data-placement":"right",title:"My book Shelf",children:Object(c.jsx)("span",{children:Object(c.jsx)("i",{class:"icofont-library"})})})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/book-list","data-toggle":"tooltip","data-placement":"right",title:"List Of Books",children:Object(c.jsx)("span",{children:Object(c.jsx)("i",{class:"icofont-book"})})})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/my-friends","data-toggle":"tooltip","data-placement":"right",title:"My Friends",children:Object(c.jsx)("span",{children:Object(c.jsx)("i",{class:"icofont-ui-user-group"})})})}),Object(c.jsx)("li",{class:"logout",children:Object(c.jsx)("a",{href:"signin.html","data-toggle":"tooltip","data-placement":"right",title:"Signout",children:Object(c.jsx)("span",{children:Object(c.jsx)("i",{class:"icofont-power"})})})})]}),Object(c.jsxs)("p",{class:"copyright",children:["\xa9 ",Object(c.jsx)("a",{href:"#",children:"Bookstagram INC"})]})]})]})}))},231:function(e,s,t){"use strict";s.a=t.p+"static/media/2.103f6fcc.png"},232:function(e,s,t){"use strict";var c=t(60),a=t.n(c),i=localStorage.getItem("userToken"),n=a.a.create({baseURL:"http://40.80.95.65/store",headers:{Authorization:"token "+i}});s.a=n},233:function(e,s,t){"use strict";var c=t(19),a=t(2),i=t(0),n=t.n(i),r=t(33),o=t(231),l=t(230),j=t(15),d=t(24);s.a=function(){JSON.parse(localStorage.getItem("userData"));var e=Object(i.useState)(!1),s=Object(c.a)(e,2),t=s[0],b=s[1],h=Object(i.useState)(!1),m=Object(c.a)(h,2),u=m[0],O=m[1],f=Object(r.b)();Object(r.c)((function(e){return e}));return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-xxl-12",children:Object(a.jsxs)("div",{className:"header-content",children:[Object(a.jsxs)("div",{className:"header-right",children:[Object(a.jsx)("div",{className:"brand-logo",children:Object(a.jsxs)("a",{href:"index.html",children:[Object(a.jsx)("img",{src:"./images/logo.png",alt:""}),Object(a.jsx)("span",{children:"Bookstagram"})]})}),Object(a.jsx)("div",{className:"search",children:Object(a.jsx)("form",{action:"#",children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Here"}),Object(a.jsx)("span",{className:"input-group-text",children:Object(a.jsx)("i",{className:"icofont-search"})})]})})})]}),Object(a.jsxs)("div",{className:"header-right",children:[Object(a.jsxs)("div",{className:"dark-light-toggle",onclick:function(){return console.log("Toggle Clicked")},children:[Object(a.jsx)("span",{className:"dark",children:Object(a.jsx)("i",{className:"icofont-moon"})}),Object(a.jsx)("span",{className:"light",children:Object(a.jsx)("i",{className:"icofont-sun-alt"})})]}),Object(a.jsxs)("div",{className:"notification dropdown",children:[Object(a.jsx)("div",{className:"notify-bell",onClick:function(){return O(!u)},children:Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"icofont-alarm"})})}),u?Object(a.jsxs)("div",{className:"dropdown-menu dropdown-menu-right notification-list",children:[Object(a.jsx)("h4",{children:"Announcements"}),Object(a.jsxs)("div",{className:"lists",children:[Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon success",children:Object(a.jsx)("i",{className:"icofont-check"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Account created successfully"}),Object(a.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon fail",children:Object(a.jsx)("i",{className:"icofont-close"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"2FA verification failed"}),Object(a.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon success",children:Object(a.jsx)("i",{className:"icofont-check"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Device confirmation completed"}),Object(a.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon pending",children:Object(a.jsx)("i",{className:"icofont-warning"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Phone verification pending"}),Object(a.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(a.jsxs)("a",{href:"./settings-activity.html",children:["More ",Object(a.jsx)("i",{className:"icofont-simple-right"})]})]})]}):null]}),Object(a.jsxs)("div",{className:"profile_log dropdown",children:[Object(a.jsxs)("div",{className:"user",onClick:function(){return b(!t)},children:[Object(a.jsx)("span",{className:"thumb",children:Object(a.jsx)("img",{src:o.a,alt:"profile"})}),Object(a.jsx)("span",{className:"arrow",children:Object(a.jsx)("i",{className:"icofont-angle-down"})})]}),t?Object(a.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[Object(a.jsx)("div",{className:"user-email",children:Object(a.jsxs)("div",{className:"user",children:[Object(a.jsx)("span",{className:"thumb",children:Object(a.jsx)("img",{src:o.a,alt:"profile"})}),Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)("h5",{children:"Dishant Shah"}),Object(a.jsx)("span",{children:"Bookstagram.inc@gmail.com"})]})]})}),Object(a.jsxs)(d.b,{to:"/profile",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-ui-user"}),"Profile"]}),Object(a.jsxs)(d.b,{to:"/settings-profile",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-ui-settings"}),"Settings"]}),Object(a.jsxs)(d.b,{to:"/settings-activity",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-history"}),"Activity"]}),Object(a.jsxs)(d.b,{to:"/lock",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-lock"}),"Lock"]}),Object(a.jsxs)("a",{className:"dropdown-item logout",onClick:function(){return localStorage.clear(),f(Object(j.f)()),f(Object(j.b)()),void(window.location.href="/")},children:[Object(a.jsx)("i",{className:"icofont-logout"})," Logout"]})]}):null]})]})]})})})})}),Object(a.jsx)(l.a,{})]})}},234:function(e,s,t){var c;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],s=0;s<arguments.length;s++){var c=arguments[s];if(c){var i=typeof c;if("string"===i||"number"===i)e.push(c);else if(Array.isArray(c)&&c.length){var n=a.apply(null,c);n&&e.push(n)}else if("object"===i)for(var r in c)t.call(c,r)&&c[r]&&e.push(r)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(c=function(){return a}.apply(s,[]))||(e.exports=c)}()},235:function(e,s,t){"use strict";t.d(s,"b",(function(){return n})),t.d(s,"c",(function(){return o})),t.d(s,"a",(function(){return l}));var c,a=t(21),i=t.n(a);function n(e,s){return void 0===e&&(e=""),void 0===s&&(s=c),s?e.split(" ").map((function(e){return s[e]||e})).join(" "):e}var r="object"===typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,s,t){if(!(e[s]instanceof r))return new Error("Invalid prop `"+s+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]);var o=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function l(e){var s=typeof e;return null!=e&&("object"===s||"function"===s)}},236:function(e,s,t){"use strict";s.a=t.p+"static/media/img8.aaa9d0c4.png"},238:function(e,s,t){"use strict";var c=t(5),a=t(8),i=t(0),n=t.n(i),r=t(21),o=t.n(r),l=t(234),j=t.n(l),d=t(235),b={tag:d.c,fluid:o.a.oneOfType([o.a.bool,o.a.string]),className:o.a.string,cssModule:o.a.object},h=function(e){var s=e.className,t=e.cssModule,i=e.fluid,r=e.tag,o=Object(a.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===i?l="container-fluid":i&&(l="container-"+i);var b=Object(d.b)(j()(s,l),t);return n.a.createElement(r,Object(c.a)({},o,{className:b}))};h.propTypes=b,h.defaultProps={tag:"div"},s.a=h},239:function(e,s,t){"use strict";s.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzcxREU5QzFEREMyMTFFOTkzNjlGQzI2MjZBM0VBOTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzcxREU5QzJEREMyMTFFOTkzNjlGQzI2MjZBM0VBOTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNzFERTlCRkREQzIxMUU5OTM2OUZDMjYyNkEzRUE5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNzFERTlDMEREQzIxMUU5OTM2OUZDMjYyNkEzRUE5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvSLfJEAAA28SURBVHja3FwJcBRV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"},240:function(e,s,t){"use strict";var c=t(5),a=t(8),i=t(0),n=t.n(i),r=t(21),o=t.n(r),l=t(234),j=t.n(l),d=t(235),b=o.a.oneOfType([o.a.number,o.a.string]),h={tag:d.c,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},u=function(e){var s=e.className,t=e.cssModule,i=e.noGutters,r=e.tag,o=e.form,l=e.widths,b=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];l.forEach((function(s,t){var c=e[s];if(delete b[s],c){var a=!t;h.push(a?"row-cols-"+c:"row-cols-"+s+"-"+c)}}));var m=Object(d.b)(j()(s,i?"no-gutters":null,o?"form-row":"row",h),t);return n.a.createElement(r,Object(c.a)({},b,{className:m}))};u.propTypes=h,u.defaultProps=m,s.a=u},253:function(e,s,t){"use strict";t.r(s);var c=t(19),a=t(2),i=t(0),n=t.n(i),r=(t(232),t(238)),o=t(240),l=t(7),j=t(230),d=t(233),b=t(239),h=t(236);s.default=Object(l.i)((function(e){var s=Object(i.useState)([]),t=Object(c.a)(s,2),l=(t[0],t[1],Object(i.useState)()),m=Object(c.a)(l,2);m[0],m[1];return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)(d.a,{}),Object(a.jsx)(j.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(r.a,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("article",{className:"blog-card",children:Object(a.jsxs)("div",{class:"blog-card_outline",children:[Object(a.jsxs)("span",{children:[" ",Object(a.jsx)("img",{src:b.a,alt:" Profile image",style:{height:"20px"}}),"  User1 shared a post"]}),Object(a.jsxs)("div",{className:"blog-card__info",children:[Object(a.jsx)("img",{src:h.a,alt:"Unfinished",width:"200",height:"300"}),Object(a.jsx)("a",{href:"#",className:"addtowishlist",children:Object(a.jsx)("span",{children:"+ Add to Wish List"})}),Object(a.jsx)("h5",{children:"Unfinished By Priyanka Chopra"}),Object(a.jsx)("p",{children:Object(a.jsxs)("a",{href:"#",className:"icon-link mr-3",children:[Object(a.jsx)("i",{className:"fa fa-pencil-square-o"})," Priyanka\u2019s \u2018Unfinished\u2019 is Measured, Engaging & Full of Humour"]})}),Object(a.jsx)("p",{children:"In spite of having been one of the most famous faces in the country, she didn\u2019t resist doing multiple auditions or walking into the offices of media houses to introduce herself. In her memoir Unfinished, Chopra Jonas writes, \u201cI swallowed my pride and reminded myself constantly that just because I\u2019d received recognition in one part of the world was no reason that I should automatically receive it elsewhere\u201d. She writes about going for the Roc Nation pre-Grammys party only to realize that she wasn\u2019t where all the A-listers were; the pep talk she gave herself in a toilet just before walking in to audition to play Alex Parrish in Quantico \u2013 which made her the first Indian-born woman to lead a prime-time network show in the United States; and, being a bundle of nerves before her first press event for the ABC show."}),Object(a.jsxs)("span",{children:[Object(a.jsx)("i",{onclick:"myFunction(this)",className:"fa fa-thumbs-up",children:" Like/Dislike"}),Object(a.jsxs)("form",{className:"comment-form",method:"post",action:" ",children:["Comments: ",Object(a.jsx)("textarea",{name:"comment"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"submit",type:"submit",value:"submit"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"reset",type:"reset",value:"reset"})]})]})]})]})})})})})]})}))}}]);
//# sourceMappingURL=5.aced7bc2.chunk.js.map