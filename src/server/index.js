const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(koaStatic(path.join(__dirname, '..', '..', 'build')));

app.listen(PORT);
