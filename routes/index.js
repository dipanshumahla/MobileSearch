var express = require('express');
var router = express.Router();
var addnew = require('./new');
var search = require('./search');
var view = require('./view');

router.get("/", (req, res) => {
    res.render('index');
});

router.use('/new', addnew);
router.use('/search', search);
router.use('/view', view);

module.exports = router;