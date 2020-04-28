const express = require('express')
const router = express.Router()
const Film = require('../controllers/Film')

router.post('/create-film', Film.createMovie)
router.get('/show-all', Film.showAllData)
router.get('/show-by-id/:movieId', Film.showDataById)
router.delete('/delete-movie/:movieId', Film.deleteDataById)
router.put('/edit-data-by-id/:movieId', Film.editDataById)

module.exports = router