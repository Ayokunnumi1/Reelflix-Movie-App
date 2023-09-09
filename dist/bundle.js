/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchShows.js */ "./src/modules/fetchShows.js");
/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLikes.js */ "./src/modules/fetchLikes.js");
/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp.js */ "./src/modules/popUp.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var url = 'https://api.tvmaze.com/shows';
var likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TmorUv6CAxzfjMnV7ubN/likes';

// Function to process show data by merging it with likes
var processShowData = function processShowData(movies, likes) {
  return movies.map(function (show) {
    var itemlike = likes.find(function (like) {
      return like.item_id === show.id;
    });
    var likesCount = (itemlike === null || itemlike === void 0 ? void 0 : itemlike.likes) || 0;
    return {
      id: show.id,
      image: show.image.medium,
      title: show.name,
      likes: likesCount
    };
  });
};

// Function to generate HTML elements for shows
var movieElements = function movieElements(show) {
  var movieContentContainer = document.createElement('div');
  movieContentContainer.classList.add('movie-content-container');
  movieContentContainer.innerHTML = "      \n        <div class=\"movie-thumbnail\">\n          <img src=\"".concat(show.image, "\" alt=\"\" class=\"movie-shows\" id=\"").concat(show.id, "\">\n          <div class=\"overlay\"> <i class=\"fa fa-play\"></i></div>\n        </div>\n        <div class=\"movie-content\">\n          <h3 class=\"movie-title\">").concat(show.title, " </h3>\n          <div class=\"movie-comment\">\n            <div class=\"show-likes\">\n              <i class=\"fa fa-heart\" data-id=\"").concat(show.id, "\"></i>\n              <p class=\"show-likes-count\">\n                <span class=\"likes-count liked\" id=\"").concat(show.id, "\"><span>").concat(show.likes, "</span> like </span>\n              </p>\n            </div>\n            <button class=\"comment-button\" data-index=\"").concat(show.id, "\">Comment</button>\n            <button class=\"comment-button1\">  <i class=\"fa fa-comment\" data-index1=\"").concat(show.id, "\"></i></button>\n          </div>\n        </div>\n    ");
  return movieContentContainer;
};
var renderMovies = function renderMovies(movies) {
  var movieContainer = document.querySelector('.container-cards');
  movieContainer.innerHTML = '';
  movies.forEach(function (movie) {
    var movieElement = movieElements(movie);
    movieContainer.appendChild(movieElement);
  });
};

// Function to update likes
var updateLikesCount = function updateLikesCount(id) {
  var likesCount = document.querySelector(".likes-count[id=\"".concat(id, "\"] > span"));
  var likesCountValue = parseInt(likesCount.textContent, 10);
  likesCount.textContent = "".concat(likesCountValue + 1);
};

// Function to handle like button click
var handleLikeButtonClick = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(heartbutton) {
    var heartbuttonId, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          heartbuttonId = parseInt(heartbutton.dataset.id, 10);
          _context.next = 3;
          return (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__.addLikes)(likesUrl, heartbuttonId);
        case 3:
          response = _context.sent;
          if (response.status === 201) {
            updateLikesCount(heartbuttonId);
          }
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleLikeButtonClick(_x) {
    return _ref.apply(this, arguments);
  };
}();
var addEventToLikeButtons = function addEventToLikeButtons() {
  var likeButtons = document.querySelectorAll('.fa-heart');
  likeButtons.forEach(function (heartbutton) {
    heartbutton.addEventListener('click', function (e) {
      handleLikeButtonClick(e.currentTarget);
    });
  });
};

// Initialize the application
var initializeApp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var movies, likes, filteredShowObject, totalMovies;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,_fetchShows_js__WEBPACK_IMPORTED_MODULE_0__.fetchShows)(url);
        case 2:
          movies = _context2.sent;
          _context2.next = 5;
          return (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)(likesUrl);
        case 5:
          likes = _context2.sent;
          filteredShowObject = processShowData(movies, likes);
          totalMovies = document.querySelector('.total-movies');
          totalMovies.textContent = " All movies (".concat(filteredShowObject.length, ")");
          renderMovies(filteredShowObject);
          addEventToLikeButtons();
          (0,_popUp_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function initializeApp() {
    return _ref2.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeApp);

/***/ }),

/***/ "./src/modules/fetchComment.js":
/*!*************************************!*\
  !*** ./src/modules/fetchComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchComment: () => (/* binding */ fetchComment),
/* harmony export */   postComment: () => (/* binding */ postComment)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var fetchComment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(commentUrl, id) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("".concat(commentUrl, "/comments?item_id=").concat(id));
        case 3:
          response = _context.sent;
          if (!(response.status === 400)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", []);
        case 6:
          _context.next = 8;
          return response.json();
        case 8:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function fetchComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var postComment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(commentUrl, obj) {
    var postRequestConfig, response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          postRequestConfig = {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
              'content-type': 'application/json'
            }
          };
          _context2.next = 4;
          return fetch("".concat(commentUrl, "/comments"), postRequestConfig);
        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return response.text();
        case 7:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function postComment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/modules/fetchLikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLikes: () => (/* binding */ addLikes),
/* harmony export */   getLikes: () => (/* binding */ getLikes)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var addLikes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(likesUrl, id) {
    var postRequestConfig, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          postRequestConfig = {
            method: 'POST',
            headers: {
              'content-Type': 'application/json'
            },
            body: JSON.stringify({
              item_id: id
            })
          };
          _context.next = 4;
          return fetch(likesUrl, postRequestConfig);
        case 4:
          response = _context.sent;
          return _context.abrupt("return", response);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function addLikes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getLikes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(likesUrl) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch(likesUrl);
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getLikes(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/modules/fetchShows.js":
/*!***********************************!*\
  !*** ./src/modules/fetchShows.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchShows: () => (/* binding */ fetchShows),
/* harmony export */   fetchShowsDetails: () => (/* binding */ fetchShowsDetails)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var fetchShows = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(url);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function fetchShows(_x) {
    return _ref.apply(this, arguments);
  };
}();
var fetchShowsDetails = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, id) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("".concat(url, "/").concat(id));
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function fetchShowsDetails(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchShows.js */ "./src/modules/fetchShows.js");
/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComment.js */ "./src/modules/fetchComment.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var popUpModal = document.querySelector('.popUp-modal');
var url = 'https://api.tvmaze.com/shows';
var commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TmorUv6CAxzfjMnV7ubN';

