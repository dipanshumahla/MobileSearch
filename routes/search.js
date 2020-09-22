var express = require('express');
var router = express.Router();
var mobiles = require('../helper/mobiles');

router.get("/", (req, res) => {

    var data = mobiles.getAllProducts();

    var response = { data: data };

    if (data.length < 1) response.status = false;
    else response.status = true;

    res.render('search', response);
});

router.post('/', (req, res) => {
    var query = req.body.search;
    var data = mobiles.searchProduct(query);

    var response = { data: data };

    if (data.length < 1) response.status = false;
    else response.status = true;

    res.render('search', response);
});

module.exports = router;