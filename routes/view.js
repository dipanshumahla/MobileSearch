var express = require('express');
var router = express.Router();
var mobiles = require('../helper/mobiles');

router.get("/:id", (req, res) => {

    var id = req.params.id;
    mobiles.getProduct(id).then(data => {
        console.log(data);

        var response = { data: data };

        if (data.length < 1) response.status = false;
        else response.status = true;

        res.render('view', response);
    });

});

module.exports = router;