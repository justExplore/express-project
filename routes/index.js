var express = require('express');
var router = express.Router();
var service = require('../model/service');

/* GET home page. */
router.get('/', function (req, res, next) {
    let sql = "select * from user";
    service.query(sql, [], function (result, fields) {
        console.log("result", result[1].id);
    });
    res.render('index.ejs', {title: 'Express'});
});

module.exports = router;
