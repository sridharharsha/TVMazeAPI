var superagent = require('superagent');

module.exports = function (app) {
	app.get('/api/:type', function (req, res) {

		superagent
			.get('http://api.tvmaze.com/search/shows?q='+req.query.name)
			.query({ json : true })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}
					res.json(response);
			});
	});

	app.get('/api/shows/:id',function (req,res) {
		superagent
				.get('http://api.tvmaze.com/shows/' + req.params.id+'?embed=cast')
				.end(function (err,response) {
					if (err) {
						return res.send(err);
					}
					res.json(JSON.parse(response.text));
				});
	});
}
