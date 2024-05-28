const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require("cookie-parser");
const apiRouter = require('./routes/apiRouter');
const connectToDatabase = require('./database/connect');
const cors = require('./cors');
const pagesRouter = require('./routes/pages')
const app = express();
const PORT = 3001;

connectToDatabase();
app.use(cors);
app.use(
  
  cookieParser(), 
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
});