const cvDataModel = require('../models/cv-data')
const fs = require('fs')
const express = require('express')
const twig = require('twig')
var path = require("path")

const file = require('../data/plantillas.json')

const app = express()


// This section is optional and used to configure twig.
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get('/plantillas', (req, res) => {
    
    res.json ( file ) 
    
})

app.get('/render-plantilla', (req, res) => {
    
    const user_id = req.query.user_id
    const template_id = req.query.template_id
    
    const template = file.find( (element) => element.id == template_id )
    //console.log( template )
    const twigPath = path.resolve(`templates/${template.twig}`)
    
    cvDataModel.full_data(user_id, (r) => {
        console.log( r )
        //console.log( cvdata, twigPath )
        twig.renderFile(
            twigPath, 
            {
                data: r.general
            }, 
            (err, html) => {
                //console.log( html )
                res.json( {"html": html} ) 
            } 
        )
    })
})


module.exports = app