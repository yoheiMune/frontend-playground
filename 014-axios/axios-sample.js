let axios = require('axios');

// let url = 'http://stg.dokusho-ojikan.jp/dokusho-server/common/get_status';
let url = 'https://api.dokusho-ojikan.jp/dokusho-server/common/get_status';

let config = {};
// config.headers = {
//     Cookie : 'EXT_JSESSIONID=574f6674-ba1e-4258-a0ed-8d993703bcee'
// };

config.headers = {
    Cookie : 'EXT_JSESSIONID=e55f3dc6-6833-4942-bb38-adae7323b7fc'
};

// config.proxy = {
//     host: '127.0.0.1',
//     port: 8888
// };

// axios.get(url, config).then(response => {
//     console.log('response:', response);
// });

url = "https://api.dokusho-ojikan.jp/dokusho-server/recommend/user_to_book?id=2076529808&limit=20&shuffle_flg=0";
axios.get(url, config).then(response => {
    console.log('response:', response);
});