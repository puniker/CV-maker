import { useForm } from "react-hook-form"
import FormElements from '../components/FormElements'

function plantillas ()  {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = ( evt ) => {
        evt.preventDefault
        console.log( evt )
    }

    return (
        <>
            <h1>Todas las plantillas</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <FormElements.Input 
                    type='text'
                    register={register}
                    label="Introduce tu nombre"  
                    name='nombre'
                />
                <FormElements.Input  
                    type='text'
                    register={register}
                    label="apellido"  
                    name="apellido"  
                />
                <button>enviar</button>
            </form>
        </>
    )
}

export default plantillas