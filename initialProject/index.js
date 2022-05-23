// function great(name) {
//   console.log(window);
// }
// great("Ibrohim");

// module.exports.great = this.great;

const path = require("path");

const os = require("os");

const fs = require("fs");

const EventEmitter = require("events");
const emitter = new EventEmitter();
// const pathObj = path.parse(__filename);
// console.log(pathObj);
// console.log(path.basename("initialProject/index.js"));

// const freeMem = os.freemem();
// const userName = os.userInfo();
// const totalMem = os.totalmem();
// console.log(`Bo'sh xotira ${freeMem} bayt va username:${os.userInfo.userName}`);

// console.log(+totalMem / 1024 / 1024);

emitter.on("message logged", () => {
  console.log("Listener done");
});
emitter.emit("message logged");
