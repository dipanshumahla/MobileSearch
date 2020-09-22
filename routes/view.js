var express = require('express');
var router = express.Router();
var mobiles = require('../helper/mobiles');

router.get("/:id", (req, res) => {

    var id = req.params.id;
    mobiles.getProduct(id).then(data => {
        var response = { data: data };
        if (data != null) response.status = true;
        else response.status = false;

        res.render('view', response);
    });

});

module.exports = router;