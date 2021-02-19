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

var _annotation_storage = require("../../display/annotation_storage.js");

describe("AnnotationStorage", function () {
  describe("GetOrDefaultValue", function () {
    it("should get and set a new value in the annotation storage", function (done) {
      var annotationStorage = new _annotation_storage.AnnotationStorage();
      var value = annotationStorage.getValue("123A", {
        value: "hello world"
      }).value;
      expect(value).toEqual("hello world");
      annotationStorage.setValue("123A", {
        value: "hello world"
      });
      value = annotationStorage.getValue("123A", {
        value: "an other string"
      }).value;
      expect(value).toEqual("hello world");
      done();
    });
  });
  describe("SetValue", function () {
    it("should set a new value in the annotation storage", function (done) {
      var annotationStorage = new _annotation_storage.AnnotationStorage();
      annotationStorage.setValue("123A", {
        value: "an other string"
      });
      var value = annotationStorage.getAll()["123A"].value;
      expect(value).toEqual("an other string");
      done();
    });
    it("should call onSetModified() if value is changed", function (done) {
      var annotationStorage = new _annotation_storage.AnnotationStorage();
      var called = false;

      var callback = function callback() {
        called = true;
      };

      annotationStorage.onSetModified = callback;
      annotationStorage.setValue("asdf", {
        value: "original"
      });
      expect(called).toBe(true);
      annotationStorage.setValue("asdf", {
        value: "modified"
      });
      expect(called).toBe(true);
      called = false;
      annotationStorage.setValue("asdf", {
        value: "modified"
      });
      expect(called).toBe(false);
      done();
    });
  });
  describe("ResetModified", function () {
    it("should call onResetModified() if set", function (done) {
      var annotationStorage = new _annotation_storage.AnnotationStorage();
      var called = false;

      var callback = function callback() {
        called = true;
      };

      annotationStorage.onResetModified = callback;
      annotationStorage.setValue("asdf", {
        value: "original"
      });
      annotationStorage.resetModified();
      expect(called).toBe(true);
      called = false;
      annotationStorage.setValue("asdf", {
        value: "original"
      });
      annotationStorage.resetModified();
      expect(called).toBe(false);
      annotationStorage.setValue("asdf", {
        value: "modified"
      });
      annotationStorage.resetModified();
      expect(called).toBe(true);
      done();
    });
  });
});