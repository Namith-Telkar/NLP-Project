import React, { useContext, useState } from "react";
import {
  TextPageContainer,
  Title,
  PersonalityText,
  ChatContainer,
  LeftChatBox,
  LeftChatTextBox,
  RightChatBox,
  RightChatTextBox,
} from "./TextPage.style";
import { ThemeContext } from "../../../theme/ThemeContext";
import ThemeToggleButton from "../../custom/ThemeToggleButton";
import TypingIndicator from "./TypingIndicator";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DEFAULT_MESSAGES = [
  {
    date: "2022-1-22",
    name: "Arnav Dewan",
    message:
      "Hello ma'am, this is Arnav from sem 6, me and my team were wondering if we could use GPT-3 for the NLP project?",
  },
  {
    date: "2022-1-22",
    name: "Prof. Pooja NLP Pes",
    message:
      "GPT 3 can be used, no issues...it is quite new ..you must explore",
  },
  {
    date: "2022-1-22",
    name: "Prof. Pooja NLP Pes",
    message: "Do you have any prior knowledge of gpt 3",
  },
  {
    date: "2022-1-22",
    name: "Arnav Dewan",
    message:
      "Not much but I've heard a lot about it, we could use to figure out applications in the real world and make a paper on that, would that be fine?",
  },
  { date: "2022-1-22", name: "Prof. Pooja NLP Pes", message: "Yeah" },
  { date: "2022-1-22", name: "Arnav Dewan", message: "Thank you ma'am 👍" },
];

const DEFAULT_NAMES = ["Prof. Pooja NLP Pes", "Arnav Dewan"];

const DEFUALT_DATES = ["2022-1-22"];

function TextPage() {
  const location = useLocation();

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [loadingReply, setLoadingReply] = useState(false);

  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState(
    location.state?.messages ?? []
  );
  const [names, setNames] = useState(location.state?.names ?? []);
  const [dates, setDates] = useState(location.state?.dates ?? []);
  const [personalityText, setPersonalityText] = useState(
    location.state?.personalityDescription ?? []
  );

  function sendMessage() {
    setAllMessages((prev) => [
      ...prev,
      { date: dates[0], name: names[1], message: newMessage },
    ]);
    setLoadingReply(true);
    let data = {
      names: names,
      messages: allMessages,
      question: newMessage,
      personalityDescription: personalityText,
    };
    let url = "http://localhost:5000/api/chat";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, data, config)
      .then((res) => {
        // then print response status
        console.log(res);

        setAllMessages([...res.data.messages]);
      })
      .finally(() => {
        setLoadingReply(false);
      });

    setNewMessage("");
  }

  function handleMessageInput(event) {
    setNewMessage(event.target.value);
  }

  function getMessageBox(message, idx) {
    if (message.name === names[0]) {
      return (
        <LeftChatBox key={idx}>
          <LeftChatTextBox>{message.message}</LeftChatTextBox>
        </LeftChatBox>
      );
    } else {
      return (
        <RightChatBox key={idx}>
          <RightChatTextBox>{message.message}</RightChatTextBox>
        </RightChatBox>
      );
    }
  }

  return (
    <TextPageContainer>
      <Title>{names[0]}</Title>
      <PersonalityText>{personalityText}</PersonalityText>
      <ChatContainer>
        {allMessages.map((message, idx) => getMessageBox(message, idx))}{" "}
        {loadingReply && (
          <LeftChatBox>
            <TypingIndicator />
          </LeftChatBox>
        )}
      </ChatContainer>
      <input type="text" value={newMessage} onChange={handleMessageInput} />
      <button onClick={sendMessage}>Send</button>
      {/* <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} /> */}
    </TextPageContainer>
  );
}

export default TextPage;
