var users = require('./users');
const user = require('../node_models/user');

module.exports = function (app) {
	app.get('/user/get/:username', (req, res) => {
		user.getUsers(req.params.username, (err, data) => {
			res.json(data);
		});
	});

	app.put('/users/create', (req, res) => {
		const userData = {
			id: null,
			username: req.query.username,
			email: req.query.email,
			status: req.query.status,
			remember_token: req.query.remember_token,
			password: req.query.password
		};

		user.insertUser(userData, (err, data) => {
			if(data){
				res.json({
					status_code: 0
				})
			}
		})
	});

	app.post('/users/activate', (req, res) => {
		const userData = {
			id: null,
			username: req.query.username
		};

		user.activateUser(userData, (err, data) => {
			if(data){
				res.json({
					status_code: 0
				})
			}
		})
	});

	app.post('/users/desactivate', (req, res) => {
		const userData = {
			id: null,
			username: req.query.username
		};

		user.desactivateUser(userData, (err, data) => {
			if(data){
				res.json({
					status_code: 0
				})
			}
		})
	});
}