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

/***/ "./src/client/config/dev.js":
/*!**********************************!*\
  !*** ./src/client/config/dev.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    stripePublishableKey: 'pk_test_kTSRJkTTOf6Gfro42G0n6UJb',\n    baseURL: 'http://localhost:3000/api'\n};\n\n//# sourceURL=webpack:///./src/client/config/dev.js?");

/***/ }),

/***/ "./src/client/config/keys.js":
/*!***********************************!*\
  !*** ./src/client/config/keys.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// KEYS.JS - FIGURE OUT WHAT SETS OF KEYS TO RETURN\n// THESE ARE THE FRONT END KEYS, IT DOESNT MATTER IF THEY CAN SEE THIS OR NOT, HAS NO HARM\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./dev */ \"./src/client/config/dev.js\");\n}\n\n//# sourceURL=webpack:///./src/client/config/keys.js?");

/***/ }),

/***/ "./src/middlewares/requireCredits.js":
/*!*******************************************!*\
  !*** ./src/middlewares/requireCredits.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (req, res, next) {\n\n    if (req.user.credits < 1) {\n        return res.status(403).send({ error: 'Not enough credits!' });\n    }\n\n    next();\n};\n\n//# sourceURL=webpack:///./src/middlewares/requireCredits.js?");

/***/ }),

/***/ "./src/middlewares/requireLogin.js":
/*!*****************************************!*\
  !*** ./src/middlewares/requireLogin.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 'NEXT' FUNCTION WILL BE CALLED WHEN MIDDLEWARE IS COMPLETE/FINISHED RUNNING\n// IT WILL CALL THE NEXT MIDDLEWARE IN THE CHAIN\nmodule.exports = function (req, res, next) {\n\n    // IF THE USER OBJ DOESNT EXIST, THEN USER IS NOT LOGGED IN\n    if (!req.user) {\n        return res.status(401).send({ error: 'You must log in!' });\n    }\n\n    // USE THE NEXT MIDDLEWARE\n    next();\n};\n\n//# sourceURL=webpack:///./src/middlewares/requireLogin.js?");

/***/ }),

/***/ "./src/server/api/config/dev.js":
/*!**************************************!*\
  !*** ./src/server/api/config/dev.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// DEV.JS - DONT COMMIT THIS\nmodule.exports = {\n    googleClientID: '653217625689-64esa9g9u37hjb1hksduni51dds049ns.apps.googleusercontent.com',\n    googleClientSecret: 'yWxkEUdVXcIqyK5K9zvEsLbh',\n    facebookClientID: '211889032940342',\n    facebookClientSecret: '508dfb3726770f9e018663ce34ee2b5e',\n    stripePublishableKey: 'pk_test_kTSRJkTTOf6Gfro42G0n6UJb',\n    stripeSecretKey: 'sk_test_WWRZ032gZk2W3NhaWJy7AUkZ',\n    mongoURI: 'mongodb://selami:cimbomTR@ds237620.mlab.com:37620/accountbook',\n    cookieKey1: 'dnuwASBDuaihf934fnxihDADNKASNDAfiwfhx89wey4',\n    cookieKey2: 'DSABDBAUg6783gdaaug67T7qdba32jdaodnanbda',\n    sendGridKey: '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',\n    redirectDomain: 'http://localhost:3000'\n};\n\n//# sourceURL=webpack:///./src/server/api/config/dev.js?");

/***/ }),

/***/ "./src/server/api/config/keys.js":
/*!***************************************!*\
  !*** ./src/server/api/config/keys.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// KEYS.JS - FIGURE OUT WHAT SETS OF KEYS TO RETURN\nif (false) {} else {\n    // LOAD DEV KEYS\n    module.exports = __webpack_require__(/*! ./dev */ \"./src/server/api/config/dev.js\");\n}\n\n//# sourceURL=webpack:///./src/server/api/config/keys.js?");

/***/ }),

/***/ "./src/server/api/models/Recipient.js":
/*!********************************************!*\
  !*** ./src/server/api/models/Recipient.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n\n// CREATE A NEW RECIPIENTS COLLECTION\n\nvar recipientSchema = new Schema({\n    email: String,\n    responded: { type: Boolean, default: false }\n});\n\nmodule.exports = recipientSchema;\n\n//# sourceURL=webpack:///./src/server/api/models/Recipient.js?");

/***/ }),

/***/ "./src/server/api/models/Survey.js":
/*!*****************************************!*\
  !*** ./src/server/api/models/Survey.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n\nvar RecipientSchema = __webpack_require__(/*! ./Recipient */ \"./src/server/api/models/Recipient.js\");\n\n// CREATE A NEW SURVEY COLLECTION\nvar surveySchema = new Schema({\n    customer: String,\n    title: String,\n    body: String,\n    subject: String,\n    // SUB DOCUMENTS\n    recipients: [RecipientSchema],\n    // IS FEEDBACK GIVEN (FROM THE RECIPIENTS)\n    yes: { type: Number, default: 0 },\n    no: { type: Number, default: 0 },\n    // REFERENCE/BELONGS TO A USER (BY OBJECTID: $oid), 'USER' COLLECTION IN MONGODB\n    _user: { type: Schema.Types.ObjectId, ref: 'User' },\n    dateSent: Date,\n    lastResponded: Date\n});\n\nmongoose.model('surveys', surveySchema);\n\n//# sourceURL=webpack:///./src/server/api/models/Survey.js?");

/***/ }),

/***/ "./src/server/api/models/User.js":
/*!***************************************!*\
  !*** ./src/server/api/models/User.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n\n// CREATE A NEW USER COLLECTION\n\nvar userSchema = new Schema({\n    googleId: String,\n    facebookId: String,\n    email: String,\n    name: String,\n    // USE OBJ FOR OTHER CONFIGURATIONS (CHECK MONGOOSE DOCS)\n    credits: { type: Number, default: 0 }\n});\n\nmongoose.model('users', userSchema);\n\n//# sourceURL=webpack:///./src/server/api/models/User.js?");

/***/ }),

/***/ "./src/server/api/routes/authRoutes.js":
/*!*********************************************!*\
  !*** ./src/server/api/routes/authRoutes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\n\nmodule.exports = function (app) {\n    // AUTHENTICATE WITH GOOGLE WHEN GOING TO THIS ROUTE\n    app.get('/auth/google', passport.authenticate('google', {\n        scope: ['profile', 'email']\n    }));\n    // CALLBACK URL FOR GOOGLE\n    app.get('/auth/google/callback', passport.authenticate('google', {\n        failureRedirect: '/login'\n    }), function (req, res) {\n        // SUCCESSFULL AUTHENTICATION, REDIRECT TO HOME\n        res.redirect('/');\n    });\n\n    // AUTHENTICATE WITH FACEBOOK WHEN GOING TO THIS ROUTE\n    app.get('/auth/facebook', passport.authenticate('facebook', {\n        authType: 'rerequest',\n        scope: ['email']\n    }));\n    // CALLBACK URL FOR FACEBOOK\n    app.get('/auth/facebook/callback', passport.authenticate('facebook', {\n        failureRedirect: '/login'\n    }), function (req, res) {\n        // SUCCESSFULL AUTHENTICATION, REDIRECT TO HOME\n        res.redirect('/');\n    });\n\n    app.get('/api/current_user', function (req, res) {\n        res.send(req.user);\n    });\n\n    app.get('/api/logout', function (req, res) {\n        req.logout();\n        res.redirect('/');\n    });\n};\n\n//# sourceURL=webpack:///./src/server/api/routes/authRoutes.js?");

/***/ }),

