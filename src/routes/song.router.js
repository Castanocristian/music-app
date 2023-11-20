const { getAll, create, getOne, remove, update,setSongArtists, setSongGenres } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route('/')
    .get(getAll)
    .post(create);

songRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

songRouter.route('/:id/artists')
    .post(setSongArtists);

songRouter.route('/id/genres')
    .post(setSongGenres);


module.exports = songRouter;