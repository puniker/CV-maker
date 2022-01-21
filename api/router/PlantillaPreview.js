const express = require('express')
const pdf = require("pdf-creator-node")
const fs = require("fs")
const {TemplateRoutes} = require('../controller/Template')
const { CvFullData } = require('../models/cv-data')

const app = express()


var pdfFormat = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
}

app.use('/', async (req, res) => {
    
    const html_route = await TemplateRoutes(1)

    var html = fs.readFileSync(html_route.html, "utf8")

    CvFullData(2, (data) => {
        console.log( data )
        var document = {
            html: html,
            data: data,
            path: "./output.pdf",
            type: "",
        }

        pdf.create(document, pdfFormat)
        .then((response) => {
            console.log(response);
            res.send('pdf generado correctamente')
        })
        .catch((error) => {
            console.error(error);
            res.send('no se ha podido generar pdf correctamente')
        })
    })



})


module.exports = app