/***/ "./src/server/api/routes/billingRoutes.js":
/*!************************************************!*\
  !*** ./src/server/api/routes/billingRoutes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar keys = __webpack_require__(/*! ../config/keys */ \"./src/server/api/config/keys.js\");\nvar stripe = __webpack_require__(/*! stripe */ \"stripe\")(keys.stripeSecretKey);\nvar requireLogin = __webpack_require__(/*! ../../../middlewares/requireLogin */ \"./src/middlewares/requireLogin.js\");\n\nmodule.exports = function (app) {\n    // REFERENCE FOR EXPRESS.JS TO USE THE 'REQUIRELOGIN' MIDDLEWARE\n    app.post('/api/stripe', requireLogin, function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n            var customer, source, user;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return stripe.customers.create({\n                                email: req.body.token.email\n                            });\n\n                        case 2:\n                            customer = _context.sent;\n                            _context.next = 5;\n                            return stripe.customers.createSource(customer.id, {\n                                source: req.body.token.id\n                            });\n\n                        case 5:\n                            source = _context.sent;\n                            _context.next = 8;\n                            return stripe.charges.create({\n                                amount: 500,\n                                currency: \"eur\",\n                                description: \"Charge \\u20AC5,00 for: \" + req.body.token.email,\n                                customer: source.customer\n                            });\n\n                        case 8:\n\n                            req.user.credits += 5;\n                            // SAVE THE NEW INFO OF THE USER IN THE MODEL BECAUSE WE INCREMENTED 5 CREDITS. ALL THE DATA IS ALREADY INSIDE THE 'REQ.USER' OBJECT\n                            _context.next = 11;\n                            return req.user.save();\n\n                        case 11:\n                            user = _context.sent;\n\n\n                            // SEND BACK THE UPDATED USER MODEL\n                            res.send(user);\n\n                        case 13:\n                        case \"end\":\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n};\n\n//# sourceURL=webpack:///./src/server/api/routes/billingRoutes.js?");

/***/ }),

/***/ "./src/server/api/routes/getTestData.js":
/*!**********************************************!*\
  !*** ./src/server/api/routes/getTestData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (app) {\n\n    app.get('/api/users', function (req, res) {\n        res.json([{\n            id: 1,\n            name: 'Selami Cetinguney'\n        }, {\n            id: 2,\n            name: 'Lina Cetinguney'\n        }, {\n            id: 3,\n            name: 'Baby Cetinguney'\n        }]);\n    });\n\n    app.get('/api/admins', function (req, res) {\n        res.json([{\n            id: 1,\n            name: 'Admin 1'\n        }, {\n            id: 2,\n            name: 'Admin 2'\n        }, {\n            id: 3,\n            name: 'Admin 3'\n        }]);\n    });\n\n    app.get('/api/surveys', function (req, res) {\n        res.json([{\n            id: 1,\n            name: 'Survey 1'\n        }, {\n            id: 2,\n            name: 'Survey 2'\n        }, {\n            id: 3,\n            name: 'Survey 3'\n        }]);\n    });\n};\n\n//# sourceURL=webpack:///./src/server/api/routes/getTestData.js?");

/***/ }),

/***/ "./src/server/api/routes/surveyRoutes.js":
/*!***********************************************!*\
  !*** ./src/server/api/routes/surveyRoutes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// const keys           = require('../../api/config/keys');\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar requireCredits = __webpack_require__(/*! ../../../middlewares/requireCredits */ \"./src/middlewares/requireCredits.js\");\nvar requireLogin = __webpack_require__(/*! ../../../middlewares/requireLogin */ \"./src/middlewares/requireLogin.js\");\nvar Mailer = __webpack_require__(/*! ../services/Mailer */ \"./src/server/api/services/Mailer.js\");\n// const sgMail         = require('@sendgrid/mail');\n// const striptags      = require('striptags');\nvar Survey = mongoose.model('surveys');\nvar surveyTemplate = __webpack_require__(/*! ../services/emailTemplates/surveyTemplate */ \"./src/server/api/services/emailTemplates/surveyTemplate.js\");\n\nvar SurveyRoutes = function SurveyRoutes(app) {\n    app.post('/api/surveys', requireLogin, requireCredits, function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n            var _req$body, title, body, subject, recipients, survey, mailer, user, message, code, response, headers, _body;\n\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _req$body = req.body, title = _req$body.title, body = _req$body.body, subject = _req$body.subject, recipients = _req$body.recipients;\n                            _context.next = 3;\n                            return new Survey({\n                                customer: req.user.name,\n                                title: title,\n                                body: body,\n                                subject: subject,\n                                // THE RECIPIENTS IN THE SURVEY MODEL (MONGOOSE) ACCEPTS AN ARRAY OF EMAILS\n                                recipients: recipients.split(',').map(function (email) {\n                                    return { email: email.trim() };\n                                }),\n                                _user: req.user.id,\n                                dateSent: Date.now()\n                            });\n\n                        case 3:\n                            survey = _context.sent;\n                            _context.prev = 4;\n\n                            // SEND THE EMAIL\n                            mailer = new Mailer(survey, surveyTemplate(survey));\n                            _context.next = 8;\n                            return mailer.send();\n\n                        case 8:\n                            _context.next = 10;\n                            return survey.save();\n\n                        case 10:\n                            // DECREMENT 1 CREDIT FROM THE USER\n                            req.user.credits -= 1;\n                            // SAVE THE NEW INFO OF THE USER IN THE MODEL BECAUSE WE DECREMENTED 1 CREDIT. ALL THE DATA IS ALREADY INSIDE THE 'REQ.USER' OBJECT\n                            _context.next = 13;\n                            return req.user.save();\n\n                        case 13:\n                            user = _context.sent;\n\n\n                            recipients.split(',').forEach(function (email) {\n                                console.log('Email sent to ' + email + '!');\n                            });\n\n                            // SEND BACK THE UPDATED USER MODEL. THIS WAS THE HEADER WILL AUTOMATICALLY UPDATE\n                            res.send(user);\n                            _context.next = 32;\n                            break;\n\n                        case 18:\n                            _context.prev = 18;\n                            _context.t0 = _context['catch'](4);\n\n                            //Extract error msg\n                            message = _context.t0.message, code = _context.t0.code, response = _context.t0.response;\n\n\n                            console.log(message);\n                            console.log('');\n                            console.log(code);\n                            console.log('');\n                            console.log(response);\n\n                            //Extract response msg\n                            headers = response.headers, _body = response.body;\n\n\n                            console.log('');\n                            console.log(headers);\n                            console.log('');\n                            console.log(_body.errors);\n\n                            res.status(response.statusCode).send({\n                                message: message,\n                                code: code,\n                                response: response,\n                                headers: headers,\n                                body: _body.errors\n                            });\n\n                        case 32:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined, [[4, 18]]);\n        }));\n\n        return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n        };\n    }()\n\n    // sgMail.setApiKey(keys.sendGridKey);\n    // const msg = {\n    //     to: recipients.split(','),\n    //     from: 'no-reply@accountbook.com',\n    //     subject: subject,\n    //     content: [\n    //         {\n    //             type: 'text/plain',\n    //             value: striptags(survey.body),\n    //         },\n    //         {\n    //             type: ' text/html',\n    //             value: surveyTemplate(survey)\n    //         }\n    //     ]\n    // };\n\n    // try {\n    //     const response = await sgMail.sendMultiple(msg);\n\n    //     msg.to.forEach(email => {\n    //         console.log(`Email send to ${email}`);\n    //     });\n\n    //     return response;\n    // }\n    // catch(error) {\n    //     //Extract error msg\n    //     const { message, code, response } = error;\n\n    //     console.log(message);\n    //     console.log('');\n    //     console.log(code);\n    //     console.log('');\n    //     console.log(response);\n\n    //     //Extract response msg\n    //     const { headers, body } = response;\n\n    //     console.log('');\n    //     console.log(headers);\n    //     console.log('');\n    //     console.log(body.errors);\n    // };\n    );\n};\n\nexports.default = SurveyRoutes;\n\n//# sourceURL=webpack:///./src/server/api/routes/surveyRoutes.js?");

/***/ }),

