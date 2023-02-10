var sqlite3 = require('@journeyapps/sqlcipher').verbose();
let db = new sqlite3.Database('./database/master_db.db');

exports.createTables = async () => {
  try {
    console.log("trying to create table");
    db.serialize(() => {
      db.run('PRAGMA key = "password1"');
      db.run('CREATE TABLE IF NOT EXISTS master (m_id INTEGER NOT NULL UNIQUE, name TEXT, master_code TEXT, last_login TEXT, PRIMARY KEY(m_id AUTOINCREMENT)');
    });
  } catch (err) {
    console.log("failed to create" + err);
  } finally {
    db.close();
  }
}