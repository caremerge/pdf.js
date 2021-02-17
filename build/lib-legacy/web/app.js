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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFViewerApplication = exports.PDFPrintServiceFactory = exports.DefaultExternalServices = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _ui_utils = require("./ui_utils.js");

var _app_options = require("./app_options.js");

var _pdf = require("../pdf");

var _pdf_cursor_tools = require("./pdf_cursor_tools.js");

var _pdf_rendering_queue = require("./pdf_rendering_queue.js");

var _overlay_manager = require("./overlay_manager.js");

var _password_prompt = require("./password_prompt.js");

var _pdf_attachment_viewer = require("./pdf_attachment_viewer.js");

var _pdf_document_properties = require("./pdf_document_properties.js");

var _pdf_find_bar = require("./pdf_find_bar.js");

var _pdf_find_controller = require("./pdf_find_controller.js");

var _pdf_history = require("./pdf_history.js");

var _pdf_layer_viewer = require("./pdf_layer_viewer.js");

var _pdf_link_service = require("./pdf_link_service.js");

var _pdf_outline_viewer = require("./pdf_outline_viewer.js");

var _pdf_presentation_mode = require("./pdf_presentation_mode.js");

var _pdf_sidebar = require("./pdf_sidebar.js");

var _pdf_sidebar_resizer = require("./pdf_sidebar_resizer.js");

var _pdf_thumbnail_viewer = require("./pdf_thumbnail_viewer.js");

var _pdf_viewer = require("./pdf_viewer.js");

var _secondary_toolbar = require("./secondary_toolbar.js");

var _toolbar = require("./toolbar.js");

var _viewer_compatibility = require("./viewer_compatibility.js");

