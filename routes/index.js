var express = require('express');
var router = express.Router();
var controller = require('../controller/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  controller.loadPage().then((data)=>{
    console.log("success data", data)
    res.render('index', { title: 'Express' }); //page rendered upon success, found in (../views/indes.jade)
  }).catch(err=>{
    console.log(err)
  })
});

module.exports = router;


