//Require DB
const db = require('./dbConnect')

const commentService = {};

commentService.create = (author, post_id, title, body) =>{
  return db.none('INSERT INTO comments (author, post_id, title, body) VALUES (${author}, ${post_id}, ${title}, ${body})', {author, post_id, title, body})
}

commentService.read = (id)=>{
  return db.one('SELECT * FROM comments where id = ${id}', {id})

}

commentService.update = (id, title, body)=>{
  return db.none('UPDATE comments SET title =${title}, body = ${body} where id = ${id}', {title, body, id})
}

commentService.delete = (id)=>{
  return db.result('DELETE FROM comments where id = ${id}', {id})

}

module.exports = commentService ;
