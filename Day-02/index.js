const fs = require("fs");
const os = require("os");
// Sync  ----> Blocking req

console.log("1");
const result = fs.readFileSync("./text.txt", "utf-8");
console.log(result);
console.log("2");

// Output is Like :
//1
// Text.txt Content
//2
// Means Whenevr Text.txt process complete no other will run/process  means it blocking the other work

// Async  ---> Non-Blocking req

console.log(1);
fs.readFile("./text.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log("2");

// Output for This :
// 1
// 2
// Text.txt Content

// So Async request not block the other request ,So  try to make all request as a non -blocking request

// OS module method

// give the how many CPU or CORE in your PC
console.log(os.cpus().length);

// for me Output :  8
