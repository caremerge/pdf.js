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
exports.BaseViewer = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _pdf = require("../pdf");

var _ui_utils = require("./ui_utils.js");

var _pdf_rendering_queue = require("./pdf_rendering_queue.js");

var _annotation_layer_builder = require("./annotation_layer_builder.js");

var _pdf_page_view = require("./pdf_page_view.js");

var _pdf_link_service = require("./pdf_link_service.js");

var _text_layer_builder = require("./text_layer_builder.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_CACHE_SIZE = 10;

function PDFPageViewBuffer(size) {
  var data = [];

  this.push = function (view) {
    var i = data.indexOf(view);

    if (i >= 0) {
      data.splice(i, 1);
    }

    data.push(view);

    if (data.length > size) {
      data.shift().destroy();
    }
  };

  this.resize = function (newSize, pagesToKeep) {
    size = newSize;

    if (pagesToKeep) {
      var pageIdsToKeep = new Set();

      for (var i = 0, iMax = pagesToKeep.length; i < iMax; ++i) {
        pageIdsToKeep.add(pagesToKeep[i].id);
      }

      (0, _ui_utils.moveToEndOfArray)(data, function (page) {
        return pageIdsToKeep.has(page.id);
      });
    }

    while (data.length > size) {
      data.shift().destroy();
    }
  };

  this.has = function (view) {
    return data.includes(view);
  };
}

function isSameScale(oldScale, newScale) {
  if (newScale === oldScale) {
    return true;
  }

  if (Math.abs(newScale - oldScale) < 1e-15) {
    return true;
  }

  return false;
}

var BaseViewer = /*#__PURE__*/function () {
  function BaseViewer(options) {
    var _this$container,
        _this$viewer,
        _this = this;

    _classCallCheck(this, BaseViewer);

    if (this.constructor === BaseViewer) {
      throw new Error("Cannot initialize BaseViewer.");
    }

    var viewerVersion = '2.8.105';

    if (_pdf.version !== viewerVersion) {
      throw new Error("The API version \"".concat(_pdf.version, "\" does not match the Viewer version \"").concat(viewerVersion, "\"."));
    }

    this._name = this.constructor.name;
    this.container = options.container;
    this.viewer = options.viewer || options.container.firstElementChild;

    if (!(((_this$container = this.container) === null || _this$container === void 0 ? void 0 : _this$container.tagName.toUpperCase()) === "DIV" && ((_this$viewer = this.viewer) === null || _this$viewer === void 0 ? void 0 : _this$viewer.tagName.toUpperCase()) === "DIV")) {
      throw new Error("Invalid `container` and/or `viewer` option.");
    }

    if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute") {
      throw new Error("The `container` must be absolutely positioned.");
    }

    this.eventBus = options.eventBus;
    this.linkService = options.linkService || new _pdf_link_service.SimpleLinkService();
    this.downloadManager = options.downloadManager || null;
    this.findController = options.findController || null;
    this.removePageBorders = options.removePageBorders || false;
    this.textLayerMode = Number.isInteger(options.textLayerMode) ? options.textLayerMode : _ui_utils.TextLayerMode.ENABLE;
    this.imageResourcesPath = options.imageResourcesPath || "";
    this.renderInteractiveForms = typeof options.renderInteractiveForms === "boolean" ? options.renderInteractiveForms : true;
    this.enablePrintAutoRotate = options.enablePrintAutoRotate || false;
    this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
    this.enableWebGL = options.enableWebGL || false;
    this.useOnlyCssZoom = options.useOnlyCssZoom || false;
    this.maxCanvasPixels = options.maxCanvasPixels;
    this.l10n = options.l10n || _ui_utils.NullL10n;
    this.enableScripting = options.enableScripting || false;
    this._mouseState = options.mouseState || null;
    this.defaultRenderingQueue = !options.renderingQueue;

    if (this.defaultRenderingQueue) {
      this.renderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
      this.renderingQueue.setViewer(this);
    } else {
      this.renderingQueue = options.renderingQueue;
    }

    this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdate.bind(this));
    this.presentationModeState = _ui_utils.PresentationModeState.UNKNOWN;
    this._onBeforeDraw = this._onAfterDraw = null;

    this._resetView();

    if (this.removePageBorders) {
      this.viewer.classList.add("removePageBorders");
    }

    Promise.resolve().then(function () {
      _this.eventBus.dispatch("baseviewerinit", {
        source: _this
      });
    });
  }

  _createClass(BaseViewer, [{
    key: "pagesCount",
    get: function get() {
      return this._pages.length;
    }
  }, {
    key: "getPageView",
    value: function getPageView(index) {
      return this._pages[index];
    }
  }, {
    key: "pageViewsReady",
    get: function get() {
      if (!this._pagesCapability.settled) {
        return false;
      }

      return this._pages.every(function (pageView) {
        return pageView === null || pageView === void 0 ? void 0 : pageView.pdfPage;
      });
    }
  }, {
    key: "currentPageNumber",
    get: function get() {
      return this._currentPageNumber;
    },
    set: function set(val) {
      if (!Number.isInteger(val)) {
        throw new Error("Invalid page number.");
      }

      if (!this.pdfDocument) {
        return;
      }

      if (!this._setCurrentPageNumber(val, true)) {
        console.error("".concat(this._name, ".currentPageNumber: \"").concat(val, "\" is not a valid page."));
      }
    }
  }, {
    key: "_setCurrentPageNumber",
    value: function _setCurrentPageNumber(val) {
      var _this$_pageLabels, _this$_pageLabels2;

      var resetCurrentPageView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this._currentPageNumber === val) {
        if (resetCurrentPageView) {
          this._resetCurrentPageView();
        }

        return true;
      }

      if (!(0 < val && val <= this.pagesCount)) {
        return false;
      }

      var previous = this._currentPageNumber;
      this._currentPageNumber = val;
      this.eventBus.dispatch("pagechanging", {
        source: this,
        pageNumber: val,
        pageLabel: (_this$_pageLabels = (_this$_pageLabels2 = this._pageLabels) === null || _this$_pageLabels2 === void 0 ? void 0 : _this$_pageLabels2[val - 1]) !== null && _this$_pageLabels !== void 0 ? _this$_pageLabels : null,
        previous: previous
      });

      if (resetCurrentPageView) {
        this._resetCurrentPageView();
      }

      return true;
    }
  }, {
    key: "currentPageLabel",
    get: function get() {
      var _this$_pageLabels3, _this$_pageLabels4;

      return (_this$_pageLabels3 = (_this$_pageLabels4 = this._pageLabels) === null || _this$_pageLabels4 === void 0 ? void 0 : _this$_pageLabels4[this._currentPageNumber - 1]) !== null && _this$_pageLabels3 !== void 0 ? _this$_pageLabels3 : null;
    },
    set: function set(val) {
      if (!this.pdfDocument) {
        return;
      }

      var page = val | 0;

      if (this._pageLabels) {
        var i = this._pageLabels.indexOf(val);

        if (i >= 0) {
          page = i + 1;
        }
      }

      if (!this._setCurrentPageNumber(page, true)) {
        console.error("".concat(this._name, ".currentPageLabel: \"").concat(val, "\" is not a valid page."));
      }
    }
  }, {
    key: "currentScale",
    get: function get() {
      return this._currentScale !== _ui_utils.UNKNOWN_SCALE ? this._currentScale : _ui_utils.DEFAULT_SCALE;
    },
    set: function set(val) {
      if (isNaN(val)) {
        throw new Error("Invalid numeric scale.");
      }

      if (!this.pdfDocument) {
        return;
      }

      this._setScale(val, false);
    }
  }, {
    key: "currentScaleValue",
    get: function get() {
      return this._currentScaleValue;
    },
    set: function set(val) {
      if (!this.pdfDocument) {
        return;
      }

      this._setScale(val, false);
    }
  }, {
    key: "pagesRotation",
    get: function get() {
      return this._pagesRotation;
    },
    set: function set(rotation) {
      if (!(0, _ui_utils.isValidRotation)(rotation)) {
        throw new Error("Invalid pages rotation angle.");
      }

      if (!this.pdfDocument) {
        return;
      }

      if (this._pagesRotation === rotation) {
        return;
      }

      this._pagesRotation = rotation;
      var pageNumber = this._currentPageNumber;

      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        var pageView = this._pages[i];
        pageView.update(pageView.scale, rotation);
      }

      if (this._currentScaleValue) {
        this._setScale(this._currentScaleValue, true);
      }

      this.eventBus.dispatch("rotationchanging", {
        source: this,
        pagesRotation: rotation,
        pageNumber: pageNumber
      });

      if (this.defaultRenderingQueue) {
        this.update();
      }
    }
  }, {
    key: "firstPagePromise",
    get: function get() {
      return this.pdfDocument ? this._firstPageCapability.promise : null;
    }
  }, {
    key: "onePageRendered",
    get: function get() {
      return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
    }
  }, {
    key: "pagesPromise",
    get: function get() {
      return this.pdfDocument ? this._pagesCapability.promise : null;
    }
  }, {
    key: "_viewerElement",
    get: function get() {
      throw new Error("Not implemented: _viewerElement");
    }
  }, {
    key: "_onePageRenderedOrForceFetch",
    value: function _onePageRenderedOrForceFetch() {
      if (!this.container.offsetParent || this._getVisiblePages().views.length === 0) {
        return Promise.resolve();
      }

      return this._onePageRenderedCapability.promise;
    }
  }, {
    key: "setDocument",
    value: function setDocument(pdfDocument) {
      var _this2 = this;

      if (this.pdfDocument) {
        this.eventBus.dispatch("pagesdestroy", {
          source: this
        });

        this._cancelRendering();

        this._resetView();

        if (this.findController) {
          this.findController.setDocument(null);
        }
      }

      this.pdfDocument = pdfDocument;

      if (!pdfDocument) {
        return;
      }

      var pagesCount = pdfDocument.numPages;
      var firstPagePromise = pdfDocument.getPage(1);
      var optionalContentConfigPromise = pdfDocument.getOptionalContentConfig();

      this._pagesCapability.promise.then(function () {
        _this2.eventBus.dispatch("pagesloaded", {
          source: _this2,
          pagesCount: pagesCount
        });
      });

      this._onBeforeDraw = function (evt) {
        var pageView = _this2._pages[evt.pageNumber - 1];

        if (!pageView) {
          return;
        }

        _this2._buffer.push(pageView);
      };

      this.eventBus._on("pagerender", this._onBeforeDraw);

      this._onAfterDraw = function (evt) {
        if (evt.cssTransform || _this2._onePageRenderedCapability.settled) {
          return;
        }

        _this2._onePageRenderedCapability.resolve();

        _this2.eventBus._off("pagerendered", _this2._onAfterDraw);

        _this2._onAfterDraw = null;
      };

      this.eventBus._on("pagerendered", this._onAfterDraw);

      firstPagePromise.then(function (firstPdfPage) {
        _this2._firstPageCapability.resolve(firstPdfPage);

        _this2._optionalContentConfigPromise = optionalContentConfigPromise;
        var scale = _this2.currentScale;
        var viewport = firstPdfPage.getViewport({
          scale: scale * _ui_utils.CSS_UNITS
        });
        var textLayerFactory = _this2.textLayerMode !== _ui_utils.TextLayerMode.DISABLE ? _this2 : null;

        for (var pageNum = 1; pageNum <= pagesCount; ++pageNum) {
          var pageView = new _pdf_page_view.PDFPageView({
            container: _this2._viewerElement,
            eventBus: _this2.eventBus,
            id: pageNum,
            scale: scale,
            defaultViewport: viewport.clone(),
            optionalContentConfigPromise: optionalContentConfigPromise,
            renderingQueue: _this2.renderingQueue,
            textLayerFactory: textLayerFactory,
            textLayerMode: _this2.textLayerMode,
            annotationLayerFactory: _this2,
            imageResourcesPath: _this2.imageResourcesPath,
            renderInteractiveForms: _this2.renderInteractiveForms,
            renderer: _this2.renderer,
            enableWebGL: _this2.enableWebGL,
            useOnlyCssZoom: _this2.useOnlyCssZoom,
            maxCanvasPixels: _this2.maxCanvasPixels,
            l10n: _this2.l10n,
            enableScripting: _this2.enableScripting
          });

          _this2._pages.push(pageView);
        }

        var firstPageView = _this2._pages[0];

        if (firstPageView) {
          firstPageView.setPdfPage(firstPdfPage);

          _this2.linkService.cachePageRef(1, firstPdfPage.ref);
        }

        if (_this2._spreadMode !== _ui_utils.SpreadMode.NONE) {
          _this2._updateSpreadMode();
        }

        _this2._onePageRenderedOrForceFetch().then(function () {
          if (_this2.findController) {
            _this2.findController.setDocument(pdfDocument);
          }

          if (pdfDocument.loadingParams.disableAutoFetch || pagesCount > 7500) {
            _this2._pagesCapability.resolve();

            return;
          }

          var getPagesLeft = pagesCount - 1;

          if (getPagesLeft <= 0) {
            _this2._pagesCapability.resolve();

            return;
          }

          var _loop = function _loop(_pageNum) {
            pdfDocument.getPage(_pageNum).then(function (pdfPage) {
              var pageView = _this2._pages[_pageNum - 1];

              if (!pageView.pdfPage) {
                pageView.setPdfPage(pdfPage);
              }

              _this2.linkService.cachePageRef(_pageNum, pdfPage.ref);

              if (--getPagesLeft === 0) {
                _this2._pagesCapability.resolve();
              }
            }, function (reason) {
              console.error("Unable to get page ".concat(_pageNum, " to initialize viewer"), reason);

              if (--getPagesLeft === 0) {
                _this2._pagesCapability.resolve();
              }
            });
          };

          for (var _pageNum = 2; _pageNum <= pagesCount; ++_pageNum) {
            _loop(_pageNum);
          }
        });

        _this2.eventBus.dispatch("pagesinit", {
          source: _this2
        });

        if (_this2.defaultRenderingQueue) {
          _this2.update();
        }
      })["catch"](function (reason) {
        console.error("Unable to initialize viewer", reason);
      });
    }
  }, {
    key: "setPageLabels",
    value: function setPageLabels(labels) {
      if (!this.pdfDocument) {
        return;
      }

      if (!labels) {
        this._pageLabels = null;
      } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
        this._pageLabels = null;
        console.error("".concat(this._name, ".setPageLabels: Invalid page labels."));
      } else {
        this._pageLabels = labels;
      }

      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        var _this$_pageLabels$i, _this$_pageLabels5;

        this._pages[i].setPageLabel((_this$_pageLabels$i = (_this$_pageLabels5 = this._pageLabels) === null || _this$_pageLabels5 === void 0 ? void 0 : _this$_pageLabels5[i]) !== null && _this$_pageLabels$i !== void 0 ? _this$_pageLabels$i : null);
      }
    }
  }, {
    key: "_resetView",
    value: function _resetView() {
      this._pages = [];
      this._currentPageNumber = 1;
      this._currentScale = _ui_utils.UNKNOWN_SCALE;
      this._currentScaleValue = null;
      this._pageLabels = null;
      this._buffer = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);
      this._location = null;
      this._pagesRotation = 0;
      this._optionalContentConfigPromise = null;
      this._pagesRequests = new WeakMap();
      this._firstPageCapability = (0, _pdf.createPromiseCapability)();
      this._onePageRenderedCapability = (0, _pdf.createPromiseCapability)();
      this._pagesCapability = (0, _pdf.createPromiseCapability)();
      this._scrollMode = _ui_utils.ScrollMode.VERTICAL;
      this._spreadMode = _ui_utils.SpreadMode.NONE;

      if (this._onBeforeDraw) {
        this.eventBus._off("pagerender", this._onBeforeDraw);

        this._onBeforeDraw = null;
      }

      if (this._onAfterDraw) {
        this.eventBus._off("pagerendered", this._onAfterDraw);

        this._onAfterDraw = null;
      }

      this._resetScriptingEvents();

      this.viewer.textContent = "";

      this._updateScrollMode();
    }
  }, {
    key: "_scrollUpdate",
    value: function _scrollUpdate() {
      if (this.pagesCount === 0) {
        return;
      }

      this.update();
    }
  }, {
    key: "_scrollIntoView",
    value: function _scrollIntoView(_ref) {
      var pageDiv = _ref.pageDiv,
          _ref$pageSpot = _ref.pageSpot,
          pageSpot = _ref$pageSpot === void 0 ? null : _ref$pageSpot,
          _ref$pageNumber = _ref.pageNumber,
          pageNumber = _ref$pageNumber === void 0 ? null : _ref$pageNumber;
      (0, _ui_utils.scrollIntoView)(pageDiv, pageSpot);
    }
  }, {
    key: "_setScaleUpdatePages",
    value: function _setScaleUpdatePages(newScale, newValue) {
      var noScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var preset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this._currentScaleValue = newValue.toString();

      if (isSameScale(this._currentScale, newScale)) {
        if (preset) {
          this.eventBus.dispatch("scalechanging", {
            source: this,
            scale: newScale,
            presetValue: newValue
          });
        }

        return;
      }

      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        this._pages[i].update(newScale);
      }

      this._currentScale = newScale;

      if (!noScroll) {
        var page = this._currentPageNumber,
            dest;

        if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
          page = this._location.pageNumber;
          dest = [null, {
            name: "XYZ"
          }, this._location.left, this._location.top, null];
        }

        this.scrollPageIntoView({
          pageNumber: page,
          destArray: dest,
          allowNegativeOffset: true
        });
      }

      this.eventBus.dispatch("scalechanging", {
        source: this,
        scale: newScale,
        presetValue: preset ? newValue : undefined
      });

      if (this.defaultRenderingQueue) {
        this.update();
      }
    }
  }, {
    key: "_pageWidthScaleFactor",
    get: function get() {
      if (this._spreadMode !== _ui_utils.SpreadMode.NONE && this._scrollMode !== _ui_utils.ScrollMode.HORIZONTAL && !this.isInPresentationMode) {
        return 2;
      }

      return 1;
    }
  }, {
    key: "_setScale",
    value: function _setScale(value) {
      var noScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scale = parseFloat(value);

      if (scale > 0) {
        this._setScaleUpdatePages(scale, value, noScroll, false);
      } else {
        var currentPage = this._pages[this._currentPageNumber - 1];

        if (!currentPage) {
          return;
        }

        var noPadding = this.isInPresentationMode || this.removePageBorders;
        var hPadding = noPadding ? 0 : _ui_utils.SCROLLBAR_PADDING;
        var vPadding = noPadding ? 0 : _ui_utils.VERTICAL_PADDING;

        if (!noPadding && this._isScrollModeHorizontal) {
          var _ref2 = [vPadding, hPadding];
          hPadding = _ref2[0];
          vPadding = _ref2[1];
        }

        var pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale / this._pageWidthScaleFactor;
        var pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;

        switch (value) {
          case "page-actual":
            scale = 1;
            break;

          case "page-width":
            scale = pageWidthScale;
            break;

          case "page-height":
            scale = pageHeightScale;
            break;

          case "page-fit":
            scale = Math.min(pageWidthScale, pageHeightScale);
            break;

          case "auto":
            var horizontalScale = (0, _ui_utils.isPortraitOrientation)(currentPage) ? pageWidthScale : Math.min(pageHeightScale, pageWidthScale);
            scale = Math.min(_ui_utils.MAX_AUTO_SCALE, horizontalScale);
            break;

          default:
            console.error("".concat(this._name, "._setScale: \"").concat(value, "\" is an unknown zoom value."));
            return;
        }

        this._setScaleUpdatePages(scale, value, noScroll, true);
      }
    }
  }, {
    key: "_resetCurrentPageView",
    value: function _resetCurrentPageView() {
      if (this.isInPresentationMode) {
        this._setScale(this._currentScaleValue, true);
      }

      var pageView = this._pages[this._currentPageNumber - 1];

      this._scrollIntoView({
        pageDiv: pageView.div
      });
    }
  }, {
    key: "pageLabelToPageNumber",
    value: function pageLabelToPageNumber(label) {
      if (!this._pageLabels) {
        return null;
      }

      var i = this._pageLabels.indexOf(label);

      if (i < 0) {
        return null;
      }

      return i + 1;
    }
  }, {
    key: "scrollPageIntoView",
    value: function scrollPageIntoView(_ref3) {
      var pageNumber = _ref3.pageNumber,
          _ref3$destArray = _ref3.destArray,
          destArray = _ref3$destArray === void 0 ? null : _ref3$destArray,
          _ref3$allowNegativeOf = _ref3.allowNegativeOffset,
          allowNegativeOffset = _ref3$allowNegativeOf === void 0 ? false : _ref3$allowNegativeOf,
          _ref3$ignoreDestinati = _ref3.ignoreDestinationZoom,
          ignoreDestinationZoom = _ref3$ignoreDestinati === void 0 ? false : _ref3$ignoreDestinati;

      if (!this.pdfDocument) {
        return;
      }

      var pageView = Number.isInteger(pageNumber) && this._pages[pageNumber - 1];

      if (!pageView) {
        console.error("".concat(this._name, ".scrollPageIntoView: ") + "\"".concat(pageNumber, "\" is not a valid pageNumber parameter."));
        return;
      }

      if (this.isInPresentationMode || !destArray) {
        this._setCurrentPageNumber(pageNumber, true);

        return;
      }

      var x = 0,
          y = 0;
      var width = 0,
          height = 0,
          widthScale,
          heightScale;
      var changeOrientation = pageView.rotation % 180 !== 0;
      var pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / _ui_utils.CSS_UNITS;
      var pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / _ui_utils.CSS_UNITS;
      var scale = 0;

      switch (destArray[1].name) {
        case "XYZ":
          x = destArray[2];
          y = destArray[3];
          scale = destArray[4];
          x = x !== null ? x : 0;
          y = y !== null ? y : pageHeight;
          break;

        case "Fit":
        case "FitB":
          scale = "page-fit";
          break;

        case "FitH":
        case "FitBH":
          y = destArray[2];
          scale = "page-width";

          if (y === null && this._location) {
            x = this._location.left;
            y = this._location.top;
          } else if (typeof y !== "number") {
            y = pageHeight;
          }

          break;

        case "FitV":
        case "FitBV":
          x = destArray[2];
          width = pageWidth;
          height = pageHeight;
          scale = "page-height";
          break;

        case "FitR":
          x = destArray[2];
          y = destArray[3];
          width = destArray[4] - x;
          height = destArray[5] - y;
          var hPadding = this.removePageBorders ? 0 : _ui_utils.SCROLLBAR_PADDING;
          var vPadding = this.removePageBorders ? 0 : _ui_utils.VERTICAL_PADDING;
          widthScale = (this.container.clientWidth - hPadding) / width / _ui_utils.CSS_UNITS;
          heightScale = (this.container.clientHeight - vPadding) / height / _ui_utils.CSS_UNITS;
          scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
          break;

        default:
          console.error("".concat(this._name, ".scrollPageIntoView: ") + "\"".concat(destArray[1].name, "\" is not a valid destination type."));
          return;
      }

      if (!ignoreDestinationZoom) {
        if (scale && scale !== this._currentScale) {
          this.currentScaleValue = scale;
        } else if (this._currentScale === _ui_utils.UNKNOWN_SCALE) {
          this.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
        }
      }

      if (scale === "page-fit" && !destArray[4]) {
        this._scrollIntoView({
          pageDiv: pageView.div,
          pageNumber: pageNumber
        });

        return;
      }

      var boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
      var left = Math.min(boundingRect[0][0], boundingRect[1][0]);
      var top = Math.min(boundingRect[0][1], boundingRect[1][1]);

      if (!allowNegativeOffset) {
        left = Math.max(left, 0);
        top = Math.max(top, 0);
      }

      this._scrollIntoView({
        pageDiv: pageView.div,
        pageSpot: {
          left: left,
          top: top
        },
        pageNumber: pageNumber
      });
    }
  }, {
    key: "_updateLocation",
    value: function _updateLocation(firstPage) {
      var currentScale = this._currentScale;
      var currentScaleValue = this._currentScaleValue;
      var normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue;
      var pageNumber = firstPage.id;
      var pdfOpenParams = "#page=" + pageNumber;
      pdfOpenParams += "&zoom=" + normalizedScaleValue;
      var currentPageView = this._pages[pageNumber - 1];
      var container = this.container;
      var topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
      var intLeft = Math.round(topLeft[0]);
      var intTop = Math.round(topLeft[1]);
      pdfOpenParams += "," + intLeft + "," + intTop;
      this._location = {
        pageNumber: pageNumber,
        scale: normalizedScaleValue,
        top: intTop,
        left: intLeft,
        rotation: this._pagesRotation,
        pdfOpenParams: pdfOpenParams
      };
    }
  }, {
    key: "_updateHelper",
    value: function _updateHelper(visiblePages) {
      throw new Error("Not implemented: _updateHelper");
    }
  }, {
    key: "update",
    value: function update() {
      var visible = this._getVisiblePages();

      var visiblePages = visible.views,
          numVisiblePages = visiblePages.length;

      if (numVisiblePages === 0) {
        return;
      }

      var newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);

      this._buffer.resize(newCacheSize, visiblePages);

      this.renderingQueue.renderHighestPriority(visible);

      this._updateHelper(visiblePages);

      this._updateLocation(visible.first);

      this.eventBus.dispatch("updateviewarea", {
        source: this,
        location: this._location
      });
    }
  }, {
    key: "containsElement",
    value: function containsElement(element) {
      return this.container.contains(element);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.container.focus();
    }
  }, {
    key: "_isScrollModeHorizontal",
    get: function get() {
      return this.isInPresentationMode ? false : this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL;
    }
  }, {
    key: "_isContainerRtl",
    get: function get() {
      return getComputedStyle(this.container).direction === "rtl";
    }
  }, {
    key: "isInPresentationMode",
    get: function get() {
      return this.presentationModeState === _ui_utils.PresentationModeState.FULLSCREEN;
    }
  }, {
    key: "isChangingPresentationMode",
    get: function get() {
      return this.presentationModeState === _ui_utils.PresentationModeState.CHANGING;
    }
  }, {
    key: "isHorizontalScrollbarEnabled",
    get: function get() {
      return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
    }
  }, {
    key: "isVerticalScrollbarEnabled",
    get: function get() {
      return this.isInPresentationMode ? false : this.container.scrollHeight > this.container.clientHeight;
    }
  }, {
    key: "_getCurrentVisiblePage",
    value: function _getCurrentVisiblePage() {
      if (!this.pagesCount) {
        return {
          views: []
        };
      }

      var pageView = this._pages[this._currentPageNumber - 1];
      var element = pageView.div;
      var view = {
        id: pageView.id,
        x: element.offsetLeft + element.clientLeft,
        y: element.offsetTop + element.clientTop,
        view: pageView
      };
      return {
        first: view,
        last: view,
        views: [view]
      };
    }
  }, {
    key: "_getVisiblePages",
    value: function _getVisiblePages() {
      return (0, _ui_utils.getVisibleElements)({
        scrollEl: this.container,
        views: this._pages,
        sortByVisibility: true,
        horizontal: this._isScrollModeHorizontal,
        rtl: this._isScrollModeHorizontal && this._isContainerRtl
      });
    }
  }, {
    key: "isPageVisible",
    value: function isPageVisible(pageNumber) {
      if (!this.pdfDocument) {
        return false;
      }

      if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
        console.error("".concat(this._name, ".isPageVisible: \"").concat(pageNumber, "\" is not a valid page."));
        return false;
      }

      return this._getVisiblePages().views.some(function (view) {
        return view.id === pageNumber;
      });
    }
  }, {
    key: "isPageCached",
    value: function isPageCached(pageNumber) {
      if (!this.pdfDocument || !this._buffer) {
        return false;
      }

      if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
        console.error("".concat(this._name, ".isPageCached: \"").concat(pageNumber, "\" is not a valid page."));
        return false;
      }

      var pageView = this._pages[pageNumber - 1];

      if (!pageView) {
        return false;
      }

      return this._buffer.has(pageView);
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        if (this._pages[i] && this._pages[i].renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
          this._pages[i].reset();
        }
      }
    }
  }, {
    key: "_cancelRendering",
    value: function _cancelRendering() {
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        if (this._pages[i]) {
          this._pages[i].cancelRendering();
        }
      }
    }
  }, {
    key: "_ensurePdfPageLoaded",
    value: function _ensurePdfPageLoaded(pageView) {
      var _this3 = this;

      if (pageView.pdfPage) {
        return Promise.resolve(pageView.pdfPage);
      }

      if (this._pagesRequests.has(pageView)) {
        return this._pagesRequests.get(pageView);
      }

      var promise = this.pdfDocument.getPage(pageView.id).then(function (pdfPage) {
        if (!pageView.pdfPage) {
          pageView.setPdfPage(pdfPage);
        }

        _this3._pagesRequests["delete"](pageView);

        return pdfPage;
      })["catch"](function (reason) {
        console.error("Unable to get page for page view", reason);

        _this3._pagesRequests["delete"](pageView);
      });

      this._pagesRequests.set(pageView, promise);

      return promise;
    }
  }, {
    key: "forceRendering",
    value: function forceRendering(currentlyVisiblePages) {
      var _this4 = this;

      var visiblePages = currentlyVisiblePages || this._getVisiblePages();

      var scrollAhead = this._isScrollModeHorizontal ? this.scroll.right : this.scroll.down;
      var pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, scrollAhead);

      if (pageView) {
        this._ensurePdfPageLoaded(pageView).then(function () {
          _this4.renderingQueue.renderView(pageView);
        });

        return true;
      }

      return false;
    }
  }, {
    key: "createTextLayerBuilder",
    value: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
      var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var eventBus = arguments.length > 4 ? arguments[4] : undefined;
      return new _text_layer_builder.TextLayerBuilder({
        textLayerDiv: textLayerDiv,
        eventBus: eventBus,
        pageIndex: pageIndex,
        viewport: viewport,
        findController: this.isInPresentationMode ? null : this.findController,
        enhanceTextSelection: this.isInPresentationMode ? false : enhanceTextSelection
      });
    }
  }, {
    key: "createAnnotationLayerBuilder",
    value: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
      var _this$pdfDocument, _this$pdfDocument2;

      var annotationStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var imageResourcesPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var renderInteractiveForms = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var l10n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _ui_utils.NullL10n;
      var enableScripting = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var hasJSActionsPromise = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
      var mouseState = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
      return new _annotation_layer_builder.AnnotationLayerBuilder({
        pageDiv: pageDiv,
        pdfPage: pdfPage,
        annotationStorage: annotationStorage || ((_this$pdfDocument = this.pdfDocument) === null || _this$pdfDocument === void 0 ? void 0 : _this$pdfDocument.annotationStorage),
        imageResourcesPath: imageResourcesPath,
        renderInteractiveForms: renderInteractiveForms,
        linkService: this.linkService,
        downloadManager: this.downloadManager,
        l10n: l10n,
        enableScripting: enableScripting,
        hasJSActionsPromise: hasJSActionsPromise || ((_this$pdfDocument2 = this.pdfDocument) === null || _this$pdfDocument2 === void 0 ? void 0 : _this$pdfDocument2.hasJSActions()),
        mouseState: mouseState || this._mouseState
      });
    }
  }, {
    key: "hasEqualPageSizes",
    get: function get() {
      var firstPageView = this._pages[0];

      for (var i = 1, ii = this._pages.length; i < ii; ++i) {
        var pageView = this._pages[i];

        if (pageView.width !== firstPageView.width || pageView.height !== firstPageView.height) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "getPagesOverview",
    value: function getPagesOverview() {
      var pagesOverview = this._pages.map(function (pageView) {
        var viewport = pageView.pdfPage.getViewport({
          scale: 1
        });
        return {
          width: viewport.width,
          height: viewport.height,
          rotation: viewport.rotation
        };
      });

      if (!this.enablePrintAutoRotate) {
        return pagesOverview;
      }

      return pagesOverview.map(function (size) {
        if ((0, _ui_utils.isPortraitOrientation)(size)) {
          return size;
        }

        return {
          width: size.height,
          height: size.width,
          rotation: (size.rotation + 90) % 360
        };
      });
    }
  }, {
    key: "optionalContentConfigPromise",
    get: function get() {
      if (!this.pdfDocument) {
        return Promise.resolve(null);
      }

      if (!this._optionalContentConfigPromise) {
        return this.pdfDocument.getOptionalContentConfig();
      }

      return this._optionalContentConfigPromise;
    },
    set: function set(promise) {
      if (!(promise instanceof Promise)) {
        throw new Error("Invalid optionalContentConfigPromise: ".concat(promise));
      }

      if (!this.pdfDocument) {
        return;
      }

      if (!this._optionalContentConfigPromise) {
        return;
      }

      this._optionalContentConfigPromise = promise;

      var _iterator = _createForOfIteratorHelper(this._pages),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pageView = _step.value;
          pageView.update(pageView.scale, pageView.rotation, promise);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.update();
      this.eventBus.dispatch("optionalcontentconfigchanged", {
        source: this,
        promise: promise
      });
    }
  }, {
    key: "scrollMode",
    get: function get() {
      return this._scrollMode;
    },
    set: function set(mode) {
      if (this._scrollMode === mode) {
        return;
      }

      if (!(0, _ui_utils.isValidScrollMode)(mode)) {
        throw new Error("Invalid scroll mode: ".concat(mode));
      }

      this._scrollMode = mode;
      this.eventBus.dispatch("scrollmodechanged", {
        source: this,
        mode: mode
      });

      this._updateScrollMode(this._currentPageNumber);
    }
  }, {
    key: "_updateScrollMode",
    value: function _updateScrollMode() {
      var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var scrollMode = this._scrollMode,
          viewer = this.viewer;
      viewer.classList.toggle("scrollHorizontal", scrollMode === _ui_utils.ScrollMode.HORIZONTAL);
      viewer.classList.toggle("scrollWrapped", scrollMode === _ui_utils.ScrollMode.WRAPPED);

      if (!this.pdfDocument || !pageNumber) {
        return;
      }

      if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
        this._setScale(this._currentScaleValue, true);
      }

      this._setCurrentPageNumber(pageNumber, true);

      this.update();
    }
  }, {
    key: "spreadMode",
    get: function get() {
      return this._spreadMode;
    },
    set: function set(mode) {
      if (this._spreadMode === mode) {
        return;
      }

      if (!(0, _ui_utils.isValidSpreadMode)(mode)) {
        throw new Error("Invalid spread mode: ".concat(mode));
      }

      this._spreadMode = mode;
      this.eventBus.dispatch("spreadmodechanged", {
        source: this,
        mode: mode
      });

      this._updateSpreadMode(this._currentPageNumber);
    }
  }, {
    key: "_updateSpreadMode",
    value: function _updateSpreadMode() {
      var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.pdfDocument) {
        return;
      }

      var viewer = this.viewer,
          pages = this._pages;
      viewer.textContent = "";

      if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
        for (var i = 0, iMax = pages.length; i < iMax; ++i) {
          viewer.appendChild(pages[i].div);
        }
      } else {
        var parity = this._spreadMode - 1;
        var spread = null;

        for (var _i = 0, _iMax = pages.length; _i < _iMax; ++_i) {
          if (spread === null) {
            spread = document.createElement("div");
            spread.className = "spread";
            viewer.appendChild(spread);
          } else if (_i % 2 === parity) {
            spread = spread.cloneNode(false);
            viewer.appendChild(spread);
          }

          spread.appendChild(pages[_i].div);
        }
      }

      if (!pageNumber) {
        return;
      }

      if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
        this._setScale(this._currentScaleValue, true);
      }

      this._setCurrentPageNumber(pageNumber, true);

      this.update();
    }
  }, {
    key: "_getPageAdvance",
    value: function _getPageAdvance(currentPageNumber) {
      var previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.isInPresentationMode) {
        return 1;
      }

      switch (this._scrollMode) {
        case _ui_utils.ScrollMode.WRAPPED:
          {
            var _this$_getVisiblePage = this._getVisiblePages(),
                views = _this$_getVisiblePage.views,
                pageLayout = new Map();

            var _iterator2 = _createForOfIteratorHelper(views),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _step2.value,
                    id = _step2$value.id,
                    y = _step2$value.y,
                    percent = _step2$value.percent,
                    widthPercent = _step2$value.widthPercent;

                if (percent === 0 || widthPercent < 100) {
                  continue;
                }

                var yArray = pageLayout.get(y);

                if (!yArray) {
                  pageLayout.set(y, yArray || (yArray = []));
                }

                yArray.push(id);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = _createForOfIteratorHelper(pageLayout.values()),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _yArray = _step3.value;

                var currentIndex = _yArray.indexOf(currentPageNumber);

                if (currentIndex === -1) {
                  continue;
                }

                var numPages = _yArray.length;

                if (numPages === 1) {
                  break;
                }

                if (previous) {
                  for (var i = currentIndex - 1, ii = 0; i >= ii; i--) {
                    var currentId = _yArray[i],
                        expectedId = _yArray[i + 1] - 1;

                    if (currentId < expectedId) {
                      return currentPageNumber - expectedId;
                    }
                  }
                } else {
                  for (var _i2 = currentIndex + 1, _ii = numPages; _i2 < _ii; _i2++) {
                    var _currentId = _yArray[_i2],
                        _expectedId = _yArray[_i2 - 1] + 1;

                    if (_currentId > _expectedId) {
                      return _expectedId - currentPageNumber;
                    }
                  }
                }

                if (previous) {
                  var firstId = _yArray[0];

                  if (firstId < currentPageNumber) {
                    return currentPageNumber - firstId + 1;
                  }
                } else {
                  var lastId = _yArray[numPages - 1];

                  if (lastId > currentPageNumber) {
                    return lastId - currentPageNumber + 1;
                  }
                }

                break;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            break;
          }

        case _ui_utils.ScrollMode.HORIZONTAL:
          {
            break;
          }

        case _ui_utils.ScrollMode.VERTICAL:
          {
            if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
              break;
            }

            var parity = this._spreadMode - 1;

            if (previous && currentPageNumber % 2 !== parity) {
              break;
            } else if (!previous && currentPageNumber % 2 === parity) {
              break;
            }

            var _this$_getVisiblePage2 = this._getVisiblePages(),
                _views = _this$_getVisiblePage2.views,
                _expectedId2 = previous ? currentPageNumber - 1 : currentPageNumber + 1;

            var _iterator4 = _createForOfIteratorHelper(_views),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _step4$value = _step4.value,
                    _id = _step4$value.id,
                    _percent = _step4$value.percent,
                    _widthPercent = _step4$value.widthPercent;

                if (_id !== _expectedId2) {
                  continue;
                }

                if (_percent > 0 && _widthPercent === 100) {
                  return 2;
                }

                break;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            break;
          }
      }

      return 1;
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      var currentPageNumber = this._currentPageNumber,
          pagesCount = this.pagesCount;

      if (currentPageNumber >= pagesCount) {
        return false;
      }

      var advance = this._getPageAdvance(currentPageNumber, false) || 1;
      this.currentPageNumber = Math.min(currentPageNumber + advance, pagesCount);
      return true;
    }
  }, {
    key: "previousPage",
    value: function previousPage() {
      var currentPageNumber = this._currentPageNumber;

      if (currentPageNumber <= 1) {
        return false;
      }

      var advance = this._getPageAdvance(currentPageNumber, true) || 1;
      this.currentPageNumber = Math.max(currentPageNumber - advance, 1);
      return true;
    }
  }, {
    key: "initializeScriptingEvents",
    value: function () {
      var _initializeScriptingEvents = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this5 = this;

        var eventBus, pageOpenPendingSet, scriptingEvents, dispatchPageClose, dispatchPageOpen;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.enableScripting || this._pageOpenPendingSet)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                eventBus = this.eventBus, pageOpenPendingSet = this._pageOpenPendingSet = new Set(), scriptingEvents = this._scriptingEvents || (this._scriptingEvents = Object.create(null));

                dispatchPageClose = function dispatchPageClose(pageNumber) {
                  if (pageOpenPendingSet.has(pageNumber)) {
                    return;
                  }

                  eventBus.dispatch("pageclose", {
                    source: _this5,
                    pageNumber: pageNumber
                  });
                };

                dispatchPageOpen = function dispatchPageOpen(pageNumber) {
                  var pageView = _this5._pages[pageNumber - 1];

                  if ((pageView === null || pageView === void 0 ? void 0 : pageView.renderingState) === _pdf_rendering_queue.RenderingStates.FINISHED) {
                    var _pageView$pdfPage;

                    pageOpenPendingSet["delete"](pageNumber);
                    eventBus.dispatch("pageopen", {
                      source: _this5,
                      pageNumber: pageNumber,
                      actionsPromise: (_pageView$pdfPage = pageView.pdfPage) === null || _pageView$pdfPage === void 0 ? void 0 : _pageView$pdfPage.getJSActions()
                    });
                  } else {
                    pageOpenPendingSet.add(pageNumber);
                  }
                };

                scriptingEvents.onPageChanging = function (_ref4) {
                  var pageNumber = _ref4.pageNumber,
                      previous = _ref4.previous;

                  if (pageNumber === previous) {
                    return;
                  }

                  dispatchPageClose(previous);
                  dispatchPageOpen(pageNumber);
                };

                eventBus._on("pagechanging", scriptingEvents.onPageChanging);

                scriptingEvents.onPageRendered = function (_ref5) {
                  var pageNumber = _ref5.pageNumber;

                  if (!pageOpenPendingSet.has(pageNumber)) {
                    return;
                  }

                  if (pageNumber !== _this5._currentPageNumber) {
                    return;
                  }

                  dispatchPageOpen(pageNumber);
                };

                eventBus._on("pagerendered", scriptingEvents.onPageRendered);

                scriptingEvents.onPagesDestroy = function () {
                  dispatchPageClose(_this5._currentPageNumber);
                };

                eventBus._on("pagesdestroy", scriptingEvents.onPagesDestroy);

                dispatchPageOpen(this._currentPageNumber);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initializeScriptingEvents() {
        return _initializeScriptingEvents.apply(this, arguments);
      }

      return initializeScriptingEvents;
    }()
  }, {
    key: "_resetScriptingEvents",
    value: function _resetScriptingEvents() {
      if (!this.enableScripting || !this._pageOpenPendingSet) {
        return;
      }

      var eventBus = this.eventBus,
          scriptingEvents = this._scriptingEvents;

      eventBus._off("pagechanging", scriptingEvents.onPageChanging);

      scriptingEvents.onPageChanging = null;

      eventBus._off("pagerendered", scriptingEvents.onPageRendered);

      scriptingEvents.onPageRendered = null;

      eventBus._off("pagesdestroy", scriptingEvents.onPagesDestroy);

      scriptingEvents.onPagesDestroy = null;
      this._pageOpenPendingSet = null;
    }
  }]);

  return BaseViewer;
}();

exports.BaseViewer = BaseViewer;