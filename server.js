const fs = require('fs'); 

console.log(fs);

const http = require("http");

fs.readFile("path/to/file.txt", { encoding: "utf8" }, (err, data) => {
  console.log(data);
});