const express = require('express');

const Notes = require('../models/Notes');

const router = express.Router();

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

const createNote = (req, res, next) => {
  const { title, content } = req.body;

  Notes.create({ title, content }, (err) => {
    if (err) {
      return next(err);
    }

    res.send('OK');
  });
};

const updateNote = (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const data = {
    id,
    title,
    content,
  };

  Notes.update(data, (err) => {
    if (err) {
      return next(err);
    }

    res.send('OK');
  })
};

router.route('/')
  .post(createNote)
  .get(getNotes);

router.route('/:id')
  .put(updateNote)
  .get(getNote)
  .delete(deleteNote);

module.exports = router;
