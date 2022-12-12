const express = require('express');
const router = express.Router();
const Lists = require('../models/Lists');
const { verifyToken } = require('../verifyToken');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/:id', verifyToken,(req, res, next) => {
  let medications = { ...req.body }
  console.log(medications)
  console.log(req.params.id)
  const list = new Lists({
    timestamp: Date.now(),
    username: req.params.id,
    medications: medications,
  })
  list.save()
    .then(() => res.status(201).json('medications saved'))
    .catch(err => res.status(400).json({ err }))

})
router.get("/:id", (req, res, next) => {
  let username = req.params.id
  const query = Lists.where({ username })
  query.find((err, obj) => {
    if (err) { console.error({ err }) }
    if (!obj) { res.status(204).json('no content') }
    else {
      res.status(200).json(obj)
    }
  })


})

module.exports = router;
