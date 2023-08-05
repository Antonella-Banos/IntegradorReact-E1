import React from 'react'
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from './HeroStyles'
import Button from '../UI/Button/Button'

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1>SEVENTEEN STORE</h1>
            <p>La única tienda en Argentina dedicada exclusivamente a la venta de álbumes de SEVENTEEN, 
               uno de los grupos más talentosos y populares del fenómeno global de origen coreano llamado K-POP.
            </p>
            <Button radius='18'>
              Ver más
            </Button>
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
            <img src="https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/live_event/alwaysyours/main.jpg" alt="Seventeen" />
        </HeroImageContainerStyled>
    </HeroContainerStyled>
  )
}

export default Hero