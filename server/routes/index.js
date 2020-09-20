const Notes = require('../models/Notes');

const getNotes = (req, res, next) => {
  Notes.all((err, notes) => {
    if (err) {
      return next(err);
    }

    res.send(notes);
  });
};

const getNote = (req, res, next) => {
  const id = req.params.id;

  Notes.find(id, (err, note) => {
    if (err) {
      return next(err);
    }

    res.send(note);
  })
};

const deleteNote = (req, res, next) => {
  const id = req.params.id;
  Notes.delete(id, (err) => {
    if (err) {
      return next(err);
    }

    res.send({ message: 'Deleted' });
  });
};

const addRoutes = (app) => {
  app.get('/articles', getNotes);
  app.get('/articles/:id', getNote)
  app.delete('/articles/:id', deleteNote)
};

module.exports = addRoutes;
