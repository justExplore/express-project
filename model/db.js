let mysql = require('mysql');
var databaseConfig = require('../config/mysql.config');

module.exports = {
    query: function (sql, params, callback) {
        let connection = mysql.createConnection(databaseConfig);
        connection.connect(function (err) {
            if (err) {
                console.log("数据库连接失败");
                throw err;
            }
        });
        connection.query(sql, params, function (err, result, fields) {
            if (err) {
                console.log("数据库操作失败");
                throw err;
            }
            callback && callback(result, fields);

            connection.end(function (err) {
                if (err) {
                    console.log("关闭数据库连接失败");
                    throw err;
                }
            })
        });
    }
};