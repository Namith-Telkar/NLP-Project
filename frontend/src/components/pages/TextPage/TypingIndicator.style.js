import styled, { keyframes } from "styled-components";

export const TypingContainer = styled.div``;

export const TypingBlock = styled.div`
  align-items: center;
  display: flex;
  height: 85px;
`;

export const mercuryTypingAnimation = keyframes`
    0% {
        transform: translateY(0px)
    }
    28% {
        transform: translateY(-15px)
    }
    44% {
        transform: translateY(0px)
    }
`;

export const TypingDot = styled.div`
  background-color: #90949c;
  animation: ${mercuryTypingAnimation} 1.5s infinite ease-in-out;
  border-radius: 10px;
  display: inline-block;
  height: 20px;
  margin-right: 10px;
  width: 20px;
  &:nth-child(1) {
    animation-delay: 200ms;
  }
  &:nth-child(2) {
    animation-delay: 300ms;
  }
  &:nth-child(3) {
    animation-delay: 400ms;
  }
`;
