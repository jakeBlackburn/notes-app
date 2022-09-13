require('dotenv').config()

const connectDB = require('./connect')
const Note = require('./models')

const Notes = require('./data.json')


const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const start = async () => {
  try {
    await connectDB(`mongodb+srv://${username}:${password}@portfolio-cluster.sknurkv.mongodb.net/notes-app?retryWrites=true&w=majority`);
    await Note.deleteMany()
    await Note.create(Notes)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