// Function to create a comment list HTML from an array of comments
var createCommentList = function createCommentList(comments) {
  return comments.map(function (comment) {
    return "\n      <li class=\"p-class\">\n        <span>".concat(comment.creation_date, "</span>\n        <span>").concat(comment.username, "</span>\n        <span>").concat(comment.comment, "</span>\n      </li>\n    ");
  }).join('');
};

// Function to create the pop-up modal HTML
var createPopUpModal = function createPopUpModal(showDetails, comments) {
  var commentLength = comments.length;
  var commentList = createCommentList(comments);
  return "\n    <button class=\"close-button\"><i class=\"fa fa-close\"></i></button>\n    <h3 class=\"m-title\">".concat(showDetails.title, "</h3>\n    <div class=\"imgdes\">\n      <img src=\"").concat(showDetails.image, "\" alt=\"\" class=\"popUp-img\">\n      <p class=\"para\">").concat(showDetails.description, "</p>\n    </div>\n    <div class=\"modal-content\">\n      <div class=\"descriptions\">\n        <p>").concat(showDetails.genres, "</p>\n        <p>").concat(showDetails.language, "</p>\n        <p>").concat(showDetails.rating, "</p>\n      </div>\n    </div>\n    <div class=\"commentcontainer\">\n      <h2 class=\"popUp-h2-comment-title\">Comments(").concat(commentLength, ")</h2>\n      <div class=\"comment-container\">\n        <ul class=\"popUP-comment-content\">\n          ").concat(commentList, "\n        </ul>\n      </div>\n    </div>\n    <form action=\"\" class=\"comment-form\">\n      <input type=\"text\" name=\"text\" id=\"input-name\" required placeholder=\"Your name\">\n      <textarea name=\"text\" id=\"comment-text\" cols=\"30\" rows=\"10\" required placeholder=\"Add a comment\"></textarea>\n      <button type=\"submit\" id=\"").concat(showDetails.id, "\" class=\"submit-button\">Submit</button>\n    </form>\n  ");
};

