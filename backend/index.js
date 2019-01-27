const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const userRouter = require('./routes/user')
const postRouter =require('./routes/post')
const commentRouter = require('./routes/comment')

//Global middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//user routes
app.use('/user', userRouter);

//post routes
app.use('/post', postRouter);

//comment routes
app.use('/comment', commentRouter);

app.listen(port, ()=>{
  console.log(`Blog API listening at port:${port}`)
});