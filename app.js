var Koa = require('koa'),
    serve = require('koa-static');

var app = new Koa();

app.use(serve('./dist'));

app.listen(3000, () => {
    console.log('listening...');
})
