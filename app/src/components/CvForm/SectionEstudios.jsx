import React, { useEffect, useState } from 'react'
import FormElements from '../FormElements'
import { useForm } from "react-hook-form"
import {IconButton, Button, Alert, Accordion, AccordionSummary, AccordionDetails, Typography, Grid} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const datos_api = [
    {
        "id": 0,
        "centro": "ceinmark",
        "ciudad": "bilbao",
        "titulo": "desarrollo de aps",
        "fecha_inicio": "01-01-2001",
        "fecha_fin": "01-01-2001",
        "descripcion": "Aprendí a hacer apps"
    },
    {
        "id": 1,
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

    const onSubmit = ( evt ) => {
        
        console.log( fields )
        console.log( evt )
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


    const [fields, setFields] = useState( datos_api )


    const addItem = () => {

        setFields([
            ...fields, 
            {
                "id": `temp_${Math.floor( Math.random() * 10000 )}`,
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
    return (
        <>
            { ( showMsg ) ? <Alert key="error-msg" severity="success" show={showMsg}>Se han guardado tus datos.</Alert> : '' }
            <form className="" onSubmit={handleSubmit(onSubmit)} >

                { fields.map((item, index) => (
                
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id={`panel${index}a-header`}
                        >
                            <Typography>{item.titulo}</Typography>

                            <IconButton aria-label="delete" onClick={() => removeItem(item.id)}>
                                    <DeleteIcon />
                            </IconButton>
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
                            </Grid>
                            <Grid container spacing={2}>
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
                            </Grid>
                            <Grid container spacing={2}>
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
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormElements.Input 
                                        type='textarea'
                                        register={register}
                                        label="Descipcion"
                                        name={`${item.id}_descripcion`}
                                        defaultValue={item.descripcion}
                                    />
                                </Grid>
                            </Grid>
                                </div>
                        </AccordionDetails>
                    </Accordion>
                
                ))}


                <Button color="secondary" onClick={addItem}>Añadir elemento</Button>
                <br />
                <br />
                <Button variant="contained" color="success" type="submit" startIcon={<SaveIcon />}>Guardar datos</Button>
            </form>


        </>
    )
}

export default SectionGeneral
