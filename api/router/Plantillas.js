const express = require('express')
const {TemplatesList, GetTemplate} = require('../models/template')
const {RenderTemplate} = require('../controller/Template')

const app = express()


// This section is optional and used to configure twig.
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get('/plantillas', async (req, res) => {
    
    const results = await TemplatesList()

    res.json ( results ) 
    
})

app.get('/render-plantilla', async (req, res) => {
    
    const user_id = req.query.user_id
    const template_id = req.query.template_id
    
    const template = await GetTemplate(template_id)

    if ( template ) {
        const html = await RenderTemplate(template.twig_url, user_id)
        res.json( {"html": html} ) 

    } else {
        res.json( {"error": "No se ha encontrado la plantilla", "html": ""} ) 
    }
    
})


module.exports = app