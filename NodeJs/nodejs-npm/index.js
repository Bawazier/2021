const http = require('http'); // import module from node
const fs = require('fs');
const moment = require('moment'); // import module from npm
const hello = require('./hello'); // import module

console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));
    
http.createServer((req, res) => {
    // Baca File
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;

        //  Respone
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    
}).listen(8080);

console.log("server running on http://localhost:8080");