import React from 'react'
import { ContactForm, ContactCard, ContactFormButton, ContactFormContainer } from './ContactoStyles'
import { Input } from '../../components/UI/Input/InputStyles'
import { Textarea } from '../../components/UI/Textarea/TextareaStyles'
import { Form, Formik } from 'formik'
// import { contactoInitialValues } from '../../formik/initialValues'
// import { contactoValidationSchema } from '../../formik/validationSchema'


function Contacto() {
    return (
        <ContactFormContainer>
            <ContactCard>
                <img src="https://pbs.twimg.com/media/F3FBfaVWsAEP-hW?format=webp&name=small" alt="Seventeen" />

                <Formik>
                <Form>

                <ContactForm>
                   
                   <Input type='text' name='nombre' id='nombre' placeholder='Ingresar nombre'></Input>         
                   <Input type='text' name='apellido' id='apellido' placeholder='Ingresar apellido'></Input>
                   <Input type='email' name='email' id='email' placeholder='Ingresar email'></Input>
                   <Textarea name='asunto' id='asunto' placeholder='Dejar un mensaje'></Textarea> 

                </ContactForm>

                <ContactFormButton type='submit' radius='18'>Enviar</ContactFormButton>  
                </Form>
                </Formik>
  
            </ContactCard>
        </ContactFormContainer>
    )

}

export default Contacto 