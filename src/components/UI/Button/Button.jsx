import React from 'react'
import { StyledButton } from './ButtonStyles'

export const Button = ({
    children,
    radius = '25',
    disabled = false
}) => {
  return (
    <StyledButton 
       whileTap={{scale: 0.90}}
       radius={radius}
       disabled={disabled} 
    >
       {children}
    </StyledButton>
  )
}

export default Button