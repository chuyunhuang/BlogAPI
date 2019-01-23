//connecting DB for user, post, comment services

const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/blog');

module.exports = db;