var _view_history = require("./view_history.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_SCALE_DELTA = 1.1;
var DISABLE_AUTO_FETCH_LOADING_BAR_TIMEOUT = 5000;
var FORCE_PAGES_LOADED_TIMEOUT = 10000;
var WHEEL_ZOOM_DISABLED_TIMEOUT = 1000;
var ENABLE_PERMISSIONS_CLASS = "enablePermissions";
var ViewOnLoad = {
  UNKNOWN: -1,
  PREVIOUS: 0,
  INITIAL: 1
};
var ViewerCssTheme = {
  AUTOMATIC: 0,
  LIGHT: 1,
  DARK: 2
};
var KNOWN_VERSIONS = ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0", "2.1", "2.2", "2.3"];
var KNOWN_GENERATORS = ["acrobat distiller", "acrobat pdfwriter", "adobe livecycle", "adobe pdf library", "adobe photoshop", "ghostscript", "tcpdf", "cairo", "dvipdfm", "dvips", "pdftex", "pdfkit", "itext", "prince", "quarkxpress", "mac os x", "microsoft", "openoffice", "oracle", "luradocument", "pdf-xchange", "antenna house", "aspose.cells", "fpdf"];

var DefaultExternalServices = /*#__PURE__*/function () {
  function DefaultExternalServices() {
    _classCallCheck(this, DefaultExternalServices);

    throw new Error("Cannot initialize DefaultExternalServices.");
  }

  _createClass(DefaultExternalServices, null, [{
    key: "updateFindControlState",
    value: function updateFindControlState(data) {}
  }, {
    key: "updateFindMatchesCount",
    value: function updateFindMatchesCount(data) {}
  }, {
    key: "initPassiveLoading",
    value: function initPassiveLoading(callbacks) {}
  }, {
    key: "fallback",
    value: function () {
      var _fallback = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fallback(_x) {
        return _fallback.apply(this, arguments);
      }

      return fallback;
    }()
  }, {
    key: "reportTelemetry",
    value: function reportTelemetry(data) {}
  }, {
    key: "createDownloadManager",
    value: function createDownloadManager(options) {
      throw new Error("Not implemented: createDownloadManager");
    }
  }, {
    key: "createPreferences",
    value: function createPreferences() {
      throw new Error("Not implemented: createPreferences");
    }
  }, {
    key: "createL10n",
    value: function createL10n(options) {
      throw new Error("Not implemented: createL10n");
    }
  }, {
    key: "createScripting",
    value: function createScripting(options) {
      throw new Error("Not implemented: createScripting");
    }
  }, {
    key: "supportsIntegratedFind",
    get: function get() {
      return (0, _pdf.shadow)(this, "supportsIntegratedFind", false);
    }
  }, {
    key: "supportsDocumentFonts",
    get: function get() {
      return (0, _pdf.shadow)(this, "supportsDocumentFonts", true);
    }
  }, {
    key: "supportedMouseWheelZoomModifierKeys",
    get: function get() {
      return (0, _pdf.shadow)(this, "supportedMouseWheelZoomModifierKeys", {
        ctrlKey: true,
        metaKey: true
      });
    }
  }, {
    key: "isInAutomation",
    get: function get() {
      return (0, _pdf.shadow)(this, "isInAutomation", false);
    }
  }]);

  return DefaultExternalServices;
}();

exports.DefaultExternalServices = DefaultExternalServices;
var PDFViewerApplication = {
  initialBookmark: document.location.hash.substring(1),
  _initializedCapability: (0, _pdf.createPromiseCapability)(),
  fellback: false,
  appConfig: null,
  pdfDocument: null,
  pdfLoadingTask: null,
  printService: null,
  pdfViewer: null,
  pdfThumbnailViewer: null,
  pdfRenderingQueue: null,
  pdfPresentationMode: null,
  pdfDocumentProperties: null,
  pdfLinkService: null,
  pdfHistory: null,
  pdfSidebar: null,
  pdfSidebarResizer: null,
  pdfOutlineViewer: null,
  pdfAttachmentViewer: null,
  pdfLayerViewer: null,
  pdfCursorTools: null,
  store: null,
  downloadManager: null,
  overlayManager: null,
  preferences: null,
  toolbar: null,
  secondaryToolbar: null,
  eventBus: null,
  l10n: null,
  isInitialViewSet: false,
  downloadComplete: false,
  isViewerEmbedded: window.parent !== window,
  url: "",
  baseUrl: "",
  externalServices: DefaultExternalServices,
  _boundEvents: Object.create(null),
  documentInfo: null,
  metadata: null,
  _contentDispositionFilename: null,
  _contentLength: null,
  triggerDelayedFallback: null,
  _saveInProgress: false,
  _wheelUnusedTicks: 0,
  _idleCallbacks: new Set(),
  _scriptingInstance: null,
  _mouseState: Object.create(null),
  _localizeMessage: function _localizeMessage(key) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var DEFAULT_L10N_STRINGS = {
      error_file: "File: {{file}}",
      error_line: "Line: {{line}}",
      error_message: "Message: {{message}}",
      error_stack: "Stack: {{stack}}",
      error_version_info: "PDF.js v{{version}} (build: {{build}})",
      invalid_file_error: "Invalid or corrupted PDF file.",
      loading_error: "An error occurred while loading the PDF.",
      missing_file_error: "Missing PDF file.",
      printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
      printing_not_supported: "Warning: Printing is not fully supported by this browser.",
      rendering_error: "An error occurred while rendering the page.",
      unexpected_response_error: "Unexpected server response.",
      web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts."
    };
    return this.l10n.get(key || "", args, DEFAULT_L10N_STRINGS[key]);
  },
  initialize: function initialize(appConfig) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var appContainer;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.preferences = _this.externalServices.createPreferences();
              _this.appConfig = appConfig;
              _context2.next = 4;
              return _this._readPreferences();

            case 4:
              _context2.next = 6;
              return _this._parseHashParameters();

            case 6:
              _this._forceCssTheme();

              _context2.next = 9;
              return _this._initializeL10n();

            case 9:
              if (_this.isViewerEmbedded && _app_options.AppOptions.get("externalLinkTarget") === _pdf.LinkTarget.NONE) {
                _app_options.AppOptions.set("externalLinkTarget", _pdf.LinkTarget.TOP);
              }

              _context2.next = 12;
              return _this._initializeViewerComponents();

            case 12:
              _this.bindEvents();

              _this.bindWindowEvents();

              appContainer = appConfig.appContainer || document.documentElement;

              _this.l10n.translate(appContainer).then(function () {
                _this.eventBus.dispatch("localized", {
                  source: _this
                });
              });

              _this._initializedCapability.resolve();

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _readPreferences: function _readPreferences() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!_app_options.AppOptions.get("disablePreferences")) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              _context3.t0 = _app_options.AppOptions;
              _context3.next = 6;
              return _this2.preferences.getAll();

            case 6:
              _context3.t1 = _context3.sent;

              _context3.t0.setAll.call(_context3.t0, _context3.t1);

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t2 = _context3["catch"](2);
              console.error("_readPreferences: \"".concat(_context3.t2 === null || _context3.t2 === void 0 ? void 0 : _context3.t2.message, "\"."));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 10]]);
    }))();
  },
  _parseHashParameters: function _parseHashParameters() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var hash, hashParams, waitOn, viewer, enabled;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (_app_options.AppOptions.get("pdfBugEnabled")) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", undefined);

            case 2:
              hash = document.location.hash.substring(1);

              if (hash) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", undefined);

            case 5:
              hashParams = (0, _ui_utils.parseQueryString)(hash), waitOn = [];

              if ("disableworker" in hashParams && hashParams.disableworker === "true") {
                waitOn.push(loadFakeWorker());
              }

              if ("disablerange" in hashParams) {
                _app_options.AppOptions.set("disableRange", hashParams.disablerange === "true");
              }

              if ("disablestream" in hashParams) {
                _app_options.AppOptions.set("disableStream", hashParams.disablestream === "true");
              }

              if ("disableautofetch" in hashParams) {
                _app_options.AppOptions.set("disableAutoFetch", hashParams.disableautofetch === "true");
              }

              if ("disablefontface" in hashParams) {
                _app_options.AppOptions.set("disableFontFace", hashParams.disablefontface === "true");
              }

              if ("disablehistory" in hashParams) {
                _app_options.AppOptions.set("disableHistory", hashParams.disablehistory === "true");
              }

              if ("webgl" in hashParams) {
                _app_options.AppOptions.set("enableWebGL", hashParams.webgl === "true");
              }

              if ("verbosity" in hashParams) {
                _app_options.AppOptions.set("verbosity", hashParams.verbosity | 0);
              }

              if (!("textlayer" in hashParams)) {
                _context4.next = 23;
                break;
              }

              _context4.t0 = hashParams.textlayer;
              _context4.next = _context4.t0 === "off" ? 18 : _context4.t0 === "visible" ? 20 : _context4.t0 === "shadow" ? 20 : _context4.t0 === "hover" ? 20 : 23;
              break;

            case 18:
              _app_options.AppOptions.set("textLayerMode", _ui_utils.TextLayerMode.DISABLE);

              return _context4.abrupt("break", 23);

            case 20:
              viewer = _this3.appConfig.viewerContainer;
              viewer.classList.add("textLayer-" + hashParams.textlayer);
              return _context4.abrupt("break", 23);

            case 23:
              if ("pdfbug" in hashParams) {
                _app_options.AppOptions.set("pdfBug", true);

                _app_options.AppOptions.set("fontExtraProperties", true);

                enabled = hashParams.pdfbug.split(",");
                waitOn.push(loadAndEnablePDFBug(enabled));
              }

              if ("locale" in hashParams) {
                _app_options.AppOptions.set("locale", hashParams.locale);
              }

              if (!(waitOn.length === 0)) {
                _context4.next = 27;
                break;
              }

              return _context4.abrupt("return", undefined);

            case 27:
              return _context4.abrupt("return", Promise.all(waitOn)["catch"](function (reason) {
                console.error("_parseHashParameters: \"".concat(reason.message, "\"."));
              }));

            case 28:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  _initializeL10n: function _initializeL10n() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var dir;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this4.l10n = _this4.externalServices.createL10n({
                locale: _app_options.AppOptions.get("locale")
              });
              _context5.next = 3;
              return _this4.l10n.getDirection();

            case 3:
              dir = _context5.sent;
              document.getElementsByTagName("html")[0].dir = dir;

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  _forceCssTheme: function _forceCssTheme() {
    var cssTheme = _app_options.AppOptions.get("viewerCssTheme");

    if (cssTheme === ViewerCssTheme.AUTOMATIC || !Object.values(ViewerCssTheme).includes(cssTheme)) {
      return;
    }

    try {
      var styleSheet = document.styleSheets[0];
      var cssRules = (styleSheet === null || styleSheet === void 0 ? void 0 : styleSheet.cssRules) || [];

      for (var i = 0, ii = cssRules.length; i < ii; i++) {
        var _rule$media;

        var rule = cssRules[i];

        if (rule instanceof CSSMediaRule && ((_rule$media = rule.media) === null || _rule$media === void 0 ? void 0 : _rule$media[0]) === "(prefers-color-scheme: dark)") {
          if (cssTheme === ViewerCssTheme.LIGHT) {
            styleSheet.deleteRule(i);
            return;
          }

          var darkRules = /^@media \(prefers-color-scheme: dark\) {\n\s*([\w\s-.,:;/\\{}()]+)\n}$/.exec(rule.cssText);

          if (darkRules !== null && darkRules !== void 0 && darkRules[1]) {
            styleSheet.deleteRule(i);
            styleSheet.insertRule(darkRules[1], i);
          }

          return;
        }
      }
    } catch (reason) {
      console.error("_forceCssTheme: \"".concat(reason === null || reason === void 0 ? void 0 : reason.message, "\"."));
    }
  },
  _initializeViewerComponents: function _initializeViewerComponents() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      var appConfig, eventBus, pdfRenderingQueue, pdfLinkService, downloadManager, findController, container, viewer;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              appConfig = _this5.appConfig;
              eventBus = appConfig.eventBus || new _ui_utils.EventBus({
                isInAutomation: _this5.externalServices.isInAutomation
              });
              _this5.eventBus = eventBus;
              _this5.overlayManager = new _overlay_manager.OverlayManager();
              pdfRenderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
              pdfRenderingQueue.onIdle = _this5.cleanup.bind(_this5);
              _this5.pdfRenderingQueue = pdfRenderingQueue;
              pdfLinkService = new _pdf_link_service.PDFLinkService({
                eventBus: eventBus,
                externalLinkTarget: _app_options.AppOptions.get("externalLinkTarget"),
                externalLinkRel: _app_options.AppOptions.get("externalLinkRel"),
                ignoreDestinationZoom: _app_options.AppOptions.get("ignoreDestinationZoom")
              });
              _this5.pdfLinkService = pdfLinkService;
              downloadManager = _this5.externalServices.createDownloadManager();
              _this5.downloadManager = downloadManager;
              findController = new _pdf_find_controller.PDFFindController({
                linkService: pdfLinkService,
                eventBus: eventBus
              });
              _this5.findController = findController;
              container = appConfig.mainContainer;
              viewer = appConfig.viewerContainer;
              _this5.pdfViewer = new _pdf_viewer.PDFViewer({
                container: container,
                viewer: viewer,
                eventBus: eventBus,
                renderingQueue: pdfRenderingQueue,
                linkService: pdfLinkService,
                downloadManager: downloadManager,
                findController: findController,
                renderer: _app_options.AppOptions.get("renderer"),
                enableWebGL: _app_options.AppOptions.get("enableWebGL"),
                l10n: _this5.l10n,
                textLayerMode: _app_options.AppOptions.get("textLayerMode"),
                imageResourcesPath: _app_options.AppOptions.get("imageResourcesPath"),
                renderInteractiveForms: _app_options.AppOptions.get("renderInteractiveForms"),
                enablePrintAutoRotate: _app_options.AppOptions.get("enablePrintAutoRotate"),
                useOnlyCssZoom: _app_options.AppOptions.get("useOnlyCssZoom"),
                maxCanvasPixels: _app_options.AppOptions.get("maxCanvasPixels"),
                enableScripting: _app_options.AppOptions.get("enableScripting"),
                mouseState: _this5._mouseState
              });
              pdfRenderingQueue.setViewer(_this5.pdfViewer);
              pdfLinkService.setViewer(_this5.pdfViewer);
              _this5.pdfThumbnailViewer = new _pdf_thumbnail_viewer.PDFThumbnailViewer({
                container: appConfig.sidebar.thumbnailView,
                eventBus: eventBus,
                renderingQueue: pdfRenderingQueue,
                linkService: pdfLinkService,
                l10n: _this5.l10n
              });
              pdfRenderingQueue.setThumbnailViewer(_this5.pdfThumbnailViewer);
              _this5.pdfHistory = new _pdf_history.PDFHistory({
                linkService: pdfLinkService,
                eventBus: eventBus
              });
              pdfLinkService.setHistory(_this5.pdfHistory);

              if (!_this5.supportsIntegratedFind) {
                _this5.findBar = new _pdf_find_bar.PDFFindBar(appConfig.findBar, eventBus, _this5.l10n);
              }

              _this5.pdfDocumentProperties = new _pdf_document_properties.PDFDocumentProperties(appConfig.documentProperties, _this5.overlayManager, eventBus, _this5.l10n);
              _this5.pdfCursorTools = new _pdf_cursor_tools.PDFCursorTools({
                container: container,
                eventBus: eventBus,
                cursorToolOnLoad: _app_options.AppOptions.get("cursorToolOnLoad")
              });
              _this5.toolbar = new _toolbar.Toolbar(appConfig.toolbar, eventBus, _this5.l10n);
              _this5.secondaryToolbar = new _secondary_toolbar.SecondaryToolbar(appConfig.secondaryToolbar, container, eventBus);

              if (_this5.supportsFullscreen) {
                _this5.pdfPresentationMode = new _pdf_presentation_mode.PDFPresentationMode({
                  container: container,
                  pdfViewer: _this5.pdfViewer,
                  eventBus: eventBus
                });
              }

              _this5.passwordPrompt = new _password_prompt.PasswordPrompt(appConfig.passwordOverlay, _this5.overlayManager, _this5.l10n, _this5.isViewerEmbedded);
              _this5.pdfOutlineViewer = new _pdf_outline_viewer.PDFOutlineViewer({
                container: appConfig.sidebar.outlineView,
                eventBus: eventBus,
                linkService: pdfLinkService
              });
              _this5.pdfAttachmentViewer = new _pdf_attachment_viewer.PDFAttachmentViewer({
                container: appConfig.sidebar.attachmentsView,
                eventBus: eventBus,
                downloadManager: downloadManager
              });
              _this5.pdfLayerViewer = new _pdf_layer_viewer.PDFLayerViewer({
                container: appConfig.sidebar.layersView,
                eventBus: eventBus,
                l10n: _this5.l10n
              });
              _this5.pdfSidebar = new _pdf_sidebar.PDFSidebar({
                elements: appConfig.sidebar,
                pdfViewer: _this5.pdfViewer,
                pdfThumbnailViewer: _this5.pdfThumbnailViewer,
                eventBus: eventBus,
                l10n: _this5.l10n
              });
              _this5.pdfSidebar.onToggled = _this5.forceRendering.bind(_this5);
              _this5.pdfSidebarResizer = new _pdf_sidebar_resizer.PDFSidebarResizer(appConfig.sidebarResizer, eventBus, _this5.l10n);

            case 35:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  run: function run(config) {
    this.initialize(config).then(webViewerInitialized);
  },

  get initialized() {
    return this._initializedCapability.settled;
  },

  get initializedPromise() {
    return this._initializedCapability.promise;
  },

  zoomIn: function zoomIn(ticks) {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }

    var newScale = this.pdfViewer.currentScale;

    do {
      newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.ceil(newScale * 10) / 10;
      newScale = Math.min(_ui_utils.MAX_SCALE, newScale);
    } while (--ticks > 0 && newScale < _ui_utils.MAX_SCALE);

    this.pdfViewer.currentScaleValue = newScale;
  },
  zoomOut: function zoomOut(ticks) {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }

    var newScale = this.pdfViewer.currentScale;

    do {
      newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.floor(newScale * 10) / 10;
      newScale = Math.max(_ui_utils.MIN_SCALE, newScale);
    } while (--ticks > 0 && newScale > _ui_utils.MIN_SCALE);

    this.pdfViewer.currentScaleValue = newScale;
  },
  zoomReset: function zoomReset() {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }

    this.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
  },

  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  },

  get page() {
    return this.pdfViewer.currentPageNumber;
  },

  set page(val) {
    this.pdfViewer.currentPageNumber = val;
  },

  get supportsPrinting() {
    return PDFPrintServiceFactory.instance.supportsPrinting;
  },

  get supportsFullscreen() {
    var doc = document.documentElement;
    var support = !!(doc.requestFullscreen || doc.mozRequestFullScreen || doc.webkitRequestFullScreen);

    if (document.fullscreenEnabled === false || document.mozFullScreenEnabled === false || document.webkitFullscreenEnabled === false) {
      support = false;
    }

    return (0, _pdf.shadow)(this, "supportsFullscreen", support);
  },

  get supportsIntegratedFind() {
    return this.externalServices.supportsIntegratedFind;
  },

  get supportsDocumentFonts() {
    return this.externalServices.supportsDocumentFonts;
  },

  get loadingBar() {
    var bar = new _ui_utils.ProgressBar("#loadingBar");
    return (0, _pdf.shadow)(this, "loadingBar", bar);
  },

  get supportedMouseWheelZoomModifierKeys() {
    return this.externalServices.supportedMouseWheelZoomModifierKeys;
  },

  initPassiveLoading: function initPassiveLoading() {
    throw new Error("Not implemented: initPassiveLoading");
  },
  setTitleUsingUrl: function setTitleUsingUrl() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    this.url = url;
    this.baseUrl = url.split("#")[0];
    var title = (0, _ui_utils.getPDFFileNameFromURL)(url, "");

    if (!title) {
      try {
        title = decodeURIComponent((0, _pdf.getFilenameFromUrl)(url)) || url;
      } catch (ex) {
        title = url;
      }
    }

    this.setTitle(title);
  },
  setTitle: function setTitle(title) {
    if (this.isViewerEmbedded) {
      return;
    }

    document.title = title;
  },

  get _docFilename() {
    return this._contentDispositionFilename || (0, _ui_utils.getPDFFileNameFromURL)(this.url);
  },

  _cancelIdleCallbacks: function _cancelIdleCallbacks() {
    if (!this._idleCallbacks.size) {
      return;
    }

    var _iterator = _createForOfIteratorHelper(this._idleCallbacks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var callback = _step.value;
        window.cancelIdleCallback(callback);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this._idleCallbacks.clear();
  },
  _destroyScriptingInstance: function _destroyScriptingInstance() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      var _this6$_scriptingInst, scripting, internalEvents, domEvents, _iterator2, _step2, _step2$value, name, listener, _iterator3, _step3, _step3$value, _name, _listener;

      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (_this6._scriptingInstance) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return");

            case 2:
              _this6$_scriptingInst = _this6._scriptingInstance, scripting = _this6$_scriptingInst.scripting, internalEvents = _this6$_scriptingInst.internalEvents, domEvents = _this6$_scriptingInst.domEvents;
              _context7.prev = 3;
              _context7.next = 6;
              return scripting.destroySandbox();

            case 6:
              _context7.next = 10;
              break;

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](3);

            case 10:
              _iterator2 = _createForOfIteratorHelper(internalEvents);

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _step2$value = _slicedToArray(_step2.value, 2), name = _step2$value[0], listener = _step2$value[1];

                  _this6.eventBus._off(name, listener);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              internalEvents.clear();
              _iterator3 = _createForOfIteratorHelper(domEvents);

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  _step3$value = _slicedToArray(_step3.value, 2), _name = _step3$value[0], _listener = _step3$value[1];
                  window.removeEventListener(_name, _listener);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              domEvents.clear();
              delete _this6._mouseState.isDown;
              _this6._scriptingInstance = null;

            case 18:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[3, 8]]);
    }))();
  },
  close: function close() {
    var _this7 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
      var container, promises;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _this7._unblockDocumentLoadEvent();

              container = _this7.appConfig.errorWrapper.container;
              container.hidden = true;

              if (_this7.pdfLoadingTask) {
                _context8.next = 5;
                break;
              }

              return _context8.abrupt("return", undefined);

            case 5:
              promises = [];
              promises.push(_this7.pdfLoadingTask.destroy());
              _this7.pdfLoadingTask = null;

              if (_this7.pdfDocument) {
                _this7.pdfDocument = null;

                _this7.pdfThumbnailViewer.setDocument(null);

                _this7.pdfViewer.setDocument(null);

                _this7.pdfLinkService.setDocument(null);

                _this7.pdfDocumentProperties.setDocument(null);
              }

              webViewerResetPermissions();
              _this7.store = null;
              _this7.isInitialViewSet = false;
              _this7.downloadComplete = false;
              _this7.url = "";
              _this7.baseUrl = "";
              _this7.documentInfo = null;
              _this7.metadata = null;
              _this7._contentDispositionFilename = null;
              _this7._contentLength = null;
              _this7.triggerDelayedFallback = null;
              _this7._saveInProgress = false;

              _this7._cancelIdleCallbacks();

              promises.push(_this7._destroyScriptingInstance());

              _this7.pdfSidebar.reset();

              _this7.pdfOutlineViewer.reset();

              _this7.pdfAttachmentViewer.reset();

              _this7.pdfLayerViewer.reset();

              if (_this7.pdfHistory) {
                _this7.pdfHistory.reset();
              }

              if (_this7.findBar) {
                _this7.findBar.reset();
              }

              _this7.toolbar.reset();

              _this7.secondaryToolbar.reset();

              if (typeof PDFBug !== "undefined") {
                PDFBug.cleanup();
              }

              _context8.next = 34;
              return Promise.all(promises);

            case 34:
              return _context8.abrupt("return", undefined);

            case 35:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  open: function open(file, args) {
    var _this8 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
      var workerParameters, key, parameters, apiParameters, _key, value, _key2, loadingTask;

      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!_this8.pdfLoadingTask) {
                _context9.next = 3;
                break;
              }

              _context9.next = 3;
              return _this8.close();

            case 3:
              workerParameters = _app_options.AppOptions.getAll(_app_options.OptionKind.WORKER);

              for (key in workerParameters) {
                _pdf.GlobalWorkerOptions[key] = workerParameters[key];
              }

              parameters = Object.create(null);

              if (typeof file === "string") {
                _this8.setTitleUsingUrl(file);

                parameters.url = file;
              } else if (file && "byteLength" in file) {
                parameters.data = file;
              } else if (file.url && file.originalUrl) {
                _this8.setTitleUsingUrl(file.originalUrl);

                parameters.url = file.url;
              }

              apiParameters = _app_options.AppOptions.getAll(_app_options.OptionKind.API);

              for (_key in apiParameters) {
                value = apiParameters[_key];

                if (_key === "docBaseUrl" && !value) {}

                parameters[_key] = value;
              }

              if (args) {
                for (_key2 in args) {
                  parameters[_key2] = args[_key2];
                }
              }

              loadingTask = (0, _pdf.getDocument)(parameters);
              _this8.pdfLoadingTask = loadingTask;

              loadingTask.onPassword = function (updateCallback, reason) {
                _this8.pdfLinkService.externalLinkEnabled = false;

                _this8.passwordPrompt.setUpdateCallback(updateCallback, reason);

                _this8.passwordPrompt.open();
              };

              loadingTask.onProgress = function (_ref) {
                var loaded = _ref.loaded,
                    total = _ref.total;

                _this8.progress(loaded / total);
              };

              loadingTask.onUnsupportedFeature = _this8.fallback.bind(_this8);
              return _context9.abrupt("return", loadingTask.promise.then(function (pdfDocument) {
                _this8.load(pdfDocument);
              }, function (exception) {
                if (loadingTask !== _this8.pdfLoadingTask) {
                  return undefined;
                }

                var key = "loading_error";

                if (exception instanceof _pdf.InvalidPDFException) {
                  key = "invalid_file_error";
                } else if (exception instanceof _pdf.MissingPDFException) {
                  key = "missing_file_error";
                } else if (exception instanceof _pdf.UnexpectedResponseException) {
                  key = "unexpected_response_error";
                }

                return _this8._localizeMessage(key).then(function (msg) {
                  _this8._documentError(msg, {
                    message: exception === null || exception === void 0 ? void 0 : exception.message
                  });

                  throw exception;
                });
              }));

            case 16:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  },
  download: function download() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$sourceEventType = _ref2.sourceEventType,
        sourceEventType = _ref2$sourceEventType === void 0 ? "download" : _ref2$sourceEventType;

    function downloadByUrl() {
      downloadManager.downloadUrl(url, filename);
    }

    var downloadManager = this.downloadManager,
        url = this.baseUrl,
        filename = this._docFilename;

    if (!this.pdfDocument || !this.downloadComplete) {
      downloadByUrl();
      return;
    }

    this.pdfDocument.getData().then(function (data) {
      var blob = new Blob([data], {
        type: "application/pdf"
      });
      downloadManager.download(blob, url, filename, sourceEventType);
    })["catch"](downloadByUrl);
  },
  save: function save() {
    var _arguments = arguments,
        _this9 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
      var _this9$_scriptingInst;

      var _ref3, _ref3$sourceEventType, sourceEventType, downloadManager, url, filename;

      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ref3 = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {}, _ref3$sourceEventType = _ref3.sourceEventType, sourceEventType = _ref3$sourceEventType === void 0 ? "download" : _ref3$sourceEventType;

              if (!_this9._saveInProgress) {
                _context11.next = 3;
                break;
              }

              return _context11.abrupt("return");

            case 3:
              downloadManager = _this9.downloadManager, url = _this9.baseUrl, filename = _this9._docFilename;

              if (!(!_this9.pdfDocument || !_this9.downloadComplete)) {
                _context11.next = 7;
                break;
              }

              _this9.download({
                sourceEventType: sourceEventType
              });

              return _context11.abrupt("return");

            case 7:
              _this9._saveInProgress = true;
              _context11.next = 10;
              return (_this9$_scriptingInst = _this9._scriptingInstance) === null || _this9$_scriptingInst === void 0 ? void 0 : _this9$_scriptingInst.scripting.dispatchEventInSandbox({
                id: "doc",
                name: "WillSave"
              });

            case 10:
              _this9.pdfDocument.saveDocument(_this9.pdfDocument.annotationStorage).then(function (data) {
                var blob = new Blob([data], {
                  type: "application/pdf"
                });
                downloadManager.download(blob, url, filename, sourceEventType);
              })["catch"](function () {
                _this9.download({
                  sourceEventType: sourceEventType
                });
              })["finally"]( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
                var _this9$_scriptingInst2;

                return _regenerator["default"].wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return (_this9$_scriptingInst2 = _this9._scriptingInstance) === null || _this9$_scriptingInst2 === void 0 ? void 0 : _this9$_scriptingInst2.scripting.dispatchEventInSandbox({
                          id: "doc",
                          name: "DidSave"
                        });

                      case 2:
                        _this9._saveInProgress = false;

                      case 3:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              })));

            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }))();
  },
  downloadOrSave: function downloadOrSave(options) {
    var _this$pdfDocument;

    if (((_this$pdfDocument = this.pdfDocument) === null || _this$pdfDocument === void 0 ? void 0 : _this$pdfDocument.annotationStorage.size) > 0) {
      this.save(options);
    } else {
      this.download(options);
    }
  },
  _delayedFallback: function _delayedFallback(featureId) {
    var _this10 = this;

    this.externalServices.reportTelemetry({
      type: "unsupportedFeature",
      featureId: featureId
    });

    if (!this.triggerDelayedFallback) {
      this.triggerDelayedFallback = function () {
        _this10.fallback(featureId);

        _this10.triggerDelayedFallback = null;
      };
    }
  },
  fallback: function fallback(featureId) {
    var _this11 = this;

    this.externalServices.reportTelemetry({
      type: "unsupportedFeature",
      featureId: featureId
    });

    switch (featureId) {
      case _pdf.UNSUPPORTED_FEATURES.errorFontLoadNative:
        return;
    }

    if (this.fellback) {
      return;
    }

    this.fellback = true;
    this.externalServices.fallback({
      featureId: featureId,
      url: this.baseUrl
    }).then(function (download) {
      if (!download) {
        return;
      }

      _this11.download({
        sourceEventType: "download"
      });
    });
  },
  _documentError: function _documentError(message) {
    var moreInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    this._unblockDocumentLoadEvent();

    this._otherError(message, moreInfo);
  },
  _otherError: function _otherError(message) {
    var moreInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var moreInfoText = [this._localizeMessage("error_version_info", {
      version: _pdf.version || "?",
      build: _pdf.build || "?"
    })];

    if (moreInfo) {
      moreInfoText.push(this._localizeMessage("error_message", {
        message: moreInfo.message
      }));

      if (moreInfo.stack) {
        moreInfoText.push(this._localizeMessage("error_stack", {
          stack: moreInfo.stack
        }));
      } else {
        if (moreInfo.filename) {
          moreInfoText.push(this._localizeMessage("error_file", {
            file: moreInfo.filename
          }));
        }

        if (moreInfo.lineNumber) {
          moreInfoText.push(this._localizeMessage("error_line", {
            line: moreInfo.lineNumber
          }));
        }
      }
    }

    var errorWrapperConfig = this.appConfig.errorWrapper;
    var errorWrapper = errorWrapperConfig.container;
    errorWrapper.hidden = false;
    var errorMessage = errorWrapperConfig.errorMessage;
    errorMessage.textContent = message;
    var closeButton = errorWrapperConfig.closeButton;

    closeButton.onclick = function () {
      errorWrapper.hidden = true;
    };

    var errorMoreInfo = errorWrapperConfig.errorMoreInfo;
    var moreInfoButton = errorWrapperConfig.moreInfoButton;
    var lessInfoButton = errorWrapperConfig.lessInfoButton;

    moreInfoButton.onclick = function () {
      errorMoreInfo.hidden = false;
      moreInfoButton.hidden = true;
      lessInfoButton.hidden = false;
      errorMoreInfo.style.height = errorMoreInfo.scrollHeight + "px";
    };

    lessInfoButton.onclick = function () {
      errorMoreInfo.hidden = true;
      moreInfoButton.hidden = false;
      lessInfoButton.hidden = true;
    };

    moreInfoButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    lessInfoButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    closeButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    moreInfoButton.hidden = false;
    lessInfoButton.hidden = true;
    Promise.all(moreInfoText).then(function (parts) {
      errorMoreInfo.value = parts.join("\n");
    });
  },
  progress: function progress(level) {
    var _this12 = this;

    if (this.downloadComplete) {
      return;
    }

    var percent = Math.round(level * 100);

    if (percent > this.loadingBar.percent || isNaN(percent)) {
      this.loadingBar.percent = percent;
      var disableAutoFetch = this.pdfDocument ? this.pdfDocument.loadingParams.disableAutoFetch : _app_options.AppOptions.get("disableAutoFetch");

      if (disableAutoFetch && percent) {
        if (this.disableAutoFetchLoadingBarTimeout) {
          clearTimeout(this.disableAutoFetchLoadingBarTimeout);
          this.disableAutoFetchLoadingBarTimeout = null;
        }

        this.loadingBar.show();
        this.disableAutoFetchLoadingBarTimeout = setTimeout(function () {
          _this12.loadingBar.hide();

          _this12.disableAutoFetchLoadingBarTimeout = null;
        }, DISABLE_AUTO_FETCH_LOADING_BAR_TIMEOUT);
      }
    }
  },
  load: function load(pdfDocument) {
    var _this13 = this;

    this.pdfDocument = pdfDocument;
    pdfDocument.getDownloadInfo().then(function (_ref5) {
      var length = _ref5.length;
      _this13._contentLength = length;
      _this13.downloadComplete = true;

      _this13.loadingBar.hide();

      firstPagePromise.then(function () {
        _this13.eventBus.dispatch("documentloaded", {
          source: _this13
        });
      });
    });
    var pageLayoutPromise = pdfDocument.getPageLayout()["catch"](function () {});
    var pageModePromise = pdfDocument.getPageMode()["catch"](function () {});
    var openActionPromise = pdfDocument.getOpenAction()["catch"](function () {});
    this.toolbar.setPagesCount(pdfDocument.numPages, false);
    this.secondaryToolbar.setPagesCount(pdfDocument.numPages);
    var baseDocumentUrl;
    baseDocumentUrl = null;
    this.pdfLinkService.setDocument(pdfDocument, baseDocumentUrl);
    this.pdfDocumentProperties.setDocument(pdfDocument, this.url);
    var pdfViewer = this.pdfViewer;
    pdfViewer.setDocument(pdfDocument);
    var firstPagePromise = pdfViewer.firstPagePromise,
        onePageRendered = pdfViewer.onePageRendered,
        pagesPromise = pdfViewer.pagesPromise;
    var pdfThumbnailViewer = this.pdfThumbnailViewer;
    pdfThumbnailViewer.setDocument(pdfDocument);
    var storedPromise = (this.store = new _view_history.ViewHistory(pdfDocument.fingerprint)).getMultiple({
      page: null,
      zoom: _ui_utils.DEFAULT_SCALE_VALUE,
      scrollLeft: "0",
      scrollTop: "0",
      rotation: null,
      sidebarView: _ui_utils.SidebarView.UNKNOWN,
      scrollMode: _ui_utils.ScrollMode.UNKNOWN,
      spreadMode: _ui_utils.SpreadMode.UNKNOWN
    })["catch"](function () {
      return Object.create(null);
    });
    firstPagePromise.then(function (pdfPage) {
      _this13.loadingBar.setWidth(_this13.appConfig.viewerContainer);

      _this13._initializeAnnotationStorageCallbacks(pdfDocument);

      Promise.all([_ui_utils.animationStarted, storedPromise, pageLayoutPromise, pageModePromise, openActionPromise]).then( /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee12(_ref6) {
          var _ref8, timeStamp, stored, pageLayout, pageMode, openAction, viewOnLoad, initialBookmark, zoom, hash, rotation, sidebarView, scrollMode, spreadMode;

          return _regenerator["default"].wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _ref8 = _slicedToArray(_ref6, 5), timeStamp = _ref8[0], stored = _ref8[1], pageLayout = _ref8[2], pageMode = _ref8[3], openAction = _ref8[4];
                  viewOnLoad = _app_options.AppOptions.get("viewOnLoad");

                  _this13._initializePdfHistory({
                    fingerprint: pdfDocument.fingerprint,
                    viewOnLoad: viewOnLoad,
                    initialDest: openAction === null || openAction === void 0 ? void 0 : openAction.dest
                  });

                  initialBookmark = _this13.initialBookmark;
                  zoom = _app_options.AppOptions.get("defaultZoomValue");
                  hash = zoom ? "zoom=".concat(zoom) : null;
                  rotation = null;
                  sidebarView = _app_options.AppOptions.get("sidebarViewOnLoad");
                  scrollMode = _app_options.AppOptions.get("scrollModeOnLoad");
                  spreadMode = _app_options.AppOptions.get("spreadModeOnLoad");

                  if (stored.page && viewOnLoad !== ViewOnLoad.INITIAL) {
                    hash = "page=".concat(stored.page, "&zoom=").concat(zoom || stored.zoom, ",") + "".concat(stored.scrollLeft, ",").concat(stored.scrollTop);
                    rotation = parseInt(stored.rotation, 10);

                    if (sidebarView === _ui_utils.SidebarView.UNKNOWN) {
                      sidebarView = stored.sidebarView | 0;
                    }

                    if (scrollMode === _ui_utils.ScrollMode.UNKNOWN) {
                      scrollMode = stored.scrollMode | 0;
                    }

                    if (spreadMode === _ui_utils.SpreadMode.UNKNOWN) {
                      spreadMode = stored.spreadMode | 0;
                    }
                  }

                  if (pageMode && sidebarView === _ui_utils.SidebarView.UNKNOWN) {
                    sidebarView = apiPageModeToSidebarView(pageMode);
                  }

                  if (pageLayout && spreadMode === _ui_utils.SpreadMode.UNKNOWN) {
                    spreadMode = apiPageLayoutToSpreadMode(pageLayout);
                  }

                  _this13.setInitialView(hash, {
                    rotation: rotation,
                    sidebarView: sidebarView,
                    scrollMode: scrollMode,
                    spreadMode: spreadMode
                  });

                  _this13.eventBus.dispatch("documentinit", {
                    source: _this13
                  });

                  if (!_this13.isViewerEmbedded) {
                    pdfViewer.focus();
                  }

                  _this13._initializePermissions(pdfDocument);

                  _context12.next = 19;
                  return Promise.race([pagesPromise, new Promise(function (resolve) {
                    setTimeout(resolve, FORCE_PAGES_LOADED_TIMEOUT);
                  })]);

                case 19:
                  if (!(!initialBookmark && !hash)) {
                    _context12.next = 21;
                    break;
                  }

                  return _context12.abrupt("return");

                case 21:
                  if (!pdfViewer.hasEqualPageSizes) {
                    _context12.next = 23;
                    break;
                  }

                  return _context12.abrupt("return");

                case 23:
                  _this13.initialBookmark = initialBookmark;
                  pdfViewer.currentScaleValue = pdfViewer.currentScaleValue;

                  _this13.setInitialView(hash);

                case 26:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function (_x2) {
          return _ref7.apply(this, arguments);
        };
      }())["catch"](function () {
        _this13.setInitialView();
      }).then(function () {
        pdfViewer.update();
      });
    });
    pagesPromise.then(function () {
      _this13._unblockDocumentLoadEvent();

      _this13._initializeAutoPrint(pdfDocument, openActionPromise);
    });
    onePageRendered.then(function () {
      pdfDocument.getOutline().then(function (outline) {
        _this13.pdfOutlineViewer.render({
          outline: outline,
          pdfDocument: pdfDocument
        });
      });
      pdfDocument.getAttachments().then(function (attachments) {
        _this13.pdfAttachmentViewer.render({
          attachments: attachments
        });
      });
      pdfViewer.optionalContentConfigPromise.then(function (optionalContentConfig) {
        _this13.pdfLayerViewer.render({
          optionalContentConfig: optionalContentConfig,
          pdfDocument: pdfDocument
        });
      });

      if ("requestIdleCallback" in window) {
        var callback = window.requestIdleCallback(function () {
          _this13._collectTelemetry(pdfDocument);

          _this13._idleCallbacks["delete"](callback);
        }, {
          timeout: 1000
        });

        _this13._idleCallbacks.add(callback);
      }

      _this13._initializeJavaScript(pdfDocument);
    });

    this._initializePageLabels(pdfDocument);

    this._initializeMetadata(pdfDocument);
  },
  _initializeJavaScript: function _initializeJavaScript(pdfDocument) {
    var _this14 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee15() {
      var _yield$Promise$all, _yield$Promise$all2, objects, calculationOrder, docActions, scripting, internalEvents, domEvents, updateFromSandbox, visitedPages, pageOpen, pageClose, dispatchEventInSandbox, mouseDown, mouseUp, _iterator4, _step4, _step4$value, name, listener, _iterator5, _step5, _step5$value, _name2, _listener2, _this14$metadata, _this14$metadata2;

      return _regenerator["default"].wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              if (_app_options.AppOptions.get("enableScripting")) {
                _context15.next = 2;
                break;
              }

              return _context15.abrupt("return");

            case 2:
              _context15.next = 4;
              return Promise.all([pdfDocument.getFieldObjects(), pdfDocument.getCalculationOrderIds(), pdfDocument.getJSActions()]);

            case 4:
              _yield$Promise$all = _context15.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
              objects = _yield$Promise$all2[0];
              calculationOrder = _yield$Promise$all2[1];
              docActions = _yield$Promise$all2[2];

              if (!(!objects && !docActions)) {
                _context15.next = 11;
                break;
              }

              return _context15.abrupt("return");

            case 11:
              if (!(pdfDocument !== _this14.pdfDocument)) {
                _context15.next = 13;
                break;
              }

              return _context15.abrupt("return");

            case 13:
              scripting = _this14.externalServices.createScripting({
                sandboxBundleSrc: _app_options.AppOptions.get("sandboxBundleSrc")
              });
              internalEvents = new Map(), domEvents = new Map();
              _this14._scriptingInstance = {
                scripting: scripting,
                ready: false,
                internalEvents: internalEvents,
                domEvents: domEvents
              };

              if (_this14.documentInfo) {
                _context15.next = 21;
                break;
              }

              _context15.next = 19;
              return new Promise(function (resolve) {
                _this14.eventBus._on("metadataloaded", resolve, {
                  once: true
                });
              });

            case 19:
              if (!(pdfDocument !== _this14.pdfDocument)) {
                _context15.next = 21;
                break;
              }

              return _context15.abrupt("return");

            case 21:
              if (_this14._contentLength) {
                _context15.next = 26;
                break;
              }

              _context15.next = 24;
              return new Promise(function (resolve) {
                _this14.eventBus._on("documentloaded", resolve, {
                  once: true
                });
              });

            case 24:
              if (!(pdfDocument !== _this14.pdfDocument)) {
                _context15.next = 26;
                break;
              }

              return _context15.abrupt("return");

            case 26:
              updateFromSandbox = function updateFromSandbox(_ref9) {
                var detail = _ref9.detail;
                var id = detail.id,
                    command = detail.command,
                    value = detail.value;

                if (!id) {
                  switch (command) {
                    case "clear":
                      console.clear();
                      break;

                    case "error":
                      console.error(value);
                      break;

                    case "layout":
                      _this14.pdfViewer.spreadMode = apiPageLayoutToSpreadMode(value);
                      break;

                    case "page-num":
                      _this14.pdfViewer.currentPageNumber = value + 1;
                      break;

                    case "print":
                      _this14.pdfViewer.pagesPromise.then(function () {
                        _this14.triggerPrinting();
                      });

                      break;

                    case "println":
                      console.log(value);
                      break;

                    case "zoom":
                      _this14.pdfViewer.currentScaleValue = value;
                      break;
                  }

                  return;
                }

                var element = document.getElementById(id);

                if (element) {
                  element.dispatchEvent(new CustomEvent("updatefromsandbox", {
                    detail: detail
                  }));
                } else {
                  if (value !== undefined && value !== null) {
                    pdfDocument.annotationStorage.setValue(id, value);
                  }
                }
              };

              internalEvents.set("updatefromsandbox", updateFromSandbox);
              visitedPages = new Map();

              pageOpen = function pageOpen(_ref10) {
                var pageNumber = _ref10.pageNumber,
                    actionsPromise = _ref10.actionsPromise;
                visitedPages.set(pageNumber, _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
                  var _this14$_scriptingIns;

                  var actions;
                  return _regenerator["default"].wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          actions = null;

                          if (visitedPages.has(pageNumber)) {
                            _context13.next = 7;
                            break;
                          }

                          _context13.next = 4;
                          return actionsPromise;

                        case 4:
                          actions = _context13.sent;

                          if (!(pdfDocument !== _this14.pdfDocument)) {
                            _context13.next = 7;
                            break;
                          }

                          return _context13.abrupt("return");

                        case 7:
                          _context13.next = 9;
                          return (_this14$_scriptingIns = _this14._scriptingInstance) === null || _this14$_scriptingIns === void 0 ? void 0 : _this14$_scriptingIns.scripting.dispatchEventInSandbox({
                            id: "page",
                            name: "PageOpen",
                            pageNumber: pageNumber,
                            actions: actions
                          });

                        case 9:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }))());
              };

              pageClose = /*#__PURE__*/function () {
                var _ref13 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee14(_ref12) {
                  var _this14$_scriptingIns2;

                  var pageNumber, actionsPromise;
                  return _regenerator["default"].wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          pageNumber = _ref12.pageNumber;
                          actionsPromise = visitedPages.get(pageNumber);

                          if (actionsPromise) {
                            _context14.next = 4;
                            break;
                          }

                          return _context14.abrupt("return");

                        case 4:
                          visitedPages.set(pageNumber, null);
                          _context14.next = 7;
                          return actionsPromise;

                        case 7:
                          if (!(pdfDocument !== _this14.pdfDocument)) {
                            _context14.next = 9;
                            break;
                          }

                          return _context14.abrupt("return");

                        case 9:
                          _context14.next = 11;
                          return (_this14$_scriptingIns2 = _this14._scriptingInstance) === null || _this14$_scriptingIns2 === void 0 ? void 0 : _this14$_scriptingIns2.scripting.dispatchEventInSandbox({
                            id: "page",
                            name: "PageClose",
                            pageNumber: pageNumber
                          });

                        case 11:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14);
                }));

                return function pageClose(_x3) {
                  return _ref13.apply(this, arguments);
                };
              }();

              internalEvents.set("pageopen", pageOpen);
              internalEvents.set("pageclose", pageClose);

              dispatchEventInSandbox = function dispatchEventInSandbox(_ref14) {
                var detail = _ref14.detail;
                scripting.dispatchEventInSandbox(detail);
              };

              internalEvents.set("dispatcheventinsandbox", dispatchEventInSandbox);

              mouseDown = function mouseDown(event) {
                _this14._mouseState.isDown = true;
              };

              domEvents.set("mousedown", mouseDown);

              mouseUp = function mouseUp(event) {
                _this14._mouseState.isDown = false;
              };

              domEvents.set("mouseup", mouseUp);
              _iterator4 = _createForOfIteratorHelper(internalEvents);

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  _step4$value = _slicedToArray(_step4.value, 2), name = _step4$value[0], listener = _step4$value[1];

                  _this14.eventBus._on(name, listener);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              _iterator5 = _createForOfIteratorHelper(domEvents);

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  _step5$value = _slicedToArray(_step5.value, 2), _name2 = _step5$value[0], _listener2 = _step5$value[1];
                  window.addEventListener(_name2, _listener2);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              _context15.prev = 43;
              _context15.next = 46;
              return scripting.createSandbox({
                objects: objects,
                calculationOrder: calculationOrder,
                appInfo: {
                  platform: navigator.platform,
                  language: navigator.language
                },
                docInfo: _objectSpread(_objectSpread({}, _this14.documentInfo), {}, {
                  baseURL: _this14.baseUrl,
                  filesize: _this14._contentLength,
                  filename: _this14._docFilename,
                  metadata: (_this14$metadata = _this14.metadata) === null || _this14$metadata === void 0 ? void 0 : _this14$metadata.getRaw(),
                  authors: (_this14$metadata2 = _this14.metadata) === null || _this14$metadata2 === void 0 ? void 0 : _this14$metadata2.get("dc:creator"),
                  numPages: pdfDocument.numPages,
                  URL: _this14.url,
                  actions: docActions
                })
              });

            case 46:
              if (_this14.externalServices.isInAutomation) {
                _this14.eventBus.dispatch("sandboxcreated", {
                  source: _this14
                });
              }

              _context15.next = 54;
              break;

            case 49:
              _context15.prev = 49;
              _context15.t0 = _context15["catch"](43);
              console.error("_initializeJavaScript: \"".concat(_context15.t0 === null || _context15.t0 === void 0 ? void 0 : _context15.t0.message, "\"."));

              _this14._destroyScriptingInstance();

              return _context15.abrupt("return");

            case 54:
              _context15.next = 56;
              return scripting.dispatchEventInSandbox({
                id: "doc",
                name: "Open"
              });

            case 56:
              _context15.next = 58;
              return _this14.pdfViewer.initializeScriptingEvents();

            case 58:
              Promise.resolve().then(function () {
                if (_this14._scriptingInstance) {
                  _this14._scriptingInstance.ready = true;
                }
              });

            case 59:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[43, 49]]);
    }))();
  },
  _collectTelemetry: function _collectTelemetry(pdfDocument) {
    var _this15 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee16() {
      var markInfo, tagged;
      return _regenerator["default"].wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return _this15.pdfDocument.getMarkInfo();

            case 2:
              markInfo = _context16.sent;

              if (!(pdfDocument !== _this15.pdfDocument)) {
                _context16.next = 5;
                break;
              }

              return _context16.abrupt("return");

            case 5:
              tagged = (markInfo === null || markInfo === void 0 ? void 0 : markInfo.Marked) || false;

              _this15.externalServices.reportTelemetry({
                type: "tagged",
                tagged: tagged
              });

            case 7:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }))();
  },
  _initializeAutoPrint: function _initializeAutoPrint(pdfDocument, openActionPromise) {
    var _this16 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee17() {
      var _yield$Promise$all3, _yield$Promise$all4, openAction, javaScript, triggerAutoPrint, _iterator6, _step6, js;

      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return Promise.all([openActionPromise, !_app_options.AppOptions.get("enableScripting") ? pdfDocument.getJavaScript() : null]);

            case 2:
              _yield$Promise$all3 = _context17.sent;
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
              openAction = _yield$Promise$all4[0];
              javaScript = _yield$Promise$all4[1];

              if (!(pdfDocument !== _this16.pdfDocument)) {
                _context17.next = 8;
                break;
              }

              return _context17.abrupt("return");

            case 8:
              triggerAutoPrint = false;

              if ((openAction === null || openAction === void 0 ? void 0 : openAction.action) === "Print") {
                triggerAutoPrint = true;
              }

              if (!javaScript) {
                _context17.next = 31;
                break;
              }

              javaScript.some(function (js) {
                if (!js) {
                  return false;
                }

                console.warn("Warning: JavaScript is not supported");

                _this16._delayedFallback(_pdf.UNSUPPORTED_FEATURES.javaScript);

                return true;
              });

              if (triggerAutoPrint) {
                _context17.next = 31;
                break;
              }

              _iterator6 = _createForOfIteratorHelper(javaScript);
              _context17.prev = 14;

              _iterator6.s();

            case 16:
              if ((_step6 = _iterator6.n()).done) {
                _context17.next = 23;
                break;
              }

              js = _step6.value;

              if (!(js && _ui_utils.AutoPrintRegExp.test(js))) {
                _context17.next = 21;
                break;
              }

              triggerAutoPrint = true;
              return _context17.abrupt("break", 23);

            case 21:
              _context17.next = 16;
              break;

            case 23:
              _context17.next = 28;
              break;

            case 25:
              _context17.prev = 25;
              _context17.t0 = _context17["catch"](14);

              _iterator6.e(_context17.t0);

            case 28:
              _context17.prev = 28;

              _iterator6.f();

              return _context17.finish(28);

            case 31:
              if (triggerAutoPrint) {
                _this16.triggerPrinting();
              }

            case 32:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[14, 25, 28, 31]]);
    }))();
  },
  _initializeMetadata: function _initializeMetadata(pdfDocument) {
    var _this17 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
      var _this17$_contentLengt;

      var _yield$pdfDocument$ge, info, metadata, contentDispositionFilename, contentLength, pdfTitle, infoTitle, metadataTitle, versionId, generatorId, producer, formType;

      return _regenerator["default"].wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return pdfDocument.getMetadata();

            case 2:
              _yield$pdfDocument$ge = _context18.sent;
              info = _yield$pdfDocument$ge.info;
              metadata = _yield$pdfDocument$ge.metadata;
              contentDispositionFilename = _yield$pdfDocument$ge.contentDispositionFilename;
              contentLength = _yield$pdfDocument$ge.contentLength;

              if (!(pdfDocument !== _this17.pdfDocument)) {
                _context18.next = 9;
                break;
              }

              return _context18.abrupt("return");

            case 9:
              _this17.documentInfo = info;
              _this17.metadata = metadata;
              _this17._contentDispositionFilename = contentDispositionFilename;
              (_this17$_contentLengt = _this17._contentLength) !== null && _this17$_contentLengt !== void 0 ? _this17$_contentLengt : _this17._contentLength = contentLength;
              console.log("PDF ".concat(pdfDocument.fingerprint, " [").concat(info.PDFFormatVersion, " ") + "".concat((info.Producer || "-").trim(), " / ").concat((info.Creator || "-").trim(), "] ") + "(PDF.js: ".concat(_pdf.version || "-") + "".concat(_this17.pdfViewer.enableWebGL ? " [WebGL]" : "", ")"));
              infoTitle = info === null || info === void 0 ? void 0 : info.Title;

              if (infoTitle) {
                pdfTitle = infoTitle;
              }

              metadataTitle = metadata === null || metadata === void 0 ? void 0 : metadata.get("dc:title");

              if (metadataTitle) {
                if (metadataTitle !== "Untitled" && !/[\uFFF0-\uFFFF]/g.test(metadataTitle)) {
                  pdfTitle = metadataTitle;
                }
              }

              if (pdfTitle) {
                _this17.setTitle("".concat(pdfTitle, " - ").concat(contentDispositionFilename || document.title));
              } else if (contentDispositionFilename) {
                _this17.setTitle(contentDispositionFilename);
              }

              if (info.IsXFAPresent && !info.IsAcroFormPresent) {
                console.warn("Warning: XFA is not supported");

                _this17._delayedFallback(_pdf.UNSUPPORTED_FEATURES.forms);
              } else if ((info.IsAcroFormPresent || info.IsXFAPresent) && !_this17.pdfViewer.renderInteractiveForms) {
                console.warn("Warning: Interactive form support is not enabled");

                _this17._delayedFallback(_pdf.UNSUPPORTED_FEATURES.forms);
              }

              versionId = "other";

              if (KNOWN_VERSIONS.includes(info.PDFFormatVersion)) {
                versionId = "v".concat(info.PDFFormatVersion.replace(".", "_"));
              }

              generatorId = "other";

              if (info.Producer) {
                producer = info.Producer.toLowerCase();
                KNOWN_GENERATORS.some(function (generator) {
                  if (!producer.includes(generator)) {
                    return false;
                  }

                  generatorId = generator.replace(/[ .-]/g, "_");
                  return true;
                });
              }

              formType = null;

              if (info.IsXFAPresent) {
                formType = "xfa";
              } else if (info.IsAcroFormPresent) {
                formType = "acroform";
              }

              _this17.externalServices.reportTelemetry({
                type: "documentInfo",
                version: versionId,
                generator: generatorId,
                formType: formType
              });

              _this17.eventBus.dispatch("metadataloaded", {
                source: _this17
              });

            case 28:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }))();
  },
  _initializePageLabels: function _initializePageLabels(pdfDocument) {
    var _this18 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
      var labels, numLabels, i, pdfViewer, pdfThumbnailViewer, toolbar;
      return _regenerator["default"].wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return pdfDocument.getPageLabels();

            case 2:
              labels = _context19.sent;

              if (!(pdfDocument !== _this18.pdfDocument)) {
                _context19.next = 5;
                break;
              }

              return _context19.abrupt("return");

            case 5:
              if (!(!labels || _app_options.AppOptions.get("disablePageLabels"))) {
                _context19.next = 7;
                break;
              }

              return _context19.abrupt("return");

            case 7:
              numLabels = labels.length;

              if (!(numLabels !== _this18.pagesCount)) {
                _context19.next = 11;
                break;
              }

              console.error("The number of Page Labels does not match the number of pages in the document.");
              return _context19.abrupt("return");

            case 11:
              i = 0;

              while (i < numLabels && labels[i] === (i + 1).toString()) {
                i++;
              }

              if (!(i === numLabels)) {
                _context19.next = 15;
                break;
              }

              return _context19.abrupt("return");

            case 15:
              pdfViewer = _this18.pdfViewer, pdfThumbnailViewer = _this18.pdfThumbnailViewer, toolbar = _this18.toolbar;
              pdfViewer.setPageLabels(labels);
              pdfThumbnailViewer.setPageLabels(labels);
              toolbar.setPagesCount(numLabels, true);
              toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel);

            case 20:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }))();
  },
  _initializePdfHistory: function _initializePdfHistory(_ref15) {
    var fingerprint = _ref15.fingerprint,
        viewOnLoad = _ref15.viewOnLoad,
        _ref15$initialDest = _ref15.initialDest,
        initialDest = _ref15$initialDest === void 0 ? null : _ref15$initialDest;

    if (this.isViewerEmbedded || _app_options.AppOptions.get("disableHistory")) {
      return;
    }

    this.pdfHistory.initialize({
      fingerprint: fingerprint,
      resetHistory: viewOnLoad === ViewOnLoad.INITIAL,
      updateUrl: _app_options.AppOptions.get("historyUpdateUrl")
    });

    if (this.pdfHistory.initialBookmark) {
      this.initialBookmark = this.pdfHistory.initialBookmark;
      this.initialRotation = this.pdfHistory.initialRotation;
    }

    if (initialDest && !this.initialBookmark && viewOnLoad === ViewOnLoad.UNKNOWN) {
      this.initialBookmark = JSON.stringify(initialDest);
      this.pdfHistory.push({
        explicitDest: initialDest,
        pageNumber: null
      });
    }
  },
  _initializePermissions: function _initializePermissions(pdfDocument) {
    var _this19 = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee20() {
      var permissions;
      return _regenerator["default"].wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return pdfDocument.getPermissions();

            case 2:
              permissions = _context20.sent;

              if (!(pdfDocument !== _this19.pdfDocument)) {
                _context20.next = 5;
                break;
              }

              return _context20.abrupt("return");

            case 5:
              if (!(!permissions || !_app_options.AppOptions.get("enablePermissions"))) {
                _context20.next = 7;
                break;
              }

              return _context20.abrupt("return");

            case 7:
              if (!permissions.includes(_pdf.PermissionFlag.COPY)) {
                _this19.appConfig.viewerContainer.classList.add(ENABLE_PERMISSIONS_CLASS);
              }

            case 8:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }))();
  },
  _initializeAnnotationStorageCallbacks: function _initializeAnnotationStorageCallbacks(pdfDocument) {
    if (pdfDocument !== this.pdfDocument) {
      return;
    }

    var annotationStorage = pdfDocument.annotationStorage;

    annotationStorage.onSetModified = function () {
      window.addEventListener("beforeunload", beforeUnload);
    };

    annotationStorage.onResetModified = function () {
      window.removeEventListener("beforeunload", beforeUnload);
    };
  },
  setInitialView: function setInitialView(storedHash) {
    var _this20 = this;

    var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        rotation = _ref16.rotation,
        sidebarView = _ref16.sidebarView,
        scrollMode = _ref16.scrollMode,
        spreadMode = _ref16.spreadMode;

    var setRotation = function setRotation(angle) {
      if ((0, _ui_utils.isValidRotation)(angle)) {
        _this20.pdfViewer.pagesRotation = angle;
      }
    };

    var setViewerModes = function setViewerModes(scroll, spread) {
      if ((0, _ui_utils.isValidScrollMode)(scroll)) {
        _this20.pdfViewer.scrollMode = scroll;
      }

      if ((0, _ui_utils.isValidSpreadMode)(spread)) {
        _this20.pdfViewer.spreadMode = spread;
      }
    };

    this.isInitialViewSet = true;
    this.pdfSidebar.setInitialView(sidebarView);
    setViewerModes(scrollMode, spreadMode);

    if (this.initialBookmark) {
      setRotation(this.initialRotation);
      delete this.initialRotation;
      this.pdfLinkService.setHash(this.initialBookmark);
      this.initialBookmark = null;
    } else if (storedHash) {
      setRotation(rotation);
      this.pdfLinkService.setHash(storedHash);
    }

    this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel);
    this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber);

    if (!this.pdfViewer.currentScaleValue) {
      this.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
    }
  },
  cleanup: function cleanup() {
    if (!this.pdfDocument) {
      return;
    }

    this.pdfViewer.cleanup();
    this.pdfThumbnailViewer.cleanup();

    if (this.pdfViewer.renderer !== _ui_utils.RendererType.SVG) {
      this.pdfDocument.cleanup();
    }
  },
  forceRendering: function forceRendering() {
    this.pdfRenderingQueue.printing = !!this.printService;
    this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible;
    this.pdfRenderingQueue.renderHighestPriority();
  },
  beforePrint: function beforePrint() {
    var _this$_scriptingInsta,
        _this21 = this;

    (_this$_scriptingInsta = this._scriptingInstance) === null || _this$_scriptingInsta === void 0 ? void 0 : _this$_scriptingInsta.scripting.dispatchEventInSandbox({
      id: "doc",
      name: "WillPrint"
    });

    if (this.printService) {
      return;
    }

    if (!this.supportsPrinting) {
      this._localizeMessage("printing_not_supported").then(function (msg) {
        _this21._otherError(msg);
      });

      return;
    }

    if (!this.pdfViewer.pageViewsReady) {
      this._localizeMessage("printing_not_ready").then(function (msg) {
        window.alert(msg);
      });

      return;
    }

    var pagesOverview = this.pdfViewer.getPagesOverview();
    var printContainer = this.appConfig.printContainer;

    var printResolution = _app_options.AppOptions.get("printResolution");

    var optionalContentConfigPromise = this.pdfViewer.optionalContentConfigPromise;
    var printService = PDFPrintServiceFactory.instance.createPrintService(this.pdfDocument, pagesOverview, printContainer, printResolution, optionalContentConfigPromise, this.l10n);
    this.printService = printService;
    this.forceRendering();
    printService.layout();
    this.externalServices.reportTelemetry({
      type: "print"
    });
  },
  afterPrint: function afterPrint() {
    var _this$_scriptingInsta2;

    (_this$_scriptingInsta2 = this._scriptingInstance) === null || _this$_scriptingInsta2 === void 0 ? void 0 : _this$_scriptingInsta2.scripting.dispatchEventInSandbox({
      id: "doc",
      name: "DidPrint"
    });

    if (this.printService) {
      this.printService.destroy();
      this.printService = null;

      if (this.pdfDocument) {
        this.pdfDocument.annotationStorage.resetModified();
      }
    }

    this.forceRendering();
  },
  rotatePages: function rotatePages(delta) {
    if (!this.pdfDocument) {
      return;
    }

    var newRotation = (this.pdfViewer.pagesRotation + 360 + delta) % 360;
    this.pdfViewer.pagesRotation = newRotation;
  },
  requestPresentationMode: function requestPresentationMode() {
    if (!this.pdfPresentationMode) {
      return;
    }

    this.pdfPresentationMode.request();
  },
  triggerPrinting: function triggerPrinting() {
    if (!this.supportsPrinting) {
      return;
    }

    window.print();
  },
  bindEvents: function bindEvents() {
    var eventBus = this.eventBus,
        _boundEvents = this._boundEvents;
    _boundEvents.beforePrint = this.beforePrint.bind(this);
    _boundEvents.afterPrint = this.afterPrint.bind(this);

    eventBus._on("resize", webViewerResize);

    eventBus._on("hashchange", webViewerHashchange);

    eventBus._on("beforeprint", _boundEvents.beforePrint);

    eventBus._on("afterprint", _boundEvents.afterPrint);

    eventBus._on("pagerendered", webViewerPageRendered);

    eventBus._on("updateviewarea", webViewerUpdateViewarea);

    eventBus._on("pagechanging", webViewerPageChanging);

    eventBus._on("scalechanging", webViewerScaleChanging);

    eventBus._on("rotationchanging", webViewerRotationChanging);

    eventBus._on("sidebarviewchanged", webViewerSidebarViewChanged);

    eventBus._on("pagemode", webViewerPageMode);

    eventBus._on("namedaction", webViewerNamedAction);

    eventBus._on("presentationmodechanged", webViewerPresentationModeChanged);

    eventBus._on("presentationmode", webViewerPresentationMode);

    eventBus._on("print", webViewerPrint);

    eventBus._on("download", webViewerDownload);

    eventBus._on("save", webViewerSave);

    eventBus._on("firstpage", webViewerFirstPage);

    eventBus._on("lastpage", webViewerLastPage);

    eventBus._on("nextpage", webViewerNextPage);

    eventBus._on("previouspage", webViewerPreviousPage);

    eventBus._on("zoomin", webViewerZoomIn);

    eventBus._on("zoomout", webViewerZoomOut);

    eventBus._on("zoomreset", webViewerZoomReset);

    eventBus._on("pagenumberchanged", webViewerPageNumberChanged);

    eventBus._on("scalechanged", webViewerScaleChanged);

    eventBus._on("rotatecw", webViewerRotateCw);

    eventBus._on("rotateccw", webViewerRotateCcw);

    eventBus._on("optionalcontentconfig", webViewerOptionalContentConfig);

    eventBus._on("switchscrollmode", webViewerSwitchScrollMode);

    eventBus._on("scrollmodechanged", webViewerScrollModeChanged);

    eventBus._on("switchspreadmode", webViewerSwitchSpreadMode);

    eventBus._on("spreadmodechanged", webViewerSpreadModeChanged);

    eventBus._on("documentproperties", webViewerDocumentProperties);

    eventBus._on("find", webViewerFind);

    eventBus._on("findfromurlhash", webViewerFindFromUrlHash);

    eventBus._on("updatefindmatchescount", webViewerUpdateFindMatchesCount);

    eventBus._on("updatefindcontrolstate", webViewerUpdateFindControlState);

    if (_app_options.AppOptions.get("pdfBug")) {
      _boundEvents.reportPageStatsPDFBug = reportPageStatsPDFBug;

      eventBus._on("pagerendered", _boundEvents.reportPageStatsPDFBug);

      eventBus._on("pagechanging", _boundEvents.reportPageStatsPDFBug);
    }

    eventBus._on("fileinputchange", webViewerFileInputChange);

    eventBus._on("openfile", webViewerOpenFile);
  },
  bindWindowEvents: function bindWindowEvents() {
    var eventBus = this.eventBus,
        _boundEvents = this._boundEvents;

    _boundEvents.windowResize = function () {
      eventBus.dispatch("resize", {
        source: window
      });
    };

    _boundEvents.windowHashChange = function () {
      eventBus.dispatch("hashchange", {
        source: window,
        hash: document.location.hash.substring(1)
      });
    };

    _boundEvents.windowBeforePrint = function () {
      eventBus.dispatch("beforeprint", {
        source: window
      });
    };

    _boundEvents.windowAfterPrint = function () {
      eventBus.dispatch("afterprint", {
        source: window
      });
    };

    _boundEvents.windowUpdateFromSandbox = function (event) {
      eventBus.dispatch("updatefromsandbox", {
        source: window,
        detail: event.detail
      });
    };

    window.addEventListener("visibilitychange", webViewerVisibilityChange);
    window.addEventListener("wheel", webViewerWheel, {
      passive: false
    });
    window.addEventListener("touchstart", webViewerTouchStart, {
      passive: false
    });
    window.addEventListener("click", webViewerClick);
    window.addEventListener("keydown", webViewerKeyDown);
    window.addEventListener("keyup", webViewerKeyUp);
    window.addEventListener("resize", _boundEvents.windowResize);
    window.addEventListener("hashchange", _boundEvents.windowHashChange);
    window.addEventListener("beforeprint", _boundEvents.windowBeforePrint);
    window.addEventListener("afterprint", _boundEvents.windowAfterPrint);
    window.addEventListener("updatefromsandbox", _boundEvents.windowUpdateFromSandbox);
  },
  unbindEvents: function unbindEvents() {
    var eventBus = this.eventBus,
        _boundEvents = this._boundEvents;

    eventBus._off("resize", webViewerResize);

    eventBus._off("hashchange", webViewerHashchange);

    eventBus._off("beforeprint", _boundEvents.beforePrint);

    eventBus._off("afterprint", _boundEvents.afterPrint);

    eventBus._off("pagerendered", webViewerPageRendered);

    eventBus._off("updateviewarea", webViewerUpdateViewarea);

    eventBus._off("pagechanging", webViewerPageChanging);

    eventBus._off("scalechanging", webViewerScaleChanging);

    eventBus._off("rotationchanging", webViewerRotationChanging);

    eventBus._off("sidebarviewchanged", webViewerSidebarViewChanged);

    eventBus._off("pagemode", webViewerPageMode);

    eventBus._off("namedaction", webViewerNamedAction);

    eventBus._off("presentationmodechanged", webViewerPresentationModeChanged);

    eventBus._off("presentationmode", webViewerPresentationMode);

    eventBus._off("print", webViewerPrint);

    eventBus._off("download", webViewerDownload);

    eventBus._off("save", webViewerSave);

    eventBus._off("firstpage", webViewerFirstPage);

    eventBus._off("lastpage", webViewerLastPage);

    eventBus._off("nextpage", webViewerNextPage);

    eventBus._off("previouspage", webViewerPreviousPage);

    eventBus._off("zoomin", webViewerZoomIn);

    eventBus._off("zoomout", webViewerZoomOut);

    eventBus._off("zoomreset", webViewerZoomReset);

    eventBus._off("pagenumberchanged", webViewerPageNumberChanged);

    eventBus._off("scalechanged", webViewerScaleChanged);

    eventBus._off("rotatecw", webViewerRotateCw);

    eventBus._off("rotateccw", webViewerRotateCcw);

    eventBus._off("optionalcontentconfig", webViewerOptionalContentConfig);

    eventBus._off("switchscrollmode", webViewerSwitchScrollMode);

    eventBus._off("scrollmodechanged", webViewerScrollModeChanged);

    eventBus._off("switchspreadmode", webViewerSwitchSpreadMode);

    eventBus._off("spreadmodechanged", webViewerSpreadModeChanged);

    eventBus._off("documentproperties", webViewerDocumentProperties);

    eventBus._off("find", webViewerFind);

    eventBus._off("findfromurlhash", webViewerFindFromUrlHash);

    eventBus._off("updatefindmatchescount", webViewerUpdateFindMatchesCount);

    eventBus._off("updatefindcontrolstate", webViewerUpdateFindControlState);

    if (_boundEvents.reportPageStatsPDFBug) {
      eventBus._off("pagerendered", _boundEvents.reportPageStatsPDFBug);

      eventBus._off("pagechanging", _boundEvents.reportPageStatsPDFBug);

      _boundEvents.reportPageStatsPDFBug = null;
    }

    eventBus._off("fileinputchange", webViewerFileInputChange);

    eventBus._off("openfile", webViewerOpenFile);

    _boundEvents.beforePrint = null;
    _boundEvents.afterPrint = null;
  },
  unbindWindowEvents: function unbindWindowEvents() {
    var _boundEvents = this._boundEvents;
    window.removeEventListener("visibilitychange", webViewerVisibilityChange);
    window.removeEventListener("wheel", webViewerWheel, {
      passive: false
    });
    window.removeEventListener("touchstart", webViewerTouchStart, {
      passive: false
    });
    window.removeEventListener("click", webViewerClick);
    window.removeEventListener("keydown", webViewerKeyDown);
    window.removeEventListener("keyup", webViewerKeyUp);
    window.removeEventListener("resize", _boundEvents.windowResize);
    window.removeEventListener("hashchange", _boundEvents.windowHashChange);
    window.removeEventListener("beforeprint", _boundEvents.windowBeforePrint);
    window.removeEventListener("afterprint", _boundEvents.windowAfterPrint);
    window.removeEventListener("updatefromsandbox", _boundEvents.windowUpdateFromSandbox);
    _boundEvents.windowResize = null;
    _boundEvents.windowHashChange = null;
    _boundEvents.windowBeforePrint = null;
    _boundEvents.windowAfterPrint = null;
    _boundEvents.windowUpdateFromSandbox = null;
  },
  accumulateWheelTicks: function accumulateWheelTicks(ticks) {
    if (this._wheelUnusedTicks > 0 && ticks < 0 || this._wheelUnusedTicks < 0 && ticks > 0) {
      this._wheelUnusedTicks = 0;
    }

    this._wheelUnusedTicks += ticks;
    var wholeTicks = Math.sign(this._wheelUnusedTicks) * Math.floor(Math.abs(this._wheelUnusedTicks));
    this._wheelUnusedTicks -= wholeTicks;
    return wholeTicks;
  },
  _unblockDocumentLoadEvent: function _unblockDocumentLoadEvent() {
    if (document.blockUnblockOnload) {
      document.blockUnblockOnload(false);
    }

    this._unblockDocumentLoadEvent = function () {};
  },

  get scriptingReady() {
    var _this$_scriptingInsta3;

    return ((_this$_scriptingInsta3 = this._scriptingInstance) === null || _this$_scriptingInsta3 === void 0 ? void 0 : _this$_scriptingInsta3.ready) || false;
  }

};
exports.PDFViewerApplication = PDFViewerApplication;

