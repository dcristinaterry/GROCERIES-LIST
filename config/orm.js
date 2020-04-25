var connection = require("./connection.js")

var orm = {
    all: function(table, cb){
        let queryStatement = "select * from ??";
        connection.query(queryStatement, table, function(err, result){
            
            console.log("search all", queryStatement)
            if(err){
                throw err;
            }
            cb(result);
        })
    },

    searchOne: function(table, objectValue, cb){
        let queryStatement = "select * from ?? where ?";
        
       var showConnection= connection.query(queryStatement, [table, objectValue], function(err, result){
            console.log("search one", queryStatement)
            if(err){
                throw err;
            }
            cb(result);
           
        })
        console.log("printing connection", showConnection.sql)
    }, 

    insert: function(table, objectValues,cb){
        let queryStatement = "insert into ?? set ?";
       var showConnection=  connection.query(queryStatement, [table, objectValues], function(err, result){
            if(err){
                throw err;
            }
            
            console.log("printing insert", showConnection.sql)
            cb(result);
        })
    },
    update: function(table, objectValue, conditionValue, cb){
        let queryStatement = "update ?? set ? where ?";
        connection.query(queryStatement, [table, objectValue, conditionValue], function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },
    delete: function(table, conditionValue, cb){
        let queryStatement = "delete from ?? where ?";
        connection.query(queryStatement, [table, conditionValue], function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    }


}

module.exports = orm;