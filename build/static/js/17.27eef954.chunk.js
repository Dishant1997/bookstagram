(this.webpackJsonpBookstagram=this.webpackJsonpBookstagram||[]).push([[17],{256:function(e,t,a){"use strict";a.r(t);var c=a(19),n=a(2),s=a(0),r=a(44),l=a(60),o=a.n(l),i=a(11);function u(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=function(e){var t=e.defaultLabel,a=e.options,r=e.onChangeOption,l=e.valueWithLabel,o=u(e,["defaultLabel","options","onChangeOption","valueWithLabel"]),d=Object(s.useState)(t),j=Object(c.a)(d,2),b=j[0],h=j[1];return Object(n.jsxs)("select",Object(i.a)(Object(i.a)({value:b,onChange:function(e){h(e.target.value),r(l?{label:e.target.options[e.target.selectedIndex].text,value:e.target.value}:e.target.value)}},o),{},{children:[Object(n.jsx)("option",{value:t,disabled:!0,children:t}),a&&a.map((function(e,t){var a=e.label,c=e.value;return Object(n.jsx)("option",{value:c,children:a||c},t)}))]}))};d.defaultProps={defaultLabel:"Choose an option",options:[],valueWithLabel:!1};var j=d,b=a(7),h=[{label:"Reader",value:"Reader"},{label:"Author",value:"Author"}];t.default=Object(b.i)((function(e){var t=Object(s.useState)([]),a=Object(c.a)(t,2),l=(a[0],a[1]),i=Object(s.useState)(),u=Object(c.a)(i,2),d=u[0],b=u[1],m=Object(s.useState)(),O=Object(c.a)(m,2),p=O[0],f=O[1],x=Object(s.useState)(),v=Object(c.a)(x,2),g=v[0],y=v[1],N=Object(s.useState)(),C=Object(c.a)(N,2),S=C[0],w=C[1],k=Object(s.useState)(),P=Object(c.a)(k,2),E=P[0],L=P[1],I=function(){!function(){var e={},t=!0;if(g||(t=!1,e="Username Cannot be empty"),d||(t=!1,e="Email Cannot be empty"),"undefined"!==d){var a=d.lastIndexOf("@"),c=d.lastIndexOf(".");a<c&&a>0&&-1==d.indexOf("@@")&&c>2&&d.length-c>2||(t=!1,e="Email is not valid")}return p||(t=!1,e="Password Cannot be empty"),p&&p.length<8&&(t=!1,e="Password Cannot be less than 8 digits"),L(e),t}()?console.log("Error Value",E):R()},R=function(){o.a.create({baseURL:"http://40.80.95.65/store",headers:{}}).post("/create_user/",{first_name:"Dishant",last_name:"Shah",country:"ca",username:g,email:d,password:p,usertype:S}).then((function(t){200===t.status&&(console.log("RESPONSE",t),l(t.data.data),r.a.success("Sign Up Successful",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.history.push({pathname:"/verify-email",state:{email:d}}))})).catch((function(e){console.error("Error",e)}))};return Object(n.jsx)("div",{id:"main-wrapper",children:Object(n.jsx)("div",{className:"authincation section-padding",children:Object(n.jsx)("div",{className:"container h-100",children:Object(n.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:Object(n.jsxs)("div",{className:"col-xl-5 col-md-6",children:[Object(n.jsxs)("div",{className:"mini-logo text-center my-4",children:[Object(n.jsx)("a",{href:"./intro.html",children:Object(n.jsx)("img",{src:"./images/logo.png",alt:""})}),Object(n.jsx)("h4",{className:"card-title mt-3",children:"Create your account"})]}),Object(n.jsx)("div",{className:"auth-form card",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",onChange:function(e){return y(e.target.value)}})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"hello@example.com",name:"email",onChange:function(e){return b(e.target.value)}})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",onChange:function(e){return f(e.target.value)}})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(j,{className:"form-select",options:h,onChangeOption:function(e){return w(e)}})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("div",{className:"form-check form-switch",children:[Object(n.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"}),Object(n.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["I agree to the"," ",Object(n.jsx)("a",{href:"#",className:"text-primary",children:"User Agreement"})," ","and"," ",Object(n.jsx)("a",{href:"#",className:"text-primary",children:"Privacy Policy"}),"."]}),E?Object(n.jsx)("p",{style:{color:"red"},children:E}):null]})}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){return I()},children:"Create account"})}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsxs)("p",{className:"mt-3 mb-0",children:[" ",Object(n.jsx)("a",{className:"text-primary",href:"/",children:"Sign in"})," ","to your account"]})})]})})]})})})})})}))}}]);
//# sourceMappingURL=17.27eef954.chunk.js.map