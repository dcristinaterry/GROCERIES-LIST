const express = require("express");
const exphbs = require("express-handlebars")

let app = express();
let PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"))

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/api-routes.js");

app.use(routes);


app.listen(PORT, function(err){
    if(err) throw err;
    console.log("starting on port: " , PORT);
})
