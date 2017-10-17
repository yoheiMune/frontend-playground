/**
    Samples of ES6 Generator.

    References:
        - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator
        - https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
        - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/function*
*/

/*
 * Basic Usage.
 */
function* gen () {
    yield 1
    yield 2
    yield 3
}
// Create a generator and use it.
var g = gen()
console.log(g.next()) // { value: 1, done: false } 
console.log(g.next()) // { value: 2, done: false }
console.log(g.next()) // { value: 3, done: false }
console.log(g.next()) // { value: undefined, done: true }

// Also, generator can be use in for-of context.
console.log('---')
for (item of gen()) {
    console.log(item)
}
// 1
// 2
// 3

/**
 * Generator can contain another iterable object (Using `yield*`).
 */
function* gen2 () {
    yield* ['a', 'b', 'c']
    yield* gen()
}
console.log('---')
for (item of gen2()) {
    console.log(item)
}
// a
// b
// c
// 1
// 2
// 3

/**
 * Generator can accept a value via `next` function.
 */
function* calc () {
    let v = 1
    while (true) {
        v = v + v
        reset = yield v
        if (reset) {
            v = 1
        }
    }
}
console.log('---')
var g = calc()
console.log(g.next().value)  // 2
console.log(g.next().value)  // 4
console.log(g.next().value)  // 8
console.log(g.next(true).value)  // 2
console.log(g.next().value)   // 4

/**
 * Use Generator.prototype.throw.
 */
function* myGen () {
    while (true) {
        try {
            yield 'good'
        } catch (e) {
            console.log(e.message)
        }
    }
}
var g = myGen()
console.log(g.next().value)  // good
var result = g.throw(new Error('Oh My Error...')) // Oh My Error...
console.log(result)    // { value: 'good', done: false }  <= still good and done is false!!
console.log(g.next().value)  // good

function* myGen2 () {
    while (true) {
        yield 'good'
        // not catch excetpion.
    }
}
console.log('---')
var g = myGen2()
console.log(g.next().value)  // good
try {
    var result = g.throw(new Error('Oh My Error...'))
} catch (e) {
    console.log(e.message) // Oh My Error...
}
console.log(g.next())  // { value: undefined, done: true }  <= done!!