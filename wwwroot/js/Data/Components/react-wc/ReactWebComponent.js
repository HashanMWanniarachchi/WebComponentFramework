(function (React, ReactDOM) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function onHeroTableClick(e, data) {
    var ev = new CustomEvent("row_select", {
      detail: data,
      bubbles: true
    });
    document.dispatchEvent(ev);
  }
  var HeroTable = function HeroTable(_ref) {
    var data = _ref.data;
    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("style", null, "\n          .superhero-table {\n            width: 100%;\n            border-collapse: collapse;\n          }\n\n          .superhero-table tr:hover {\n            background-color: blue;\n            opacity: 0.7;\n          }\n\n          .superhero-table tr:hover td {\n            color: white !important; /* Change the text color to white */\n          }\n\n          .superhero-table th,\n          .superhero-table td {\n            padding: 8px;\n            border: 1px solid #dddddd;\n            text-align: left;\n          }\n\n          .superhero-table th {\n            background-color: grey;\n            font-weight: bold;\n          }\n        "), /*#__PURE__*/React__default["default"].createElement("table", {
      className: "superhero-table"
    }, /*#__PURE__*/React__default["default"].createElement("thead", null, /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement("th", null, "Superhero"), /*#__PURE__*/React__default["default"].createElement("th", null, "Publisher"), /*#__PURE__*/React__default["default"].createElement("th", null, "Alter Ego"), /*#__PURE__*/React__default["default"].createElement("th", null, "First Appearance"), /*#__PURE__*/React__default["default"].createElement("th", null, "Characters"))), /*#__PURE__*/React__default["default"].createElement("tbody", null, data.map(function (item, index) {
      return /*#__PURE__*/React__default["default"].createElement("tr", {
        key: index,
        onClick: function onClick(e) {
          return onHeroTableClick(e, item);
        }
      }, /*#__PURE__*/React__default["default"].createElement("td", null, item.superhero), /*#__PURE__*/React__default["default"].createElement("td", null, item.publisher), /*#__PURE__*/React__default["default"].createElement("td", null, item.alter_ego), /*#__PURE__*/React__default["default"].createElement("td", null, item.first_appearance), /*#__PURE__*/React__default["default"].createElement("td", null, item.characters));
    }))));
  };

  var HeroList = function HeroList() {
    //const heroes = await HeroService.getHeroes();

    var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      heroes = _useState2[0],
      setHeroes = _useState2[1];
    import('../../../Services/HeroService.js').then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(heroService) {
        var heroList;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return heroService.getHeroes();
            case 2:
              heroList = _context.sent;
              console.log(heroList);
              setHeroes(heroList);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    // const heroes = [
    //     {
    //         "superhero":"Batman", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Bruce Wayne",
    //         "first_appearance":"Detective Comics #27",
    //         "characters":"Bruce Wayne"
    //     },
    //     {
    //         "superhero":"Superman", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Kal-El",
    //         "first_appearance":"Action Comics #1",
    //         "characters":"Kal-El"
    //     },
    //     {
    //         "superhero":"Flash", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Jay Garrick",
    //         "first_appearance":"Flash Comics #1",
    //         "characters":"Jay Garrick, Barry Allen, Wally West, Bart Allen"
    //     },
    //     {
    //         "superhero":"Green Lantern", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Alan Scott",
    //         "first_appearance":"All-American Comics #16",
    //         "characters":"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
    //     },
    //     {
    //         "superhero":"Green Arrow", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Oliver Queen",
    //         "first_appearance":"More Fun Comics #73",
    //         "characters":"Oliver Queen"
    //     },
    //     {
    //         "superhero":"Wonder Woman", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Princess Diana",
    //         "first_appearance":"All Star Comics #8",
    //         "characters":"Princess Diana"
    //     },
    //     {
    //         "superhero":"Martian Manhunter", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"J'onn J'onzz",
    //         "first_appearance":"Detective Comics #225",
    //         "characters":"Martian Manhunter"
    //     },
    //     {
    //         "superhero":"Robin/Nightwing", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Dick Grayson",
    //         "first_appearance":"Detective Comics #38",
    //         "characters":"Dick Grayson"
    //     },
    //     {
    //         "superhero":"Blue Beetle", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Dan Garret",
    //         "first_appearance":"Mystery Men Comics #1",
    //         "characters":"Dan Garret, Ted Kord, Jaime Reyes"
    //     },
    //     {
    //         "superhero":"Black Canary", 
    //         "publisher":"DC Comics", 
    //         "alter_ego":"Dinah Drake",
    //         "first_appearance":"Flash Comics #86",
    //         "characters":"Dinah Drake, Dinah Lance"
    //     },
    //     {
    //         "superhero":"Spider Man", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Peter Parker",
    //         "first_appearance":"Amazing Fantasy #15",
    //         "characters":"Peter Parker"
    //     },
    //     {
    //         "superhero":"Captain America", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Steve Rogers",
    //         "first_appearance":"Captain America Comics #1",
    //         "characters":"Steve Rogers"
    //     },
    //     {
    //         "superhero":"Iron Man", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Tony Stark",
    //         "first_appearance":"Tales of Suspense #39",
    //         "characters":"Tony Stark"
    //     },
    //     {
    //         "superhero":"Thor", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Thor Odinson",
    //         "first_appearance":"Journey into Myster #83",
    //         "characters":"Thor Odinson"
    //     },
    //     {
    //         "superhero":"Hulk", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Bruce Banner",
    //         "first_appearance":"The Incredible Hulk #1",
    //         "characters":"Bruce Banner"
    //     },
    //     {
    //         "superhero":"Wolverine", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"James Howlett",
    //         "first_appearance":"The Incredible Hulk #180",
    //         "characters":"James Howlett"
    //     },
    //     {
    //         "superhero":"Daredevil", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Matthew Michael Murdock",
    //         "first_appearance":"Daredevil #1",
    //         "characters":"Matthew Michael Murdock"
    //     },
    //     {
    //         "superhero":"Hawkeye", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Clinton Francis Barton",
    //         "first_appearance":"Tales of Suspense #57",
    //         "characters":"Clinton Francis Barton"
    //     },
    //     {
    //         "superhero":"Cyclops", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Scott Summers",
    //         "first_appearance":"X-Men #1",
    //         "characters":"Scott Summers"
    //     },
    //     {
    //         "superhero":"Silver Surfer", 
    //         "publisher":"Marvel Comics", 
    //         "alter_ego":"Norrin Radd",
    //         "first_appearance":"The Fantastic Four #48",
    //         "characters":"Norrin Radd"
    //     }
    // ];

    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h1", null, "React Superhero Table"), Object.keys(heroes).length > 0 && /*#__PURE__*/React__default["default"].createElement(HeroTable, {
      data: heroes
    }), Object.keys(heroes).length === 0 && /*#__PURE__*/React__default["default"].createElement("h2", null, "Hero list loading....."));
  };

  var WebComponentWrapper = /*#__PURE__*/function (_HTMLElement) {
    _inherits(WebComponentWrapper, _HTMLElement);
    function WebComponentWrapper() {
      var _this;
      _classCallCheck(this, WebComponentWrapper);
      _this = _callSuper(this, WebComponentWrapper);
      _this.shadow = _this.attachShadow({
        mode: 'open'
      });
      return _this;
    }
    _createClass(WebComponentWrapper, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.renderReactComponent();
      }
    }, {
      key: "renderReactComponent",
      value: function renderReactComponent() {
        ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(HeroList, null), this.shadow);
      }
    }]);
    return WebComponentWrapper;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  customElements.define('react-web-component', WebComponentWrapper);

  // const App = () => {
  //   return <div>
  //     <h1>Hello, Rollup!</h1>
  //     <react-web-component></react-web-component>
  //     </div>;
  // };

  // ReactDOM.render(<App />, document.getElementById('root'));

})(React, ReactDOM);
