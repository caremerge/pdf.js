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
exports.CFFTopDict = exports.CFFStrings = exports.CFFStandardStrings = exports.CFFPrivateDict = exports.CFFParser = exports.CFFIndex = exports.CFFHeader = exports.CFFFDSelect = exports.CFFCompiler = exports.CFFCharset = exports.CFF = void 0;

var _util = require("../shared/util.js");

var _charsets = require("./charsets.js");

var _encodings = require("./encodings.js");

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MAX_SUBR_NESTING = 10;
var CFFStandardStrings = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"];
exports.CFFStandardStrings = CFFStandardStrings;
var NUM_STANDARD_CFF_STRINGS = 391;

var CFFParser = function CFFParserClosure() {
  var CharstringValidationData = [null, {
    id: "hstem",
    min: 2,
    stackClearing: true,
    stem: true
  }, null, {
    id: "vstem",
    min: 2,
    stackClearing: true,
    stem: true
  }, {
    id: "vmoveto",
    min: 1,
    stackClearing: true
  }, {
    id: "rlineto",
    min: 2,
    resetStack: true
  }, {
    id: "hlineto",
    min: 1,
    resetStack: true
  }, {
    id: "vlineto",
    min: 1,
    resetStack: true
  }, {
    id: "rrcurveto",
    min: 6,
    resetStack: true
  }, null, {
    id: "callsubr",
    min: 1,
    undefStack: true
  }, {
    id: "return",
    min: 0,
    undefStack: true
  }, null, null, {
    id: "endchar",
    min: 0,
    stackClearing: true
  }, null, null, null, {
    id: "hstemhm",
    min: 2,
    stackClearing: true,
    stem: true
  }, {
    id: "hintmask",
    min: 0,
    stackClearing: true
  }, {
    id: "cntrmask",
    min: 0,
    stackClearing: true
  }, {
    id: "rmoveto",
    min: 2,
    stackClearing: true
  }, {
    id: "hmoveto",
    min: 1,
    stackClearing: true
  }, {
    id: "vstemhm",
    min: 2,
    stackClearing: true,
    stem: true
  }, {
    id: "rcurveline",
    min: 8,
    resetStack: true
  }, {
    id: "rlinecurve",
    min: 8,
    resetStack: true
  }, {
    id: "vvcurveto",
    min: 4,
    resetStack: true
  }, {
    id: "hhcurveto",
    min: 4,
    resetStack: true
  }, null, {
    id: "callgsubr",
    min: 1,
    undefStack: true
  }, {
    id: "vhcurveto",
    min: 4,
    resetStack: true
  }, {
    id: "hvcurveto",
    min: 4,
    resetStack: true
  }];
  var CharstringValidationData12 = [null, null, null, {
    id: "and",
    min: 2,
    stackDelta: -1
  }, {
    id: "or",
    min: 2,
    stackDelta: -1
  }, {
    id: "not",
    min: 1,
    stackDelta: 0
  }, null, null, null, {
    id: "abs",
    min: 1,
    stackDelta: 0
  }, {
    id: "add",
    min: 2,
    stackDelta: -1,
    stackFn: function stack_div(stack, index) {
      stack[index - 2] = stack[index - 2] + stack[index - 1];
    }
  }, {
    id: "sub",
    min: 2,
    stackDelta: -1,
    stackFn: function stack_div(stack, index) {
      stack[index - 2] = stack[index - 2] - stack[index - 1];
    }
  }, {
    id: "div",
    min: 2,
    stackDelta: -1,
    stackFn: function stack_div(stack, index) {
      stack[index - 2] = stack[index - 2] / stack[index - 1];
    }
  }, null, {
    id: "neg",
    min: 1,
    stackDelta: 0,
    stackFn: function stack_div(stack, index) {
      stack[index - 1] = -stack[index - 1];
    }
  }, {
    id: "eq",
    min: 2,
    stackDelta: -1
  }, null, null, {
    id: "drop",
    min: 1,
    stackDelta: -1
  }, null, {
    id: "put",
    min: 2,
    stackDelta: -2
  }, {
    id: "get",
    min: 1,
    stackDelta: 0
  }, {
    id: "ifelse",
    min: 4,
    stackDelta: -3
  }, {
    id: "random",
    min: 0,
    stackDelta: 1
  }, {
    id: "mul",
    min: 2,
    stackDelta: -1,
    stackFn: function stack_div(stack, index) {
      stack[index - 2] = stack[index - 2] * stack[index - 1];
    }
  }, null, {
    id: "sqrt",
    min: 1,
    stackDelta: 0
  }, {
    id: "dup",
    min: 1,
    stackDelta: 1
  }, {
    id: "exch",
    min: 2,
    stackDelta: 0
  }, {
    id: "index",
    min: 2,
    stackDelta: 0
  }, {
    id: "roll",
    min: 3,
    stackDelta: -2
  }, null, null, null, {
    id: "hflex",
    min: 7,
    resetStack: true
  }, {
    id: "flex",
    min: 13,
    resetStack: true
  }, {
    id: "hflex1",
    min: 9,
    resetStack: true
  }, {
    id: "flex1",
    min: 11,
    resetStack: true
  }];

  var CFFParser = /*#__PURE__*/function () {
    function CFFParser(file, properties, seacAnalysisEnabled) {
      _classCallCheck(this, CFFParser);

      this.bytes = file.getBytes();
      this.properties = properties;
      this.seacAnalysisEnabled = !!seacAnalysisEnabled;
    }

    _createClass(CFFParser, [{
      key: "parse",
      value: function parse() {
        var properties = this.properties;
        var cff = new CFF();
        this.cff = cff;
        var header = this.parseHeader();
        var nameIndex = this.parseIndex(header.endPos);
        var topDictIndex = this.parseIndex(nameIndex.endPos);
        var stringIndex = this.parseIndex(topDictIndex.endPos);
        var globalSubrIndex = this.parseIndex(stringIndex.endPos);
        var topDictParsed = this.parseDict(topDictIndex.obj.get(0));
        var topDict = this.createDict(CFFTopDict, topDictParsed, cff.strings);
        cff.header = header.obj;
        cff.names = this.parseNameIndex(nameIndex.obj);
        cff.strings = this.parseStringIndex(stringIndex.obj);
        cff.topDict = topDict;
        cff.globalSubrIndex = globalSubrIndex.obj;
        this.parsePrivateDict(cff.topDict);
        cff.isCIDFont = topDict.hasName("ROS");
        var charStringOffset = topDict.getByName("CharStrings");
        var charStringIndex = this.parseIndex(charStringOffset).obj;
        var fontMatrix = topDict.getByName("FontMatrix");

        if (fontMatrix) {
          properties.fontMatrix = fontMatrix;
        }

        var fontBBox = topDict.getByName("FontBBox");

        if (fontBBox) {
          properties.ascent = Math.max(fontBBox[3], fontBBox[1]);
          properties.descent = Math.min(fontBBox[1], fontBBox[3]);
          properties.ascentScaled = true;
        }

        var charset, encoding;

        if (cff.isCIDFont) {
          var fdArrayIndex = this.parseIndex(topDict.getByName("FDArray")).obj;

          for (var i = 0, ii = fdArrayIndex.count; i < ii; ++i) {
            var dictRaw = fdArrayIndex.get(i);
            var fontDict = this.createDict(CFFTopDict, this.parseDict(dictRaw), cff.strings);
            this.parsePrivateDict(fontDict);
            cff.fdArray.push(fontDict);
          }

          encoding = null;
          charset = this.parseCharsets(topDict.getByName("charset"), charStringIndex.count, cff.strings, true);
          cff.fdSelect = this.parseFDSelect(topDict.getByName("FDSelect"), charStringIndex.count);
        } else {
          charset = this.parseCharsets(topDict.getByName("charset"), charStringIndex.count, cff.strings, false);
          encoding = this.parseEncoding(topDict.getByName("Encoding"), properties, cff.strings, charset.charset);
        }

        cff.charset = charset;
        cff.encoding = encoding;
        var charStringsAndSeacs = this.parseCharStrings({
          charStrings: charStringIndex,
          localSubrIndex: topDict.privateDict.subrsIndex,
          globalSubrIndex: globalSubrIndex.obj,
          fdSelect: cff.fdSelect,
          fdArray: cff.fdArray,
          privateDict: topDict.privateDict
        });
        cff.charStrings = charStringsAndSeacs.charStrings;
        cff.seacs = charStringsAndSeacs.seacs;
        cff.widths = charStringsAndSeacs.widths;
        return cff;
      }
    }, {
      key: "parseHeader",
      value: function parseHeader() {
        var bytes = this.bytes;
        var bytesLength = bytes.length;
        var offset = 0;

        while (offset < bytesLength && bytes[offset] !== 1) {
          ++offset;
        }

        if (offset >= bytesLength) {
          throw new _util.FormatError("Invalid CFF header");
        }

        if (offset !== 0) {
          (0, _util.info)("cff data is shifted");
          bytes = bytes.subarray(offset);
          this.bytes = bytes;
        }

        var major = bytes[0];
        var minor = bytes[1];
        var hdrSize = bytes[2];
        var offSize = bytes[3];
        var header = new CFFHeader(major, minor, hdrSize, offSize);
        return {
          obj: header,
          endPos: hdrSize
        };
      }
    }, {
      key: "parseDict",
      value: function parseDict(dict) {
        var pos = 0;

        function parseOperand() {
          var value = dict[pos++];

          if (value === 30) {
            return parseFloatOperand();
          } else if (value === 28) {
            value = dict[pos++];
            value = (value << 24 | dict[pos++] << 16) >> 16;
            return value;
          } else if (value === 29) {
            value = dict[pos++];
            value = value << 8 | dict[pos++];
            value = value << 8 | dict[pos++];
            value = value << 8 | dict[pos++];
            return value;
          } else if (value >= 32 && value <= 246) {
            return value - 139;
          } else if (value >= 247 && value <= 250) {
            return (value - 247) * 256 + dict[pos++] + 108;
          } else if (value >= 251 && value <= 254) {
            return -((value - 251) * 256) - dict[pos++] - 108;
          }

          (0, _util.warn)('CFFParser_parseDict: "' + value + '" is a reserved command.');
          return NaN;
        }

        function parseFloatOperand() {
          var str = "";
          var eof = 15;
          var lookup = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];
          var length = dict.length;

          while (pos < length) {
            var b = dict[pos++];
            var b1 = b >> 4;
            var b2 = b & 15;

            if (b1 === eof) {
              break;
            }

            str += lookup[b1];

            if (b2 === eof) {
              break;
            }

            str += lookup[b2];
          }

          return parseFloat(str);
        }

        var operands = [];
        var entries = [];
        pos = 0;
        var end = dict.length;

        while (pos < end) {
          var b = dict[pos];

          if (b <= 21) {
            if (b === 12) {
              b = b << 8 | dict[++pos];
            }

            entries.push([b, operands]);
            operands = [];
            ++pos;
          } else {
            operands.push(parseOperand());
          }
        }

        return entries;
      }
    }, {
      key: "parseIndex",
      value: function parseIndex(pos) {
        var cffIndex = new CFFIndex();
        var bytes = this.bytes;
        var count = bytes[pos++] << 8 | bytes[pos++];
        var offsets = [];
        var end = pos;
        var i, ii;

        if (count !== 0) {
          var offsetSize = bytes[pos++];
          var startPos = pos + (count + 1) * offsetSize - 1;

          for (i = 0, ii = count + 1; i < ii; ++i) {
            var offset = 0;

            for (var j = 0; j < offsetSize; ++j) {
              offset <<= 8;
              offset += bytes[pos++];
            }

            offsets.push(startPos + offset);
          }

          end = offsets[count];
        }

        for (i = 0, ii = offsets.length - 1; i < ii; ++i) {
          var offsetStart = offsets[i];
          var offsetEnd = offsets[i + 1];
          cffIndex.add(bytes.subarray(offsetStart, offsetEnd));
        }

        return {
          obj: cffIndex,
          endPos: end
        };
      }
    }, {
      key: "parseNameIndex",
      value: function parseNameIndex(index) {
        var names = [];

        for (var i = 0, ii = index.count; i < ii; ++i) {
          var name = index.get(i);
          names.push((0, _util.bytesToString)(name));
        }

        return names;
      }
    }, {
      key: "parseStringIndex",
      value: function parseStringIndex(index) {
        var strings = new CFFStrings();

        for (var i = 0, ii = index.count; i < ii; ++i) {
          var data = index.get(i);
          strings.add((0, _util.bytesToString)(data));
        }

        return strings;
      }
    }, {
      key: "createDict",
      value: function createDict(Type, dict, strings) {
        var cffDict = new Type(strings);

        for (var i = 0, ii = dict.length; i < ii; ++i) {
          var pair = dict[i];
          var key = pair[0];
          var value = pair[1];
          cffDict.setByKey(key, value);
        }

        return cffDict;
      }
    }, {
      key: "parseCharString",
      value: function parseCharString(state, data, localSubrIndex, globalSubrIndex) {
        if (!data || state.callDepth > MAX_SUBR_NESTING) {
          return false;
        }

        var stackSize = state.stackSize;
        var stack = state.stack;
        var length = data.length;

        for (var j = 0; j < length;) {
          var value = data[j++];
          var validationCommand = null;

          if (value === 12) {
            var q = data[j++];

            if (q === 0) {
              data[j - 2] = 139;
              data[j - 1] = 22;
              stackSize = 0;
            } else {
              validationCommand = CharstringValidationData12[q];
            }
          } else if (value === 28) {
            stack[stackSize] = (data[j] << 24 | data[j + 1] << 16) >> 16;
            j += 2;
            stackSize++;
          } else if (value === 14) {
            if (stackSize >= 4) {
              stackSize -= 4;

              if (this.seacAnalysisEnabled) {
                state.seac = stack.slice(stackSize, stackSize + 4);
                return false;
              }
            }

            validationCommand = CharstringValidationData[value];
          } else if (value >= 32 && value <= 246) {
            stack[stackSize] = value - 139;
            stackSize++;
          } else if (value >= 247 && value <= 254) {
            stack[stackSize] = value < 251 ? (value - 247 << 8) + data[j] + 108 : -(value - 251 << 8) - data[j] - 108;
            j++;
            stackSize++;
          } else if (value === 255) {
            stack[stackSize] = (data[j] << 24 | data[j + 1] << 16 | data[j + 2] << 8 | data[j + 3]) / 65536;
            j += 4;
            stackSize++;
          } else if (value === 19 || value === 20) {
            state.hints += stackSize >> 1;
            j += state.hints + 7 >> 3;
            stackSize %= 2;
            validationCommand = CharstringValidationData[value];
          } else if (value === 10 || value === 29) {
            var subrsIndex;

            if (value === 10) {
              subrsIndex = localSubrIndex;
            } else {
              subrsIndex = globalSubrIndex;
            }

            if (!subrsIndex) {
              validationCommand = CharstringValidationData[value];
              (0, _util.warn)("Missing subrsIndex for " + validationCommand.id);
              return false;
            }

            var bias = 32768;

            if (subrsIndex.count < 1240) {
              bias = 107;
            } else if (subrsIndex.count < 33900) {
              bias = 1131;
            }

            var subrNumber = stack[--stackSize] + bias;

            if (subrNumber < 0 || subrNumber >= subrsIndex.count || isNaN(subrNumber)) {
              validationCommand = CharstringValidationData[value];
              (0, _util.warn)("Out of bounds subrIndex for " + validationCommand.id);
              return false;
            }

            state.stackSize = stackSize;
            state.callDepth++;
            var valid = this.parseCharString(state, subrsIndex.get(subrNumber), localSubrIndex, globalSubrIndex);

            if (!valid) {
              return false;
            }

            state.callDepth--;
            stackSize = state.stackSize;
            continue;
          } else if (value === 11) {
            state.stackSize = stackSize;
            return true;
          } else {
            validationCommand = CharstringValidationData[value];
          }

          if (validationCommand) {
            if (validationCommand.stem) {
              state.hints += stackSize >> 1;

              if (value === 3 || value === 23) {
                state.hasVStems = true;
              } else if (state.hasVStems && (value === 1 || value === 18)) {
                (0, _util.warn)("CFF stem hints are in wrong order");
                data[j - 1] = value === 1 ? 3 : 23;
              }
            }

            if ("min" in validationCommand) {
              if (!state.undefStack && stackSize < validationCommand.min) {
                (0, _util.warn)("Not enough parameters for " + validationCommand.id + "; actual: " + stackSize + ", expected: " + validationCommand.min);
                return false;
              }
            }

            if (state.firstStackClearing && validationCommand.stackClearing) {
              state.firstStackClearing = false;
              stackSize -= validationCommand.min;

              if (stackSize >= 2 && validationCommand.stem) {
                stackSize %= 2;
              } else if (stackSize > 1) {
                (0, _util.warn)("Found too many parameters for stack-clearing command");
              }

              if (stackSize > 0 && stack[stackSize - 1] >= 0) {
                state.width = stack[stackSize - 1];
              }
            }

            if ("stackDelta" in validationCommand) {
              if ("stackFn" in validationCommand) {
                validationCommand.stackFn(stack, stackSize);
              }

              stackSize += validationCommand.stackDelta;
            } else if (validationCommand.stackClearing) {
              stackSize = 0;
            } else if (validationCommand.resetStack) {
              stackSize = 0;
              state.undefStack = false;
            } else if (validationCommand.undefStack) {
              stackSize = 0;
              state.undefStack = true;
              state.firstStackClearing = false;
            }
          }
        }

        state.stackSize = stackSize;
        return true;
      }
    }, {
      key: "parseCharStrings",
      value: function parseCharStrings(_ref) {
        var charStrings = _ref.charStrings,
            localSubrIndex = _ref.localSubrIndex,
            globalSubrIndex = _ref.globalSubrIndex,
            fdSelect = _ref.fdSelect,
            fdArray = _ref.fdArray,
            privateDict = _ref.privateDict;
        var seacs = [];
        var widths = [];
        var count = charStrings.count;

        for (var i = 0; i < count; i++) {
          var charstring = charStrings.get(i);
          var state = {
            callDepth: 0,
            stackSize: 0,
            stack: [],
            undefStack: true,
            hints: 0,
            firstStackClearing: true,
            seac: null,
            width: null,
            hasVStems: false
          };
          var valid = true;
          var localSubrToUse = null;
          var privateDictToUse = privateDict;

          if (fdSelect && fdArray.length) {
            var fdIndex = fdSelect.getFDIndex(i);

            if (fdIndex === -1) {
              (0, _util.warn)("Glyph index is not in fd select.");
              valid = false;
            }

            if (fdIndex >= fdArray.length) {
              (0, _util.warn)("Invalid fd index for glyph index.");
              valid = false;
            }

            if (valid) {
              privateDictToUse = fdArray[fdIndex].privateDict;
              localSubrToUse = privateDictToUse.subrsIndex;
            }
          } else if (localSubrIndex) {
            localSubrToUse = localSubrIndex;
          }

          if (valid) {
            valid = this.parseCharString(state, charstring, localSubrToUse, globalSubrIndex);
          }

          if (state.width !== null) {
            var nominalWidth = privateDictToUse.getByName("nominalWidthX");
            widths[i] = nominalWidth + state.width;
          } else {
            var defaultWidth = privateDictToUse.getByName("defaultWidthX");
            widths[i] = defaultWidth;
          }

          if (state.seac !== null) {
            seacs[i] = state.seac;
          }

          if (!valid) {
            charStrings.set(i, new Uint8Array([14]));
          }
        }

        return {
          charStrings: charStrings,
          seacs: seacs,
          widths: widths
        };
      }
    }, {
      key: "emptyPrivateDictionary",
      value: function emptyPrivateDictionary(parentDict) {
        var privateDict = this.createDict(CFFPrivateDict, [], parentDict.strings);
        parentDict.setByKey(18, [0, 0]);
        parentDict.privateDict = privateDict;
      }
    }, {
      key: "parsePrivateDict",
      value: function parsePrivateDict(parentDict) {
        if (!parentDict.hasName("Private")) {
          this.emptyPrivateDictionary(parentDict);
          return;
        }

        var privateOffset = parentDict.getByName("Private");

        if (!Array.isArray(privateOffset) || privateOffset.length !== 2) {
          parentDict.removeByName("Private");
          return;
        }

        var size = privateOffset[0];
        var offset = privateOffset[1];

        if (size === 0 || offset >= this.bytes.length) {
          this.emptyPrivateDictionary(parentDict);
          return;
        }

        var privateDictEnd = offset + size;
        var dictData = this.bytes.subarray(offset, privateDictEnd);
        var dict = this.parseDict(dictData);
        var privateDict = this.createDict(CFFPrivateDict, dict, parentDict.strings);
        parentDict.privateDict = privateDict;

        if (!privateDict.getByName("Subrs")) {
          return;
        }

        var subrsOffset = privateDict.getByName("Subrs");
        var relativeOffset = offset + subrsOffset;

        if (subrsOffset === 0 || relativeOffset >= this.bytes.length) {
          this.emptyPrivateDictionary(parentDict);
          return;
        }

        var subrsIndex = this.parseIndex(relativeOffset);
        privateDict.subrsIndex = subrsIndex.obj;
      }
    }, {
      key: "parseCharsets",
      value: function parseCharsets(pos, length, strings, cid) {
        if (pos === 0) {
          return new CFFCharset(true, CFFCharsetPredefinedTypes.ISO_ADOBE, _charsets.ISOAdobeCharset);
        } else if (pos === 1) {
          return new CFFCharset(true, CFFCharsetPredefinedTypes.EXPERT, _charsets.ExpertCharset);
        } else if (pos === 2) {
          return new CFFCharset(true, CFFCharsetPredefinedTypes.EXPERT_SUBSET, _charsets.ExpertSubsetCharset);
        }

        var bytes = this.bytes;
        var start = pos;
        var format = bytes[pos++];
        var charset = [cid ? 0 : ".notdef"];
        var id, count, i;
        length -= 1;

        switch (format) {
          case 0:
            for (i = 0; i < length; i++) {
              id = bytes[pos++] << 8 | bytes[pos++];
              charset.push(cid ? id : strings.get(id));
            }

            break;

          case 1:
            while (charset.length <= length) {
              id = bytes[pos++] << 8 | bytes[pos++];
              count = bytes[pos++];

              for (i = 0; i <= count; i++) {
                charset.push(cid ? id++ : strings.get(id++));
              }
            }

            break;

          case 2:
            while (charset.length <= length) {
              id = bytes[pos++] << 8 | bytes[pos++];
              count = bytes[pos++] << 8 | bytes[pos++];

              for (i = 0; i <= count; i++) {
                charset.push(cid ? id++ : strings.get(id++));
              }
            }

            break;

          default:
            throw new _util.FormatError("Unknown charset format");
        }

        var end = pos;
        var raw = bytes.subarray(start, end);
        return new CFFCharset(false, format, charset, raw);
      }
    }, {
      key: "parseEncoding",
      value: function parseEncoding(pos, properties, strings, charset) {
        var encoding = Object.create(null);
        var bytes = this.bytes;
        var predefined = false;
        var format, i, ii;
        var raw = null;

        function readSupplement() {
          var supplementsCount = bytes[pos++];

          for (i = 0; i < supplementsCount; i++) {
            var code = bytes[pos++];
            var sid = (bytes[pos++] << 8) + (bytes[pos++] & 0xff);
            encoding[code] = charset.indexOf(strings.get(sid));
          }
        }

        if (pos === 0 || pos === 1) {
          predefined = true;
          format = pos;
          var baseEncoding = pos ? _encodings.ExpertEncoding : _encodings.StandardEncoding;

          for (i = 0, ii = charset.length; i < ii; i++) {
            var index = baseEncoding.indexOf(charset[i]);

            if (index !== -1) {
              encoding[index] = i;
            }
          }
        } else {
          var dataStart = pos;
          format = bytes[pos++];

          switch (format & 0x7f) {
            case 0:
              var glyphsCount = bytes[pos++];

              for (i = 1; i <= glyphsCount; i++) {
                encoding[bytes[pos++]] = i;
              }

              break;

            case 1:
              var rangesCount = bytes[pos++];
              var gid = 1;

              for (i = 0; i < rangesCount; i++) {
                var start = bytes[pos++];
                var left = bytes[pos++];

                for (var j = start; j <= start + left; j++) {
                  encoding[j] = gid++;
                }
              }

              break;

            default:
              throw new _util.FormatError("Unknown encoding format: ".concat(format, " in CFF"));
          }

          var dataEnd = pos;

          if (format & 0x80) {
            bytes[dataStart] &= 0x7f;
            readSupplement();
          }

          raw = bytes.subarray(dataStart, dataEnd);
        }

        format = format & 0x7f;
        return new CFFEncoding(predefined, format, encoding, raw);
      }
    }, {
      key: "parseFDSelect",
      value: function parseFDSelect(pos, length) {
        var bytes = this.bytes;
        var format = bytes[pos++];
        var fdSelect = [];
        var i;

        switch (format) {
          case 0:
            for (i = 0; i < length; ++i) {
              var id = bytes[pos++];
              fdSelect.push(id);
            }

            break;

          case 3:
            var rangesCount = bytes[pos++] << 8 | bytes[pos++];

            for (i = 0; i < rangesCount; ++i) {
              var first = bytes[pos++] << 8 | bytes[pos++];

              if (i === 0 && first !== 0) {
                (0, _util.warn)("parseFDSelect: The first range must have a first GID of 0" + " -- trying to recover.");
                first = 0;
              }

              var fdIndex = bytes[pos++];
              var next = bytes[pos] << 8 | bytes[pos + 1];

              for (var j = first; j < next; ++j) {
                fdSelect.push(fdIndex);
              }
            }

            pos += 2;
            break;

          default:
            throw new _util.FormatError("parseFDSelect: Unknown format \"".concat(format, "\"."));
        }

        if (fdSelect.length !== length) {
          throw new _util.FormatError("parseFDSelect: Invalid font data.");
        }

        return new CFFFDSelect(format, fdSelect);
      }
    }]);

    return CFFParser;
  }();

  return CFFParser;
}();

