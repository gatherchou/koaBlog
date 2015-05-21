var koa = require('koa');
var render = require('koa-ejs');

var app = koa();
render(app, {
	root: path.join(__dirname, 'view'),
	layout: 'template',
	viewExt: 'html',
	cache: false,
	debug: true,
	filters: filters
});

app.use(function *() {
	yield this.render('user');
});

app.listen(7001);