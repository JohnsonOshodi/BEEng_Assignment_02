const http = require('http');
const PORT = 3000; 
const HOST_NAME ='localhost'

const behaviour = (req, res) => {

    if(req.url === '/books' && req.method === 'GET'){
        res.write('Hi! This is a GET request');

    } else if (req.url === '/books' && req.method === 'PUT'){
        res.write('Hi! This is a PUT request');

    } else if (req.url === '/books' && req.method === 'DELETE'){
        res.write('Hi! This is a DELETE request');

    } else if (req.url === '/books/author' && req.method === 'GET'){
        res.write('Hi! This is a GET request for books and author');

    } else if (req.url === '/books/author' && req.method === 'POST'){
        res.write('Hi! This is a POST request for books and author');

    } else if (req.url === '/books/author' && req.method === 'PUT'){
        res.write('Hi! This is a  PUT request for books and author');

    } else {
        res.writeHead(404, {'Content-type': 'text/plain'});
        console.log('Oops!!! Content cannot be found')

    }
    res.end();
}


const server = http.createServer(behaviour)

server.listen(PORT, ()=>{
    console.log(`Server is listening at http://${HOST_NAME}:${PORT}`)
}) 