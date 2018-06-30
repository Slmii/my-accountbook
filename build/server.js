/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/config/dev.js":
/*!*******************************!*\
  !*** ./src/api/config/dev.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// DEV.JS - DONT COMMIT THIS\nmodule.exports = {\n    googleClientID: '653217625689-64esa9g9u37hjb1hksduni51dds049ns.apps.googleusercontent.com',\n    googleClientSecret: 'yWxkEUdVXcIqyK5K9zvEsLbh',\n    facebookClientID: '211889032940342',\n    facebookClientSecret: '508dfb3726770f9e018663ce34ee2b5e',\n    stripePublishableKey: 'pk_test_kTSRJkTTOf6Gfro42G0n6UJb',\n    stripeSecretKey: 'sk_test_WWRZ032gZk2W3NhaWJy7AUkZ',\n    mongoURI: 'mongodb://selami:cimbomTR@ds237620.mlab.com:37620/accountbook',\n    cookieKey1: 'dnuwASBDuaihf934fnxihDADNKASNDAfiwfhx89wey4',\n    cookieKey2: 'DSABDBAUg6783gdaaug67T7qdba32jdaodnanbda',\n    baseURL: 'http://localhost:3000/api'\n};\n\n//# sourceURL=webpack:///./src/api/config/dev.js?");

/***/ }),

/***/ "./src/api/config/keys.js":
/*!********************************!*\
  !*** ./src/api/config/keys.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// KEYS.JS - FIGURE OUT WHAT SETS OF KEYS TO RETURN\nif (false) {} else {\n    // LOAD DEV KEYS\n    module.exports = __webpack_require__(/*! ./dev */ \"./src/api/config/dev.js\");\n}\n\n//# sourceURL=webpack:///./src/api/config/keys.js?");

/***/ }),

/***/ "./src/api/models/User.js":
/*!********************************!*\
  !*** ./src/api/models/User.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n\n// CREATE A NEW USER COLLECTION\n\nvar userSchema = new Schema({\n    googleId: String,\n    facebookId: String,\n    email: String,\n    name: String\n});\n\nmongoose.model('users', userSchema);\n\n//# sourceURL=webpack:///./src/api/models/User.js?");

/***/ }),

/***/ "./src/api/routes/authRoutes.js":
/*!**************************************!*\
  !*** ./src/api/routes/authRoutes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\n\nmodule.exports = function (app) {\n    // AUTHENTICATE WITH GOOGLE WHEN GOING TO THIS ROUTE\n    app.get('/auth/google', passport.authenticate('google', {\n        scope: ['profile', 'email']\n    }));\n    // CALLBACK URL FOR GOOGLE\n    app.get('/auth/google/callback', passport.authenticate('google', {\n        failureRedirect: '/login'\n    }), function (req, res) {\n        // SUCCESSFULL AUTHENTICATION, REDIRECT TO HOME\n        res.redirect('/');\n    });\n\n    // AUTHENTICATE WITH FACEBOOK WHEN GOING TO THIS ROUTE\n    app.get('/auth/facebook', passport.authenticate('facebook', {\n        authType: 'rerequest',\n        scope: ['email']\n    }));\n    // CALLBACK URL FOR FACEBOOK\n    app.get('/auth/facebook/callback', passport.authenticate('facebook', {\n        failureRedirect: '/login'\n    }), function (req, res) {\n        // SUCCESSFULL AUTHENTICATION, REDIRECT TO HOME\n        res.redirect('/');\n    });\n\n    app.get('/api/current_user', function (req, res) {\n        res.send(req.user);\n    });\n\n    app.get('/api/logout', function (req, res) {\n        req.logout();\n        res.redirect('/');\n    });\n};\n\n//# sourceURL=webpack:///./src/api/routes/authRoutes.js?");

/***/ }),

