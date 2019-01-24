//Require DB
const db = require('./dbConnect')

const commentService = {};

commentService.create = (author, post_id, title, body) =>{
  return db.none('INSERT INTO commments (author, post_id, title, body) VALUES (${author}, ${post_id}, ${title}, ${body})', {author, post_id, title, body})
}

commentService.read = ()=>{

}

commentService.update = ()=>{

}

commentService.delete = ()=>{

}

module.exports = commentService ;
