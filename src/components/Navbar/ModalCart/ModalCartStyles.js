import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 480px;
  height: calc(100vh - 5rem);
  padding: 2.5rem;
  background-color: #7ca1d5;
  
`;

export const CloseButtonContainer = styled.div`
  height: 35px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-items: center;
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 0.8rem;
  background: linear-gradient(100deg, #92a8d1, #f7cac9);
  color: #fff;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  height: 95px;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 420px;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  width: 380px;
  border-radius: 1rem;
  padding: 1rem;
  background: #7ca1d5;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);

  & img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export const TextContainerStyled = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AlbumTitleStyled = styled.h3`
  margin: 0;
  color: #fff;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const AlbumTextStyled = styled.p`
  margin: 0;
  color: #fff;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.3px;
`;

export const AlbumPriceStyled = styled(TextStyled)``;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;