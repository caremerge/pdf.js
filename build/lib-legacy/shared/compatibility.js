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

var _is_node = require("./is_node.js");

if (typeof globalThis === "undefined" || !globalThis._pdfjsCompatibilityChecked) {
  if (typeof globalThis === "undefined" || globalThis.Math !== Math) {
    globalThis = require("core-js/es/global-this");
  }

  globalThis._pdfjsCompatibilityChecked = true;

  (function checkNodeBtoa() {
    if (globalThis.btoa || !_is_node.isNodeJS) {
      return;
    }

    globalThis.btoa = function (chars) {
      return Buffer.from(chars, "binary").toString("base64");
    };
  })();

  (function checkNodeAtob() {
    if (globalThis.atob || !_is_node.isNodeJS) {
      return;
    }

    globalThis.atob = function (input) {
      return Buffer.from(input, "base64").toString("binary");
    };
  })();

  (function checkObjectFromEntries() {
    if (Object.fromEntries) {
      return;
    }

    require("core-js/es/object/from-entries.js");
  })();

  (function checkPromise() {
    if (globalThis.Promise.allSettled) {
      return;
    }

    globalThis.Promise = require("core-js/es/promise/index.js");
  })();

  (function checkURL() {
    globalThis.URL = require("core-js/web/url.js");
  })();

  (function checkReadableStream() {
    var isReadableStreamSupported = false;

    if (typeof ReadableStream !== "undefined") {
      try {
        new ReadableStream({
          start: function start(controller) {
            controller.close();
          }
        });
        isReadableStreamSupported = true;
      } catch (e) {}
    }

    if (isReadableStreamSupported) {
      return;
    }

    globalThis.ReadableStream = require("web-streams-polyfill/dist/ponyfill.js").ReadableStream;
  })();

  (function checkStringPadStart() {
    if (String.prototype.padStart) {
      return;
    }

    require("core-js/es/string/pad-start.js");
  })();

  (function checkStringPadEnd() {
    if (String.prototype.padEnd) {
      return;
    }

    require("core-js/es/string/pad-end.js");
  })();

  (function checkObjectValues() {
    if (Object.values) {
      return;
    }

    Object.values = require("core-js/es/object/values.js");
  })();

  (function checkObjectEntries() {
    if (Object.entries) {
      return;
    }

    Object.entries = require("core-js/es/object/entries.js");
  })();
}