function loadFakeWorker() {
  return _loadFakeWorker.apply(this, arguments);
}

function _loadFakeWorker() {
  _loadFakeWorker = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee21() {
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            if (!_pdf.GlobalWorkerOptions.workerSrc) {
              _pdf.GlobalWorkerOptions.workerSrc = _app_options.AppOptions.get("workerSrc");
            }

            return _context21.abrupt("return", (0, _pdf.loadScript)(_pdf.PDFWorker.getWorkerSrc()));

          case 2:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _loadFakeWorker.apply(this, arguments);
}

function loadAndEnablePDFBug(enabledTabs) {
  var appConfig = PDFViewerApplication.appConfig;
  return (0, _pdf.loadScript)(appConfig.debuggerScriptPath).then(function () {
    PDFBug.enable(enabledTabs);
    PDFBug.init({
      OPS: _pdf.OPS
    }, appConfig.mainContainer);
  });
}

function reportPageStatsPDFBug(_ref17) {
  var _pageView$pdfPage;

  var pageNumber = _ref17.pageNumber;

  if (typeof Stats === "undefined" || !Stats.enabled) {
    return;
  }

  var pageView = PDFViewerApplication.pdfViewer.getPageView(pageNumber - 1);
  var pageStats = pageView === null || pageView === void 0 ? void 0 : (_pageView$pdfPage = pageView.pdfPage) === null || _pageView$pdfPage === void 0 ? void 0 : _pageView$pdfPage.stats;

  if (!pageStats) {
    return;
  }

  Stats.add(pageNumber, pageStats);
}

function webViewerInitialized() {
  var appConfig = PDFViewerApplication.appConfig;
  var file;
  var queryString = document.location.search.substring(1);
  var params = (0, _ui_utils.parseQueryString)(queryString);
  file = "file" in params ? params.file : _app_options.AppOptions.get("defaultUrl");
  var fileInput = document.createElement("input");
  fileInput.id = appConfig.openFileInputName;
  fileInput.className = "fileInput";
  fileInput.setAttribute("type", "file");
  fileInput.oncontextmenu = _ui_utils.noContextMenuHandler;
  document.body.appendChild(fileInput);

  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    appConfig.toolbar.openFile.hidden = true;
    appConfig.secondaryToolbar.openFileButton.hidden = true;
  } else {
    fileInput.value = null;
  }

  fileInput.addEventListener("change", function (evt) {
    var files = evt.target.files;

    if (!files || files.length === 0) {
      return;
    }

    PDFViewerApplication.eventBus.dispatch("fileinputchange", {
      source: this,
      fileInput: evt.target
    });
  });
  appConfig.mainContainer.addEventListener("dragover", function (evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  });
  appConfig.mainContainer.addEventListener("drop", function (evt) {
    evt.preventDefault();
    var files = evt.dataTransfer.files;

    if (!files || files.length === 0) {
      return;
    }

    PDFViewerApplication.eventBus.dispatch("fileinputchange", {
      source: this,
      fileInput: evt.dataTransfer
    });
  });

  if (!PDFViewerApplication.supportsDocumentFonts) {
    _app_options.AppOptions.set("disableFontFace", true);

    PDFViewerApplication._localizeMessage("web_fonts_disabled").then(function (msg) {
      console.warn(msg);
    });
  }

  if (!PDFViewerApplication.supportsPrinting) {
    appConfig.toolbar.print.classList.add("hidden");
    appConfig.secondaryToolbar.printButton.classList.add("hidden");
  }

  if (!PDFViewerApplication.supportsFullscreen) {
    appConfig.toolbar.presentationModeButton.classList.add("hidden");
    appConfig.secondaryToolbar.presentationModeButton.classList.add("hidden");
  }

  if (PDFViewerApplication.supportsIntegratedFind) {
    appConfig.toolbar.viewFind.classList.add("hidden");
  }

  appConfig.mainContainer.addEventListener("transitionend", function (evt) {
    if (evt.target === this) {
      PDFViewerApplication.eventBus.dispatch("resize", {
        source: this
      });
    }
  }, true);

  try {
    webViewerOpenFileViaURL(file);
  } catch (reason) {
    PDFViewerApplication._localizeMessage("loading_error").then(function (msg) {
      PDFViewerApplication._documentError(msg, reason);
    });
  }
}

