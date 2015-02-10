console.debug('SW startup.');
importScripts('../cache-polyfill/dist/serviceworker-cache-polyfill.js');

// var CACHE_NAME = 'cache-v1';

// var urlsToCache = [
//     './sub.html',
//     './main.css',
//     './script.js'
// ];

self.addEventListener('install', function (event) {
    console.debug('install fired.');

    // インストール処理
    // event.waitUntil(
    //     caches.open(CACHE_NAME).then(function (cache) {
    //         console.log('Opened cache');
    //         return cache.addAll(urlsToCache);
    //     })
    // );

      // event.waitUntil(
      //   caches.open(CACHE_NAME)
      //     .then(function(cache) {
      //       console.log('Opened cache');
      //       return cache.addAll(urlsToCache);
      //     })
      // );
});


self.addEventListener('fetch', function(event) {
    console.log('fetch-event: ', event, event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // キャッシュがあったのでそのレスポンスを返す
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );

  // Message送信

});



// メッセージ受け取り
self.onmessage = function (event) {
    console.log('[worker]', event, event.data, event.data.text, self);

    if (event.ports) {
        event.ports[0].postMessage('Recived!');
    }
};


/*
console.log("SW startup");

this.onmessage = function(event) {
  console.log("Got message in SW", event.data.text);
  
  if (event.source) {
    event.source.postMessage("Woop!");
  }
  else {
    console.log("No event.source");
  }

  if (event.data.port) {
    event.data.port.postMessage("Woop!");
  }
};
*/































