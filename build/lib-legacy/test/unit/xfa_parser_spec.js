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

var _xfa_object = require("../../core/xfa/xfa_object.js");

var _parser = require("../../core/xfa/parser.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe("XFAParser", function () {
  describe("Parse XFA", function () {
    it("should parse a xfa document and create an object to represent it", function () {
      var xml = "\n<?xml version=\"1.0\"?>\n<xdp:xdp xmlns:xdp=\"http://ns.adobe.com/xdp/\" uuid=\"1234\" invalid=\"foo\">\n  <config xmlns=\"http://www.xfa.org/schema/xci/3.1/\">\n    <present>\n      <pdf name=\"hello\">\n        <adobeExtensionLevel>\n          7\n        </adobeExtensionLevel>\n      </pdf>\n      <invalid><a>foobar</a></invalid>\n    </present>\n    <acrobat>\n      <submitUrl>http://a.b.c</submitUrl>\n      <acrobat7>\n        <dynamicRender>\n          forbidden\n        </dynamicRender>\n      </acrobat7>\n      <autoSave>enabled</autoSave>      \n      <submitUrl>\n                 http://d.e.f\n      </submitUrl>\n      <submitUrl>http://g.h.i</submitUrl>\n      <validate>foobar</validate>\n    </acrobat>\n  </config>\n  <template baseProfile=\"full\" xmlns=\"http://www.xfa.org/schema/xfa-template/3.3\">\n    <extras>\n      <float>1.23</float>\n      <boolean>1</boolean>\n      <integer>314</integer>\n      <float>2.71</float>\n    </extras>\n    <subform>\n      <proto>\n        <area x=\"hello\" y=\"-3.14in\" relevant=\"-foo +bar\" />\n        <color value=\"111, 222, 123\" />\n        <color value=\"111, abc, 123\" />\n        <medium imagingBBox=\"1,2in,3.4cm,5.67px\" />\n        <medium imagingBBox=\"1,2in,-3cm,4px\" />\n      </proto>\n    </subform>\n  </template>\n</xdp:xdp>\n      ";
      var attributes = {
        id: "",
        name: "",
        use: "",
        usehref: ""
      };
      var mediumAttributes = {
        id: "",
        "long": {
          value: 0,
          unit: ""
        },
        orientation: "portrait",
        "short": {
          value: 0,
          unit: ""
        },
        stock: "",
        trayIn: "auto",
        trayOut: "auto",
        use: "",
        usehref: ""
      };
      var colorAttributes = {
        cSpace: "SRGB",
        id: "",
        use: "",
        usehref: ""
      };
      var root = new _parser.XFAParser().parse(xml);
      var expected = {
        uuid: "1234",
        timeStamp: "",
        template: {
          baseProfile: "full",
          extras: _objectSpread(_objectSpread({}, attributes), {}, {
            "float": [_objectSpread(_objectSpread({}, attributes), {}, {
              $content: 1.23
            }), _objectSpread(_objectSpread({}, attributes), {}, {
              $content: 2.71
            })],
            "boolean": _objectSpread(_objectSpread({}, attributes), {}, {
              $content: 1
            }),
            integer: _objectSpread(_objectSpread({}, attributes), {}, {
              $content: 314
            })
          }),
          subform: {
            access: "open",
            allowMacro: 0,
            anchorType: "topLeft",
            colSpan: 1,
            columnWidths: [{
              value: 0,
              unit: ""
            }],
            h: {
              value: 0,
              unit: ""
            },
            hAlign: "left",
            id: "",
            layout: "position",
            locale: "",
            maxH: {
              value: 0,
              unit: ""
            },
            maxW: {
              value: 0,
              unit: ""
            },
            mergeMode: "consumeData",
            minH: {
              value: 0,
              unit: ""
            },
            minW: {
              value: 0,
              unit: ""
            },
            name: "",
            presence: "visible",
            relevant: [],
            restoreState: "manual",
            scope: "name",
            use: "",
            usehref: "",
            w: {
              value: 0,
              unit: ""
            },
            x: {
              value: 0,
              unit: ""
            },
            y: {
              value: 0,
              unit: ""
            },
            proto: {
              area: _objectSpread(_objectSpread({}, attributes), {}, {
                colSpan: 1,
                x: {
                  value: 0,
                  unit: ""
                },
                y: {
                  value: -3.14,
                  unit: "in"
                },
                relevant: [{
                  excluded: true,
                  viewname: "foo"
                }, {
                  excluded: false,
                  viewname: "bar"
                }]
              }),
              color: [_objectSpread(_objectSpread({}, colorAttributes), {}, {
                value: {
                  r: 111,
                  g: 222,
                  b: 123
                }
              }), _objectSpread(_objectSpread({}, colorAttributes), {}, {
                value: {
                  r: 111,
                  g: 0,
                  b: 123
                }
              })],
              medium: [_objectSpread(_objectSpread({}, mediumAttributes), {}, {
                imagingBBox: {
                  x: {
                    value: 1,
                    unit: ""
                  },
                  y: {
                    value: 2,
                    unit: "in"
                  },
                  width: {
                    value: 3.4,
                    unit: "cm"
                  },
                  height: {
                    value: 5.67,
                    unit: "px"
                  }
                }
              }), _objectSpread(_objectSpread({}, mediumAttributes), {}, {
                imagingBBox: {
                  x: {
                    value: -1,
                    unit: ""
                  },
                  y: {
                    value: -1,
                    unit: ""
                  },
                  width: {
                    value: -1,
                    unit: ""
                  },
                  height: {
                    value: -1,
                    unit: ""
                  }
                }
              })]
            }
          }
        },
        config: {
          acrobat: {
            acrobat7: {
              dynamicRender: {
                $content: "forbidden"
              }
            },
            autoSave: {
              $content: "enabled"
            },
            validate: {
              $content: "preSubmit"
            },
            submitUrl: [{
              $content: "http://a.b.c"
            }, {
              $content: "http://d.e.f"
            }, {
              $content: "http://g.h.i"
            }]
          },
          present: {
            pdf: {
              name: "hello",
              adobeExtensionLevel: {
                $content: 7
              }
            }
          }
        }
      };
      expect(root[_xfa_object.$dump]()).toEqual(expected);
    });
    it("should parse a xfa document and check namespaces", function () {
      var xml = "\n<?xml version=\"1.0\"?>\n<xdp:xdp xmlns:xdp=\"http://ns.adobe.com/xdp/\">\n  <config xmlns:foo=\"http:/www.foo.com\" xmlns=\"http://www.xfa.org/schema/xci/3.1/\">\n    <present xmlns=\"http://www.mozilla.org\">\n      <pdf name=\"hello\">\n        <adobeExtensionLevel>\n          7\n        </adobeExtensionLevel>\n      </pdf>\n    </present>\n    <acrobat>\n      <foo:submitUrl>http://a.b.c</foo:submitUrl>\n      <submitUrl>http://c.b.a</submitUrl>\n    </acrobat>\n  </config>\n  <template baseProfile=\"full\" xmlns=\"http://www.allizom.org\">\n    <extras>\n      <float>1.23</float>\n    </extras>\n  </template>\n</xdp:xdp>\n      ";
      var root = new _parser.XFAParser().parse(xml);
      var expected = {
        uuid: "",
        timeStamp: "",
        config: {
          acrobat: {
            submitUrl: {
              $content: "http://c.b.a"
            }
          }
        }
      };
      expect(root[_xfa_object.$dump]()).toEqual(expected);
    });
    it("should parse a xfa document with xhtml", function () {
      var xml = "\n<?xml version=\"1.0\"?>\n<xdp:xdp xmlns:xdp=\"http://ns.adobe.com/xdp/\">\n  <template xmlns=\"http://www.xfa.org/schema/xfa-template/3.3\">\n    <extras>\n      <text>\n        <body xmlns=\"http://www.w3.org/1999/xhtml\">\n          <p style=\"foo: bar; text-indent:0.5in; line-height:11px;bar:foo;tab-stop: left 0.5in\">\n            The first line of this paragraph is indented a half-inch.<br/>\n            Successive lines are not indented.<br/>\n            This is the last line of the paragraph.<br/>\n          </p>\n        </body>\n      </text>\n    </extras>\n  </template>\n</xdp:xdp>\n      ";

      var root = new _parser.XFAParser().parse(xml)[_xfa_object.$dump]();

      var p = root.template.extras.text.$content[_xfa_object.$getChildren]()[0];

      expect(p.style).toEqual("text-indent:0.5in;line-height:11px;tab-stop:left 0.5in");
      expect(p[_xfa_object.$text]()).toEqual(["The first line of this paragraph is indented a half-inch.\n", "Successive lines are not indented.\n", "This is the last line of the paragraph.\n"].join(""));
    });
  });
});