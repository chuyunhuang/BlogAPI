const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const userRouter = require('./routes/user')

// app.get('/', (req, res)=>{
//   res.send('testing')
// });

//middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//user routes
app.use('/user', userRouter);

//post routes


//comment routes


app.listen(port, ()=>{
  console.log(`Blog API listening at port:${port}`)
});