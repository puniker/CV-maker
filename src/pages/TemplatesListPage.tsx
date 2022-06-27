import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { Alert, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import { TemplateDataModel } from "../models/TemplateDataModel"
import { getAllTemplates } from "../services/firestoreTemplatesService"

export default () => {

    const [templates, setTemplates] = useState<TemplateDataModel[]>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    let history = useHistory();

    useEffect( () => {
        getAllTemplates().then((response: TemplateDataModel[]) => {
            setTemplates(response)
            setIsLoading(false)
        })
    }, [])

    const navigateToTemplateDetail = (id: string) => {
        history.push('/plantilla/' + id)
    }

    if ( isLoading ) {
        return <Alert key="loading-data" severity="info">Cargando plantillas...</Alert>
    }

    return (
        <Container>
            <Typography component="h1" variant="h4" marginY={2} >Todas las plantillas</Typography>
            <Grid container spacing={1} gap={3} >
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
                            <CardActions >
                                <Button size="small" onClick={() => navigateToTemplateDetail(template.id)}>Ir a la plantilla</Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </Grid>

        </Container>
    )
}