exports.CFFParser = CFFParser;

var CFF = /*#__PURE__*/function () {
  function CFF() {
    _classCallCheck(this, CFF);

    this.header = null;
    this.names = [];
    this.topDict = null;
    this.strings = new CFFStrings();
    this.globalSubrIndex = null;
    this.encoding = null;
    this.charset = null;
    this.charStrings = null;
    this.fdArray = [];
    this.fdSelect = null;
    this.isCIDFont = false;
  }

  _createClass(CFF, [{
    key: "duplicateFirstGlyph",
    value: function duplicateFirstGlyph() {
      if (this.charStrings.count >= 65535) {
        (0, _util.warn)("Not enough space in charstrings to duplicate first glyph.");
        return;
      }

      var glyphZero = this.charStrings.get(0);
      this.charStrings.add(glyphZero);

      if (this.isCIDFont) {
        this.fdSelect.fdSelect.push(this.fdSelect.fdSelect[0]);
      }
    }
  }, {
    key: "hasGlyphId",
    value: function hasGlyphId(id) {
      if (id < 0 || id >= this.charStrings.count) {
        return false;
      }

      var glyph = this.charStrings.get(id);
      return glyph.length > 0;
    }
  }]);

  return CFF;
}();

exports.CFF = CFF;

var CFFHeader = function CFFHeader(major, minor, hdrSize, offSize) {
  _classCallCheck(this, CFFHeader);

  this.major = major;
  this.minor = minor;
  this.hdrSize = hdrSize;
  this.offSize = offSize;
};