/***/ "./src/api/services/passport.js":
/*!**************************************!*\
  !*** ./src/api/services/passport.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar GoogleStrategy = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\").Strategy;\nvar FacebookStrategy = __webpack_require__(/*! passport-facebook */ \"passport-facebook\").Strategy;\nvar keys = __webpack_require__(/*! ../config/keys */ \"./src/api/config/keys.js\");\nvar User = mongoose.model('users');\n\n// THESE 2 FUNCTIONS USE THAT DATA THAT'S INSIDE THE COOKIE\npassport.serializeUser(function (user, done) {\n    return done(null, user.id);\n});\npassport.deserializeUser(function (id, done) {\n    User.findById(id).then(function (user) {\n        return done(null, user);\n    });\n});\n\npassport.use(new GoogleStrategy({\n    clientID: keys.googleClientID,\n    clientSecret: keys.googleClientSecret,\n    callbackURL: '/auth/google/callback',\n    proxy: true\n}, function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, done) {\n        var existingUser, user;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        _context.next = 2;\n                        return User.findOne({\n                            googleId: profile.id\n                        });\n\n                    case 2:\n                        existingUser = _context.sent;\n\n                        if (!existingUser) {\n                            _context.next = 5;\n                            break;\n                        }\n\n                        return _context.abrupt('return', done(null, existingUser));\n\n                    case 5:\n                        _context.next = 7;\n                        return new User({\n                            googleId: profile.id,\n                            email: profile.emails[0].value,\n                            name: profile.displayName\n                        }).save();\n\n                    case 7:\n                        user = _context.sent;\n\n                        done(null, user);\n\n                    case 9:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3, _x4) {\n        return _ref.apply(this, arguments);\n    };\n}()));\n\npassport.use(new FacebookStrategy({\n    clientID: keys.facebookClientID,\n    clientSecret: keys.facebookClientSecret,\n    callbackURL: '/auth/facebook/callback',\n    enableProof: true,\n    profileFields: ['id', 'email', 'displayName', 'last_name', 'first_name', 'gender', 'link']\n}, function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(accessToken, refreshToken, profile, done) {\n        var existingUser, user;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        _context2.next = 2;\n                        return User.findOne({\n                            facebookId: profile.id\n                        });\n\n                    case 2:\n                        existingUser = _context2.sent;\n\n                        if (!existingUser) {\n                            _context2.next = 5;\n                            break;\n                        }\n\n                        return _context2.abrupt('return', done(null, existingUser));\n\n                    case 5:\n                        _context2.next = 7;\n                        return new User({\n                            facebookId: profile._json.id,\n                            email: profile._json.email,\n                            name: profile._json.name\n                        }).save();\n\n                    case 7:\n                        user = _context2.sent;\n\n                        done(null, user);\n\n                    case 9:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, undefined);\n    }));\n\n    return function (_x5, _x6, _x7, _x8) {\n        return _ref2.apply(this, arguments);\n    };\n}()));\n\n//# sourceURL=webpack:///./src/api/services/passport.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\n__webpack_require__(/*! ../api/models/User */ \"./src/api/models/User.js\");\n\n__webpack_require__(/*! ../api/services/passport */ \"./src/api/services/passport.js\");\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieSession = __webpack_require__(/*! cookie-session */ \"cookie-session\");\n\nvar _cookieSession2 = _interopRequireDefault(_cookieSession);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _authRoutes = __webpack_require__(/*! ../api/routes/authRoutes */ \"./src/api/routes/authRoutes.js\");\n\nvar _authRoutes2 = _interopRequireDefault(_authRoutes);\n\nvar _keys = __webpack_require__(/*! ../api/config/keys */ \"./src/api/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _store = __webpack_require__(/*! ../shared/helpers/store */ \"./src/shared/helpers/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _routes = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Loadable           from 'react-loadable';\n_mongoose2.default.connect(_keys2.default.mongoURI);\n\nvar app = (0, _express2.default)();\nvar port = process.env.PORT || 3000;\n\napp.use((0, _cors2.default)());\napp.use(_bodyParser2.default.json());\napp.use(_express2.default.static('public'));\n\n// TELL 'PASSPORT' TO MAKE USE THE COOKIES, AND ASSIGN IT TO THE 'REQ', WHICH REPRESENT THE LOADED SESSION\napp.use((0, _cookieSession2.default)({\n    // SET COOKIE TO 30 DAYS\n    maxAge: 30 * 24 * 60 * 60 * 1000,\n    // ENCRYPT COOKIE, CHOOSE RANDOM ONE FROM ARRAY\n    keys: [_keys2.default.cookieKey1, _keys2.default.cookieKey2]\n}));\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\n\n(0, _authRoutes2.default)(app);\n\napp.get('/api/users', function (req, res) {\n    res.json([{\n        id: 1,\n        name: 'Selami Cetinguney'\n    }, {\n        id: 2,\n        name: 'Lina Cetinguney'\n    }, {\n        id: 3,\n        name: 'Baby Cetinguney'\n    }]);\n});\n\napp.get('/api/admins', function (req, res) {\n    res.json([{\n        id: 1,\n        name: 'Admin 1'\n    }, {\n        id: 2,\n        name: 'Admin 2'\n    }, {\n        id: 3,\n        name: 'Admin 3'\n    }]);\n});\n\napp.get('*', function (req, res) {\n    var store = (0, _store2.default)(req);\n\n    // RETURNS AN ARRAY OF PROMISES || NULL\n    // CHECKS IF THE COMPONENT (ROUTE) HAS A FUNTION CALLED 'LOADDATA'\n    var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {\n        var route = _ref.route;\n\n        return route.loadData ? route.loadData(store) : null;\n    }).map(function (promise) {\n        // LOOP THROUGH THE PROMISES ARRAY\n        if (promise) {\n            // IF THE CURRENT PROMISE IS TRUE, WRAP IT WITH A NEW PROMISE AND RESOLVE IT\n            return new Promise(function (resolve, reject) {\n                promise.then(resolve).catch(resolve);\n            });\n        }\n    });\n\n    // RUN THE PROMISE, GET THE CORRESPONDING ROUTE, AND CALL THE 'LOADDATA' FUNCTION\n    Promise.all(promises).then(function () {\n        var context = {};\n\n        var content = (0, _server.renderToString)(_react2.default.createElement(\n            _reactRedux.Provider,\n            { store: store },\n            _react2.default.createElement(\n                _reactRouterDom.StaticRouter,\n                { location: req.path, context: context },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    (0, _reactRouterConfig.renderRoutes)(_routes2.default)\n                )\n            )\n        ));\n\n        var helmet = _reactHelmet.Helmet.renderStatic();\n\n        var renderer = '<!DOCTYPE html>\\n            <!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->\\n            <!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->\\n            <!--[if IE 8]>         <html class=\"no-js lt-ie9\"> <![endif]-->\\n            <!--[if gt IE 8]><!--> <html> <!--<![endif]-->\\n            <html>\\n            <head>\\n                ' + helmet.title.toString() + '\\n                <meta charset=\"UTF-8\">\\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n                ' + helmet.meta.toString() + '\\n\\n                <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\\n                <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.10/css/all.css\" integrity=\"sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg\" crossorigin=\"anonymous\">\\n                <link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\" defer />\\n            </head>\\n\\n            <body>\\n                <div id=\\'root-app\\'>' + content + '</div>\\n\\n                <script src=\"bundle.js\" defer></script>\\n                <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\\n                \\n                <!-- jQuery first, then Popper.js, then Bootstrap JS -->\\n                <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\" integrity=\"sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ\" crossorigin=\"anonymous\"></script>\\n                <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\" integrity=\"sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm\" crossorigin=\"anonymous\"></script>\\n            </body>\\n            </html>';\n\n        if (context.url) {\n            return res.redirect(303, context.url);\n        }\n\n        if (context.notFound) {\n            res.status(404);\n        }\n\n        res.send(renderer);\n    });\n});\n\napp.listen(port, function () {\n    return console.log('Server is up! Listening to port', port);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _users = __webpack_require__(/*! ./actions/users */ \"./src/shared/actions/users.js\");\n\nvar _Header = __webpack_require__(/*! ./components/Header/Header */ \"./src/shared/components/Header/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n    var route = _ref.route;\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            { className: 'container' },\n            (0, _reactRouterConfig.renderRoutes)(route.routes)\n        )\n    );\n};\n\nexports.default = {\n    component: App,\n    loadData: function loadData(_ref2) {\n        var dispatch = _ref2.dispatch;\n        return dispatch((0, _users.fetchCurrentUser)());\n    }\n};\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/actions/users.js":
