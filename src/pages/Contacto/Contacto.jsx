import React, {useState} from 'react'
import { ContactForm, ContactCard, FormButton, ContactFormContainer, InputLabel, Input, StyledErrorMessage, InputContainer, Textarea } from './ContactoStyles'
import { ErrorMessage, Field, Formik } from 'formik'
import { contactoInitialValues } from '../../formik/initialValues'
import { contactoValidationSchema } from '../../formik/validationSchema'
import SuccessfulDataModal from '../../components/SubmitModal/SubmitModal'


const Contacto = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

    return (
        <ContactFormContainer>
            <ContactCard>
                <img src="https://pbs.twimg.com/media/F3FBfaVWsAEP-hW?format=webp&name=small" alt="Seventeen" />

                <Formik 
                initialValues={contactoInitialValues}
                validationSchema={contactoValidationSchema} 
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                    openModal();
                }}
                > 
                {({ errors, touched }) => (
                <ContactForm>

                  <InputContainer>
                    <InputLabel> Nombre </InputLabel>
                    <Field type="text" name="nombre" as={Input} isError={errors.nombre && touched.nombre} />
                    <ErrorMessage name="nombre" component={StyledErrorMessage} />
                  </InputContainer>

                  <InputContainer>
                    <InputLabel> Apellido </InputLabel>
                    <Field type="text" name="apellido" as={Input} isError={errors.apellido && touched.apellido} />
                    <ErrorMessage name="apellido" component={StyledErrorMessage} /> 
                  </InputContainer>
                   
                  <InputContainer>
                    <InputLabel> E-mail </InputLabel>
                    <Field type="email" name="email" as={Input} isError={errors.email && touched.email} />
                    <ErrorMessage name="email" component={StyledErrorMessage} />
                  </InputContainer>

                  <InputContainer>
                    <InputLabel> Asunto </InputLabel>
                    <Field name="asunto" as={Textarea} cols="25" rows="10" />
                    <ErrorMessage name="asunto" component={StyledErrorMessage} />
                  </InputContainer>

                  <FormButton type='submit' radius='18' whileTap={{scale: 0.90}}> Enviar </FormButton> 
                </ContactForm>
                )}
                </Formik>
  
            </ContactCard>

            {isModalOpen && <SuccessfulDataModal closeModal={closeModal} />} 
        </ContactFormContainer>
    )

}

export default Contacto 