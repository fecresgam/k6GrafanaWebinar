const http = require('http');

//const hostname = '10.64.63.126';
const hostname = '192.168.1.65';
let initTime = Date.now();
const port = 1234;
//await new Promise(resolve => setTimeout(resolve, 5000));
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hola\n' + initTime);
    setInterval(function() {
            res.end('\n Mitad\n');
        },between(500,1000));
    //res.end('\n el World\n');
});

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

server.listen(port, hostname, () => {    
  console.log(`Server running at http://${hostname}:${port}/`);
});