/*!*************************************!*\
  !*** ./src/shared/actions/users.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var response;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.get('/users');\n\n                        case 2:\n                            response = _context.sent;\n\n                            dispatch({\n                                type: FETCH_USERS,\n                                payload: response.data\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n            var response;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            _context2.next = 2;\n                            return api.get('/current_user');\n\n                        case 2:\n                            response = _context2.sent;\n\n                            dispatch({\n                                type: FETCH_CURRENT_USER,\n                                payload: response.data\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x4, _x5, _x6) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\nvar FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';\nvar fetchAdmins = exports.fetchAdmins = function fetchAdmins() {\n    return function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n            var response;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            _context3.next = 2;\n                            return api.get('/admins');\n\n                        case 2:\n                            response = _context3.sent;\n\n                            dispatch({\n                                type: FETCH_ADMINS,\n                                payload: response.data\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x7, _x8, _x9) {\n            return _ref3.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/shared/actions/users.js?");

/***/ }),

/***/ "./src/shared/components/AdminList/AdminList.js":
/*!******************************************************!*\
  !*** ./src/shared/components/AdminList/AdminList.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _users = __webpack_require__(/*! ../../actions/users */ \"./src/shared/actions/users.js\");\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _requireAuth = __webpack_require__(/*! ../hoc/requireAuth */ \"./src/shared/components/hoc/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AdminList = function (_React$Component) {\n    _inherits(AdminList, _React$Component);\n\n    function AdminList() {\n        _classCallCheck(this, AdminList);\n\n        return _possibleConstructorReturn(this, (AdminList.__proto__ || Object.getPrototypeOf(AdminList)).apply(this, arguments));\n    }\n\n    _createClass(AdminList, [{\n        key: 'componentDidMount',\n\n        // THIS IS FOR NAVIGATION WITHIN THE APPLICATION\n        value: function componentDidMount() {\n            this.props.fetchAdmins();\n        }\n    }, {\n        key: 'renderAdmins',\n        value: function renderAdmins() {\n            var admins = this.props.admins;\n\n            return admins.map(function (_ref) {\n                var id = _ref.id,\n                    name = _ref.name;\n                return _react2.default.createElement(\n                    'li',\n                    { key: id, className: 'list-group-item' },\n                    name\n                );\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var headInfo = {\n                title: 'Mi Accounting | Admins List',\n                ogTitle: 'Admins List',\n                ogURL: 'http://localhost:3000/admins'\n            };\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'row justify-content-md-center' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-12 text-center' },\n                    _react2.default.createElement(_helmet2.default, headInfo),\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Here is a list of all the admin users!'\n                    ),\n                    _react2.default.createElement(\n                        'ul',\n                        { className: 'list-group', style: { width: \"50%\", marginLeft: \"25%\" } },\n                        this.renderAdmins()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return AdminList;\n}(_react2.default.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n    var admins = _ref2.admins,\n        authUser = _ref2.authUser;\n\n    return {\n        admins: admins,\n        authUser: authUser\n    };\n};\n\nexports.default = {\n    // CONNECT AND MAP THE CURRENT STATE OF THE STORE TO THE THIS.PROPS OBJECT\n    // HOC, THIS WILL RUN THE REQUIRED AUTH FUNCTION AND PASS BACK ALL THE PROPS\n    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _users.fetchAdmins })((0, _requireAuth2.default)(AdminList)),\n    loadData: function loadData(_ref3) {\n        var dispatch = _ref3.dispatch;\n        return dispatch((0, _users.fetchAdmins)());\n    }\n};\n\n//# sourceURL=webpack:///./src/shared/components/AdminList/AdminList.js?");

