const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  version: {
    type: String,
    default: 'v1',
  },
  overview: {
    type: String
  },
  text: {
    type: Array,
  }
})

module.exports = mongoose.model('Note', NoteSchema)