/***/ "./src/server/api/services/Mailer.js":
/*!*******************************************!*\
  !*** ./src/server/api/services/Mailer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sendgrid = __webpack_require__(/*! sendgrid */ \"sendgrid\");\n\nvar _sendgrid2 = _interopRequireDefault(_sendgrid);\n\nvar _keys = __webpack_require__(/*! ../config/keys */ \"./src/server/api/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar helper = _sendgrid2.default.mail;\n\nvar Mailer = function (_helper$Mail) {\n    _inherits(Mailer, _helper$Mail);\n\n    // THE DATA COMES FROM THE 'SURVEY' ROUTE, WITH THE SURVEY OBJECT SEND AS THE DATA\n    // SURVEY OBJECT ALSO GETS PASSED TO THE MONGOOSE MODEL\n    function Mailer(_ref, content) {\n        var subject = _ref.subject,\n            recipients = _ref.recipients;\n\n        _classCallCheck(this, Mailer);\n\n        var _this = _possibleConstructorReturn(this, (Mailer.__proto__ || Object.getPrototypeOf(Mailer)).call(this));\n\n        _initialiseProps.call(_this);\n\n        _this.sgApi = (0, _sendgrid2.default)(_keys2.default.sendGridKey);\n        _this.from_email = new helper.Email('no-reply@accountbook.com');\n        _this.body = new helper.Content('text/html', content);\n        _this.subject = subject;\n        _this.recipients = _this.formatAddresses(recipients);\n\n        // ADD THE BODY TO THE SENDGRID CONTENT\n        _this.addContent(_this.body);\n        _this.addClickTracking();\n        _this.addRecipients();\n        return _this;\n    }\n\n    // SEND THE EMAIL\n\n\n    return Mailer;\n}(helper.Mail);\n\nvar _initialiseProps = function _initialiseProps() {\n    var _this2 = this;\n\n    this.formatAddresses = function (recipients) {\n        // IN RECIPIENTS OBJECT (FROM THE SURVEY ROUTER) THERE IS AN 'EMAIL' PROPERTY\n        return recipients.map(function (recipient) {\n            return new helper.Email(recipient.email);\n        });\n    };\n\n    this.addClickTracking = function () {\n        var trackingSettings = new helper.TrackingSettings();\n        var clickTracking = new helper.ClickTracking(true, true);\n\n        trackingSettings.setClickTracking(clickTracking);\n        _this2.addTrackingSettings(trackingSettings);\n    };\n\n    this.addRecipients = function () {\n        var personalize = new helper.Personalization();\n\n        // ADD EVERY RECIPIENT TO THE PERSONALIZE OBJECT. THIS IS NEEDED FOR SENDGRID\n        _this2.recipients.forEach(function (recipient) {\n            personalize.addTo(recipient);\n        });\n\n        _this2.addPersonalization(personalize);\n    };\n\n    this.send = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var request, response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        request = _this2.sgApi.emptyRequest({\n                            method: 'POST',\n                            path: '/v3/mail/send',\n                            body: _this2.toJSON()\n                        });\n                        _context.next = 3;\n                        return _this2.sgApi.API(request);\n\n                    case 3:\n                        response = _context.sent;\n                        return _context.abrupt('return', response);\n\n                    case 5:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, _this2);\n    }));\n};\n\n;\n\nmodule.exports = Mailer;\n\n//# sourceURL=webpack:///./src/server/api/services/Mailer.js?");

/***/ }),

/***/ "./src/server/api/services/emailTemplates/surveyTemplate.js":
/*!******************************************************************!*\
  !*** ./src/server/api/services/emailTemplates/surveyTemplate.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _keys = __webpack_require__(/*! ../../config/keys */ \"./src/server/api/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// THE BODY KEY OF THE SURVEY OBJECT GETS PASSED AS THE ARGUMENT (MONGOOSE MODEL)\nmodule.exports = function (survey) {\n    return '\\n        <html>\\n            <body>\\n                <div style=\"text-align: center;\">\\n                    <h3>I\\'d like your input!</h3>\\n                    <p>Please answer the following question:</p>\\n                    <p>' + survey.body + '</p>\\n                    <div>\\n                        <a href=\"' + _keys2.default.redirectDomain + '/feedback\">Yes</a>\\n                    </div>\\n                    <div>\\n                        <a href=\"' + _keys2.default.redirectDomain + '/feedback\">No</a>\\n                    </div>\\n                </div>\\n            </body>\\n        </html>\\n    ';\n};\n\n//# sourceURL=webpack:///./src/server/api/services/emailTemplates/surveyTemplate.js?");

/***/ }),

