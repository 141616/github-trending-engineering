(()=>{"use strict";var e,t,n,r={74:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),s=n(645),l=n.n(s)()(a());l.push([e.id,"@-webkit-keyframes animation-skeleton {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes animation-skeleton {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n",""]);const i=l},677:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),s=n(645),l=n.n(s)()(a());l.push([e.id,".YQVMV68jg07snpwzRAJQ {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n",""]),l.locals={icon:"YQVMV68jg07snpwzRAJQ"};const i=l},750:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(379),a=n.n(r),s=n(795),l=n.n(s),i=n(569),o=n.n(i),c=n(565),u=n.n(c),f=n(216),d=n.n(f),h=n(589),x=n.n(h),m=n(74),p={};p.styleTagTransform=x(),p.setAttributes=u(),p.insert=o().bind(null,"head"),p.domAPI=l(),p.insertStyleElement=d(),a()(m.Z,p);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},134:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(379),a=n.n(r),s=n(795),l=n.n(s),i=n(569),o=n.n(i),c=n(565),u=n.n(c),f=n(216),d=n.n(f),h=n(589),x=n.n(h),m=n(677),p={};p.styleTagTransform=x(),p.setAttributes=u(),p.insert=o().bind(null,"head"),p.domAPI=l(),p.insertStyleElement=d(),a()(m.Z,p);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},957:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(294),l=n(359),i=n(818),o=s.lazy((function(){return Promise.resolve().then((function(){return n(550)}))})),c=s.lazy((function(){return Promise.resolve().then((function(){return n(439)}))})),u="github-trending-engineering",f=function(){var e=(0,i.useNavigate)(),t=(0,i.useLocation)().pathname;return(0,a.jsxs)("div",r({className:"max-w-[1024px] mx-auto px-4 flex flex-col h-screen"},{children:[(0,a.jsxs)("div",r({className:"py-4"},{children:[(0,a.jsx)("button",r({className:"mr-4 ".concat("/"===t?"text-orange-500":""),onClick:function(){return e("/")}},{children:"Trending"})),(0,a.jsx)("button",r({className:"mr-4 ".concat("/battle"===t?"text-orange-500":""),onClick:function(){return e("/battle")}},{children:"Battle"}))]})),(0,a.jsx)("div",r({className:"h-full flex-auto"},{children:(0,a.jsx)(i.Outlet,{})}))]}))};t.default=function(e){return console.log("enter App"),(0,a.jsx)(i.BrowserRouter,{children:(0,a.jsx)(s.Suspense,r({fallback:(0,a.jsx)("div",{})},{children:(0,a.jsx)(i.Routes,{children:(0,a.jsxs)(i.Route,r({path:"/",element:(0,a.jsx)(f,{})},{children:[(0,a.jsx)(i.Route,{path:"".concat(u,'/result"'),element:(0,a.jsx)(c,{})}),(0,a.jsx)(i.Route,{path:"".concat(u,"/battle"),element:(0,a.jsx)(o,{})}),(0,a.jsx)(i.Route,{path:"".concat(u,"/"),element:(0,a.jsx)(l.default,{})})]}))})}))})}},311:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(893),a=n(730),s=n(294);t.default=function(e){var t=e.url,n=function(e){var t="".concat(e,"&s=100 640w"),n="".concat(e,"&s=120 768w"),r="".concat(e,"&s=160 1024w"),a="".concat(e,"&s=200 1280w"),s="".concat(e,"&s=400 1536w");return"".concat(t,", ").concat(n,", ").concat(r,", ").concat(a,", ").concat(s)}(t),l=(0,s.useRef)(null);return(0,a.default)({target:l,onIntersect:function(){l.current&&(l.current.src=t,l.current.srcset=n)}}),(0,r.jsx)("img",{ref:l,width:"100",height:"100",style:{width:"60%",height:"auto"},className:"mx-auto"})}},86:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(46);t.default=function(){return(0,a.jsxs)("div",r({className:"w-full"},{children:[(0,a.jsx)("h2",r({className:"text-2xl text-center"},{children:"Instructions"})),(0,a.jsxs)("div",r({className:"mt-4 flex items-center justify-around"},{children:[(0,a.jsxs)("div",r({className:"flex-1 flex-col flex items-center justify-center"},{children:[(0,a.jsx)("h4",r({className:"mb-2"},{children:"Enter Two Github Users"})),(0,a.jsx)("div",r({className:"bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center"},{children:(0,a.jsx)(s.default,{name:"users",className:"text-[#f3c080] text-8xl"})}))]})),(0,a.jsxs)("div",r({className:"flex-1 flex-col flex items-center justify-center"},{children:[(0,a.jsx)("h4",r({className:"mb-2"},{children:"Battle"})),(0,a.jsx)("div",r({className:"bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center"},{children:(0,a.jsx)(s.default,{name:"jet",className:"text-[#727272] text-8xl"})}))]})),(0,a.jsxs)("div",r({className:"flex-1 flex-col flex items-center justify-center"},{children:[(0,a.jsx)("h4",r({className:"mb-2"},{children:"See the winner"})),(0,a.jsx)("div",r({className:"bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center"},{children:(0,a.jsx)(s.default,{name:"cup",className:"text-[#f8d649] text-8xl"})}))]}))]}))]}))}},7:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function l(e){try{o(r.next(e))}catch(e){s(e)}}function i(e){try{o(r.throw(e))}catch(e){s(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}o((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(893),i=n(294),o=n(46);t.default=function(e){var t=(0,i.useState)(""),n=t[0],c=t[1],u=(0,i.useState)(!1),f=u[0],d=u[1],h=(0,i.useState)(!1),x=h[0],m=h[1],p=(0,i.useState)(null),v=p[0],g=p[1],j=""===n,y=function(){return a(void 0,void 0,void 0,(function(){return s(this,(function(t){return j||x||(m(!0),fetch("https://api.github.com/users/".concat(n)).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){console.log(t),d(!0),e.onSubmitUser(n)})).catch((function(e){e.json().then((function(e){g((null==e?void 0:e.message)||"Something went wrong")}))})).finally((function(){return m(!1)}))),[2]}))}))};return(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",r({className:"text-sm font-medium leading-6 text-gray-900"},{children:"Player Two"})),(0,l.jsxs)("div",r({className:"flex items-center"},{children:[(0,l.jsxs)("div",r({className:"relative w-full"},{children:[(0,l.jsx)("input",{type:"text",value:n,onKeyDown:function(e){"Enter"===e.code&&y()},onChange:function(e){x||(c(e.target.value),d(!1),g(null))},className:"block w-full rounded-md border-0 py-1.5 pl-4 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Github Username"}),f&&(0,l.jsx)("div",r({className:"absolute right-2 top-2.5 text-green-600"},{children:(0,l.jsx)(o.default,{name:"check"})}))]})),(0,l.jsx)("button",r({type:"button",className:"ml-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-100 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",onClick:y,disabled:j},{children:x?"Loading...":"SUBMIT"}))]})),(0,l.jsx)("div",r({className:"mt-1 text-xs text-red-500 h-[16px]"},{children:v}))]})}},499:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(402),l=n(730),i=n(294);t.default=function(e){var t=(0,i.useRef)(null),n=e.total,o=e.current,c=n>o&&o>0;return(0,l.default)({target:t,onIntersect:function(){t.current&&c&&e.onLoadMore()}}),(0,a.jsx)("div",r({ref:t,className:"text-center text-sm my-4 text-slate-500"},{children:c?(0,a.jsx)(s.default,{}):"No more data"}))}},631:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(37);t.default=function(e){return(0,a.jsx)("div",r({className:"flex items-center justify-center mb-4"},{children:s.LanguageList.map((function(t){var n=t.toLocaleLowerCase()===e.language.toLocaleLowerCase();return(0,a.jsx)("button",r({className:"mx-2 ".concat(n?"text-orange-500":""),onClick:function(){return e.onChange(t)}},{children:t}),t)}))}))}},402:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893);t.default=function(e){return(0,a.jsxs)("svg",r({className:"animate-spin mx-auto h-5 w-5 text-black",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},{children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}))}},46:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(134);t.default=function(e){return(0,a.jsx)("svg",r({className:"".concat(s.default.icon," ").concat(e.className),"aria-hidden":"true"},{children:(0,a.jsx)("use",{xlinkHref:"#icon-".concat(e.name)})}))}},104:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(311),l=n(46);t.default=function(e){return e.data?(0,a.jsx)("div",r({className:"flex-1 p-2"},{children:(0,a.jsxs)("div",r({className:"bg-[rgba(235,235,235,1)] py-4 max-w-[200px] mx-auto"},{children:[(0,a.jsx)("div",r({className:"px-4 mb-2 text-center"},{children:e.title})),(0,a.jsx)("div",r({className:"mb-4"},{children:(0,a.jsx)(s.default,{url:e.data.avatar_url})})),(0,a.jsxs)("div",r({className:"px-4"},{children:[(0,a.jsxs)("div",r({className:"mb-2 flex items-center justify-center font-bold text-center text-sm"},{children:["Scores: ",e.data.public_repos]})),(0,a.jsx)("div",r({className:"mb-4 flex items-center justify-center"},{children:(0,a.jsx)("a",r({href:e.data.html_url,target:"_blank",rel:"noopener noreferrer",className:"font-bold text-red-500 text-center text-sm truncate hover:text-purple-600",title:e.data.login},{children:e.data.login}))})),(0,a.jsxs)("div",r({className:"flex items-center mb-2"},{children:[(0,a.jsx)(l.default,{name:"location"}),(0,a.jsx)("div",r({className:"ml-2 flex-auto text-xs truncate"},{children:e.data.location}))]})),(0,a.jsxs)("div",r({className:"flex items-center mb-2"},{children:[(0,a.jsx)(l.default,{name:"users"}),(0,a.jsx)("div",r({className:"ml-2 flex-auto text-xs truncate"},{children:e.data.followers}))]})),(0,a.jsxs)("div",r({className:"flex items-center mb-2"},{children:[(0,a.jsx)(l.default,{name:"following"}),(0,a.jsx)("div",r({className:"ml-2 flex-auto text-xs truncate"},{children:e.data.following}))]})),(0,a.jsxs)("div",r({className:"flex items-center"},{children:[(0,a.jsx)(l.default,{name:"code"}),(0,a.jsx)("div",r({className:"ml-2 flex-auto text-xs truncate"},{children:e.data.public_repos}))]}))]}))]}))})):(0,a.jsx)("div",{})}},904:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(311),l=n(46);t.default=function(e){var t=e.data;return(0,a.jsx)("div",r({className:"flex-1 lg:w-[25%] lg:max-w-[25%] lg:min-w-[25%] md:w-[33.3%] md:max-w-[33.3%] md:min-w-[33.3%] w-[50%] max-w-[50%] min-w-[50%] p-2"},{children:(0,a.jsxs)("div",r({className:"bg-[rgba(235,235,235,1)] py-4 "},{children:[(0,a.jsxs)("div",r({className:"px-4 mb-2 text-center"},{children:["#",e.indexKey]})),(0,a.jsx)("div",r({className:"mb-4"},{children:(0,a.jsx)(s.default,{url:t.owner.avatar_url})})),(0,a.jsxs)("div",r({className:"px-4"},{children:[(0,a.jsx)("div",r({className:"mb-4 flex items-center justify-center"},{children:(0,a.jsx)("a",r({href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:"font-bold text-red-500 text-center text-sm truncate hover:text-purple-600",title:t.name},{children:t.name}))})),(0,a.jsxs)("div",r({className:"flex items-center mb-2"},{children:[(0,a.jsx)(l.default,{name:"user",className:"text-orange-400"}),(0,a.jsx)("div",r({className:"ml-2 flex-auto text-xs truncate"},{children:t.owner.login}))]})),(0,a.jsxs)("div",r({className:"flex items-center mb-2"},{children:[(0,a.jsx)(l.default,{name:"star",className:"text-yellow-400"}),(0,a.jsxs)("div",r({className:"ml-2 flex-auto text-xs truncate"},{children:[(0,a.jsx)("span",r({className:"font-bold mr-1"},{children:t.stargazers_count})),"stars"]}))]})),(0,a.jsxs)("div",r({className:"flex items-center mb-2"},{children:[(0,a.jsx)(l.default,{name:"fork",className:"text-blue-400"}),(0,a.jsxs)("div",r({className:"ml-2 flex-auto text-xs truncate"},{children:[(0,a.jsx)("span",r({className:"font-bold mr-1"},{children:t.forks_count})),"forks"]}))]})),(0,a.jsxs)("div",r({className:"flex items-center"},{children:[(0,a.jsx)(l.default,{name:"danger",className:"text-red-400"}),(0,a.jsxs)("div",r({className:"ml-2 flex-auto text-xs truncate"},{children:[(0,a.jsx)("span",r({className:"font-bold mr-1"},{children:t.open_issues})),"open issues"]}))]}))]}))]}))}),t.id)}},914:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893);function s(){return(0,a.jsx)("div",r({className:"flex-1 lg:w-[25%] lg:max-w-[25%] lg:min-w-[25%] md:w-[33.3%] md:max-w-[33.3%] md:min-w-[33.3%] w-[50%] max-w-[50%] min-w-[50%] p-2"},{children:(0,a.jsx)("div",{style:{display:"block",backgroundColor:"rgba(0, 0, 0, 0.11)",height:"313px",width:"100%",animation:"1.5s ease-in-out 0.5s infinite normal none running animation-skeleton"}})}))}t.default=function(){return(0,a.jsxs)("div",r({className:"flex items-center justify-around flex-wrap -mx-2"},{children:[(0,a.jsx)(s,{}),(0,a.jsx)(s,{}),(0,a.jsx)(s,{}),(0,a.jsx)(s,{}),(0,a.jsx)(s,{}),(0,a.jsx)(s,{}),(0,a.jsx)(s,{}),(0,a.jsx)(s,{}),(0,a.jsx)(s,{}),(0,a.jsx)(s,{})]}))}},391:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(499),l=n(904),i=n(914);t.default=function(e){return e.loading&&0===e.repos.length?(0,a.jsx)(i.default,{}):0===e.repos.length?(0,a.jsx)("div",r({className:"py-10 text-sm text-center text-slate-500"},{children:"No Data"})):(0,a.jsxs)("div",{children:[(0,a.jsx)("div",r({className:"flex items-center justify-around flex-wrap -mx-2"},{children:e.repos.map((function(e,t){return(0,a.jsx)(l.default,{data:e,indexKey:t+1},"".concat(e.id,"-").concat(t))}))})),(0,a.jsx)(s.default,{total:e.total,current:e.repos.length,onLoadMore:e.onLoadMore})]})}},599:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893);t.default=function(e){return(0,a.jsx)("button",r({type:"button",className:"".concat("disabled:cursor-not-allowed disabled:opacity-50 bg-slate-100 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"," ").concat(e.className),onClick:e.onClick,disabled:e.disabled},{children:e.loading?"Loading...":e.text}))}},37:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LanguageList=void 0,t.LanguageList=["All","JavaScript","Ruby","Java","CSS","Python"]},730:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(294);t.default=function(e){var t=e.root,n=void 0===t?null:t,a=e.target,s=e.onIntersect,l=e.threshold,i=void 0===l?1:l,o=e.rootMargin,c=void 0===o?"0px":o,u=e.enabled,f=void 0===u||u;(0,r.useEffect)((function(){if(f){var e=new IntersectionObserver((function(e){return e.forEach((function(e){return e.isIntersecting&&s()}))}),{root:n&&n.current,rootMargin:c,threshold:i}),t=a&&a.current;if(t)return e.observe(t),function(){e.unobserve(t)}}}),[f,n,c,i,a,s])}},629:(e,t,n)=>{var r=n(893),a=n(957),s=n(745);n(750);var l=document.getElementById("root");(0,s.createRoot)(l).render((0,r.jsx)(a.default,{}))},550:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),s=n(86),l=n(7),i=n(294),o=n(818);t.default=function(e){var t=(0,i.useState)(""),n=t[0],c=t[1],u=(0,i.useState)(""),f=u[0],d=u[1],h=(0,o.useNavigate)();return(0,i.useEffect)((function(){n&&f&&h("/result?playerOne=".concat(n,"&playerTwo=").concat(f))}),[n,f]),(0,a.jsxs)("div",r({className:"py-4 h-full flex flex-col items-center"},{children:[(0,a.jsx)(s.default,{}),(0,a.jsxs)("div",r({className:"w-full mt-20"},{children:[(0,a.jsx)("h3",r({className:"text-xl text-center mb-6"},{children:"Players"})),(0,a.jsxs)("div",r({className:"flex items-center justify-between"},{children:[(0,a.jsx)("div",r({className:"flex-1 w-[50%] mr-10"},{children:(0,a.jsx)(l.default,{title:"Play One",onSubmitUser:function(e){return c(e)}})})),(0,a.jsx)("div",r({className:"flex-1 w-[50%]"},{children:(0,a.jsx)(l.default,{title:"Play Two",onSubmitUser:function(e){return d(e)}})}))]}))]}))]}))}},439:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function l(e){try{o(r.next(e))}catch(e){s(e)}}function i(e){try{o(r.throw(e))}catch(e){s(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}o((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(893),i=n(402),o=n(104),c=n(599),u=n(928),f=n(294),d=n(818);function h(e){return new Promise((function(t,n){fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){t(e)})).catch((function(e){e.json().then((function(e){n((null==e?void 0:e.message)||"Something went wrong")}))}))}))}t.default=function(e){var t=(0,d.useLocation)(),n=(0,d.useNavigate)(),x=(0,u.getPlayersFromUrl)(t.search),m=x.playerOne,p=x.playerTwo,v=(0,f.useState)(null),g=v[0],j=v[1],y=(0,f.useState)(null),b=y[0],w=y[1];(0,f.useEffect)((function(){m&&_(),p&&N()}),[m,p]);var _=function(){return a(void 0,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,h(m)];case 1:return e=n.sent(),j(e),[3,3];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}}))}))},N=function(){return a(void 0,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,h(p)];case 1:return e=n.sent(),w(e),[3,3];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}}))}))},O=function(){n("/battle")};if(!m||!p)return(0,l.jsxs)("div",r({className:"py-4 h-full flex flex-col items-center"},{children:[(0,l.jsx)("h1",r({className:"pb-4"},{children:"用户信息不足"})),(0,l.jsx)(c.default,{text:"reset",onClick:O})]}));if(!g||!b)return(0,l.jsx)("div",r({className:"py-4 h-full flex flex-col items-center"},{children:(0,l.jsx)(i.default,{})}));var P=g.public_repos>b.public_repos?m:p;return(0,l.jsxs)("div",r({className:"py-4 h-full flex flex-col items-center"},{children:[(0,l.jsxs)("div",r({className:"flex w-full mb-10"},{children:[(0,l.jsx)("div",r({className:"w-1/2"},{children:(0,l.jsx)(o.default,{title:P===m?"Winner":"Loser",data:g})})),(0,l.jsx)("div",r({className:"w-1/2"},{children:(0,l.jsx)(o.default,{title:P===p?"Winner":"Loser",data:b})}))]})),(0,l.jsx)(c.default,{text:"reset",onClick:O})]}))}},359:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,s=t.length;a<s;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var s=n(893),l=n(631),i=n(46),o=n(391),c=n(928),u=n(294);t.default=function(e){var t=(0,u.useState)(0),n=t[0],f=t[1],d=(0,u.useState)([]),h=d[0],x=d[1],m=(0,u.useState)(!0),p=m[0],v=m[1],g=(0,u.useState)({page:1,language:(0,c.getLanguageFromUrl)(window.location.search)}),j=g[0],y=g[1],b=(0,u.useState)(null),w=b[0],_=b[1];(0,u.useEffect)((function(){N(j.language,j.page)}),[j]);var N=function(e,t){v(!0),_(null);var n=(0,c.generateUrl)(e,t);fetch(n).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){var n=(null==e?void 0:e.items)||[];x(1===t?n:a(a([],h,!0),n,!0)),f((null==e?void 0:e.total_count)||0)})).catch((function(e){e.json().then((function(e){_((null==e?void 0:e.message)||"Something went wrong")}))})).finally((function(){return v(!1)}))};return(0,s.jsxs)("div",r({className:"py-4"},{children:[(0,s.jsx)(l.default,{language:j.language,onChange:function(e){y(r(r({},j),{language:e,page:1})),x([]),window.history.replaceState({},"",(0,c.generatePushUrl)(e))}}),w?(0,s.jsxs)("div",r({className:"text-red-600 flex items-center justify-center my-10"},{children:[(0,s.jsx)(i.default,{name:"error"}),(0,s.jsx)("p",r({className:"text-center font-sm ml-2"},{children:w}))]})):(0,s.jsx)(o.default,{loading:p,repos:h,total:n,onLoadMore:function(){p||y(r(r({},j),{page:j.page+1}))}})]}))}},928:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generatePushUrl=t.generateUrl=t.getPlayersFromUrl=t.getLanguageFromUrl=void 0,t.getLanguageFromUrl=function(e){return new URLSearchParams(e).get("language")||"All"},t.getPlayersFromUrl=function(e){var t=new URLSearchParams(e);return{playerOne:t.get("playerOne")||"",playerTwo:t.get("playerTwo")||""}},t.generateUrl=function(e,t){var n="&q=stars%3A>1";return"All"!==e&&(n+=encodeURIComponent(" language:".concat(e))),"".concat("https://api.github.com/search/repositories","?sort=stars&order=desc&type=Repositories&page=").concat(t,"&per_page=10").concat(n)},t.generatePushUrl=function(e){return"All"===e?"".concat(window.location.origin).concat(window.location.pathname):"".concat(window.location.origin).concat(window.location.pathname,"?language=").concat(e)}}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,exports:{}};return r[e].call(n.exports,n,n.exports,s),n.exports}s.m=r,e=[],s.O=(t,n,r,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],i=!0,o=0;o<n.length;o++)(!1&a||l>=a)&&Object.keys(s.O).every((e=>s.O[e](n[o])))?n.splice(o--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);s.r(a);var l={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>l[t]=()=>e[t]));return l.default=()=>e,s.d(a,l),a},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,i,o]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(o)var u=o(s)}for(t&&t(n);c<l.length;c++)a=l[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},n=self.webpackChunkgithub_trending_engineering=self.webpackChunkgithub_trending_engineering||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),s.nc=void 0;var l=s.O(void 0,[895],(()=>s(629)));l=s.O(l)})();