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
  const {comment_id} = req.params;
  commentService.read(comment_id)
  .then((data)=>{
    res.json(data)
  })
  .catch(err=>{
    res.json(err.toString())
  })
})

//PUT - update comment - PRIVATE
commentRouter.put('/:comment_id', (req, res)=>{
  const {comment_id} = req.params;
  const {title, body} = req.body;

  commentService.read(comment_id)
  .then(data =>{
    return commentService.update(comment_id, title, body)
    .then(data=>{
      res.json('comment updated!');
    })
    .catch(err=>{
      res.json(err.toString());
    })
  })
});

//DEL - delete comment - PRIVATE
commentRouter.delete('/:comment_id', (req, res)=>{
  const {comment_id} = req.params;
  // const {author, title, body}= req.body;

  commentService.read(comment_id)
  .then(data=>{
        return commentService.delete(comment_id)
      .then(data=>{
        res.json('comment deleted!')
      })
    })
  })
  // .catch(err=>{
  //   res.status(404).json(err.toString());
  // })
// })

module.exports = commentRouter;