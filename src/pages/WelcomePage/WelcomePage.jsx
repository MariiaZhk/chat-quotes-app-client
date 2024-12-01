import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WelcomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 280px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    gap: 60px;
    max-width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1280px;
    flex-direction: row;
    gap: 88px;
    justify-content: center;
    align-items: flex-end;
    padding-top: 56px;
  }
`;

const WelcomeLeftContainer = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 600px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const WelcomeRightContainer = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 600px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const WelcomeTitle = styled.h1`
  color: #3faffa;
  margin-bottom: 10px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  color: #333;
`;

const FeatureItem = styled.li`
  margin: 10px 0;
`;

function WelcomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <WelcomePageContainer>
      <WelcomeLeftContainer>
        <WelcomeTitle>Welcome to ChatQuoApp!</WelcomeTitle>

        <button onClick={handleClick}>Try ChatQuoApp</button>
      </WelcomeLeftContainer>
      <WelcomeRightContainer>
        <p>
          Join our community and start chatting right away. ChatApp makes
          communication easy with seamless features, including:
        </p>
        <FeatureList>
          <FeatureItem>
            • Predefined Chats: Jump straight into three exciting preset chats.
          </FeatureItem>
          <FeatureItem>
            • Create New Chats: Start new conversations with friends by entering
            their first and last names (both required!).
          </FeatureItem>
          <FeatureItem>
            • Update and Manage Chats: Edit existing chats or remove them with
            ease.
          </FeatureItem>
          <FeatureItem>
            • Auto Response: Get instant responses from your chat — powered by
            real-time quotes!
          </FeatureItem>
          <FeatureItem>
            • Toast Notifications: Never miss a message with real-time toast
            notifications.
          </FeatureItem>
          <FeatureItem>
            • Search Chats: Find any conversation in an instant.
          </FeatureItem>
        </FeatureList>
      </WelcomeRightContainer>
    </WelcomePageContainer>
  );
}

export default WelcomePage;
