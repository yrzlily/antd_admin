const Koa = require('koa');

const app = new Koa();

app.use(async(ctx, next) => {
    await next();
    ctx.response.type = 'applicaon/json';
    ctx.response.body = '<h1>Open</h1>';
})

app.listen(3000);
console.log('listent start')