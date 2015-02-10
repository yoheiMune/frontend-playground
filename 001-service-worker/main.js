function log() {
  var $area = document.querySelector('#log');
  $area.appendChild(document.createTextNode(Array.prototype.join.call(arguments, ", ") + '\n'));
  console.log.apply(console, arguments);
}

window.onerror = function(err) {
  log("Error", err);
};




if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function (sw) {
        // success
        console.debug('serviceWorker registration successful with scope: ', sw.scope);
    }).catch(function (err) {
        // fail
        console.error('serviceWorker registration failed. reason: ', err);
    });
}


function ajax(url) {
    return new Promise(function (done, fail) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', function () {
            if (xhr.status !== 200) {
                return fail(xhr.response);
            }
            done(xhr.response);
        });
        xhr.addEventListener('error', fail);
        xhr.send();
    });
}





// Messageの受け取り
window.onmessage = function(event) {
  log("Got reply from serviceworker via window", event.data);
};


// Messageのやりとり
// ① ホスト　から　SW
var messageChannel = new MessageChannel();
messageChannel.port1.onmessage = messageChannel.port2.onmessage = function(event) {
  log("Got reply from serviceworker via channel", event.data);
};

// serviceWorkerがactivateされるまでcontrollerがnullになるので、
// とりあえずsetTimeoutでごまかす
setTimeout(function () {
    navigator.serviceWorker.controller.postMessage('Hello', [messageChannel.port1]);
    console.log('send message!!');
}, 1000);



/*

    navigator.serviceWorker.register('sw.js', {
      scope: './'
    }).then(function(sw) {

      log("Registered!", sw);
    }).catch(function(err) {
      log("Error", err);
    });

    navigator.serviceWorker.ready.then(function(reg) {
      reg.active.postMessage({
        text: "Hi!",
        port: messageChannel && messageChannel.port2
      }, [messageChannel && messageChannel.port2]);
    });
*/




/*
    テスト対象の機能
*/
function ajax(url) {
    return new Promise(function (done, fail) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', function () {
            if (xhr.status !== 200) {
                return fail(xhr.response);
            }
            done(xhr.response);
        });
        xhr.addEventListener('error', fail);
        xhr.send();
    });
}


// QUnitの使い方
// QUnit.test('sample test', function (assert) {
//     assert.equal(1, 1, 'left actual, right expect');
//     assert.equal(1, 1, 'left actual, right expect');
// });
// // asyncテスト
// QUnit.test('async test', function (assert) {
//     var done = assert.async();
//     setTimeout(function () {
//         assert.equal('1', '1', 'same value');
//         done();
//     }, 100);
// });


// Jasmineの使い方
describe('jasmine test', function () {

    // 前処理
    beforeEach(function (done) {
        setTimeout(function () {
            log('beforeEach finished.');
            done();
        }, 100);
    });

    // 後処理
    afterEach(function (done) {
        setTimeout(function () {
            log('afterEach finished.');
            done();
        }, 100);
    });

    // 普通のテスト
    it('test-001', function () {
        expect(12).toBe(12);
    });

    // asyncテスト
    it('test-async-001', function (done) {
        setTimeout(function () {
            expect(true).toBe(true);
            done();
        }, 100);
    });
});
























