//require DB
const db = require('./dbConnect');

//Define user service functions
const userService = {};

userService.create = (username, email, password)=>{
  return db.none('INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})', {username, email, password})
}


userService.read = (id)=>{
  return db.one('SELECT username FROM users WHERE id = ${id}', {id})
}

userService.readPW = (id) =>{
  return db.one('SELECT username, password FROM users WHERE id = ${id}', {id})
}

userService.readPost =(id) =>{
  return db.one('SELECT posts FROM users JOIN posts ON users.id = posts.author WHERE users.id = ${id}', {id})
}

userService.update = (id, username, email, password)=>{
  return db.none('UPDATE users SET username=${username}, email=${email}, password= ${password} WHERE id=${id}', {id, username, email, password})

}
userService.updateToken = (token, id)=>{
  return db.none('UPDATE users SET token = ${token} WHERE id = ${id}', {token, id})
}
userService.delete =(id) =>{
  return db.none('DELETE FROM posts WHERE author = ${id} ; DELETE FROM users WHERE id =${id}', {id});
}




module.exports = userService;