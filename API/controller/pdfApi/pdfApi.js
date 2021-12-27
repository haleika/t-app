import * as api from '../../api/pdfApi/pdfApi'

export async function getAllPdf(ctx) {
    let data = await api.getAllPdf(ctx)
    ctx.body = data
}

