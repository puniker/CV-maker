const twig = require('twig')
const { CvFullData } = require('../models/cv-data')
const {GetTemplate} = require('../models/template')
var path = require("path")


const RenderTemplate = ( template_url, user_id ) => {
    
    const twigPath = path.resolve(`templates/${template_url}`)
    //TemplateRoutes(2)
    return new Promise(resolve => {
        CvFullData(user_id, (r) => {
            twig.renderFile(
                twigPath, 
                {
                    data: r
                }, 
                (err, html) => {
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
    output.twig = path.resolve(`templates/${template_data.twig_url}`)
    output.css = path.resolve(`templates/${template_data.twig_url}`)

    console.log( output )

}

module.exports = {RenderTemplate}