exports.CFFHeader = CFFHeader;

var CFFStrings = /*#__PURE__*/function () {
  function CFFStrings() {
    _classCallCheck(this, CFFStrings);

    this.strings = [];
  }

  _createClass(CFFStrings, [{
    key: "get",
    value: function get(index) {
      if (index >= 0 && index <= NUM_STANDARD_CFF_STRINGS - 1) {
        return CFFStandardStrings[index];
      }

      if (index - NUM_STANDARD_CFF_STRINGS <= this.strings.length) {
        return this.strings[index - NUM_STANDARD_CFF_STRINGS];
      }

      return CFFStandardStrings[0];
    }
  }, {
    key: "getSID",
    value: function getSID(str) {
      var index = CFFStandardStrings.indexOf(str);

      if (index !== -1) {
        return index;
      }

      index = this.strings.indexOf(str);

      if (index !== -1) {
        return index + NUM_STANDARD_CFF_STRINGS;
      }

      return -1;
    }
  }, {
    key: "add",
    value: function add(value) {
      this.strings.push(value);
    }
  }, {
    key: "count",
    get: function get() {
      return this.strings.length;
    }
  }]);

  return CFFStrings;
}();

exports.CFFStrings = CFFStrings;

var CFFIndex = /*#__PURE__*/function () {
  function CFFIndex() {
    _classCallCheck(this, CFFIndex);

    this.objects = [];
    this.length = 0;
  }

  _createClass(CFFIndex, [{
    key: "add",
    value: function add(data) {
      this.length += data.length;
      this.objects.push(data);
    }
  }, {
    key: "set",
    value: function set(index, data) {
      this.length += data.length - this.objects[index].length;
      this.objects[index] = data;
    }
  }, {
    key: "get",
    value: function get(index) {
      return this.objects[index];
    }
  }, {
    key: "count",
    get: function get() {
      return this.objects.length;
    }
  }]);

  return CFFIndex;
}();

