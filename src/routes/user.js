/*
 * GET users listing.
 */
var i = 0;
exports.list = function(req, res) {
	res.json([
		{name: 'Bob ' + i++},
		{name: 'Bob ' + i++},
		{name: 'Bob ' + i++},
		{name: 'Bob ' + i++},
		{name: 'Bob ' + i++},
		{name: 'Bob ' + i++},
		{name: 'Bob ' + i++},
		{name: 'Bob ' + i++},
		{name: 'Bob ' + i++}
	]);
};
