import http from 'http';

// Create server — callback fires on every request
const users = [
    { id: 1, name: 'Alice', email:'alice@example.com' },
    { id: 2, name: 'Bob', email:'bob@example.com' },
    { id: 3, name: 'Charlie', email:'charlie@example.com' },
    { id: 4, name: 'David', email:'david@example.com' }
];

const server = http.createServer((req, res) => {

    //   res.write('Hello World!');
    //   // End the response (required!)
    //   res.end();


    if(req.url=="/" && req.method=="GET"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    }
    else if(req.url=="/about" && req.method=="GET"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the About Page</h1>');
        res.end();
    }
    else if(req.url=="/contact" && req.method=="GET"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the Contact Page</h1>');
        res.end();
    }
    else if(req.url=="/users" && req.method=="GET"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(users));
        res.end();
    }
    else if (req.url.startsWith("/users/") && req.method=="POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const user = JSON.parse(body);
            users.push(user);
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(user   ));
            res.end();
        });
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

// Start on PORT or 3000 and move to the next port if busy
let port = Number(process.env.PORT) || 3000;

const startServer = () => {
    server.listen(port);
};

server.on('listening', () => {
    console.log(`Server running at http://localhost:${port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying ${port + 1}...`);
        port += 1;
        startServer();
        return;
    }

    console.error('Server failed to start:', err);
    process.exit(1);
});

startServer();

// Visit: http://localhost:3000 in your browser
