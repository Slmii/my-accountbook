!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=44)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAdmins=t.FETCH_ADMINS=t.fetchCurrentUser=t.FETCH_CURRENT_USER=t.fetchUsers=t.FETCH_USERS=void 0;var r,o=n(10);(r=o)&&r.__esModule;function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var u=t.FETCH_USERS="fetch_users",i=(t.fetchUsers=function(){return e=a(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/users").then(function(e){t({type:u,response:e})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e},t.FETCH_CURRENT_USER="fetch_current_user"),l=(t.fetchCurrentUser=function(){return e=a(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/current_user").then(function(e){t({type:i,response:e})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e},t.FETCH_ADMINS="fetch_admins");t.fetchAdmins=function(){return e=a(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/admins").then(function(e){t({type:l,response:e})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r},u=n(12);t.default=function(e){var t=e.title,n=e.ogTitle,r=e.ogURL;return a.default.createElement(u.Helmet,null,a.default.createElement("title",null,t),a.default.createElement("meta",{property:"og:title",content:n}),a.default.createElement("meta",{property:"og:url",content:r}))}},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r},i=n(1),l=n(4);t.default=function(e){var t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,u.default.Component),o(n,[{key:"render",value:function(){switch(this.props.authUser){case!1:return u.default.createElement(l.Redirect,{to:"/login"});case null:return u.default.createElement("div",null,"Loading...");default:return u.default.createElement(e,this.props)}}}]),n}();return(0,i.connect)()(t)}},function(e,t){e.exports=require("passport")},function(e,t){e.exports=require("mongoose")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=(s(n(0)),s(n(24))),a=s(n(21)),u=s(n(19)),i=s(n(17)),l=s(n(16)),c=s(n(14));function s(e){return e&&e.__esModule?e:{default:e}}var f=[r({},o.default,{routes:[r({},a.default,{path:"/",exact:!0}),r({},u.default,{path:"/login"}),r({},i.default,{path:"/admins"}),r({},l.default,{path:"/users"}),r({},c.default)]})];t.default=f},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-helmet")},function(e,t,n){"use strict";e.exports={googleClientID:"653217625689-64esa9g9u37hjb1hksduni51dds049ns.apps.googleusercontent.com",googleClientSecret:"yWxkEUdVXcIqyK5K9zvEsLbh",mongoURI:"mongodb://selami:cimbomTR@ds237620.mlab.com:37620/accountbook",cookieKey1:"dnuw&*ASBDua@#%ihf934fnxihDA(*#DNKASNDAfiwfhx89wey4",cookieKey2:"&*DSABDBAUg6783gdaaug67T7qdba32jdaodnan$@%^#-bda"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),o=n(4),a=u(n(3));function u(e){return e&&e.__esModule?e:{default:e}}t.default={component:function(e){var t=e.staticContext;(void 0===t?{}:t).notFound=!0;return r.default.createElement("div",{className:"row justify-content-md-center"},r.default.createElement("div",{className:"col-md-12 text-center"},r.default.createElement(a.default,{title:"404: Page not found",ogTitle:"Page not found",ogURL:"http://localhost:3000"}),r.default.createElement("h1",null,"404: PAGE NOT FOUND"),r.default.createElement("p",null,r.default.createElement(o.Link,{to:"/",className:"navbar-brand"},"Go back to the Home Page"))))}}},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(15);var o=c(n(0)),a=n(1),u=n(2),i=c(n(5)),l=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"renderUsers",value:function(){return this.props.users.map(function(e){var t=e.id,n=e.name;return o.default.createElement("li",{key:t,className:"list-group-item"},n)})}},{key:"render",value:function(){return o.default.createElement("div",{className:"row justify-content-md-center"},o.default.createElement("div",{className:"col-md-12 text-center"},o.default.createElement(l.default,{title:"Mi Accounting | Users List",ogTitle:"Users List",ogURL:"http://localhost:3000/users"}),o.default.createElement("h1",null,"Here is a list of all the users!"),o.default.createElement("ul",{className:"list-group",style:{width:"50%",marginLeft:"25%"}},this.renderUsers())))}}]),t}();t.default={component:(0,a.connect)(function(e){return{users:e.users,authUser:e.authUser}},{fetchUsers:u.fetchUsers})((0,i.default)(s)),loadData:function(e){return(0,e.dispatch)((0,u.fetchUsers)())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(0)),a=n(1),u=n(2),i=c(n(5)),l=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchAdmins()}},{key:"renderAdmins",value:function(){return this.props.admins.map(function(e){return o.default.createElement("li",{key:e.id,className:"list-group-item"},e.name)})}},{key:"render",value:function(){return o.default.createElement("div",{className:"row justify-content-md-center"},o.default.createElement("div",{className:"col-md-12 text-center"},o.default.createElement(l.default,{title:"Mi Accounting | Admins List",ogTitle:"Admins List",ogURL:"http://localhost:3000/admins"}),o.default.createElement("h1",null,"Here is a list of all the admin users!"),o.default.createElement("ul",{className:"list-group",style:{width:"50%",marginLeft:"25%"}},this.renderAdmins())))}}]),t}();t.default={component:(0,a.connect)(function(e){return{admins:e.admins,authUser:e.authUser}},{fetchAdmins:u.fetchAdmins})((0,i.default)(s)),loadData:function(e){return(0,e.dispatch)((0,u.fetchAdmins)())}}},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(18);var o=i(n(0)),a=n(1),u=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={authUser:e.authUser},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this.state.authUser?"You are logged in":"Please login";return o.default.createElement("div",null,o.default.createElement(u.default,{title:"Mi Accounting | Login",ogTitle:"Login Page",ogURL:"http://localhost:3000"}),o.default.createElement("div",{className:"row text-center",style:{display:"flex",alignItems:"center"}},o.default.createElement("div",{className:"col-md-12"},o.default.createElement("h1",null,e))))}}]),t}();t.default={component:(0,a.connect)(function(e){return{authUser:e.authUser}})(l)}},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(20);var r=i(n(0)),o=n(1),a=i(n(5)),u=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}t.default={component:(0,o.connect)(function(e){return{authUser:e.authUser}})((0,a.default)(function(){return r.default.createElement("div",null,r.default.createElement(u.default,{title:"Mi Accounting | Home Page",ogTitle:"Home Page",ogURL:"http://localhost:3000"}),r.default.createElement("div",{className:"row text-center",style:{display:"flex",alignItems:"center"}},r.default.createElement("div",{className:"col-md-12"},r.default.createElement("h1",null,"Welcome"),r.default.createElement("p",null,"Check this out"))),r.default.createElement("div",{className:"row text-center"},r.default.createElement("div",{className:"col-md-12"},r.default.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return console.log("I am pressed!")}},"Press me"))))}))}},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r},i=n(1),l=n(4);n(22);var c=t.Header=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={path:e.authUser?"/api/logout":"/auth/google",text:e.authUser?"Logout":"Login",loggedIn:e.authUser},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"render",value:function(){var e=this.state,t=e.path,n=e.text,r=e.loggedIn;return u.default.createElement("nav",{className:"navbar sticky-top navbar-expand-md navbar-dark bg-dark"},u.default.createElement(l.Link,{to:"/",className:"navbar-brand"},"Mi Accounting"),u.default.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#collapsingNavbar","aria-controls":"collapsingNavbar","aria-expanded":"false","aria-label":"Toggle navigation"},u.default.createElement("span",{className:"navbar-toggler-icon"})),u.default.createElement("div",{className:"collapse navbar-collapse",id:"collapsingNavbar"},u.default.createElement("ul",{className:"navbar-nav ml-auto"},r&&u.default.createElement("li",{className:"nav-item"},u.default.createElement(l.NavLink,{className:"nav-link",to:"/users",activeClassName:"is-active"},"Users")),r&&u.default.createElement("li",{className:"nav-item"},u.default.createElement(l.NavLink,{className:"nav-link",to:"/admins",activeClassName:"is-active"},"Admins")),u.default.createElement("li",{className:"nav-item"},u.default.createElement("a",{className:"nav-link",href:t},n)))))}}]),t}();t.default=(0,i.connect)(function(e){return{authUser:e.authUser}})(c)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=n(11),a=(n(4),n(2)),u=i(n(23));i(n(8));function i(e){return e&&e.__esModule?e:{default:e}}t.default={component:function(e){var t=e.route;return r.default.createElement("div",null,r.default.createElement(u.default,null),r.default.createElement("div",{className:"container"},(0,o.renderRoutes)(t.routes)))},loadData:function(e){return(0,e.dispatch)((0,a.fetchCurrentUser)())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_USERS:return t.response.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_ADMINS:return t.response.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case r.FETCH_CURRENT_USER:return t.response.data||!1;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=i(n(27)),a=i(n(26)),u=i(n(25));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.combineReducers)({users:u.default,admins:a.default,authUser:o.default})},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(10)),o=n(9),a=i(n(29)),u=i(n(28));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=r.default.create({baseURL:"http://localhost:3000/api",headers:{cookie:e.get("cookie")||""}});return(0,o.createStore)(u.default,{},(0,o.compose)((0,o.applyMiddleware)(a.default.withExtraArgument(t))))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e){e.get("/auth/google",r.authenticate("google",{scope:["profile","email"]})),e.get("/auth/google/callback",r.authenticate("google",{failureRedirect:"/login"}),function(e,t){t.redirect("/")}),e.get("/api/current_user",function(e,t){t.send(e.user)}),e.get("/api/logout",function(e,t){e.logout(),t.redirect("/")})}},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express-http-proxy")},function(e,t){e.exports=require("react-loadable")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("cookie-session")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("passport-google-oauth20")},function(e,t,n){"use strict";var r=n(7),o=n(6),a=n(40).Strategy,u=n(13),i=r.model("users");o.serializeUser(function(e,t){return t(null,e.id)}),o.deserializeUser(function(e,t){i.findById(e).then(function(e){return t(null,e)})}),o.use(new a({clientID:u.googleClientID,clientSecret:u.googleClientSecret,callbackURL:"/auth/google/callback"},function(e,t,n,r){i.findOne({googleId:n.id}).then(function(e){e?r(null,e):new i({googleId:n.id,email:n.emails[0].value,name:n.displayName}).save().then(function(e){return r(null,e)}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})}))},function(e,t,n){"use strict";var r=n(7),o=new(0,r.Schema)({googleId:String,email:String,name:String});r.model("users",o)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";n(43),n(42),n(41);var r=_(n(39)),o=_(n(38)),a=_(n(37)),u=_(n(36)),i=(_(n(35)),_(n(7))),l=_(n(6)),c=(_(n(34)),_(n(0))),s=n(12),f=n(1),d=n(11),p=n(33),m=n(4),h=_(n(32)),g=_(n(31)),v=_(n(13)),y=_(n(30)),b=_(n(8));function _(e){return e&&e.__esModule?e:{default:e}}i.default.connect(v.default.mongoURI);var E=(0,u.default)(),x=process.env.PORT||3e3;E.use((0,a.default)()),E.use(r.default.json()),E.use(u.default.static("public")),E.use((0,o.default)({maxAge:2592e6,keys:[v.default.cookieKey1,v.default.cookieKey2]})),E.use(l.default.initialize()),E.use(l.default.session()),(0,g.default)(E),E.get("/api/users",function(e,t){t.json([{id:1,name:"Selami Cetinguney"},{id:2,name:"Lina Cetinguney"},{id:3,name:"Baby Cetinguney"}])}),E.get("/api/admins",function(e,t){t.json([{id:1,name:"Admin 1"},{id:2,name:"Admin 2"},{id:3,name:"Admin 3"}])}),E.get("*",function(e,t){var n=(0,y.default)(e),r=(0,d.matchRoutes)(b.default,e.path).map(function(e){var t=e.route;return t.loadData?t.loadData(n):null}).map(function(e){if(e)return new Promise(function(t,n){e.then(t).catch(t)})});Promise.all(r).then(function(){var r={},o=(0,p.renderToString)(c.default.createElement(f.Provider,{store:n},c.default.createElement(m.StaticRouter,{location:e.path,context:r},c.default.createElement("div",null,(0,d.renderRoutes)(b.default))))),a=s.Helmet.renderStatic(),u='<!DOCTYPE html>\n            \x3c!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]--\x3e\n            \x3c!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]--\x3e\n            \x3c!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]--\x3e\n            \x3c!--[if gt IE 8]>\x3c!--\x3e <html> \x3c!--<![endif]--\x3e\n            <html>\n            <head>\n                '+a.title.toString()+'\n                <meta charset="UTF-8">\n                <meta name="viewport" content="width=device-width, initial-scale=1">\n                '+a.meta.toString()+'\n\n                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">\n                <link rel="stylesheet" type="text/css" href="styles.css" defer />\n            </head>\n\n            <body>\n                <div id=\'root-app\'>'+o+'</div>\n\n                <script src="bundle.js" defer><\/script>\n                <script>window.INITIAL_STATE = '+(0,h.default)(n.getState())+'<\/script>\n                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"><\/script>\n                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"><\/script>\n            </body>\n            </html>';if(r.url)return t.redirect(303,r.url);r.notFound&&t.status(404),t.send(u)})}),E.listen(x,function(){return console.log("Server is up! Listening to port",x)})}]);