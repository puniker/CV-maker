import React from 'react'
import CvForm from '../components/CvForm'
import styled from 'styled-components'

const FormWrapper = styled.section`
max-width: 1000px;
margin:  50px auto;
`
function CreaTuCv ( props ) {

    return (
        <>
            <FormWrapper>
                <CvForm />
            </FormWrapper>
        </>
    )
}


export default CreaTuCv