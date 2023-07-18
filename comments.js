// Create web server
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var comments = require('../comments.json');

// GET comments
router.get('/', function(req, res){
    res.send(comments);
});

// POST comment
router.post('/', function(req, res){
    var comment = {
        id: Date.now(),