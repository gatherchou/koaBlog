module.exports = function (app, koabody){
	app.get('/', koabody, function *(){
		yield this.render('index', {
			title:'KoaBlog',
			context:'这是一个使用Koajs框架搭建的简易博客'
		});
	});

	app.get('/reg', function *(){
		yield this.render('reg', {
			title: '注册'
		})
	})

	app.get('/login', function *(){
		yield this.render('login', {
			title: '登录'
		})
	})

	app.get('/post', function *(){
		yield this.render('post', {
			title: '注册'
		})
	})

	app.post('/reg', function *(){
		
	})

	app.post('/login', function *(){
		
	})

	app.post('/post', function *(){
		
	})

	// app.post('/login', koabody, function *(){
	// 	this.session.username = this.request.body.username
	// 	yield this.render('login', {
	// 		username:this.session.username//this.request.body.username
	// 	})
	// 	this.redirect('/');
	// })

}
