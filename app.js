var app = require('koa')();
var path = require('path');
var ejs = require('koa-ejs');	
var router = require('koa-router');	
var koabody = require('koa-body')();	
var session = require('koa-session');
var staticfile = require('koa-static');

var routes = require('./routes/index.js');

app.keys = ['some secret hurr'];
ejs(app, {
	root : path.join(__dirname, 'views'),
	layout : false
})
app.use(session(app));
app.use(router(app));
app.use(staticfile(__dirname + '/public'));


routes(app, koabody);

app.listen(3000);
console.log('listenning on port 3000');
