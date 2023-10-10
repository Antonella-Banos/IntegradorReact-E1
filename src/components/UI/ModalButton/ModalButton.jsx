import React from "react";
import { ModalButtonStyled } from "./ModalButtonStyles";

export const ModalButton = ({
    children,
    onClick = (e) => e.preventDefault(),
}) => {
    return (
        <ModalButtonStyled
        whileTap={{scale: 0.90}}
        onClick={onClick}
        >
        {children}
        </ModalButtonStyled>
    )
}

export default ModalButton