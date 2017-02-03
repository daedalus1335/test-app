var express = require('express');
var exphbs  = require('express-handlebars');
var Post = require('../testapp/models/post.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testapp');

var app = express();

//MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

//Routes
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/posts', function (req, res) {
    var posts = []
    res.render('posts-index', {posts: posts});
});

app.listen(process.env.PORT || 3000);
