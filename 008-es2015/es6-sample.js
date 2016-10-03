
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
var nums1 = numbers.map(n => n + 1);
console.log(nums1);
var nums2 = numbers.map((n, i) => n + i);
console.log(nums2);
// body
var nums3 = numbers.map((n, i) => {
    return n + i;
});
console.log(nums3);
numbers.map((n, i) => {
    console.log(i, n);
});
// who is this.
// 以下はコンパイルせずに使う
console.log('----------');
function Foo() {
    this.bar = function (cb) {
        cb();
    };
    this.bar(function () {
        console.log(this);
    });
    this.bar(() => {
        console.log(this);
    });
}
new Foo();


// Class
//============================================
console.log('-------------------');
class Shape {
    constructor(name) {
        this.name = name || "unknown";
    }
    sayName() {
        console.log("Shape: " + this.name);
    }
}
var shape = new Shape();
console.log(shape.name);

class Polygon extends Shape {
    constructor(height, width) {
        super("polygon");
        this.height = height;
        this.width = width;
    }
    sayName() {
        super.sayName();
        console.log('Polygon: ' + this.name);
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}
var polygon = new Polygon(100, 20);
console.log(polygon.name, polygon.height, polygon.width);
console.log(polygon.area);
polygon.sayName();

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
var point1 = new Point(1, 1);
var point2 = new Point(10, 10);
var distance = Point.distance(point1, point2);
console.log(distance);


// Enchanced Object Literals
//===================================================
console.log('-------------------');
function sayHello() {console.log('Hello')};
var obj = {
    __proto__: {
        isGood: () => true
    },
    sayHello,
    toString() {
        return "d" + super.toString();
    },
    ['prop_' + (() => 42)()]: 42
};
console.log(obj);
console.log(obj.isGood());
obj.sayHello();
console.log(obj.toString());
console.log(obj["prop_42"]);


// Template Strings
//===================================================
var name = "Yohei";
var age = 30;
var url = `http://www.yoheim.net/?name=${name}&age=${age}`;
console.log(url);
var sql = `
    SELECT
        *
    FROM
        user
    WHERE
        age >= 30
`;
console.log(sql);


// Destructuring Assignment.
// => これ単体でブログでも良さそう。
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//===================================================
var a, b, rest;
[a, b] = [1, 2];
console.log(a, b);
[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);
[a=10, b=20] = [1];
console.log(a, b);
({a, b} = {a:"a", b:"b"});
console.log(a, b);
var {a=10, b=5} = {a: 3};
console.log(a, b);
a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b);
function getValues() {
    return [1, 2];
}
[a, b] = getValues();
console.log(a, b);
// const {sayHi, sayGoodby} = require('./mymodule.js');
// sayHi();
// sayGoodby();
import {foo, bar} from "./mymoduleES6.js"
print(foo());
print(bar());
var people = [
    {
        id: 1,
        name: "Yohei",
        age: 30
    },
    {
        id: 2,
        name: "Mizuno",
        age: 32
    }
];
for (var {id, name, age} of people) {
    console.log(id, name, age);
}
function userId({id}) {
    return id;
}
function whois({name, age}) {
    return `I'm ${name}, ${age} years old.`;
}
function whois2({name="Mizuno", age=32} = {}) {
    return `[v2] I'm ${name}, ${age} years old.`;
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



































