import styled from "styled-components";

export const TextPageContainer = styled.div`
  padding: 20px 10%;
  background-color: white;
`;

export const Title = styled.h1`
  /* color: ${({ theme }) => theme.secondaryFontColor}; */
  color: black;
`;

export const PersonalityText = styled.p`
  /* color: ${({ theme }) => theme.secondaryFontColor}; */
  color: black;
`;

export const ChatContainer = styled.div`
  width: 100%;
  background-color: lightblue;
  padding: 5% 10%;
  box-sizing: border-box;
`;

export const LeftChatBox = styled.div`
  text-align: left;
  margin: 10px 0;
`;

export const LeftChatTextBox = styled.div`
  background-color: lightyellow;
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
  background-color: lightyellow;
  padding: 10px 20px;
  border-radius: 20px;
  width: 35%;
`;
