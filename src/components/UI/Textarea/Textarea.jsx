import React from "react";
import { ErrorMessage, Field } from "formik";
import { StyledErrorMessage, TextareaContainer, TextareaLabel } from "./TextareaStyles";


export const Textarea = ({ children, type, id, placeholder, name }) => {
    return (
        <Field name={name}>

          {
            ({field, form: {errors, touched}}) => (

          <TextareaContainer>
           <TextareaLabel>{children}</TextareaLabel>
              <Textarea
               type={type}
               id={id}
               placeholder={placeholder}
               {...field}
               isError={errors[field.name] && touched[field.name]}
              />
             
              <ErrorMessage name={field.name}>
                {
                  (message) => <StyledErrorMessage>{message}</StyledErrorMessage> 
                }
              </ErrorMessage>
              
          </TextareaContainer>
            )
          }

        

        </Field>
    );
};

export default Textarea