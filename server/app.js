const express = require('express')
const app = express()
const notes = require('./router');
const connectDB = require('./connect');
require('dotenv').config();
const notFound = require('./not-found');
const port = process.env.PORT || 3000;

//middleware
app.use(express.static('./dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('../dist/index.html')
})


//routes
app.use('/api/v1/notes', notes)

app.use(notFound)

const username = encodeURIComponent(process.env.ATLAS_USERNAME)
const password = encodeURIComponent(process.env.ATLAS_PASSWORD)


const start = async () => {
    try {
      await connectDB(`mongodb+srv://${username}:${password}@portfolio-cluster.sknurkv.mongodb.net/notes-app?retryWrites=true&w=majority`);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();