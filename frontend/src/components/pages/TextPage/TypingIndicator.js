import React from "react";
import {
  TypingBlock,
  TypingContainer,
  TypingDot,
} from "./TypingIndicator.style";

function TypingIndicator() {
  return (
    <TypingContainer>
      <TypingBlock>
        <TypingDot />
        <TypingDot />
        <TypingDot />
      </TypingBlock>
    </TypingContainer>
  );
}

export default TypingIndicator;
