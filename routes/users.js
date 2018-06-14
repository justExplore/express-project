var express = require('express');
var router = express.Router();
var service = require('../model/service');

/* GET users listing. */
router.get('/', function (req, res, next) {
    let sql = "select * from user";
    service.query(sql, [], function (result, fields) {
        console.log("result", result);
        res.send(result);
    });
});

module.exports = router;
