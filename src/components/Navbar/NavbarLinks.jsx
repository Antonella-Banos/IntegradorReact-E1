import { motion } from "framer-motion";
import { LinkContainer, LinkStyled } from "./NavbarLinksStyles";

export const NavbarLinks = ({title}) => {
    return (
        <LinkStyled>
        <motion.div whileTap={{scale: 0.90}}> 
          <a href="/#">
             <LinkContainer> 
                {title}
             </LinkContainer>
          </a>
        </motion.div> 
      </LinkStyled>
    )
}