var http = require('http'); // 1 - Import Node.js core module
const fs = require('fs');

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..

});
let jsonData = {}
fs.readFile('users.json', 'utf-8', (err, data) => {
  if (err) throw err
  
  jsonData = JSON.parse(data)
})
console.log(jsonData) // {}

let jsonSyncData = JSON.parse(fs.readFileSync('users.json', 'utf-8'))
console.log(jsonSyncData)
server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')