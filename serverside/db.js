const mysql = require('mysql')  // import java.sql.mysql

function connect1()
{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'MrTracker',
        port: 3306
    })

    connection.connect()
    return connection
}

module.exports = {
    connect1: connect1
}

