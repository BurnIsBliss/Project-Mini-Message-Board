const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');

const path = require('node:path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, (err) => {
	if (err) throw err;
	console.log('Server running successfully on PORT:', PORT);
});
