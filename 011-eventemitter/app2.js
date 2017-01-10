/**
 * The very simple sample for events.EventEmitter (Node.JS).
 *
 * How to run:
 *  $ node app2.js 
 */
const EventEmitter = require('events').EventEmitter;

const ev = new EventEmitter();

// イベントを受け取る
ev.on('data', data => {
    console.log('dataを受け取ったよ：', data);
})

// イベントを受け取る（1回限り）
ev.once('data', data => {
    console.log('dataを受け取ったよ(1回限り)：', data);
});

// イベントを発行する
ev.emit('data', 1);
ev.emit('data', 2);
ev.emit('data', 3);