exports.CFFIndex = CFFIndex;

var CFFDict = /*#__PURE__*/function () {
  function CFFDict(tables, strings) {
    _classCallCheck(this, CFFDict);

    this.keyToNameMap = tables.keyToNameMap;
    this.nameToKeyMap = tables.nameToKeyMap;
    this.defaults = tables.defaults;
    this.types = tables.types;
    this.opcodes = tables.opcodes;
    this.order = tables.order;
    this.strings = strings;
    this.values = Object.create(null);
  }

  _createClass(CFFDict, [{
    key: "setByKey",
    value: function setByKey(key, value) {
      if (!(key in this.keyToNameMap)) {
        return false;
      }

      var valueLength = value.length;

      if (valueLength === 0) {
        return true;
      }

      for (var i = 0; i < valueLength; i++) {
        if (isNaN(value[i])) {
          (0, _util.warn)('Invalid CFFDict value: "' + value + '" for key "' + key + '".');
          return true;
        }
      }

      var type = this.types[key];

      if (type === "num" || type === "sid" || type === "offset") {
        value = value[0];
      }

      this.values[key] = value;
      return true;
    }
  }, {
    key: "setByName",
    value: function setByName(name, value) {
      if (!(name in this.nameToKeyMap)) {
        throw new _util.FormatError("Invalid dictionary name \"".concat(name, "\""));
      }

      this.values[this.nameToKeyMap[name]] = value;
    }
  }, {
    key: "hasName",
    value: function hasName(name) {
      return this.nameToKeyMap[name] in this.values;
    }
  }, {
    key: "getByName",
    value: function getByName(name) {
      if (!(name in this.nameToKeyMap)) {
        throw new _util.FormatError("Invalid dictionary name ".concat(name, "\""));
      }

      var key = this.nameToKeyMap[name];

      if (!(key in this.values)) {
        return this.defaults[key];
      }

      return this.values[key];
    }
  }, {
    key: "removeByName",
    value: function removeByName(name) {
      delete this.values[this.nameToKeyMap[name]];
    }
  }], [{
    key: "createTables",
    value: function createTables(layout) {
      var tables = {
        keyToNameMap: {},
        nameToKeyMap: {},
        defaults: {},
        types: {},
        opcodes: {},
        order: []
      };

      for (var i = 0, ii = layout.length; i < ii; ++i) {
        var entry = layout[i];
        var key = Array.isArray(entry[0]) ? (entry[0][0] << 8) + entry[0][1] : entry[0];
        tables.keyToNameMap[key] = entry[1];
        tables.nameToKeyMap[entry[1]] = key;
        tables.types[key] = entry[2];
        tables.defaults[key] = entry[3];
        tables.opcodes[key] = Array.isArray(entry[0]) ? entry[0] : [entry[0]];
        tables.order.push(key);
      }

      return tables;
    }
  }]);

  return CFFDict;
}();

