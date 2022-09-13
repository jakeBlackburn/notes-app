
const Note = require('./models')
const asyncWrapper = require('./async')

const getNote = asyncWrapper(async (req, res) => {
    const {title: title} = req.params
    const note = await Note.findOne({ title: title })
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.status(200).json({ note })
})

module.exports = {
    getNote,
}