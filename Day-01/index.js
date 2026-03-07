//  builtin
const fs = require("fs");

/* Self Made  know's from ./ that it's not builtin package */

const math = require("./math");

console.log("Hello World");

console.log("sum of 5 and 2 is ", math.add(5, 2));

//  File Handling

// Create a file

// Sync
fs.writeFileSync("./file.txt", "Hii Manish");

// Async
fs.writeFile("./file.txt", "Hii Manish Rawat ", (err) => {});

// Read File

// Sync
const result = fs.readFileSync("./file.txt", "utf-8");
console.log(result);

// Async

fs.readFile("./file.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// Append

// fs.appendFileSync("./file.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./file.txt", "by manish");

fs.appendFile("./file.txt", new Date().getDate().toLocaleString(), () => {});

//Copy

// file content to text file
fs.cpSync("./file.txt", "./text.txt");

//Delete

fs.unlinkSync("./text.text");

// Status like file size time to create,modify

console.log(fs.statSync("./file.txt"));
