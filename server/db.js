const Sqlite3 = require('sqlite').verbose();

const dbname = 'later.sqlate';

const db = new Sqlite3.Database(dbname);

db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTS notes
      (id integer primary key, title, content TEXT)
  `;
  db.run(sql);
});

module.exports = db;
