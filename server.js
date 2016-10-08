require('babel-register')({
  presets : ['react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Component = require('./App.jsx');

app.use(express.static("public"));


//Some Dummy Data to render.

var Data1 = ['madam', 'ratsstar'];

var Data = 'HELLO';


app.get('/', function(req,res){

  //Bring in the Main React component and render it.


//Get the data from the top, and put it into a props variable.
var props = {data : Data1}

var MainComponent = ReactDOMServer.renderToString(React.createElement(Component, props));

  res.send(MainComponent);

});

app.listen('3000', function(){
  console.log('Listening on PORT 3000');
})
