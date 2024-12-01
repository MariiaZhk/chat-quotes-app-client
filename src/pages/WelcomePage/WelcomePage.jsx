import React from "react";
import styled from "styled-components";

const WelcomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3fafa;
  font-family: "Arial", sans-serif;
`;

const WelcomeTextContainer = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 600px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const WelcomeTitle = styled.h1`
  color: #3faffa;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  font-size: 1rem;
  color: #333;
`;

const FeatureItem = styled.li`
  margin: 10px 0;
`;

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <WelcomeTextContainer>
        <WelcomeTitle>Welcome to ChatApp!</WelcomeTitle>
        <p>Your Real-time Chat Companion</p>
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
      </WelcomeTextContainer>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
