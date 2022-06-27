import {useEffect, useRef, useState} from 'react'
import { useParams } from "react-router"
import VisualizacionPlantilla from "../components/VisualizacionPlantilla"
import {PictureAsPdf as PictureAsPdfIcon} from '@mui/icons-material'
import styled from 'styled-components'
import { Container } from "@mui/material"
import { getCurrentUser } from '../services/firebaseAuthService'
import { getAllData, getGeneral } from '../services/firestoreDatabaseService'
import { UserGeneralDataModel } from '../models/UserGeneralDataModel'
import { AllUserData } from '../interfaces/UserDataInterface'


const CvContainer = styled.article`
    max-width: 1000px;
    margin: 0px auto 100px auto;
`

function PlantillaPage (  ) {
    
    const { template_id } = useParams()
    const [userId, setUserId] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true);

    const [userData, setUserData] = useState<AllUserData>()

    useEffect(() =>{
        const uId = getCurrentUser().uid
        setUserId( uId );
        getAllData(uId).then((response: AllUserData) => {
            setUserData(response)
        })
        setLoading(false);
    }, []);

    if(loading) return <p>loading...</p>
    return (
        <>
            <CvContainer>            
                <h2>tu plantilla {template_id}</h2>
                <h2>id del usuario {userId}</h2>
                <p>Estamos trabajando en el sistema de plantillas {userData?.general.name} {userData?.general.surname}.</p>
                <p>cuando esté listo te avisaremos a tu teléfono: {userData?.general.telefono}</p>
            </CvContainer>
        </>
    )
    
}

export default PlantillaPage