/***/ "./src/server/api/services/passport.js":
/*!*********************************************!*\
  !*** ./src/server/api/services/passport.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar GoogleStrategy = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\").Strategy;\nvar FacebookStrategy = __webpack_require__(/*! passport-facebook */ \"passport-facebook\").Strategy;\nvar keys = __webpack_require__(/*! ../config/keys */ \"./src/server/api/config/keys.js\");\nvar User = mongoose.model('users');\n\n// THESE 2 FUNCTIONS USE THAT DATA THAT'S INSIDE THE COOKIE\npassport.serializeUser(function (user, done) {\n    return done(null, user.id);\n});\npassport.deserializeUser(function (id, done) {\n    User.findById(id).then(function (user) {\n        return done(null, user);\n    });\n});\n\npassport.use(new GoogleStrategy({\n    clientID: keys.googleClientID,\n    clientSecret: keys.googleClientSecret,\n    callbackURL: '/auth/google/callback',\n    proxy: true\n}, function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, done) {\n        var existingUser, user;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        _context.next = 2;\n                        return User.findOne({\n                            googleId: profile.id\n                        });\n\n                    case 2:\n                        existingUser = _context.sent;\n\n                        if (!existingUser) {\n                            _context.next = 5;\n                            break;\n                        }\n\n                        return _context.abrupt('return', done(null, existingUser));\n\n                    case 5:\n                        _context.next = 7;\n                        return new User({\n                            googleId: profile.id,\n                            email: profile.emails[0].value,\n                            name: profile.displayName\n                        }).save();\n\n                    case 7:\n                        user = _context.sent;\n\n\n                        // THE 'USER OBJ' GETS ASSIGNED TO THE 'REQ'\n                        done(null, user);\n\n                    case 9:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3, _x4) {\n        return _ref.apply(this, arguments);\n    };\n}()));\n\npassport.use(new FacebookStrategy({\n    clientID: keys.facebookClientID,\n    clientSecret: keys.facebookClientSecret,\n    callbackURL: '/auth/facebook/callback',\n    enableProof: true,\n    profileFields: ['id', 'email', 'displayName', 'last_name', 'first_name', 'gender', 'link']\n}, function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(accessToken, refreshToken, profile, done) {\n        var existingUser, user;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        _context2.next = 2;\n                        return User.findOne({\n                            facebookId: profile.id\n                        });\n\n                    case 2:\n                        existingUser = _context2.sent;\n\n                        if (!existingUser) {\n                            _context2.next = 5;\n                            break;\n                        }\n\n                        return _context2.abrupt('return', done(null, existingUser));\n\n                    case 5:\n                        _context2.next = 7;\n                        return new User({\n                            facebookId: profile._json.id,\n                            email: profile._json.email,\n                            name: profile._json.name\n                        }).save();\n\n                    case 7:\n                        user = _context2.sent;\n\n\n                        // THE 'USER OBJ' GETS ASSIGNED TO THE 'REQ'\n                        done(null, user);\n\n                    case 9:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, undefined);\n    }));\n\n    return function (_x5, _x6, _x7, _x8) {\n        return _ref2.apply(this, arguments);\n    };\n}()));\n\n//# sourceURL=webpack:///./src/server/api/services/passport.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\n__webpack_require__(/*! ./api/models/User */ \"./src/server/api/models/User.js\");\n\n__webpack_require__(/*! ./api/models/Survey */ \"./src/server/api/models/Survey.js\");\n\n__webpack_require__(/*! ./api/services/passport */ \"./src/server/api/services/passport.js\");\n\nvar _authRoutes = __webpack_require__(/*! ./api/routes/authRoutes */ \"./src/server/api/routes/authRoutes.js\");\n\nvar _authRoutes2 = _interopRequireDefault(_authRoutes);\n\nvar _billingRoutes = __webpack_require__(/*! ./api/routes/billingRoutes */ \"./src/server/api/routes/billingRoutes.js\");\n\nvar _billingRoutes2 = _interopRequireDefault(_billingRoutes);\n\nvar _store = __webpack_require__(/*! ../shared/helpers/store */ \"./src/shared/helpers/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _keys = __webpack_require__(/*! ./api/config/keys */ \"./src/server/api/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _routes = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _surveyRoutes = __webpack_require__(/*! ./api/routes/surveyRoutes */ \"./src/server/api/routes/surveyRoutes.js\");\n\nvar _surveyRoutes2 = _interopRequireDefault(_surveyRoutes);\n\nvar _getTestData = __webpack_require__(/*! ./api/routes/getTestData */ \"./src/server/api/routes/getTestData.js\");\n\nvar _getTestData2 = _interopRequireDefault(_getTestData);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieSession = __webpack_require__(/*! cookie-session */ \"cookie-session\");\n\nvar _cookieSession2 = _interopRequireDefault(_cookieSession);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.connect(_keys2.default.mongoURI);\n\nvar app = (0, _express2.default)();\nvar port = process.env.PORT || 3000;\n\napp.use((0, _cors2.default)());\napp.use(_bodyParser2.default.json());\n\n// TELL 'PASSPORT' TO MAKE USE THE COOKIES, AND ASSIGN THE 'USER OBJ' TO THE 'REQ', WHICH REPRESENT THE LOADED SESSION\napp.use((0, _cookieSession2.default)({\n    // SET COOKIE TO 30 DAYS\n    maxAge: 30 * 24 * 60 * 60 * 1000,\n    // ENCRYPT COOKIE, CHOOSE RANDOM ONE FROM ARRAY\n    keys: [_keys2.default.cookieKey1, _keys2.default.cookieKey2]\n}));\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\n\n(0, _authRoutes2.default)(app);\n(0, _billingRoutes2.default)(app);\n(0, _getTestData2.default)(app);\n(0, _surveyRoutes2.default)(app);\n\n// IF ITS AN UNKOWN ROUTE/REQUEST, THEN LOOK IN THE 'PUBLIC' FOLDER FOR THE MACTHING REQUEST\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n    var store = (0, _store2.default)(req);\n\n    // RETURNS AN ARRAY OF PROMISES || NULL\n    // CHECKS IF THE COMPONENT (ROUTE) HAS A FUNTION CALLED 'LOADDATA'\n    var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {\n        var route = _ref.route;\n\n        return route.loadData\n        // INITIATE THE 'loadData' FUNCTION IN THE FRONT-END WITH THE DATA FROM THE STORE\n        ? route.loadData(store) : null;\n    }).map(function (promise) {\n        // LOOP THROUGH THE PROMISES ARRAY\n        if (promise) {\n            // IF THE CURRENT PROMISE IS TRUE, WRAP IT WITH A NEW PROMISE AND RESOLVE IT\n            return new Promise(function (resolve, reject) {\n                promise.then(resolve).catch(resolve);\n            });\n        }\n    });\n\n    // RUN THE PROMISE, GET THE CORRESPONDING ROUTE, AND CALL THE 'LOADDATA' FUNCTION\n    Promise.all(promises).then(function () {\n        var context = {};\n\n        // THIS IS THE ROUTES IN THE 'ROUTES.JS' FROM THE SHARED FOLDER\n        var content = (0, _server.renderToString)(_react2.default.createElement(\n            _reactRedux.Provider,\n            { store: store },\n            _react2.default.createElement(\n                _reactRouterDom.StaticRouter,\n                { location: req.path, context: context },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    (0, _reactRouterConfig.renderRoutes)(_routes2.default)\n                )\n            )\n        ));\n\n        var helmet = _reactHelmet.Helmet.renderStatic();\n\n        var renderer = '<!DOCTYPE html>\\n            <!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->\\n            <!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->\\n            <!--[if IE 8]>         <html class=\"no-js lt-ie9\"> <![endif]-->\\n            <!--[if gt IE 8]><!--> <html> <!--<![endif]-->\\n            <html>\\n                <head>\\n                    ' + helmet.title.toString() + '\\n                    <meta charset=\"UTF-8\">\\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n                    ' + helmet.meta.toString() + '\\n\\n                    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\\n                    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.4.1/css/all.css\" integrity=\"sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz\" crossorigin=\"anonymous\">\\n                    <link rel=\"stylesheet\" type=\"text/css\" href=\"../styles.css\" defer />\\n                </head>\\n\\n                <body>\\n                    <div id=\\'root-app\\'>' + content + '</div>\\n\\n                    <script src=\"../bundle.js\" defer></script>\\n                    <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\\n                    \\n                    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\\n                    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\\n                    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\\n                </body>\\n            </html>';\n\n        if (context.url) {\n            return res.redirect(303, context.url);\n        }\n\n        if (context.notFound) {\n            res.status(404);\n        }\n\n        res.send(renderer);\n    });\n});\n\napp.listen(port, function () {\n    return console.log('Server is up! Listening to port', port);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Header = __webpack_require__(/*! ./components/Header/Header */ \"./src/shared/components/Header/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _users = __webpack_require__(/*! ./actions/users */ \"./src/shared/actions/users.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// THIS IT THE ROUTE THAT GET SEND FROM THE SERVER (NODE.JS)\nvar App = function App(_ref) {\n    var route = _ref.route;\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            { className: 'container' },\n            (0, _reactRouterConfig.renderRoutes)(route.routes)\n        )\n    );\n};\n\n// FETCH THE CURRENT USER DATA, LOAD IT IN THE REDUX STORE\nexports.default = {\n    component: App,\n    // GET ONLY THE DISPATCH FROM THE STORE (THE STORE IS SEND FROM THE SERVER, NODE.JS)\n    loadData: function loadData(_ref2) {\n        var dispatch = _ref2.dispatch;\n        return dispatch((0, _users.fetchCurrentUser)());\n    }\n};\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/actions/surveys.js":
/*!***************************************!*\
  !*** ./src/shared/actions/surveys.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_SURVEYS = exports.FETCH_SURVEYS = 'fetch_surveys';\n\n// THESE ARE THE ACTIONS THAT GET CALLED IN THE  'loadData' FUNCTIONS IN THE FRONT-END\n// THESE ACTIONS THEN CALL THE REDUCERS THROUGH THE 'dispatch({})' FUNCTION\n\nvar fetchSurveys = exports.fetchSurveys = function fetchSurveys() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var response;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.get('/surveys');\n\n                        case 2:\n                            response = _context.sent;\n\n                            dispatch({\n                                type: FETCH_SURVEYS,\n                                // 'DATA' == THE KEY/VALUE WITHIN THE DATA OF THE PROMISE RESPONSE\n                                payload: response.data\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/shared/actions/surveys.js?");

/***/ }),

