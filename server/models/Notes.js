const db = require('../db');

class Notes {
  static all (cb) {
    const sql = `
      SELECT * 
        FROM notes
    `;
    db.all(sql, cb);
  }

  static find (id, cb) {
    const sql = `
      SELECT * 
        FROM notes 
        WHERE id = ?
    `;
    db.get(sql, id, cb);
  }

  static create (data, cb) {
    const sql = 'INSERT INTO notes(title, content) VALUES (?, ?)';
    const { title, content } = data;
    db.run(sql, title, content, cb);
  }

  static delete (id, cb) {
    if (!id) {
      return cb(new Error('Please provide an id'));
    }

    const sql = `
      DELETE FROM notes 
        WHERE id = ?
    `;
    db.run(sql, id, cb);
  }

  static update (data, cb) {
    const { id, title, content } = data;

    if (!id) {
      return cb(new Error('Please provide an id'));
    }

    const sql = `
      INSERT OR REPLACE INTO notes(id, title, content) VALUES (?, ?, ?)
    `;
    db.run(sql, id, title, content);
  }
}

module.exports = Notes;
