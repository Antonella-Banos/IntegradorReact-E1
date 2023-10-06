import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const InputLabel = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Input = styled.input`
  width: 95%;
  height: 35px;
  border-radius: 0.8rem;
  border: ${({ isError }) => (isError ? '2.5px solid linear-gradient(100deg, #92a8d1, #f7cac9)' : 'none')};
  outline: none;
  background: #fff;
  color: #444;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.3px;
  padding-left: 10px;
  align-items: center;
  justify-content: center;

  &:focus {
            border: 2.5px solid #7ca1d5;
        }
`;

export const StyledErrorMessage = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #ef94bd;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 15px;
  letter-spacing: 0.2px;
`;