import React from "react";
import { FormButton } from "./FormButtonStyles";

export const FormButton = ({
    children,
    radius = '25',
    disabled = false,
    onClick = (e) => e.preventDefault(),
}) => {
   return (
    <FormButton
    whileTap={{scale: 0.90}}
    radius={radius}
    disabled={disabled}
    onClick={onClick}
    >
    {children}
    </FormButton>
   )
}

export default FormButton