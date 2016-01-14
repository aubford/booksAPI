var express = require('express');
var router = express.Router();

router.get('/books',function(req,res){
  res.render('books/index')
})

router.get('/books/new',function(req,res){
  res.render('books/new')
})

router.get('/books/:id/edit',function(req,res){
  res.render('books/edit')
})

router.get('/books/:id',function(req,res){
  res.render('books/show', {book: req.params.id})
})

router.post('/books/:id/delete',function(req,res){
  res.redirect('/books')
})




module.exports = router;
