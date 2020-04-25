let mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "groceries_list",
    password: "password"

})

connection.connect(function(err){
    if(err) throw err;
    console.log("connected to db", connection.threadId)

})

module.exports = connection;