var CFFTopDict = function CFFTopDictClosure() {
  var layout = [[[12, 30], "ROS", ["sid", "sid", "num"], null], [[12, 20], "SyntheticBase", "num", null], [0, "version", "sid", null], [1, "Notice", "sid", null], [[12, 0], "Copyright", "sid", null], [2, "FullName", "sid", null], [3, "FamilyName", "sid", null], [4, "Weight", "sid", null], [[12, 1], "isFixedPitch", "num", 0], [[12, 2], "ItalicAngle", "num", 0], [[12, 3], "UnderlinePosition", "num", -100], [[12, 4], "UnderlineThickness", "num", 50], [[12, 5], "PaintType", "num", 0], [[12, 6], "CharstringType", "num", 2], [[12, 7], "FontMatrix", ["num", "num", "num", "num", "num", "num"], [0.001, 0, 0, 0.001, 0, 0]], [13, "UniqueID", "num", null], [5, "FontBBox", ["num", "num", "num", "num"], [0, 0, 0, 0]], [[12, 8], "StrokeWidth", "num", 0], [14, "XUID", "array", null], [15, "charset", "offset", 0], [16, "Encoding", "offset", 0], [17, "CharStrings", "offset", 0], [18, "Private", ["offset", "offset"], null], [[12, 21], "PostScript", "sid", null], [[12, 22], "BaseFontName", "sid", null], [[12, 23], "BaseFontBlend", "delta", null], [[12, 31], "CIDFontVersion", "num", 0], [[12, 32], "CIDFontRevision", "num", 0], [[12, 33], "CIDFontType", "num", 0], [[12, 34], "CIDCount", "num", 8720], [[12, 35], "UIDBase", "num", null], [[12, 37], "FDSelect", "offset", null], [[12, 36], "FDArray", "offset", null], [[12, 38], "FontName", "sid", null]];
  var tables = null;

  var CFFTopDict = /*#__PURE__*/function (_CFFDict) {
    _inherits(CFFTopDict, _CFFDict);

    var _super = _createSuper(CFFTopDict);

    function CFFTopDict(strings) {
      var _this;

      _classCallCheck(this, CFFTopDict);

      if (tables === null) {
        tables = CFFDict.createTables(layout);
      }

      _this = _super.call(this, tables, strings);
      _this.privateDict = null;
      return _this;
    }

    return CFFTopDict;
  }(CFFDict);

  return CFFTopDict;
}();

