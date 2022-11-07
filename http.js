const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to the home page website')
        return;
    }

    if(req.url === '/about'){
        res.end('Welcome to the ABOUT PAGE website')
        return;
    }

    res.end(`
    <h1>Oops : Cant seem to find your page...</h1>
    <a href="/">Back Home</a>
    `)

})

server.listen(5000)