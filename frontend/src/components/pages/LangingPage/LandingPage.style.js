import styled from "styled-components";

export const LandingPageContainer = styled.div`
  padding: 10% 10%;
  background-color: #689fde;
`;

export const Title = styled.h1`
  /* color: ${({ theme }) => theme.secondaryFontColor}; */
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  text-align: center;
`;

export const InputFileContainer = styled.div`
  padding: 50px;
  background-color: white;
  border-radius: 50px;
  text-align: center;
  margin: 50px 50px 200px 50px;
`;

export const InputButton = styled.button`
  border: none;
  background-color: #689fde;
  color: white;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #689fde;
    transform: scale(1.1);
  }
`;
