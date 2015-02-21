console.debug('SW startup.');
// importScripts('../cache-polyfill/dist/serviceworker-cache-polyfill.js');


// メッセージ受け取り
self.onmessage = function (event) {
    console.log('[worker]', event.data);

    var mockObject = JSON.parse(event.data);


    // レスポンスを生成する
    function _createResponse (url) {
        var body = JSON.stringify(mockObject[url]);
        var head = {
            status: 200,
            statusText: 'OK',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return new Response(body, head);
    }


    self.onfetch = function(event) {
        var path = (new URL(event.request.url)).pathname;
        console.log('fetch-event: ', event, event.request.url, path);
        if (mockObject && mockObject[path]) {
            var response = _createResponse(path);
            return event.respondWith(response);
        } else {
            return;
        }
    };


    if (event.ports) {
        event.ports[0].postMessage('Mock Data Recived');
    }
};



