/***/ }),

/***/ "./src/shared/components/Header/Header.js":
/*!************************************************!*\
  !*** ./src/shared/components/Header/Header.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Header = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/Header/styles.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = exports.Header = function (_React$Component) {\n    _inherits(Header, _React$Component);\n\n    function Header() {\n        _classCallCheck(this, Header);\n\n        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n    }\n\n    _createClass(Header, [{\n        key: 'renderHeader',\n        value: function renderHeader() {\n            return this.props.authUser;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'nav',\n                { className: 'navbar sticky-top navbar-expand-md navbar-dark bg-dark' },\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/', className: 'navbar-brand' },\n                    'My Accountbook'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { className: 'navbar-toggler navbar-toggler-right', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapsingNavbar', 'aria-controls': 'collapsingNavbar', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },\n                    _react2.default.createElement('span', { className: 'navbar-toggler-icon' })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'collapse navbar-collapse', id: 'collapsingNavbar' },\n                    this.renderHeader() && _react2.default.createElement(\n                        'ul',\n                        { className: 'navbar-nav ml-auto' },\n                        _react2.default.createElement(\n                            'li',\n                            { className: 'nav-item' },\n                            _react2.default.createElement(\n                                _reactRouterDom.NavLink,\n                                { className: 'nav-link', to: '/users', activeClassName: 'is-active' },\n                                'Users'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            { className: 'nav-item' },\n                            _react2.default.createElement(\n                                _reactRouterDom.NavLink,\n                                { className: 'nav-link', to: '/admins', activeClassName: 'is-active' },\n                                'Admins'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            { className: 'nav-item' },\n                            _react2.default.createElement(\n                                'a',\n                                { className: 'nav-link', href: '/api/logout' },\n                                'Logout'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Header;\n}(_react2.default.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var authUser = _ref.authUser;\n\n    return {\n        authUser: authUser\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack:///./src/shared/components/Header/Header.js?");

/***/ }),