/***/ "./src/shared/actions/users.js":
/*!*************************************!*\
  !*** ./src/shared/actions/users.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';\nvar FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';\n\n// THESE ARE THE ACTIONS THAT GET CALLED IN THE  'loadData' FUNCTIONS IN THE FRONT-END\n\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var response;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.get('/users');\n\n                        case 2:\n                            response = _context.sent;\n\n                            dispatch({\n                                type: FETCH_USERS,\n                                payload: response.data\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n            var response;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            _context2.next = 2;\n                            return api.get('/current_user');\n\n                        case 2:\n                            response = _context2.sent;\n\n                            dispatch({\n                                type: FETCH_CURRENT_USER,\n                                // 'DATA' == THE KEY/VALUE WITHIN THE DATA OF THE PROMISE RESPONSE\n                                payload: response.data\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x4, _x5, _x6) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\nvar fetchAdmins = exports.fetchAdmins = function fetchAdmins() {\n    return function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n            var response;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            _context3.next = 2;\n                            return api.get('/admins');\n\n                        case 2:\n                            response = _context3.sent;\n\n                            dispatch({\n                                type: FETCH_ADMINS,\n                                // 'DATA' == THE KEY/VALUE WITHIN THE DATA OF THE PROMISE RESPONSE\n                                payload: response.data\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x7, _x8, _x9) {\n            return _ref3.apply(this, arguments);\n        };\n    }();\n};\n\nvar handleToken = exports.handleToken = function handleToken(token) {\n    return function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {\n            var response;\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            _context4.next = 2;\n                            return api.post('/stripe', {\n                                token: token\n                            });\n\n                        case 2:\n                            response = _context4.sent;\n\n\n                            dispatch({\n                                type: FETCH_CURRENT_USER,\n                                // 'DATA' == THE KEY/VALUE WITHIN THE DATA OF THE PROMISE RESPONSE\n                                payload: response.data\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined);\n        }));\n\n        return function (_x10, _x11, _x12) {\n            return _ref4.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/shared/actions/users.js?");

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

/***/ "./src/shared/components/Credit/Credit.js":
/*!************************************************!*\
  !*** ./src/shared/components/Credit/Credit.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Credit = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactStripeCheckout = __webpack_require__(/*! react-stripe-checkout */ \"react-stripe-checkout\");\n\nvar _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);\n\nvar _keys = __webpack_require__(/*! ../../../client/config/keys */ \"./src/client/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _requireAuth = __webpack_require__(/*! ../hoc/requireAuth */ \"./src/shared/components/hoc/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nvar _users = __webpack_require__(/*! ../../actions/users */ \"./src/shared/actions/users.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Credit = exports.Credit = function (_React$Component) {\n    _inherits(Credit, _React$Component);\n\n    function Credit() {\n        _classCallCheck(this, Credit);\n\n        return _possibleConstructorReturn(this, (Credit.__proto__ || Object.getPrototypeOf(Credit)).apply(this, arguments));\n    }\n\n    _createClass(Credit, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var headInfo = {\n                title: 'Mi Accounting | Credits',\n                ogTitle: 'Credits',\n                ogURL: 'http://localhost:3000/credits'\n            };\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'row justify-content-md-center' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-12 text-center' },\n                    _react2.default.createElement(_helmet2.default, headInfo),\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Credits & Payments'\n                    ),\n                    'Your credits: ',\n                    this.props.authUser.credits,\n                    _react2.default.createElement(\n                        _reactStripeCheckout2.default,\n                        {\n                            name: 'My Accountbook',\n                            description: 'Buy your extra credits!',\n                            ComponentClass: 'div',\n                            amount: 500\n                            // email={this.props.authUser.email}\n                            , currency: 'EUR',\n                            alipay: true,\n                            bitcoin: true,\n                            token: function token(_token) {\n                                return _this2.props.handleToken(_token);\n                            },\n                            stripeKey: _keys2.default.stripePublishableKey\n                        },\n                        _react2.default.createElement(\n                            'button',\n                            { type: 'button', className: 'btn btn-primary' },\n                            'Pay with Creditcard'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Credit;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var authUser = _ref.authUser;\n\n    return {\n        authUser: authUser\n    };\n};\n\nexports.default = {\n    // CONNECT AND MAP THE CURRENT STATE OF THE STORE TO THE THIS.PROPS OBJECT\n    // HOC, THIS WILL RUN THE REQUIRED AUTH FUNCTION AND PASS BACK ALL THE PROPS\n    component: (0, _reactRedux.connect)(mapStateToProps, { handleToken: _users.handleToken })((0, _requireAuth2.default)(Credit))\n};\n\n//# sourceURL=webpack:///./src/shared/components/Credit/Credit.js?");

/***/ }),

/***/ "./src/shared/components/Dashboard/Dashboard.js":
/*!******************************************************!*\
  !*** ./src/shared/components/Dashboard/Dashboard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _surveys = __webpack_require__(/*! ../../actions/surveys */ \"./src/shared/actions/surveys.js\");\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _requireAuth = __webpack_require__(/*! ../hoc/requireAuth */ \"./src/shared/components/hoc/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_React$Component) {\n    _inherits(Dashboard, _React$Component);\n\n    function Dashboard() {\n        _classCallCheck(this, Dashboard);\n\n        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));\n    }\n\n    _createClass(Dashboard, [{\n        key: 'componentDidMount',\n\n        // THIS IS FOR NAVIGATION WITHIN THE APPLICATION\n        value: function componentDidMount() {\n            this.props.fetchSurveys();\n        }\n    }, {\n        key: 'renderSurveys',\n        value: function renderSurveys() {\n            var surveys = this.props.surveys;\n\n            return surveys.map(function (_ref) {\n                var id = _ref.id,\n                    name = _ref.name;\n\n                return _react2.default.createElement(\n                    'li',\n                    { key: id, className: 'list-group-item' },\n                    name\n                );\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var headInfo = {\n                title: 'Mi Accounting | Dashboard',\n                ogTitle: 'Dashboard',\n                ogURL: 'http://localhost:3000/dashboard'\n            };\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'row justify-content-md-center' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-12 text-center' },\n                    _react2.default.createElement(_helmet2.default, headInfo),\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Here is a list of all the surveys!'\n                    ),\n                    _react2.default.createElement(\n                        'ul',\n                        { className: 'list-group', style: { width: \"50%\", margin: \"auto\" } },\n                        this.renderSurveys()\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'action-btns-fixed-bottom' },\n                    _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/survey/new' },\n                        _react2.default.createElement(\n                            'button',\n                            { className: 'btn btn-danger action-btn' },\n                            _react2.default.createElement('i', { className: 'fas fa-plus fa-lg' })\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Dashboard;\n}(_react2.default.Component);\n\n;\n\n// THESE ARE THE REDUCERS THAT ARE SETUP IN THE 'COMBINEDREDUCERS.JS'. MAP THESE TO THE THIS.PROPS OBJECT\nvar mapStateToProps = function mapStateToProps(_ref2) {\n    var surveys = _ref2.surveys,\n        authUser = _ref2.authUser;\n\n    return {\n        surveys: surveys,\n        authUser: authUser\n    };\n};\n\nexports.default = {\n    // CONNECT AND MAP THE CURRENT STATE OF THE STORE TO THE THIS.PROPS OBJECT\n    // HOC, THIS WILL RUN THE REQUIRED AUTH FUNCTION AND PASS BACK ALL THE PROPS\n    component: (0, _reactRedux.connect)(mapStateToProps, { fetchSurveys: _surveys.fetchSurveys })((0, _requireAuth2.default)(Dashboard)),\n    loadData: function loadData(_ref3) {\n        var dispatch = _ref3.dispatch;\n        return dispatch((0, _surveys.fetchSurveys)());\n    }\n};\n\n//# sourceURL=webpack:///./src/shared/components/Dashboard/Dashboard.js?");

/***/ }),

