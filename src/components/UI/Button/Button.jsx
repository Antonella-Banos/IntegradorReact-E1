import React from 'react'
import { StyledButton } from './ButtonStyles'

export const Button = ({
    children,
    radius = '25',
    disabled = false,
    secondary,
    onClick = (e) => e.preventDefault(),
}) => {
  return (
    <StyledButton 
       whileTap={{scale: 0.90}}
       radius={radius}
       disabled={disabled} 
       secondary={secondary}
       onClick={onClick}
    >
       {children}
    </StyledButton>
  )
}

export default Button