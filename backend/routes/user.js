const express = require('express');
const userRouter = express.Router();
const userService = require('../services/user')

//POST - create user - PUBLIC
userRouter.post('/', (req, res)=>{
  const {username, email, password} = req.body;
  
  userService.create(username, email, password)
  .then(()=>{
    res.json({ success: `user with name ${username} created!`})
  })
  .catch(err=>{
    res.json(err.toString());
  })
});

userRouter.post('/login',(req, res)=>{

})

//GET - read user by id - PUBLIC
userRouter.get('/:user_id', (req, res)=>{
  const {user_id} = req.params;
  console.log (req.params)

  userService.read(user_id)
    .then(data =>{
      res.json(data);
    })
    .catch(err =>{
      res.json(err.toString());
    })
});
//GET - read post by user id - PUBLIC
userRouter.get('/:user_id/posts', (req, res)=>{

})

userRouter.get('/:user_id/posts/:post_id', (req,res)=>{

})

userRouter.get('/:user_id/comments', (req, res)=>{

})

userRouter.get('/:user_id/comments/:comments_id', (req, res)=>{

})

//PUT - update user - PRIVATE
userRouter.put('/:user_id', (req, res)=>{
  const {user_id} = req.params;
  const {username, email, password} = req.body;

  userService.update(user_id, username, email, password)
  .then(()=>{
    res.json({Success: `User with name ${username} updated!`});
  })
  .catch(err=>{
    res.json(err.toString());
  })
});
 
//DELETE - delete user - PRIVATE
userRouter.delete('/:user_id', (req , res)=>{
  const {user_id} = req.params;

  userService.delete(user_id)
  .then(()=>{
    res.json({success: `User with ID: ${user_id} deleted.`});
  })
  .catch(err=>{
    res.json(err.toString());
  })
});



module.exports = userRouter;