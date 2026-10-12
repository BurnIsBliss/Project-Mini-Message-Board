const { Router } = require('express');
const indexRouter = Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amanda',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

indexRouter.get('/', (req, res) => {
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

indexRouter.get('/new', (req, res) => {
	res.render('form');
});

indexRouter.post('/new', (req, res) => {
	console.log(req.body);
	res.status(201);
	res.render('form');
});

module.exports = indexRouter;
