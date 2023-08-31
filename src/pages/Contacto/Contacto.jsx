import React from 'react'
import { ContactForm, ContactCard, ContactFormButton, ContactFormContainer } from './ContactoStyles'


function Contacto() {
    return (
        <ContactFormContainer>
            <ContactCard>
                <img src="https://pbs.twimg.com/media/F3FBfaVWsAEP-hW?format=webp&name=small" alt="Seventeen" />

                <ContactForm>
                    <input type='text' name='nombre' id='nombre' placeholder='Ingresa tu nombre'/>
                    <input type='text' name='apellido' id='apellido' placeholder='Ingresa tu apellido'/>
                    <input type='email' name='email' id='email' placeholder='Ingresa tu email'/>
                    <textarea name='asunto' id='asunto' cols='30' rows='5' placeholder='Asunto'></textarea>
                </ContactForm>

                <ContactFormButton type='submit' radius='18'>Enviar</ContactFormButton>
            </ContactCard>
        </ContactFormContainer>
    )

}

export default Contacto 