/*
    Array functions.

    References:
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/


// Add to the end of an array.
var fruits = [ 'orange', 'apple' ]
fruits.push('banana')
console.log(fruits) // [ 'orange', 'apple', 'banana' ]

// Add to the front of an array.
var fruits = [ 'orange', 'apple' ]
fruits.unshift('banana')
console.log(fruits) // [ 'banana', 'orange', 'apple' ]


// Remove from the end of an array.
var fruits = [ 'orange', 'apple' ]
var fruit = fruits.pop() // 'apple'
console.log(fruits) // [ 'orange' ]

// Remove from the front of an array.
var fruits = [ 'orange', 'apple' ]
var fruit = fruits.shift() // 'orange'
console.log(fruits) // [ 'apple' ]

// Find the index of an item in the array.
var fruits = [ 'orange', 'apple' , 'banana' ]
var index = fruits.indexOf('apple') // 1
console.log(index)

// Remove an item by index.
var fruits = [ 'orange', 'apple' , 'banana' ]
var removedItems = fruits.splice(1, 1)
console.log(fruits) // [ 'orange', 'banana' ]
console.log(removedItems) // [ 'apple' ]

// Copy an array.
var fruits = [ 'orange', 'apple' , 'banana' ]
var copied = fruits.slice()
console.log(copied)  // [ 'orange', 'apple', 'banana' ]
var copied = [ ...fruits ]
console.log(copied)  // [ 'orange', 'apple', 'banana' ]

// Concat arrays.
var items1 = [ 'a', 'b', 'c' ]
var items2 = [ 'c', 'd' ]
var items3 = items1.concat(items2)
console.log(items1, items2, items3)

// Create a new Array instance from an array-like or iterable object.
// Syntax:
//  Array.from(arrayLike[, mapFn[, thisArg]])
console.log(Array.from([ 1, 2, 3 ]))
console.log(Array.from(new Set([ 'a', 1 ])))
console.log(Array.from(new Map([ [ 1, 2 ], [3, 4] ])))
function f() {
    return Array.from(arguments)
}
console.log(f(1, 2, 3))
console.log(Array.from([1, 2, 3], v => v * v )) // [ 1, 4, 9 ]

// Array.isArray
console.log(Array.isArray([ 1 ]))
console.log(Array.isArray('aaa'))
function f() {
    return Array.isArray(arguments)
}
console.log(f()) // false

// Array.of
console.log(Array.of(7)) // [ 7 ]
console.log(Array.of(1, 2, 3)) // [ 1, 2, 3 ]
console.log(Array(7)) // [ <7 empty items> ]
console.log(Array(1, 2, 3)) // [ 1, 2, 3 ]

// Array.prototype.every
// Syntax:
//  arr.every(callback[, thisArg])
var result = [ 1, 2, 3 ].every(v => v <= 10)
console.log(result) // true

// Array.prototype.fill
// Syntax:
//  arr.fill(value, start, end)
var numbers = [ 1, 2, 3, 4, 5 ]
numbers.fill(10)
console.log(numbers) // [ 10, 10, 10, 10, 10 ]

// Array.prototype.filter
// Syntax:
//  var newArray = arr.filter(callback[, thisArg])
var fruits = [ 'orange', 'apple' , 'banana' ]
var results = fruits.filter(fruit => fruit.indexOf('e') !== -1)
console.log(fruits)
console.log(results)
// [ 'orange', 'apple', 'banana' ]
// [ 'orange', 'apple' ]

// Array.prototype.find
// Syntax:
//      arr.find(callback[, thisArg])
var fruits = [ 'orange', 'apple' , 'banana' ]
var result = fruits.find(fruit => fruit === 'apple')
console.log(result) // apple
var result = fruits.find(fruit => fruit === 'something')
console.log(result) // undefined

// Array.prototype.findIndex
// Syntax:
//      arr.findIndex(callback[, thisArg])
var index = [12, 5, 8, 130, 44].findIndex(item => item >= 15)
console.log(index) // 3

// Array.prototype.forEach.
// Syntax:
//      arr.forEach(function callback(currentValue, index, array) {
//          //your iterator
//      }[, thisArg]);
var fruits = [ 'orange', 'apple', 'banana' ]
fruits.forEach(fruit => {
    console.log('fruit:', fruit)
})
// Item: orange
// Item: apple
// Item: banana

// Array.prototype.includes
// Syntax:
//      arr.includes(searchElement[, fromIndex])
var a = [1, 2, 3]
console.log(a.includes(2)) // true 
console.log(a.includes(4)) // false

// Array.prototype.indexOf
// Syntax:
//      arr.indexOf(searchElement[, fromIndex])
var a = [2, 9]
console.log(a.indexOf(2)) // 0 
console.log(a.indexOf(7)) // -1

// Array.prototype.join.
// Syntax:
//      arr.join(separator)
var a = ['Wind', 'Rain', 'Fire']
console.log(a.join())    // 'Wind,Rain,Fire'
console.log(a.join('-')) // 'Wind-Rain-Fire'
console.log(a.join(''))  // 'WindRainFire'

// Array.prototype.lastIndexOf.
// Syntax:
//      arr.lastIndexOf(searchElement[, fromIndex])
var numbers = [2, 5, 9, 2]
console.log(numbers.lastIndexOf(2)) // 3
console.log(numbers.lastIndexOf(7)) // -1

/*
    Array.prototype.map.

    Syntax:
        var new_array = arr.map(function callback(currentValue, index, array) {
            // Return element for new_array
        }[, thisArg])
*/
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

