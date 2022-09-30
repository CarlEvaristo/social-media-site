import mysql from "mysql2"

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Harderwijker-78',
    port     : 3306,
    database : 'socialmedia'
  });

  // db.connect()

export default db