exports.CFFTopDict = CFFTopDict;

var CFFPrivateDict = function CFFPrivateDictClosure() {
  var layout = [[6, "BlueValues", "delta", null], [7, "OtherBlues", "delta", null], [8, "FamilyBlues", "delta", null], [9, "FamilyOtherBlues", "delta", null], [[12, 9], "BlueScale", "num", 0.039625], [[12, 10], "BlueShift", "num", 7], [[12, 11], "BlueFuzz", "num", 1], [10, "StdHW", "num", null], [11, "StdVW", "num", null], [[12, 12], "StemSnapH", "delta", null], [[12, 13], "StemSnapV", "delta", null], [[12, 14], "ForceBold", "num", 0], [[12, 17], "LanguageGroup", "num", 0], [[12, 18], "ExpansionFactor", "num", 0.06], [[12, 19], "initialRandomSeed", "num", 0], [20, "defaultWidthX", "num", 0], [21, "nominalWidthX", "num", 0], [19, "Subrs", "offset", null]];
  var tables = null;

  var CFFPrivateDict = /*#__PURE__*/function (_CFFDict2) {
    _inherits(CFFPrivateDict, _CFFDict2);

    var _super2 = _createSuper(CFFPrivateDict);

    function CFFPrivateDict(strings) {
      var _this2;

      _classCallCheck(this, CFFPrivateDict);

      if (tables === null) {
        tables = CFFDict.createTables(layout);
      }

      _this2 = _super2.call(this, tables, strings);
      _this2.subrsIndex = null;
      return _this2;
    }

    return CFFPrivateDict;
  }(CFFDict);

  return CFFPrivateDict;
}();

exports.CFFPrivateDict = CFFPrivateDict;
var CFFCharsetPredefinedTypes = {
  ISO_ADOBE: 0,
  EXPERT: 1,
  EXPERT_SUBSET: 2
};

var CFFCharset = function CFFCharset(predefined, format, charset, raw) {
  _classCallCheck(this, CFFCharset);

  this.predefined = predefined;
  this.format = format;
  this.charset = charset;
  this.raw = raw;
};

exports.CFFCharset = CFFCharset;

var CFFEncoding = function CFFEncoding(predefined, format, encoding, raw) {
  _classCallCheck(this, CFFEncoding);

  this.predefined = predefined;
  this.format = format;
  this.encoding = encoding;
  this.raw = raw;
};

var CFFFDSelect = /*#__PURE__*/function () {
  function CFFFDSelect(format, fdSelect) {
    _classCallCheck(this, CFFFDSelect);

    this.format = format;
    this.fdSelect = fdSelect;
  }

  _createClass(CFFFDSelect, [{
    key: "getFDIndex",
    value: function getFDIndex(glyphIndex) {
      if (glyphIndex < 0 || glyphIndex >= this.fdSelect.length) {
        return -1;
      }

      return this.fdSelect[glyphIndex];
    }
  }]);

  return CFFFDSelect;
}();

exports.CFFFDSelect = CFFFDSelect;

var CFFOffsetTracker = /*#__PURE__*/function () {
  function CFFOffsetTracker() {
    _classCallCheck(this, CFFOffsetTracker);

    this.offsets = Object.create(null);
  }

  _createClass(CFFOffsetTracker, [{
    key: "isTracking",
    value: function isTracking(key) {
      return key in this.offsets;
    }
  }, {
    key: "track",
    value: function track(key, location) {
      if (key in this.offsets) {
        throw new _util.FormatError("Already tracking location of ".concat(key));
      }

      this.offsets[key] = location;
    }
  }, {
    key: "offset",
    value: function offset(value) {
      for (var key in this.offsets) {
        this.offsets[key] += value;
      }
    }
  }, {
    key: "setEntryLocation",
    value: function setEntryLocation(key, values, output) {
      if (!(key in this.offsets)) {
        throw new _util.FormatError("Not tracking location of ".concat(key));
      }

      var data = output.data;
      var dataOffset = this.offsets[key];
      var size = 5;

      for (var i = 0, ii = values.length; i < ii; ++i) {
        var offset0 = i * size + dataOffset;
        var offset1 = offset0 + 1;
        var offset2 = offset0 + 2;
        var offset3 = offset0 + 3;
        var offset4 = offset0 + 4;

        if (data[offset0] !== 0x1d || data[offset1] !== 0 || data[offset2] !== 0 || data[offset3] !== 0 || data[offset4] !== 0) {
          throw new _util.FormatError("writing to an offset that is not empty");
        }

        var value = values[i];
        data[offset0] = 0x1d;
        data[offset1] = value >> 24 & 0xff;
        data[offset2] = value >> 16 & 0xff;
        data[offset3] = value >> 8 & 0xff;
        data[offset4] = value & 0xff;
      }
    }
  }]);

  return CFFOffsetTracker;
}();