/***/ "./src/shared/components/Header/Header.js":
/*!************************************************!*\
  !*** ./src/shared/components/Header/Header.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Header = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/Header/styles.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = exports.Header = function (_React$Component) {\n    _inherits(Header, _React$Component);\n\n    function Header() {\n        _classCallCheck(this, Header);\n\n        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n    }\n\n    _createClass(Header, [{\n        key: 'renderHeader',\n        value: function renderHeader() {\n            return this.props.authUser;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'nav',\n                { className: 'navbar sticky-top navbar-expand-md navbar-dark bg-dark' },\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/', className: 'navbar-brand' },\n                    'My Accountbook'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { className: 'navbar-toggler navbar-toggler-right', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapsingNavbar', 'aria-controls': 'collapsingNavbar', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },\n                    _react2.default.createElement('span', { className: 'navbar-toggler-icon' })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'collapse navbar-collapse', id: 'collapsingNavbar' },\n                    this.renderHeader() && _react2.default.createElement(\n                        'ul',\n                        { className: 'navbar-nav ml-auto' },\n                        _react2.default.createElement(\n                            'li',\n                            { className: 'nav-item' },\n                            _react2.default.createElement(\n                                _reactRouterDom.NavLink,\n                                { className: 'nav-link', to: '/credits', activeClassName: 'is-active' },\n                                'Credits ',\n                                _react2.default.createElement(\n                                    'span',\n                                    { className: 'badge badge-pill badge-danger' },\n                                    this.props.authUser.credits\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            { className: 'nav-item' },\n                            _react2.default.createElement(\n                                _reactRouterDom.NavLink,\n                                { className: 'nav-link', to: '/users', activeClassName: 'is-active' },\n                                'Users'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            { className: 'nav-item' },\n                            _react2.default.createElement(\n                                _reactRouterDom.NavLink,\n                                { className: 'nav-link', to: '/admins', activeClassName: 'is-active' },\n                                'Admins'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            { className: 'nav-item dropdown' },\n                            _react2.default.createElement(\n                                'a',\n                                { className: 'nav-link dropdown-toggle', href: '#', id: 'navbarDropdown', role: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' },\n                                this.props.authUser.name\n                            ),\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'dropdown-menu', 'aria-labelledby': 'navbarDropdown' },\n                                _react2.default.createElement(\n                                    _reactRouterDom.Link,\n                                    { to: '/dashboard', className: 'dropdown-item' },\n                                    'Dashboard'\n                                ),\n                                _react2.default.createElement(\n                                    _reactRouterDom.Link,\n                                    { to: '/dashboard', className: 'dropdown-item' },\n                                    'Settings'\n                                ),\n                                _react2.default.createElement('div', { className: 'dropdown-divider' }),\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: '/api/logout', className: 'dropdown-item' },\n                                    'Logout'\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Header;\n}(_react2.default.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var authUser = _ref.authUser;\n\n    return {\n        authUser: authUser\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack:///./src/shared/components/Header/Header.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/Home/styles.scss\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _requireAuth = __webpack_require__(/*! ../hoc/requireAuth */ \"./src/shared/components/hoc/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(_ref) {\n    var authUser = _ref.authUser;\n\n    var headInfo = {\n        title: 'Mi Accounting | Home Page',\n        ogTitle: 'Home Page',\n        ogURL: 'http://localhost:3000'\n    };\n\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(_helmet2.default, headInfo),\n        _react2.default.createElement(\n            'div',\n            { className: 'row text-center' },\n            _react2.default.createElement(\n                'div',\n                { className: 'col-md-12' },\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'Welcome ',\n                    authUser.name\n                ),\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    'Check this out'\n                )\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'row text-center' },\n            _react2.default.createElement(\n                'div',\n                { className: 'col-md-12' },\n                _react2.default.createElement(\n                    'button',\n                    { type: 'button', className: 'btn btn-primary', onClick: function onClick() {\n                            return alert('I am pressed!');\n                        } },\n                    'Press me'\n                )\n            )\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n    var authUser = _ref2.authUser;\n\n    return { authUser: authUser };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps)((0, _requireAuth2.default)(Home))\n};\n\n//# sourceURL=webpack:///./src/shared/components/Home/Home.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/Login/styles.scss\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n    _inherits(Login, _React$Component);\n\n    function Login() {\n        _classCallCheck(this, Login);\n\n        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));\n    }\n\n    _createClass(Login, [{\n        key: 'renderLogin',\n        value: function renderLogin() {\n            return this.props.authUser;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var headInfo = {\n                title: 'Mi Accounting | Login',\n                ogTitle: 'Login Page',\n                ogURL: 'http://localhost:3000'\n            };\n\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                this.renderLogin() ? _react2.default.createElement(\n                    'div',\n                    { className: 'row' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'col-md-12 text-center' },\n                        _react2.default.createElement(\n                            'h1',\n                            null,\n                            'Logged in already!'\n                        )\n                    )\n                ) : _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_helmet2.default, headInfo),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'row justify-content-center text-center' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'col-md-6', style: { marginTop: \"20px\" } },\n                            _react2.default.createElement(\n                                'a',\n                                { href: '/auth/google', role: 'button', className: 'btn btn-lg', style: { background: \"#DD4B39\", color: \"#FFFFFF\" } },\n                                _react2.default.createElement('i', { className: 'fab fa-google' }),\n                                '\\xA0\\xA0\\xA0Google Sign In'\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'row justify-content-center text-center' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'col-md-6', style: { marginTop: \"20px\" } },\n                            _react2.default.createElement(\n                                'a',\n                                { href: '/auth/facebook', role: 'button', className: 'btn btn-lg', style: { background: \"#3B5998\", color: \"#FFFFFF\" } },\n                                _react2.default.createElement('i', { className: 'fab fa-facebook-f' }),\n                                '\\xA0\\xA0\\xA0Facebook Sign In'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Login;\n}(_react2.default.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var authUser = _ref.authUser;\n\n    return {\n        authUser: authUser\n    };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps)(Login)\n};\n\n//# sourceURL=webpack:///./src/shared/components/Login/Login.js?");

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

/***/ "./src/shared/components/Survey/SurveyField.js":
/*!*****************************************************!*\
  !*** ./src/shared/components/Survey/SurveyField.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.SurveyTextarea = exports.SurveyInput = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // RENDERS EACH INPUT FIELD\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SurveyInput = exports.SurveyInput = function SurveyInput(_ref) {\n    var input = _ref.input,\n        type = _ref.type,\n        id = _ref.id,\n        label = _ref.label,\n        max = _ref.max,\n        count = _ref.count,\n        _ref$meta = _ref.meta,\n        touched = _ref$meta.touched,\n        error = _ref$meta.error;\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'form-group row' },\n        _react2.default.createElement('input', _extends({}, input, {\n            type: type,\n            id: id,\n            placeholder: label,\n            className: 'form-control rounded-0' + (touched && error ? ' border border-danger' : ''),\n            'data-max': max\n        })),\n        max && _react2.default.createElement(\n            'div',\n            { className: 'live-counter' },\n            _react2.default.createElement(\n                'small',\n                { id: id, className: 'form-text' },\n                _react2.default.createElement(\n                    'span',\n                    { className: count === 0 ? 'text-danger' : '' },\n                    count\n                ),\n                ' / ',\n                max\n            )\n        ),\n        touched && error && _react2.default.createElement(\n            'small',\n            { id: id, className: 'form-text text-danger' },\n            error\n        )\n    );\n};\n\nvar SurveyTextarea = exports.SurveyTextarea = function SurveyTextarea(_ref2) {\n    var input = _ref2.input,\n        id = _ref2.id,\n        label = _ref2.label,\n        max = _ref2.max,\n        count = _ref2.count,\n        _ref2$meta = _ref2.meta,\n        touched = _ref2$meta.touched,\n        error = _ref2$meta.error;\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'form-group row' },\n        _react2.default.createElement('textarea', _extends({}, input, {\n            id: id,\n            placeholder: label,\n            className: 'form-control rounded-0' + (touched && error ? ' border border-danger' : ''),\n            'data-max': max,\n            rows: '5'\n        })),\n        _react2.default.createElement(\n            'div',\n            { className: 'live-counter' },\n            _react2.default.createElement(\n                'small',\n                { id: id, className: 'form-text' },\n                _react2.default.createElement(\n                    'span',\n                    { className: count === 0 ? 'text-danger' : '' },\n                    count\n                ),\n                ' / ',\n                max\n            )\n        ),\n        touched && error && _react2.default.createElement(\n            'small',\n            { id: id, className: 'form-text text-danger' },\n            error\n        )\n    );\n};\n\n//# sourceURL=webpack:///./src/shared/components/Survey/SurveyField.js?");

/***/ }),

