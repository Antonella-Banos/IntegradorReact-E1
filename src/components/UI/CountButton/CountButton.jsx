import { CountButtonStyled } from "./CountButtonStyles";

const CountButton = ({
    children,
    disabled = false,
    onClick = (e) => e.preventDefault(),
}) => {
   return (
    <CountButtonStyled
     whileTap={{scale: 0.95}}
     disabled={disabled}
     onClick={onClick}
    >
      {children} 
    </CountButtonStyled>
   );
};

export default CountButton