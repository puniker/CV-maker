import React, { useEffect, useState } from 'react'
import FormElements from '../FormElements'
import { useForm } from "react-hook-form"
import {IconButton, Button, Alert, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Snackbar, Link} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const datos_api = [
    {
        "id": 0,
        "order": 0,
        "centro": "ceinmark",
        "ciudad": "bilbao",
        "titulo": "desarrollo de aps",
        "fecha_inicio": "01-01-2001",
        "fecha_fin": "01-01-2001",
        "descripcion": "Aprendí a hacer apps"
    },
    {
        "id": 1,
        "order": 1,
        "centro": "colegio basauri",
        "ciudad": "basauri",
        "titulo": "bachi",
        "fecha_inicio": "01-01-2001",
        "fecha_fin": "01-01-2001",
        "descripcion": "no aprendí mucho"
    }
]


function SectionGeneral ( props ) {
    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const [fields, setFields] = useState( datos_api )

    const onSubmit = ( evt ) => {
        
        console.log( fields )
        
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    //if ( isLoading ) {
    //    return <Alert key="loading-data" variant="primary" show="true">Cargando tus datos...</Alert>
    //}

    const academicFields = {
        'titulo'      : [{"key":"0", "type": "text", "label":"Carrera"}],
        'ciudad'      : [{"key":"0", "type": "text", "label":"Ciudad/Pueblo"}],
        'centro'      : [{"key":"0", "type": "text", "label":"Centro"}],
        'descripcion' : [{"key":"0", "type": "text", "label":"Descripcion"}]
    }

    const addItem = () => {

        const order = fields[fields.length - 1 ].order

        setFields([
            ...fields, 
            {
                "id": `temp_${Math.floor( Math.random() * 10000 )}`,
                "order": order + 1,
                "centro": "",
                "ciudad": "",
                "titulo": "",
                "fecha_inicio": "",
                "fecha_fin": "",
                "descripcion": ""
            }
        ])

    }

    const removeItem = (id) => {

        const values  = [...fields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setFields(values);

    }

    const handleCloseAlert = () => {
        setShowMsg( false )
    }

    const upElement = ( id ) => {

        const values = [...fields]

        const indexData = values.findIndex( (element) => element.id == id )

        values[ indexData - 1 ].order = values[ indexData - 1 ].order +1
        values[ indexData ].order = values[ indexData ].order -1

        values.sort(function(a, b) {
            if (a.order < b.order) return -1
            if (a.order > b.order) return 1
            return 0
        })

        setFields(values)

    }

    const downElement = ( id ) => {

        const values = [...fields]

        const indexData = values.findIndex( (element) => element.id == id )

        values[ indexData + 1 ].order = values[ indexData + 1 ].order - 1
        values[ indexData ].order = values[ indexData ].order + 1

        values.sort(function(a, b) {
            if (a.order < b.order) return -1
            if (a.order > b.order) return 1
            return 0
        })

        setFields(values)
    }

    return (
        <>
            <Snackbar open={showMsg} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    Se han guardado tu datos
                </Alert>
            </Snackbar>
            <form className="" onSubmit={handleSubmit(onSubmit)} >

                { fields.map((item, index) => (
                
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id={`panel${index}a-header`}
                        >
                            <Link onClick={() => upElement(item.id)}><KeyboardArrowUpIcon /></Link>
                            <Link onClick={() => downElement(item.id)}><KeyboardArrowDownIcon /></Link>
                            <Typography>{item.titulo}</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            
                            <div key={`academyc_form_${index}`} id={item.id}>
                                <Grid container spacing={2} >
                                    <Grid item xs={12}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Carrera"  
                                            name={`${item.id}_titulo`}
                                            defaultValue={item.titulo}
                                            />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Centro"
                                            name={`${item.id}_centro`}
                                            defaultValue={item.centro}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Ciudad/Pueblo"
                                            name={`${item.id}_ciudad_pueblo`}
                                            defaultValue={item.ciudad}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='date'
                                            register={register}
                                            label="Fecha inicio"
                                            name={`${item.id}_fecha_inicio`}
                                            defaultValue={item.fecha_inicio}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='date'
                                            register={register}
                                            label="Fecha fin"
                                            name={`${item.id}_fecha_fin`}
                                            defaultValue={item.fecha_fin}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormElements.Input 
                                            type='textarea'
                                            register={register}
                                            label="Descipcion"
                                            name={`${item.id}_descripcion`}
                                            defaultValue={item.descripcion}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormElements.Checkbox
                                            name="ocultar_en_cv"
                                            register={register}
                                            label="Ocultar en el CV"
                                            defaultChecked={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Link onClick={() => removeItem(item.id)} color="error">Eliminar elemento</Link>
                                    </Grid>
                                </Grid>
                                
                            </div>
                        </AccordionDetails>
                    </Accordion>
                
                ))}

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button color="secondary" onClick={addItem}>Añadir elemento</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="success" type="submit" startIcon={<SaveIcon />}>Guardar datos</Button>
                    </Grid>
                </Grid>
            </form>


        </>
    )
}

export default SectionGeneral
