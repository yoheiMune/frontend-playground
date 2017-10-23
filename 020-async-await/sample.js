/*
    Samples for Async/Await.
    * Async/Await is syntax sugar for Promise and Generator.

    References:
        - https://qiita.com/mizchi/items/95410f4955d94ed103fa
        - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function
        - https://ponyfoo.com/articles/understanding-javascript-async-await
        - https://gist.github.com/LightSpeedC/2c983029a0bf873d600b
        - https://qiita.com/gaogao_9/items/40babdf63c73a491acbb
*/

console.log('start')
main().then(result => {
    console.log('result:', result)
    console.log('end')
})


async function main () {
    console.log('main: started')

    // Basic.
    const val1 = await sleep(100, 'Hello')
    console.log('val1:', val1)

    // Sequencial.
    const t1 = Date.now()
    const val2 = await sleep(500, 1)
    const val3 = await sleep(500, 2)
    const val4 = await sleep(500, 3)
    console.log(`val2+val3+val4=${val2 + val3 + val4}`) // val2+val3+val4=6
    console.log(`${Date.now() - t1}ms`) // 1,500ms

    // Parallel.
    const t2 = Date.now()
    const val5 = sleep(500, 1)
    const val6 = sleep(500, 2)
    const val7 = sleep(500, 3)
    const val8 = await val5 + await val6 + await val7
    console.log(`val5+val6+val7=${val8}`) // val5+val6+val7=6
    console.log(`${Date.now() - t2}ms`) // 500ms

    // Parallel2.
    const t3 = Date.now()
    const val9 = sleep(500, 1)
    const val10 = sleep(500, 2)
    const val11 = sleep(500, 3)
    let val12 = await Promise.all([val9, val10, val11])
    console.log('val12:', val12) // val12: [ 1, 2, 3 ]
    val12 = val12.reduce((sum, val) => sum + val, 0)
    console.log(`val9+val10+val11=${val12}`) // val9+val10+val11=6
    console.log(`${Date.now() - t3}ms`) // 500ms

    // Parallel3.
    const t4 = Date.now()
    const [val13, val14, val15] = [ await sleep(500, 1), await sleep(500, 2), await sleep(500, 3) ]
    const val16 = val13 + val14 + val15
    console.log(`val13+val14+val15=${val16} , ${Date.now() - t4}ms`) // 1500ms

    return 'main: end'
}
// start
// main: started
// val1: Hello
// val2+val3+val4=6 , 1509ms
// val5+val6+val7=6 , 502ms
// val9+val10+val11=6 , 500ms
// result: main: end
// end



function sleep (msec, val) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, msec, val)
    })
}

/**
 * How to handle errors.
 */
main2().catch(err => {
    console.log('main2:err:', err)
})

async function main2 () {
    throw new Error('MAIN2 ERROR!!!')
}
// main2:err: Error: MAIN2 ERROR!!!
//     at main2 (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:64:11)
//     at Object.<anonymous> (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:59:1)
//     at Module._compile (module.js:569:30)
//     at Object.Module._extensions..js (module.js:580:10)
//     at Module.load (module.js:503:32)
//     at tryModuleLoad (module.js:466:12)
//     at Function.Module._load (module.js:458:3)
//     at Function.Module.runMain (module.js:605:10)
//     at startup (bootstrap_node.js:158:16)
//     at bootstrap_node.js:575:3

main3().catch(err => {
    console.log('main3:err:', err)
})

async function main3 () {
    const val = await rejectFunction()
}

function rejectFunction () {
    return new Promise((resolve, reject) => {
        throw new Error('REJECT FUNCTION ERROR!!!')

        // below also good.
        // reject(new Error('REJECT FUNCTION ERROR!!!'))
    })
}

// main3:err: Error: REJECT FUNCTION ERROR!!!
//     at Promise (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:98:15)
//     at Promise (<anonymous>)
//     at rejectFunction (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:97:12)
//     at main3 (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:93:23)
//     at Object.<anonymous> (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:88:1)
//     at Module._compile (module.js:569:30)
//     at Object.Module._extensions..js (module.js:580:10)
//     at Module.load (module.js:503:32)
//     at tryModuleLoad (module.js:466:12)
//     at Function.Module._load (module.js:458:3)

main4().then(result => {
    console.log('main4:result:', result)
})

async function main4 () {
    try {
        await rejectFunction()
    } catch (e) {
        console.log('catched: ', e)
    }
    return "finish"
}
// catched:  Error: REJECT FUNCTION ERROR!!!
//     at Promise (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:98:15)
//     at Promise (<anonymous>)
//     at rejectFunction (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:97:12)
//     at main4 (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:120:15)
//     at Object.<anonymous> (/Users/munesadayohei/git/frontend-playground/020-async-await/sample.js:114:1)
//     at Module._compile (module.js:569:30)
//     at Object.Module._extensions..js (module.js:580:10)
//     at Module.load (module.js:503:32)
//     at tryModuleLoad (module.js:466:12)
//     at Function.Module._load (module.js:458:3)

// main4:result: finish


/*
 * Nested.
 */
main5().then(result => {
    console.log('main5:result:', result)
})

async function main5 () {
    const val = await sub()
    return val
}

async function sub () {
    return new Promise(async (resolve, reject) => {
        const val = await resolveFunction()
        resolve(val)        
    })
}

function resolveFunction () {
    return new Promise((resolve, reject) => {
        resolve('GOOD')
    })
}

// main5:result: GOOD