/***/ "./src/shared/components/Header/styles.scss":
/*!**************************************************!*\
  !*** ./src/shared/components/Header/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/components/Header/styles.scss?");

/***/ }),

/***/ "./src/shared/components/Home/Home.js":
/*!********************************************!*\
  !*** ./src/shared/components/Home/Home.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/Home/styles.scss\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _requireAuth = __webpack_require__(/*! ../hoc/requireAuth */ \"./src/shared/components/hoc/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(_ref) {\n    var authUser = _ref.authUser;\n\n    var headInfo = {\n        title: 'Mi Accounting | Home Page',\n        ogTitle: 'Home Page',\n        ogURL: 'http://localhost:3000'\n    };\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_helmet2.default, headInfo),\n        _react2.default.createElement(\n            'div',\n            { className: 'row text-center' },\n            _react2.default.createElement(\n                'div',\n                { className: 'col-md-12' },\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'Welcome ',\n                    authUser.name\n                ),\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    'Check this out'\n                )\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'row text-center' },\n            _react2.default.createElement(\n                'div',\n                { className: 'col-md-12' },\n                _react2.default.createElement(\n                    'button',\n                    { type: 'button', className: 'btn btn-primary', onClick: function onClick() {\n                            return alert('I am pressed!');\n                        } },\n                    'Press me'\n                )\n            )\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n    var authUser = _ref2.authUser;\n\n    return { authUser: authUser };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps)((0, _requireAuth2.default)(Home))\n};\n\n//# sourceURL=webpack:///./src/shared/components/Home/Home.js?");

/***/ }),

/***/ "./src/shared/components/Home/styles.scss":
/*!************************************************!*\
  !*** ./src/shared/components/Home/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/components/Home/styles.scss?");

/***/ }),

