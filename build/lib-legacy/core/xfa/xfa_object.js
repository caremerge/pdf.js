/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2021 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XmlObject = exports.XFAObjectArray = exports.XFAObject = exports.StringObject = exports.OptionObject = exports.Option10 = exports.Option01 = exports.IntegerObject = exports.ContentObject = exports.$text = exports.$onText = exports.$onChildCheck = exports.$onChild = exports.$nodeName = exports.$namespaceId = exports.$isTransparent = exports.$getChildren = exports.$finalize = exports.$dump = exports.$content = exports.$cleanup = exports.$clean = void 0;

var _utils = require("./utils.js");

var _util = require("../../shared/util.js");

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $clean = Symbol();
exports.$clean = $clean;
var $cleanup = Symbol();
exports.$cleanup = $cleanup;
var $content = Symbol("content");
exports.$content = $content;
var $dump = Symbol();
exports.$dump = $dump;
var $finalize = Symbol();
exports.$finalize = $finalize;
var $getChildren = Symbol();
exports.$getChildren = $getChildren;
var $isTransparent = Symbol();
exports.$isTransparent = $isTransparent;
var $lastAttribute = Symbol();
var $namespaceId = Symbol("namespaceId");
exports.$namespaceId = $namespaceId;
var $nodeName = Symbol("nodeName");
exports.$nodeName = $nodeName;
var $onChild = Symbol();
exports.$onChild = $onChild;
var $onChildCheck = Symbol();
exports.$onChildCheck = $onChildCheck;
var $onText = Symbol();
exports.$onText = $onText;
var $text = Symbol();
exports.$text = $text;

var _attributes = Symbol();

var _attributeNames = Symbol();

var _children = Symbol();

var _defaultValue = Symbol();

var _hasChildren = Symbol();

var _max = Symbol();

var _options = Symbol();

var _parent = Symbol();

var _validator = Symbol();

var XFAObject = /*#__PURE__*/function () {
  function XFAObject(nsId, name) {
    var hasChildren = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, XFAObject);

    this[$namespaceId] = nsId;
    this[$nodeName] = name;
    this[_hasChildren] = hasChildren;
    this[_parent] = null;
    this[_children] = [];
  }

  _createClass(XFAObject, [{
    key: $onChild,
    value: function value(child) {
      if (!this[_hasChildren] || !this[$onChildCheck](child)) {
        return;
      }

      var name = child[$nodeName];
      var node = this[name];

      if (node instanceof XFAObjectArray) {
        if (node.push(child)) {
          child[_parent] = this;

          this[_children].push(child);
        }
      } else if (node === null) {
        this[name] = child;
        child[_parent] = this;

        this[_children].push(child);
      } else {
        (0, _util.warn)("XFA - node \"".concat(this[$nodeName], "\" accepts only one child: ").concat(name));
      }
    }
  }, {
    key: $onChildCheck,
    value: function value(child) {
      return this.hasOwnProperty(child[$nodeName]) && child[$namespaceId] === this[$namespaceId];
    }
  }, {
    key: $onText,
    value: function value(_) {}
  }, {
    key: $finalize,
    value: function value() {}
  }, {
    key: $clean,
    value: function value(builder) {
      delete this[_hasChildren];

      if (this[$cleanup]) {
        builder.clean(this[$cleanup]);
        delete this[$cleanup];
      }
    }
  }, {
    key: $isTransparent,
    value: function value() {
      return this.name === "";
    }
  }, {
    key: $lastAttribute,
    value: function value() {
      return "";
    }
  }, {
    key: _attributeNames,
    get: function get() {
      var proto = Object.getPrototypeOf(this);

      if (!proto._attributes) {
        var attributes = proto._attributes = new Set();

        var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var name = _step.value;

            if (this[name] === null || this[name] instanceof XFAObject || this[name] instanceof XFAObjectArray) {
              break;
            }

            attributes.add(name);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return (0, _util.shadow)(this, _attributeNames, proto._attributes);
    }
  }, {
    key: $getChildren,
    value: function value() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!name) {
        return this[_children];
      }

      return this[_children].filter(function (c) {
        return c[$nodeName] === name;
      });
    }
  }, {
    key: $dump,
    value: function value() {
      var dumped = Object.create(null);

      if (this[$content]) {
        dumped.$content = this[$content];
      }

      var _iterator2 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var name = _step2.value;
          var value = this[name];

          if (value === null) {
            continue;
          }

          if (value instanceof XFAObject) {
            dumped[name] = value[$dump]();
          } else if (value instanceof XFAObjectArray) {
            if (!value.isEmpty()) {
              dumped[name] = value.dump();
            }
          } else {
            dumped[name] = value;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return dumped;
    }
  }]);

  return XFAObject;
}();

exports.XFAObject = XFAObject;

var XFAObjectArray = /*#__PURE__*/function () {
  function XFAObjectArray() {
    var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;

    _classCallCheck(this, XFAObjectArray);

    this[_max] = max;
    this[_children] = [];
  }

  _createClass(XFAObjectArray, [{
    key: "push",
    value: function push(child) {
      var len = this[_children].length;

      if (len <= this[_max]) {
        this[_children].push(child);

        return true;
      }

      (0, _util.warn)("XFA - node \"".concat(child[$nodeName], "\" accepts no more than ").concat(this[_max], " children"));
      return false;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this[_children].length === 0;
    }
  }, {
    key: "dump",
    value: function dump() {
      return this[_children].length === 1 ? this[_children][0][$dump]() : this[_children].map(function (x) {
        return x[$dump]();
      });
    }
  }]);

  return XFAObjectArray;
}();