// Function to handle the pop-up display
var displayPopUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(buttonId) {
    var showsPopDetails, comments, showPopObject, popUpElement, closeButton, submitButton, commentForm;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0,_fetchShows_js__WEBPACK_IMPORTED_MODULE_0__.fetchShowsDetails)(url, buttonId);
        case 3:
          showsPopDetails = _context2.sent;
          _context2.next = 6;
          return (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_1__.fetchComment)(commentUrl, buttonId);
        case 6:
          comments = _context2.sent;
          showPopObject = {
            id: showsPopDetails.id,
            title: showsPopDetails.name,
            image: showsPopDetails.image.medium,
            description: showsPopDetails.summary,
            genres: showsPopDetails.genres,
            language: showsPopDetails.language,
            rating: showsPopDetails.rating.average
          };
          popUpElement = createPopUpModal(showPopObject, comments);
          popUpModal.innerHTML = popUpElement;

          // Event listener for the close button
          closeButton = document.querySelector('.close-button');
          closeButton.addEventListener('click', function () {
            popUpModal.style.display = 'none';
          });

          // Event listener for comment submission
          submitButton = document.querySelector('.submit-button');
          commentForm = document.querySelector('.comment-form');
          submitButton.addEventListener('click', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
              var submitButtonId, inputName, commentText, item_id, username, comment, userInfo, response;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    e.preventDefault();
                    submitButtonId = e.target.id;
                    inputName = commentForm.querySelector('#input-name');
                    commentText = commentForm.querySelector('#comment-text'); //  eslint-disable-next-line camelcase
                    item_id = submitButtonId;
                    username = inputName.value;
                    comment = commentText.value;
                    userInfo = {
                      item_id: item_id,
                      username: username,
                      comment: comment
                    };
                    _context.prev = 8;
                    _context.next = 11;
                    return (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_1__.postComment)(commentUrl, userInfo);
                  case 11:
                    response = _context.sent;
                    if (response === 'Created') {
                      displayPopUp(submitButtonId);
                      inputName.value = '';
                      commentText.value = '';
                    }
                    return _context.abrupt("return", response);
                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context["catch"](8);
                    return _context.abrupt("return", _context.t0);
                  case 19:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[8, 16]]);
            }));
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          return _context2.abrupt("return", showPopObject);
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function displayPopUp(_x) {
    return _ref.apply(this, arguments);
  };
}();
var popupPosition = function popupPosition(button, popUpModal, e) {
  var commentClick = button.getBoundingClientRect();
  var left = e.clientX - commentClick.left;
  var top = e.clientY - commentClick.top;
  popUpModal.style.left = "".concat(left, "px");
  popUpModal.style.top = "".concat(top, "px");
};
var addEventToCommentButton = function addEventToCommentButton() {
  var commentButton = document.querySelectorAll('.comment-button');
  commentButton.forEach(function (button) {
    button.addEventListener('click', function (e) {
      var buttonId = parseInt(e.target.dataset.index, 10);
      displayPopUp(buttonId);
      popupPosition(button, popUpModal, e);
      popUpModal.style.display = 'flex';
    });
  });
  var commentButton1 = document.querySelectorAll('.comment-button1');
  commentButton1.forEach(function (button) {
    button.addEventListener('click', function (e) {
      var buttonId = parseInt(e.target.dataset.index1, 10);
      displayPopUp(buttonId);
      popupPosition(button, popUpModal, e);
      popUpModal.style.display = 'flex';
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventToCommentButton);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/font-awesome/css/font-awesome.min.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/font-awesome/css/font-awesome.min.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-webfont.eot?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-webfont.eot */ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-webfont.woff2?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-webfont.woff?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-webfont.ttf?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-webfont.svg?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___, { hash: "?#iefix&v=4.7.0" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___, { hash: "#fontawesomeregular" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */@font-face{font-family:'FontAwesome';src:url(${___CSS_LOADER_URL_REPLACEMENT_0___});src:url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('embedded-opentype'),url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff'),url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype'),url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}
`, "",{"version":3,"sources":["webpack://./node_modules/font-awesome/css/font-awesome.min.css"],"names":[],"mappings":"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","sourcesContent":["/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url('../fonts/fontawesome-webfont.eot?v=4.7.0');src:url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-hotel:before,.fa-bed:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-tv:before,.fa-television:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-vcard:before,.fa-address-card:before{content:\"\\f2bb\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/img/home__bg.jpg */ "./src/asset/img/home__bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/img/logo.jpg */ "./src/asset/img/logo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --bs-red: #dc3545;
  --bs-cyan: #0dcaf0;
  --bs-black: #000000d7;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #155f3ce7;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-secondary-text: #6c757d;
  --bs-success-text: #146c43;
}

body {
  margin: auto 0;
  overflow-x: hidden;
  position: relative;

  /* background-color: var(--bs-gray-700); */
  font-family: 'Montserrat', sans-serif;
}

main {
  border-bottom: 2px solid var(--bs-cyan);
  margin-top: 7rem;
}

main::before {
  content: '';
  position: absolute;
  z-index: 0;
  pointer-events: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  opacity: 0.2;
}

header {
  display: flex;
  justify-content: space-between;
  background: var(--bs-cyan);
  border-bottom: 2px solid var(--bs-cyan);
  color: var(--bs-light);
  padding: 0.5rem;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
}

.header-content-logo {
  display: flex;
}

.logo {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.nav-content {
  display: flex;
  list-style: none;
  margin-right: 8rem;
}

.header-content-nav {
  display: flex;
  justify-content: space-around;
  align-self: center;
  margin-right: 3rem;
}

.nav-content li {
  margin-left: 3rem;
  font-size: 20px;
}

.nav-content li a {
  text-decoration: none;
  color: var(--bs-light);
}

li a:hover {
  text-decoration: underline;
  color: var(--bs-warning);
}

button {
  margin-left: 1rem;
  width: 6vw;
  height: 2vw;
}

.home-title {
  color: var(--bs-light);
  text-align: left;
  margin-left: 1rem;
}

.home-container {
  margin-top: 3rem;
  overflow-x: hidden;
  margin-right: 0.5rem;
  position: relative;
}

.home-container h2 {
  text-align: center;
  margin-top: 2.5rem;
  background: linear-gradient(45deg, #66fc3d, #46c4d2, #21a7e0ee);
  -webkit-background-clip: text;
  color: transparent;
  /* stylelint-disable-next-line csstree/validator */
  background-clip: text;
  font-size: 27px;
}

.sign-in {
  margin-right: 1rem;
  background: none;
  border: none;
}

.sign-in i {
  font-size: 50px;
  color: var(--bs-light);
}

.overlay i {
  position: absolute;
  bottom: 45%;
  font-size: 50px;
  color: var(--bs-light);
}

.movie-content i {
  color: var(--bs-black);
  font-size: 25px;
}

.sign-in i:hover {
  font-size: 50px;
  color: var(--bs-warning);
}

.container-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 10px;
  margin-top: 4rem;
  position: relative;
}

form {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 5px;
  right: 0;
  margin: 2rem;
  font-family: 'Montserrat', sans-serif;
}

.search-button {
  width: 8vw;
  height: 2.5vw;
}

.search-input-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.comment-button {
  width: 11vw;
  height: 3vw;
  align-self: flex-end;
}

.search-button,
.comment-button {
  background-color: var(--bs-primary);
  color: var(--bs-light);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
}

.comment-button,
.search-button:hover {
  background-color: var(--bs-cyan);
}

.movie-content-container {
  margin: 0.5rem;
  border-radius: 11px;
  box-shadow: 0 4px 8px rgba(50, 108, 184, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
}

.movie-thumbnail {
  background-size: contain;
  z-index: 5;
  border-radius: 10px;
  text-align: center;
  position: relative;
}

.movie-content {
  padding: 3rem;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(62, 195, 243, 0.45);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.overlay i:hover {
  color: var(--bs-warning);
}

.overlay:hover {
  opacity: 1;
}

.movie-content i:hover {
  color: var(--bs-danger);
}

.movie-content h3 {
  padding-bottom: 1rem;
  position: absolute;
  top: 0;
  text-align: center;
  color: var(--bs-red);
}

.movie-thumbnail:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(53, 139, 210, 0.4);
}

.movie-comment {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 1.5rem;
}

.comment-button:hover {
  background: var(--bs-secondary);
}

.footer-copyright {
  font-family: 'Montserrat', sans-serif;
  background:
    linear-gradient(
      to right,
      var(--bs-white),
      var(--bs-warning),
      var(--bs-cyan)
    );
  /* stylelint-disable-next-line csstree/validator */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 20px;
  text-align: center;
  font-weight: 700;
}

.popUp-modal {
  display: none;
  border: 3px solid red;
  flex-direction: column;
}

.comment-form {
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  width: 150px;
  position: relative;
}

.comment-container {
  border: 3px solid brown;
  width: 250px;
  overflow-y: scroll;
}

@media (min-width: 375px) and (max-width: 667px) {
  .logo {
    width: 60px;
    height: 60px;
  }

  .header-content-nav {
    display: none;
  }

  .mobile-menu {
    margin: 1rem 3rem 0 3rem;
    font-size: 28px;
  }

  .container-cards {
    display: flex;
    flex-direction: column;
  }

  form {
    margin: calc(7rem - 1.5rem) calc(5rem - 1.5rem) 0 0;
    bottom: 0;
    justify-content: center;
  }

  .search-button {
    width: 18vw;
    height: calc(6vw + 6px);
  }

  .home-container {
    margin-top: 0;
  }

  .home-container h2 {
    margin-bottom: 1rem;
    font-size: 24px;
  }

  .comment-button {
    display: none;
  }

  .comment-button1 {
    background: none;
    border: none;
    align-self: flex-end;
    margin-bottom: 2.3rem;
  }

  .comment-button1 i {
    color: var(--bs-gray);
  }

  .comment-button1 i:hover {
    color: var(--bs-cyan);
    font-size: 28px;
  }

  .movie-content-container {
    position: relative;
  }

  .popUp-modal {
    border: 1px solid #ccc;
    position: fixed;
    background: linear-gradient(to bottom, #cfe7f8, #4096b0);
    z-index: 11;
    top: 80%;
    width: 90%;

    /* height: calc(205vw * (375 / 660)); */
    height: calc(100vw * 0.8);
    overflow-y: scroll;
    overflow-x: hidden;
    margin-top: 4.5rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(152, 220, 222, 0.5);
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  .popUp-modal::-webkit-scrollbar {
    width: 0.5rem;
    height: 15px;
  }

  .popUp-modal::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #cfe7f8, #4096b0);
    border-radius: 20px;
  }

  .popUp-modal::-webkit-scrollbar-thumb:hover {
    opacity: 1;
  }

  .popUp-modal .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    color: #7cacac;
    background: none;
    border: none;
  }

  .popUp-h2-text {
    margin: 0;
  }

  .popUp-h2-comment-title {
    position: relative;
    top: -50%;
    left: 5%;
    margin: 0;
    border: none;
    color: var(--bs-success-text);
    font-family: 'Montserrat', sans-serif;
  }

  .m-title {
    text-align: center;
    font-size: 25px;
    color: var(--bs-warning);
  }

  .close-button :hover {
    color: var(--bs-warning);
  }

  .imgdes {
    display: flex;
    margin: 1rem;
    flex-direction: column;
  }

  .imgdes img {
    width: 250px;
    height: 300px;
    align-self: center;
  }

  .imgdes .para {
    text-align: justify;
    margin: 1rem 0 0 -3rem;
    font-family: 'Montserrat', sans-serif;
    width: 90%;
    font-size: 10px;
  }

  .modal-content {
    display: flex;
  }

  .descriptions {
    display: flex;
    position: relative;
    bottom: 50%;
    align-items: center;
  }

  .descriptions p {
    font-family: 'Montserrat', sans-serif;
    padding-left: 0.7rem;
    text-decoration: underline;
    font-size: 13px;
    font-style: italic;
    color: var(--bs-success-text);
  }

  .commentcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
    border: none;
  }

  .commentcontainer h5 {
    font-size: 13px;
    margin-right: 2rem;
  }

  .comment-form {
    text-align: center;
    position: relative;
    left: 23%;
    top: -10%;
    background-color: #a6caf0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
  }

  .comment-form input[type="text"],
  .comment-form textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  .comment-form textarea {
    height: 10vw;
  }

  .submit-button {
    background-color: var(--bs-info);
    color: var(--bs-dark);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    width: 19vw;
    height: 7vw;
    font-family: 'Montserrat', sans-serif;
  }
}

@media (min-width: 668px) and (max-width: 1020px) {
  .container-cards {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .logo {
    width: 80px;
    height: 80px;
  }

  .nav-content {
    margin-right: 4rem;
  }

  .nav-content li {
    font-size: 17px;
  }

  button {
    width: 9vw;
    height: 4.5vw;
  }

  form {
    margin: calc(3rem - 1.5rem) calc(5rem - 1.5rem) 0 0;
    margin-top: 4rem;
  }

  .home-container h2 {
    margin-bottom: 1rem;
    font-size: 24px;
    text-align: center;
  }

  .comment-button {
    width: 10vw;
    height: 3.5vw;
  }

  .comment-button1 {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  .search-button {
    width: 9vw;
    height: 4.5vw;
  }

  .popUp-modal {
    border: 1px solid #ccc;
    position: fixed;
    background: linear-gradient(to bottom, #cfe7f8, #4096b0);
    z-index: 10;
    top: 50%;
    left: 50%;
    width: 90vw;
    height: 70vw;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-top: 5.5rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(152, 220, 222, 0.5);
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  .popUp-modal::-webkit-scrollbar {
    width: 0.5rem;
    height: 15px;
  }

  .popUp-modal::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #cfe7f8, #4096b0);
    border-radius: 20px;
  }

  .popUp-modal::-webkit-scrollbar-thumb:hover {
    opacity: 1;
  }

  .popUp-modal .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    color: #7cacac;
    background: none;
    border: none;
  }

  .m-title {
    text-align: center;
    font-size: 25px;
    color: var(--bs-warning);
  }

  .close-button :hover {
    color: var(--bs-warning);
  }

  .imgdes {
    display: flex;
    margin: 1rem;
    flex-direction: column;
  }

  .imgdes img {
    width: 250px;
    height: 300px;
    align-self: center;
  }

  .imgdes .para {
    text-align: justify;
    margin: 1rem 0 0 -3rem;
    font-family: 'Montserrat', sans-serif;
    width: 90%;
    font-size: 10px;
  }

  .modal-content {
    display: flex;
  }

  .popUp-h2-text {
    margin: 0;
  }

  .popUp-h2-comment-title {
    position: relative;
    top: -30%;
    left: 24%;
    margin: 0;
    border: none;
    color: var(--bs-success-text);
    font-family: 'Montserrat', sans-serif;
  }

  .descriptions {
    display: flex;
    position: relative;
    bottom: 50%;
    align-items: center;
  }

  .descriptions p {
    font-family: 'Montserrat', sans-serif;
    padding-left: 0.7rem;
    text-decoration: underline;
    font-size: 13px;
    font-style: italic;
    color: var(--bs-success-text);
  }

  .commentcontainer {
    display: flex;
    margin-left: 1rem;
    justify-content: center;
    border: none;
  }

  .commentcontainer h5 {
    font-size: 13px;
    margin-right: 2rem;
  }

  .comment-form {
    text-align: center;
    position: relative;
    left: 25%;
    top: -5%;
    background-color: #a6caf0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    width: 40vw;
  }

  .comment-form input[type="text"],
  .comment-form textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  .comment-form textarea {
    height: 10vw;
  }

  .submit-button {
    background-color: var(--bs-info);
    color: var(--bs-dark);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    width: 19vw;
    height: 7vw;
    font-family: 'Montserrat', sans-serif;
  }
}

@media (min-width: 1021px) {
  .comment-button1 {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  .home-container h2 {
    margin-right: 3rem;
  }

  .search-button {
    position: relative;
    top: 3px;
  }

  .movie-content-container {
    position: relative;
  }

  .popUp-modal {
    border: 1px solid #ccc;
    position: fixed;
    background: linear-gradient(to bottom, #cfe7f8, #4096b0);
    z-index: 11;
    top: 80%;
    left: 50%;
    width: 70vw;
    height: 40vw;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-left: 7rem;
    margin-top: 6.2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(152, 220, 222, 0.5);
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  .popUp-modal::-webkit-scrollbar {
    width: 0.5rem;
    height: 15px;
  }

  .popUp-modal::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #cfe7f8, #4096b0);
    border-radius: 20px;
  }

  .popUp-modal::-webkit-scrollbar-thumb:hover {
    opacity: 1;
  }

  .popUp-modal .close-button {
    position: absolute;
    top: 1rem;
    right: -1rem;
    font-size: 1.5rem;
    color: #7cacac;
    background: none;
    border: none;
  }

  .m-title {
    text-align: center;
    font-size: 27px;
    color: var(--bs-warning);
  }

  .close-button :hover {
    color: var(--bs-warning);
  }

  .imgdes {
    display: flex;
    margin: 2rem;
  }

  .para {
    text-align: justify;
    margin: 2rem 0 0 -3rem;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }

  .modal-content {
    display: flex;
  }

  .popUp-h2-text {
    margin: 0;
  }

  .popUp-h2-comment-title {
    position: relative;
    top: -50%;
    left: 23%;
    margin: 0;
    border: none;
    color: var(--bs-success-text);
    font-family: 'Montserrat', sans-serif;
  }

  .p-class {
    margin: 5px;
  }

  .descriptions {
    display: flex;
    justify-content: space-evenly;
    left: 2rem;
    position: relative;
    bottom: 40%;
    align-items: flex-end;
  }

  .descriptions p {
    font-family: 'Montserrat', sans-serif;
    padding-left: 0.5rem;
    text-decoration: underline;
    font-size: 22px;
    font-style: italic;
    color: var(--bs-warning);
  }

  .commentcontainer {
    display: flex;
    justify-content: center;
    margin-right: 3rem;
    border: none;
  }

  .commentcontainer h5 {
    font-size: 16px;
    margin-right: 2rem;
  }

  .comment-form {
    text-align: center;
    position: relative;
    left: 25%;
    background-color: #a6caf0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    width: 30vw;
  }

  .comment-form input[type="text"],
  .comment-form textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  .comment-form textarea {
    height: 3.5vw;
  }

  .submit-button {
    background-color: var(--bs-info);
    color: var(--bs-dark);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\r\n\r\n:root {\r\n  --bs-red: #dc3545;\r\n  --bs-cyan: #0dcaf0;\r\n  --bs-black: #000000d7;\r\n  --bs-white: #fff;\r\n  --bs-gray: #6c757d;\r\n  --bs-gray-700: #495057;\r\n  --bs-gray-800: #343a40;\r\n  --bs-gray-900: #212529;\r\n  --bs-primary: #0d6efd;\r\n  --bs-secondary: #6c757d;\r\n  --bs-success: #155f3ce7;\r\n  --bs-info: #0dcaf0;\r\n  --bs-warning: #ffc107;\r\n  --bs-danger: #dc3545;\r\n  --bs-light: #f8f9fa;\r\n  --bs-dark: #212529;\r\n  --bs-secondary-text: #6c757d;\r\n  --bs-success-text: #146c43;\r\n}\r\n\r\nbody {\r\n  margin: auto 0;\r\n  overflow-x: hidden;\r\n  position: relative;\r\n\r\n  /* background-color: var(--bs-gray-700); */\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nmain {\r\n  border-bottom: 2px solid var(--bs-cyan);\r\n  margin-top: 7rem;\r\n}\r\n\r\nmain::before {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: 0;\r\n  pointer-events: none;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: url(./asset/img/home__bg.jpg);\r\n  opacity: 0.2;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background: var(--bs-cyan);\r\n  border-bottom: 2px solid var(--bs-cyan);\r\n  color: var(--bs-light);\r\n  padding: 0.5rem;\r\n  position: fixed;\r\n  z-index: 10;\r\n  width: 100%;\r\n  top: 0;\r\n}\r\n\r\n.header-content-logo {\r\n  display: flex;\r\n}\r\n\r\n.logo {\r\n  background: url('./asset/img/logo.jpg') no-repeat;\r\n  background-size: cover;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.nav-content {\r\n  display: flex;\r\n  list-style: none;\r\n  margin-right: 8rem;\r\n}\r\n\r\n.header-content-nav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-self: center;\r\n  margin-right: 3rem;\r\n}\r\n\r\n.nav-content li {\r\n  margin-left: 3rem;\r\n  font-size: 20px;\r\n}\r\n\r\n.nav-content li a {\r\n  text-decoration: none;\r\n  color: var(--bs-light);\r\n}\r\n\r\nli a:hover {\r\n  text-decoration: underline;\r\n  color: var(--bs-warning);\r\n}\r\n\r\nbutton {\r\n  margin-left: 1rem;\r\n  width: 6vw;\r\n  height: 2vw;\r\n}\r\n\r\n.home-title {\r\n  color: var(--bs-light);\r\n  text-align: left;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.home-container {\r\n  margin-top: 3rem;\r\n  overflow-x: hidden;\r\n  margin-right: 0.5rem;\r\n  position: relative;\r\n}\r\n\r\n.home-container h2 {\r\n  text-align: center;\r\n  margin-top: 2.5rem;\r\n  background: linear-gradient(45deg, #66fc3d, #46c4d2, #21a7e0ee);\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  background-clip: text;\r\n  font-size: 27px;\r\n}\r\n\r\n.sign-in {\r\n  margin-right: 1rem;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.sign-in i {\r\n  font-size: 50px;\r\n  color: var(--bs-light);\r\n}\r\n\r\n.overlay i {\r\n  position: absolute;\r\n  bottom: 45%;\r\n  font-size: 50px;\r\n  color: var(--bs-light);\r\n}\r\n\r\n.movie-content i {\r\n  color: var(--bs-black);\r\n  font-size: 25px;\r\n}\r\n\r\n.sign-in i:hover {\r\n  font-size: 50px;\r\n  color: var(--bs-warning);\r\n}\r\n\r\n.container-cards {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  row-gap: 10px;\r\n  margin-top: 4rem;\r\n  position: relative;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 0;\r\n  margin: 2rem;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.search-button {\r\n  width: 8vw;\r\n  height: 2.5vw;\r\n}\r\n\r\n.search-input-container {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-around;\r\n}\r\n\r\n.search-input {\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.comment-button {\r\n  width: 11vw;\r\n  height: 3vw;\r\n  align-self: flex-end;\r\n}\r\n\r\n.search-button,\r\n.comment-button {\r\n  background-color: var(--bs-primary);\r\n  color: var(--bs-light);\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  font-size: 12px;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.comment-button,\r\n.search-button:hover {\r\n  background-color: var(--bs-cyan);\r\n}\r\n\r\n.movie-content-container {\r\n  margin: 0.5rem;\r\n  border-radius: 11px;\r\n  box-shadow: 0 4px 8px rgba(50, 108, 184, 0.5);\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  cursor: pointer;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.movie-thumbnail {\r\n  background-size: contain;\r\n  z-index: 5;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.movie-content {\r\n  padding: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(62, 195, 243, 0.45);\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\r\n  border-radius: 12px;\r\n}\r\n\r\n.overlay i:hover {\r\n  color: var(--bs-warning);\r\n}\r\n\r\n.overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.movie-content i:hover {\r\n  color: var(--bs-danger);\r\n}\r\n\r\n.movie-content h3 {\r\n  padding-bottom: 1rem;\r\n  position: absolute;\r\n  top: 0;\r\n  text-align: center;\r\n  color: var(--bs-red);\r\n}\r\n\r\n.movie-thumbnail:hover {\r\n  transform: scale(1.05);\r\n  box-shadow: 0 8px 16px rgba(53, 139, 210, 0.4);\r\n}\r\n\r\n.movie-comment {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: relative;\r\n  top: 1.5rem;\r\n}\r\n\r\n.comment-button:hover {\r\n  background: var(--bs-secondary);\r\n}\r\n\r\n.footer-copyright {\r\n  font-family: 'Montserrat', sans-serif;\r\n  background:\r\n    linear-gradient(\r\n      to right,\r\n      var(--bs-white),\r\n      var(--bs-warning),\r\n      var(--bs-cyan)\r\n    );\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-weight: 700;\r\n}\r\n\r\n.popUp-modal {\r\n  display: none;\r\n  border: 3px solid red;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-form {\r\n  border: 3px solid green;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 150px;\r\n  position: relative;\r\n}\r\n\r\n.comment-container {\r\n  border: 3px solid brown;\r\n  width: 250px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n@media (min-width: 375px) and (max-width: 667px) {\r\n  .logo {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n\r\n  .header-content-nav {\r\n    display: none;\r\n  }\r\n\r\n  .mobile-menu {\r\n    margin: 1rem 3rem 0 3rem;\r\n    font-size: 28px;\r\n  }\r\n\r\n  .container-cards {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  form {\r\n    margin: calc(7rem - 1.5rem) calc(5rem - 1.5rem) 0 0;\r\n    bottom: 0;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-button {\r\n    width: 18vw;\r\n    height: calc(6vw + 6px);\r\n  }\r\n\r\n  .home-container {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .home-container h2 {\r\n    margin-bottom: 1rem;\r\n    font-size: 24px;\r\n  }\r\n\r\n  .comment-button {\r\n    display: none;\r\n  }\r\n\r\n  .comment-button1 {\r\n    background: none;\r\n    border: none;\r\n    align-self: flex-end;\r\n    margin-bottom: 2.3rem;\r\n  }\r\n\r\n  .comment-button1 i {\r\n    color: var(--bs-gray);\r\n  }\r\n\r\n  .comment-button1 i:hover {\r\n    color: var(--bs-cyan);\r\n    font-size: 28px;\r\n  }\r\n\r\n  .movie-content-container {\r\n    position: relative;\r\n  }\r\n\r\n  .popUp-modal {\r\n    border: 1px solid #ccc;\r\n    position: fixed;\r\n    background: linear-gradient(to bottom, #cfe7f8, #4096b0);\r\n    z-index: 11;\r\n    top: 80%;\r\n    width: 90%;\r\n\r\n    /* height: calc(205vw * (375 / 660)); */\r\n    height: calc(100vw * 0.8);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    margin-top: 4.5rem;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(152, 220, 222, 0.5);\r\n    cursor: pointer;\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n    height: 15px;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar-thumb {\r\n    background: linear-gradient(to bottom, #cfe7f8, #4096b0);\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar-thumb:hover {\r\n    opacity: 1;\r\n  }\r\n\r\n  .popUp-modal .close-button {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 1rem;\r\n    font-size: 1.2rem;\r\n    color: #7cacac;\r\n    background: none;\r\n    border: none;\r\n  }\r\n\r\n  .popUp-h2-text {\r\n    margin: 0;\r\n  }\r\n\r\n  .popUp-h2-comment-title {\r\n    position: relative;\r\n    top: -50%;\r\n    left: 5%;\r\n    margin: 0;\r\n    border: none;\r\n    color: var(--bs-success-text);\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n\r\n  .m-title {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    color: var(--bs-warning);\r\n  }\r\n\r\n  .close-button :hover {\r\n    color: var(--bs-warning);\r\n  }\r\n\r\n  .imgdes {\r\n    display: flex;\r\n    margin: 1rem;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .imgdes img {\r\n    width: 250px;\r\n    height: 300px;\r\n    align-self: center;\r\n  }\r\n\r\n  .imgdes .para {\r\n    text-align: justify;\r\n    margin: 1rem 0 0 -3rem;\r\n    font-family: 'Montserrat', sans-serif;\r\n    width: 90%;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .modal-content {\r\n    display: flex;\r\n  }\r\n\r\n  .descriptions {\r\n    display: flex;\r\n    position: relative;\r\n    bottom: 50%;\r\n    align-items: center;\r\n  }\r\n\r\n  .descriptions p {\r\n    font-family: 'Montserrat', sans-serif;\r\n    padding-left: 0.7rem;\r\n    text-decoration: underline;\r\n    font-size: 13px;\r\n    font-style: italic;\r\n    color: var(--bs-success-text);\r\n  }\r\n\r\n  .commentcontainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n    border: none;\r\n  }\r\n\r\n  .commentcontainer h5 {\r\n    font-size: 13px;\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  .comment-form {\r\n    text-align: center;\r\n    position: relative;\r\n    left: 23%;\r\n    top: -10%;\r\n    background-color: #a6caf0;\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .comment-form input[type=\"text\"],\r\n  .comment-form textarea {\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .comment-form textarea {\r\n    height: 10vw;\r\n  }\r\n\r\n  .submit-button {\r\n    background-color: var(--bs-info);\r\n    color: var(--bs-dark);\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    width: 19vw;\r\n    height: 7vw;\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n}\r\n\r\n@media (min-width: 668px) and (max-width: 1020px) {\r\n  .container-cards {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n  }\r\n\r\n  .logo {\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n\r\n  .nav-content {\r\n    margin-right: 4rem;\r\n  }\r\n\r\n  .nav-content li {\r\n    font-size: 17px;\r\n  }\r\n\r\n  button {\r\n    width: 9vw;\r\n    height: 4.5vw;\r\n  }\r\n\r\n  form {\r\n    margin: calc(3rem - 1.5rem) calc(5rem - 1.5rem) 0 0;\r\n    margin-top: 4rem;\r\n  }\r\n\r\n  .home-container h2 {\r\n    margin-bottom: 1rem;\r\n    font-size: 24px;\r\n    text-align: center;\r\n  }\r\n\r\n  .comment-button {\r\n    width: 10vw;\r\n    height: 3.5vw;\r\n  }\r\n\r\n  .comment-button1 {\r\n    display: none;\r\n  }\r\n\r\n  .mobile-menu {\r\n    display: none;\r\n  }\r\n\r\n  .search-button {\r\n    width: 9vw;\r\n    height: 4.5vw;\r\n  }\r\n\r\n  .popUp-modal {\r\n    border: 1px solid #ccc;\r\n    position: fixed;\r\n    background: linear-gradient(to bottom, #cfe7f8, #4096b0);\r\n    z-index: 10;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 90vw;\r\n    height: 70vw;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    margin-top: 5.5rem;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(152, 220, 222, 0.5);\r\n    cursor: pointer;\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n    height: 15px;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar-thumb {\r\n    background: linear-gradient(to bottom, #cfe7f8, #4096b0);\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar-thumb:hover {\r\n    opacity: 1;\r\n  }\r\n\r\n  .popUp-modal .close-button {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 1rem;\r\n    font-size: 1.2rem;\r\n    color: #7cacac;\r\n    background: none;\r\n    border: none;\r\n  }\r\n\r\n  .m-title {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    color: var(--bs-warning);\r\n  }\r\n\r\n  .close-button :hover {\r\n    color: var(--bs-warning);\r\n  }\r\n\r\n  .imgdes {\r\n    display: flex;\r\n    margin: 1rem;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .imgdes img {\r\n    width: 250px;\r\n    height: 300px;\r\n    align-self: center;\r\n  }\r\n\r\n  .imgdes .para {\r\n    text-align: justify;\r\n    margin: 1rem 0 0 -3rem;\r\n    font-family: 'Montserrat', sans-serif;\r\n    width: 90%;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .modal-content {\r\n    display: flex;\r\n  }\r\n\r\n  .popUp-h2-text {\r\n    margin: 0;\r\n  }\r\n\r\n  .popUp-h2-comment-title {\r\n    position: relative;\r\n    top: -30%;\r\n    left: 24%;\r\n    margin: 0;\r\n    border: none;\r\n    color: var(--bs-success-text);\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n\r\n  .descriptions {\r\n    display: flex;\r\n    position: relative;\r\n    bottom: 50%;\r\n    align-items: center;\r\n  }\r\n\r\n  .descriptions p {\r\n    font-family: 'Montserrat', sans-serif;\r\n    padding-left: 0.7rem;\r\n    text-decoration: underline;\r\n    font-size: 13px;\r\n    font-style: italic;\r\n    color: var(--bs-success-text);\r\n  }\r\n\r\n  .commentcontainer {\r\n    display: flex;\r\n    margin-left: 1rem;\r\n    justify-content: center;\r\n    border: none;\r\n  }\r\n\r\n  .commentcontainer h5 {\r\n    font-size: 13px;\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  .comment-form {\r\n    text-align: center;\r\n    position: relative;\r\n    left: 25%;\r\n    top: -5%;\r\n    background-color: #a6caf0;\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n    width: 40vw;\r\n  }\r\n\r\n  .comment-form input[type=\"text\"],\r\n  .comment-form textarea {\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .comment-form textarea {\r\n    height: 10vw;\r\n  }\r\n\r\n  .submit-button {\r\n    background-color: var(--bs-info);\r\n    color: var(--bs-dark);\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    width: 19vw;\r\n    height: 7vw;\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n}\r\n\r\n@media (min-width: 1021px) {\r\n  .comment-button1 {\r\n    display: none;\r\n  }\r\n\r\n  .mobile-menu {\r\n    display: none;\r\n  }\r\n\r\n  .home-container h2 {\r\n    margin-right: 3rem;\r\n  }\r\n\r\n  .search-button {\r\n    position: relative;\r\n    top: 3px;\r\n  }\r\n\r\n  .movie-content-container {\r\n    position: relative;\r\n  }\r\n\r\n  .popUp-modal {\r\n    border: 1px solid #ccc;\r\n    position: fixed;\r\n    background: linear-gradient(to bottom, #cfe7f8, #4096b0);\r\n    z-index: 11;\r\n    top: 80%;\r\n    left: 50%;\r\n    width: 70vw;\r\n    height: 40vw;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    margin-left: 7rem;\r\n    margin-top: 6.2rem;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(152, 220, 222, 0.5);\r\n    cursor: pointer;\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n    height: 15px;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar-thumb {\r\n    background: linear-gradient(to bottom, #cfe7f8, #4096b0);\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .popUp-modal::-webkit-scrollbar-thumb:hover {\r\n    opacity: 1;\r\n  }\r\n\r\n  .popUp-modal .close-button {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: -1rem;\r\n    font-size: 1.5rem;\r\n    color: #7cacac;\r\n    background: none;\r\n    border: none;\r\n  }\r\n\r\n  .m-title {\r\n    text-align: center;\r\n    font-size: 27px;\r\n    color: var(--bs-warning);\r\n  }\r\n\r\n  .close-button :hover {\r\n    color: var(--bs-warning);\r\n  }\r\n\r\n  .imgdes {\r\n    display: flex;\r\n    margin: 2rem;\r\n  }\r\n\r\n  .para {\r\n    text-align: justify;\r\n    margin: 2rem 0 0 -3rem;\r\n    font-family: 'Montserrat', sans-serif;\r\n    width: 100%;\r\n  }\r\n\r\n  .modal-content {\r\n    display: flex;\r\n  }\r\n\r\n  .popUp-h2-text {\r\n    margin: 0;\r\n  }\r\n\r\n  .popUp-h2-comment-title {\r\n    position: relative;\r\n    top: -50%;\r\n    left: 23%;\r\n    margin: 0;\r\n    border: none;\r\n    color: var(--bs-success-text);\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n\r\n  .p-class {\r\n    margin: 5px;\r\n  }\r\n\r\n  .descriptions {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    left: 2rem;\r\n    position: relative;\r\n    bottom: 40%;\r\n    align-items: flex-end;\r\n  }\r\n\r\n  .descriptions p {\r\n    font-family: 'Montserrat', sans-serif;\r\n    padding-left: 0.5rem;\r\n    text-decoration: underline;\r\n    font-size: 22px;\r\n    font-style: italic;\r\n    color: var(--bs-warning);\r\n  }\r\n\r\n  .commentcontainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-right: 3rem;\r\n    border: none;\r\n  }\r\n\r\n  .commentcontainer h5 {\r\n    font-size: 16px;\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  .comment-form {\r\n    text-align: center;\r\n    position: relative;\r\n    left: 25%;\r\n    background-color: #a6caf0;\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n    width: 30vw;\r\n  }\r\n\r\n  .comment-form input[type=\"text\"],\r\n  .comment-form textarea {\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .comment-form textarea {\r\n    height: 3.5vw;\r\n  }\r\n\r\n  .submit-button {\r\n    background-color: var(--bs-info);\r\n    color: var(--bs-dark);\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.min.css":
/*!************************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.min.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./font-awesome.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/font-awesome/css/font-awesome.min.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot":
/*!*****************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fontawesome-webfont.eot";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fontawesome-webfont.eot";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fontawesome-webfont.svg";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fontawesome-webfont.ttf";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":
/*!***************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fontawesome-webfont.woff2";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0":
/*!**************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fontawesome-webfont.woff";

/***/ }),

/***/ "./src/asset/img/home__bg.jpg":
/*!************************************!*\
  !*** ./src/asset/img/home__bg.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home__bg.jpg";

/***/ }),

/***/ "./src/asset/img/logo.jpg":
/*!********************************!*\
  !*** ./src/asset/img/logo.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");



window.addEventListener('DOMContentLoaded', _modules_display_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
// import image from './asset/img/14.png';
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map