/***/ "./src/shared/components/Login/Login.js":
/*!**********************************************!*\
  !*** ./src/shared/components/Login/Login.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/Login/styles.scss\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n    _inherits(Login, _React$Component);\n\n    function Login() {\n        _classCallCheck(this, Login);\n\n        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));\n    }\n\n    _createClass(Login, [{\n        key: 'renderLogin',\n        value: function renderLogin() {\n            return this.props.authUser;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var headInfo = {\n                title: 'Mi Accounting | Login',\n                ogTitle: 'Login Page',\n                ogURL: 'http://localhost:3000'\n            };\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.renderLogin() ? _react2.default.createElement(\n                    'div',\n                    { className: 'row' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'col-md-12 text-center' },\n                        _react2.default.createElement(\n                            'h1',\n                            null,\n                            'Logged in already!'\n                        )\n                    )\n                ) : _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_helmet2.default, headInfo),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'row justify-content-center text-center' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'col-md-6', style: { marginTop: \"20px\" } },\n                            _react2.default.createElement(\n                                'a',\n                                { href: '/auth/google', role: 'button', className: 'btn btn-lg', style: { background: \"#DD4B39\", color: \"#FFFFFF\" } },\n                                _react2.default.createElement('i', { className: 'fab fa-google' }),\n                                '\\xA0\\xA0\\xA0Google Sign In'\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'row justify-content-center text-center' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'col-md-6', style: { marginTop: \"20px\" } },\n                            _react2.default.createElement(\n                                'a',\n                                { href: '/auth/facebook', role: 'button', className: 'btn btn-lg', style: { background: \"#3B5998\", color: \"#FFFFFF\" } },\n                                _react2.default.createElement('i', { className: 'fab fa-facebook-f' }),\n                                '\\xA0\\xA0\\xA0Facebook Sign In'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Login;\n}(_react2.default.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var authUser = _ref.authUser;\n\n    return {\n        authUser: authUser\n    };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps)(Login)\n};\n\n//# sourceURL=webpack:///./src/shared/components/Login/Login.js?");

/***/ }),

/***/ "./src/shared/components/Login/styles.scss":
/*!*************************************************!*\
  !*** ./src/shared/components/Login/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/components/Login/styles.scss?");

/***/ }),

/***/ "./src/shared/components/NotFound/NotFound.js":
/*!****************************************************!*\
  !*** ./src/shared/components/NotFound/NotFound.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFound = function NotFound(_ref) {\n    var _ref$staticContext = _ref.staticContext,\n        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n    staticContext.notFound = true;\n\n    var headInfo = {\n        title: '404: Page not found',\n        ogTitle: 'Page not found',\n        ogURL: 'http://localhost:3000'\n    };\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'row' },\n        _react2.default.createElement(\n            'div',\n            { className: 'col-md-12 text-center' },\n            _react2.default.createElement(_helmet2.default, headInfo),\n            _react2.default.createElement(\n                'h1',\n                null,\n                '404: PAGE NOT FOUND'\n            ),\n            _react2.default.createElement(\n                'p',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/', className: 'navbar-brand' },\n                    'Go back to the Home Page'\n                )\n            )\n        )\n    );\n};\n\nexports.default = {\n    component: NotFound\n};\n\n//# sourceURL=webpack:///./src/shared/components/NotFound/NotFound.js?");

/***/ }),

/***/ "./src/shared/components/UserList/UserList.js":
/*!****************************************************!*\
  !*** ./src/shared/components/UserList/UserList.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/UserList/styles.scss\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _users = __webpack_require__(/*! ../../actions/users */ \"./src/shared/actions/users.js\");\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _requireAuth = __webpack_require__(/*! ../hoc/requireAuth */ \"./src/shared/components/hoc/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UserList = function (_React$Component) {\n    _inherits(UserList, _React$Component);\n\n    function UserList() {\n        _classCallCheck(this, UserList);\n\n        return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));\n    }\n\n    _createClass(UserList, [{\n        key: 'componentDidMount',\n\n\n        // THIS IS FOR NAVIGATION WITHIN THE APPLICATION\n        value: function componentDidMount() {\n            this.props.fetchUsers();\n        }\n    }, {\n        key: 'renderUsers',\n        value: function renderUsers() {\n            var users = this.props.users;\n\n            return users.map(function (_ref) {\n                var id = _ref.id,\n                    name = _ref.name;\n                return _react2.default.createElement(\n                    'li',\n                    { key: id, className: 'list-group-item' },\n                    name\n                );\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var headInfo = {\n                title: 'Mi Accounting | Users List',\n                ogTitle: 'Users List',\n                ogURL: 'http://localhost:3000/users'\n            };\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'row justify-content-md-center' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-12 text-center' },\n                    _react2.default.createElement(_helmet2.default, headInfo),\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Here is a list of all the users!'\n                    ),\n                    _react2.default.createElement(\n                        'ul',\n                        { className: 'list-group', style: { width: \"50%\", marginLeft: \"25%\" } },\n                        this.renderUsers()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return UserList;\n}(_react2.default.Component);\n\n;\n\n// THE FETCHED DATA FROM THE 'ACTIONS' IS NOW AVAILABLE IN THE STORE\nvar mapStateToProps = function mapStateToProps(_ref2) {\n    var users = _ref2.users,\n        authUser = _ref2.authUser;\n\n    return {\n        users: users,\n        authUser: authUser\n    };\n};\n\n// EXECUTE THE FUNCTION THATS GET CALLED IN THE ACTIONS\n// NOW THE DATA IS AVAILABLE IN THE STORE AND CAN BE USED TO SHOW DATA\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _users.fetchUsers })((0, _requireAuth2.default)(UserList)),\n    loadData: function loadData(_ref3) {\n        var dispatch = _ref3.dispatch;\n        return dispatch((0, _users.fetchUsers)());\n    }\n};\n\n//# sourceURL=webpack:///./src/shared/components/UserList/UserList.js?");

