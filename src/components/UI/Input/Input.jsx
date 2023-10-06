import React from "react";
import { ErrorMessage, Field } from "formik";
import { InputContainer, InputLabel, StyledErrorMessage } from "./InputStyles";

export const Input = ({ children, type, id, placeholder, name }) => {
    return (
        <Field name={name}>

          {
            ({field, form: {errors, touched}}) => (
            
         <InputContainer>
           <InputLabel>{children}</InputLabel>
              <Input
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
              
         </InputContainer>
            )
          }

        </Field>
    );
};

export default Input 