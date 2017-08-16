/*
 * axios sample.
 *
 * URL : https://github.com/mzabriskie/axios
 */
const axios = require('axios');

// GET
axios.get('http://localhost:3000/users').then(response => {
    console.log('status:', response.status); // 200
    console.log('body:', response.data); // response body.
    console.log('config:', response.config);
}).catch(err => {
    console.log('err:', err);
});

// または
axios({
    method : 'GET',
    url    : 'http://localhost:3000/users'
}).then(response => console.log(response.status));

// GET（パラメータ付き）
const params = { name : 'Yohei' };
axios.get('http://localhost:3000/users', { params }).then(response => {
    console.log('status:', response.status);
    console.log('body:', response.data);
});

// または
axios({
    method : 'GET',
    url    : 'http://localhost:3000/users',
    params : { name : 'Yohei' }
}).then(response => console.log(response.status));

// POST
const data = { firstName : 'Yohei', lastName : 'Munesada' };
axios.post('http://localhost:3000/users', data).then(response => {
    console.log('body:', response.data);  // Yohei Munesada
});

// または
axios({
    method : 'POST',
    url    : 'http://localhost:3000/users',
    data   : { firstName : 'Yohei', lastName : 'Munesada' }
}).then(response => console.log(response.status));


// エラー
axios.get('http://localhost:3000/error').catch(function (error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
});
axios.get('http://localhost:3000/error').then(response => {

}).catch(err => {
    console.log('status:', err.response.status);          // 400
    console.log('statusText:', err.response.statusText);  // Bad Request
});


// タイムアウト
axios.get('http://localhost:3000/users', { timeout : 1000 })
    .then(response => console.log(response.status));

axios({
    method  : 'GET',
    url     : 'http://localhost:3000/users',
    timeout : 1000  // ms
}).then(response => console.log(response.status));


// カスタムヘッダー
axios.get('http://localhost:3000/users', { headers: {'X-SPECIAL-TOKEN': 'abcde'} })
    .then(response => console.log(response.status));
axios({
    method  : 'GET',
    url     : 'http://localhost:3000/users',
    headers: {'X-SPECIAL-TOKEN': 'abcde'},
}).then(response => console.log(response.status));

// Basic認証
axios.get('http://localhost:3000/users', { auth : { username : 'user1', password : 'pass1' } })
    .then(response => console.log(response.status));
axios({
    method  : 'GET',
    url     : 'http://localhost:3000/users',
    auth    : { username : 'user1', password : 'pass1' },
}).then(response => console.log(response.status));


// 400系エラーをresolvedで扱う.
axios({
    method  : 'GET',
    url     : 'http://localhost:3000/error',
    validateStatus: function (status) {
        return status < 500;
    }
}).then(response => console.log(response.status));


// レスポンス構造.
axios.get('http://localhost:3000/users').then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });


// バイナリーデータ
axios.get('http://localhost:3000/static/sea001.jpg', { responseType : 'arrayBuffer' })
    .then(response => {
        console.log('response.data', response.data.length);
    });

axios({
    method       : 'GET',
    url          : 'http://localhost:3000/static/sea001.jpg',
    responseType : 'arrayBuffer'
}).then(response => {
    console.log('response.data', response.data.length);
});
















// // let url = 'http://stg.dokusho-ojikan.jp/dokusho-server/common/get_status';
// let url = 'https://api.dokusho-ojikan.jp/dokusho-server/common/get_status';

// let config = {};
// // config.headers = {
// //     Cookie : 'EXT_JSESSIONID=574f6674-ba1e-4258-a0ed-8d993703bcee'
// // };

// config.headers = {
//     Cookie : 'EXT_JSESSIONID=e55f3dc6-6833-4942-bb38-adae7323b7fc'
// };

// // config.proxy = {
// //     host: '127.0.0.1',
// //     port: 8888
// // };

// // axios.get(url, config).then(response => {
// //     console.log('response:', response);
// // });

// url = "https://api.dokusho-ojikan.jp/dokusho-server/recommend/user_to_book?id=2076529808&limit=20&shuffle_flg=0";
// axios.get(url, config).then(response => {
//     console.log('response:', response);
// });