var webViewerOpenFileViaURL;
{
  webViewerOpenFileViaURL = function webViewerOpenFileViaURL(file) {
    if (file && file.lastIndexOf("file:", 0) === 0) {
      PDFViewerApplication.setTitleUsingUrl(file);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        PDFViewerApplication.open(new Uint8Array(xhr.response));
      };

      xhr.open("GET", file);
      xhr.responseType = "arraybuffer";
      xhr.send();
      return;
    }

    if (file) {
      PDFViewerApplication.open(file);
    }
  };
}

function webViewerResetPermissions() {
  var appConfig = PDFViewerApplication.appConfig;

  if (!appConfig) {
    return;
  }

  appConfig.viewerContainer.classList.remove(ENABLE_PERMISSIONS_CLASS);
}

function webViewerPageRendered(_ref18) {
  var pageNumber = _ref18.pageNumber,
      timestamp = _ref18.timestamp,
      error = _ref18.error;

  if (pageNumber === PDFViewerApplication.page) {
    PDFViewerApplication.toolbar.updateLoadingIndicatorState(false);
  }

  if (PDFViewerApplication.pdfSidebar.isThumbnailViewVisible) {
    var pageView = PDFViewerApplication.pdfViewer.getPageView(pageNumber - 1);
    var thumbnailView = PDFViewerApplication.pdfThumbnailViewer.getThumbnail(pageNumber - 1);

    if (pageView && thumbnailView) {
      thumbnailView.setImage(pageView);
    }
  }

  if (error) {
    PDFViewerApplication._localizeMessage("rendering_error").then(function (msg) {
      PDFViewerApplication._otherError(msg, error);
    });
  }

  PDFViewerApplication.externalServices.reportTelemetry({
    type: "pageInfo",
    timestamp: timestamp
  });
  PDFViewerApplication.pdfDocument.getStats().then(function (stats) {
    PDFViewerApplication.externalServices.reportTelemetry({
      type: "documentStats",
      stats: stats
    });
  });
}

