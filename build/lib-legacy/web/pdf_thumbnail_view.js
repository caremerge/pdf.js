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
exports.TempImageFactory = exports.PDFThumbnailView = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _ui_utils = require("./ui_utils.js");

var _pdf = require("../pdf");

var _pdf_rendering_queue = require("./pdf_rendering_queue.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MAX_NUM_SCALING_STEPS = 3;
var THUMBNAIL_CANVAS_BORDER_WIDTH = 1;
var THUMBNAIL_WIDTH = 98;

var TempImageFactory = function TempImageFactoryClosure() {
  var tempCanvasCache = null;
  return {
    getCanvas: function getCanvas(width, height) {
      var tempCanvas = tempCanvasCache;

      if (!tempCanvas) {
        tempCanvas = document.createElement("canvas");
        tempCanvasCache = tempCanvas;
      }

      tempCanvas.width = width;
      tempCanvas.height = height;
      tempCanvas.mozOpaque = true;
      var ctx = tempCanvas.getContext("2d", {
        alpha: false
      });
      ctx.save();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
      return tempCanvas;
    },
    destroyCanvas: function destroyCanvas() {
      var tempCanvas = tempCanvasCache;

      if (tempCanvas) {
        tempCanvas.width = 0;
        tempCanvas.height = 0;
      }

      tempCanvasCache = null;
    }
  };
}();

exports.TempImageFactory = TempImageFactory;

var PDFThumbnailView = /*#__PURE__*/function () {
  function PDFThumbnailView(_ref) {
    var container = _ref.container,
        id = _ref.id,
        defaultViewport = _ref.defaultViewport,
        optionalContentConfigPromise = _ref.optionalContentConfigPromise,
        linkService = _ref.linkService,
        renderingQueue = _ref.renderingQueue,
        checkSetImageDisabled = _ref.checkSetImageDisabled,
        _ref$disableCanvasToI = _ref.disableCanvasToImageConversion,
        disableCanvasToImageConversion = _ref$disableCanvasToI === void 0 ? false : _ref$disableCanvasToI,
        _ref$l10n = _ref.l10n,
        l10n = _ref$l10n === void 0 ? _ui_utils.NullL10n : _ref$l10n;

    _classCallCheck(this, PDFThumbnailView);

    this.id = id;
    this.renderingId = "thumbnail" + id;
    this.pageLabel = null;
    this.pdfPage = null;
    this.rotation = 0;
    this.viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
    this._optionalContentConfigPromise = optionalContentConfigPromise || null;
    this.linkService = linkService;
    this.renderingQueue = renderingQueue;
    this.renderTask = null;
    this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
    this.resume = null;

    this._checkSetImageDisabled = checkSetImageDisabled || function () {
      return false;
    };

    this.disableCanvasToImageConversion = disableCanvasToImageConversion;
    this.pageWidth = this.viewport.width;
    this.pageHeight = this.viewport.height;
    this.pageRatio = this.pageWidth / this.pageHeight;
    this.canvasWidth = THUMBNAIL_WIDTH;
    this.canvasHeight = this.canvasWidth / this.pageRatio | 0;
    this.scale = this.canvasWidth / this.pageWidth;
    this.l10n = l10n;
    var anchor = document.createElement("a");
    anchor.href = linkService.getAnchorUrl("#page=" + id);

    this._thumbPageTitle.then(function (msg) {
      anchor.title = msg;
    });

    anchor.onclick = function () {
      linkService.goToPage(id);
      return false;
    };

    this.anchor = anchor;
    var div = document.createElement("div");
    div.className = "thumbnail";
    div.setAttribute("data-page-number", this.id);
    this.div = div;
    var ring = document.createElement("div");
    ring.className = "thumbnailSelectionRing";
    var borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
    ring.style.width = this.canvasWidth + borderAdjustment + "px";
    ring.style.height = this.canvasHeight + borderAdjustment + "px";
    this.ring = ring;
    div.appendChild(ring);
    anchor.appendChild(div);
    container.appendChild(anchor);
  }

  _createClass(PDFThumbnailView, [{
    key: "setPdfPage",
    value: function setPdfPage(pdfPage) {
      this.pdfPage = pdfPage;
      this.pdfPageRotate = pdfPage.rotate;
      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = pdfPage.getViewport({
        scale: 1,
        rotation: totalRotation
      });
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cancelRendering();
      this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
      this.pageWidth = this.viewport.width;
      this.pageHeight = this.viewport.height;
      this.pageRatio = this.pageWidth / this.pageHeight;
      this.canvasHeight = this.canvasWidth / this.pageRatio | 0;
      this.scale = this.canvasWidth / this.pageWidth;
      this.div.removeAttribute("data-loaded");
      var ring = this.ring;
      var childNodes = ring.childNodes;

      for (var i = childNodes.length - 1; i >= 0; i--) {
        ring.removeChild(childNodes[i]);
      }

      var borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
      ring.style.width = this.canvasWidth + borderAdjustment + "px";
      ring.style.height = this.canvasHeight + borderAdjustment + "px";

      if (this.canvas) {
        this.canvas.width = 0;
        this.canvas.height = 0;
        delete this.canvas;
      }

      if (this.image) {
        this.image.removeAttribute("src");
        delete this.image;
      }
    }
  }, {
    key: "update",
    value: function update(rotation) {
      if (typeof rotation !== "undefined") {
        this.rotation = rotation;
      }

      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = this.viewport.clone({
        scale: 1,
        rotation: totalRotation
      });
      this.reset();
    }
  }, {
    key: "cancelRendering",
    value: function cancelRendering() {
      if (this.renderTask) {
        this.renderTask.cancel();
        this.renderTask = null;
      }

      this.resume = null;
    }
  }, {
    key: "_getPageDrawContext",
    value: function _getPageDrawContext() {
      var canvas = document.createElement("canvas");
      this.canvas = canvas;
      canvas.mozOpaque = true;
      var ctx = canvas.getContext("2d", {
        alpha: false
      });
      var outputScale = (0, _ui_utils.getOutputScale)(ctx);
      canvas.width = this.canvasWidth * outputScale.sx | 0;
      canvas.height = this.canvasHeight * outputScale.sy | 0;
      canvas.style.width = this.canvasWidth + "px";
      canvas.style.height = this.canvasHeight + "px";
      var transform = outputScale.scaled ? [outputScale.sx, 0, 0, outputScale.sy, 0, 0] : null;
      return [ctx, transform];
    }
  }, {
    key: "_convertCanvasToImage",
    value: function _convertCanvasToImage() {
      var _this = this;

      if (!this.canvas) {
        return;
      }

      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
        return;
      }

      var className = "thumbnailImage";

      if (this.disableCanvasToImageConversion) {
        this.canvas.className = className;

        this._thumbPageCanvas.then(function (msg) {
          _this.canvas.setAttribute("aria-label", msg);
        });

        this.div.setAttribute("data-loaded", true);
        this.ring.appendChild(this.canvas);
        return;
      }

      var image = document.createElement("img");
      image.className = className;

      this._thumbPageCanvas.then(function (msg) {
        image.setAttribute("aria-label", msg);
      });

      image.style.width = this.canvasWidth + "px";
      image.style.height = this.canvasHeight + "px";
      image.src = this.canvas.toDataURL();
      this.image = image;
      this.div.setAttribute("data-loaded", true);
      this.ring.appendChild(image);
      this.canvas.width = 0;
      this.canvas.height = 0;
      delete this.canvas;
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
        console.error("Must be in new state before drawing");
        return Promise.resolve(undefined);
      }

      var pdfPage = this.pdfPage;

      if (!pdfPage) {
        this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
        return Promise.reject(new Error("pdfPage is not loaded"));
      }

      this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;

      var finishRenderTask = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var error,
              _args = arguments;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  error = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;

                  if (renderTask === _this2.renderTask) {
                    _this2.renderTask = null;
                  }

                  if (!(error instanceof _pdf.RenderingCancelledException)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return");

                case 4:
                  _this2.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;

                  _this2._convertCanvasToImage();

                  if (!error) {
                    _context.next = 8;
                    break;
                  }

                  throw error;

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function finishRenderTask() {
          return _ref2.apply(this, arguments);
        };
      }();

      var _this$_getPageDrawCon = this._getPageDrawContext(),
          _this$_getPageDrawCon2 = _slicedToArray(_this$_getPageDrawCon, 2),
          ctx = _this$_getPageDrawCon2[0],
          transform = _this$_getPageDrawCon2[1];

      var drawViewport = this.viewport.clone({
        scale: this.scale
      });

      var renderContinueCallback = function renderContinueCallback(cont) {
        if (!_this2.renderingQueue.isHighestPriority(_this2)) {
          _this2.renderingState = _pdf_rendering_queue.RenderingStates.PAUSED;

          _this2.resume = function () {
            _this2.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
            cont();
          };

          return;
        }

        cont();
      };

      var renderContext = {
        canvasContext: ctx,
        transform: transform,
        viewport: drawViewport,
        optionalContentConfigPromise: this._optionalContentConfigPromise
      };
      var renderTask = this.renderTask = pdfPage.render(renderContext);
      renderTask.onContinue = renderContinueCallback;
      var resultPromise = renderTask.promise.then(function () {
        finishRenderTask(null);
      }, function (error) {
        finishRenderTask(error);
      });
      resultPromise["finally"](function () {
        var _this2$pdfPage;

        var pageCached = _this2.linkService.isPageCached(_this2.id);

        if (pageCached) {
          return;
        }

        (_this2$pdfPage = _this2.pdfPage) === null || _this2$pdfPage === void 0 ? void 0 : _this2$pdfPage.cleanup();
      });
      return resultPromise;
    }
  }, {
    key: "setImage",
    value: function setImage(pageView) {
      if (this._checkSetImageDisabled()) {
        return;
      }

      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
        return;
      }

      var img = pageView.canvas;

      if (!img) {
        return;
      }

      if (!this.pdfPage) {
        this.setPdfPage(pageView.pdfPage);
      }

      this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;

      var _this$_getPageDrawCon3 = this._getPageDrawContext(),
          _this$_getPageDrawCon4 = _slicedToArray(_this$_getPageDrawCon3, 1),
          ctx = _this$_getPageDrawCon4[0];

      var canvas = ctx.canvas;

      if (img.width <= 2 * canvas.width) {
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

        this._convertCanvasToImage();

        return;
      }

      var reducedWidth = canvas.width << MAX_NUM_SCALING_STEPS;
      var reducedHeight = canvas.height << MAX_NUM_SCALING_STEPS;
      var reducedImage = TempImageFactory.getCanvas(reducedWidth, reducedHeight);
      var reducedImageCtx = reducedImage.getContext("2d");

      while (reducedWidth > img.width || reducedHeight > img.height) {
        reducedWidth >>= 1;
        reducedHeight >>= 1;
      }

      reducedImageCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, reducedWidth, reducedHeight);

      while (reducedWidth > 2 * canvas.width) {
        reducedImageCtx.drawImage(reducedImage, 0, 0, reducedWidth, reducedHeight, 0, 0, reducedWidth >> 1, reducedHeight >> 1);
        reducedWidth >>= 1;
        reducedHeight >>= 1;
      }

      ctx.drawImage(reducedImage, 0, 0, reducedWidth, reducedHeight, 0, 0, canvas.width, canvas.height);

      this._convertCanvasToImage();
    }
  }, {
    key: "_thumbPageTitle",
    get: function get() {
      var _this$pageLabel;

      return this.l10n.get("thumb_page_title", {
        page: (_this$pageLabel = this.pageLabel) !== null && _this$pageLabel !== void 0 ? _this$pageLabel : this.id
      }, "Page {{page}}");
    }
  }, {
    key: "_thumbPageCanvas",
    get: function get() {
      var _this$pageLabel2;

      return this.l10n.get("thumb_page_canvas", {
        page: (_this$pageLabel2 = this.pageLabel) !== null && _this$pageLabel2 !== void 0 ? _this$pageLabel2 : this.id
      }, "Thumbnail of Page {{page}}");
    }
  }, {
    key: "setPageLabel",
    value: function setPageLabel(label) {
      var _this3 = this;

      this.pageLabel = typeof label === "string" ? label : null;

      this._thumbPageTitle.then(function (msg) {
        _this3.anchor.title = msg;
      });

      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
        return;
      }

      this._thumbPageCanvas.then(function (msg) {
        if (_this3.image) {
          _this3.image.setAttribute("aria-label", msg);
        } else if (_this3.disableCanvasToImageConversion && _this3.canvas) {
          _this3.canvas.setAttribute("aria-label", msg);
        }
      });
    }
  }]);

  return PDFThumbnailView;
}();

exports.PDFThumbnailView = PDFThumbnailView;