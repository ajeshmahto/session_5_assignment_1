"use strict";
exports.__esModule = true;
var shape_1 = require("./shape");
var Draw = (function () {
    function Draw() {
        var a = shape_1.shape.drawTriangle;
        var b = shape_1.shape.drawSquare;
        a();
        b();
    }
    return Draw;
}());
var d = new Draw();
