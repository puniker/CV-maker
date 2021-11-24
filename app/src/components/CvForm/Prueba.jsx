import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FormElements from '../FormElements'
import { useForm, useFieldArray } from "react-hook-form"
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


function Prueba ( {user = 2} ) {
    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [showMsg, setShowMsg] = useState(false)
    
    //const [fields, setFields] = useState(  )

    useEffect( () => {
        
        axios.get( 'http://localhost:3080/api/cv-estudios', {
            params: {
                userID: user
            }
        })
        .then( (response) => {
            setData( response.data )
            setIsLoading(false)
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }, [])


    
    const addItem = () => {
        
        const order = data[data.length - 1 ].order
        
        setData([
            ...data, 
            {
                "id": `${Math.floor( Math.random() * 10000 )}`,
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
    
    
    const handleCloseAlert = () => {
        setShowMsg( false )
    }
    
    
    //const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { control, register, handleSubmit } = useForm();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "test", // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
    })


    const [number, setNumber] = useState(2)

    const onSubmit = ( evt ) => {

        console.log ( evt )
    }

    // return array of ticket indexes for rendering dynamic forms in the template
    function fieldsNumber() {
        return [...Array(parseInt(number || 0)).keys()];
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

                { fieldsNumber().map((i) => (
                
                    <div key={Math.random()}>
                        <Typography>{data[i].titulo}</Typography>
                        
                        <div key={`academyc_form_${i}`} id={data[i].id}>
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    texto
                                    <input type="text" {...register(`test.${i}.texto`)} />
                                </Grid>
                                <Grid item xs={6}>
                                    desc
                                    <input type="text" {...register(`test.${i}.desc`)} />
                                </Grid>
                            </Grid>
                            
                        </div>
                    </div>
                
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

export default Prueba
