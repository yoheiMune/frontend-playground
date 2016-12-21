'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// babel -o spread_operator.bundle.js spread_operator.js
// node spread_operator.js
// node spread_operator.bundle.js

// 参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator


// 関数呼び出しに対して
function func1(a, b, c) {
    console.log('func1', a, b, c);
}
var d1 = [1, 2, 3];
func1.apply(undefined, d1);

// 配列について
var d2 = [0].concat(d1, [4, 5]);
console.log(d2);

// 分割代入にも使える
var a = 1;
var b = 2;
var d3 = [3, 4, 5];

console.log(d3);

// 関数の引数に配列を渡す例
function func2(a, b, c) {
    console.log('func2: ', a, b, c);
}
var d4 = [1, 2, 3];
// 今までは
func2.apply(null, d4);
// これからは
func2.apply(undefined, d4);

// 配列の結合
var d5 = [2, 3];
var d6 = [1].concat(d5, [4, 5]);
console.log('d6:', d6);

// babel --presets stage-1 -o spread_operator.bundle.js spread_operator.js
// node spread_operator.bundle.js 
// https://babeljs.io/docs/plugins/preset-stage-1/
// https://github.com/sebmarkbage/ecmascript-rest-spread

/**/
// Object
var person = {
    firstName: 'Yohei',
    lastName: 'Munesada',
    age: 31,
    city: 'yokohama',
    favs: ['Ramen', 'Tennis']
};
var firstName = person.firstName;
var lastName = person.lastName;

var others = _objectWithoutProperties(person, ['firstName', 'lastName']);

console.log('firstName:', firstName);
console.log('lastName:', lastName);
console.log('others:', others);

var person2 = _extends({
    firstName: 'Yuyu'
}, others);
console.log('person2:', person2);
