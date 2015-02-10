console.debug('SW startup.');
importScripts('../cache-polyfill/dist/serviceworker-cache-polyfill.js');


// モックデータ
var mockObject;


self.addEventListener('install', function (event) {
    console.debug('install fired.');
});

self.addEventListener('activate', function () {
    console.debug('activate fired.');
});


self.addEventListener('fetch', function(event) {
    var path = (new URL(event.request.url)).pathname;
    console.log('fetch-event: ', event, event.request.url, path);
    if (mockObject && mockObject[path]) {
        var response = _createResponse(path);
        return event.respondWith(response);
    } else {
        return;
    }
});



// メッセージ受け取り
self.onmessage = function (event) {
    console.log('[worker]', event.data);

    mockObject = JSON.parse(event.data);

    if (event.ports) {
        event.ports[0].postMessage('Mock Recived');
    }
};


// レスポンスを生成する
function _createResponse (url) {
    var body = JSON.stringify(mockObject[url] || '');
    var head = {
        status: 200,
        statusText: 'OK',
        header: {
            'Content-Type': 'application/json'
        }
    };
    return new Response(body, head);
}



























