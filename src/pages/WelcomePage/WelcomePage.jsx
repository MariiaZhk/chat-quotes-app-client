import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  LeftItem,
  RightItem,
  TryButton,
  WelcomeLeftContainer,
  WelcomeLeftList,
  WelcomePageContainer,
  WelcomeRightContainer,
  WelcomeRightList,
  WelcomeSubtitle,
  WelcomeSubTitle2,
  WelcomeTitle,
} from "./WelcomePage.styled";
import Container from "../../components/Container/Container";

function WelcomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <Container>
      <WelcomePageContainer>
        <WelcomeLeftContainer>
          <WelcomeTitle>CHATQUO</WelcomeTitle>
          <WelcomeSubtitle>Seamless chat, instant replies</WelcomeSubtitle>
          <WelcomeSubTitle2>ChatQuo Benefits</WelcomeSubTitle2>
          <WelcomeLeftList>
            <LeftItem>
              <AiOutlineCheckCircle />
              Smart Replies
            </LeftItem>
            <LeftItem>
              <AiOutlineCheckCircle />
              Instant Engagement
            </LeftItem>
            <LeftItem>
              <AiOutlineCheckCircle />
              Quote-Driven
            </LeftItem>
          </WelcomeLeftList>

          <TryButton onClick={handleClick}>Try CHATQUO</TryButton>
        </WelcomeLeftContainer>
        <WelcomeRightContainer>
          <WelcomeSubTitle2>With CHATQUO:</WelcomeSubTitle2>
          <WelcomeRightList>
            <RightItem>Dive into pre-configured, exciting chats</RightItem>

            <RightItem>
              Manage your chats effortlessly: update, edit, or remove with a few
              clicks
            </RightItem>
            <RightItem>
              Get real-time, automatic replies powered by live quotes
            </RightItem>
            <RightItem>
              Stay connected with push notifications that alert you to new
              messages instantly
            </RightItem>
            <RightItem>
              Locate any chat in seconds with our fast, powerful search feature
            </RightItem>
          </WelcomeRightList>
        </WelcomeRightContainer>
      </WelcomePageContainer>
    </Container>
  );
}

export default WelcomePage;
