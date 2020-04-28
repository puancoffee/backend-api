const Filmschema = require("../models/Filmschema");

module.exports = {
  createMovie: (req, res) => {
    Filmschema.create({
      title: req.body.title,
      release: req.body.release,
      playing: req.body.playing,
      genre: req.body.genre,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  showAllData: (req, res) => {
    Filmschema.find({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  showDataById: (req, res) => {
    Filmschema.findById(req.params.movieId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  deleteDataById: (req, res) => {
    Filmschema.findByIdAndRemove(req.params.movieId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  editDataById: (req, res) => {
    Filmschema.findByIdAndUpdate(req.params.movieId, {
      title: req.body.title,
      release: req.body.release,
      playing: req.body.playing,
      genre: req.body.genre,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
