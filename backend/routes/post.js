const express = require('express');

const postRouter = express.Router();

const postService = require('../services/post')


//POST - create post - PRIVATE
postRouter.post('/', (req, res) => {
  const {
    author,
    title,
    body
  } = req.body;

  postService.create(author, title, body)
    .then(() => {
      res.json('post created!');
    })
    .catch(err => {
      res.json(err.toString());
    })
});

//GET - read post - PUBLIC
postRouter.get('/:post_id', (req, res) => {
  const {
    post_id
  } = req.params;
  console.log(req.params)

  postService.read(post_id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err.toString());
    })
});

postRouter.get('/:post_id/comments', (req, res) => {

})

postRouter.get('/:post_id/comments/:comment_id', (req, res) => {

})

//PUT - update post - PRIVATE
postRouter.put('/:post_id', (req, res) => {
  const {post_id} = req.params;
  const {title, body} = req.body;

  postService.update(post_id, title, body)
  .then((data)=>{
    res.json(`post is updated ${data}`);
  })
  .catch(err=>{
    res.json(err.toString());
  })
});

//DELETE - delete post - PRIVATE
postRouter.post('/:post_id', (req, res) => {
  const {post_id}= req.params;
  console.log(req.params);

  postService.delete(post_id)
  .then(()=>{
    res.json(`post with id ${post_id} is deleted!`);
  })
  .catch(err=>{
    res.json(err.toString());
  })

});

module.exports = postRouter;