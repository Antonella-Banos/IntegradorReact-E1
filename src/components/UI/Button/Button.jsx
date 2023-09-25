import React from 'react'
import { StyledButton } from './ButtonStyles'

export const Button = ({
    children,
    radius = '25',
    disabled = false,
    onClick = (e) => e.preventDefault(),
}) => {
  return (
    <StyledButton 
       whileTap={{scale: 0.90}}
       radius={radius}
       disabled={disabled} 
       onClick={onClick}
    >
       {children}
    </StyledButton>
  )
}

export default Button