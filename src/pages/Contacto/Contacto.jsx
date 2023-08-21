import React from 'react'
import { ContactForm, ContactFormButton, ContactFormContainer } from './ContactoStyles'


function Contacto() {
    return (
        <ContactFormContainer>
            <ContactCard>
                <img src="https://pbs.twimg.com/media/F3FBfaVWsAEP-hW?format=webp&name=small" alt="Seventeen" />

                <ContactForm>
                    <input type='text' name='nombre' id='nombre' placeholder='Ingresá tu nombre'/>
                    <input type='text' name='apellido' id='apellido' placeholder='Ingresá tu apellido'/>
                    <input type='email' name='email' id='email' placeholder='Ingresá tu email'/>
                    <textarea name='asunto' id='asunto' cols='30' rows='10'>Asunto</textarea>
                </ContactForm>

                <ContactFormButton type='submit' radius='18'>Enviar</ContactFormButton>
            </ContactCard>
        </ContactFormContainer>
    )

}

export default Contacto 