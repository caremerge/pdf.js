import { getDocument } from "pdfjs-dist";
var MainTest = /** @class */ (function () {
    function MainTest(file) {
        this.file = file;
    }
    MainTest.prototype.loadPdf = function () {
        this.task = getDocument("file://" + this.file);
        return this.task.promise;
    };
    return MainTest;
}());
// This is actually never called, as the test only consists in compiling the file.
// The compilation will crawl through all files and make sure that the types are consistent.
var mt = new MainTest("../pdfs/basicapi.pdf");
mt.loadPdf().then(function () {
    console.log("loaded");
});
//# sourceMappingURL=main.js.map