function webViewerPageMode(_ref19) {
  var mode = _ref19.mode;
  var view;

  switch (mode) {
    case "thumbs":
      view = _ui_utils.SidebarView.THUMBS;
      break;

    case "bookmarks":
    case "outline":
      view = _ui_utils.SidebarView.OUTLINE;
      break;

    case "attachments":
      view = _ui_utils.SidebarView.ATTACHMENTS;
      break;

    case "layers":
      view = _ui_utils.SidebarView.LAYERS;
      break;

    case "none":
      view = _ui_utils.SidebarView.NONE;
      break;

    default:
      console.error('Invalid "pagemode" hash parameter: ' + mode);
      return;
  }

  PDFViewerApplication.pdfSidebar.switchView(view, true);
}

function webViewerNamedAction(evt) {
  switch (evt.action) {
    case "GoToPage":
      PDFViewerApplication.appConfig.toolbar.pageNumber.select();
      break;

    case "Find":
      if (!PDFViewerApplication.supportsIntegratedFind) {
        PDFViewerApplication.findBar.toggle();
      }

      break;

    case "Print":
      PDFViewerApplication.triggerPrinting();
      break;

    case "SaveAs":
      webViewerSave();
      break;
  }
}

function webViewerPresentationModeChanged(evt) {
  PDFViewerApplication.pdfViewer.presentationModeState = evt.state;
}

