const fs = require('fs'); 

console.log(fs);

const http = require("http");

const data = fs.readFileSync("assets/poem.txt");
console.log(data); // <Buffer 48 65 6c 6c 6f ...>