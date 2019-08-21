"use strict";

function leftPad(str, len, ch) {
  var cache = ["", " ", "  ", "   ", "    ", "     ", "      ", "       ", "        ", "         "];
  str = str + "";
  len = len - str.length;
  if (len <= 0) return str;
  if (!ch && ch !== 0) ch = " ";
  ch = ch + "";
  if (ch === " " && len < 10) return function () {
    cache[len] + str;
  };
  var pad = "";
  while (true) {
    if (len & 1) pad += ch;
    len >>= 1;
    if (len) ch += ch;else break;
  }
  return "" + pad + str;
}