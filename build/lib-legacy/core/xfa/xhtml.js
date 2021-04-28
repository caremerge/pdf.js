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
exports.XhtmlNamespace = void 0;

var _namespaces = require("./namespaces.js");

var _xfa_object = require("./xfa_object.js");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var XHTML_NS_ID = _namespaces.NamespaceIds.xhtml.id;
var VALID_STYLES = new Set(["color", "font", "font-family", "font-size", "font-stretch", "font-style", "font-weight", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "letter-spacing", "line-height", "orphans", "page-break-after", "page-break-before", "page-break-inside", "tab-interval", "tab-stop", "text-decoration", "text-indent", "vertical-align", "widows", "kerning-mode", "xfa-font-horizontal-scale", "xfa-font-vertical-scale", "xfa-tab-stops"]);

function checkStyle(style) {
  if (!style) {
    return "";
  }

  return style.trim().split(/\s*;\s*/).filter(function (s) {
    return !!s;
  }).map(function (s) {
    return s.split(/\s*:\s*/, 2);
  }).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];

    return VALID_STYLES.has(key);
  }).map(function (kv) {
    return kv.join(":");
  }).join(";");
}

var A = /*#__PURE__*/function (_XmlObject) {
  _inherits(A, _XmlObject);

  var _super = _createSuper(A);

  function A(attributes) {
    var _this;

    _classCallCheck(this, A);

    _this = _super.call(this, XHTML_NS_ID, "a");
    _this.href = attributes.href || "";
    _this.style = checkStyle(attributes.style);
    return _this;
  }

  return A;
}(_xfa_object.XmlObject);

var B = /*#__PURE__*/function (_XmlObject2) {
  _inherits(B, _XmlObject2);

  var _super2 = _createSuper(B);

  function B(attributes) {
    var _this2;

    _classCallCheck(this, B);

    _this2 = _super2.call(this, XHTML_NS_ID, "b");
    _this2.style = checkStyle(attributes.style);
    return _this2;
  }

  return B;
}(_xfa_object.XmlObject);

var Body = /*#__PURE__*/function (_XmlObject3) {
  _inherits(Body, _XmlObject3);

  var _super3 = _createSuper(Body);

  function Body(attributes) {
    var _this3;

    _classCallCheck(this, Body);

    _this3 = _super3.call(this, XHTML_NS_ID, "body");
    _this3.style = checkStyle(attributes.style);
    return _this3;
  }

  return Body;
}(_xfa_object.XmlObject);

var Br = /*#__PURE__*/function (_XmlObject4) {
  _inherits(Br, _XmlObject4);

  var _super4 = _createSuper(Br);

  function Br(attributes) {
    var _this4;

    _classCallCheck(this, Br);

    _this4 = _super4.call(this, XHTML_NS_ID, "br");
    _this4.style = checkStyle(attributes.style);
    return _this4;
  }

  _createClass(Br, [{
    key: _xfa_object.$text,
    value: function value() {
      return "\n";
    }
  }]);

  return Br;
}(_xfa_object.XmlObject);

var Html = /*#__PURE__*/function (_XmlObject5) {
  _inherits(Html, _XmlObject5);

  var _super5 = _createSuper(Html);

  function Html(attributes) {
    var _this5;

    _classCallCheck(this, Html);

    _this5 = _super5.call(this, XHTML_NS_ID, "html");
    _this5.style = checkStyle(attributes.style);
    return _this5;
  }

  return Html;
}(_xfa_object.XmlObject);

var I = /*#__PURE__*/function (_XmlObject6) {
  _inherits(I, _XmlObject6);

  var _super6 = _createSuper(I);

  function I(attributes) {
    var _this6;

    _classCallCheck(this, I);

    _this6 = _super6.call(this, XHTML_NS_ID, "i");
    _this6.style = checkStyle(attributes.style);
    return _this6;
  }

  return I;
}(_xfa_object.XmlObject);

var Li = /*#__PURE__*/function (_XmlObject7) {
  _inherits(Li, _XmlObject7);

  var _super7 = _createSuper(Li);

  function Li(attributes) {
    var _this7;

    _classCallCheck(this, Li);

    _this7 = _super7.call(this, XHTML_NS_ID, "li");
    _this7.style = checkStyle(attributes.style);
    return _this7;
  }

  return Li;
}(_xfa_object.XmlObject);

