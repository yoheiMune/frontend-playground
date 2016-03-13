(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var calc = require('./sub1');
var num = 10;
var result = calc(num);
console.log(result);
},{"./sub1":2}],2:[function(require,module,exports){
(function (__filename){
var calculator = require('./subsub1')
module.exports = function (number) {
    console.log('__filename', __filename)
    return calculator.add(number, number);
}
}).call(this,"/sub1.js")
},{"./subsub1":3}],3:[function(require,module,exports){
module.exports = {
    add: function (val1, val2) {
        return val1 + val2;
    }
}
},{}]},{},[1]);
