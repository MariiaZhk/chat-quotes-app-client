import styled from "styled-components";

export const WelcomePageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  max-width: 80%;

  @media only screen and (min-width: 768px) {
    gap: 60px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 80px;
    align-items: flex-end;
    padding-top: 50px;
  }
`;

export const WelcomeLeftContainer = styled.div``;
export const WelcomeRightContainer = styled.div`
  border-radius: 10px;
  padding: 23px 16px;
  box-shadow: var(--shadow);
  background: var(--card-bg-color);
  margin-bottom: 20px;
  /* max-width: 300px; */
  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 500px;
    margin-bottom: 0px;
    padding: 29px 24px;
  }
`;
export const WelcomeTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  padding-top: 0px;
  padding-bottom: 16px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    font-size: 36px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;
export const WelcomeSubtitle = styled.h2`
  font-size: 24px;

  padding-bottom: 28px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    font-size: 26px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;
export const WelcomeSubTitle2 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 12px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const WelcomeLeftList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: 24px;
  margin: 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;
export const LeftItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 16px;
  svg {
    font-size: 32px;
  }
  @media only screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const TryButton = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 100%;
  height: 36px;
  font-weight: 500;
  font-size: 16px;
  background-color: var(--btn-bg-color);
  text-align: center;
  color: var(--btn-text-color);
  border: none;

  @media only screen and (min-width: 768px) {
    width: 48%;
    height: 41px;
    font-size: 18px;
  }

  @media only screen and (min-width: 1440px) {
    width: 88%;
  }
`;

export const WelcomeRightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding-left: 18px;
  font-size: 16px;
  margin: 0;

  @media only screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const RightItem = styled.li`
  position: relative;
  list-style: none;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--secondary-text);
  }
`;
