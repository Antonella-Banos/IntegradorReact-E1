import React from "react";
import { ErrorMessage, Field } from "formik";
import { StyledErrorMessage, TextareaContainer, TextareaLabel } from "./TextareaStyles";


export const Textarea = () => {
    return (
        <Field>

        <TextareaContainer>
           <TextareaLabel></TextareaLabel>
              <Textarea></Textarea>
             
              <ErrorMessage>
                <StyledErrorMessage>

                </StyledErrorMessage> 

              </ErrorMessage>
              
        </TextareaContainer>

        </Field>
    );
};

export default Textarea