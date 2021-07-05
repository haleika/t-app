
import { readFile } from './util'
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser'
import passport  from 'koa-passport'
import cors from 'koa2-cors'

let app = new Koa();
app.use(bodyParser());
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
require('./util/passport')(passport)

const res = readFile(process.cwd() + '/router')
const mainRouter = new Router()
for(let file of res){
    const mod = require(file)
    Object.keys(mod).forEach(key => {
        if (mod[key] instanceof Router) {
            mainRouter.use(mod[key].routes()).use(mod[key].allowedMethods())
        }
    })
}

const port = process.env.PORT || 5000

app.use(mainRouter.routes()).use(mainRouter.allowedMethods())

app.listen(port,() => {
    console.log(`http://localhost:${port}/`);
})

