require ('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
}
);
let sql = 'SELECT * FROM users';

connection.execute(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    result.forEach(function (row) {
        console.log(row.name);
    }
    );
}
);

module.exports = connection;