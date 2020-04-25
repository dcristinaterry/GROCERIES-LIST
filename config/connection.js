let mysql = require("mysql")

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     database: "groceries_list",
//     password: "password"

// })


var connection = mysql.createConnection({
    host: "op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "xms7nfwgy4jbwwgz",
    database: "wha636dm781fzc3i",
    password: "vxy93lqz2v2rxsqx"
})

connection.connect(function(err){
    if(err) throw err;
    console.log("connected to db", connection.threadId)

})

module.exports = connection;