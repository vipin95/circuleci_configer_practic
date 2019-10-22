const express = require("express");
const app = express.Router();

app.get('/',(req,res)=>{
    res.redirect('/login');
})
app.get('/login',(req,res)=>{
    res.render('loginForm.ejs');
    res.end();
})
app.get('/signUp',(req,res)=>{
    res.render('registration.ejs');
    res.end();
})
app.get('/auth',(req,res)=>{
    res.send("auth process....");
    res.end();
})
app.get('/user_profile',(req,res)=>{
    res.send("user is login");
    res.end();
})
app.get('/logout',(req,res)=>{
    res.send("user logout");
    res.end();
})

module.exports = app;