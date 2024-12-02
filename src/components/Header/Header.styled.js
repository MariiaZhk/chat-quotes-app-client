import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    padding: 16px 0 0;
    margin-bottom: 40px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 12px 0 0;
    margin-bottom: 22px;
  }
`;

export const StyledUserAuthLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