/***/ }),

/***/ "./src/shared/components/UserList/styles.scss":
/*!****************************************************!*\
  !*** ./src/shared/components/UserList/styles.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/components/UserList/styles.scss?");

/***/ }),

/***/ "./src/shared/components/hoc/requireAuth.js":
/*!**************************************************!*\
  !*** ./src/shared/components/hoc/requireAuth.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (ChildComponent) {\n    var RequireAuth = function (_React$Component) {\n        _inherits(RequireAuth, _React$Component);\n\n        function RequireAuth() {\n            _classCallCheck(this, RequireAuth);\n\n            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));\n        }\n\n        _createClass(RequireAuth, [{\n            key: 'render',\n            value: function render() {\n                switch (this.props.authUser) {\n                    case false:\n                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n                    case null:\n                        return _react2.default.createElement(\n                            'div',\n                            null,\n                            'Loading...'\n                        );\n                    default:\n                        return _react2.default.createElement(ChildComponent, this.props);\n                }\n            }\n        }]);\n\n        return RequireAuth;\n    }(_react2.default.Component);\n\n    ;\n\n    return (0, _reactRedux.connect)()(RequireAuth);\n};\n\n//# sourceURL=webpack:///./src/shared/components/hoc/requireAuth.js?");

/***/ }),

/***/ "./src/shared/helpers/helmet.js":
/*!**************************************!*\
  !*** ./src/shared/helpers/helmet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Head = function Head(_ref) {\n    var title = _ref.title,\n        ogTitle = _ref.ogTitle,\n        ogURL = _ref.ogURL;\n    return _react2.default.createElement(\n        _reactHelmet.Helmet,\n        null,\n        _react2.default.createElement(\n            'title',\n            null,\n            title\n        ),\n        _react2.default.createElement('meta', { property: 'og:title', content: ogTitle }),\n        _react2.default.createElement('meta', { property: 'og:url', content: ogURL })\n    );\n};\n\nexports.default = Head;\n\n//# sourceURL=webpack:///./src/shared/helpers/helmet.js?");

/***/ }),

/***/ "./src/shared/helpers/store.js":
/*!*************************************!*\
  !*** ./src/shared/helpers/store.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _keys = __webpack_require__(/*! ../../api/config/keys */ \"./src/api/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _combineReducers = __webpack_require__(/*! ../reducers/combineReducers */ \"./src/shared/reducers/combineReducers.js\");\n\nvar _combineReducers2 = _interopRequireDefault(_combineReducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n    var axiosInstance = _axios2.default.create({\n        baseURL: _keys2.default.baseURL,\n        headers: {\n            cookie: req.get('cookie') || ''\n        }\n    });\n\n    var store = (0, _redux.createStore)(_combineReducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\n    return store;\n};\n\n//# sourceURL=webpack:///./src/shared/helpers/store.js?");

/***/ }),

/***/ "./src/shared/reducers/admins.js":
/*!***************************************!*\
  !*** ./src/shared/reducers/admins.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _users = __webpack_require__(/*! ../actions/users */ \"./src/shared/actions/users.js\");\n\nvar adminsReducer = function adminsReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        // 'DATA' == THE ARRAY WITHIN THE DATA OF THE PROMISE RESPONSE\n        case _users.FETCH_ADMINS:\n            return action.payload;\n        default:\n            return state;\n    }\n};\n\nexports.default = adminsReducer;\n\n//# sourceURL=webpack:///./src/shared/reducers/admins.js?");

