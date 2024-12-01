import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 112px;
    padding-right: 112px;
  }
`;
