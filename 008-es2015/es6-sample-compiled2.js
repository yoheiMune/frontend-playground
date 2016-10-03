(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _obj;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mymoduleES = require('./mymoduleES6.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ref
// https://github.com/lukehoban/es6features#readme

// babelについて
// http://www.yoheim.net/blog.php?q=20160803
// babel -o es6-sample-compiled.js --presets es2015 es6-sample.js

// importの扱いについて
// TODO

// Arrow
//================================================
// one-line
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
var nums1 = numbers.map(function (n) {
    return n + 1;
});
console.log(nums1);
var nums2 = numbers.map(function (n, i) {
    return n + i;
});
console.log(nums2);
// body
var nums3 = numbers.map(function (n, i) {
    return n + i;
});
console.log(nums3);
numbers.map(function (n, i) {
    console.log(i, n);
});
// who is this.
// 以下はコンパイルせずに使う
console.log('----------');
function Foo() {
    var _this = this;

    this.bar = function (cb) {
        cb();
    };
    this.bar(function () {
        console.log(this);
    });
    this.bar(function () {
        console.log(_this);
    });
}
new Foo();

// Class
//============================================
console.log('-------------------');

var Shape = function () {
    function Shape(name) {
        _classCallCheck(this, Shape);

        this.name = name || "unknown";
    }

    _createClass(Shape, [{
        key: 'sayName',
        value: function sayName() {
            console.log("Shape: " + this.name);
        }
    }]);

    return Shape;
}();

var shape = new Shape();
console.log(shape.name);

var Polygon = function (_Shape) {
    _inherits(Polygon, _Shape);

    function Polygon(height, width) {
        _classCallCheck(this, Polygon);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Polygon).call(this, "polygon"));

        _this2.height = height;
        _this2.width = width;
        return _this2;
    }

    _createClass(Polygon, [{
        key: 'sayName',
        value: function sayName() {
            _get(Object.getPrototypeOf(Polygon.prototype), 'sayName', this).call(this);
            console.log('Polygon: ' + this.name);
        }
    }, {
        key: 'calcArea',
        value: function calcArea() {
            return this.height * this.width;
        }
    }, {
        key: 'area',
        get: function get() {
            return this.calcArea();
        }
    }]);

    return Polygon;
}(Shape);

var polygon = new Polygon(100, 20);
console.log(polygon.name, polygon.height, polygon.width);
console.log(polygon.area);
polygon.sayName();

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, null, [{
        key: 'distance',
        value: function distance(a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    }]);

    return Point;
}();

var point1 = new Point(1, 1);
var point2 = new Point(10, 10);
var distance = Point.distance(point1, point2);
console.log(distance);

// Enchanced Object Literals
//===================================================
console.log('-------------------');
function sayHello() {
    console.log('Hello');
};
var obj = _obj = _defineProperty({
    __proto__: {
        isGood: function isGood() {
            return true;
        }
    },
    sayHello: sayHello,
    toString: function toString() {
        return "d" + _get(Object.getPrototypeOf(_obj), 'toString', this).call(this);
    }
}, 'prop_' + function () {
    return 42;
}(), 42);
console.log(obj);
console.log(obj.isGood());
obj.sayHello();
console.log(obj.toString());
console.log(obj["prop_42"]);

// Template Strings
//===================================================
var name = "Yohei";
var age = 30;
var url = 'http://www.yoheim.net/?name=' + name + '&age=' + age;
console.log(url);
var sql = '\n    SELECT\n        *\n    FROM\n        user\n    WHERE\n        age >= 30\n';
console.log(sql);

// Destructuring Assignment.
// => これ単体でブログでも良さそう。
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//===================================================
var a, b, rest;
a = 1;
b = 2;

console.log(a, b);
a = 1;
b = 2;
rest = [3, 4, 5];

console.log(a, b, rest);
var _ref = [1];
var _ref$ = _ref[0];
a = _ref$ === undefined ? 10 : _ref$;
var _ref$2 = _ref[1];
b = _ref$2 === undefined ? 20 : _ref$2;

console.log(a, b);
var _a$b = { a: "a", b: "b" };
a = _a$b.a;
b = _a$b.b;

console.log(a, b);
var _a = { a: 3 };
var _a$a = _a.a;
var a = _a$a === undefined ? 10 : _a$a;
var _a$b2 = _a.b;
var b = _a$b2 === undefined ? 5 : _a$b2;

console.log(a, b);
a = 10, b = 20;
var _ref2 = [b, a];
a = _ref2[0];
b = _ref2[1];

console.log(a, b);
function getValues() {
    return [1, 2];
}

var _getValues = getValues();

var _getValues2 = _slicedToArray(_getValues, 2);

a = _getValues2[0];
b = _getValues2[1];

console.log(a, b);
// const {sayHi, sayGoodby} = require('./mymodule.js');
// sayHi();
// sayGoodby();

print((0, _mymoduleES.foo)());
print((0, _mymoduleES.bar)());
var people = [{
    id: 1,
    name: "Yohei",
    age: 30
}, {
    id: 2,
    name: "Mizuno",
    age: 32
}];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = people[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _step.value;
        var id = _step$value.id;
        var name = _step$value.name;
        var age = _step$value.age;

        console.log(id, name, age);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function userId(_ref3) {
    var id = _ref3.id;

    return id;
}
function whois(_ref4) {
    var name = _ref4.name;
    var age = _ref4.age;

    return 'I\'m ' + name + ', ' + age + ' years old.';
}
function whois2() {
    var _ref5 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref5$name = _ref5.name;
    var name = _ref5$name === undefined ? "Mizuno" : _ref5$name;
    var _ref5$age = _ref5.age;
    var age = _ref5$age === undefined ? 32 : _ref5$age;

    return '[v2] I\'m ' + name + ', ' + age + ' years old.';
}
var user = {
    id: 77,
    name: "Yohei",
    age: 30
};
console.log(userId(user));
console.log(whois(user));
console.log(whois2());

// Default + Rest + Spread
//===================================================

// TODO ここから

},{"./mymoduleES6.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var foo = exports.foo = function foo() {
  return "foo";
};
var bar = exports.bar = function bar() {
  return "bar";
};

},{}]},{},[1]);
