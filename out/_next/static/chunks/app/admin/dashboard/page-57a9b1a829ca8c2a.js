(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{8571:function(n,e,t){Promise.resolve().then(t.bind(t,7253))},7253:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(9268),u=t(7099),o=t(5596),c=t(6008),i=t(6006);function a(){let{user:n}=(0,u.a)(),e=(0,c.useRouter)();return(0,i.useEffect)(()=>{n?e.push("".concat(o.j2,"/").concat(o.rM,"/").concat(o.dk)):e.push("".concat(o.j2,"/").concat(o.lW))}),(0,r.jsx)("div",{})}},7099:function(n,e,t){"use strict";t.d(e,{H:function(){return C},a:function(){return g}});var r=t(2805),u=t(9268),o=t(6006),c=t(7056),i=t(1051),a=t(7251),l=t(5596),s=t(6008);function f(){let n=(0,r._)(["\n  query me {\n    getCurrentUser{\n      id\n      username\n      company {\n        id\n        name\n      }\n      roles{\n        id\n        name\n      }\n    }\n  }\n"]);return f=function(){return n},n}function d(){let n=(0,r._)(["\n  mutation ($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      token\n    }\n  }\n"]);return d=function(){return n},n}let v=(0,c.Ps)(f()),p=(0,c.Ps)(d()),h=(0,o.createContext)({}),E=()=>{let{client:n,loading:e,error:t,data:r,refetch:u}=(0,i.a)(v,{fetchPolicy:"no-cache"}),[c,{loading:f}]=(0,a.D)(p),d=(0,s.useRouter)(),[h,E]=(0,o.useState)(null),[g,C]=(0,o.useState)(null),b=(0,o.useCallback)(n=>{let{username:e,password:t,is_admin:r}=n;c({variables:{username:e,password:t}}).then(n=>{let{data:e}=n;C(null);let t=localStorage;u(),t.setItem("token",e.login.token),d.push("".concat(r?"".concat(l.j2,"/").concat(l.rM,"/").concat(l.dk):l.XX))}).catch(n=>{C(n)})},[c,u]);(0,o.useEffect)(()=>{E((null==r?void 0:r.getCurrentUser)?{...null==r?void 0:r.getCurrentUser}:null)},[r]);let N=(0,o.useCallback)(n=>{localStorage.removeItem("token"),d.push(n?"".concat(l.j2).concat(l.lW):l.lW),E(null),u()},[n,d]);return{loading:e||f,error:t,loginError:g,user:h,login:b,logout:N}},g=()=>(0,o.useContext)(h);function C(n){let{children:e}=n,t=E();return(0,u.jsx)(h.Provider,{value:t,children:void 0!==t.user||t.error?e:(0,u.jsx)("div",{children:"Loading..."})})}},793:function(n,e,t){"use strict";var r,u,o,c,i,a,l,s;t.d(e,{Fz:function(){return r},GV:function(){return o},K$:function(){return c},Tb:function(){return f},ym:function(){return u}}),(i=r||(r={})).search="getAllApplicantsPaged",i.favorites="getAllFavouriteApplicants",i.interviews="getAllScheduledForInterview",i.filter="searchApplicantsByCriteria",(a=u||(u={})).search="search",a.favorites="favorites",a.interviews="interviews",(l=o||(o={})).FRONTEND="FRONTEND",l.BACKEND="BACKEND",(s=c||(c={})).ADMIN="ROLE_ADMIN",s.COMPANY="ROLE_COMPANY";let f=419430400},5596:function(n,e,t){"use strict";t.d(e,{t3:function(){return E},OF:function(){return g.OF},Tb:function(){return C.Tb},zb:function(){return p},j2:function(){return u},rR:function(){return c},Yi:function(){return h},eH:function(){return v},rM:function(){return f},yv:function(){return a},XX:function(){return r},St:function(){return l},lW:function(){return o},dk:function(){return d},hm:function(){return s},AI:function(){return i},ig:function(){return g.ig}});let r="",u="/admin",o="/login",c="/applicants",i="/search",a="/favorites",l="/interviews",s="/results",f="/dashboard",d="people",v="companies",p="add",h="change-password",E="https://peoplein-api.habsida.com/graphql";var g=t(791),C=t(793)},791:function(n,e,t){"use strict";var r,u;t.d(e,{IN:function(){return r},OF:function(){return c},ig:function(){return o}}),(u=r||(r={})).IN_PROJECT="IN_PROJECT",u.SEARCHING="SEARCHING",u.EMPLOYED="EMPLOYED";let o=[{label:"",value:"STATUS",children:[{label:"Searching",value:r.SEARCHING},{label:"Employed",value:r.EMPLOYED},{label:"In project",value:r.IN_PROJECT}]}],c=[{label:"",value:"CV",children:[{label:"Open",value:"open"},{label:"Download",value:"download"},{label:"Delete",value:"delete"}]}]}},function(n){n.O(0,[207,667,139,744],function(){return n(n.s=8571)}),_N_E=n.O()}]);