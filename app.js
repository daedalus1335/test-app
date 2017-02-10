var express = require('express');
var exphbs  = require('express-handlebars');
var Post = require('../testapp/models/post.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/testapp');

var app = express();

//MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/posts', function (req, res) {
    var posts = []
    // TODO use Post.find() function
    res.render('posts-index', {posts: posts});
    //res.send('posts-index')
});

app.post('/posts', function (req, res) {
    var post = new Post(req.body);
    post.save(function (err) {
        // if (err) {return res.send('eeror!')}

        res.send(post);
    })
    //res.render('posts-index', {posts: posts});
    //console.log(req.body)
    //res.send("ok")
});

app.listen(process.env.PORT || 3000);

//testing for github
