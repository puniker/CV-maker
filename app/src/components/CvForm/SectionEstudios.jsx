import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import FormElements from '../FormElements'
import { useForm, useFieldArray } from "react-hook-form"
import {IconButton, Button, Alert, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Snackbar, Link} from '@mui/material'
import {Delete as DeleteIcon, Save as SaveIcon, ExpandMore as ExpandMoreIcon, KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material'
import { v4 as uuidv4 } from 'uuid';
import UserContext from '../../Context/UserContext'

function SectionGeneral (  ) {
    
    const {userId} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const [formItemCounter, setFormItemCounter] = useState( )

    useEffect( () => {
        
        axios.get( `${import.meta.env.VITE_API_URL}/api/cv-estudios`, {
            params: {
                userID: userId
            }
        })
        .then( (response) => {
            setFormItemCounter(response.data.length)
            setData( response.data )
            setIsLoading(false)
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }, [])


    const onSubmit = ( evt ) => {
        //console.log ( evt.estudios )

        axios.get(`${import.meta.env.VITE_API_URL}/api/cv-estudios/update`, {
            params: {
                user_id: userId,
                data: evt.estudios
            }
        })
        .then(function (response) {
            console.log(response);
            //setData(evt)
            setShowMsg(true)
            setTimeout(()=>{ setShowMsg(false) }, 3000)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed    code ...
        })
        
    }
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "estudios", // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
    })

    function fieldsNumberToArray() {
        return [...Array(parseInt(formItemCounter || 0)).keys()];
    }
    
    
    const addItem = () => {
        
        var order = 0
        if ( data.length > 0 ) {
            order = parseInt(data[ data.length - 1 ].orden)
        }

        setData([
            ...data, 
            {
                "id": `${uuidv4()}`,
                "orden": order + 1 ,
                "centro": "",
                "ciudad": "",
                "titulo": "",
                "fecha_inicio": "",
                "fecha_fin": "",
                "descripcion": ""
            }
        ])
        setFormItemCounter( formItemCounter + 1 )
        
    }
    
    const removeItem = (id) => {
        
        axios.get(`${import.meta.env.VITE_API_URL}/api/cv-estudios/delete`, {
            params: {
                id: id,
            }
        })
        .then(function (response) {
            console.log(response);
            //setData(evt)
            setFormItemCounter( formItemCounter - 1 )
            const values  = [...data];
            values.splice(values.findIndex(value => value.id === id), 1);
            setData(values);
            setShowMsg(true)
            setTimeout(()=>{ setShowMsg(false) }, 3000)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed    code ...
        })
        
    }
    
    const handleCloseAlert = () => {
        setShowMsg( false )
    }
    
    const upElement = ( id ) => {
        
        const values = [...data]
        
        const indexData = values.findIndex( (element) => element.id == id )
        
        values[ indexData - 1 ].orden = values[ indexData - 1 ].orden +1
        values[ indexData ].orden = values[ indexData ].orden -1
        
        values.sort(function(a, b) {
            if (a.orden < b.orden) return -1
            if (a.orden > b.orden) return 1
            return 0
        })
        
        setData(values)
        
    }
    
    const downElement = ( id ) => {
        
        const values = [...data]
        
        const indexData = values.findIndex( (element) => element.id == id )
        
        values[ indexData + 1 ].orden = values[ indexData + 1 ].orden - 1
        values[ indexData ].orden = values[ indexData ].orden + 1
        
        values.sort(function(a, b) {
            if (a.orden < b.orden) return -1
            if (a.orden > b.orden) return 1
            return 0
        })
        
        setData(values)
    }
    
    if ( isLoading ) {
        return <Alert key="loading-data" severity="info">Cargando tus datos...</Alert>
    }

    return (
        <>
            <Snackbar open={showMsg} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    Se han guardado tu datos
                </Alert>
            </Snackbar>
            <form className="" onSubmit={handleSubmit(onSubmit)} >

                { fieldsNumberToArray().map((i) => (
                
                    <Accordion key={`accordion_key_${data[i].id}`}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id={`panel${i}a-header`}
                        >
                            <Link onClick={() => upElement(data[i].id)}><KeyboardArrowUpIcon /></Link>
                            <Link onClick={() => downElement(data[i].id)}><KeyboardArrowDownIcon /></Link>
                            <Typography>{data[i].titulo}</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            
                            <div key={`academyc_form_${i}`} id={data[i].id}>
                                <Grid container spacing={2} >
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="ID"  
                                            name={`estudios.${i}.id`}
                                            defaultValue={data[i].id}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="orden"  
                                            name={`estudios.${i}.orden`}
                                            defaultValue={data[i].orden}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Carrera"  
                                            name={`estudios.${i}.titulo`}
                                            defaultValue={data[i].titulo}
                                            />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Centro"
                                            name={`estudios.${i}.centro`}
                                            defaultValue={data[i].centro}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Lugar"
                                            name={`estudios.${i}.lugar`}
                                            defaultValue={data[i].lugar}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='date'
                                            register={register}
                                            label="Fecha inicio"
                                            name={`estudios.${i}.fecha_inicio`}
                                            defaultValue={data[i].fecha_inicio}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormElements.Input 
                                            type='date'
                                            register={register}
                                            label="Fecha fin"
                                            name={`estudios.${i}.fecha_fin`}
                                            defaultValue={data[i].fecha_fin}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormElements.Input 
                                            type='textarea'
                                            register={register}
                                            label="Descipcion"
                                            name={`estudios.${i}.descripcion`}
                                            defaultValue={data[i].descripcion}
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
                                        <Link onClick={() => removeItem(data[i].id)} color="error">Eliminar elemento</Link>
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
