const mysql = require('mysql');
const offline = true;
let db;

if(offline) {
    db = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'ds3messages'
    });
    
    db.connect((err) => {
        if (err) throw err;
        console.log('connected offline');
    });    
} else {
    db = mysql.createConnection({
        host: '34.105.128.223',
        user: 'root',
        password: 'ds3online',    
        port: 3306
    });
    
    db.connect((err) => {
        if (err) throw err;
        console.log('connected online');
    });
};

module.exports.db = db;