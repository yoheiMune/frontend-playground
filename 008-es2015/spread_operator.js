// babel -o spread_operator.bundle.js spread_operator.js
// node spread_operator.js
// node spread_operator.bundle.js

// 参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator


// 関数呼び出しに対して
function func1(a, b, c) {
    console.log('func1', a, b, c);
}
let d1 = [1, 2, 3];
func1(...d1);


// 配列について
let d2 = [0, ...d1, 4, 5];
console.log(d2);


// 分割代入にも使える
let [a, b, ...d3] = [1, 2, 3, 4, 5];
console.log(d3);


// 関数の引数に配列を渡す例
function func2(a, b, c) {
    console.log('func2: ', a, b, c);
}
let d4 = [1, 2, 3];
// 今までは
func2.apply(null, d4);
// これからは
func2(...d4);


// 配列の結合
let d5 = [2, 3];
let d6 = [1, ...d5, 4, 5];
console.log('d6:', d6);


// babel --presets stage-1 -o spread_operator.bundle.js spread_operator.js
// node spread_operator.bundle.js 
// https://babeljs.io/docs/plugins/preset-stage-1/
// https://github.com/sebmarkbage/ecmascript-rest-spread

/**/
// Object
let person = {
    firstName : 'Yohei',
    lastName  : 'Munesada',
    age       : 31,
    city      : 'yokohama',
    favs      : ['Ramen', 'Tennis']
};
const {
    firstName,
    lastName,
    ...others
} = person;
console.log('firstName:', firstName);
console.log('lastName:', lastName);
console.log('others:', others);

let person2 = {
    firstName : 'Yuyu',
    ...others
};
console.log('person2:', person2);



/**
$ node spread_operator.bundle.js 
func1 1 2 3
[ 0, 1, 2, 3, 4, 5 ]
[ 3, 4, 5 ]
func2:  1 2 3
func2:  1 2 3
d6: [ 1, 2, 3, 4, 5 ]
firstName: Yohei
lastName: Munesada
others: { age: 31, city: 'yokohama', favs: [ 'Ramen', 'Tennis' ] }
person2: { firstName: 'Yuyu',
  age: 31,
  city: 'yokohama',
  favs: [ 'Ramen', 'Tennis' ] }
*/