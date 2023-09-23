import React from "react";
import { ErrorMessage, Field } from "formik";
import { InputContainer, InputLabel, StyledErrorMessage } from "./InputStyles";

export const Input = () => {
    return (
        <Field>

        <InputContainer>
           <InputLabel></InputLabel>
              <Input></Input>
             
              <ErrorMessage>
                <StyledErrorMessage>

                </StyledErrorMessage>

              </ErrorMessage>
              
        </InputContainer>

        </Field>
    );
};

export default Input 