/***/ "./src/shared/components/Survey/SurveyForm.js":
/*!****************************************************!*\
  !*** ./src/shared/components/Survey/SurveyForm.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _SurveyField = __webpack_require__(/*! ./SurveyField */ \"./src/shared/components/Survey/SurveyField.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _isEmail = __webpack_require__(/*! validator/lib/isEmail */ \"validator/lib/isEmail\");\n\nvar _isEmail2 = _interopRequireDefault(_isEmail);\n\nvar _isLength = __webpack_require__(/*! validator/lib/isLength */ \"validator/lib/isLength\");\n\nvar _isLength2 = _interopRequireDefault(_isLength);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FIELDS = [\n// TITLE\n{\n    type: 'text',\n    name: 'survey_title',\n    id: 'survey-title',\n    label: 'Survey Title',\n    component: _SurveyField.SurveyInput,\n    max: 20\n},\n// SUBJECT\n{\n    type: 'text',\n    name: 'survey_subject',\n    id: 'survey-subject',\n    label: 'Survey Subject',\n    component: _SurveyField.SurveyInput,\n    max: 20\n},\n// BODY\n{\n    name: 'survey_body',\n    id: 'survey-body',\n    label: 'Survey Body',\n    component: _SurveyField.SurveyTextarea,\n    max: 300\n},\n// RECIPIENTS\n{\n    type: 'text',\n    name: 'survey_recipients',\n    id: 'survey-recipients',\n    label: 'Recipient(s)',\n    component: _SurveyField.SurveyInput\n}];\n\nvar SurveyForm = function (_React$Component) {\n    _inherits(SurveyForm, _React$Component);\n\n    function SurveyForm() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, SurveyForm);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyForm.__proto__ || Object.getPrototypeOf(SurveyForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            survey_title_counter: FIELDS[0].max,\n            survey_subject_counter: FIELDS[1].max,\n            survey_body_counter: FIELDS[2].max\n        }, _this.handleOnChange = function (e) {\n            var max = Number(e.target.dataset.max);\n            if (max) {\n                var _this$setState;\n\n                var value = e.target.value;\n                var name = e.target.name;\n\n                var value_length = Number(value.length);\n                var chars_left = max - value_length;\n\n                if (chars_left <= 0) {\n                    chars_left = 0;\n                    value = value.substr(0, max);\n                }\n\n                _this.setState((_this$setState = {}, _defineProperty(_this$setState, name + '_counter', chars_left), _defineProperty(_this$setState, name + '_value', value), _this$setState));\n            }\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(SurveyForm, [{\n        key: 'renderFields',\n        value: function renderFields() {\n            var _this2 = this;\n\n            // PLACE ALL INPUT FIELDS IN THIS CLASS INSTEAD OF FOR EACH\n            return FIELDS.map(function (_ref2, index) {\n                var type = _ref2.type,\n                    name = _ref2.name,\n                    id = _ref2.id,\n                    label = _ref2.label,\n                    component = _ref2.component,\n                    max = _ref2.max;\n\n                return _react2.default.createElement(_reduxForm.Field, {\n                    key: index + 1,\n                    type: type,\n                    name: name,\n                    id: id,\n                    label: label,\n                    max: max,\n                    component: component,\n                    onChange: _this2.handleOnChange,\n                    count: _this2.state[name + '_counter']\n                });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-4' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'QuickLinks'\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-8' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'New Survey'\n                    ),\n                    _react2.default.createElement(\n                        'form',\n                        { id: 'survey-form', onSubmit: this.props.handleSubmit(this.props.onSurveySubmit) },\n                        this.renderFields(),\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'float-right' },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'form-group row' },\n                                _react2.default.createElement(\n                                    _reactRouterDom.Link,\n                                    { to: '/dashboard', className: 'btn btn-danger rounded-0 btn-back' },\n                                    'Cancel'\n                                ),\n                                '\\xA0',\n                                _react2.default.createElement(\n                                    'button',\n                                    { type: 'submit', className: 'btn btn-success rounded-0 btn-next' },\n                                    'Next'\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return SurveyForm;\n}(_react2.default.Component);\n\n;\n\nvar validate = function validate(values) {\n    var errors = {};\n\n    FIELDS.forEach(function (_ref3) {\n        var name = _ref3.name,\n            label = _ref3.label,\n            max = _ref3.max;\n\n        // GET THE KEY IN EACH FIELD OBJECT (WITH SQUARE BRACKETS). THE KEY NAME IS ALSO THE INPUT'S NAME (<input name='A'>). IT IS IMPORTANT THAT THOSE 2 MUST MATCH!\n        if (!values[name]) errors[name] = label + ' is required!';else if (typeof max !== 'undefined') {\n            if (!(0, _isLength2.default)(values[name], { min: 1, max: max })) errors[name] = label + ' cannot be longer than ' + max + ' characters!';\n        } else if (name === 'survey_recipients') {\n            var invalidEmails = values[name].split(',').map(function (email) {\n                return email.trim();\n            }).filter(function (email) {\n                return !(0, _isEmail2.default)(email);\n            });\n\n            if (invalidEmails.length > 0) errors[name] = 'The following emails are invalid: ' + invalidEmails;\n        }\n    });\n\n    return errors;\n};\n\nexports.default = (0, _reduxForm.reduxForm)({\n    validate: validate,\n    form: 'surveyForm',\n    destroyOnUnmount: false\n})(SurveyForm);\n\n//# sourceURL=webpack:///./src/shared/components/Survey/SurveyForm.js?");

/***/ }),

/***/ "./src/shared/components/Survey/SurveyFormReview.js":
/*!**********************************************************!*\
  !*** ./src/shared/components/Survey/SurveyFormReview.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/Survey/styles.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SurveyFormReview = function SurveyFormReview(_ref) {\n    var onCancel = _ref.onCancel,\n        formValues = _ref.formValues;\n\n    console.log(formValues);\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\n            'div',\n            { className: 'col-md-12 text-center' },\n            _react2.default.createElement(\n                'h1',\n                null,\n                'Confirm your Survey!'\n            ),\n            _react2.default.createElement(\n                'div',\n                { className: 'float-right' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'form-group row' },\n                    _react2.default.createElement(\n                        'button',\n                        {\n                            className: 'btn btn-danger rounded-0',\n                            onClick: onCancel\n                        },\n                        _react2.default.createElement('i', { className: 'fas fa-chevron-left' }),\n                        ' Back'\n                    )\n                )\n            )\n        )\n    );\n};\n\n// THESE ARE THE REDUCERS THAT ARE SETUP IN THE 'COMBINEDREDUCERS.JS'. MAP THESE TO THE THIS.PROPS OBJECT\nvar mapStateToProps = function mapStateToProps(_ref2) {\n    var form = _ref2.form;\n\n    return {\n        formValues: form.surveyForm.values\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(SurveyFormReview);\n\n//# sourceURL=webpack:///./src/shared/components/Survey/SurveyFormReview.js?");

/***/ }),

