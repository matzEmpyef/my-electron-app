const { contextBridge } = require("electron");
const dbManager = require("./database/db_manager");
const dbCreate = require("./database/db_create");
const apis = require("./database/server_apis");
const fs = require('fs');
var today = new Date();
console.log('preload.js loaded' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds());



fs.access(`./database/master_db.db`, (err) => {
  /*if (err) {
    console.log('db file does not exists');
    let db = new sqlite3.Database('./database/master_db.db',
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Created and Connected to the SQlite database.');

      });
    db.close();
  } else {
    console.log('dB Exists');
  }*/

  var stats = fs.statSync(`./database/master_db.db`)
  var fileSizeInBytes = stats.size;
  if (fileSizeInBytes == 0) {
    dbCreate.createTables();
    console.log('table created')
  }
})

console.log('post f');

const getIfLoggedIn = (callback) => {
  dbManager.fetchLogInStatus()
    .then((result) => { callback(result); })
    .catch((error) => console.error(error));
}

const loginToCloud = (username, password, callback) => {
  apis.cloudLogIn(username, password)
    .then((apiResp) => {
      dbManager.updateLoginStatus(apiResp)
        .then((result) => { console.log(result); callback(result); })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
}
console.log('post A');
/*const loginToCloud = (username, password, callback) => {
  apis.cloudLogIn(username, password)
    .then((result) => { console.log(result); callback(result); })
    .catch((error) => console.error(error));
}*/
const saveLogin = (data, callback) => {
  console.log("data" + data);
  dbManager.updateLoginStatus(data)
    .then((result) => { console.log(result); callback(result); })
    .catch((error) => console.error(error));
}

console.log('post w');
const logout = (callback) => {
  dbManager.logout()
    .then((result) => { callback(result); })
    .catch((error) => console.error(error));
}


console.log('post t');




// Expose data to the main world
contextBridge.exposeInMainWorld("dataStream", {
  getIfLoggedIn: getIfLoggedIn,
  loginCloud: loginToCloud,
  saveLogin: saveLogin,
  logout: logout,
});