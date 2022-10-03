import mysql from "mysql2"

const db = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : 'ebdb'
});

// db.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database.');
// });
db.connect()

export default db




//old working version
// const db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'Harderwijker-78',
//     port     : 3306,
//     database : 'socialmedia'
//   });

// db.connect()

// export default db


