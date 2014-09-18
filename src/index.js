// require('fs').readdirSync(__dirname + '/').forEach(function(file) {
//     if (file.match(/.+\.js/g) !== null && file !== __filename) {
// 	var name = file.replace('.js', '');
// 	module.exports[name] = require('./' + file);
//     }
// });

// Same as
module.exports.utils = require("./utils.js");
module.exports.utils.connect = require("./connect.js");
module.exports.utils.reduce = require("./reduce.js");