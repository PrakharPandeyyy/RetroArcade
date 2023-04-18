const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const path = require('path')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + "/public"));
app.use('/img', express.static(__dirname + "/img"));
app.use('/js', express.static(__dirname + "/js"));
app.use('/Games', express.static(__dirname + "/Games"));

app.use(bodyParser.urlencoded({
  extended: true
}));




app.get("/",function(req,res){
  res.render("index");
});
app.get("/indexH",function(req,res){
  res.render("indexH");
});

app.get("/login_1",function(req,res){
  res.render("login_1");
});

app.get("/regi",function(req,res){
    res.render("regi");
});
app.get("/index_regi",function(req,res){
  res.render("index_regi");
});

////////////////////////////// get fot games////////////////////////////

app.get("/target_snake",function(req,res){
  res.render("target_snake");
});
app.get("/target",function(req,res){
  res.render("target");
});
app.get("/target_rex",function(req,res){
  res.render("target_rex");
});
app.get("/target_hex",function(req,res){
  res.render("target_hex");
});

app.get("/target_flappy",function(req,res){
  res.render("target_flappy");
});
app.get("/target_type",function(req,res){
  res.render("target_type");
});
app.get("/target_bounce",function(req,res){
  res.render("target_bounce");
});
app.get("/target_pong",function(req,res){
  res.render("target_pong");
});
app.get("/target_mario",function(req,res){
  res.render("target_mario");
});
app.get("/target_2048",function(req,res){
  res.render("target_2048");
});
app.get("/target_tetris",function(req,res){
  res.render("target_tetris");
});

app.get("/target_snake1",function(req,res){
  res.render("target_snake1");
});
app.get("/target_tower",function(req,res){
  res.render("target_tower");
});
app.get("/target_race",function(req,res){
  res.render("target_race");
});
app.get("/target_show",function(req,res){
  res.render("target_show");
});

////////////////////////////////////////////////////////////////////////
app.listen(3000,function(req,res){
    console.log("Server is Running on port:3000");
});