function webViewerSidebarViewChanged(evt) {
  PDFViewerApplication.pdfRenderingQueue.isThumbnailViewEnabled = PDFViewerApplication.pdfSidebar.isThumbnailViewVisible;
  var store = PDFViewerApplication.store;

  if (store && PDFViewerApplication.isInitialViewSet) {
    store.set("sidebarView", evt.view)["catch"](function () {});
  }
}

function webViewerUpdateViewarea(evt) {
  var location = evt.location,
      store = PDFViewerApplication.store;

  if (store && PDFViewerApplication.isInitialViewSet) {
    store.setMultiple({
      page: location.pageNumber,
      zoom: location.scale,
      scrollLeft: location.left,
      scrollTop: location.top,
      rotation: location.rotation
    })["catch"](function () {});
  }

  var href = PDFViewerApplication.pdfLinkService.getAnchorUrl(location.pdfOpenParams);
  PDFViewerApplication.appConfig.toolbar.viewBookmark.href = href;
  PDFViewerApplication.appConfig.secondaryToolbar.viewBookmarkButton.href = href;
  var currentPage = PDFViewerApplication.pdfViewer.getPageView(PDFViewerApplication.page - 1);
  var loading = (currentPage === null || currentPage === void 0 ? void 0 : currentPage.renderingState) !== _pdf_rendering_queue.RenderingStates.FINISHED;
  PDFViewerApplication.toolbar.updateLoadingIndicatorState(loading);
}

