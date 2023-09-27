import React from "react";
import { FormButtonStyled } from "./FormButtonStyles";

export const FormButton = ({
    children,
    radius = '25',
    disabled = false,
    onClick = (e) => e.preventDefault(),
}) => {
   return (
    <FormButtonStyled
    whileTap={{scale: 0.90}}
    radius={radius}
    disabled={disabled}
    onClick={onClick}
    >
    {children}
    </FormButtonStyled>
   )
}

export default FormButton