/***/ }),

/***/ "./src/shared/reducers/authUser.js":
/*!*****************************************!*\
  !*** ./src/shared/reducers/authUser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _users = __webpack_require__(/*! ../actions/users */ \"./src/shared/actions/users.js\");\n\n// START WITH NULL, SO WE KNOW IF THE USER IS AUTHENTICATED OR NOT\nvar authUserReducer = function authUserReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var action = arguments[1];\n\n    // console.log(action);\n    switch (action.type) {\n        // 'DATA' == THE ARRAY WITHIN THE DATA OF THE PROMISE RESPONSE\n        // FALSE IF NOT AUTHENTICATED\n        case _users.FETCH_CURRENT_USER:\n            return action.payload || false;\n        default:\n            return state;\n    }\n};\n\nexports.default = authUserReducer;\n\n//# sourceURL=webpack:///./src/shared/reducers/authUser.js?");

/***/ }),

/***/ "./src/shared/reducers/combineReducers.js":
/*!************************************************!*\
  !*** ./src/shared/reducers/combineReducers.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _admins = __webpack_require__(/*! ./admins */ \"./src/shared/reducers/admins.js\");\n\nvar _admins2 = _interopRequireDefault(_admins);\n\nvar _authUser = __webpack_require__(/*! ./authUser */ \"./src/shared/reducers/authUser.js\");\n\nvar _authUser2 = _interopRequireDefault(_authUser);\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/shared/reducers/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    users: _users2.default,\n    admins: _admins2.default,\n    authUser: _authUser2.default\n});\n\n//# sourceURL=webpack:///./src/shared/reducers/combineReducers.js?");

/***/ }),

/***/ "./src/shared/reducers/users.js":
/*!**************************************!*\
  !*** ./src/shared/reducers/users.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _users = __webpack_require__(/*! ../actions/users */ \"./src/shared/actions/users.js\");\n\nvar usersReducer = function usersReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        // 'DATA' == THE ARRAY WITHIN THE DATA OF THE PROMISE RESPONSE\n        case _users.FETCH_USERS:\n            return action.payload;\n        default:\n            return state;\n    }\n};\n\nexports.default = usersReducer;\n\n//# sourceURL=webpack:///./src/shared/reducers/users.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/shared/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(/*! ./components/Home/Home */ \"./src/shared/components/Home/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./components/Login/Login */ \"./src/shared/components/Login/Login.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _AdminList = __webpack_require__(/*! ./components/AdminList/AdminList */ \"./src/shared/components/AdminList/AdminList.js\");\n\nvar _AdminList2 = _interopRequireDefault(_AdminList);\n\nvar _UserList = __webpack_require__(/*! ./components/UserList/UserList */ \"./src/shared/components/UserList/UserList.js\");\n\nvar _UserList2 = _interopRequireDefault(_UserList);\n\nvar _NotFound = __webpack_require__(/*! ./components/NotFound/NotFound */ \"./src/shared/components/NotFound/NotFound.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// THE SPREAD OPERATER LOADS EVERYTHING IN THE EXPORT OF THE COMPONENT\n// THE EXPORT OF THE COMONENT IS AN OBJECT, SO IT LOADS EVERYTHING IN THAT OBJECT\nvar routes = [_extends({}, _App2.default, {\n    routes: [_extends({}, _Home2.default, {\n        path: '/',\n        exact: true\n    }), _extends({}, _Login2.default, {\n        path: '/login'\n    }), _extends({}, _AdminList2.default, {\n        path: '/admins'\n    }), _extends({}, _UserList2.default, {\n        path: '/users'\n    }), _extends({}, _NotFound2.default)]\n})];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-facebook":
/*!************************************!*\
  !*** external "passport-facebook" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-facebook\");\n\n//# sourceURL=webpack:///external_%22passport-facebook%22?");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-google-oauth20\");\n\n//# sourceURL=webpack:///external_%22passport-google-oauth20%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });