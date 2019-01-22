const express = require('express')

const app = express();

let port = 3000;

app.get('/', (req, res)=>{
  res.send('testing')
});


app.listen(port, ()=>{
  console.log(`server listening at port:${port}`)
});