import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 400px;
  height: calc(100vh - 4rem);
  padding: 2rem;
  background-color: #7ca1d5;
`;

export const CloseButtonContainer = styled.div`
  height: 35px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-items: center;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 0.3rem;
  background: linear-gradient(100deg, #92a8d1, #f7cac9);
  color: #fff;
  cursor: pointer;
  align-items: center;
`;

export const MainProductContainer = styled.div`
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

  & img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 0.5rem;
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

export const AlbumPriceStyled = styled(AlbumTextStyled)``;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.span`
  border: 0.3px solid #fff;
  width: 100%;
  margin-top: 1.5rem;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & p {
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }

  & span {
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    margin-top: 1.5rem;
  }
`;