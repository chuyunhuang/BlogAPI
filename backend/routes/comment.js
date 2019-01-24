const express = require('express');

const commentRouter = express.Router();
const commentService = require('../services/comment')


//POST - create comment - PRIVATE
commentRouter.post('/', (req, res)=>{
  const {author, post_id, title, body} = req.body;

  commentService.create(author, post_id, title, body)
  .then(data =>{
    res.json(`comment: ${data} is created!`);
  })
  .catch(err=>{
    res.json(err.toString());
  })
});

//GET - read comment - PUBLIC
commentRouter.get('/:comment_id', (req, res)=>{

})

//PUT - update comment - PRIVATE
commentRouter.put('/:comment_id', (req, res)=>{

})

//DEL - delete comment - PRIVATE
commentRouter.delete('/:comment_id', (req, res)=>{

})

module.exports = commentRouter;