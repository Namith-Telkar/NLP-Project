import React, { useContext, useState } from "react";
import {
  LandingPageContainer,
  Title,
  InputFileContainer,
  InputButton,
} from "./LandingPage.style";
import { ThemeContext } from "../../../theme/ThemeContext";
import ThemeToggleButton from "../../custom/ThemeToggleButton";

import { useNavigate } from "react-router-dom";
import TypingIndicator from "../TextPage/TypingIndicator";
import axios from "axios";

function LandingPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  function extractChat() {
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    console.log(file);
    let url = "http://localhost:5000/api/parseChat";
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

        navigate("/text", { replace: true, state: { ...res.data } });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <LandingPageContainer>
      <Title>Ymir</Title>
      {loading ? (
        <TypingIndicator />
      ) : (
        <InputFileContainer>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <InputButton onClick={extractChat}>Extract chat</InputButton>
        </InputFileContainer>
      )}
    </LandingPageContainer>
  );
}

export default LandingPage;
