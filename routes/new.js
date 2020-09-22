var express = require('express');
var router = express.Router();
var validater = require('../helper/validate');
var mobiles = require('../helper/mobiles');

router.get("/", (req, res) => {
    res.render('new', { status: null });
});

router.post('/', (req, res) => {
    var data = req.body;
    data.features = data.features.split(';');
    var verify = validater.validateData(data);


    var response = {};
    if (verify.error) {
        response.status = false;
        console.log(verify.error.details)
    } else {
        response.status = true;
        mobiles.addProduct(data);
    }

    res.render('new', response);
});

module.exports = router;