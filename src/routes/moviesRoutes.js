const express = require('express');
const router = express.Router();
const {list,nueva,recommended,detail} = require('../controllers/moviesController');

router
      .get('/movies',list)
      .get('/movies/new',nueva)
      .get('/movies/recommended',recommended)
      .get('/movies/detail/:id',detail)


module.exports = router;