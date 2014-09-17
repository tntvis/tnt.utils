module.exports = {
    connect : function (from, to) {
	return function () {
	    return to(from.apply(this, arguments));
	};
    }
};
