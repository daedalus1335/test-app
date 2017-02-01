var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

//MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.post('/', function (req, res) {
  res.render('posts-index', posts)
})

[
    {body: "randomThings"},
    {body: "otherStuff"},
    {body: "otherRandomStuff"}
]

app.listen(process.env.PORT || 3000);
