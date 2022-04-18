import styled from "styled-components";
import { rgba } from "polished";

export const TextPageContainer = styled.div`
  padding: 20px 10%;
  background-color: #689fde;
`;

export const Title = styled.h1`
  /* color: ${({ theme }) => theme.secondaryFontColor}; */
  color: white;
  font-size: 3rem;
  margin-top: 80px;
`;

export const PersonalityText = styled.p`
  /* color: ${({ theme }) => theme.secondaryFontColor}; */
  color: white;
  font-size: 1.4rem;
`;

export const ChatContainer = styled.div`
  width: 100%;
  background-color: #96bce8;
  padding: 5% 10%;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const LeftChatBox = styled.div`
  text-align: left;
  margin: 10px 0;
`;

export const LeftChatTextBox = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 20px;
  width: 35%;
`;

export const RightChatBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const RightChatTextBox = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 20px;
  width: 35%;
`;

export const SendChatConatiner = styled.div`
  margin-top: 50px;
  text-align: right;
`;

export const SendChatInput = styled.input`
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 20px;
  font-size: 1.3rem;
  padding: 15px 20px;
  border-style: none;
  border-radius: 10px;
  background: none;
  width: 80%;
  color: black;
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
  border: solid 1px transparent;
  transition: border 0.3s ease-out;

  &:focus {
    outline: none;
  }

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
`;

export const SendChatButton = styled.button`
  border: none;
  background-color: #689fde;
  color: white;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  width: 15%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;

  &:hover {
    background-color: #689fde;
    transform: scale(1.1);
  }
`;
