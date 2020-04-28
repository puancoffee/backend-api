const mongooose = require('mongoose')
const Schema = mongooose.Schema
const newSchemaFilm = new Schema ({
    title: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: true
    },
    playing: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }

})
module.exports = mongooose.model('film',newSchemaFilm)
//film adalah nama collection atau nama tabel


