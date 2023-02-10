var sqlite3 = require('@journeyapps/sqlcipher').verbose();



exports.fetchLogInStatus = () => {
  return new Promise((resolve, reject) => {
    try {
      let db = new sqlite3.Database('./database/master_db.db');
      db.serialize(() => {
        db.run('PRAGMA key = "password1"');
        db.run(`SELECT COUNT(*) as 'count' FROM master`, (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row[0].count == 0 ? false : true);
          }
        });
      });
    } catch {
      reject("Internal Network Error: Please reopen the app.");
    } finally {
      db.close();
    }
  });
}

exports.updateLoginStatus = async (apiResp) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("Login details updates");
      let db = new sqlite3.Database('./database/master_db.db');
      db.serialize(() => {
        db.run('PRAGMA key = "password1"');
        console.log('resolvedddd');
        db.run('INSERT INTO master (name, master_code, last_login) VALUES (?, ?, ?)', [apiResp.name, apiResp.master_id, apiResp.last_login]);
      });
      resolve(apiResp);
    } catch (err) {
      console.log("failed to create" + err);
      reject("Internal Network Error: Please reopen the app.");
    } finally {
      db.close();
    }
  });
}

exports.logout = async () => {
  return new Promise((resolve, reject) => {
    try {
      let db = new sqlite3.Database('./database/master_db.db');
      console.log("TRUNCATE TABLE master");
      db.serialize(() => {
        db.run('PRAGMA key = "password1"');
        db.run('DELETE FROM master');
      });
      resolve(true);
    } catch (err) {
      console.log("Failed to logout -> " + err);
      reject("Internal Network Error: Please reopen the app.");
    } finally {
      db.close();
    }
  });
}














exports.getUsersAPI = async (callback) => {
  db.all(`SELECT * FROM master`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Data: ', rows);
    callback(rows);
  });
}


// Example usage:


