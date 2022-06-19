import { Alert, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { TemplateDataModel } from "../models/TemplateDataModel"
import { getAllTemplates } from "../services/firestoreTemplatesService"

export default () => {

    const [templates, setTemplates] = useState<TemplateDataModel[]>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect( () => {
        getAllTemplates().then((response: TemplateDataModel[]) => {
            setTemplates(response)
            setIsLoading(false)
        })
    }, [])

    if ( isLoading ) {
        return <Alert key="loading-data" severity="info">Cargando plantillas...</Alert>
    }

    return (
        <Container>
            <h1>Todas las plantillas</h1>
            <Grid container spacing={1}>
                {templates?.map((template: TemplateDataModel) => {
                    return (
                        <Card sx={{ width: '33%' }}  key={`template_card_${template.id}`}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={template.preview_image}
                                alt={template.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {template.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Autor: {template.author}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                ir a plantilla
                            </CardActions>
                        </Card>
                    )
                })}
            </Grid>

        </Container>
    )
}