var CFFCompiler = /*#__PURE__*/function () {
  function CFFCompiler(cff) {
    _classCallCheck(this, CFFCompiler);

    this.cff = cff;
  }

  _createClass(CFFCompiler, [{
    key: "compile",
    value: function compile() {
      var cff = this.cff;
      var output = {
        data: [],
        length: 0,
        add: function CFFCompiler_add(data) {
          this.data = this.data.concat(data);
          this.length = this.data.length;
        }
      };
      var header = this.compileHeader(cff.header);
      output.add(header);
      var nameIndex = this.compileNameIndex(cff.names);
      output.add(nameIndex);

      if (cff.isCIDFont) {
        if (cff.topDict.hasName("FontMatrix")) {
          var base = cff.topDict.getByName("FontMatrix");
          cff.topDict.removeByName("FontMatrix");

          for (var i = 0, ii = cff.fdArray.length; i < ii; i++) {
            var subDict = cff.fdArray[i];
            var matrix = base.slice(0);

            if (subDict.hasName("FontMatrix")) {
              matrix = _util.Util.transform(matrix, subDict.getByName("FontMatrix"));
            }

            subDict.setByName("FontMatrix", matrix);
          }
        }
      }

      var xuid = cff.topDict.getByName("XUID");

      if (xuid && xuid.length > 16) {
        cff.topDict.removeByName("XUID");
      }

      cff.topDict.setByName("charset", 0);
      var compiled = this.compileTopDicts([cff.topDict], output.length, cff.isCIDFont);
      output.add(compiled.output);
      var topDictTracker = compiled.trackers[0];
      var stringIndex = this.compileStringIndex(cff.strings.strings);
      output.add(stringIndex);
      var globalSubrIndex = this.compileIndex(cff.globalSubrIndex);
      output.add(globalSubrIndex);

      if (cff.encoding && cff.topDict.hasName("Encoding")) {
        if (cff.encoding.predefined) {
          topDictTracker.setEntryLocation("Encoding", [cff.encoding.format], output);
        } else {
          var encoding = this.compileEncoding(cff.encoding);
          topDictTracker.setEntryLocation("Encoding", [output.length], output);
          output.add(encoding);
        }
      }

      var charset = this.compileCharset(cff.charset, cff.charStrings.count, cff.strings, cff.isCIDFont);
      topDictTracker.setEntryLocation("charset", [output.length], output);
      output.add(charset);
      var charStrings = this.compileCharStrings(cff.charStrings);
      topDictTracker.setEntryLocation("CharStrings", [output.length], output);
      output.add(charStrings);

      if (cff.isCIDFont) {
        topDictTracker.setEntryLocation("FDSelect", [output.length], output);
        var fdSelect = this.compileFDSelect(cff.fdSelect);
        output.add(fdSelect);
        compiled = this.compileTopDicts(cff.fdArray, output.length, true);
        topDictTracker.setEntryLocation("FDArray", [output.length], output);
        output.add(compiled.output);
        var fontDictTrackers = compiled.trackers;
        this.compilePrivateDicts(cff.fdArray, fontDictTrackers, output);
      }

      this.compilePrivateDicts([cff.topDict], [topDictTracker], output);
      output.add([0]);
      return output.data;
    }
  }, {
    key: "encodeNumber",
    value: function encodeNumber(value) {
      if (Number.isInteger(value)) {
        return this.encodeInteger(value);
      }

      return this.encodeFloat(value);
    }
  }, {
    key: "encodeFloat",
    value: function encodeFloat(num) {
      var value = num.toString();
      var m = CFFCompiler.EncodeFloatRegExp.exec(value);

      if (m) {
        var epsilon = parseFloat("1e" + ((m[2] ? +m[2] : 0) + m[1].length));
        value = (Math.round(num * epsilon) / epsilon).toString();
      }

      var nibbles = "";
      var i, ii;

      for (i = 0, ii = value.length; i < ii; ++i) {
        var a = value[i];

        if (a === "e") {
          nibbles += value[++i] === "-" ? "c" : "b";
        } else if (a === ".") {
          nibbles += "a";
        } else if (a === "-") {
          nibbles += "e";
        } else {
          nibbles += a;
        }
      }

      nibbles += nibbles.length & 1 ? "f" : "ff";
      var out = [30];

      for (i = 0, ii = nibbles.length; i < ii; i += 2) {
        out.push(parseInt(nibbles.substring(i, i + 2), 16));
      }

      return out;
    }
  }, {
    key: "encodeInteger",
    value: function encodeInteger(value) {
      var code;

      if (value >= -107 && value <= 107) {
        code = [value + 139];
      } else if (value >= 108 && value <= 1131) {
        value = value - 108;
        code = [(value >> 8) + 247, value & 0xff];
      } else if (value >= -1131 && value <= -108) {
        value = -value - 108;
        code = [(value >> 8) + 251, value & 0xff];
      } else if (value >= -32768 && value <= 32767) {
        code = [0x1c, value >> 8 & 0xff, value & 0xff];
      } else {
        code = [0x1d, value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff];
      }

      return code;
    }
  }, {
    key: "compileHeader",
    value: function compileHeader(header) {
      return [header.major, header.minor, header.hdrSize, header.offSize];
    }
  }, {
    key: "compileNameIndex",
    value: function compileNameIndex(names) {
      var nameIndex = new CFFIndex();

      for (var i = 0, ii = names.length; i < ii; ++i) {
        var name = names[i];
        var length = Math.min(name.length, 127);
        var sanitizedName = new Array(length);

        for (var j = 0; j < length; j++) {
          var _char = name[j];

          if (_char < "!" || _char > "~" || _char === "[" || _char === "]" || _char === "(" || _char === ")" || _char === "{" || _char === "}" || _char === "<" || _char === ">" || _char === "/" || _char === "%") {
            _char = "_";
          }

          sanitizedName[j] = _char;
        }

        sanitizedName = sanitizedName.join("");

        if (sanitizedName === "") {
          sanitizedName = "Bad_Font_Name";
        }

        nameIndex.add((0, _util.stringToBytes)(sanitizedName));
      }

      return this.compileIndex(nameIndex);
    }
  }, {
    key: "compileTopDicts",
    value: function compileTopDicts(dicts, length, removeCidKeys) {
      var fontDictTrackers = [];
      var fdArrayIndex = new CFFIndex();

      for (var i = 0, ii = dicts.length; i < ii; ++i) {
        var fontDict = dicts[i];

        if (removeCidKeys) {
          fontDict.removeByName("CIDFontVersion");
          fontDict.removeByName("CIDFontRevision");
          fontDict.removeByName("CIDFontType");
          fontDict.removeByName("CIDCount");
          fontDict.removeByName("UIDBase");
        }

        var fontDictTracker = new CFFOffsetTracker();
        var fontDictData = this.compileDict(fontDict, fontDictTracker);
        fontDictTrackers.push(fontDictTracker);
        fdArrayIndex.add(fontDictData);
        fontDictTracker.offset(length);
      }

      fdArrayIndex = this.compileIndex(fdArrayIndex, fontDictTrackers);
      return {
        trackers: fontDictTrackers,
        output: fdArrayIndex
      };
    }
  }, {
    key: "compilePrivateDicts",
    value: function compilePrivateDicts(dicts, trackers, output) {
      for (var i = 0, ii = dicts.length; i < ii; ++i) {
        var fontDict = dicts[i];
        var privateDict = fontDict.privateDict;

        if (!privateDict || !fontDict.hasName("Private")) {
          throw new _util.FormatError("There must be a private dictionary.");
        }

        var privateDictTracker = new CFFOffsetTracker();
        var privateDictData = this.compileDict(privateDict, privateDictTracker);
        var outputLength = output.length;
        privateDictTracker.offset(outputLength);

        if (!privateDictData.length) {
          outputLength = 0;
        }

        trackers[i].setEntryLocation("Private", [privateDictData.length, outputLength], output);
        output.add(privateDictData);

        if (privateDict.subrsIndex && privateDict.hasName("Subrs")) {
          var subrs = this.compileIndex(privateDict.subrsIndex);
          privateDictTracker.setEntryLocation("Subrs", [privateDictData.length], output);
          output.add(subrs);
        }
      }
    }
  }, {
    key: "compileDict",
    value: function compileDict(dict, offsetTracker) {
      var out = [];
      var order = dict.order;

      for (var i = 0; i < order.length; ++i) {
        var key = order[i];

        if (!(key in dict.values)) {
          continue;
        }

        var values = dict.values[key];
        var types = dict.types[key];

        if (!Array.isArray(types)) {
          types = [types];
        }

        if (!Array.isArray(values)) {
          values = [values];
        }

        if (values.length === 0) {
          continue;
        }

        for (var j = 0, jj = types.length; j < jj; ++j) {
          var type = types[j];
          var value = values[j];

          switch (type) {
            case "num":
            case "sid":
              out = out.concat(this.encodeNumber(value));
              break;

            case "offset":
              var name = dict.keyToNameMap[key];

              if (!offsetTracker.isTracking(name)) {
                offsetTracker.track(name, out.length);
              }

              out = out.concat([0x1d, 0, 0, 0, 0]);
              break;

            case "array":
            case "delta":
              out = out.concat(this.encodeNumber(value));

              for (var k = 1, kk = values.length; k < kk; ++k) {
                out = out.concat(this.encodeNumber(values[k]));
              }

              break;

            default:
              throw new _util.FormatError("Unknown data type of ".concat(type));
          }
        }

        out = out.concat(dict.opcodes[key]);
      }

      return out;
    }
  }, {
    key: "compileStringIndex",
    value: function compileStringIndex(strings) {
      var stringIndex = new CFFIndex();

      for (var i = 0, ii = strings.length; i < ii; ++i) {
        stringIndex.add((0, _util.stringToBytes)(strings[i]));
      }

      return this.compileIndex(stringIndex);
    }
  }, {
    key: "compileGlobalSubrIndex",
    value: function compileGlobalSubrIndex() {
      var globalSubrIndex = this.cff.globalSubrIndex;
      this.out.writeByteArray(this.compileIndex(globalSubrIndex));
    }
  }, {
    key: "compileCharStrings",
    value: function compileCharStrings(charStrings) {
      var charStringsIndex = new CFFIndex();

      for (var i = 0; i < charStrings.count; i++) {
        var glyph = charStrings.get(i);

        if (glyph.length === 0) {
          charStringsIndex.add(new Uint8Array([0x8b, 0x0e]));
          continue;
        }

        charStringsIndex.add(glyph);
      }

      return this.compileIndex(charStringsIndex);
    }
  }, {
    key: "compileCharset",
    value: function compileCharset(charset, numGlyphs, strings, isCIDFont) {
      var out;
      var numGlyphsLessNotDef = numGlyphs - 1;

      if (isCIDFont) {
        out = new Uint8Array([2, 0, 0, numGlyphsLessNotDef >> 8 & 0xff, numGlyphsLessNotDef & 0xff]);
      } else {
        var length = 1 + numGlyphsLessNotDef * 2;
        out = new Uint8Array(length);
        out[0] = 0;
        var charsetIndex = 0;
        var numCharsets = charset.charset.length;
        var warned = false;

        for (var i = 1; i < out.length; i += 2) {
          var sid = 0;

          if (charsetIndex < numCharsets) {
            var name = charset.charset[charsetIndex++];
            sid = strings.getSID(name);

            if (sid === -1) {
              sid = 0;

              if (!warned) {
                warned = true;
                (0, _util.warn)("Couldn't find ".concat(name, " in CFF strings"));
              }
            }
          }

          out[i] = sid >> 8 & 0xff;
          out[i + 1] = sid & 0xff;
        }
      }

      return this.compileTypedArray(out);
    }
  }, {
    key: "compileEncoding",
    value: function compileEncoding(encoding) {
      return this.compileTypedArray(encoding.raw);
    }
  }, {
    key: "compileFDSelect",
    value: function compileFDSelect(fdSelect) {
      var format = fdSelect.format;
      var out, i;

      switch (format) {
        case 0:
          out = new Uint8Array(1 + fdSelect.fdSelect.length);
          out[0] = format;

          for (i = 0; i < fdSelect.fdSelect.length; i++) {
            out[i + 1] = fdSelect.fdSelect[i];
          }

          break;

        case 3:
          var start = 0;
          var lastFD = fdSelect.fdSelect[0];
          var ranges = [format, 0, 0, start >> 8 & 0xff, start & 0xff, lastFD];

          for (i = 1; i < fdSelect.fdSelect.length; i++) {
            var currentFD = fdSelect.fdSelect[i];

            if (currentFD !== lastFD) {
              ranges.push(i >> 8 & 0xff, i & 0xff, currentFD);
              lastFD = currentFD;
            }
          }

          var numRanges = (ranges.length - 3) / 3;
          ranges[1] = numRanges >> 8 & 0xff;
          ranges[2] = numRanges & 0xff;
          ranges.push(i >> 8 & 0xff, i & 0xff);
          out = new Uint8Array(ranges);
          break;
      }

      return this.compileTypedArray(out);
    }
  }, {
    key: "compileTypedArray",
    value: function compileTypedArray(data) {
      var out = [];

      for (var i = 0, ii = data.length; i < ii; ++i) {
        out[i] = data[i];
      }

      return out;
    }
  }, {
    key: "compileIndex",
    value: function compileIndex(index) {
      var trackers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var objects = index.objects;
      var count = objects.length;

      if (count === 0) {
        return [0, 0, 0];
      }

      var data = [count >> 8 & 0xff, count & 0xff];
      var lastOffset = 1,
          i;

      for (i = 0; i < count; ++i) {
        lastOffset += objects[i].length;
      }

      var offsetSize;

      if (lastOffset < 0x100) {
        offsetSize = 1;
      } else if (lastOffset < 0x10000) {
        offsetSize = 2;
      } else if (lastOffset < 0x1000000) {
        offsetSize = 3;
      } else {
        offsetSize = 4;
      }

      data.push(offsetSize);
      var relativeOffset = 1;

      for (i = 0; i < count + 1; i++) {
        if (offsetSize === 1) {
          data.push(relativeOffset & 0xff);
        } else if (offsetSize === 2) {
          data.push(relativeOffset >> 8 & 0xff, relativeOffset & 0xff);
        } else if (offsetSize === 3) {
          data.push(relativeOffset >> 16 & 0xff, relativeOffset >> 8 & 0xff, relativeOffset & 0xff);
        } else {
          data.push(relativeOffset >>> 24 & 0xff, relativeOffset >> 16 & 0xff, relativeOffset >> 8 & 0xff, relativeOffset & 0xff);
        }

        if (objects[i]) {
          relativeOffset += objects[i].length;
        }
      }

      for (i = 0; i < count; i++) {
        if (trackers[i]) {
          trackers[i].offset(data.length);
        }

        for (var j = 0, jj = objects[i].length; j < jj; j++) {
          data.push(objects[i][j]);
        }
      }

      return data;
    }
  }], [{
    key: "EncodeFloatRegExp",
    get: function get() {
      return (0, _util.shadow)(this, "EncodeFloatRegExp", /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/);
    }
  }]);

  return CFFCompiler;
}();

exports.CFFCompiler = CFFCompiler;