
import * as sequelize from 'sequelize'
import db from '../../db/db'

const fs = require('fs')

export async function getAllPdf (ctx) {
    var pathName = "E:/pdf/"
    let arr = []
    let a = new Promise((res,rej)=>{
        fs.readdir(pathName, async (err, files) => {
            return res(files)
        });
    })
    
    await a.then( e=>{
        arr=e
    })
    console.log(arr)

    return {
        arr,
        pathName
    }
}

