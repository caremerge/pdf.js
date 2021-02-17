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

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _display_utils = require("../../display/display_utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sandboxBundleSrc = "../../build/generic/build/pdf.sandbox.js";
describe("Scripting", function () {
  var sandbox, send_queue, test_id, ref, windowAlert;

  function getId() {
    var id = "".concat(ref++, "R");
    return id;
  }

  function myeval(code) {
    var key = (test_id++).toString();
    return sandbox.eval(code, key).then(function () {
      var result = send_queue.get(key).result;
      send_queue["delete"](key);
      return result;
    });
  }

  beforeAll(function (done) {
    test_id = 0;
    ref = 1;
    send_queue = new Map();

    window.dispatchEvent = function (event) {
      if (event.detail.command) {
        send_queue.set(event.detail.command, event.detail);
      } else if (send_queue.has(event.detail.id)) {
        var prev = send_queue.get(event.detail.id);
        Object.assign(prev, event.detail);
      } else {
        send_queue.set(event.detail.id, event.detail);
      }
    };

    windowAlert = window.alert;

    window.alert = function (value) {
      var command = "alert";
      send_queue.set(command, {
        command: command,
        value: value
      });
    };

    var promise = (0, _display_utils.loadScript)(sandboxBundleSrc).then(function () {
      return window.pdfjsSandbox.QuickJSSandbox();
    });
    sandbox = {
      createSandbox: function createSandbox(data) {
        promise.then(function (sbx) {
          return sbx.create(data);
        });
      },
      dispatchEventInSandbox: function dispatchEventInSandbox(data) {
        return promise.then(function (sbx) {
          return sbx.dispatchEvent(data);
        });
      },
      nukeSandbox: function nukeSandbox() {
        promise.then(function (sbx) {
          return sbx.nukeSandbox();
        });
      },
      eval: function _eval(code, key) {
        return promise.then(function (sbx) {
          return sbx.evalForTesting(code, key);
        });
      }
    };
    done();
  });
  afterAll(function () {
    sandbox.nukeSandbox();
    sandbox = null;
    send_queue = null;
    window.alert = windowAlert;
  });
  describe("Sandbox", function () {
    it("should send a value, execute an action and get back a new value", function (done) {
      function compute(n) {
        var s = 0;

        for (var i = 0; i < n; i++) {
          s += i;
        }

        return s;
      }

      var number = 123;
      var expected = ((number - 1) * number / 2).toString();
      var refId = getId();
      var data = {
        objects: {
          field: [{
            id: refId,
            value: "",
            actions: {
              Keystroke: ["".concat(compute.toString(), "event.value = compute(parseInt(event.value));")]
            },
            type: "text"
          }]
        },
        calculationOrder: [],
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        }
      };
      sandbox.createSandbox(data);
      sandbox.dispatchEventInSandbox({
        id: refId,
        value: "".concat(number),
        name: "Keystroke",
        willCommit: true
      }).then(function () {
        expect(send_queue.has(refId)).toEqual(true);
        expect(send_queue.get(refId)).toEqual({
          id: refId,
          valueAsString: expected
        });
        done();
      })["catch"](done.fail);
    });
  });
  describe("Doc", function () {
    it("should treat globalThis as the doc", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(done) {
        var refId, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                refId = getId();
                data = {
                  objects: {
                    field: [{
                      id: refId,
                      value: "",
                      actions: {},
                      type: "text"
                    }]
                  },
                  appInfo: {
                    language: "en-US",
                    platform: "Linux x86_64"
                  },
                  calculationOrder: [],
                  dispatchEventName: "_dispatchMe"
                };
                sandbox.createSandbox(data);
                _context.prev = 3;
                _context.next = 6;
                return myeval("(this.foobar = 123456, 0)");

              case 6:
                _context.next = 8;
                return myeval("this.getField(\"field\").doc.foobar").then(function (value) {
                  expect(value).toEqual(123456);
                });

              case 8:
                done();
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                done.fail(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
  describe("Util", function () {
    beforeAll(function (done) {
      sandbox.createSandbox({
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        objects: {},
        calculationOrder: []
      });
      done();
    });
    describe("printd", function () {
      it("should print a date according to a format", function (done) {
        var date = "new Date(\"Sun Apr 15 2007 03:14:15\")";
        Promise.all([myeval("util.printd(0, ".concat(date, ")")).then(function (value) {
          expect(value).toEqual("D:20070415031415");
        }), myeval("util.printd(1, ".concat(date, ")")).then(function (value) {
          expect(value).toEqual("2007.04.15 03:14:15");
        }), myeval("util.printd(2, ".concat(date, ")")).then(function (value) {
          expect(value).toEqual("4/15/07 3:14:15 am");
        }), myeval("util.printd(\"mmmm mmm mm m\", ".concat(date, ")")).then(function (value) {
          expect(value).toEqual("April Apr 04 4");
        }), myeval("util.printd(\"dddd ddd dd d\", ".concat(date, ")")).then(function (value) {
          expect(value).toEqual("Sunday Sun 15 15");
        })]).then(function () {
          return done();
        });
      });
    });
    describe("scand", function () {
      it("should parse a date according to a format", function (done) {
        var date = new Date("Sun Apr 15 2007 03:14:15");
        Promise.all([myeval("util.scand(0, \"D:20070415031415\").toString()").then(function (value) {
          expect(new Date(value)).toEqual(date);
        }), myeval("util.scand(1, \"2007.04.15 03:14:15\").toString()").then(function (value) {
          expect(new Date(value)).toEqual(date);
        }), myeval("util.scand(2, \"4/15/07 3:14:15 am\").toString()").then(function (value) {
          expect(new Date(value)).toEqual(date);
        })]).then(function () {
          return done();
        });
      });
    });
    describe("printf", function () {
      it("should print some data according to a format", function (done) {
        Promise.all([myeval("util.printf(\"Integer numbers: %d, %d,...\", 1.234, 56.789)").then(function (value) {
          expect(value).toEqual("Integer numbers: 1, 56,...");
        }), myeval("util.printf(\"Hex numbers: %x, %x,...\", 1234, 56789)").then(function (value) {
          expect(value).toEqual("Hex numbers: 4D2, DDD5,...");
        }), myeval("util.printf(\"Hex numbers with 0x: %#x, %#x,...\", 1234, 56789)").then(function (value) {
          expect(value).toEqual("Hex numbers with 0x: 0x4D2, 0xDDD5,...");
        }), myeval("util.printf(\"Decimal number: %,0+.3f\", 1234567.89123)").then(function (value) {
          expect(value).toEqual("Decimal number: +1,234,567.891");
        }), myeval("util.printf(\"Decimal number: %,0+8.3f\", 1.234567)").then(function (value) {
          expect(value).toEqual("Decimal number: +  1.235");
        }), myeval("util.printf(\"Decimal number: %,0.2f\", -12.34567)").then(function (value) {
          expect(value).toEqual("Decimal number: -12.35");
        })]).then(function () {
          return done();
        });
      });
      it("should print a string with no argument", function (done) {
        myeval("util.printf(\"hello world\")").then(function (value) {
          expect(value).toEqual("hello world");
        }).then(function () {
          return done();
        });
      });
      it("print a string with a percent", function (done) {
        myeval("util.printf(\"%%s\")").then(function (value) {
          expect(value).toEqual("%%s");
        }).then(function () {
          return done();
        });
      });
    });
    describe("printx", function () {
      it("should print some data according to a format", function (done) {
        myeval("util.printx(\"9 (999) 999-9999\", \"aaa14159697489zzz\")").then(function (value) {
          expect(value).toEqual("1 (415) 969-7489");
        }).then(function () {
          return done();
        });
      });
    });
  });
  describe("Events", function () {
    it("should trigger an event and modify the source", function (done) {
      var refId = getId();
      var data = {
        objects: {
          field: [{
            id: refId,
            value: "",
            actions: {
              test: ["event.source.value = \"123\";"]
            },
            type: "text"
          }]
        },
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        calculationOrder: []
      };
      sandbox.createSandbox(data);
      sandbox.dispatchEventInSandbox({
        id: refId,
        value: "",
        name: "test",
        willCommit: true
      }).then(function () {
        expect(send_queue.has(refId)).toEqual(true);
        expect(send_queue.get(refId)).toEqual({
          id: refId,
          value: "123"
        });
        done();
      })["catch"](done.fail);
    });
    it("should trigger a Keystroke event and invalidate it", function (done) {
      var refId = getId();
      var data = {
        objects: {
          field: [{
            id: refId,
            value: "",
            actions: {
              Keystroke: ["event.rc = false;"]
            },
            type: "text"
          }]
        },
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        calculationOrder: []
      };
      sandbox.createSandbox(data);
      sandbox.dispatchEventInSandbox({
        id: refId,
        value: "hell",
        name: "Keystroke",
        willCommit: false,
        change: "o",
        selStart: 4,
        selEnd: 4
      }).then(function () {
        expect(send_queue.has(refId)).toEqual(true);
        expect(send_queue.get(refId)).toEqual({
          id: refId,
          value: "hell",
          selRange: [4, 4]
        });
        done();
      })["catch"](done.fail);
    });
    it("should trigger a Keystroke event and change it", function (done) {
      var refId = getId();
      var data = {
        objects: {
          field: [{
            id: refId,
            value: "",
            actions: {
              Keystroke: ["event.change = \"a\";"]
            },
            type: "text"
          }]
        },
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        calculationOrder: []
      };
      sandbox.createSandbox(data);
      sandbox.dispatchEventInSandbox({
        id: refId,
        value: "hell",
        name: "Keystroke",
        willCommit: false,
        change: "o",
        selStart: 4,
        selEnd: 4
      }).then(function () {
        expect(send_queue.has(refId)).toEqual(true);
        expect(send_queue.get(refId)).toEqual({
          id: refId,
          value: "hella"
        });
        done();
      })["catch"](done.fail);
    });
    it("should trigger an invalid commit Keystroke event", function (done) {
      var refId = getId();
      var data = {
        objects: {
          field: [{
            id: refId,
            value: "",
            actions: {
              test: ["event.rc = false;"]
            },
            type: "text"
          }]
        },
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        calculationOrder: []
      };
      sandbox.createSandbox(data);
      sandbox.dispatchEventInSandbox({
        id: refId,
        value: "",
        name: "test",
        willCommit: true
      }).then(function () {
        expect(send_queue.has(refId)).toEqual(false);
        done();
      })["catch"](done.fail);
    });
    it("should trigger a valid commit Keystroke event", function (done) {
      var refId1 = getId();
      var refId2 = getId();
      var data = {
        objects: {
          field1: [{
            id: refId1,
            value: "",
            actions: {
              Validate: ["event.value = \"world\";"]
            },
            type: "text"
          }],
          field2: [{
            id: refId2,
            value: "",
            actions: {
              Calculate: ["event.value = \"hello\";"]
            },
            type: "text"
          }]
        },
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        calculationOrder: [refId2]
      };
      sandbox.createSandbox(data);
      sandbox.dispatchEventInSandbox({
        id: refId1,
        value: "hello",
        name: "Keystroke",
        willCommit: true
      }).then(function () {
        expect(send_queue.has(refId1)).toEqual(true);
        expect(send_queue.get(refId1)).toEqual({
          id: refId1,
          value: "world",
          valueAsString: "world"
        });
        done();
      })["catch"](done.fail);
    });
  });
  describe("Color", function () {
    beforeAll(function (done) {
      sandbox.createSandbox({
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        objects: {},
        calculationOrder: []
      });
      done();
    });

    function round(color) {
      return [color[0]].concat(_toConsumableArray(color.slice(1).map(function (x) {
        return Math.round(x * 1000) / 1000;
      })));
    }

    it("should convert RGB color for different color spaces", function (done) {
      Promise.all([myeval("color.convert([\"RGB\", 0.1, 0.2, 0.3], \"T\")").then(function (value) {
        expect(round(value)).toEqual(["T"]);
      }), myeval("color.convert([\"RGB\", 0.1, 0.2, 0.3], \"G\")").then(function (value) {
        expect(round(value)).toEqual(["G", 0.181]);
      }), myeval("color.convert([\"RGB\", 0.1, 0.2, 0.3], \"RGB\")").then(function (value) {
        expect(round(value)).toEqual(["RGB", 0.1, 0.2, 0.3]);
      }), myeval("color.convert([\"RGB\", 0.1, 0.2, 0.3], \"CMYK\")").then(function (value) {
        expect(round(value)).toEqual(["CMYK", 0.9, 0.8, 0.7, 0.7]);
      })]).then(function () {
        return done();
      });
    });
    it("should convert CMYK color for different color spaces", function (done) {
      Promise.all([myeval("color.convert([\"CMYK\", 0.1, 0.2, 0.3, 0.4], \"T\")").then(function (value) {
        expect(round(value)).toEqual(["T"]);
      }), myeval("color.convert([\"CMYK\", 0.1, 0.2, 0.3, 0.4], \"G\")").then(function (value) {
        expect(round(value)).toEqual(["G", 0.371]);
      }), myeval("color.convert([\"CMYK\", 0.1, 0.2, 0.3, 0.4], \"RGB\")").then(function (value) {
        expect(round(value)).toEqual(["RGB", 0.5, 0.3, 0.4]);
      }), myeval("color.convert([\"CMYK\", 0.1, 0.2, 0.3, 0.4], \"CMYK\")").then(function (value) {
        expect(round(value)).toEqual(["CMYK", 0.1, 0.2, 0.3, 0.4]);
      })]).then(function () {
        return done();
      });
    });
    it("should convert Gray color for different color spaces", function (done) {
      Promise.all([myeval("color.convert([\"G\", 0.1], \"T\")").then(function (value) {
        expect(round(value)).toEqual(["T"]);
      }), myeval("color.convert([\"G\", 0.1], \"G\")").then(function (value) {
        expect(round(value)).toEqual(["G", 0.1]);
      }), myeval("color.convert([\"G\", 0.1], \"RGB\")").then(function (value) {
        expect(round(value)).toEqual(["RGB", 0.1, 0.1, 0.1]);
      }), myeval("color.convert([\"G\", 0.1], \"CMYK\")").then(function (value) {
        expect(round(value)).toEqual(["CMYK", 0, 0, 0, 0.9]);
      })]).then(function () {
        return done();
      });
    });
    it("should convert Transparent color for different color spaces", function (done) {
      Promise.all([myeval("color.convert([\"T\"], \"T\")").then(function (value) {
        expect(round(value)).toEqual(["T"]);
      }), myeval("color.convert([\"T\"], \"G\")").then(function (value) {
        expect(round(value)).toEqual(["G", 0]);
      }), myeval("color.convert([\"T\"], \"RGB\")").then(function (value) {
        expect(round(value)).toEqual(["RGB", 0, 0, 0]);
      }), myeval("color.convert([\"T\"], \"CMYK\")").then(function (value) {
        expect(round(value)).toEqual(["CMYK", 0, 0, 0, 1]);
      })]).then(function () {
        return done();
      });
    });
  });
  describe("App", function () {
    beforeAll(function (done) {
      sandbox.createSandbox({
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        objects: {},
        calculationOrder: []
      });
      done();
    });
    it("should test language", function (done) {
      Promise.all([myeval("app.language").then(function (value) {
        expect(value).toEqual("ENU");
      }), myeval("app.language = \"hello\"").then(function (value) {
        expect(value).toEqual("app.language is read-only");
      })]).then(function () {
        return done();
      });
    });
    it("should test platform", function (done) {
      Promise.all([myeval("app.platform").then(function (value) {
        expect(value).toEqual("UNIX");
      }), myeval("app.platform = \"hello\"").then(function (value) {
        expect(value).toEqual("app.platform is read-only");
      })]).then(function () {
        return done();
      });
    });
  });
  describe("AForm", function () {
    beforeAll(function (done) {
      sandbox.createSandbox({
        appInfo: {
          language: "en-US",
          platform: "Linux x86_64"
        },
        objects: {},
        calculationOrder: [],
        dispatchEventName: "_dispatchMe"
      });
      done();
    });
    describe("AFExtractNums", function () {
      it("should extract numbers", function (done) {
        Promise.all([myeval("AFExtractNums(\"123 456 789\")").then(function (value) {
          expect(value).toEqual(["123", "456", "789"]);
        }), myeval("AFExtractNums(\"123.456\")").then(function (value) {
          expect(value).toEqual(["123", "456"]);
        }), myeval("AFExtractNums(\"123\")").then(function (value) {
          expect(value).toEqual(["123"]);
        }), myeval("AFExtractNums(\".123\")").then(function (value) {
          expect(value).toEqual(["0", "123"]);
        }), myeval("AFExtractNums(\",123\")").then(function (value) {
          expect(value).toEqual(["0", "123"]);
        })]).then(function () {
          return done();
        });
      });
    });
    describe("AFMakeNumber", function () {
      it("should convert string to number", function (done) {
        Promise.all([myeval("AFMakeNumber(\"123.456\")").then(function (value) {
          expect(value).toEqual(123.456);
        }), myeval("AFMakeNumber(123.456)").then(function (value) {
          expect(value).toEqual(123.456);
        }), myeval("AFMakeNumber(\"-123.456\")").then(function (value) {
          expect(value).toEqual(-123.456);
        }), myeval("AFMakeNumber(\"-123,456\")").then(function (value) {
          expect(value).toEqual(-123.456);
        }), myeval("AFMakeNumber(\"not a number\")").then(function (value) {
          expect(value).toEqual(null);
        })]).then(function () {
          return done();
        });
      });
    });
    describe("AFMakeArrayFromList", function () {
      it("should split a string into an array of strings", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(done) {
          var value;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return myeval("AFMakeArrayFromList(\"aaaa,  bbbbbbb,cc,ddd, e\")");

                case 2:
                  value = _context2.sent;
                  expect(value).toEqual(["aaaa", " bbbbbbb", "cc", "ddd", "e"]);
                  done();

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });
    describe("AFNumber_format", function () {
      it("should format a number", /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(done) {
          var refId, data;
          return _regenerator["default"].wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  refId = getId();
                  data = {
                    objects: {
                      field: [{
                        id: refId,
                        value: "",
                        actions: {
                          test1: ["AFNumber_Format(2, 0, 0, 0, \"\u20AC\", false);" + "event.source.value = event.value;"],
                          test2: ["AFNumber_Format(1, 3, 0, 0, \"$\", true);" + "event.source.value = event.value;"],
                          test3: ["AFNumber_Format(2, 0, 1, 0, \"\u20AC\", false);" + "event.source.value = event.value;"],
                          test4: ["AFNumber_Format(2, 0, 2, 0, \"\u20AC\", false);" + "event.source.value = event.value;"],
                          test5: ["AFNumber_Format(2, 0, 3, 0, \"\u20AC\", false);" + "event.source.value = event.value;"]
                        },
                        type: "text"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context3.prev = 2;
                  sandbox.createSandbox(data);
                  _context3.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "123456.789",
                    name: "test1"
                  });

                case 6:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "123,456.79€"
                  });
                  send_queue["delete"](refId);
                  _context3.next = 11;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "223456.789",
                    name: "test2"
                  });

                case 11:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "$223456,8"
                  });
                  send_queue["delete"](refId);
                  _context3.next = 16;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "-323456.789",
                    name: "test3"
                  });

                case 16:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "323,456.79€",
                    textColor: ["RGB", 1, 0, 0]
                  });
                  send_queue["delete"](refId);
                  _context3.next = 21;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "-423456.789",
                    name: "test4"
                  });

                case 21:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "(423,456.79€)"
                  });
                  send_queue["delete"](refId);
                  _context3.next = 26;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "-52345.678",
                    name: "test5"
                  });

                case 26:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "(52,345.68€)",
                    textColor: ["RGB", 1, 0, 0]
                  });
                  done();
                  _context3.next = 34;
                  break;

                case 31:
                  _context3.prev = 31;
                  _context3.t0 = _context3["catch"](2);
                  done.fail(_context3.t0);

                case 34:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[2, 31]]);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    });
    describe("AFNumber_Keystroke", function () {
      it("should validate a number on a keystroke event", /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(done) {
          var refId, data;
          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  refId = getId();
                  data = {
                    objects: {
                      field: [{
                        id: refId,
                        value: "",
                        actions: {
                          Validate: ["AFNumber_Keystroke(null, 0, null, null, null, null);"]
                        },
                        type: "text",
                        name: "MyField"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context4.prev = 2;
                  sandbox.createSandbox(data);
                  _context4.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "123456.789",
                    name: "Keystroke",
                    willCommit: true
                  });

                case 6:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "123456.789",
                    valueAsString: "123456.789"
                  });
                  done();
                  _context4.next = 14;
                  break;

                case 11:
                  _context4.prev = 11;
                  _context4.t0 = _context4["catch"](2);
                  done.fail(_context4.t0);

                case 14:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[2, 11]]);
        }));

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
      it("should not validate a number on a keystroke event", /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5(done) {
          var refId, data;
          return _regenerator["default"].wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  refId = getId();
                  data = {
                    objects: {
                      field: [{
                        id: refId,
                        value: "",
                        actions: {
                          Validate: ["AFNumber_Keystroke(null, 0, null, null, null, null);"]
                        },
                        type: "text",
                        name: "MyField"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context5.prev = 2;
                  sandbox.createSandbox(data);
                  _context5.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "123s456.789",
                    name: "Keystroke",
                    willCommit: true
                  });

                case 6:
                  expect(send_queue.has("alert")).toEqual(true);
                  expect(send_queue.get("alert")).toEqual({
                    command: "alert",
                    value: "The value entered does not match the format of the field [ MyField ]"
                  });
                  done();
                  _context5.next = 14;
                  break;

                case 11:
                  _context5.prev = 11;
                  _context5.t0 = _context5["catch"](2);
                  done.fail(_context5.t0);

                case 14:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[2, 11]]);
        }));

        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
    });
    describe("AFPercent_Format", function () {
      it("should format a percentage", /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6(done) {
          var refId, data;
          return _regenerator["default"].wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  refId = getId();
                  data = {
                    objects: {
                      field: [{
                        id: refId,
                        value: "",
                        actions: {
                          test1: ["AFPercent_Format(2, 1, false);" + "event.source.value = event.value;"],
                          test2: ["AFPercent_Format(2, 1, true);" + "event.source.value = event.value;"]
                        },
                        type: "text"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context6.prev = 2;
                  sandbox.createSandbox(data);
                  _context6.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "0.456789",
                    name: "test1"
                  });

                case 6:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "45.68%"
                  });
                  send_queue["delete"](refId);
                  _context6.next = 11;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "0.456789",
                    name: "test2"
                  });

                case 11:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "%45.68"
                  });
                  done();
                  _context6.next = 19;
                  break;

                case 16:
                  _context6.prev = 16;
                  _context6.t0 = _context6["catch"](2);
                  done.fail(_context6.t0);

                case 19:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[2, 16]]);
        }));

        return function (_x6) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    describe("AFDate_Format", function () {
      it("should format a date", /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(done) {
          var refId, data;
          return _regenerator["default"].wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  refId = getId();
                  data = {
                    objects: {
                      field: [{
                        id: refId,
                        value: "",
                        actions: {
                          test1: ["AFDate_Format(0);event.source.value = event.value;"],
                          test2: ["AFDate_Format(12);event.source.value = event.value;"]
                        },
                        type: "text"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context7.prev = 2;
                  sandbox.createSandbox(data);
                  _context7.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "Sun Apr 15 2007 03:14:15",
                    name: "test1"
                  });

                case 6:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "4/15"
                  });
                  send_queue["delete"](refId);
                  _context7.next = 11;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "Sun Apr 15 2007 03:14:15",
                    name: "test2"
                  });

                case 11:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "4/15/07 3:14 am"
                  });
                  done();
                  _context7.next = 19;
                  break;

                case 16:
                  _context7.prev = 16;
                  _context7.t0 = _context7["catch"](2);
                  done.fail(_context7.t0);

                case 19:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, null, [[2, 16]]);
        }));

        return function (_x7) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    describe("AFRange_Validate", function () {
      it("should validate a number in range [a, b]", /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(done) {
          var refId, data;
          return _regenerator["default"].wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  refId = getId();
                  data = {
                    objects: {
                      field: [{
                        id: refId,
                        value: "",
                        actions: {
                          Validate: ["AFRange_Validate(true, 123, true, 456);"]
                        },
                        type: "text"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context8.prev = 2;
                  sandbox.createSandbox(data);
                  _context8.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "321",
                    name: "Keystroke",
                    willCommit: true
                  });

                case 6:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "321",
                    valueAsString: "321"
                  });
                  done();
                  _context8.next = 14;
                  break;

                case 11:
                  _context8.prev = 11;
                  _context8.t0 = _context8["catch"](2);
                  done.fail(_context8.t0);

                case 14:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, null, [[2, 11]]);
        }));

        return function (_x8) {
          return _ref8.apply(this, arguments);
        };
      }());
      it("should invalidate a number out of range [a, b]", /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9(done) {
          var refId, data;
          return _regenerator["default"].wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  refId = getId();
                  data = {
                    objects: {
                      field: [{
                        id: refId,
                        value: "",
                        actions: {
                          Validate: ["AFRange_Validate(true, 123, true, 456);"]
                        },
                        type: "text"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context9.prev = 2;
                  sandbox.createSandbox(data);
                  _context9.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "12",
                    name: "Keystroke",
                    willCommit: true
                  });

                case 6:
                  expect(send_queue.has("alert")).toEqual(true);
                  expect(send_queue.get("alert")).toEqual({
                    command: "alert",
                    value: "Invalid value: must be greater than or equal to 123 and less than or equal to 456."
                  });
                  done();
                  _context9.next = 14;
                  break;

                case 11:
                  _context9.prev = 11;
                  _context9.t0 = _context9["catch"](2);
                  done.fail(_context9.t0);

                case 14:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, null, [[2, 11]]);
        }));

        return function (_x9) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    describe("ASSimple_Calculate", function () {
      it("should compute the sum of several fields", /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10(done) {
          var refIds, data;
          return _regenerator["default"].wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  refIds = [0, 1, 2, 3].map(function (_) {
                    return getId();
                  });
                  data = {
                    objects: {
                      field1: [{
                        id: refIds[0],
                        value: "",
                        actions: {},
                        type: "text"
                      }],
                      field2: [{
                        id: refIds[1],
                        value: "",
                        actions: {},
                        type: "text"
                      }],
                      field3: [{
                        id: refIds[2],
                        value: "",
                        actions: {},
                        type: "text"
                      }],
                      field4: [{
                        id: refIds[3],
                        value: "",
                        actions: {
                          Calculate: ["AFSimple_Calculate(\"SUM\", [\"field1\", \"field2\", \"field3\"]);"]
                        },
                        type: "text"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [refIds[3]],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context10.prev = 2;
                  sandbox.createSandbox(data);
                  _context10.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refIds[0],
                    value: "1",
                    name: "Keystroke",
                    willCommit: true
                  });

                case 6:
                  expect(send_queue.has(refIds[3])).toEqual(true);
                  expect(send_queue.get(refIds[3])).toEqual({
                    id: refIds[3],
                    value: 1,
                    valueAsString: "1"
                  });
                  _context10.next = 10;
                  return sandbox.dispatchEventInSandbox({
                    id: refIds[1],
                    value: "2",
                    name: "Keystroke",
                    willCommit: true
                  });

                case 10:
                  expect(send_queue.has(refIds[3])).toEqual(true);
                  expect(send_queue.get(refIds[3])).toEqual({
                    id: refIds[3],
                    value: 3,
                    valueAsString: "3"
                  });
                  _context10.next = 14;
                  return sandbox.dispatchEventInSandbox({
                    id: refIds[2],
                    value: "3",
                    name: "Keystroke",
                    willCommit: true
                  });

                case 14:
                  expect(send_queue.has(refIds[3])).toEqual(true);
                  expect(send_queue.get(refIds[3])).toEqual({
                    id: refIds[3],
                    value: 6,
                    valueAsString: "6"
                  });
                  done();
                  _context10.next = 22;
                  break;

                case 19:
                  _context10.prev = 19;
                  _context10.t0 = _context10["catch"](2);
                  done.fail(_context10.t0);

                case 22:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, null, [[2, 19]]);
        }));

        return function (_x10) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
    describe("AFSpecial_KeystrokeEx", function () {
      it("should validate a phone number on a keystroke event", /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11(done) {
          var refId, data;
          return _regenerator["default"].wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  refId = getId();
                  data = {
                    objects: {
                      field: [{
                        id: refId,
                        value: "",
                        actions: {
                          Keystroke: ["AFSpecial_KeystrokeEx(\"9AXO\");"]
                        },
                        type: "text"
                      }]
                    },
                    appInfo: {
                      language: "en-US",
                      platform: "Linux x86_64"
                    },
                    calculationOrder: [],
                    dispatchEventName: "_dispatchMe"
                  };
                  _context11.prev = 2;
                  sandbox.createSandbox(data);
                  _context11.next = 6;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "",
                    change: "3",
                    name: "Keystroke",
                    willCommit: false,
                    selStart: 0,
                    selEnd: 0
                  });

                case 6:
                  expect(send_queue.has(refId)).toEqual(false);
                  _context11.next = 9;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "3",
                    change: "F",
                    name: "Keystroke",
                    willCommit: false,
                    selStart: 1,
                    selEnd: 1
                  });

                case 9:
                  expect(send_queue.has(refId)).toEqual(false);
                  _context11.next = 12;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "3F",
                    change: "?",
                    name: "Keystroke",
                    willCommit: false,
                    selStart: 2,
                    selEnd: 2
                  });

                case 12:
                  expect(send_queue.has(refId)).toEqual(false);
                  _context11.next = 15;
                  return sandbox.dispatchEventInSandbox({
                    id: refId,
                    value: "3F?",
                    change: "@",
                    name: "Keystroke",
                    willCommit: false,
                    selStart: 3,
                    selEnd: 3
                  });

                case 15:
                  expect(send_queue.has(refId)).toEqual(true);
                  expect(send_queue.get(refId)).toEqual({
                    id: refId,
                    value: "3F?",
                    selRange: [3, 3]
                  });
                  done();
                  _context11.next = 23;
                  break;

                case 20:
                  _context11.prev = 20;
                  _context11.t0 = _context11["catch"](2);
                  done.fail(_context11.t0);

                case 23:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, null, [[2, 20]]);
        }));

        return function (_x11) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    describe("eMailValidate", function () {
      it("should validate an e-mail address", function (done) {
        Promise.all([myeval("eMailValidate(123)").then(function (value) {
          expect(value).toEqual(false);
        }), myeval("eMailValidate(\"foo@bar.com\")").then(function (value) {
          expect(value).toEqual(true);
        }), myeval("eMailValidate(\"foo bar\")").then(function (value) {
          expect(value).toEqual(false);
        })]).then(function () {
          return done();
        });
      });
    });
  });
});