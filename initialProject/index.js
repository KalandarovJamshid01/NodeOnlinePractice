// // const Logger = require("./logger");
// // const logger = new Logger();

// // function great(name) {
// //   console.log(window);
// // }
// // great("Ibrohim");

// // module.exports.great = this.great;

// const path = require("path");

// const os = require("os");

// const fs = require("fs");

// // const pathObj = path.parse(__filename);
// // console.log(pathObj);
// // console.log(path.basename("initialProject/index.js"));

// // const freeMem = os.freemem();
// // const userName = os.userInfo();
// // const totalMem = os.totalmem();
// // console.log(`Bo'sh xotira ${freeMem} bayt va username:${os.userInfo.userName}`);

// // console.log(+totalMem / 1024 / 1024);

// // logger.on("messageLogged", (arg) => {
// //   console.log("Listener done", arg);
// // });

// // logger.log("message");

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Asosiy sahifa");
//     res.end();
//   }
//   if (req.url === "/api/books") {
//     res.write(JSON.stringify(["code", "comple", "refactoring"]));
//     res.end();
//   }
// });

// // server.on("connection", (socket) => {
// //   console.log("new connect");
// // });

// server.listen(8000);
// console.log(`${server.address().port} portni ewtiwni bowladik...`);

const _ = require("underscore");
const mongoose = require("mongoose");

const a = _.contains([3, 5, 9], 5);
console.log(a);
