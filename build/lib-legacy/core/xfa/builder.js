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
exports.Builder = void 0;

var _namespaces = require("./namespaces.js");

var _xfa_object = require("./xfa_object.js");

var _setup = require("./setup.js");

var _unknown = require("./unknown.js");

var _util = require("../../shared/util.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Root = /*#__PURE__*/function (_XFAObject) {
  _inherits(Root, _XFAObject);

  var _super = _createSuper(Root);

  function Root() {
    var _this;

    _classCallCheck(this, Root);

    _this = _super.call(this, -1, "root", Object.create(null));
    _this.element = null;
    return _this;
  }

  _createClass(Root, [{
    key: _xfa_object.$onChild,
    value: function value(child) {
      this.element = child;
    }
  }]);

  return Root;
}(_xfa_object.XFAObject);

var Empty = /*#__PURE__*/function (_XFAObject2) {
  _inherits(Empty, _XFAObject2);

  var _super2 = _createSuper(Empty);

  function Empty() {
    _classCallCheck(this, Empty);

    return _super2.call(this, -1, "", Object.create(null));
  }

  _createClass(Empty, [{
    key: _xfa_object.$onChild,
    value: function value(_) {}
  }]);

  return Empty;
}(_xfa_object.XFAObject);

var Builder = /*#__PURE__*/function () {
  function Builder() {
    _classCallCheck(this, Builder);

    this._namespaceStack = [];
    this._namespacePrefixes = new Map();
    this._namespaces = new Map();
    this._nextNsId = Math.max.apply(Math, _toConsumableArray(Object.values(_namespaces.NamespaceIds).map(function (_ref) {
      var id = _ref.id;
      return id;
    })));
    this._currentNamespace = new _unknown.UnknownNamespace(++this._nextNsId);
  }

  _createClass(Builder, [{
    key: "buildRoot",
    value: function buildRoot() {
      return new Root();
    }
  }, {
    key: "build",
    value: function build(_ref2) {
      var nsPrefix = _ref2.nsPrefix,
          name = _ref2.name,
          attributes = _ref2.attributes,
          namespace = _ref2.namespace,
          prefixes = _ref2.prefixes;
      var hasNamespaceDef = namespace !== null;

      if (hasNamespaceDef) {
        this._namespaceStack.push(this._currentNamespace);

        this._currentNamespace = this._searchNamespace(namespace);
      }

      if (prefixes) {
        this._addNamespacePrefix(prefixes);
      }

      var namespaceToUse = this._getNamespaceToUse(nsPrefix);

      var node = namespaceToUse && namespaceToUse[_namespaces.$buildXFAObject](name, attributes) || new Empty();

      if (hasNamespaceDef || prefixes) {
        node[_xfa_object.$cleanup] = {
          hasNamespace: hasNamespaceDef,
          prefixes: prefixes
        };
      }

      return node;
    }
  }, {
    key: "_searchNamespace",
    value: function _searchNamespace(nsName) {
      var ns = this._namespaces.get(nsName);

      if (ns) {
        return ns;
      }

      for (var _i = 0, _Object$entries = Object.entries(_namespaces.NamespaceIds); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            name = _Object$entries$_i[0],
            check = _Object$entries$_i[1].check;

        if (check(nsName)) {
          ns = _setup.NamespaceSetUp[name];

          if (ns) {
            this._namespaces.set(nsName, ns);

            return ns;
          }

          break;
        }
      }

      ns = new _unknown.UnknownNamespace(++this._nextNsId);

      this._namespaces.set(nsName, ns);

      return ns;
    }
  }, {
    key: "_addNamespacePrefix",
    value: function _addNamespacePrefix(prefixes) {
      var _iterator = _createForOfIteratorHelper(prefixes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              prefix = _step$value.prefix,
              value = _step$value.value;

          var namespace = this._searchNamespace(value);

          var prefixStack = this._namespacePrefixes.get(prefix);

          if (!prefixStack) {
            prefixStack = [];

            this._namespacePrefixes.set(prefix, prefixStack);
          }

          prefixStack.push(namespace);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_getNamespaceToUse",
    value: function _getNamespaceToUse(prefix) {
      if (!prefix) {
        return this._currentNamespace;
      }

      var prefixStack = this._namespacePrefixes.get(prefix);

      if (prefixStack && prefixStack.length > 0) {
        return prefixStack[prefixStack.length - 1];
      }

      (0, _util.warn)("Unknown namespace prefix: ".concat(prefix, "."));
      return null;
    }
  }, {
    key: "clean",
    value: function clean(data) {
      var _this2 = this;

      var hasNamespace = data.hasNamespace,
          prefixes = data.prefixes;

      if (hasNamespace) {
        this._currentNamespace = this._namespaceStack.pop();
      }

      if (prefixes) {
        prefixes.forEach(function (_ref3) {
          var prefix = _ref3.prefix;

          _this2._namespacePrefixes.get(prefix).pop();
        });
      }
    }
  }]);

  return Builder;
}();

exports.Builder = Builder;