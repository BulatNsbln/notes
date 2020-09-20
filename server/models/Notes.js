const db = require('../db');

class Notes {
  static all (cb) {
    db.all('SELECT * FROM notes', cb);
  }

  static find (id, cb) {
    db.get('SELECT * FROM notes WHERE id = ?', id, cb);
  }

  static create (data, cb) {
    const sql = 'INSERT INTO notes(title, content) VALUES (?, ?)';
    db.run(sql, data.title, data.content, cb);
  }

  static delete (id, cb) {
    if (!id) {
      return cb(new Error('Please provide an id'));
    }

    db.run('DELETE FROM notes WHERE id = ?', id, cb);
  }
}

module.exports = Notes;