/***/ "./src/shared/components/Survey/SurveyNew.js":
/*!***************************************************!*\
  !*** ./src/shared/components/Survey/SurveyNew.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _SurveyForm = __webpack_require__(/*! ./SurveyForm */ \"./src/shared/components/Survey/SurveyForm.js\");\n\nvar _SurveyForm2 = _interopRequireDefault(_SurveyForm);\n\nvar _SurveyFormReview = __webpack_require__(/*! ./SurveyFormReview */ \"./src/shared/components/Survey/SurveyFormReview.js\");\n\nvar _SurveyFormReview2 = _interopRequireDefault(_SurveyFormReview);\n\nvar _helmet = __webpack_require__(/*! ../../helpers/helmet */ \"./src/shared/helpers/helmet.js\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _requireAuth = __webpack_require__(/*! ../hoc/requireAuth */ \"./src/shared/components/hoc/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\n__webpack_require__(/*! ./styles.scss */ \"./src/shared/components/Survey/styles.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SurveyNew = function (_React$Component) {\n    _inherits(SurveyNew, _React$Component);\n\n    function SurveyNew() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, SurveyNew);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyNew.__proto__ || Object.getPrototypeOf(SurveyNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            showFormReview: false\n        }, _this.renderContent = function () {\n            var showFormReview = _this.state.showFormReview;\n\n\n            if (showFormReview) {\n                return _react2.default.createElement(_SurveyFormReview2.default, {\n                    onCancel: function onCancel() {\n                        return _this.setState({ showFormReview: false });\n                    }\n                });\n            }\n\n            return _react2.default.createElement(_SurveyForm2.default, {\n                onSurveySubmit: function onSurveySubmit() {\n                    return _this.setState({ showFormReview: true });\n                }\n            });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(SurveyNew, [{\n        key: 'render',\n        value: function render() {\n            var headInfo = {\n                title: 'Mi Accounting | New Survey',\n                ogTitle: 'New Survey',\n                ogURL: 'http://localhost:3000/survey/new'\n            };\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(_helmet2.default, headInfo),\n                this.renderContent()\n            );\n        }\n    }]);\n\n    return SurveyNew;\n}(_react2.default.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n    var authUser = _ref2.authUser,\n        form = _ref2.form;\n\n    return {\n        authUser: authUser,\n        form: form\n    };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps)((0, _requireAuth2.default)(SurveyNew))\n};\n\n//# sourceURL=webpack:///./src/shared/components/Survey/SurveyNew.js?");

/***/ }),

/***/ "./src/shared/components/Survey/styles.scss":
/*!**************************************************!*\
  !*** ./src/shared/components/Survey/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/components/Survey/styles.scss?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Head = function Head(_ref) {\n    var title = _ref.title,\n        ogTitle = _ref.ogTitle,\n        ogURL = _ref.ogURL;\n    return _react2.default.createElement(\n        _reactHelmet.Helmet,\n        null,\n        _react2.default.createElement(\n            'title',\n            null,\n            title\n        ),\n        _react2.default.createElement('meta', { property: 'og:title', content: ogTitle }),\n        _react2.default.createElement('meta', { property: 'og:url', content: ogURL })\n    );\n};\n\nexports.default = Head;\n\n//# sourceURL=webpack:///./src/shared/helpers/helmet.js?");

/***/ }),

/***/ "./src/shared/helpers/store.js":
/*!*************************************!*\
  !*** ./src/shared/helpers/store.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _keys = __webpack_require__(/*! ../../client/config/keys */ \"./src/client/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _combineReducers = __webpack_require__(/*! ../reducers/combineReducers */ \"./src/shared/reducers/combineReducers.js\");\n\nvar _combineReducers2 = _interopRequireDefault(_combineReducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n    var axiosInstance = _axios2.default.create({\n        baseURL: _keys2.default.baseURL,\n        headers: {\n            cookie: req.get('cookie') || ''\n        }\n    });\n\n    var store = (0, _redux.createStore)(_combineReducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\n    return store;\n};\n\n//# sourceURL=webpack:///./src/shared/helpers/store.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _admins = __webpack_require__(/*! ./admins */ \"./src/shared/reducers/admins.js\");\n\nvar _admins2 = _interopRequireDefault(_admins);\n\nvar _authUser = __webpack_require__(/*! ./authUser */ \"./src/shared/reducers/authUser.js\");\n\nvar _authUser2 = _interopRequireDefault(_authUser);\n\nvar _surveys = __webpack_require__(/*! ./surveys */ \"./src/shared/reducers/surveys.js\");\n\nvar _surveys2 = _interopRequireDefault(_surveys);\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/shared/reducers/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    users: _users2.default,\n    admins: _admins2.default,\n    surveys: _surveys2.default,\n    authUser: _authUser2.default,\n    form: _reduxForm.reducer\n});\n\n//# sourceURL=webpack:///./src/shared/reducers/combineReducers.js?");

/***/ }),

/***/ "./src/shared/reducers/surveys.js":
/*!****************************************!*\
  !*** ./src/shared/reducers/surveys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _surveys = __webpack_require__(/*! ../actions/surveys */ \"./src/shared/actions/surveys.js\");\n\nvar surveysReducer = function surveysReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _surveys.FETCH_SURVEYS:\n            return action.payload;\n        default:\n            return state;\n    }\n};\n\nexports.default = surveysReducer;\n\n//# sourceURL=webpack:///./src/shared/reducers/surveys.js?");

/***/ }),

/***/ "./src/shared/reducers/users.js":
/*!**************************************!*\
  !*** ./src/shared/reducers/users.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _users = __webpack_require__(/*! ../actions/users */ \"./src/shared/actions/users.js\");\n\nvar usersReducer = function usersReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _users.FETCH_USERS:\n            return action.payload;\n        default:\n            return state;\n    }\n};\n\nexports.default = usersReducer;\n\n//# sourceURL=webpack:///./src/shared/reducers/users.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AdminList = __webpack_require__(/*! ./components/AdminList/AdminList */ \"./src/shared/components/AdminList/AdminList.js\");\n\nvar _AdminList2 = _interopRequireDefault(_AdminList);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/shared/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Credit = __webpack_require__(/*! ./components/Credit/Credit */ \"./src/shared/components/Credit/Credit.js\");\n\nvar _Credit2 = _interopRequireDefault(_Credit);\n\nvar _Dashboard = __webpack_require__(/*! ./components/Dashboard/Dashboard */ \"./src/shared/components/Dashboard/Dashboard.js\");\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nvar _Home = __webpack_require__(/*! ./components/Home/Home */ \"./src/shared/components/Home/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./components/Login/Login */ \"./src/shared/components/Login/Login.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _NotFound = __webpack_require__(/*! ./components/NotFound/NotFound */ \"./src/shared/components/NotFound/NotFound.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _SurveyNew = __webpack_require__(/*! ./components/Survey/SurveyNew */ \"./src/shared/components/Survey/SurveyNew.js\");\n\nvar _SurveyNew2 = _interopRequireDefault(_SurveyNew);\n\nvar _UserList = __webpack_require__(/*! ./components/UserList/UserList */ \"./src/shared/components/UserList/UserList.js\");\n\nvar _UserList2 = _interopRequireDefault(_UserList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// THE SPREAD OPERATER LOADS EVERYTHING IN THE EXPORT OF THE COMPONENT\n// THE EXPORT OF THE COMONENT IS AN OBJECT, SO IT LOADS EVERYTHING IN THAT OBJECT\nvar routes = [_extends({}, _App2.default, {\n    routes: [_extends({}, _Home2.default, {\n        path: '/',\n        exact: true\n    }), _extends({}, _Login2.default, {\n        path: '/login'\n    }), _extends({}, _AdminList2.default, {\n        path: '/admins'\n    }), _extends({}, _UserList2.default, {\n        path: '/users'\n    }), _extends({}, _Credit2.default, {\n        path: '/credits'\n    }), _extends({}, _Dashboard2.default, {\n        path: '/dashboard'\n    }), _extends({}, _SurveyNew2.default, {\n        path: '/survey/new'\n    }), _extends({}, _NotFound2.default)]\n})];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

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

/***/ "react-stripe-checkout":
/*!****************************************!*\
  !*** external "react-stripe-checkout" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-stripe-checkout\");\n\n//# sourceURL=webpack:///external_%22react-stripe-checkout%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "sendgrid":
/*!***************************!*\
  !*** external "sendgrid" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sendgrid\");\n\n//# sourceURL=webpack:///external_%22sendgrid%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");\n\n//# sourceURL=webpack:///external_%22stripe%22?");

/***/ }),

/***/ "validator/lib/isEmail":
/*!****************************************!*\
  !*** external "validator/lib/isEmail" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator/lib/isEmail\");\n\n//# sourceURL=webpack:///external_%22validator/lib/isEmail%22?");

/***/ }),

/***/ "validator/lib/isLength":
/*!*****************************************!*\
  !*** external "validator/lib/isLength" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator/lib/isLength\");\n\n//# sourceURL=webpack:///external_%22validator/lib/isLength%22?");

/***/ })

/******/ });