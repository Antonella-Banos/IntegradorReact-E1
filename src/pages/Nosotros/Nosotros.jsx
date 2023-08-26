import React from 'react'

import { AboutContainer, AboutTextContainer, PaymentMethodCardContainer, PaymentMethodCards, PaymentMethodContainer, PaymentMethodText, SocialMediaContainer, SocialMediaLinksContainer, WhatsappContainer } from "./NosotrosStyles"
import {AiFillCreditCard} from "react-icons/ai"
import {SiMercadopago} from "react-icons/si"
import {BiSolidBank} from "react-icons/bi"
import {BsBoxSeam} from "react-icons/bs"
import {BsHouseCheckFill} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"


function About() {
    return (
        <AboutContainer>
            <img src="https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/live_event/alwaysyours/main.jpg" alt="Seventeen" />

            <AboutTextContainer>
                <h1>SEVENTEEN STORE</h1>
                <p>La única tienda en Argentina dedicada exclusivamente a la venta de álbumes de SEVENTEEN, 
               uno de los grupos más talentosos y populares del fenómeno global de origen coreano llamado K-POP.</p>
            </AboutTextContainer>

           <PaymentMethodContainer>
             <h2>Nuestros métodos de pago</h2>
               <PaymentMethodCardContainer>

                  <PaymentMethodCards icon>
                    <h3>Crédito y débito</h3>
                    <AiFillCreditCard/>
                  </PaymentMethodCards>

                  <PaymentMethodCards icon>
                    <h3>Mercado Pago</h3>
                    <SiMercadopago/>
                  </PaymentMethodCards>

                  <PaymentMethodCards icon>
                    <h3>Transferencia bancaria</h3>
                    <BiSolidBank/>
                  </PaymentMethodCards>

               </PaymentMethodCardContainer>

               <PaymentMethodText>
                <p>Realizamos envíos a todo el país<BsBoxSeam/></p> 
                <p>Nos aseguramos de que llegue a tu casa<BsHouseCheckFill/></p> 
               </PaymentMethodText> 
           </PaymentMethodContainer> 

           <SocialMediaContainer>

              <h2>Nuestras redes</h2>
              <SocialMediaLinksContainer>
                <p>Instagram</p> <AiFillInstagram/>
                <p>Facebook</p>  <BsFacebook/>
              </SocialMediaLinksContainer>

              <h2>Whatsapp</h2>
              <WhatsappContainer>
                <p>011 2605-1717</p> <BsWhatsapp/>
              </WhatsappContainer>

           </SocialMediaContainer>
        </AboutContainer>
        
      
    )
}

export default About 