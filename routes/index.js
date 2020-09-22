var express = require('express');
var router = express.Router();
var addnew = require('./new');

router.get("/", (req, res) => {
    res.render('index');
});

router.use('/new', addnew);

module.exports = router;