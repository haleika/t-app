import Router from 'koa-router'
import * as pdfapi from '../../controller/pdfApi/pdfApi'

const pdfApi = new Router({
    prefix: '/v1/pdfApi'
})

pdfApi.get('/getAllPdf', async (ctx) => {
    await pdfapi.getAllPdf(ctx)
})


module.exports = {
    pdfApi
}