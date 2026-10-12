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
	messages.push({
		text: req.body.messageText,
		user: req.body.name,
		added: new Date(),
	});
	res.status(201);
	res.redirect('/');
});

indexRouter.get('/message/:messageId', (req, res) => {
	const { messageId } = req.params;
	res.render('singleMessage', { message: messages[messageId] });
});

module.exports = indexRouter;
