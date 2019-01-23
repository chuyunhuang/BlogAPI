//Require DB 
const db = require('../services/dbConnect')

const postService = {};

postService.create = (author, title, body) =>{
  return db.none('INSERT INTO posts (author, title, body) VALUES (${author}, ${title}, ${body})', {author, title, body})  
}

postService.read = (id) =>{
 return db.one('SELECT * FROM posts WHERE id = ${id}', {id})
}

postService.update = (id, title, body)=>{
  return db.none('UPDATE posts SET title =${title}, body= ${body} WHERE id = ${id}', {id, title, body})
}

//Deleting post DOES NOT delete the user, but deletes the comments as well
postService.delete =(id)=>{
  return db.none('DELETE FROM posts WHERE id = ${id}', {id})
}



module.exports = postService;