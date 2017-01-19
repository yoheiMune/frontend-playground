const fs = require('fs');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/bower_components', express.static('bower_components'));
app.use('/fetch-sample.js', (req, res) => {
    res.send(fs.readFileSync('./fetch-sample.js', 'utf-8'));
});
app.get('/', (req, res) => {
    res.send(fs.readFileSync('./index.html', 'utf-8'));
});

app.get('/text', (req, res) => {
    res.send('鈴木さん');
});

app.get('/json', (req, res) => {
    res.json({ 'name' : '鈴木さん' });
});

app.get('/404', (req, res) => {
    res.status(404).send('NG');
});

app.get('/400', (req, res) => {
    res.status(400).send('NG');
});

app.get('/500', (req, res) => {
    res.status(500).send('NG');
});

app.get('/get_with_params', (req, res) => {
    res.send(`params.id=${req.query.id}, params.name=${req.query.name}`);
});

app.post('/post_with_params', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    // console.log('req.headers', req.headers['content-type']);
    res.send(`params.id=${req.body.id}, params.name=${req.body.name}`);
});


const server = app.listen(3000, () => {
    console.log('Express server starts. listening on port ' + 3000);
});