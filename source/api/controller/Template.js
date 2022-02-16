const twig = require('twig')
const { CvFullData } = require('../models/cv-data')
const {GetTemplate} = require('../models/template')
var path = require("path")


const RenderTemplate = async ( template_id, user_id ) => {
    

    const TRoutes = await TemplateRoutes(template_id)
    return new Promise(resolve => {
        CvFullData(user_id, (r) => {
            twig.renderFile(
                TRoutes.twig, 
                {
                    data: r
                }, 
                async (err, html) => {
                    html = await TemplateHtmlBuild(TRoutes, html)
                    resolve( html ) 
                } 
            )
        })
    })
    
}

const TemplateRoutes = async ( template_id ) => { 
    
    const output = {
        "id": template_id
    }
    const template_data = await GetTemplate(template_id)
    output.html = path.resolve(`templates/${template_data.machine_name}/${template_data.machine_name}.html`)
    //output.css  = path.resolve(`templates/${template_data.machine_name}/${template_data.machine_name}.css`)

    return new Promise((resolve) => {
        resolve(output)
    })

}

const TemplateHtmlBuild = ( rutas, body ) => {

    //console.log(rutas)
    const htmlOutput = `
        <!DOCTYPE html>
        <html lang="es"> 
            <head>
                <title>Pillar - Bootstrap 5 Resume/CV Template for Developers</title>
                
                <!-- Meta -->
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="Responsive Resume Template">
                <meta name="author" content="Xiaoying Riley at 3rd Wave Media">    
                <link rel="shortcut icon" href="favicon.ico"> 
                
                <!-- Google Font -->
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">

                <!-- Theme CSS -->  
                <link id="theme-style" rel="stylesheet" href="${rutas.css}">
            </head> 
            ${body}
        </html>
    `
    return new Promise((resolve) => {
        resolve(htmlOutput)
    })
    

}

module.exports = {RenderTemplate, TemplateRoutes}
