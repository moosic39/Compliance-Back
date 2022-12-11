const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users',(req,res,next)=>{
  res.status(418).json('hey hey, i loved mister tea')
})


module.exports = router;
