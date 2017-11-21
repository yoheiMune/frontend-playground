/*
    Node.js Server.

    Purpose:
        - testing for multipart/form-data
*/
const http = require('http')

// Dispatching.
const server = http.createServer((req, res) => {

    console.log(req.method, req.url)

    if (req.url === '/') {
        res.writeHeader(200, { 'content-type': 'text/html' })
        res.end(`
            <form method="POST" action="/upload" enctype="multipart/form-data">
                <input type="text" name="message" value="Hello"/><br>
                <input type="file" name="file"/><br>
                <input type="submit" value="SUBMIT"/>
            </form>
        `)

    } else if (req.url === '/upload' && req.method === 'POST') {

        console.log('content-type header=====\n', req.headers['content-type'])

        let body = []
        req.on('data', chunk => {
            body.push(chunk)
        }).on('end', () => {
            body = Buffer.concat(body).toString()
            // console.log('body======\n' + body)

            res.writeHeader(200, { 'content-type': 'text/html' })
            res.end('thank you')
        })

    } else {
        res.writeHeader(404)
        res.end('NOT FOUND')
    }
})

// Starts.
server.listen(8080)
console.log('Server is runnninng on :8080')
