const express = require("express");
const app = express();
const engine = require("ejs-locals");
const login_form = require('./route/login_form');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.static("./"));
app.engine('ejs', engine);
app.set("view engine" , "ejs");
app.set("views",__dirname+"/public/views");

app.use('/',login_form);

app.listen(PORT,()=>{
    console.log("Server running on 127.0.0.1:"+PORT);
})
// just for show changes on heroku