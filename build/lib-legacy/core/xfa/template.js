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
exports.TemplateNamespace = void 0;

var _namespaces = require("./namespaces.js");

var _xfa_object = require("./xfa_object.js");

var _utils = require("./utils.js");

var _util = require("../../shared/util.js");

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

var TEMPLATE_NS_ID = _namespaces.NamespaceIds.template.id;

var AppearanceFilter = /*#__PURE__*/function (_StringObject) {
  _inherits(AppearanceFilter, _StringObject);

  var _super = _createSuper(AppearanceFilter);

  function AppearanceFilter(attributes) {
    var _this;

    _classCallCheck(this, AppearanceFilter);

    _this = _super.call(this, TEMPLATE_NS_ID, "appearanceFilter");
    _this.id = attributes.id || "";
    _this.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this.use = attributes.use || "";
    _this.usehref = attributes.usehref || "";
    return _this;
  }

  return AppearanceFilter;
}(_xfa_object.StringObject);

var Arc = /*#__PURE__*/function (_XFAObject) {
  _inherits(Arc, _XFAObject);

  var _super2 = _createSuper(Arc);

  function Arc(attributes) {
    var _this2;

    _classCallCheck(this, Arc);

    _this2 = _super2.call(this, TEMPLATE_NS_ID, "arc", true);
    _this2.circular = (0, _utils.getInteger)({
      data: attributes.circular,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this2.hand = (0, _utils.getStringOption)(attributes.hand, ["even", "left", "right"]);
    _this2.id = attributes.id || "";
    _this2.startAngle = (0, _utils.getFloat)({
      data: attributes.startAngle,
      defaultValue: 0,
      validate: function validate(x) {
        return true;
      }
    });
    _this2.sweepAngle = (0, _utils.getFloat)({
      data: attributes.sweepAngle,
      defaultValue: 360,
      validate: function validate(x) {
        return true;
      }
    });
    _this2.use = attributes.use || "";
    _this2.usehref = attributes.usehref || "";
    _this2.edge = null;
    _this2.fill = null;
    return _this2;
  }

  return Arc;
}(_xfa_object.XFAObject);

var Area = /*#__PURE__*/function (_XFAObject2) {
  _inherits(Area, _XFAObject2);

  var _super3 = _createSuper(Area);

  function Area(attributes) {
    var _this3;

    _classCallCheck(this, Area);

    _this3 = _super3.call(this, TEMPLATE_NS_ID, "area", true);
    _this3.colSpan = (0, _utils.getInteger)({
      data: attributes.colSpan,
      defaultValue: 1,
      validate: function validate(n) {
        return n >= 1;
      }
    });
    _this3.id = attributes.id || "";
    _this3.name = attributes.name || "";
    _this3.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this3.use = attributes.use || "";
    _this3.usehref = attributes.usehref || "";
    _this3.x = (0, _utils.getMeasurement)(attributes.x);
    _this3.y = (0, _utils.getMeasurement)(attributes.y);
    _this3.desc = null;
    _this3.extras = null;
    _this3.area = new _xfa_object.XFAObjectArray();
    _this3.draw = new _xfa_object.XFAObjectArray();
    _this3.exObject = new _xfa_object.XFAObjectArray();
    _this3.exclGroup = new _xfa_object.XFAObjectArray();
    _this3.field = new _xfa_object.XFAObjectArray();
    _this3.subform = new _xfa_object.XFAObjectArray();
    _this3.subformSet = new _xfa_object.XFAObjectArray();
    return _this3;
  }

  _createClass(Area, [{
    key: _xfa_object.$isTransparent,
    value: function value() {
      return true;
    }
  }]);

  return Area;
}(_xfa_object.XFAObject);

var Assist = /*#__PURE__*/function (_XFAObject3) {
  _inherits(Assist, _XFAObject3);

  var _super4 = _createSuper(Assist);

  function Assist(attributes) {
    var _this4;

    _classCallCheck(this, Assist);

    _this4 = _super4.call(this, TEMPLATE_NS_ID, "assist", true);
    _this4.id = attributes.id || "";
    _this4.role = attributes.role || "";
    _this4.use = attributes.use || "";
    _this4.usehref = attributes.usehref || "";
    _this4.speak = null;
    _this4.toolTip = null;
    return _this4;
  }

  return Assist;
}(_xfa_object.XFAObject);

var Barcode = /*#__PURE__*/function (_XFAObject4) {
  _inherits(Barcode, _XFAObject4);

  var _super5 = _createSuper(Barcode);

  function Barcode(attributes) {
    var _this5;

    _classCallCheck(this, Barcode);

    _this5 = _super5.call(this, TEMPLATE_NS_ID, "barcode", true);
    _this5.charEncoding = (0, _utils.getKeyword)({
      data: attributes.charEncoding ? attributes.charEncoding.toLowerCase() : "",
      defaultValue: "",
      validate: function validate(k) {
        return ["utf-8", "big-five", "fontspecific", "gbk", "gb-18030", "gb-2312", "ksc-5601", "none", "shift-jis", "ucs-2", "utf-16"].includes(k) || k.match(/iso-8859-[0-9]{2}/);
      }
    });
    _this5.checksum = (0, _utils.getStringOption)(attributes.checksum, ["none", "1mod10", "1mod10_1mod11", "2mod10", "auto"]);
    _this5.dataColumnCount = (0, _utils.getInteger)({
      data: attributes.dataColumnCount,
      defaultValue: -1,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this5.dataLength = (0, _utils.getInteger)({
      data: attributes.dataLength,
      defaultValue: -1,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this5.dataPrep = (0, _utils.getStringOption)(attributes.dataPrep, ["none", "flateCompress"]);
    _this5.dataRowCount = (0, _utils.getInteger)({
      data: attributes.dataRowCount,
      defaultValue: -1,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this5.endChar = attributes.endChar || "";
    _this5.errorCorrectionLevel = (0, _utils.getInteger)({
      data: attributes.errorCorrectionLevel,
      defaultValue: -1,
      validate: function validate(x) {
        return x >= 0 && x <= 8;
      }
    });
    _this5.id = attributes.id || "";
    _this5.moduleHeight = (0, _utils.getMeasurement)(attributes.moduleHeight, "5mm");
    _this5.moduleWidth = (0, _utils.getMeasurement)(attributes.moduleWidth, "0.25mm");
    _this5.printCheckDigit = (0, _utils.getInteger)({
      data: attributes.printCheckDigit,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this5.rowColumnRatio = (0, _utils.getRatio)(attributes.rowColumnRatio);
    _this5.startChar = attributes.startChar || "";
    _this5.textLocation = (0, _utils.getStringOption)(attributes.textLocation, ["below", "above", "aboveEmbedded", "belowEmbedded", "none"]);
    _this5.truncate = (0, _utils.getInteger)({
      data: attributes.truncate,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this5.type = (0, _utils.getStringOption)(attributes.type ? attributes.type.toLowerCase() : "", ["aztec", "codabar", "code2of5industrial", "code2of5interleaved", "code2of5matrix", "code2of5standard", "code3of9", "code3of9extended", "code11", "code49", "code93", "code128", "code128a", "code128b", "code128c", "code128sscc", "datamatrix", "ean8", "ean8add2", "ean8add5", "ean13", "ean13add2", "ean13add5", "ean13pwcd", "fim", "logmars", "maxicode", "msi", "pdf417", "pdf417macro", "plessey", "postauscust2", "postauscust3", "postausreplypaid", "postausstandard", "postukrm4scc", "postusdpbc", "postusimb", "postusstandard", "postus5zip", "qrcode", "rfid", "rss14", "rss14expanded", "rss14limited", "rss14stacked", "rss14stackedomni", "rss14truncated", "telepen", "ucc128", "ucc128random", "ucc128sscc", "upca", "upcaadd2", "upcaadd5", "upcapwcd", "upce", "upceadd2", "upceadd5", "upcean2", "upcean5", "upsmaxicode"]);
    _this5.upsMode = (0, _utils.getStringOption)(attributes.upsMode, ["usCarrier", "internationalCarrier", "secureSymbol", "standardSymbol"]);
    _this5.use = attributes.use || "";
    _this5.usehref = attributes.usehref || "";
    _this5.wideNarrowRatio = (0, _utils.getRatio)(attributes.wideNarrowRatio);
    _this5.encrypt = null;
    _this5.extras = null;
    return _this5;
  }

  return Barcode;
}(_xfa_object.XFAObject);

var Bind = /*#__PURE__*/function (_XFAObject5) {
  _inherits(Bind, _XFAObject5);

  var _super6 = _createSuper(Bind);

  function Bind(attributes) {
    var _this6;

    _classCallCheck(this, Bind);

    _this6 = _super6.call(this, TEMPLATE_NS_ID, "bind", true);
    _this6.match = (0, _utils.getStringOption)(attributes.match, ["once", "dataRef", "global", "none"]);
    _this6.ref = attributes.ref || "";
    _this6.picture = null;
    return _this6;
  }

  return Bind;
}(_xfa_object.XFAObject);

var BindItems = /*#__PURE__*/function (_XFAObject6) {
  _inherits(BindItems, _XFAObject6);

  var _super7 = _createSuper(BindItems);

  function BindItems(attributes) {
    var _this7;

    _classCallCheck(this, BindItems);

    _this7 = _super7.call(this, TEMPLATE_NS_ID, "bindItems");
    _this7.connection = attributes.connection || "";
    _this7.labelRef = attributes.labelRef || "";
    _this7.ref = attributes.ref || "";
    _this7.valueRef = attributes.valueRef || "";
    return _this7;
  }

  return BindItems;
}(_xfa_object.XFAObject);

var Bookend = /*#__PURE__*/function (_XFAObject7) {
  _inherits(Bookend, _XFAObject7);

  var _super8 = _createSuper(Bookend);

  function Bookend(attributes) {
    var _this8;

    _classCallCheck(this, Bookend);

    _this8 = _super8.call(this, TEMPLATE_NS_ID, "bookend");
    _this8.id = attributes.id || "";
    _this8.leader = attributes.leader || "";
    _this8.trailer = attributes.trailer || "";
    _this8.use = attributes.use || "";
    _this8.usehref = attributes.usehref || "";
    return _this8;
  }

  return Bookend;
}(_xfa_object.XFAObject);

var BooleanElement = /*#__PURE__*/function (_Option) {
  _inherits(BooleanElement, _Option);

  var _super9 = _createSuper(BooleanElement);

  function BooleanElement(attributes) {
    var _this9;

    _classCallCheck(this, BooleanElement);

    _this9 = _super9.call(this, TEMPLATE_NS_ID, "boolean");
    _this9.id = attributes.id || "";
    _this9.name = attributes.name || "";
    _this9.use = attributes.use || "";
    _this9.usehref = attributes.usehref || "";
    return _this9;
  }

  return BooleanElement;
}(_xfa_object.Option01);

var Border = /*#__PURE__*/function (_XFAObject8) {
  _inherits(Border, _XFAObject8);

  var _super10 = _createSuper(Border);

  function Border(attributes) {
    var _this10;

    _classCallCheck(this, Border);

    _this10 = _super10.call(this, TEMPLATE_NS_ID, "border", true);
    _this10["break"] = (0, _utils.getStringOption)(attributes["break"], ["close", "open"]);
    _this10.hand = (0, _utils.getStringOption)(attributes.hand, ["even", "left", "right"]);
    _this10.id = attributes.id || "";
    _this10.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this10.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this10.use = attributes.use || "";
    _this10.usehref = attributes.usehref || "";
    _this10.corner = new _xfa_object.XFAObjectArray(4);
    _this10.edge = new _xfa_object.XFAObjectArray(4);
    _this10.extras = null;
    _this10.fill = null;
    _this10.margin = null;
    return _this10;
  }

  return Border;
}(_xfa_object.XFAObject);

var Break = /*#__PURE__*/function (_XFAObject9) {
  _inherits(Break, _XFAObject9);

  var _super11 = _createSuper(Break);

  function Break(attributes) {
    var _this11;

    _classCallCheck(this, Break);

    _this11 = _super11.call(this, TEMPLATE_NS_ID, "break", true);
    _this11.after = (0, _utils.getStringOption)(attributes.after, ["auto", "contentArea", "pageArea", "pageEven", "pageOdd"]);
    _this11.afterTarget = attributes.afterTarget || "";
    _this11.before = (0, _utils.getStringOption)(attributes.before, ["auto", "contentArea", "pageArea", "pageEven", "pageOdd"]);
    _this11.beforeTarget = attributes.beforeTarget || "";
    _this11.bookendLeader = attributes.bookendLeader || "";
    _this11.bookendTrailer = attributes.bookendTrailer || "";
    _this11.id = attributes.id || "";
    _this11.overflowLeader = attributes.overflowLeader || "";
    _this11.overflowTarget = attributes.overflowTarget || "";
    _this11.overflowTrailer = attributes.overflowTrailer || "";
    _this11.startNew = (0, _utils.getInteger)({
      data: attributes.startNew,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this11.use = attributes.use || "";
    _this11.usehref = attributes.usehref || "";
    _this11.extras = null;
    return _this11;
  }

  return Break;
}(_xfa_object.XFAObject);

var BreakAfter = /*#__PURE__*/function (_XFAObject10) {
  _inherits(BreakAfter, _XFAObject10);

  var _super12 = _createSuper(BreakAfter);

  function BreakAfter(attributes) {
    var _this12;

    _classCallCheck(this, BreakAfter);

    _this12 = _super12.call(this, TEMPLATE_NS_ID, "breakAfter", true);
    _this12.id = attributes.id || "";
    _this12.leader = attributes.leader || "";
    _this12.startNew = (0, _utils.getInteger)({
      data: attributes.startNew,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this12.target = attributes.target || "";
    _this12.targetType = (0, _utils.getStringOption)(attributes.targetType, ["auto", "contentArea", "pageArea", "pageEven", "pageOdd"]);
    _this12.trailer = attributes.trailer || "";
    _this12.use = attributes.use || "";
    _this12.usehref = attributes.usehref || "";
    _this12.script = null;
    return _this12;
  }

  return BreakAfter;
}(_xfa_object.XFAObject);

var BreakBefore = /*#__PURE__*/function (_XFAObject11) {
  _inherits(BreakBefore, _XFAObject11);

  var _super13 = _createSuper(BreakBefore);

  function BreakBefore(attributes) {
    var _this13;

    _classCallCheck(this, BreakBefore);

    _this13 = _super13.call(this, TEMPLATE_NS_ID, "breakBefore", true);
    _this13.id = attributes.id || "";
    _this13.leader = attributes.leader || "";
    _this13.startNew = (0, _utils.getInteger)({
      data: attributes.startNew,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this13.target = attributes.target || "";
    _this13.targetType = (0, _utils.getStringOption)(attributes.targetType, ["auto", "contentArea", "pageArea", "pageEven", "pageOdd"]);
    _this13.trailer = attributes.trailer || "";
    _this13.use = attributes.use || "";
    _this13.usehref = attributes.usehref || "";
    _this13.script = null;
    return _this13;
  }

  return BreakBefore;
}(_xfa_object.XFAObject);

var Button = /*#__PURE__*/function (_XFAObject12) {
  _inherits(Button, _XFAObject12);

  var _super14 = _createSuper(Button);

  function Button(attributes) {
    var _this14;

    _classCallCheck(this, Button);

    _this14 = _super14.call(this, TEMPLATE_NS_ID, "button", true);
    _this14.highlight = (0, _utils.getStringOption)(attributes.highlight, ["inverted", "none", "outline", "push"]);
    _this14.id = attributes.id || "";
    _this14.use = attributes.use || "";
    _this14.usehref = attributes.usehref || "";
    _this14.extras = null;
    return _this14;
  }

  return Button;
}(_xfa_object.XFAObject);

var Calculate = /*#__PURE__*/function (_XFAObject13) {
  _inherits(Calculate, _XFAObject13);

  var _super15 = _createSuper(Calculate);

  function Calculate(attributes) {
    var _this15;

    _classCallCheck(this, Calculate);

    _this15 = _super15.call(this, TEMPLATE_NS_ID, "calculate", true);
    _this15.id = attributes.id || "";
    _this15.override = (0, _utils.getStringOption)(attributes.override, ["disabled", "error", "ignore", "warning"]);
    _this15.use = attributes.use || "";
    _this15.usehref = attributes.usehref || "";
    _this15.extras = null;
    _this15.message = null;
    _this15.script = null;
    return _this15;
  }

  return Calculate;
}(_xfa_object.XFAObject);

var Caption = /*#__PURE__*/function (_XFAObject14) {
  _inherits(Caption, _XFAObject14);

  var _super16 = _createSuper(Caption);

  function Caption(attributes) {
    var _this16;

    _classCallCheck(this, Caption);

    _this16 = _super16.call(this, TEMPLATE_NS_ID, "caption", true);
    _this16.id = attributes.id || "";
    _this16.placement = (0, _utils.getStringOption)(attributes.placement, ["left", "bottom", "inline", "right", "top"]);
    _this16.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this16.reserve = (0, _utils.getMeasurement)(attributes.reserve);
    _this16.use = attributes.use || "";
    _this16.usehref = attributes.usehref || "";
    _this16.extras = null;
    _this16.font = null;
    _this16.margin = null;
    _this16.para = null;
    _this16.value = null;
    return _this16;
  }

  return Caption;
}(_xfa_object.XFAObject);

var Certificate = /*#__PURE__*/function (_StringObject2) {
  _inherits(Certificate, _StringObject2);

  var _super17 = _createSuper(Certificate);

  function Certificate(attributes) {
    var _this17;

    _classCallCheck(this, Certificate);

    _this17 = _super17.call(this, TEMPLATE_NS_ID, "certificate");
    _this17.id = attributes.id || "";
    _this17.name = attributes.name || "";
    _this17.use = attributes.use || "";
    _this17.usehref = attributes.usehref || "";
    return _this17;
  }

  return Certificate;
}(_xfa_object.StringObject);

var Certificates = /*#__PURE__*/function (_XFAObject15) {
  _inherits(Certificates, _XFAObject15);

  var _super18 = _createSuper(Certificates);

  function Certificates(attributes) {
    var _this18;

    _classCallCheck(this, Certificates);

    _this18 = _super18.call(this, TEMPLATE_NS_ID, "certificates", true);
    _this18.credentialServerPolicy = (0, _utils.getStringOption)(attributes.credentialServerPolicy, ["optional", "required"]);
    _this18.id = attributes.id || "";
    _this18.url = attributes.url || "";
    _this18.urlPolicy = attributes.urlPolicy || "";
    _this18.use = attributes.use || "";
    _this18.usehref = attributes.usehref || "";
    _this18.encryption = null;
    _this18.issuers = null;
    _this18.keyUsage = null;
    _this18.oids = null;
    _this18.signing = null;
    _this18.subjectDNs = null;
    return _this18;
  }

  return Certificates;
}(_xfa_object.XFAObject);

var CheckButton = /*#__PURE__*/function (_XFAObject16) {
  _inherits(CheckButton, _XFAObject16);

  var _super19 = _createSuper(CheckButton);

  function CheckButton(attributes) {
    var _this19;

    _classCallCheck(this, CheckButton);

    _this19 = _super19.call(this, TEMPLATE_NS_ID, "checkButton", true);
    _this19.id = attributes.id || "";
    _this19.mark = (0, _utils.getStringOption)(attributes.mark, ["default", "check", "circle", "cross", "diamond", "square", "star"]);
    _this19.shape = (0, _utils.getStringOption)(attributes.shape, ["square", "round"]);
    _this19.size = (0, _utils.getMeasurement)(attributes.size, "10pt");
    _this19.use = attributes.use || "";
    _this19.usehref = attributes.usehref || "";
    _this19.border = null;
    _this19.extras = null;
    _this19.margin = null;
    return _this19;
  }

  return CheckButton;
}(_xfa_object.XFAObject);

var ChoiceList = /*#__PURE__*/function (_XFAObject17) {
  _inherits(ChoiceList, _XFAObject17);

  var _super20 = _createSuper(ChoiceList);

  function ChoiceList(attributes) {
    var _this20;

    _classCallCheck(this, ChoiceList);

    _this20 = _super20.call(this, TEMPLATE_NS_ID, "choiceList", true);
    _this20.commitOn = (0, _utils.getStringOption)(attributes.commitOn, ["select", "exit"]);
    _this20.id = attributes.id || "";
    _this20.open = (0, _utils.getStringOption)(attributes.open, ["userControl", "always", "multiSelect", "onEntry"]);
    _this20.textEntry = (0, _utils.getInteger)({
      data: attributes.textEntry,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this20.use = attributes.use || "";
    _this20.usehref = attributes.usehref || "";
    _this20.border = null;
    _this20.extras = null;
    _this20.margin = null;
    return _this20;
  }

  return ChoiceList;
}(_xfa_object.XFAObject);

var Color = /*#__PURE__*/function (_XFAObject18) {
  _inherits(Color, _XFAObject18);

  var _super21 = _createSuper(Color);

  function Color(attributes) {
    var _this21;

    _classCallCheck(this, Color);

    _this21 = _super21.call(this, TEMPLATE_NS_ID, "color", true);
    _this21.cSpace = (0, _utils.getStringOption)(attributes.cSpace, ["SRGB"]);
    _this21.id = attributes.id || "";
    _this21.use = attributes.use || "";
    _this21.usehref = attributes.usehref || "";
    _this21.value = (0, _utils.getColor)(attributes.value);
    _this21.extras = null;
    return _this21;
  }

  return Color;
}(_xfa_object.XFAObject);

var Comb = /*#__PURE__*/function (_XFAObject19) {
  _inherits(Comb, _XFAObject19);

  var _super22 = _createSuper(Comb);

  function Comb(attributes) {
    var _this22;

    _classCallCheck(this, Comb);

    _this22 = _super22.call(this, TEMPLATE_NS_ID, "comb");
    _this22.id = attributes.id || "";
    _this22.numberOfCells = (0, _utils.getInteger)({
      data: attributes.numberOfCells,
      defaultValue: 0,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this22.use = attributes.use || "";
    _this22.usehref = attributes.usehref || "";
    return _this22;
  }

  return Comb;
}(_xfa_object.XFAObject);

var Connect = /*#__PURE__*/function (_XFAObject20) {
  _inherits(Connect, _XFAObject20);

  var _super23 = _createSuper(Connect);

  function Connect(attributes) {
    var _this23;

    _classCallCheck(this, Connect);

    _this23 = _super23.call(this, TEMPLATE_NS_ID, "connect", true);
    _this23.connection = attributes.connection || "";
    _this23.id = attributes.id || "";
    _this23.ref = attributes.ref || "";
    _this23.usage = (0, _utils.getStringOption)(attributes.usage, ["exportAndImport", "exportOnly", "importOnly"]);
    _this23.use = attributes.use || "";
    _this23.usehref = attributes.usehref || "";
    _this23.picture = null;
    return _this23;
  }

  return Connect;
}(_xfa_object.XFAObject);

var ContentArea = /*#__PURE__*/function (_XFAObject21) {
  _inherits(ContentArea, _XFAObject21);

  var _super24 = _createSuper(ContentArea);

  function ContentArea(attributes) {
    var _this24;

    _classCallCheck(this, ContentArea);

    _this24 = _super24.call(this, TEMPLATE_NS_ID, "contentArea", true);
    _this24.h = (0, _utils.getMeasurement)(attributes.h);
    _this24.id = attributes.id || "";
    _this24.name = attributes.name || "";
    _this24.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this24.use = attributes.use || "";
    _this24.usehref = attributes.usehref || "";
    _this24.w = (0, _utils.getMeasurement)(attributes.w);
    _this24.x = (0, _utils.getMeasurement)(attributes.x);
    _this24.y = (0, _utils.getMeasurement)(attributes.y);
    _this24.desc = null;
    _this24.extras = null;
    return _this24;
  }

  return ContentArea;
}(_xfa_object.XFAObject);

var Corner = /*#__PURE__*/function (_XFAObject22) {
  _inherits(Corner, _XFAObject22);

  var _super25 = _createSuper(Corner);

  function Corner(attributes) {
    var _this25;

    _classCallCheck(this, Corner);

    _this25 = _super25.call(this, TEMPLATE_NS_ID, "corner", true);
    _this25.id = attributes.id || "";
    _this25.inverted = (0, _utils.getInteger)({
      data: attributes.inverted,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this25.join = (0, _utils.getStringOption)(attributes.join, ["square", "round"]);
    _this25.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this25.radius = (0, _utils.getMeasurement)(attributes.radius);
    _this25.stroke = (0, _utils.getStringOption)(attributes.stroke, ["solid", "dashDot", "dashDotDot", "dashed", "dotted", "embossed", "etched", "lowered", "raised"]);
    _this25.thickness = (0, _utils.getMeasurement)(attributes.thickness, "0.5pt");
    _this25.use = attributes.use || "";
    _this25.usehref = attributes.usehref || "";
    _this25.color = null;
    _this25.extras = null;
    return _this25;
  }

  _createClass(Corner, [{
    key: _xfa_object.$finalize,
    value: function value() {
      this.color = this.color || (0, _utils.getColor)(null, [0, 0, 0]);
    }
  }]);

  return Corner;
}(_xfa_object.XFAObject);

var _Date = /*#__PURE__*/function (_ContentObject) {
  _inherits(_Date, _ContentObject);

  var _super26 = _createSuper(_Date);

  function _Date(attributes) {
    var _this26;

    _classCallCheck(this, _Date);

    _this26 = _super26.call(this, TEMPLATE_NS_ID, "date");
    _this26.id = attributes.id || "";
    _this26.name = attributes.name || "";
    _this26.use = attributes.use || "";
    _this26.usehref = attributes.usehref || "";
    return _this26;
  }

  _createClass(_Date, [{
    key: _xfa_object.$finalize,
    value: function value() {
      this[_xfa_object.$content] = new _Date(this[_xfa_object.$content].trim());
    }
  }]);

  return _Date;
}(_xfa_object.ContentObject);

var DateTime = /*#__PURE__*/function (_ContentObject2) {
  _inherits(DateTime, _ContentObject2);

  var _super27 = _createSuper(DateTime);

  function DateTime(attributes) {
    var _this27;

    _classCallCheck(this, DateTime);

    _this27 = _super27.call(this, TEMPLATE_NS_ID, "dateTime");
    _this27.id = attributes.id || "";
    _this27.name = attributes.name || "";
    _this27.use = attributes.use || "";
    _this27.usehref = attributes.usehref || "";
    return _this27;
  }

  _createClass(DateTime, [{
    key: _xfa_object.$finalize,
    value: function value() {
      this[_xfa_object.$content] = new _Date(this[_xfa_object.$content].trim());
    }
  }]);

  return DateTime;
}(_xfa_object.ContentObject);

var DateTimeEdit = /*#__PURE__*/function (_XFAObject23) {
  _inherits(DateTimeEdit, _XFAObject23);

  var _super28 = _createSuper(DateTimeEdit);

  function DateTimeEdit(attributes) {
    var _this28;

    _classCallCheck(this, DateTimeEdit);

    _this28 = _super28.call(this, TEMPLATE_NS_ID, "dateTimeEdit", true);
    _this28.hScrollPolicy = (0, _utils.getStringOption)(attributes.hScrollPolicy, ["auto", "off", "on"]);
    _this28.id = attributes.id || "";
    _this28.picker = (0, _utils.getStringOption)(attributes.picker, ["host", "none"]);
    _this28.use = attributes.use || "";
    _this28.usehref = attributes.usehref || "";
    _this28.border = null;
    _this28.comb = null;
    _this28.extras = null;
    _this28.margin = null;
    return _this28;
  }

  return DateTimeEdit;
}(_xfa_object.XFAObject);

var Decimal = /*#__PURE__*/function (_ContentObject3) {
  _inherits(Decimal, _ContentObject3);

  var _super29 = _createSuper(Decimal);

  function Decimal(attributes) {
    var _this29;

    _classCallCheck(this, Decimal);

    _this29 = _super29.call(this, TEMPLATE_NS_ID, "decimal");
    _this29.fracDigits = (0, _utils.getInteger)({
      data: attributes.fracDigits,
      defaultValue: 2,
      validate: function validate(x) {
        return true;
      }
    });
    _this29.id = attributes.id || "";
    _this29.leadDigits = (0, _utils.getInteger)({
      data: attributes.leadDigits,
      defaultValue: -1,
      validate: function validate(x) {
        return true;
      }
    });
    _this29.name = attributes.name || "";
    _this29.use = attributes.use || "";
    _this29.usehref = attributes.usehref || "";
    return _this29;
  }

  _createClass(Decimal, [{
    key: _xfa_object.$finalize,
    value: function value() {
      var number = parseFloat(this[_xfa_object.$content].trim());
      this[_xfa_object.$content] = isNaN(number) ? null : number;
    }
  }]);

  return Decimal;
}(_xfa_object.ContentObject);

var DefaultUi = /*#__PURE__*/function (_XFAObject24) {
  _inherits(DefaultUi, _XFAObject24);

  var _super30 = _createSuper(DefaultUi);

  function DefaultUi(attributes) {
    var _this30;

    _classCallCheck(this, DefaultUi);

    _this30 = _super30.call(this, TEMPLATE_NS_ID, "defaultUi", true);
    _this30.id = attributes.id || "";
    _this30.use = attributes.use || "";
    _this30.usehref = attributes.usehref || "";
    _this30.extras = null;
    return _this30;
  }

  return DefaultUi;
}(_xfa_object.XFAObject);

var Desc = /*#__PURE__*/function (_XFAObject25) {
  _inherits(Desc, _XFAObject25);

  var _super31 = _createSuper(Desc);

  function Desc(attributes) {
    var _this31;

    _classCallCheck(this, Desc);

    _this31 = _super31.call(this, TEMPLATE_NS_ID, "desc", true);
    _this31.id = attributes.id || "";
    _this31.use = attributes.use || "";
    _this31.usehref = attributes.usehref || "";
    _this31["boolean"] = new _xfa_object.XFAObjectArray();
    _this31.date = new _xfa_object.XFAObjectArray();
    _this31.dateTime = new _xfa_object.XFAObjectArray();
    _this31.decimal = new _xfa_object.XFAObjectArray();
    _this31.exData = new _xfa_object.XFAObjectArray();
    _this31["float"] = new _xfa_object.XFAObjectArray();
    _this31.image = new _xfa_object.XFAObjectArray();
    _this31.integer = new _xfa_object.XFAObjectArray();
    _this31.text = new _xfa_object.XFAObjectArray();
    _this31.time = new _xfa_object.XFAObjectArray();
    return _this31;
  }

  return Desc;
}(_xfa_object.XFAObject);

var DigestMethod = /*#__PURE__*/function (_OptionObject) {
  _inherits(DigestMethod, _OptionObject);

  var _super32 = _createSuper(DigestMethod);

  function DigestMethod(attributes) {
    var _this32;

    _classCallCheck(this, DigestMethod);

    _this32 = _super32.call(this, TEMPLATE_NS_ID, "digestMethod", ["", "SHA1", "SHA256", "SHA512", "RIPEMD160"]);
    _this32.id = attributes.id || "";
    _this32.use = attributes.use || "";
    _this32.usehref = attributes.usehref || "";
    return _this32;
  }

  return DigestMethod;
}(_xfa_object.OptionObject);

var DigestMethods = /*#__PURE__*/function (_XFAObject26) {
  _inherits(DigestMethods, _XFAObject26);

  var _super33 = _createSuper(DigestMethods);

  function DigestMethods(attributes) {
    var _this33;

    _classCallCheck(this, DigestMethods);

    _this33 = _super33.call(this, TEMPLATE_NS_ID, "digestMethods", true);
    _this33.id = attributes.id || "";
    _this33.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this33.use = attributes.use || "";
    _this33.usehref = attributes.usehref || "";
    _this33.digestMethod = new _xfa_object.XFAObjectArray();
    return _this33;
  }

  return DigestMethods;
}(_xfa_object.XFAObject);

var Draw = /*#__PURE__*/function (_XFAObject27) {
  _inherits(Draw, _XFAObject27);

  var _super34 = _createSuper(Draw);

  function Draw(attributes) {
    var _this34;

    _classCallCheck(this, Draw);

    _this34 = _super34.call(this, TEMPLATE_NS_ID, "draw", true);
    _this34.anchorType = (0, _utils.getStringOption)(attributes.anchorType, ["topLeft", "bottomCenter", "bottomLeft", "bottomRight", "middleCenter", "middleLeft", "middleRight", "topCenter", "topRight"]);
    _this34.colSpan = (0, _utils.getInteger)({
      data: attributes.colSpan,
      defaultValue: 1,
      validate: function validate(x) {
        return x >= 1;
      }
    });
    _this34.h = (0, _utils.getMeasurement)(attributes.h);
    _this34.hAlign = (0, _utils.getStringOption)(attributes.hAlign, ["left", "center", "justify", "justifyAll", "radix", "right"]);
    _this34.id = attributes.id || "";
    _this34.locale = attributes.locale || "";
    _this34.maxH = (0, _utils.getMeasurement)(attributes.maxH);
    _this34.maxW = (0, _utils.getMeasurement)(attributes.maxW);
    _this34.minH = (0, _utils.getMeasurement)(attributes.minH);
    _this34.minW = (0, _utils.getMeasurement)(attributes.minW);
    _this34.name = attributes.name || "";
    _this34.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this34.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this34.rotate = (0, _utils.getFloat)({
      data: attributes.rotate,
      defaultValue: 0,
      validate: function validate(x) {
        return true;
      }
    });
    _this34.use = attributes.use || "";
    _this34.usehref = attributes.usehref || "";
    _this34.w = (0, _utils.getMeasurement)(attributes.w);
    _this34.x = (0, _utils.getMeasurement)(attributes.x);
    _this34.y = (0, _utils.getMeasurement)(attributes.y);
    _this34.assist = null;
    _this34.border = null;
    _this34.caption = null;
    _this34.desc = null;
    _this34.extras = null;
    _this34.font = null;
    _this34.keep = null;
    _this34.margin = null;
    _this34.para = null;
    _this34.traversal = null;
    _this34.ui = null;
    _this34.value = null;
    _this34.setProperty = new _xfa_object.XFAObjectArray();
    return _this34;
  }

  return Draw;
}(_xfa_object.XFAObject);

var Edge = /*#__PURE__*/function (_XFAObject28) {
  _inherits(Edge, _XFAObject28);

  var _super35 = _createSuper(Edge);

  function Edge(attributes) {
    var _this35;

    _classCallCheck(this, Edge);

    _this35 = _super35.call(this, TEMPLATE_NS_ID, "edge", true);
    _this35.cap = (0, _utils.getStringOption)(attributes.cap, ["square", "butt", "round"]);
    _this35.id = attributes.id || "";
    _this35.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this35.stroke = (0, _utils.getStringOption)(attributes.stroke, ["solid", "dashDot", "dashDotDot", "dashed", "dotted", "embossed", "etched", "lowered", "raised"]);
    _this35.thickness = (0, _utils.getMeasurement)(attributes.thickness, "0.5pt");
    _this35.use = attributes.use || "";
    _this35.usehref = attributes.usehref || "";
    _this35.color = null;
    _this35.extras = null;
    return _this35;
  }

  _createClass(Edge, [{
    key: _xfa_object.$finalize,
    value: function value() {
      this.color = this.color || (0, _utils.getColor)(null, [0, 0, 0]);
    }
  }]);

  return Edge;
}(_xfa_object.XFAObject);

var Encoding = /*#__PURE__*/function (_OptionObject2) {
  _inherits(Encoding, _OptionObject2);

  var _super36 = _createSuper(Encoding);

  function Encoding(attributes) {
    var _this36;

    _classCallCheck(this, Encoding);

    _this36 = _super36.call(this, TEMPLATE_NS_ID, "encoding", ["adbe.x509.rsa_sha1", "adbe.pkcs7.detached", "adbe.pkcs7.sha1"]);
    _this36.id = attributes.id || "";
    _this36.use = attributes.use || "";
    _this36.usehref = attributes.usehref || "";
    return _this36;
  }

  return Encoding;
}(_xfa_object.OptionObject);

var Encodings = /*#__PURE__*/function (_XFAObject29) {
  _inherits(Encodings, _XFAObject29);

  var _super37 = _createSuper(Encodings);

  function Encodings(attributes) {
    var _this37;

    _classCallCheck(this, Encodings);

    _this37 = _super37.call(this, TEMPLATE_NS_ID, "encodings", true);
    _this37.id = attributes.id || "";
    _this37.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this37.use = attributes.use || "";
    _this37.usehref = attributes.usehref || "";
    _this37.encoding = new _xfa_object.XFAObjectArray();
    return _this37;
  }

  return Encodings;
}(_xfa_object.XFAObject);

var Encrypt = /*#__PURE__*/function (_XFAObject30) {
  _inherits(Encrypt, _XFAObject30);

  var _super38 = _createSuper(Encrypt);

  function Encrypt(attributes) {
    var _this38;

    _classCallCheck(this, Encrypt);

    _this38 = _super38.call(this, TEMPLATE_NS_ID, "encrypt", true);
    _this38.id = attributes.id || "";
    _this38.use = attributes.use || "";
    _this38.usehref = attributes.usehref || "";
    _this38.certificate = null;
    return _this38;
  }

  return Encrypt;
}(_xfa_object.XFAObject);

var EncryptData = /*#__PURE__*/function (_XFAObject31) {
  _inherits(EncryptData, _XFAObject31);

  var _super39 = _createSuper(EncryptData);

  function EncryptData(attributes) {
    var _this39;

    _classCallCheck(this, EncryptData);

    _this39 = _super39.call(this, TEMPLATE_NS_ID, "encryptData", true);
    _this39.id = attributes.id || "";
    _this39.operation = (0, _utils.getStringOption)(attributes.operation, ["encrypt", "decrypt"]);
    _this39.target = attributes.target || "";
    _this39.use = attributes.use || "";
    _this39.usehref = attributes.usehref || "";
    _this39.filter = null;
    _this39.manifest = null;
    return _this39;
  }

  return EncryptData;
}(_xfa_object.XFAObject);

var Encryption = /*#__PURE__*/function (_XFAObject32) {
  _inherits(Encryption, _XFAObject32);

  var _super40 = _createSuper(Encryption);

  function Encryption(attributes) {
    var _this40;

    _classCallCheck(this, Encryption);

    _this40 = _super40.call(this, TEMPLATE_NS_ID, "encryption", true);
    _this40.id = attributes.id || "";
    _this40.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this40.use = attributes.use || "";
    _this40.usehref = attributes.usehref || "";
    _this40.certificate = new _xfa_object.XFAObjectArray();
    return _this40;
  }

  return Encryption;
}(_xfa_object.XFAObject);

var EncryptionMethod = /*#__PURE__*/function (_OptionObject3) {
  _inherits(EncryptionMethod, _OptionObject3);

  var _super41 = _createSuper(EncryptionMethod);

  function EncryptionMethod(attributes) {
    var _this41;

    _classCallCheck(this, EncryptionMethod);

    _this41 = _super41.call(this, TEMPLATE_NS_ID, "encryptionMethod", ["", "AES256-CBC", "TRIPLEDES-CBC", "AES128-CBC", "AES192-CBC"]);
    _this41.id = attributes.id || "";
    _this41.use = attributes.use || "";
    _this41.usehref = attributes.usehref || "";
    return _this41;
  }

  return EncryptionMethod;
}(_xfa_object.OptionObject);

var EncryptionMethods = /*#__PURE__*/function (_XFAObject33) {
  _inherits(EncryptionMethods, _XFAObject33);

  var _super42 = _createSuper(EncryptionMethods);

  function EncryptionMethods(attributes) {
    var _this42;

    _classCallCheck(this, EncryptionMethods);

    _this42 = _super42.call(this, TEMPLATE_NS_ID, "encryptionMethods", true);
    _this42.id = attributes.id || "";
    _this42.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this42.use = attributes.use || "";
    _this42.usehref = attributes.usehref || "";
    _this42.encryptionMethod = new _xfa_object.XFAObjectArray();
    return _this42;
  }

  return EncryptionMethods;
}(_xfa_object.XFAObject);

var Event = /*#__PURE__*/function (_XFAObject34) {
  _inherits(Event, _XFAObject34);

  var _super43 = _createSuper(Event);

  function Event(attributes) {
    var _this43;

    _classCallCheck(this, Event);

    _this43 = _super43.call(this, TEMPLATE_NS_ID, "event", true);
    _this43.activity = (0, _utils.getStringOption)(attributes.activity, ["click", "change", "docClose", "docReady", "enter", "exit", "full", "indexChange", "initialize", "mouseDown", "mouseEnter", "mouseExit", "mouseUp", "postExecute", "postOpen", "postPrint", "postSave", "postSign", "postSubmit", "preExecute", "preOpen", "prePrint", "preSave", "preSign", "preSubmit", "ready", "validationState"]);
    _this43.id = attributes.id || "";
    _this43.listen = (0, _utils.getStringOption)(attributes.listen, ["refOnly", "refAndDescendents"]);
    _this43.name = attributes.name || "";
    _this43.ref = attributes.ref || "";
    _this43.use = attributes.use || "";
    _this43.usehref = attributes.usehref || "";
    _this43.extras = null;
    _this43.encryptData = null;
    _this43.execute = null;
    _this43.script = null;
    _this43.signData = null;
    _this43.submit = null;
    return _this43;
  }

  return Event;
}(_xfa_object.XFAObject);

var ExData = /*#__PURE__*/function (_ContentObject4) {
  _inherits(ExData, _ContentObject4);

  var _super44 = _createSuper(ExData);

  function ExData(builder, attributes) {
    var _this44;

    _classCallCheck(this, ExData);

    _this44 = _super44.call(this, TEMPLATE_NS_ID, "exData");
    _this44.contentType = attributes.contentType || "";
    _this44.href = attributes.href || "";
    _this44.id = attributes.id || "";
    _this44.maxLength = (0, _utils.getInteger)({
      data: attributes.maxLength,
      defaultValue: -1,
      validate: function validate(x) {
        return x >= -1;
      }
    });
    _this44.name = attributes.name || "";
    _this44.rid = attributes.rid || "";
    _this44.transferEncoding = (0, _utils.getStringOption)(attributes.transferEncoding, ["none", "base64", "package"]);
    _this44.use = attributes.use || "";
    _this44.usehref = attributes.usehref || "";
    return _this44;
  }

  _createClass(ExData, [{
    key: _xfa_object.$onChild,
    value: function value(child) {
      if (this.contentType === "text/html" && child[_xfa_object.$namespaceId] === _namespaces.NamespaceIds.xhtml.id) {
        this[_xfa_object.$content] = child;
      } else if (this.contentType === "text/xml") {
        this[_xfa_object.$content] = child;
      }
    }
  }]);

  return ExData;
}(_xfa_object.ContentObject);

var ExObject = /*#__PURE__*/function (_XFAObject35) {
  _inherits(ExObject, _XFAObject35);

  var _super45 = _createSuper(ExObject);

  function ExObject(attributes) {
    var _this45;

    _classCallCheck(this, ExObject);

    _this45 = _super45.call(this, TEMPLATE_NS_ID, "exObject", true);
    _this45.archive = attributes.archive || "";
    _this45.classId = attributes.classId || "";
    _this45.codeBase = attributes.codeBase || "";
    _this45.codeType = attributes.codeType || "";
    _this45.id = attributes.id || "";
    _this45.name = attributes.name || "";
    _this45.use = attributes.use || "";
    _this45.usehref = attributes.usehref || "";
    _this45.extras = null;
    _this45["boolean"] = new _xfa_object.XFAObjectArray();
    _this45.date = new _xfa_object.XFAObjectArray();
    _this45.dateTime = new _xfa_object.XFAObjectArray();
    _this45.decimal = new _xfa_object.XFAObjectArray();
    _this45.exData = new _xfa_object.XFAObjectArray();
    _this45.exObject = new _xfa_object.XFAObjectArray();
    _this45["float"] = new _xfa_object.XFAObjectArray();
    _this45.image = new _xfa_object.XFAObjectArray();
    _this45.integer = new _xfa_object.XFAObjectArray();
    _this45.text = new _xfa_object.XFAObjectArray();
    _this45.time = new _xfa_object.XFAObjectArray();
    return _this45;
  }

  return ExObject;
}(_xfa_object.XFAObject);

var ExclGroup = /*#__PURE__*/function (_XFAObject36) {
  _inherits(ExclGroup, _XFAObject36);

  var _super46 = _createSuper(ExclGroup);

  function ExclGroup(attributes) {
    var _this46;

    _classCallCheck(this, ExclGroup);

    _this46 = _super46.call(this, TEMPLATE_NS_ID, "exclGroup", true);
    _this46.access = (0, _utils.getStringOption)(attributes.access, ["open", "nonInteractive", "protected", "readOnly"]);
    _this46.accessKey = attributes.accessKey || "";
    _this46.anchorType = (0, _utils.getStringOption)(attributes.anchorType, ["topLeft", "bottomCenter", "bottomLeft", "bottomRight", "middleCenter", "middleLeft", "middleRight", "topCenter", "topRight"]);
    _this46.colSpan = (0, _utils.getInteger)({
      data: attributes.colSpan,
      defaultValue: 1,
      validate: function validate(x) {
        return x >= 1;
      }
    });
    _this46.h = (0, _utils.getMeasurement)(attributes.h);
    _this46.hAlign = (0, _utils.getStringOption)(attributes.hAlign, ["left", "center", "justify", "justifyAll", "radix", "right"]);
    _this46.id = attributes.id || "";
    _this46.layout = (0, _utils.getStringOption)(attributes.layout, ["position", "lr-tb", "rl-row", "rl-tb", "row", "table", "tb"]);
    _this46.maxH = (0, _utils.getMeasurement)(attributes.maxH);
    _this46.maxW = (0, _utils.getMeasurement)(attributes.maxW);
    _this46.minH = (0, _utils.getMeasurement)(attributes.minH);
    _this46.minW = (0, _utils.getMeasurement)(attributes.minW);
    _this46.name = attributes.name || "";
    _this46.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this46.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this46.use = attributes.use || "";
    _this46.usehref = attributes.usehref || "";
    _this46.w = (0, _utils.getMeasurement)(attributes.w);
    _this46.x = (0, _utils.getMeasurement)(attributes.x);
    _this46.y = (0, _utils.getMeasurement)(attributes.y);
    _this46.assist = null;
    _this46.bind = null;
    _this46.border = null;
    _this46.calculate = null;
    _this46.caption = null;
    _this46.desc = null;
    _this46.extras = null;
    _this46.margin = null;
    _this46.para = null;
    _this46.traversal = null;
    _this46.validate = null;
    _this46.connect = new _xfa_object.XFAObjectArray();
    _this46.event = new _xfa_object.XFAObjectArray();
    _this46.field = new _xfa_object.XFAObjectArray();
    _this46.setProperty = new _xfa_object.XFAObjectArray();
    return _this46;
  }

  return ExclGroup;
}(_xfa_object.XFAObject);

var Execute = /*#__PURE__*/function (_XFAObject37) {
  _inherits(Execute, _XFAObject37);

  var _super47 = _createSuper(Execute);

  function Execute(attributes) {
    var _this47;

    _classCallCheck(this, Execute);

    _this47 = _super47.call(this, TEMPLATE_NS_ID, "execute");
    _this47.connection = attributes.connection || "";
    _this47.executeType = (0, _utils.getStringOption)(attributes.executeType, ["import", "remerge"]);
    _this47.id = attributes.id || "";
    _this47.runAt = (0, _utils.getStringOption)(attributes.runAt, ["client", "both", "server"]);
    _this47.use = attributes.use || "";
    _this47.usehref = attributes.usehref || "";
    return _this47;
  }

  return Execute;
}(_xfa_object.XFAObject);

var Extras = /*#__PURE__*/function (_XFAObject38) {
  _inherits(Extras, _XFAObject38);

  var _super48 = _createSuper(Extras);

  function Extras(attributes) {
    var _this48;

    _classCallCheck(this, Extras);

    _this48 = _super48.call(this, TEMPLATE_NS_ID, "extras", true);
    _this48.id = attributes.id || "";
    _this48.name = attributes.name || "";
    _this48.use = attributes.use || "";
    _this48.usehref = attributes.usehref || "";
    _this48["boolean"] = new _xfa_object.XFAObjectArray();
    _this48.date = new _xfa_object.XFAObjectArray();
    _this48.dateTime = new _xfa_object.XFAObjectArray();
    _this48.decimal = new _xfa_object.XFAObjectArray();
    _this48.exData = new _xfa_object.XFAObjectArray();
    _this48.extras = new _xfa_object.XFAObjectArray();
    _this48["float"] = new _xfa_object.XFAObjectArray();
    _this48.image = new _xfa_object.XFAObjectArray();
    _this48.integer = new _xfa_object.XFAObjectArray();
    _this48.text = new _xfa_object.XFAObjectArray();
    _this48.time = new _xfa_object.XFAObjectArray();
    return _this48;
  }

  return Extras;
}(_xfa_object.XFAObject);

var Field = /*#__PURE__*/function (_XFAObject39) {
  _inherits(Field, _XFAObject39);

  var _super49 = _createSuper(Field);

  function Field(attributes) {
    var _this49;

    _classCallCheck(this, Field);

    _this49 = _super49.call(this, TEMPLATE_NS_ID, "field", true);
    _this49.access = (0, _utils.getStringOption)(attributes.access, ["open", "nonInteractive", "protected", "readOnly"]);
    _this49.accessKey = attributes.accessKey || "";
    _this49.anchorType = (0, _utils.getStringOption)(attributes.anchorType, ["topLeft", "bottomCenter", "bottomLeft", "bottomRight", "middleCenter", "middleLeft", "middleRight", "topCenter", "topRight"]);
    _this49.colSpan = (0, _utils.getInteger)({
      data: attributes.colSpan,
      defaultValue: 1,
      validate: function validate(x) {
        return x >= 1;
      }
    });
    _this49.h = (0, _utils.getMeasurement)(attributes.h);
    _this49.hAlign = (0, _utils.getStringOption)(attributes.hAlign, ["left", "center", "justify", "justifyAll", "radix", "right"]);
    _this49.id = attributes.id || "";
    _this49.locale = attributes.locale || "";
    _this49.maxH = (0, _utils.getMeasurement)(attributes.maxH);
    _this49.maxW = (0, _utils.getMeasurement)(attributes.maxW);
    _this49.minH = (0, _utils.getMeasurement)(attributes.minH);
    _this49.minW = (0, _utils.getMeasurement)(attributes.minW);
    _this49.name = attributes.name || "";
    _this49.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this49.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this49.rotate = (0, _utils.getStringOption)(attributes.rotate, ["0", "angle"]);
    _this49.use = attributes.use || "";
    _this49.usehref = attributes.usehref || "";
    _this49.w = (0, _utils.getMeasurement)(attributes.w);
    _this49.x = (0, _utils.getMeasurement)(attributes.x);
    _this49.y = (0, _utils.getMeasurement)(attributes.y);
    _this49.assist = null;
    _this49.bind = null;
    _this49.border = null;
    _this49.calculate = null;
    _this49.caption = null;
    _this49.desc = null;
    _this49.extras = null;
    _this49.font = null;
    _this49.format = null;
    _this49.items = new _xfa_object.XFAObjectArray(2);
    _this49.keep = null;
    _this49.margin = null;
    _this49.para = null;
    _this49.traversal = null;
    _this49.ui = null;
    _this49.validate = null;
    _this49.value = null;
    _this49.bindItems = new _xfa_object.XFAObjectArray();
    _this49.connect = new _xfa_object.XFAObjectArray();
    _this49.event = new _xfa_object.XFAObjectArray();
    _this49.setProperty = new _xfa_object.XFAObjectArray();
    return _this49;
  }

  return Field;
}(_xfa_object.XFAObject);

var Fill = /*#__PURE__*/function (_XFAObject40) {
  _inherits(Fill, _XFAObject40);

  var _super50 = _createSuper(Fill);

  function Fill(attributes) {
    var _this50;

    _classCallCheck(this, Fill);

    _this50 = _super50.call(this, TEMPLATE_NS_ID, "fill", true);
    _this50.id = attributes.id || "";
    _this50.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this50.use = attributes.use || "";
    _this50.usehref = attributes.usehref || "";
    _this50.color = null;
    _this50.extras = null;
    _this50.linear = null;
    _this50.pattern = null;
    _this50.radial = null;
    _this50.solid = null;
    _this50.stipple = null;
    return _this50;
  }

  return Fill;
}(_xfa_object.XFAObject);

var Filter = /*#__PURE__*/function (_XFAObject41) {
  _inherits(Filter, _XFAObject41);

  var _super51 = _createSuper(Filter);

  function Filter(attributes) {
    var _this51;

    _classCallCheck(this, Filter);

    _this51 = _super51.call(this, TEMPLATE_NS_ID, "filter", true);
    _this51.addRevocationInfo = (0, _utils.getStringOption)(attributes.addRevocationInfo, ["", "required", "optional", "none"]);
    _this51.id = attributes.id || "";
    _this51.name = attributes.name || "";
    _this51.use = attributes.use || "";
    _this51.usehref = attributes.usehref || "";
    _this51.version = (0, _utils.getInteger)({
      data: _this51.version,
      defaultValue: 5,
      validate: function validate(x) {
        return x >= 1 && x <= 5;
      }
    });
    _this51.appearanceFilter = null;
    _this51.certificates = null;
    _this51.digestMethods = null;
    _this51.encodings = null;
    _this51.encryptionMethods = null;
    _this51.handler = null;
    _this51.lockDocument = null;
    _this51.mdp = null;
    _this51.reasons = null;
    _this51.timeStamp = null;
    return _this51;
  }

  return Filter;
}(_xfa_object.XFAObject);

var Float = /*#__PURE__*/function (_ContentObject5) {
  _inherits(Float, _ContentObject5);

  var _super52 = _createSuper(Float);

  function Float(attributes) {
    var _this52;

    _classCallCheck(this, Float);

    _this52 = _super52.call(this, TEMPLATE_NS_ID, "float");
    _this52.id = attributes.id || "";
    _this52.name = attributes.name || "";
    _this52.use = attributes.use || "";
    _this52.usehref = attributes.usehref || "";
    return _this52;
  }

  _createClass(Float, [{
    key: _xfa_object.$finalize,
    value: function value() {
      var number = parseFloat(this[_xfa_object.$content].trim());
      this[_xfa_object.$content] = isNaN(number) ? null : number;
    }
  }]);

  return Float;
}(_xfa_object.ContentObject);

var Font = /*#__PURE__*/function (_XFAObject42) {
  _inherits(Font, _XFAObject42);

  var _super53 = _createSuper(Font);

  function Font(attributes) {
    var _this53;

    _classCallCheck(this, Font);

    _this53 = _super53.call(this, TEMPLATE_NS_ID, "font", true);
    _this53.baselineShift = (0, _utils.getMeasurement)(attributes.baselineShift);
    _this53.fontHorizontalScale = (0, _utils.getFloat)({
      data: attributes.fontHorizontalScale,
      defaultValue: 100,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this53.fontVerticalScale = (0, _utils.getFloat)({
      data: attributes.fontVerticalScale,
      defaultValue: 100,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this53.id = attributes.id || "";
    _this53.kerningMode = (0, _utils.getStringOption)(attributes.kerningMode, ["none", "pair"]);
    _this53.letterSpacing = (0, _utils.getMeasurement)(attributes.letterSpacing, "0");
    _this53.lineThrough = (0, _utils.getInteger)({
      data: attributes.lineThrough,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1 || x === 2;
      }
    });
    _this53.lineThroughPeriod = (0, _utils.getStringOption)(attributes.lineThroughPeriod, ["all", "word"]);
    _this53.overline = (0, _utils.getInteger)({
      data: attributes.overline,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1 || x === 2;
      }
    });
    _this53.overlinePeriod = (0, _utils.getStringOption)(attributes.overlinePeriod, ["all", "word"]);
    _this53.posture = (0, _utils.getStringOption)(attributes.posture, ["normal", "italic"]);
    _this53.size = (0, _utils.getMeasurement)(attributes.size, "10pt");
    _this53.typeface = attributes.typeface || "";
    _this53.underline = (0, _utils.getInteger)({
      data: attributes.underline,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1 || x === 2;
      }
    });
    _this53.underlinePeriod = (0, _utils.getStringOption)(attributes.underlinePeriod, ["all", "word"]);
    _this53.use = attributes.use || "";
    _this53.usehref = attributes.usehref || "";
    _this53.weight = (0, _utils.getStringOption)(attributes.weight, ["normal", "bold"]);
    _this53.extras = null;
    _this53.fill = null;
    return _this53;
  }

  return Font;
}(_xfa_object.XFAObject);

var Format = /*#__PURE__*/function (_XFAObject43) {
  _inherits(Format, _XFAObject43);

  var _super54 = _createSuper(Format);

  function Format(attributes) {
    var _this54;

    _classCallCheck(this, Format);

    _this54 = _super54.call(this, TEMPLATE_NS_ID, "format", true);
    _this54.id = attributes.id || "";
    _this54.use = attributes.use || "";
    _this54.usehref = attributes.usehref || "";
    _this54.extras = null;
    _this54.picture = null;
    return _this54;
  }

  return Format;
}(_xfa_object.XFAObject);

var Handler = /*#__PURE__*/function (_StringObject3) {
  _inherits(Handler, _StringObject3);

  var _super55 = _createSuper(Handler);

  function Handler(attributes) {
    var _this55;

    _classCallCheck(this, Handler);

    _this55 = _super55.call(this, TEMPLATE_NS_ID, "handler");
    _this55.id = attributes.id || "";
    _this55.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this55.use = attributes.use || "";
    _this55.usehref = attributes.usehref || "";
    return _this55;
  }

  return Handler;
}(_xfa_object.StringObject);

var Hyphenation = /*#__PURE__*/function (_XFAObject44) {
  _inherits(Hyphenation, _XFAObject44);

  var _super56 = _createSuper(Hyphenation);

  function Hyphenation(attributes) {
    var _this56;

    _classCallCheck(this, Hyphenation);

    _this56 = _super56.call(this, TEMPLATE_NS_ID, "hyphenation");
    _this56.excludeAllCaps = (0, _utils.getInteger)({
      data: attributes.excludeAllCaps,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this56.excludeInitialCap = (0, _utils.getInteger)({
      data: attributes.excludeInitialCap,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this56.hyphenate = (0, _utils.getInteger)({
      data: attributes.hyphenate,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this56.id = attributes.id || "";
    _this56.pushCharacterCount = (0, _utils.getInteger)({
      data: attributes.pushCharacterCount,
      defaultValue: 3,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this56.remainCharacterCount = (0, _utils.getInteger)({
      data: attributes.remainCharacterCount,
      defaultValue: 3,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this56.use = attributes.use || "";
    _this56.usehref = attributes.usehref || "";
    _this56.wordCharacterCount = (0, _utils.getInteger)({
      data: attributes.wordCharacterCount,
      defaultValue: 7,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    return _this56;
  }

  return Hyphenation;
}(_xfa_object.XFAObject);

var Image = /*#__PURE__*/function (_StringObject4) {
  _inherits(Image, _StringObject4);

  var _super57 = _createSuper(Image);

  function Image(attributes) {
    var _this57;

    _classCallCheck(this, Image);

    _this57 = _super57.call(this, TEMPLATE_NS_ID, "image");
    _this57.aspect = (0, _utils.getStringOption)(attributes.aspect, ["fit", "actual", "height", "none", "width"]);
    _this57.contentType = attributes.contentType || "";
    _this57.href = attributes.href || "";
    _this57.id = attributes.id || "";
    _this57.name = attributes.name || "";
    _this57.transferEncoding = (0, _utils.getStringOption)(attributes.transferEncoding, ["base64", "none", "package"]);
    _this57.use = attributes.use || "";
    _this57.usehref = attributes.usehref || "";
    return _this57;
  }

  return Image;
}(_xfa_object.StringObject);

var ImageEdit = /*#__PURE__*/function (_XFAObject45) {
  _inherits(ImageEdit, _XFAObject45);

  var _super58 = _createSuper(ImageEdit);

  function ImageEdit(attributes) {
    var _this58;

    _classCallCheck(this, ImageEdit);

    _this58 = _super58.call(this, TEMPLATE_NS_ID, "imageEdit", true);
    _this58.data = (0, _utils.getStringOption)(attributes.data, ["link", "embed"]);
    _this58.id = attributes.id || "";
    _this58.use = attributes.use || "";
    _this58.usehref = attributes.usehref || "";
    _this58.border = null;
    _this58.extras = null;
    _this58.margin = null;
    return _this58;
  }

  return ImageEdit;
}(_xfa_object.XFAObject);

var Integer = /*#__PURE__*/function (_ContentObject6) {
  _inherits(Integer, _ContentObject6);

  var _super59 = _createSuper(Integer);

  function Integer(attributes) {
    var _this59;

    _classCallCheck(this, Integer);

    _this59 = _super59.call(this, TEMPLATE_NS_ID, "integer");
    _this59.id = attributes.id || "";
    _this59.name = attributes.name || "";
    _this59.use = attributes.use || "";
    _this59.usehref = attributes.usehref || "";
    return _this59;
  }

  _createClass(Integer, [{
    key: _xfa_object.$finalize,
    value: function value() {
      var number = parseInt(this[_xfa_object.$content].trim(), 10);
      this[_xfa_object.$content] = isNaN(number) ? null : number;
    }
  }]);

  return Integer;
}(_xfa_object.ContentObject);

var Issuers = /*#__PURE__*/function (_XFAObject46) {
  _inherits(Issuers, _XFAObject46);

  var _super60 = _createSuper(Issuers);

  function Issuers(attributes) {
    var _this60;

    _classCallCheck(this, Issuers);

    _this60 = _super60.call(this, TEMPLATE_NS_ID, "issuers", true);
    _this60.id = attributes.id || "";
    _this60.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this60.use = attributes.use || "";
    _this60.usehref = attributes.usehref || "";
    _this60.certificate = new _xfa_object.XFAObjectArray();
    return _this60;
  }

  return Issuers;
}(_xfa_object.XFAObject);

var Items = /*#__PURE__*/function (_XFAObject47) {
  _inherits(Items, _XFAObject47);

  var _super61 = _createSuper(Items);

  function Items(attributes) {
    var _this61;

    _classCallCheck(this, Items);

    _this61 = _super61.call(this, TEMPLATE_NS_ID, "items", true);
    _this61.id = attributes.id || "";
    _this61.name = attributes.name || "";
    _this61.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this61.ref = attributes.ref || "";
    _this61.save = (0, _utils.getInteger)({
      data: attributes.save,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this61.use = attributes.use || "";
    _this61.usehref = attributes.usehref || "";
    _this61["boolean"] = new _xfa_object.XFAObjectArray();
    _this61.date = new _xfa_object.XFAObjectArray();
    _this61.dateTime = new _xfa_object.XFAObjectArray();
    _this61.decimal = new _xfa_object.XFAObjectArray();
    _this61.exData = new _xfa_object.XFAObjectArray();
    _this61["float"] = new _xfa_object.XFAObjectArray();
    _this61.image = new _xfa_object.XFAObjectArray();
    _this61.integer = new _xfa_object.XFAObjectArray();
    _this61.text = new _xfa_object.XFAObjectArray();
    _this61.time = new _xfa_object.XFAObjectArray();
    return _this61;
  }

  return Items;
}(_xfa_object.XFAObject);

var Keep = /*#__PURE__*/function (_XFAObject48) {
  _inherits(Keep, _XFAObject48);

  var _super62 = _createSuper(Keep);

  function Keep(attributes) {
    var _this62;

    _classCallCheck(this, Keep);

    _this62 = _super62.call(this, TEMPLATE_NS_ID, "keep", true);
    _this62.id = attributes.id || "";
    var options = ["none", "contentArea", "pageArea"];
    _this62.intact = (0, _utils.getStringOption)(attributes.intact, options);
    _this62.next = (0, _utils.getStringOption)(attributes.next, options);
    _this62.previous = (0, _utils.getStringOption)(attributes.previous, options);
    _this62.use = attributes.use || "";
    _this62.usehref = attributes.usehref || "";
    _this62.extras = null;
    return _this62;
  }

  return Keep;
}(_xfa_object.XFAObject);

var KeyUsage = /*#__PURE__*/function (_XFAObject49) {
  _inherits(KeyUsage, _XFAObject49);

  var _super63 = _createSuper(KeyUsage);

  function KeyUsage(attributes) {
    var _this63;

    _classCallCheck(this, KeyUsage);

    _this63 = _super63.call(this, TEMPLATE_NS_ID, "keyUsage");
    var options = ["", "yes", "no"];
    _this63.crlSign = (0, _utils.getStringOption)(attributes.crlSign, options);
    _this63.dataEncipherment = (0, _utils.getStringOption)(attributes.dataEncipherment, options);
    _this63.decipherOnly = (0, _utils.getStringOption)(attributes.decipherOnly, options);
    _this63.digitalSignature = (0, _utils.getStringOption)(attributes.digitalSignature, options);
    _this63.encipherOnly = (0, _utils.getStringOption)(attributes.encipherOnly, options);
    _this63.id = attributes.id || "";
    _this63.keyAgreement = (0, _utils.getStringOption)(attributes.keyAgreement, options);
    _this63.keyCertSign = (0, _utils.getStringOption)(attributes.keyCertSign, options);
    _this63.keyEncipherment = (0, _utils.getStringOption)(attributes.keyEncipherment, options);
    _this63.nonRepudiation = (0, _utils.getStringOption)(attributes.nonRepudiation, options);
    _this63.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this63.use = attributes.use || "";
    _this63.usehref = attributes.usehref || "";
    return _this63;
  }

  return KeyUsage;
}(_xfa_object.XFAObject);

var Line = /*#__PURE__*/function (_XFAObject50) {
  _inherits(Line, _XFAObject50);

  var _super64 = _createSuper(Line);

  function Line(attributes) {
    var _this64;

    _classCallCheck(this, Line);

    _this64 = _super64.call(this, TEMPLATE_NS_ID, "line", true);
    _this64.hand = (0, _utils.getStringOption)(attributes.hand, ["even", "left", "right"]);
    _this64.id = attributes.id || "";
    _this64.slope = (0, _utils.getStringOption)(attributes.slope, ["\\", "/"]);
    _this64.use = attributes.use || "";
    _this64.usehref = attributes.usehref || "";
    _this64.edge = null;
    return _this64;
  }

  return Line;
}(_xfa_object.XFAObject);

var Linear = /*#__PURE__*/function (_XFAObject51) {
  _inherits(Linear, _XFAObject51);

  var _super65 = _createSuper(Linear);

  function Linear(attributes) {
    var _this65;

    _classCallCheck(this, Linear);

    _this65 = _super65.call(this, TEMPLATE_NS_ID, "linear", true);
    _this65.id = attributes.id || "";
    _this65.type = (0, _utils.getStringOption)(attributes.type, ["toRight", "toBottom", "toLeft", "toTop"]);
    _this65.use = attributes.use || "";
    _this65.usehref = attributes.usehref || "";
    _this65.color = null;
    _this65.extras = null;
    return _this65;
  }

  return Linear;
}(_xfa_object.XFAObject);

var LockDocument = /*#__PURE__*/function (_ContentObject7) {
  _inherits(LockDocument, _ContentObject7);

  var _super66 = _createSuper(LockDocument);

  function LockDocument(attributes) {
    var _this66;

    _classCallCheck(this, LockDocument);

    _this66 = _super66.call(this, TEMPLATE_NS_ID, "lockDocument");
    _this66.id = attributes.id || "";
    _this66.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this66.use = attributes.use || "";
    _this66.usehref = attributes.usehref || "";
    return _this66;
  }

  _createClass(LockDocument, [{
    key: _xfa_object.$finalize,
    value: function value() {
      this[_xfa_object.$content] = (0, _utils.getStringOption)(this[_xfa_object.$content], ["auto", "0", "1"]);
    }
  }]);

  return LockDocument;
}(_xfa_object.ContentObject);

var Manifest = /*#__PURE__*/function (_XFAObject52) {
  _inherits(Manifest, _XFAObject52);

  var _super67 = _createSuper(Manifest);

  function Manifest(attributes) {
    var _this67;

    _classCallCheck(this, Manifest);

    _this67 = _super67.call(this, TEMPLATE_NS_ID, "manifest", true);
    _this67.action = (0, _utils.getStringOption)(attributes.action, ["include", "all", "exclude"]);
    _this67.id = attributes.id || "";
    _this67.name = attributes.name || "";
    _this67.use = attributes.use || "";
    _this67.usehref = attributes.usehref || "";
    _this67.extras = null;
    _this67.ref = new _xfa_object.XFAObjectArray();
    return _this67;
  }

  return Manifest;
}(_xfa_object.XFAObject);

var Margin = /*#__PURE__*/function (_XFAObject53) {
  _inherits(Margin, _XFAObject53);

  var _super68 = _createSuper(Margin);

  function Margin(attributes) {
    var _this68;

    _classCallCheck(this, Margin);

    _this68 = _super68.call(this, TEMPLATE_NS_ID, "margin", true);
    _this68.bottomInset = (0, _utils.getMeasurement)(attributes.bottomInset, "0");
    _this68.id = attributes.id || "";
    _this68.leftInset = (0, _utils.getMeasurement)(attributes.leftInset, "0");
    _this68.rightInset = (0, _utils.getMeasurement)(attributes.rightInset, "0");
    _this68.topInset = (0, _utils.getMeasurement)(attributes.topInset, "0");
    _this68.use = attributes.use || "";
    _this68.usehref = attributes.usehref || "";
    _this68.extras = null;
    return _this68;
  }

  return Margin;
}(_xfa_object.XFAObject);

var Mdp = /*#__PURE__*/function (_XFAObject54) {
  _inherits(Mdp, _XFAObject54);

  var _super69 = _createSuper(Mdp);

  function Mdp(attributes) {
    var _this69;

    _classCallCheck(this, Mdp);

    _this69 = _super69.call(this, TEMPLATE_NS_ID, "mdp");
    _this69.id = attributes.id || "";
    _this69.permissions = (0, _utils.getInteger)({
      data: attributes.permissions,
      defaultValue: 2,
      validate: function validate(x) {
        return x === 1 || x === 3;
      }
    });
    _this69.signatureType = (0, _utils.getStringOption)(attributes.signatureType, ["filler", "author"]);
    _this69.use = attributes.use || "";
    _this69.usehref = attributes.usehref || "";
    return _this69;
  }

  return Mdp;
}(_xfa_object.XFAObject);

var Medium = /*#__PURE__*/function (_XFAObject55) {
  _inherits(Medium, _XFAObject55);

  var _super70 = _createSuper(Medium);

  function Medium(attributes) {
    var _this70;

    _classCallCheck(this, Medium);

    _this70 = _super70.call(this, TEMPLATE_NS_ID, "medium");
    _this70.id = attributes.id || "";
    _this70.imagingBBox = (0, _utils.getBBox)(attributes.imagingBBox);
    _this70["long"] = (0, _utils.getMeasurement)(attributes["long"]);
    _this70.orientation = (0, _utils.getStringOption)(attributes.orientation, ["portrait", "landscape"]);
    _this70["short"] = (0, _utils.getMeasurement)(attributes["short"]);
    _this70.stock = attributes.stock || "";
    _this70.trayIn = (0, _utils.getStringOption)(attributes.trayIn, ["auto", "delegate", "pageFront"]);
    _this70.trayOut = (0, _utils.getStringOption)(attributes.trayOut, ["auto", "delegate"]);
    _this70.use = attributes.use || "";
    _this70.usehref = attributes.usehref || "";
    return _this70;
  }

  return Medium;
}(_xfa_object.XFAObject);

var Message = /*#__PURE__*/function (_XFAObject56) {
  _inherits(Message, _XFAObject56);

  var _super71 = _createSuper(Message);

  function Message(attributes) {
    var _this71;

    _classCallCheck(this, Message);

    _this71 = _super71.call(this, TEMPLATE_NS_ID, "message", true);
    _this71.id = attributes.id || "";
    _this71.use = attributes.use || "";
    _this71.usehref = attributes.usehref || "";
    _this71.text = new _xfa_object.XFAObjectArray();
    return _this71;
  }

  return Message;
}(_xfa_object.XFAObject);

var NumericEdit = /*#__PURE__*/function (_XFAObject57) {
  _inherits(NumericEdit, _XFAObject57);

  var _super72 = _createSuper(NumericEdit);

  function NumericEdit(attributes) {
    var _this72;

    _classCallCheck(this, NumericEdit);

    _this72 = _super72.call(this, TEMPLATE_NS_ID, "numericEdit", true);
    _this72.hScrollPolicy = (0, _utils.getStringOption)(attributes.hScrollPolicy, ["auto", "off", "on"]);
    _this72.id = attributes.id || "";
    _this72.use = attributes.use || "";
    _this72.usehref = attributes.usehref || "";
    _this72.border = null;
    _this72.comb = null;
    _this72.extras = null;
    _this72.margin = null;
    return _this72;
  }

  return NumericEdit;
}(_xfa_object.XFAObject);

var Occur = /*#__PURE__*/function (_XFAObject58) {
  _inherits(Occur, _XFAObject58);

  var _super73 = _createSuper(Occur);

  function Occur(attributes) {
    var _this73;

    _classCallCheck(this, Occur);

    _this73 = _super73.call(this, TEMPLATE_NS_ID, "occur", true);
    _this73.id = attributes.id || "";
    _this73.initial = (0, _utils.getInteger)({
      data: attributes.initial,
      defaultValue: 1,
      validate: function validate(x) {
        return true;
      }
    });
    _this73.max = (0, _utils.getInteger)({
      data: attributes.max,
      defaultValue: 1,
      validate: function validate(x) {
        return true;
      }
    });
    _this73.min = (0, _utils.getInteger)({
      data: attributes.min,
      defaultValue: 1,
      validate: function validate(x) {
        return true;
      }
    });
    _this73.use = attributes.use || "";
    _this73.usehref = attributes.usehref || "";
    _this73.extras = null;
    return _this73;
  }

  return Occur;
}(_xfa_object.XFAObject);

var Oid = /*#__PURE__*/function (_StringObject5) {
  _inherits(Oid, _StringObject5);

  var _super74 = _createSuper(Oid);

  function Oid(attributes) {
    var _this74;

    _classCallCheck(this, Oid);

    _this74 = _super74.call(this, TEMPLATE_NS_ID, "oid");
    _this74.id = attributes.id || "";
    _this74.name = attributes.name || "";
    _this74.use = attributes.use || "";
    _this74.usehref = attributes.usehref || "";
    return _this74;
  }

  return Oid;
}(_xfa_object.StringObject);

var Oids = /*#__PURE__*/function (_XFAObject59) {
  _inherits(Oids, _XFAObject59);

  var _super75 = _createSuper(Oids);

  function Oids(attributes) {
    var _this75;

    _classCallCheck(this, Oids);

    _this75 = _super75.call(this, TEMPLATE_NS_ID, "oids", true);
    _this75.id = attributes.id || "";
    _this75.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this75.use = attributes.use || "";
    _this75.usehref = attributes.usehref || "";
    _this75.oid = new _xfa_object.XFAObjectArray();
    return _this75;
  }

  return Oids;
}(_xfa_object.XFAObject);

var Overflow = /*#__PURE__*/function (_XFAObject60) {
  _inherits(Overflow, _XFAObject60);

  var _super76 = _createSuper(Overflow);

  function Overflow(attributes) {
    var _this76;

    _classCallCheck(this, Overflow);

    _this76 = _super76.call(this, TEMPLATE_NS_ID, "overflow");
    _this76.id = attributes.id || "";
    _this76.leader = attributes.leader || "";
    _this76.target = attributes.target || "";
    _this76.trailer = attributes.trailer || "";
    _this76.use = attributes.use || "";
    _this76.usehref = attributes.usehref || "";
    return _this76;
  }

  return Overflow;
}(_xfa_object.XFAObject);

var PageArea = /*#__PURE__*/function (_XFAObject61) {
  _inherits(PageArea, _XFAObject61);

  var _super77 = _createSuper(PageArea);

  function PageArea(attributes) {
    var _this77;

    _classCallCheck(this, PageArea);

    _this77 = _super77.call(this, TEMPLATE_NS_ID, "pageArea", true);
    _this77.blankOrNotBlank = (0, _utils.getStringOption)(attributes.blankOrNotBlank, ["any", "blank", "notBlank"]);
    _this77.id = attributes.id || "";
    _this77.initialNumber = (0, _utils.getInteger)({
      data: attributes.initialNumber,
      defaultValue: 1,
      validate: function validate(x) {
        return true;
      }
    });
    _this77.name = attributes.name || "";
    _this77.numbered = (0, _utils.getInteger)({
      data: attributes.numbered,
      defaultValue: 1,
      validate: function validate(x) {
        return true;
      }
    });
    _this77.oddOrEven = (0, _utils.getStringOption)(attributes.oddOrEven, ["any", "even", "odd"]);
    _this77.pagePosition = (0, _utils.getStringOption)(attributes.pagePosition, ["any", "first", "last", "only", "rest"]);
    _this77.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this77.use = attributes.use || "";
    _this77.usehref = attributes.usehref || "";
    _this77.desc = null;
    _this77.extras = null;
    _this77.medium = null;
    _this77.occur = null;
    _this77.area = new _xfa_object.XFAObjectArray();
    _this77.contentArea = new _xfa_object.XFAObjectArray();
    _this77.draw = new _xfa_object.XFAObjectArray();
    _this77.exclGroup = new _xfa_object.XFAObjectArray();
    _this77.field = new _xfa_object.XFAObjectArray();
    _this77.subform = new _xfa_object.XFAObjectArray();
    return _this77;
  }

  return PageArea;
}(_xfa_object.XFAObject);

var PageSet = /*#__PURE__*/function (_XFAObject62) {
  _inherits(PageSet, _XFAObject62);

  var _super78 = _createSuper(PageSet);

  function PageSet(attributes) {
    var _this78;

    _classCallCheck(this, PageSet);

    _this78 = _super78.call(this, TEMPLATE_NS_ID, "pageSet", true);
    _this78.duplexImposition = (0, _utils.getStringOption)(attributes.duplexImposition, ["longEdge", "shortEdge"]);
    _this78.id = attributes.id || "";
    _this78.name = attributes.name || "";
    _this78.relation = (0, _utils.getStringOption)(attributes.relation, ["orderedOccurrence", "duplexPaginated", "simplexPaginated"]);
    _this78.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this78.use = attributes.use || "";
    _this78.usehref = attributes.usehref || "";
    _this78.extras = null;
    _this78.occur = null;
    _this78.pageArea = new _xfa_object.XFAObjectArray();
    _this78.pageSet = new _xfa_object.XFAObjectArray();
    return _this78;
  }

  return PageSet;
}(_xfa_object.XFAObject);

var Para = /*#__PURE__*/function (_XFAObject63) {
  _inherits(Para, _XFAObject63);

  var _super79 = _createSuper(Para);

  function Para(attributes) {
    var _this79;

    _classCallCheck(this, Para);

    _this79 = _super79.call(this, TEMPLATE_NS_ID, "para", true);
    _this79.hAlign = (0, _utils.getStringOption)(attributes.hAlign, ["left", "center", "justify", "justifyAll", "radix", "right"]);
    _this79.id = attributes.id || "";
    _this79.lineHeight = (0, _utils.getMeasurement)(attributes.lineHeight, ["0pt", "measurement"]);
    _this79.marginLeft = (0, _utils.getMeasurement)(attributes.marginLeft, "0");
    _this79.marginRight = (0, _utils.getMeasurement)(attributes.marginRight, "0");
    _this79.orphans = (0, _utils.getInteger)({
      data: attributes.orphans,
      defaultValue: 0,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this79.preserve = attributes.preserve || "";
    _this79.radixOffset = (0, _utils.getMeasurement)(attributes.radixOffset, "0");
    _this79.spaceAbove = (0, _utils.getMeasurement)(attributes.spaceAbove, "0");
    _this79.spaceBelow = (0, _utils.getMeasurement)(attributes.spaceBelow, "0");
    _this79.tabDefault = attributes.tabDefault ? (0, _utils.getMeasurement)(_this79.tabDefault) : null;
    _this79.tabStops = (attributes.tabStops || "").trim().split(/\s+/).map(function (x, i) {
      return i % 2 === 1 ? (0, _utils.getMeasurement)(x) : x;
    });
    _this79.textIndent = (0, _utils.getMeasurement)(attributes.textIndent, "0");
    _this79.use = attributes.use || "";
    _this79.usehref = attributes.usehref || "";
    _this79.vAlign = (0, _utils.getStringOption)(attributes.vAlign, ["top", "bottom", "middle"]);
    _this79.widows = (0, _utils.getInteger)({
      data: attributes.widows,
      defaultValue: 0,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this79.hyphenation = null;
    return _this79;
  }

  return Para;
}(_xfa_object.XFAObject);

var PasswordEdit = /*#__PURE__*/function (_XFAObject64) {
  _inherits(PasswordEdit, _XFAObject64);

  var _super80 = _createSuper(PasswordEdit);

  function PasswordEdit(attributes) {
    var _this80;

    _classCallCheck(this, PasswordEdit);

    _this80 = _super80.call(this, TEMPLATE_NS_ID, "passwordEdit", true);
    _this80.hScrollPolicy = (0, _utils.getStringOption)(attributes.hScrollPolicy, ["auto", "off", "on"]);
    _this80.id = attributes.id || "";
    _this80.passwordChar = attributes.passwordChar || "*";
    _this80.use = attributes.use || "";
    _this80.usehref = attributes.usehref || "";
    _this80.border = null;
    _this80.extras = null;
    _this80.margin = null;
    return _this80;
  }

  return PasswordEdit;
}(_xfa_object.XFAObject);

var Pattern = /*#__PURE__*/function (_XFAObject65) {
  _inherits(Pattern, _XFAObject65);

  var _super81 = _createSuper(Pattern);

  function Pattern(attributes) {
    var _this81;

    _classCallCheck(this, Pattern);

    _this81 = _super81.call(this, TEMPLATE_NS_ID, "pattern", true);
    _this81.id = attributes.id || "";
    _this81.type = (0, _utils.getStringOption)(attributes.type, ["crossHatch", "crossDiagonal", "diagonalLeft", "diagonalRight", "horizontal", "vertical"]);
    _this81.use = attributes.use || "";
    _this81.usehref = attributes.usehref || "";
    _this81.color = null;
    _this81.extras = null;
    return _this81;
  }

  return Pattern;
}(_xfa_object.XFAObject);

var Picture = /*#__PURE__*/function (_StringObject6) {
  _inherits(Picture, _StringObject6);

  var _super82 = _createSuper(Picture);

  function Picture(attributes) {
    var _this82;

    _classCallCheck(this, Picture);

    _this82 = _super82.call(this, TEMPLATE_NS_ID, "picture");
    _this82.id = attributes.id || "";
    _this82.use = attributes.use || "";
    _this82.usehref = attributes.usehref || "";
    return _this82;
  }

  return Picture;
}(_xfa_object.StringObject);

var Proto = /*#__PURE__*/function (_XFAObject66) {
  _inherits(Proto, _XFAObject66);

  var _super83 = _createSuper(Proto);

  function Proto(attributes) {
    var _this83;

    _classCallCheck(this, Proto);

    _this83 = _super83.call(this, TEMPLATE_NS_ID, "proto", true);
    _this83.appearanceFilter = new _xfa_object.XFAObjectArray();
    _this83.arc = new _xfa_object.XFAObjectArray();
    _this83.area = new _xfa_object.XFAObjectArray();
    _this83.assist = new _xfa_object.XFAObjectArray();
    _this83.barcode = new _xfa_object.XFAObjectArray();
    _this83.bindItems = new _xfa_object.XFAObjectArray();
    _this83.bookend = new _xfa_object.XFAObjectArray();
    _this83["boolean"] = new _xfa_object.XFAObjectArray();
    _this83.border = new _xfa_object.XFAObjectArray();
    _this83["break"] = new _xfa_object.XFAObjectArray();
    _this83.breakAfter = new _xfa_object.XFAObjectArray();
    _this83.breakBefore = new _xfa_object.XFAObjectArray();
    _this83.button = new _xfa_object.XFAObjectArray();
    _this83.calculate = new _xfa_object.XFAObjectArray();
    _this83.caption = new _xfa_object.XFAObjectArray();
    _this83.certificate = new _xfa_object.XFAObjectArray();
    _this83.certificates = new _xfa_object.XFAObjectArray();
    _this83.checkButton = new _xfa_object.XFAObjectArray();
    _this83.choiceList = new _xfa_object.XFAObjectArray();
    _this83.color = new _xfa_object.XFAObjectArray();
    _this83.comb = new _xfa_object.XFAObjectArray();
    _this83.connect = new _xfa_object.XFAObjectArray();
    _this83.contentArea = new _xfa_object.XFAObjectArray();
    _this83.corner = new _xfa_object.XFAObjectArray();
    _this83.date = new _xfa_object.XFAObjectArray();
    _this83.dateTime = new _xfa_object.XFAObjectArray();
    _this83.dateTimeEdit = new _xfa_object.XFAObjectArray();
    _this83.decimal = new _xfa_object.XFAObjectArray();
    _this83.defaultUi = new _xfa_object.XFAObjectArray();
    _this83.desc = new _xfa_object.XFAObjectArray();
    _this83.digestMethod = new _xfa_object.XFAObjectArray();
    _this83.digestMethods = new _xfa_object.XFAObjectArray();
    _this83.draw = new _xfa_object.XFAObjectArray();
    _this83.edge = new _xfa_object.XFAObjectArray();
    _this83.encoding = new _xfa_object.XFAObjectArray();
    _this83.encodings = new _xfa_object.XFAObjectArray();
    _this83.encrypt = new _xfa_object.XFAObjectArray();
    _this83.encryptData = new _xfa_object.XFAObjectArray();
    _this83.encryption = new _xfa_object.XFAObjectArray();
    _this83.encryptionMethod = new _xfa_object.XFAObjectArray();
    _this83.encryptionMethods = new _xfa_object.XFAObjectArray();
    _this83.event = new _xfa_object.XFAObjectArray();
    _this83.exData = new _xfa_object.XFAObjectArray();
    _this83.exObject = new _xfa_object.XFAObjectArray();
    _this83.exclGroup = new _xfa_object.XFAObjectArray();
    _this83.execute = new _xfa_object.XFAObjectArray();
    _this83.extras = new _xfa_object.XFAObjectArray();
    _this83.field = new _xfa_object.XFAObjectArray();
    _this83.fill = new _xfa_object.XFAObjectArray();
    _this83.filter = new _xfa_object.XFAObjectArray();
    _this83["float"] = new _xfa_object.XFAObjectArray();
    _this83.font = new _xfa_object.XFAObjectArray();
    _this83.format = new _xfa_object.XFAObjectArray();
    _this83.handler = new _xfa_object.XFAObjectArray();
    _this83.hyphenation = new _xfa_object.XFAObjectArray();
    _this83.image = new _xfa_object.XFAObjectArray();
    _this83.imageEdit = new _xfa_object.XFAObjectArray();
    _this83.integer = new _xfa_object.XFAObjectArray();
    _this83.issuers = new _xfa_object.XFAObjectArray();
    _this83.items = new _xfa_object.XFAObjectArray();
    _this83.keep = new _xfa_object.XFAObjectArray();
    _this83.keyUsage = new _xfa_object.XFAObjectArray();
    _this83.line = new _xfa_object.XFAObjectArray();
    _this83.linear = new _xfa_object.XFAObjectArray();
    _this83.lockDocument = new _xfa_object.XFAObjectArray();
    _this83.manifest = new _xfa_object.XFAObjectArray();
    _this83.margin = new _xfa_object.XFAObjectArray();
    _this83.mdp = new _xfa_object.XFAObjectArray();
    _this83.medium = new _xfa_object.XFAObjectArray();
    _this83.message = new _xfa_object.XFAObjectArray();
    _this83.numericEdit = new _xfa_object.XFAObjectArray();
    _this83.occur = new _xfa_object.XFAObjectArray();
    _this83.oid = new _xfa_object.XFAObjectArray();
    _this83.oids = new _xfa_object.XFAObjectArray();
    _this83.overflow = new _xfa_object.XFAObjectArray();
    _this83.pageArea = new _xfa_object.XFAObjectArray();
    _this83.pageSet = new _xfa_object.XFAObjectArray();
    _this83.para = new _xfa_object.XFAObjectArray();
    _this83.passwordEdit = new _xfa_object.XFAObjectArray();
    _this83.pattern = new _xfa_object.XFAObjectArray();
    _this83.picture = new _xfa_object.XFAObjectArray();
    _this83.radial = new _xfa_object.XFAObjectArray();
    _this83.reason = new _xfa_object.XFAObjectArray();
    _this83.reasons = new _xfa_object.XFAObjectArray();
    _this83.rectangle = new _xfa_object.XFAObjectArray();
    _this83.ref = new _xfa_object.XFAObjectArray();
    _this83.script = new _xfa_object.XFAObjectArray();
    _this83.setProperty = new _xfa_object.XFAObjectArray();
    _this83.signData = new _xfa_object.XFAObjectArray();
    _this83.signature = new _xfa_object.XFAObjectArray();
    _this83.signing = new _xfa_object.XFAObjectArray();
    _this83.solid = new _xfa_object.XFAObjectArray();
    _this83.speak = new _xfa_object.XFAObjectArray();
    _this83.stipple = new _xfa_object.XFAObjectArray();
    _this83.subform = new _xfa_object.XFAObjectArray();
    _this83.subformSet = new _xfa_object.XFAObjectArray();
    _this83.subjectDN = new _xfa_object.XFAObjectArray();
    _this83.subjectDNs = new _xfa_object.XFAObjectArray();
    _this83.submit = new _xfa_object.XFAObjectArray();
    _this83.text = new _xfa_object.XFAObjectArray();
    _this83.textEdit = new _xfa_object.XFAObjectArray();
    _this83.time = new _xfa_object.XFAObjectArray();
    _this83.timeStamp = new _xfa_object.XFAObjectArray();
    _this83.toolTip = new _xfa_object.XFAObjectArray();
    _this83.traversal = new _xfa_object.XFAObjectArray();
    _this83.traverse = new _xfa_object.XFAObjectArray();
    _this83.ui = new _xfa_object.XFAObjectArray();
    _this83.validate = new _xfa_object.XFAObjectArray();
    _this83.value = new _xfa_object.XFAObjectArray();
    _this83.variables = new _xfa_object.XFAObjectArray();
    return _this83;
  }

  return Proto;
}(_xfa_object.XFAObject);

var Radial = /*#__PURE__*/function (_XFAObject67) {
  _inherits(Radial, _XFAObject67);

  var _super84 = _createSuper(Radial);

  function Radial(attributes) {
    var _this84;

    _classCallCheck(this, Radial);

    _this84 = _super84.call(this, TEMPLATE_NS_ID, "radial", true);
    _this84.id = attributes.id || "";
    _this84.type = (0, _utils.getStringOption)(attributes.type, ["toEdge", "toCenter"]);
    _this84.use = attributes.use || "";
    _this84.usehref = attributes.usehref || "";
    _this84.color = null;
    _this84.extras = null;
    return _this84;
  }

  return Radial;
}(_xfa_object.XFAObject);

var Reason = /*#__PURE__*/function (_StringObject7) {
  _inherits(Reason, _StringObject7);

  var _super85 = _createSuper(Reason);

  function Reason(attributes) {
    var _this85;

    _classCallCheck(this, Reason);

    _this85 = _super85.call(this, TEMPLATE_NS_ID, "reason");
    _this85.id = attributes.id || "";
    _this85.name = attributes.name || "";
    _this85.use = attributes.use || "";
    _this85.usehref = attributes.usehref || "";
    return _this85;
  }

  return Reason;
}(_xfa_object.StringObject);

var Reasons = /*#__PURE__*/function (_XFAObject68) {
  _inherits(Reasons, _XFAObject68);

  var _super86 = _createSuper(Reasons);

  function Reasons(attributes) {
    var _this86;

    _classCallCheck(this, Reasons);

    _this86 = _super86.call(this, TEMPLATE_NS_ID, "reasons", true);
    _this86.id = attributes.id || "";
    _this86.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this86.use = attributes.use || "";
    _this86.usehref = attributes.usehref || "";
    _this86.reason = new _xfa_object.XFAObjectArray();
    return _this86;
  }

  return Reasons;
}(_xfa_object.XFAObject);

var Rectangle = /*#__PURE__*/function (_XFAObject69) {
  _inherits(Rectangle, _XFAObject69);

  var _super87 = _createSuper(Rectangle);

  function Rectangle(attributes) {
    var _this87;

    _classCallCheck(this, Rectangle);

    _this87 = _super87.call(this, TEMPLATE_NS_ID, "rectangle", true);
    _this87.hand = (0, _utils.getStringOption)(attributes.hand, ["even", "left", "right"]);
    _this87.id = attributes.id || "";
    _this87.use = attributes.use || "";
    _this87.usehref = attributes.usehref || "";
    _this87.corner = new _xfa_object.XFAObjectArray(4);
    _this87.edge = new _xfa_object.XFAObjectArray(4);
    _this87.fill = null;
    return _this87;
  }

  return Rectangle;
}(_xfa_object.XFAObject);

var RefElement = /*#__PURE__*/function (_StringObject8) {
  _inherits(RefElement, _StringObject8);

  var _super88 = _createSuper(RefElement);

  function RefElement(attributes) {
    var _this88;

    _classCallCheck(this, RefElement);

    _this88 = _super88.call(this, TEMPLATE_NS_ID, "ref");
    _this88.id = attributes.id || "";
    _this88.use = attributes.use || "";
    _this88.usehref = attributes.usehref || "";
    return _this88;
  }

  return RefElement;
}(_xfa_object.StringObject);

var Script = /*#__PURE__*/function (_StringObject9) {
  _inherits(Script, _StringObject9);

  var _super89 = _createSuper(Script);

  function Script(attributes) {
    var _this89;

    _classCallCheck(this, Script);

    _this89 = _super89.call(this, TEMPLATE_NS_ID, "script");
    _this89.binding = attributes.binding || "";
    _this89.contentType = attributes.contentType || "";
    _this89.id = attributes.id || "";
    _this89.name = attributes.name || "";
    _this89.runAt = (0, _utils.getStringOption)(attributes.runAt, ["client", "both", "server"]);
    _this89.use = attributes.use || "";
    _this89.usehref = attributes.usehref || "";
    return _this89;
  }

  return Script;
}(_xfa_object.StringObject);

var SetProperty = /*#__PURE__*/function (_XFAObject70) {
  _inherits(SetProperty, _XFAObject70);

  var _super90 = _createSuper(SetProperty);

  function SetProperty(attributes) {
    var _this90;

    _classCallCheck(this, SetProperty);

    _this90 = _super90.call(this, TEMPLATE_NS_ID, "setProperty");
    _this90.connection = attributes.connection || "";
    _this90.ref = attributes.ref || "";
    _this90.target = attributes.target || "";
    return _this90;
  }

  return SetProperty;
}(_xfa_object.XFAObject);

var SignData = /*#__PURE__*/function (_XFAObject71) {
  _inherits(SignData, _XFAObject71);

  var _super91 = _createSuper(SignData);

  function SignData(attributes) {
    var _this91;

    _classCallCheck(this, SignData);

    _this91 = _super91.call(this, TEMPLATE_NS_ID, "signData", true);
    _this91.id = attributes.id || "";
    _this91.operation = (0, _utils.getStringOption)(attributes.operation, ["sign", "clear", "verify"]);
    _this91.ref = attributes.ref || "";
    _this91.target = attributes.target || "";
    _this91.use = attributes.use || "";
    _this91.usehref = attributes.usehref || "";
    _this91.filter = null;
    _this91.manifest = null;
    return _this91;
  }

  return SignData;
}(_xfa_object.XFAObject);

var Signature = /*#__PURE__*/function (_XFAObject72) {
  _inherits(Signature, _XFAObject72);

  var _super92 = _createSuper(Signature);

  function Signature(attributes) {
    var _this92;

    _classCallCheck(this, Signature);

    _this92 = _super92.call(this, TEMPLATE_NS_ID, "signature", true);
    _this92.id = attributes.id || "";
    _this92.type = (0, _utils.getStringOption)(attributes.type, ["PDF1.3", "PDF1.6"]);
    _this92.use = attributes.use || "";
    _this92.usehref = attributes.usehref || "";
    _this92.border = null;
    _this92.extras = null;
    _this92.filter = null;
    _this92.manifest = null;
    _this92.margin = null;
    return _this92;
  }

  return Signature;
}(_xfa_object.XFAObject);

var Signing = /*#__PURE__*/function (_XFAObject73) {
  _inherits(Signing, _XFAObject73);

  var _super93 = _createSuper(Signing);

  function Signing(attributes) {
    var _this93;

    _classCallCheck(this, Signing);

    _this93 = _super93.call(this, TEMPLATE_NS_ID, "signing", true);
    _this93.id = attributes.id || "";
    _this93.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this93.use = attributes.use || "";
    _this93.usehref = attributes.usehref || "";
    _this93.certificate = new _xfa_object.XFAObjectArray();
    return _this93;
  }

  return Signing;
}(_xfa_object.XFAObject);

var Solid = /*#__PURE__*/function (_XFAObject74) {
  _inherits(Solid, _XFAObject74);

  var _super94 = _createSuper(Solid);

  function Solid(attributes) {
    var _this94;

    _classCallCheck(this, Solid);

    _this94 = _super94.call(this, TEMPLATE_NS_ID, "solid", true);
    _this94.id = attributes.id || "";
    _this94.use = attributes.use || "";
    _this94.usehref = attributes.usehref || "";
    _this94.extras = null;
    return _this94;
  }

  return Solid;
}(_xfa_object.XFAObject);

var Speak = /*#__PURE__*/function (_StringObject10) {
  _inherits(Speak, _StringObject10);

  var _super95 = _createSuper(Speak);

  function Speak(attributes) {
    var _this95;

    _classCallCheck(this, Speak);

    _this95 = _super95.call(this, TEMPLATE_NS_ID, "speak");
    _this95.disable = (0, _utils.getInteger)({
      data: attributes.disable,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this95.id = attributes.id || "";
    _this95.priority = (0, _utils.getStringOption)(attributes.priority, ["custom", "caption", "name", "toolTip"]);
    _this95.rid = attributes.rid || "";
    _this95.use = attributes.use || "";
    _this95.usehref = attributes.usehref || "";
    return _this95;
  }

  return Speak;
}(_xfa_object.StringObject);

var Stipple = /*#__PURE__*/function (_XFAObject75) {
  _inherits(Stipple, _XFAObject75);

  var _super96 = _createSuper(Stipple);

  function Stipple(attributes) {
    var _this96;

    _classCallCheck(this, Stipple);

    _this96 = _super96.call(this, TEMPLATE_NS_ID, "stipple", true);
    _this96.id = attributes.id || "";
    _this96.rate = (0, _utils.getInteger)({
      data: attributes.rate,
      defaultValue: 50,
      validate: function validate(x) {
        return x >= 0 && x <= 100;
      }
    });
    _this96.use = attributes.use || "";
    _this96.usehref = attributes.usehref || "";
    _this96.color = null;
    _this96.extras = null;
    return _this96;
  }

  return Stipple;
}(_xfa_object.XFAObject);

var Subform = /*#__PURE__*/function (_XFAObject76) {
  _inherits(Subform, _XFAObject76);

  var _super97 = _createSuper(Subform);

  function Subform(attributes) {
    var _this97;

    _classCallCheck(this, Subform);

    _this97 = _super97.call(this, TEMPLATE_NS_ID, "subform", true);
    _this97.access = (0, _utils.getStringOption)(attributes.access, ["open", "nonInteractive", "protected", "readOnly"]);
    _this97.allowMacro = (0, _utils.getInteger)({
      data: attributes.allowMacro,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this97.anchorType = (0, _utils.getStringOption)(attributes.anchorType, ["topLeft", "bottomCenter", "bottomLeft", "bottomRight", "middleCenter", "middleLeft", "middleRight", "topCenter", "topRight"]);
    _this97.colSpan = (0, _utils.getInteger)({
      data: attributes.colSpan,
      defaultValue: 1,
      validate: function validate(x) {
        return x >= 1;
      }
    });
    _this97.columnWidths = (attributes.columnWidths || "").trim().split(/\s+/).map(function (x) {
      return x === "-1" ? -1 : (0, _utils.getMeasurement)(x);
    });
    _this97.h = (0, _utils.getMeasurement)(attributes.h);
    _this97.hAlign = (0, _utils.getStringOption)(attributes.hAlign, ["left", "center", "justify", "justifyAll", "radix", "right"]);
    _this97.id = attributes.id || "";
    _this97.layout = (0, _utils.getStringOption)(attributes.layout, ["position", "lr-tb", "rl-row", "rl-tb", "row", "table", "tb"]);
    _this97.locale = attributes.locale || "";
    _this97.maxH = (0, _utils.getMeasurement)(attributes.maxH);
    _this97.maxW = (0, _utils.getMeasurement)(attributes.maxW);
    _this97.mergeMode = (0, _utils.getStringOption)(attributes.mergeMode, ["consumeData", "matchTemplate"]);
    _this97.minH = (0, _utils.getMeasurement)(attributes.minH);
    _this97.minW = (0, _utils.getMeasurement)(attributes.minW);
    _this97.name = attributes.name || "";
    _this97.presence = (0, _utils.getStringOption)(attributes.presence, ["visible", "hidden", "inactive", "invisible"]);
    _this97.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this97.restoreState = (0, _utils.getStringOption)(attributes.restoreState, ["manual", "auto"]);
    _this97.scope = (0, _utils.getStringOption)(attributes.scope, ["name", "none"]);
    _this97.use = attributes.use || "";
    _this97.usehref = attributes.usehref || "";
    _this97.w = (0, _utils.getMeasurement)(attributes.w);
    _this97.x = (0, _utils.getMeasurement)(attributes.x);
    _this97.y = (0, _utils.getMeasurement)(attributes.y);
    _this97.assist = null;
    _this97.bind = null;
    _this97.bookend = null;
    _this97.border = null;
    _this97["break"] = null;
    _this97.calculate = null;
    _this97.desc = null;
    _this97.extras = null;
    _this97.keep = null;
    _this97.margin = null;
    _this97.occur = null;
    _this97.overflow = null;
    _this97.pageSet = null;
    _this97.para = null;
    _this97.traversal = null;
    _this97.validate = null;
    _this97.variables = null;
    _this97.area = new _xfa_object.XFAObjectArray();
    _this97.breakAfter = new _xfa_object.XFAObjectArray();
    _this97.breakBefore = new _xfa_object.XFAObjectArray();
    _this97.connect = new _xfa_object.XFAObjectArray();
    _this97.draw = new _xfa_object.XFAObjectArray();
    _this97.event = new _xfa_object.XFAObjectArray();
    _this97.exObject = new _xfa_object.XFAObjectArray();
    _this97.exclGroup = new _xfa_object.XFAObjectArray();
    _this97.field = new _xfa_object.XFAObjectArray();
    _this97.proto = new _xfa_object.XFAObjectArray();
    _this97.setProperty = new _xfa_object.XFAObjectArray();
    _this97.subform = new _xfa_object.XFAObjectArray();
    _this97.subformSet = new _xfa_object.XFAObjectArray();
    return _this97;
  }

  return Subform;
}(_xfa_object.XFAObject);

var SubformSet = /*#__PURE__*/function (_XFAObject77) {
  _inherits(SubformSet, _XFAObject77);

  var _super98 = _createSuper(SubformSet);

  function SubformSet(attributes) {
    var _this98;

    _classCallCheck(this, SubformSet);

    _this98 = _super98.call(this, TEMPLATE_NS_ID, "subformSet", true);
    _this98.id = attributes.id || "";
    _this98.name = attributes.name || "";
    _this98.relation = (0, _utils.getStringOption)(attributes.relation, ["ordered", "choice", "unordered"]);
    _this98.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this98.use = attributes.use || "";
    _this98.usehref = attributes.usehref || "";
    _this98.bookend = null;
    _this98["break"] = null;
    _this98.desc = null;
    _this98.extras = null;
    _this98.occur = null;
    _this98.overflow = null;
    _this98.breakAfter = new _xfa_object.XFAObjectArray();
    _this98.breakBefore = new _xfa_object.XFAObjectArray();
    _this98.subform = new _xfa_object.XFAObjectArray();
    _this98.subformSet = new _xfa_object.XFAObjectArray();
    return _this98;
  }

  return SubformSet;
}(_xfa_object.XFAObject);

var SubjectDN = /*#__PURE__*/function (_ContentObject8) {
  _inherits(SubjectDN, _ContentObject8);

  var _super99 = _createSuper(SubjectDN);

  function SubjectDN(attributes) {
    var _this99;

    _classCallCheck(this, SubjectDN);

    _this99 = _super99.call(this, TEMPLATE_NS_ID, "subjectDN");
    _this99.delimiter = attributes.delimiter || ",";
    _this99.id = attributes.id || "";
    _this99.name = attributes.name || "";
    _this99.use = attributes.use || "";
    _this99.usehref = attributes.usehref || "";
    return _this99;
  }

  _createClass(SubjectDN, [{
    key: _xfa_object.$finalize,
    value: function value() {
      this[_xfa_object.$content] = new Map(this[_xfa_object.$content].split(this.delimiter).map(function (kv) {
        kv = kv.split("=", 2);
        kv[0] = kv[0].trim();
        return kv;
      }));
    }
  }]);

  return SubjectDN;
}(_xfa_object.ContentObject);

var SubjectDNs = /*#__PURE__*/function (_XFAObject78) {
  _inherits(SubjectDNs, _XFAObject78);

  var _super100 = _createSuper(SubjectDNs);

  function SubjectDNs(attributes) {
    var _this100;

    _classCallCheck(this, SubjectDNs);

    _this100 = _super100.call(this, TEMPLATE_NS_ID, "subjectDNs", true);
    _this100.id = attributes.id || "";
    _this100.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this100.use = attributes.use || "";
    _this100.usehref = attributes.usehref || "";
    _this100.subjectDN = new _xfa_object.XFAObjectArray();
    return _this100;
  }

  return SubjectDNs;
}(_xfa_object.XFAObject);

var Submit = /*#__PURE__*/function (_XFAObject79) {
  _inherits(Submit, _XFAObject79);

  var _super101 = _createSuper(Submit);

  function Submit(attributes) {
    var _this101;

    _classCallCheck(this, Submit);

    _this101 = _super101.call(this, TEMPLATE_NS_ID, "submit", true);
    _this101.embedPDF = (0, _utils.getInteger)({
      data: attributes.embedPDF,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this101.format = (0, _utils.getStringOption)(attributes.format, ["xdp", "formdata", "pdf", "urlencoded", "xfd", "xml"]);
    _this101.id = attributes.id || "";
    _this101.target = attributes.target || "";
    _this101.textEncoding = (0, _utils.getKeyword)({
      data: attributes.textEncoding ? attributes.textEncoding.toLowerCase() : "",
      defaultValue: "",
      validate: function validate(k) {
        return ["utf-8", "big-five", "fontspecific", "gbk", "gb-18030", "gb-2312", "ksc-5601", "none", "shift-jis", "ucs-2", "utf-16"].includes(k) || k.match(/iso-8859-[0-9]{2}/);
      }
    });
    _this101.use = attributes.use || "";
    _this101.usehref = attributes.usehref || "";
    _this101.xdpContent = attributes.xdpContent || "";
    _this101.encrypt = null;
    _this101.encryptData = new _xfa_object.XFAObjectArray();
    _this101.signData = new _xfa_object.XFAObjectArray();
    return _this101;
  }

  return Submit;
}(_xfa_object.XFAObject);

var Template = /*#__PURE__*/function (_XFAObject80) {
  _inherits(Template, _XFAObject80);

  var _super102 = _createSuper(Template);

  function Template(attributes) {
    var _this102;

    _classCallCheck(this, Template);

    _this102 = _super102.call(this, TEMPLATE_NS_ID, "template", true);
    _this102.baseProfile = (0, _utils.getStringOption)(attributes.baseProfile, ["full", "interactiveForms"]);
    _this102.extras = null;
    _this102.subform = new _xfa_object.XFAObjectArray();
    return _this102;
  }

  return Template;
}(_xfa_object.XFAObject);

var Text = /*#__PURE__*/function (_ContentObject9) {
  _inherits(Text, _ContentObject9);

  var _super103 = _createSuper(Text);

  function Text(attributes) {
    var _this103;

    _classCallCheck(this, Text);

    _this103 = _super103.call(this, TEMPLATE_NS_ID, "text");
    _this103.id = attributes.id || "";
    _this103.maxChars = (0, _utils.getInteger)({
      data: attributes.maxChars,
      defaultValue: 0,
      validate: function validate(x) {
        return x >= 0;
      }
    });
    _this103.name = attributes.name || "";
    _this103.rid = attributes.rid || "";
    _this103.use = attributes.use || "";
    _this103.usehref = attributes.usehref || "";
    return _this103;
  }

  _createClass(Text, [{
    key: _xfa_object.$onChild,
    value: function value(child) {
      if (child[_xfa_object.$namespaceId] === _namespaces.NamespaceIds.xhtml.id) {
        this[_xfa_object.$content] = child;
      } else {
        (0, _util.warn)("XFA - Invalid content in Text: ".concat(child[_xfa_object.$nodeName], "."));
      }
    }
  }]);

  return Text;
}(_xfa_object.ContentObject);

var TextEdit = /*#__PURE__*/function (_XFAObject81) {
  _inherits(TextEdit, _XFAObject81);

  var _super104 = _createSuper(TextEdit);

  function TextEdit(attributes) {
    var _this104;

    _classCallCheck(this, TextEdit);

    _this104 = _super104.call(this, TEMPLATE_NS_ID, "textEdit", true);
    _this104.allowRichText = (0, _utils.getInteger)({
      data: attributes.allowRichText,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this104.hScrollPolicy = (0, _utils.getStringOption)(attributes.hScrollPolicy, ["auto", "off", "on"]);
    _this104.id = attributes.id || "";
    _this104.multiLine = (0, _utils.getInteger)({
      data: attributes.multiLine,
      defaultValue: 1,
      validate: function validate(x) {
        return x === 0;
      }
    });
    _this104.use = attributes.use || "";
    _this104.usehref = attributes.usehref || "";
    _this104.vScrollPolicy = (0, _utils.getStringOption)(attributes.vScrollPolicy, ["auto", "off", "on"]);
    _this104.border = null;
    _this104.comb = null;
    _this104.extras = null;
    _this104.margin = null;
    return _this104;
  }

  return TextEdit;
}(_xfa_object.XFAObject);

var Time = /*#__PURE__*/function (_StringObject11) {
  _inherits(Time, _StringObject11);

  var _super105 = _createSuper(Time);

  function Time(attributes) {
    var _this105;

    _classCallCheck(this, Time);

    _this105 = _super105.call(this, TEMPLATE_NS_ID, "time");
    _this105.id = attributes.id || "";
    _this105.name = attributes.name || "";
    _this105.use = attributes.use || "";
    _this105.usehref = attributes.usehref || "";
    return _this105;
  }

  _createClass(Time, [{
    key: _xfa_object.$finalize,
    value: function value() {
      this[_xfa_object.$content] = new _Date(this[_xfa_object.$content]);
    }
  }]);

  return Time;
}(_xfa_object.StringObject);

var TimeStamp = /*#__PURE__*/function (_XFAObject82) {
  _inherits(TimeStamp, _XFAObject82);

  var _super106 = _createSuper(TimeStamp);

  function TimeStamp(attributes) {
    var _this106;

    _classCallCheck(this, TimeStamp);

    _this106 = _super106.call(this, TEMPLATE_NS_ID, "timeStamp");
    _this106.id = attributes.id || "";
    _this106.server = attributes.server || "";
    _this106.type = (0, _utils.getStringOption)(attributes.type, ["optional", "required"]);
    _this106.use = attributes.use || "";
    _this106.usehref = attributes.usehref || "";
    return _this106;
  }

  return TimeStamp;
}(_xfa_object.XFAObject);

var ToolTip = /*#__PURE__*/function (_StringObject12) {
  _inherits(ToolTip, _StringObject12);

  var _super107 = _createSuper(ToolTip);

  function ToolTip(attributes) {
    var _this107;

    _classCallCheck(this, ToolTip);

    _this107 = _super107.call(this, TEMPLATE_NS_ID, "toolTip");
    _this107.id = attributes.id || "";
    _this107.rid = attributes.rid || "";
    _this107.use = attributes.use || "";
    _this107.usehref = attributes.usehref || "";
    return _this107;
  }

  return ToolTip;
}(_xfa_object.StringObject);

var Traversal = /*#__PURE__*/function (_XFAObject83) {
  _inherits(Traversal, _XFAObject83);

  var _super108 = _createSuper(Traversal);

  function Traversal(attributes) {
    var _this108;

    _classCallCheck(this, Traversal);

    _this108 = _super108.call(this, TEMPLATE_NS_ID, "traversal", true);
    _this108.id = attributes.id || "";
    _this108.use = attributes.use || "";
    _this108.usehref = attributes.usehref || "";
    _this108.extras = null;
    _this108.traverse = new _xfa_object.XFAObjectArray();
    return _this108;
  }

  return Traversal;
}(_xfa_object.XFAObject);

var Traverse = /*#__PURE__*/function (_XFAObject84) {
  _inherits(Traverse, _XFAObject84);

  var _super109 = _createSuper(Traverse);

  function Traverse(attributes) {
    var _this109;

    _classCallCheck(this, Traverse);

    _this109 = _super109.call(this, TEMPLATE_NS_ID, "traverse", true);
    _this109.id = attributes.id || "";
    _this109.operation = (0, _utils.getStringOption)(attributes.operation, ["next", "back", "down", "first", "left", "right", "up"]);
    _this109.ref = attributes.ref || "";
    _this109.use = attributes.use || "";
    _this109.usehref = attributes.usehref || "";
    _this109.extras = null;
    _this109.script = null;
    return _this109;
  }

  _createClass(Traverse, [{
    key: "name",
    get: function get() {
      return this.operation;
    }
  }, {
    key: _xfa_object.$isTransparent,
    value: function value() {
      return false;
    }
  }]);

  return Traverse;
}(_xfa_object.XFAObject);

var Ui = /*#__PURE__*/function (_XFAObject85) {
  _inherits(Ui, _XFAObject85);

  var _super110 = _createSuper(Ui);

  function Ui(attributes) {
    var _this110;

    _classCallCheck(this, Ui);

    _this110 = _super110.call(this, TEMPLATE_NS_ID, "ui", true);
    _this110.id = attributes.id || "";
    _this110.use = attributes.use || "";
    _this110.usehref = attributes.usehref || "";
    _this110.extras = null;
    _this110.picture = null;
    _this110.barcode = null;
    _this110.button = null;
    _this110.checkButton = null;
    _this110.choiceList = null;
    _this110.dateTimeEdit = null;
    _this110.defaultUi = null;
    _this110.imageEdit = null;
    _this110.numericEdit = null;
    _this110.passwordEdit = null;
    _this110.signature = null;
    _this110.textEdit = null;
    return _this110;
  }

  return Ui;
}(_xfa_object.XFAObject);

var Validate = /*#__PURE__*/function (_XFAObject86) {
  _inherits(Validate, _XFAObject86);

  var _super111 = _createSuper(Validate);

  function Validate(attributes) {
    var _this111;

    _classCallCheck(this, Validate);

    _this111 = _super111.call(this, TEMPLATE_NS_ID, "validate", true);
    _this111.formatTest = (0, _utils.getStringOption)(attributes.formatTest, ["warning", "disabled", "error"]);
    _this111.id = attributes.id || "";
    _this111.nullTest = (0, _utils.getStringOption)(attributes.nullTest, ["disabled", "error", "warning"]);
    _this111.scriptTest = (0, _utils.getStringOption)(attributes.scriptTest, ["error", "disabled", "warning"]);
    _this111.use = attributes.use || "";
    _this111.usehref = attributes.usehref || "";
    _this111.extras = null;
    _this111.message = null;
    _this111.picture = null;
    _this111.script = null;
    return _this111;
  }

  return Validate;
}(_xfa_object.XFAObject);

var Value = /*#__PURE__*/function (_XFAObject87) {
  _inherits(Value, _XFAObject87);

  var _super112 = _createSuper(Value);

  function Value(attributes) {
    var _this112;

    _classCallCheck(this, Value);

    _this112 = _super112.call(this, TEMPLATE_NS_ID, "value", true);
    _this112.id = attributes.id || "";
    _this112.override = (0, _utils.getInteger)({
      data: attributes.override,
      defaultValue: 0,
      validate: function validate(x) {
        return x === 1;
      }
    });
    _this112.relevant = (0, _utils.getRelevant)(attributes.relevant);
    _this112.use = attributes.use || "";
    _this112.usehref = attributes.usehref || "";
    _this112.arc = null;
    _this112["boolean"] = null;
    _this112.date = null;
    _this112.dateTime = null;
    _this112.decimal = null;
    _this112.exData = null;
    _this112["float"] = null;
    _this112.image = null;
    _this112.integer = null;
    _this112.line = null;
    _this112.rectangle = null;
    _this112.text = null;
    _this112.time = null;
    return _this112;
  }

  return Value;
}(_xfa_object.XFAObject);

var Variables = /*#__PURE__*/function (_XFAObject88) {
  _inherits(Variables, _XFAObject88);

  var _super113 = _createSuper(Variables);

  function Variables(attributes) {
    var _this113;

    _classCallCheck(this, Variables);

    _this113 = _super113.call(this, TEMPLATE_NS_ID, "variables", true);
    _this113.id = attributes.id || "";
    _this113.use = attributes.use || "";
    _this113.usehref = attributes.usehref || "";
    _this113["boolean"] = new _xfa_object.XFAObjectArray();
    _this113.date = new _xfa_object.XFAObjectArray();
    _this113.dateTime = new _xfa_object.XFAObjectArray();
    _this113.decimal = new _xfa_object.XFAObjectArray();
    _this113.exData = new _xfa_object.XFAObjectArray();
    _this113["float"] = new _xfa_object.XFAObjectArray();
    _this113.image = new _xfa_object.XFAObjectArray();
    _this113.integer = new _xfa_object.XFAObjectArray();
    _this113.manifest = new _xfa_object.XFAObjectArray();
    _this113.script = new _xfa_object.XFAObjectArray();
    _this113.text = new _xfa_object.XFAObjectArray();
    _this113.time = new _xfa_object.XFAObjectArray();
    return _this113;
  }

  _createClass(Variables, [{
    key: _xfa_object.$isTransparent,
    value: function value() {
      return true;
    }
  }]);

  return Variables;
}(_xfa_object.XFAObject);

var TemplateNamespace = /*#__PURE__*/function () {
  function TemplateNamespace() {
    _classCallCheck(this, TemplateNamespace);
  }

  _createClass(TemplateNamespace, null, [{
    key: _namespaces.$buildXFAObject,
    value: function value(name, attributes) {
      if (TemplateNamespace.hasOwnProperty(name)) {
        return TemplateNamespace[name](attributes);
      }

      return undefined;
    }
  }, {
    key: "appearanceFilter",
    value: function appearanceFilter(attrs) {
      return new AppearanceFilter(attrs);
    }
  }, {
    key: "arc",
    value: function arc(attrs) {
      return new Arc(attrs);
    }
  }, {
    key: "area",
    value: function area(attrs) {
      return new Area(attrs);
    }
  }, {
    key: "assist",
    value: function assist(attrs) {
      return new Assist(attrs);
    }
  }, {
    key: "barcode",
    value: function barcode(attrs) {
      return new Barcode(attrs);
    }
  }, {
    key: "bind",
    value: function bind(attrs) {
      return new Bind(attrs);
    }
  }, {
    key: "bindItems",
    value: function bindItems(attrs) {
      return new BindItems(attrs);
    }
  }, {
    key: "bookend",
    value: function bookend(attrs) {
      return new Bookend(attrs);
    }
  }, {
    key: "boolean",
    value: function boolean(attrs) {
      return new BooleanElement(attrs);
    }
  }, {
    key: "border",
    value: function border(attrs) {
      return new Border(attrs);
    }
  }, {
    key: "break",
    value: function _break(attrs) {
      return new Break(attrs);
    }
  }, {
    key: "breakAfter",
    value: function breakAfter(attrs) {
      return new BreakAfter(attrs);
    }
  }, {
    key: "breakBefore",
    value: function breakBefore(attrs) {
      return new BreakBefore(attrs);
    }
  }, {
    key: "button",
    value: function button(attrs) {
      return new Button(attrs);
    }
  }, {
    key: "calculate",
    value: function calculate(attrs) {
      return new Calculate(attrs);
    }
  }, {
    key: "caption",
    value: function caption(attrs) {
      return new Caption(attrs);
    }
  }, {
    key: "certificate",
    value: function certificate(attrs) {
      return new Certificate(attrs);
    }
  }, {
    key: "certificates",
    value: function certificates(attrs) {
      return new Certificates(attrs);
    }
  }, {
    key: "checkButton",
    value: function checkButton(attrs) {
      return new CheckButton(attrs);
    }
  }, {
    key: "choiceList",
    value: function choiceList(attrs) {
      return new ChoiceList(attrs);
    }
  }, {
    key: "color",
    value: function color(attrs) {
      return new Color(attrs);
    }
  }, {
    key: "comb",
    value: function comb(attrs) {
      return new Comb(attrs);
    }
  }, {
    key: "connect",
    value: function connect(attrs) {
      return new Connect(attrs);
    }
  }, {
    key: "contentArea",
    value: function contentArea(attrs) {
      return new ContentArea(attrs);
    }
  }, {
    key: "corner",
    value: function corner(attrs) {
      return new Corner(attrs);
    }
  }, {
    key: "date",
    value: function date(attrs) {
      return new _Date(attrs);
    }
  }, {
    key: "dateTime",
    value: function dateTime(attrs) {
      return new DateTime(attrs);
    }
  }, {
    key: "dateTimeEdit",
    value: function dateTimeEdit(attrs) {
      return new DateTimeEdit(attrs);
    }
  }, {
    key: "decimal",
    value: function decimal(attrs) {
      return new Decimal(attrs);
    }
  }, {
    key: "defaultUi",
    value: function defaultUi(attrs) {
      return new DefaultUi(attrs);
    }
  }, {
    key: "desc",
    value: function desc(attrs) {
      return new Desc(attrs);
    }
  }, {
    key: "digestMethod",
    value: function digestMethod(attrs) {
      return new DigestMethod(attrs);
    }
  }, {
    key: "digestMethods",
    value: function digestMethods(attrs) {
      return new DigestMethods(attrs);
    }
  }, {
    key: "draw",
    value: function draw(attrs) {
      return new Draw(attrs);
    }
  }, {
    key: "edge",
    value: function edge(attrs) {
      return new Edge(attrs);
    }
  }, {
    key: "encoding",
    value: function encoding(attrs) {
      return new Encoding(attrs);
    }
  }, {
    key: "encodings",
    value: function encodings(attrs) {
      return new Encodings(attrs);
    }
  }, {
    key: "encrypt",
    value: function encrypt(attrs) {
      return new Encrypt(attrs);
    }
  }, {
    key: "encryptData",
    value: function encryptData(attrs) {
      return new EncryptData(attrs);
    }
  }, {
    key: "encryption",
    value: function encryption(attrs) {
      return new Encryption(attrs);
    }
  }, {
    key: "encryptionMethod",
    value: function encryptionMethod(attrs) {
      return new EncryptionMethod(attrs);
    }
  }, {
    key: "encryptionMethods",
    value: function encryptionMethods(attrs) {
      return new EncryptionMethods(attrs);
    }
  }, {
    key: "event",
    value: function event(attrs) {
      return new Event(attrs);
    }
  }, {
    key: "exData",
    value: function exData(attrs) {
      return new ExData(attrs);
    }
  }, {
    key: "exObject",
    value: function exObject(attrs) {
      return new ExObject(attrs);
    }
  }, {
    key: "exclGroup",
    value: function exclGroup(attrs) {
      return new ExclGroup(attrs);
    }
  }, {
    key: "execute",
    value: function execute(attrs) {
      return new Execute(attrs);
    }
  }, {
    key: "extras",
    value: function extras(attrs) {
      return new Extras(attrs);
    }
  }, {
    key: "field",
    value: function field(attrs) {
      return new Field(attrs);
    }
  }, {
    key: "fill",
    value: function fill(attrs) {
      return new Fill(attrs);
    }
  }, {
    key: "filter",
    value: function filter(attrs) {
      return new Filter(attrs);
    }
  }, {
    key: "float",
    value: function float(attrs) {
      return new Float(attrs);
    }
  }, {
    key: "font",
    value: function font(attrs) {
      return new Font(attrs);
    }
  }, {
    key: "format",
    value: function format(attrs) {
      return new Format(attrs);
    }
  }, {
    key: "handler",
    value: function handler(attrs) {
      return new Handler(attrs);
    }
  }, {
    key: "hyphenation",
    value: function hyphenation(attrs) {
      return new Hyphenation(attrs);
    }
  }, {
    key: "image",
    value: function image(attrs) {
      return new Image(attrs);
    }
  }, {
    key: "imageEdit",
    value: function imageEdit(attrs) {
      return new ImageEdit(attrs);
    }
  }, {
    key: "integer",
    value: function integer(attrs) {
      return new Integer(attrs);
    }
  }, {
    key: "issuers",
    value: function issuers(attrs) {
      return new Issuers(attrs);
    }
  }, {
    key: "items",
    value: function items(attrs) {
      return new Items(attrs);
    }
  }, {
    key: "keep",
    value: function keep(attrs) {
      return new Keep(attrs);
    }
  }, {
    key: "keyUsage",
    value: function keyUsage(attrs) {
      return new KeyUsage(attrs);
    }
  }, {
    key: "line",
    value: function line(attrs) {
      return new Line(attrs);
    }
  }, {
    key: "linear",
    value: function linear(attrs) {
      return new Linear(attrs);
    }
  }, {
    key: "lockDocument",
    value: function lockDocument(attrs) {
      return new LockDocument(attrs);
    }
  }, {
    key: "manifest",
    value: function manifest(attrs) {
      return new Manifest(attrs);
    }
  }, {
    key: "margin",
    value: function margin(attrs) {
      return new Margin(attrs);
    }
  }, {
    key: "mdp",
    value: function mdp(attrs) {
      return new Mdp(attrs);
    }
  }, {
    key: "medium",
    value: function medium(attrs) {
      return new Medium(attrs);
    }
  }, {
    key: "message",
    value: function message(attrs) {
      return new Message(attrs);
    }
  }, {
    key: "numericEdit",
    value: function numericEdit(attrs) {
      return new NumericEdit(attrs);
    }
  }, {
    key: "occur",
    value: function occur(attrs) {
      return new Occur(attrs);
    }
  }, {
    key: "oid",
    value: function oid(attrs) {
      return new Oid(attrs);
    }
  }, {
    key: "oids",
    value: function oids(attrs) {
      return new Oids(attrs);
    }
  }, {
    key: "overflow",
    value: function overflow(attrs) {
      return new Overflow(attrs);
    }
  }, {
    key: "pageArea",
    value: function pageArea(attrs) {
      return new PageArea(attrs);
    }
  }, {
    key: "pageSet",
    value: function pageSet(attrs) {
      return new PageSet(attrs);
    }
  }, {
    key: "para",
    value: function para(attrs) {
      return new Para(attrs);
    }
  }, {
    key: "passwordEdit",
    value: function passwordEdit(attrs) {
      return new PasswordEdit(attrs);
    }
  }, {
    key: "pattern",
    value: function pattern(attrs) {
      return new Pattern(attrs);
    }
  }, {
    key: "picture",
    value: function picture(attrs) {
      return new Picture(attrs);
    }
  }, {
    key: "proto",
    value: function proto(attrs) {
      return new Proto(attrs);
    }
  }, {
    key: "radial",
    value: function radial(attrs) {
      return new Radial(attrs);
    }
  }, {
    key: "reason",
    value: function reason(attrs) {
      return new Reason(attrs);
    }
  }, {
    key: "reasons",
    value: function reasons(attrs) {
      return new Reasons(attrs);
    }
  }, {
    key: "rectangle",
    value: function rectangle(attrs) {
      return new Rectangle(attrs);
    }
  }, {
    key: "ref",
    value: function ref(attrs) {
      return new RefElement(attrs);
    }
  }, {
    key: "script",
    value: function script(attrs) {
      return new Script(attrs);
    }
  }, {
    key: "setProperty",
    value: function setProperty(attrs) {
      return new SetProperty(attrs);
    }
  }, {
    key: "signData",
    value: function signData(attrs) {
      return new SignData(attrs);
    }
  }, {
    key: "signature",
    value: function signature(attrs) {
      return new Signature(attrs);
    }
  }, {
    key: "signing",
    value: function signing(attrs) {
      return new Signing(attrs);
    }
  }, {
    key: "solid",
    value: function solid(attrs) {
      return new Solid(attrs);
    }
  }, {
    key: "speak",
    value: function speak(attrs) {
      return new Speak(attrs);
    }
  }, {
    key: "stipple",
    value: function stipple(attrs) {
      return new Stipple(attrs);
    }
  }, {
    key: "subform",
    value: function subform(attrs) {
      return new Subform(attrs);
    }
  }, {
    key: "subformSet",
    value: function subformSet(attrs) {
      return new SubformSet(attrs);
    }
  }, {
    key: "subjectDN",
    value: function subjectDN(attrs) {
      return new SubjectDN(attrs);
    }
  }, {
    key: "subjectDNs",
    value: function subjectDNs(attrs) {
      return new SubjectDNs(attrs);
    }
  }, {
    key: "submit",
    value: function submit(attrs) {
      return new Submit(attrs);
    }
  }, {
    key: "template",
    value: function template(attrs) {
      return new Template(attrs);
    }
  }, {
    key: "text",
    value: function text(attrs) {
      return new Text(attrs);
    }
  }, {
    key: "textEdit",
    value: function textEdit(attrs) {
      return new TextEdit(attrs);
    }
  }, {
    key: "time",
    value: function time(attrs) {
      return new Time(attrs);
    }
  }, {
    key: "timeStamp",
    value: function timeStamp(attrs) {
      return new TimeStamp(attrs);
    }
  }, {
    key: "toolTip",
    value: function toolTip(attrs) {
      return new ToolTip(attrs);
    }
  }, {
    key: "traversal",
    value: function traversal(attrs) {
      return new Traversal(attrs);
    }
  }, {
    key: "traverse",
    value: function traverse(attrs) {
      return new Traverse(attrs);
    }
  }, {
    key: "ui",
    value: function ui(attrs) {
      return new Ui(attrs);
    }
  }, {
    key: "validate",
    value: function validate(attrs) {
      return new Validate(attrs);
    }
  }, {
    key: "value",
    value: function value(attrs) {
      return new Value(attrs);
    }
  }, {
    key: "variables",
    value: function variables(attrs) {
      return new Variables(attrs);
    }
  }]);

  return TemplateNamespace;
}();

exports.TemplateNamespace = TemplateNamespace;