function webViewerScrollModeChanged(evt) {
  var store = PDFViewerApplication.store;

  if (store && PDFViewerApplication.isInitialViewSet) {
    store.set("scrollMode", evt.mode)["catch"](function () {});
  }
}

function webViewerSpreadModeChanged(evt) {
  var store = PDFViewerApplication.store;

  if (store && PDFViewerApplication.isInitialViewSet) {
    store.set("spreadMode", evt.mode)["catch"](function () {});
  }
}

function webViewerResize() {
  var pdfDocument = PDFViewerApplication.pdfDocument,
      pdfViewer = PDFViewerApplication.pdfViewer;

  if (!pdfDocument) {
    return;
  }

  var currentScaleValue = pdfViewer.currentScaleValue;

  if (currentScaleValue === "auto" || currentScaleValue === "page-fit" || currentScaleValue === "page-width") {
    pdfViewer.currentScaleValue = currentScaleValue;
  }

  pdfViewer.update();
}

function webViewerHashchange(evt) {
  var hash = evt.hash;

  if (!hash) {
    return;
  }

  if (!PDFViewerApplication.isInitialViewSet) {
    PDFViewerApplication.initialBookmark = hash;
  } else if (!PDFViewerApplication.pdfHistory.popStateInProgress) {
    PDFViewerApplication.pdfLinkService.setHash(hash);
  }
}

var webViewerFileInputChange, webViewerOpenFile;
{
  webViewerFileInputChange = function webViewerFileInputChange(evt) {
    var _PDFViewerApplication;

    if ((_PDFViewerApplication = PDFViewerApplication.pdfViewer) !== null && _PDFViewerApplication !== void 0 && _PDFViewerApplication.isInPresentationMode) {
      return;
    }

    var file = evt.fileInput.files[0];

    if (!_viewer_compatibility.viewerCompatibilityParams.disableCreateObjectURL) {
      var url = URL.createObjectURL(file);

      if (file.name) {
        url = {
          url: url,
          originalUrl: file.name
        };
      }

      PDFViewerApplication.open(url);
    } else {
      PDFViewerApplication.setTitleUsingUrl(file.name);
      var fileReader = new FileReader();

      fileReader.onload = function webViewerChangeFileReaderOnload(event) {
        var buffer = event.target.result;
        PDFViewerApplication.open(new Uint8Array(buffer));
      };

      fileReader.readAsArrayBuffer(file);
    }

    var appConfig = PDFViewerApplication.appConfig;
    appConfig.toolbar.viewBookmark.hidden = true;
    appConfig.secondaryToolbar.viewBookmarkButton.hidden = true;
    appConfig.toolbar.download.hidden = true;
    appConfig.secondaryToolbar.downloadButton.hidden = true;
  };

  webViewerOpenFile = function webViewerOpenFile(evt) {
    var openFileInputName = PDFViewerApplication.appConfig.openFileInputName;
    document.getElementById(openFileInputName).click();
  };
}

function webViewerPresentationMode() {
  PDFViewerApplication.requestPresentationMode();
}

function webViewerPrint() {
  PDFViewerApplication.triggerPrinting();
}

function webViewerDownload() {
  PDFViewerApplication.downloadOrSave({
    sourceEventType: "download"
  });
}

function webViewerSave() {
  PDFViewerApplication.downloadOrSave({
    sourceEventType: "save"
  });
}

function webViewerFirstPage() {
  if (PDFViewerApplication.pdfDocument) {
    PDFViewerApplication.page = 1;
  }
}

function webViewerLastPage() {
  if (PDFViewerApplication.pdfDocument) {
    PDFViewerApplication.page = PDFViewerApplication.pagesCount;
  }
}

function webViewerNextPage() {
  PDFViewerApplication.pdfViewer.nextPage();
}

function webViewerPreviousPage() {
  PDFViewerApplication.pdfViewer.previousPage();
}

function webViewerZoomIn() {
  PDFViewerApplication.zoomIn();
}

function webViewerZoomOut() {
  PDFViewerApplication.zoomOut();
}

function webViewerZoomReset() {
  PDFViewerApplication.zoomReset();
}

function webViewerPageNumberChanged(evt) {
  var pdfViewer = PDFViewerApplication.pdfViewer;

  if (evt.value !== "") {
    PDFViewerApplication.pdfLinkService.goToPage(evt.value);
  }

  if (evt.value !== pdfViewer.currentPageNumber.toString() && evt.value !== pdfViewer.currentPageLabel) {
    PDFViewerApplication.toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel);
  }
}

function webViewerScaleChanged(evt) {
  PDFViewerApplication.pdfViewer.currentScaleValue = evt.value;
}

function webViewerRotateCw() {
  PDFViewerApplication.rotatePages(90);
}

function webViewerRotateCcw() {
  PDFViewerApplication.rotatePages(-90);
}

function webViewerOptionalContentConfig(evt) {
  PDFViewerApplication.pdfViewer.optionalContentConfigPromise = evt.promise;
}

function webViewerSwitchScrollMode(evt) {
  PDFViewerApplication.pdfViewer.scrollMode = evt.mode;
}

function webViewerSwitchSpreadMode(evt) {
  PDFViewerApplication.pdfViewer.spreadMode = evt.mode;
}

function webViewerDocumentProperties() {
  PDFViewerApplication.pdfDocumentProperties.open();
}

function webViewerFind(evt) {
  PDFViewerApplication.findController.executeCommand("find" + evt.type, {
    query: evt.query,
    phraseSearch: evt.phraseSearch,
    caseSensitive: evt.caseSensitive,
    entireWord: evt.entireWord,
    highlightAll: evt.highlightAll,
    findPrevious: evt.findPrevious
  });
}

function webViewerFindFromUrlHash(evt) {
  PDFViewerApplication.findController.executeCommand("find", {
    query: evt.query,
    phraseSearch: evt.phraseSearch,
    caseSensitive: false,
    entireWord: false,
    highlightAll: true,
    findPrevious: false
  });
}

