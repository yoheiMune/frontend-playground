const fs = require('fs');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for static files.
app.use('/bower_components', express.static('bower_components'));
app.use('/fetch-sample.js', (req, res) => {
    res.send(fs.readFileSync('./fetch-sample.js', 'utf-8'));
});

// Index page.
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <script type="text/javascript" src="./bower_components/fetch/fetch.js"></script>
                <script type="text/javascript" src="./fetch-sample.js"></script>
            </body>
        </html>
    `);
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
    res.send(`params.id=${req.body.id}, params.name=${req.body.name}`);
});

// Launch a server listening on 3000 port.
const server = app.listen(3000, () => {
    console.log('Express server starts. listening on port ' + 3000);
});