/*
    Array.prototype.reduce.

    Syntax:
        arr.reduce(callback[, initialValue])
*/
var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 1);
// total is 7

/*
    Array.prototype.reduceRight()

    Syntax:
        arr.reduceRight(callback[, initialValue])
*/
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]


/*
    Array.prototype.reverse()

    Syntax:
        a.reverse()
*/
var a = ['one', 'two', 'three'];
a.reverse(); 

console.log(a); // ['three', 'two', 'one']

/*
    Array.prototype.slice()

    Syntax:
        arr.slice()
        arr.slice(begin)
        arr.slice(begin, end)
*/
var a = ['zero', 'one', 'two', 'three']
var sliced1 = a.slice()
var sliced2 = a.slice(1)
var sliced3 = a.slice(1, 3)

console.log(a)      // ['zero', 'one', 'two', 'three']
console.log(sliced1) // ['zero', 'one', 'two', 'three']
console.log(sliced2) // [one', 'two', 'three']
console.log(sliced3) // ['one', 'two']

/*
    Array.prototype.some()

    Syntax:
        arr.some(callback[, thisArg])
*/
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

/*
    Array.prototype.sort()

    Syntax:
        arr.sort([compareFunction])
*/
var numbers = [4, 2, 5, 1, 3]
numbers.sort() // [1, 2, 3, 4, 5]

var numbers = [4, 2, 5, 1, 3].sort((v1, v2) => {
    // Sort by asc
    return v1 - v2
})
console.log(numbers) // [1, 2, 3, 4, 5]

var numbers = [4, 2, 5, 1, 3].sort((v1, v2) => {
    // Sort by desc
    return (v1 - v2) * -1
})
console.log(numbers) // [ 5, 4, 3, 2, 1 ]

/*
    Array.prototype.splice()

    Syntax:
        array.splice(start)
        array.splice(start, deleteCount)
        array.splice(start, deleteCount, item1, item2, ...)

    References:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
// Remove 0 elements from index 2, and insert "drum"
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var removed = myFish.splice(2, 0, 'drum')
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
// removed is [], no elements removed

// Remove 1 element from index 3
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
var removed = myFish.splice(3, 1)
// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

// Remove 1 element from index 2, and insert "trumpet"
var myFish = ['angel', 'clown', 'drum', 'sturgeon']
var removed = myFish.splice(2, 1, 'trumpet')
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
// removed is ["angel", "clown"]