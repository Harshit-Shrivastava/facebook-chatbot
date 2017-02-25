'use strict'

const express = require('express');
const bosyParser = require('bosy-parser');
const request = require('request');

const app = express();

//Allows us to preocess data
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json())

//Creating routes
app.get('/', function(req, res){
	res.send("Hi, I am a chatbot");
})

//Facebook route
app.get('/webhook/', function(req, res){
	if(req.query['hub.verify_token'] == "HowdyHello"){
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token");
});

app.listen(app.get('port', function() {
	console.log("Server running");
}))