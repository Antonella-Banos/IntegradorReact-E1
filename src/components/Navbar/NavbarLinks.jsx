import { motion } from "framer-motion";
import { LinkContainer, LinkStyled } from "./NavbarLinksStyles";

export const NavbarLinks = ({link}) => {
    return (
        <LinkStyled>
        <motion.div whileTap={{scale: 0.90}}> 
          <a href="/#">
             <LinkContainer> 
                {link}
             </LinkContainer>
          </a>
        </motion.div> 
      </LinkStyled>
    )
}