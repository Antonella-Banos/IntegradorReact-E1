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
  width: 420px;
  height: calc(100vh - 4rem);
  padding: 2rem;
  background-color: #7ca1d5;
  overflow-y: scroll;
  overflow-x: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 495px) {
    width: 90%; 
  }

  @media (max-width: 370px) {
    width: 90%;
  }
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
 
  @media (max-width: 490px) {
    margin-left: 1.5rem;
  }

  @media (max-width: 370px) {
    margin-left: 2.3rem;
  }
`;

export const MainTitleStyled = styled.div`
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  & h2 {
    margin-top: 0;
    color: #fff;
    font-family: 'Pathway Gothic One', sans-serif;
    font-weight: 400;

    @media (max-width: 490px) {
      margin-left: 1.5rem;
    }

    @media (max-width: 370px) {
      margin-left: 2.3rem;
    }
  };
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 420px;
  margin: 0 auto;
  padding: 0 0 0.8rem 0;
  flex-wrap: wrap;

  p {
    color: #fff;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1.5rem;

    @media (max-width: 350px) {
      margin-left: 1.3rem;
    }
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  width: 370px;
  border-radius: 1rem;
  padding: 0.8rem;
  background: #7ca1d5;
  border: 2px solid #f7cac9;

  & img {
    height: 75px;
    width: 75px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  @media (max-width: 490px) {
    width: 230px;
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media (max-width: 370px) {
    margin-left: 1.5rem;
  }
`;

export const TextContainerStyled = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 490px) {
    justify-content: center;
    align-items: center;
  }
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
  font-size: 5px;
  letter-spacing: 0.3px;
`;

export const AlbumPriceStyled = styled(AlbumTextStyled)``;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.hr`
  border: 0.3px solid #fff;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 490px) {
    width: 85%;
  }

  @media (max-width: 370px) {
    width: 70%;
    margin-left: 3.8rem;
  }

  @media (max-width: 325px) {
    margin-left: 3.5rem;
  }
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & p {
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;

    @media (max-width: 490px) {
      margin-left: 1.5rem;
    }

    @media (max-width: 370px) {
      margin-left: 2.3rem;
    }
  }

  & span {
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
    margin-top: 1.5rem;

    @media (max-width: 490px) {
      margin-right: 1.5rem;
    }

    @media (max-width: 325px) {
      margin-left: 2.2rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 25px;
 
  @media (max-width: 490px) {
    margin-left: 1.5rem;
  }

  @media (max-width: 370px) {
    margin-left: 2.3rem;
  }
`;