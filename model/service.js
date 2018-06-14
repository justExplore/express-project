var db = require('./db');

module.exports = {
    query: function (sql, params, callback) {
        db.query(sql, params, function (result, fields) {
            callback(result, fields);
        });
    }
};