function webViewerUpdateFindMatchesCount(_ref20) {
  var matchesCount = _ref20.matchesCount;

  if (PDFViewerApplication.supportsIntegratedFind) {
    PDFViewerApplication.externalServices.updateFindMatchesCount(matchesCount);
  } else {
    PDFViewerApplication.findBar.updateResultsCount(matchesCount);
  }
}

function webViewerUpdateFindControlState(_ref21) {
  var state = _ref21.state,
      previous = _ref21.previous,
      matchesCount = _ref21.matchesCount,
      rawQuery = _ref21.rawQuery;

  if (PDFViewerApplication.supportsIntegratedFind) {
    PDFViewerApplication.externalServices.updateFindControlState({
      result: state,
      findPrevious: previous,
      matchesCount: matchesCount,
      rawQuery: rawQuery
    });
  } else {
    PDFViewerApplication.findBar.updateUIState(state, previous, matchesCount);
  }
}

function webViewerScaleChanging(evt) {
  PDFViewerApplication.toolbar.setPageScale(evt.presetValue, evt.scale);
  PDFViewerApplication.pdfViewer.update();
}

function webViewerRotationChanging(evt) {
  PDFViewerApplication.pdfThumbnailViewer.pagesRotation = evt.pagesRotation;
  PDFViewerApplication.forceRendering();
  PDFViewerApplication.pdfViewer.currentPageNumber = evt.pageNumber;
}

function webViewerPageChanging(_ref22) {
  var pageNumber = _ref22.pageNumber,
      pageLabel = _ref22.pageLabel;
  PDFViewerApplication.toolbar.setPageNumber(pageNumber, pageLabel);
  PDFViewerApplication.secondaryToolbar.setPageNumber(pageNumber);

  if (PDFViewerApplication.pdfSidebar.isThumbnailViewVisible) {
    PDFViewerApplication.pdfThumbnailViewer.scrollThumbnailIntoView(pageNumber);
  }
}

function webViewerVisibilityChange(evt) {
  if (document.visibilityState === "visible") {
    setZoomDisabledTimeout();
  }
}

var zoomDisabledTimeout = null;

function setZoomDisabledTimeout() {
  if (zoomDisabledTimeout) {
    clearTimeout(zoomDisabledTimeout);
  }

  zoomDisabledTimeout = setTimeout(function () {
    zoomDisabledTimeout = null;
  }, WHEEL_ZOOM_DISABLED_TIMEOUT);
}

function webViewerWheel(evt) {
  var pdfViewer = PDFViewerApplication.pdfViewer,
      supportedMouseWheelZoomModifierKeys = PDFViewerApplication.supportedMouseWheelZoomModifierKeys;

  if (pdfViewer.isInPresentationMode) {
    return;
  }

  if (evt.ctrlKey && supportedMouseWheelZoomModifierKeys.ctrlKey || evt.metaKey && supportedMouseWheelZoomModifierKeys.metaKey) {
    evt.preventDefault();

    if (zoomDisabledTimeout || document.visibilityState === "hidden") {
      return;
    }

    var previousScale = pdfViewer.currentScale;
    var delta = (0, _ui_utils.normalizeWheelEventDirection)(evt);
    var ticks = 0;

    if (evt.deltaMode === WheelEvent.DOM_DELTA_LINE || evt.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      if (Math.abs(delta) >= 1) {
        ticks = Math.sign(delta);
      } else {
        ticks = PDFViewerApplication.accumulateWheelTicks(delta);
      }
    } else {
      var PIXELS_PER_LINE_SCALE = 30;
      ticks = PDFViewerApplication.accumulateWheelTicks(delta / PIXELS_PER_LINE_SCALE);
    }

    if (ticks < 0) {
      PDFViewerApplication.zoomOut(-ticks);
    } else if (ticks > 0) {
      PDFViewerApplication.zoomIn(ticks);
    }

    var currentScale = pdfViewer.currentScale;

    if (previousScale !== currentScale) {
      var scaleCorrectionFactor = currentScale / previousScale - 1;
      var rect = pdfViewer.container.getBoundingClientRect();
      var dx = evt.clientX - rect.left;
      var dy = evt.clientY - rect.top;
      pdfViewer.container.scrollLeft += dx * scaleCorrectionFactor;
      pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
    }
  } else {
    setZoomDisabledTimeout();
  }
}

function webViewerTouchStart(evt) {
  if (evt.touches.length > 1) {
    evt.preventDefault();
  }
}

function webViewerClick(evt) {
  if (PDFViewerApplication.triggerDelayedFallback && PDFViewerApplication.pdfViewer.containsElement(evt.target)) {
    PDFViewerApplication.triggerDelayedFallback();
  }

  if (!PDFViewerApplication.secondaryToolbar.isOpen) {
    return;
  }

  var appConfig = PDFViewerApplication.appConfig;

  if (PDFViewerApplication.pdfViewer.containsElement(evt.target) || appConfig.toolbar.container.contains(evt.target) && evt.target !== appConfig.secondaryToolbar.toggleButton) {
    PDFViewerApplication.secondaryToolbar.close();
  }
}

function webViewerKeyUp(evt) {
  if (evt.keyCode === 9) {
    if (PDFViewerApplication.triggerDelayedFallback) {
      PDFViewerApplication.triggerDelayedFallback();
    }
  }
}

function webViewerKeyDown(evt) {
  if (PDFViewerApplication.overlayManager.active) {
    return;
  }

  var handled = false,
      ensureViewerFocused = false;
  var cmd = (evt.ctrlKey ? 1 : 0) | (evt.altKey ? 2 : 0) | (evt.shiftKey ? 4 : 0) | (evt.metaKey ? 8 : 0);
  var pdfViewer = PDFViewerApplication.pdfViewer;
  var isViewerInPresentationMode = pdfViewer === null || pdfViewer === void 0 ? void 0 : pdfViewer.isInPresentationMode;

  if (cmd === 1 || cmd === 8 || cmd === 5 || cmd === 12) {
    switch (evt.keyCode) {
      case 70:
        if (!PDFViewerApplication.supportsIntegratedFind && !evt.shiftKey) {
          PDFViewerApplication.findBar.open();
          handled = true;
        }

        break;

      case 71:
        if (!PDFViewerApplication.supportsIntegratedFind) {
          var findState = PDFViewerApplication.findController.state;

          if (findState) {
            PDFViewerApplication.findController.executeCommand("findagain", {
              query: findState.query,
              phraseSearch: findState.phraseSearch,
              caseSensitive: findState.caseSensitive,
              entireWord: findState.entireWord,
              highlightAll: findState.highlightAll,
              findPrevious: cmd === 5 || cmd === 12
            });
          }

          handled = true;
        }

        break;

      case 61:
      case 107:
      case 187:
      case 171:
        if (!isViewerInPresentationMode) {
          PDFViewerApplication.zoomIn();
        }

        handled = true;
        break;

      case 173:
      case 109:
      case 189:
        if (!isViewerInPresentationMode) {
          PDFViewerApplication.zoomOut();
        }

        handled = true;
        break;

      case 48:
      case 96:
        if (!isViewerInPresentationMode) {
          setTimeout(function () {
            PDFViewerApplication.zoomReset();
          });
          handled = false;
        }

        break;

      case 38:
        if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
          PDFViewerApplication.page = 1;
          handled = true;
          ensureViewerFocused = true;
        }

        break;

      case 40:
        if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page = PDFViewerApplication.pagesCount;
          handled = true;
          ensureViewerFocused = true;
        }

        break;
    }
  }

  var eventBus = PDFViewerApplication.eventBus;

  if (cmd === 1 || cmd === 8) {
    switch (evt.keyCode) {
      case 83:
        eventBus.dispatch("download", {
          source: window
        });
        handled = true;
        break;

      case 79:
        {
          eventBus.dispatch("openfile", {
            source: window
          });
          handled = true;
        }
        break;
    }
  }

  if (cmd === 3 || cmd === 10) {
    switch (evt.keyCode) {
      case 80:
        PDFViewerApplication.requestPresentationMode();
        handled = true;
        break;

      case 71:
        PDFViewerApplication.appConfig.toolbar.pageNumber.select();
        handled = true;
        break;
    }
  }

  if (handled) {
    if (ensureViewerFocused && !isViewerInPresentationMode) {
      pdfViewer.focus();
    }

    evt.preventDefault();
    return;
  }

  var curElement = (0, _ui_utils.getActiveOrFocusedElement)();
  var curElementTagName = curElement === null || curElement === void 0 ? void 0 : curElement.tagName.toUpperCase();

  if (curElementTagName === "INPUT" || curElementTagName === "TEXTAREA" || curElementTagName === "SELECT" || curElement !== null && curElement !== void 0 && curElement.isContentEditable) {
    if (evt.keyCode !== 27) {
      return;
    }
  }

  if (cmd === 0) {
    var turnPage = 0,
        turnOnlyIfPageFit = false;

    switch (evt.keyCode) {
      case 38:
      case 33:
        if (pdfViewer.isVerticalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }

        turnPage = -1;
        break;

      case 8:
        if (!isViewerInPresentationMode) {
          turnOnlyIfPageFit = true;
        }

        turnPage = -1;
        break;

      case 37:
        if (pdfViewer.isHorizontalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }

      case 75:
      case 80:
        turnPage = -1;
        break;

      case 27:
        if (PDFViewerApplication.secondaryToolbar.isOpen) {
          PDFViewerApplication.secondaryToolbar.close();
          handled = true;
        }

        if (!PDFViewerApplication.supportsIntegratedFind && PDFViewerApplication.findBar.opened) {
          PDFViewerApplication.findBar.close();
          handled = true;
        }

        break;

      case 40:
      case 34:
        if (pdfViewer.isVerticalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }

        turnPage = 1;
        break;

      case 13:
      case 32:
        if (!isViewerInPresentationMode) {
          turnOnlyIfPageFit = true;
        }

        turnPage = 1;
        break;

      case 39:
        if (pdfViewer.isHorizontalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }

      case 74:
      case 78:
        turnPage = 1;
        break;

      case 36:
        if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
          PDFViewerApplication.page = 1;
          handled = true;
          ensureViewerFocused = true;
        }

        break;

      case 35:
        if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page = PDFViewerApplication.pagesCount;
          handled = true;
          ensureViewerFocused = true;
        }

        break;

      case 83:
        PDFViewerApplication.pdfCursorTools.switchTool(_pdf_cursor_tools.CursorTool.SELECT);
        break;

      case 72:
        PDFViewerApplication.pdfCursorTools.switchTool(_pdf_cursor_tools.CursorTool.HAND);
        break;

      case 82:
        PDFViewerApplication.rotatePages(90);
        break;

      case 115:
        PDFViewerApplication.pdfSidebar.toggle();
        break;
    }

    if (turnPage !== 0 && (!turnOnlyIfPageFit || pdfViewer.currentScaleValue === "page-fit")) {
      if (turnPage > 0) {
        pdfViewer.nextPage();
      } else {
        pdfViewer.previousPage();
      }

      handled = true;
    }
  }

  if (cmd === 4) {
    switch (evt.keyCode) {
      case 13:
      case 32:
        if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== "page-fit") {
          break;
        }

        if (PDFViewerApplication.page > 1) {
          PDFViewerApplication.page--;
        }

        handled = true;
        break;

      case 82:
        PDFViewerApplication.rotatePages(-90);
        break;
    }
  }

  if (!handled && !isViewerInPresentationMode) {
    if (evt.keyCode >= 33 && evt.keyCode <= 40 || evt.keyCode === 32 && curElementTagName !== "BUTTON") {
      ensureViewerFocused = true;
    }
  }

  if (ensureViewerFocused && !pdfViewer.containsElement(curElement)) {
    pdfViewer.focus();
  }

  if (handled) {
    evt.preventDefault();
  }
}

function beforeUnload(evt) {
  evt.preventDefault();
  evt.returnValue = "";
  return false;
}

function apiPageLayoutToSpreadMode(layout) {
  switch (layout) {
    case "SinglePage":
    case "OneColumn":
      return _ui_utils.SpreadMode.NONE;

    case "TwoColumnLeft":
    case "TwoPageLeft":
      return _ui_utils.SpreadMode.ODD;

    case "TwoColumnRight":
    case "TwoPageRight":
      return _ui_utils.SpreadMode.EVEN;
  }

  return _ui_utils.SpreadMode.NONE;
}

function apiPageModeToSidebarView(mode) {
  switch (mode) {
    case "UseNone":
      return _ui_utils.SidebarView.NONE;

    case "UseThumbs":
      return _ui_utils.SidebarView.THUMBS;

    case "UseOutlines":
      return _ui_utils.SidebarView.OUTLINE;

    case "UseAttachments":
      return _ui_utils.SidebarView.ATTACHMENTS;

    case "UseOC":
      return _ui_utils.SidebarView.LAYERS;
  }

  return _ui_utils.SidebarView.NONE;
}

var PDFPrintServiceFactory = {
  instance: {
    supportsPrinting: false,
    createPrintService: function createPrintService() {
      throw new Error("Not implemented: createPrintService");
    }
  }
};
exports.PDFPrintServiceFactory = PDFPrintServiceFactory;