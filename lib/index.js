"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var showNumber = function showNumber(number) {
  if (typeof number === "number") {
    return number;
  } else {
    var result = "This is not a number";
    return result;
  }
};

exports.showNumber = showNumber;