var Ol = /*#__PURE__*/function (_XmlObject8) {
  _inherits(Ol, _XmlObject8);

  var _super8 = _createSuper(Ol);

  function Ol(attributes) {
    var _this8;

    _classCallCheck(this, Ol);

    _this8 = _super8.call(this, XHTML_NS_ID, "ol");
    _this8.style = checkStyle(attributes.style);
    return _this8;
  }

  return Ol;
}(_xfa_object.XmlObject);

var P = /*#__PURE__*/function (_XmlObject9) {
  _inherits(P, _XmlObject9);

  var _super9 = _createSuper(P);

  function P(attributes) {
    var _this9;

    _classCallCheck(this, P);

    _this9 = _super9.call(this, XHTML_NS_ID, "p");
    _this9.style = checkStyle(attributes.style);
    return _this9;
  }

  return P;
}(_xfa_object.XmlObject);

var Span = /*#__PURE__*/function (_XmlObject10) {
  _inherits(Span, _XmlObject10);

  var _super10 = _createSuper(Span);

  function Span(attributes) {
    var _this10;

    _classCallCheck(this, Span);

    _this10 = _super10.call(this, XHTML_NS_ID, "span");
    _this10.style = checkStyle(attributes.style);
    return _this10;
  }

  return Span;
}(_xfa_object.XmlObject);

var Sub = /*#__PURE__*/function (_XmlObject11) {
  _inherits(Sub, _XmlObject11);

  var _super11 = _createSuper(Sub);

  function Sub(attributes) {
    var _this11;

    _classCallCheck(this, Sub);

    _this11 = _super11.call(this, XHTML_NS_ID, "sub");
    _this11.style = checkStyle(attributes.style);
    return _this11;
  }

  return Sub;
}(_xfa_object.XmlObject);

var Sup = /*#__PURE__*/function (_XmlObject12) {
  _inherits(Sup, _XmlObject12);

  var _super12 = _createSuper(Sup);

  function Sup(attributes) {
    var _this12;

    _classCallCheck(this, Sup);

    _this12 = _super12.call(this, XHTML_NS_ID, "sup");
    _this12.style = checkStyle(attributes.style);
    return _this12;
  }

  return Sup;
}(_xfa_object.XmlObject);

var Ul = /*#__PURE__*/function (_XmlObject13) {
  _inherits(Ul, _XmlObject13);

  var _super13 = _createSuper(Ul);

  function Ul(attributes) {
    var _this13;

    _classCallCheck(this, Ul);

    _this13 = _super13.call(this, XHTML_NS_ID, "ul");
    _this13.style = checkStyle(attributes.style);
    return _this13;
  }

  return Ul;
}(_xfa_object.XmlObject);

var XhtmlNamespace = /*#__PURE__*/function () {
  function XhtmlNamespace() {
    _classCallCheck(this, XhtmlNamespace);
  }

  _createClass(XhtmlNamespace, null, [{
    key: _namespaces.$buildXFAObject,
    value: function value(name, attributes) {
      if (XhtmlNamespace.hasOwnProperty(name)) {
        return XhtmlNamespace[name](attributes);
      }

      return undefined;
    }
  }, {
    key: "a",
    value: function a(attributes) {
      return new A(attributes);
    }
  }, {
    key: "b",
    value: function b(attributes) {
      return new B(attributes);
    }
  }, {
    key: "body",
    value: function body(attributes) {
      return new Body(attributes);
    }
  }, {
    key: "br",
    value: function br(attributes) {
      return new Br(attributes);
    }
  }, {
    key: "html",
    value: function html(attributes) {
      return new Html(attributes);
    }
  }, {
    key: "i",
    value: function i(attributes) {
      return new I(attributes);
    }
  }, {
    key: "li",
    value: function li(attributes) {
      return new Li(attributes);
    }
  }, {
    key: "ol",
    value: function ol(attributes) {
      return new Ol(attributes);
    }
  }, {
    key: "p",
    value: function p(attributes) {
      return new P(attributes);
    }
  }, {
    key: "span",
    value: function span(attributes) {
      return new Span(attributes);
    }
  }, {
    key: "sub",
    value: function sub(attributes) {
      return new Sub(attributes);
    }
  }, {
    key: "sup",
    value: function sup(attributes) {
      return new Sup(attributes);
    }
  }, {
    key: "ul",
    value: function ul(attributes) {
      return new Ul(attributes);
    }
  }]);

  return XhtmlNamespace;
}();

exports.XhtmlNamespace = XhtmlNamespace;