exports.XFAObjectArray = XFAObjectArray;

var XmlObject = /*#__PURE__*/function (_XFAObject) {
  _inherits(XmlObject, _XFAObject);

  var _super = _createSuper(XmlObject);

  function XmlObject(nsId, name) {
    var _this;

    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.create(null);

    _classCallCheck(this, XmlObject);

    _this = _super.call(this, nsId, name);
    _this[$content] = "";

    if (name !== "#text") {
      _this[_attributes] = attributes;
    }

    return _this;
  }

  _createClass(XmlObject, [{
    key: $onChild,
    value: function value(child) {
      if (this[$content]) {
        var node = new XmlObject(this[$namespaceId], "#text");
        node[$content] = this[$content];
        this[$content] = "";

        this[_children].push(node);
      }

      this[_children].push(child);
    }
  }, {
    key: $onText,
    value: function value(str) {
      this[$content] += str;
    }
  }, {
    key: $finalize,
    value: function value() {
      if (this[$content] && this[_children].length > 0) {
        var node = new XmlObject(this[$namespaceId], "#text");
        node[$content] = this[$content];

        this[_children].push(node);

        delete this[$content];
      }
    }
  }, {
    key: $text,
    value: function value() {
      if (this[_children].length === 0) {
        return this[$content];
      }

      return this[_children].map(function (c) {
        return c[$text]();
      }).join("");
    }
  }]);

  return XmlObject;
}(XFAObject);

exports.XmlObject = XmlObject;

var ContentObject = /*#__PURE__*/function (_XFAObject2) {
  _inherits(ContentObject, _XFAObject2);

  var _super2 = _createSuper(ContentObject);

  function ContentObject(nsId, name) {
    var _this2;

    _classCallCheck(this, ContentObject);

    _this2 = _super2.call(this, nsId, name);
    _this2[$content] = "";
    return _this2;
  }

  _createClass(ContentObject, [{
    key: $onText,
    value: function value(text) {
      this[$content] += text;
    }
  }, {
    key: $finalize,
    value: function value() {}
  }]);

  return ContentObject;
}(XFAObject);

exports.ContentObject = ContentObject;

var OptionObject = /*#__PURE__*/function (_ContentObject) {
  _inherits(OptionObject, _ContentObject);

  var _super3 = _createSuper(OptionObject);

  function OptionObject(nsId, name, options) {
    var _this3;

    _classCallCheck(this, OptionObject);

    _this3 = _super3.call(this, nsId, name);
    _this3[_options] = options;
    return _this3;
  }

  _createClass(OptionObject, [{
    key: $finalize,
    value: function value() {
      var _this4 = this;

      this[$content] = (0, _utils.getKeyword)({
        data: this[$content],
        defaultValue: this[_options][0],
        validate: function validate(k) {
          return _this4[_options].includes(k);
        }
      });
    }
  }, {
    key: $clean,
    value: function value(builder) {
      _get(_getPrototypeOf(OptionObject.prototype), $clean, this).call(this, builder);

      delete this[_options];
    }
  }]);

  return OptionObject;
}(ContentObject);

exports.OptionObject = OptionObject;

var StringObject = /*#__PURE__*/function (_ContentObject2) {
  _inherits(StringObject, _ContentObject2);

  var _super4 = _createSuper(StringObject);

  function StringObject() {
    _classCallCheck(this, StringObject);

    return _super4.apply(this, arguments);
  }

  _createClass(StringObject, [{
    key: $finalize,
    value: function value() {
      this[$content] = this[$content].trim();
    }
  }]);

  return StringObject;
}(ContentObject);

exports.StringObject = StringObject;

var IntegerObject = /*#__PURE__*/function (_ContentObject3) {
  _inherits(IntegerObject, _ContentObject3);

  var _super5 = _createSuper(IntegerObject);

  function IntegerObject(nsId, name, defaultValue, validator) {
    var _this5;

    _classCallCheck(this, IntegerObject);

    _this5 = _super5.call(this, nsId, name);
    _this5[_defaultValue] = defaultValue;
    _this5[_validator] = validator;
    return _this5;
  }

  _createClass(IntegerObject, [{
    key: $finalize,
    value: function value() {
      this[$content] = (0, _utils.getInteger)({
        data: this[$content],
        defaultValue: this[_defaultValue],
        validate: this[_validator]
      });
    }
  }, {
    key: $clean,
    value: function value(builder) {
      _get(_getPrototypeOf(IntegerObject.prototype), $clean, this).call(this, builder);

      delete this[_defaultValue];
      delete this[_validator];
    }
  }]);

  return IntegerObject;
}(ContentObject);

exports.IntegerObject = IntegerObject;

var Option01 = /*#__PURE__*/function (_IntegerObject) {
  _inherits(Option01, _IntegerObject);

  var _super6 = _createSuper(Option01);

  function Option01(nsId, name) {
    _classCallCheck(this, Option01);

    return _super6.call(this, nsId, name, 0, function (n) {
      return n === 1;
    });
  }

  return Option01;
}(IntegerObject);

exports.Option01 = Option01;

var Option10 = /*#__PURE__*/function (_IntegerObject2) {
  _inherits(Option10, _IntegerObject2);

  var _super7 = _createSuper(Option10);

  function Option10(nsId, name) {
    _classCallCheck(this, Option10);

    return _super7.call(this, nsId, name, 1, function (n) {
      return n === 0;
    });
  }

  return Option10;
}(IntegerObject);

exports.Option10 = Option10;