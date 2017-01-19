/**

    https://github.com/github/fetch
    https://github.github.io/fetch

    npm install --save whatwg-fetch

    npm install --save-dev babel-cli
    npm install --save-dev babel-preset-es2015
    npm install --save-dev babelify
    npm install --save-dev browserify

$ mkdir dist
$ ./node_modules/.bin/browserify --presets es2015 --transform babelify --outfile dist/fetch-sample.bundle.js fetch-sample.js

$ bower init

$ bower install fetch
bower fetch#*               not-cached https://github.com/github/fetch.git#*
bower fetch#*                  resolve https://github.com/github/fetch.git#*
bower fetch#*                 download https://github.com/github/fetch/archive/v2.0.1.tar.gz
bower fetch#*                  extract archive.tar.gz
bower fetch#*                 resolved https://github.com/github/fetch.git#2.0.1
bower fetch#^2.0.1             install fetch#2.0.1

fetch#2.0.1 bower_components/fetch
*/

// textやhtmlなどの文字列で値を受け取る場合
fetch('/text').then(response => {
    console.log('response.status:', response.status, typeof response.status); // response.status: 200 number
    console.log('response.statusText:', response.statusText, typeof response.statusText); // response.statusText: OK string
    console.log('response.headers:', response.headers); // response.headers: Headers {}
    console.log('response.url:', response.url); // response.url: http://localhost:3000/text
    return response.text();
}).then(text => {
    console.log('text:', text); // text: 鈴木さん
});

// JSONで値を受け取る場合
fetch('/json').then(response => {
    return response.json();
}).then(jsonData => {
    console.log('jsonData:', jsonData); // jsonData: Object {name: "鈴木さん"}
});

// 400や500系のステータスでも、resolvedで処理される.
fetch('/400').then(response => {
    console.log('status: ', response.status);
});
fetch('/500').then(response => {
    console.log('status: ', response.status);
});

// ネットワークエラーなどの時だけ。（ローカルサーバー落とすとかしてテスト）
setTimeout(() => {
    console.log('aaaaaaa');
    fetch('/NETWORKERROR').then(res => {
        console.log('resolved');
    }).catch(err => {
        console.log('rejected:', err); // rejected: TypeError: Failed to fetch
    });
}, 5000);

// GETの場合のパラメータの送り方①：URLにくっつける
fetch('/get_with_params?id=1&name=yohei')
    .then(response => response.text())
    .then(text => console.log(text)); // params.id=1, params.name=yohei

// GETの場合のパラメータの送り方①：URLSearchParamsを利用
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
const params = new URLSearchParams();
params.set('id', 2);
params.set('name', 'munerin');
fetch('/get_with_params?' + params.toString())
    .then(response => response.text())
    .then(text => console.log(text));

// POSTで送る場合（JSON形式）
fetch('post_with_params', {
    method : 'POST',
    body : JSON.stringify({ id : 3, name : 'matsu' }),
    headers : new Headers({ "Content-type" : "application/json" })
}).then(response => response.text())
    .then(text => console.log(text)); // params.id=3, params.name=matsu

// POSTで送る場合（FormData形式）
fetch('post_with_params', {
    method : 'POST',
    body : 'id=4&name=shinji',
    headers : new Headers({'Content-type' : 'application/x-www-form-urlencoded' })
}).then(response => response.text())
    .then(text => console.log(text)); // params.id=4, params.name=shinji

/*
    Options

    method (String) - HTTP request method. Default: "GET"
    body (String, body types) - HTTP request body
    headers (Object, Headers) - Default: {}
    credentials (String) - Authentication credentials mode. Default: "omit"
        "omit" - don't include authentication credentials (e.g. cookies) in the request
        "same-origin" - include credentials in requests to the same site
        "include" - include credentials in requests to all sites
*/

// Cookieを付与した送信
fetch('/text', { credetials : 'include' })
    .then(response => response.text())
    .then(text => console.log('text:', text));

// ヘッダーの付与
fetch('/text', {
    headers : new Headers({ 'X-MY-APP' : '12345' })
}).then(response => response.text())
    .then(text => console.log('text:', text));



















