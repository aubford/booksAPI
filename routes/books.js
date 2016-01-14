var express = require('express');
var router = express.Router();
var unirest = require('unirest');
require('dotenv').load();


var apistring = "http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=" + process.env.NYT_API_KEY;

router.get('/books',function(req,res){
  unirest.get(apistring).end(function(response){
    res.render('books/index', {
      books: response.body.results.books
    })
  });
})

router.get('/books/new',function(req,res){
  res.render('books/new')
})

router.get('/books/:id/edit',function(req,res){
  res.render('books/edit')
})

router.get('/books/:id',function(req,res){
  unirest.get(apistring).end(function(response){
    response = response.body.results.books;
    var thisbook;

    response.forEach(function(b){
      if (b.primary_isbn13 === req.params.id)
        thisbook = b
    })

    console.log(thisbook)
    res.render('books/show', {
      book: thisbook
    })
  });
})

router.post('/books/:id/delete',function(req,res){
  res.redirect('/books')
})




module.exports = router;
