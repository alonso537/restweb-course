import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url);


    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('<h1>Hola Mundo!</h1>')
    // res.end();
    
    // const data = {
    //     name: 'Alejandro',
    //     age: 28,
    //     city: 'new York'
    // }

    // res.writeHead(200, {'Content-Type': 'application/json'})
    // res.end(JSON.stringify(data));

    if(req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlFile);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end()
    }

})

server.listen(8080, () => {
    console.log('Server running 8080');
    
})