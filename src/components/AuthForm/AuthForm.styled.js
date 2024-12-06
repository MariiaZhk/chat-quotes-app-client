import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledSection = styled.section`
  max-width: 450px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  padding: 20px 30px;
  background-color: var(--card-bg-color);

  border-radius: 10px;
`;

export const BtnLink = styled(NavLink)`
  color: var(--secondary-text);
  transition: all 0.4s;

  &:hover,
  &:focus {
    color: var(--accent-text);
  }
`;

export const PassShowBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-shadow: none;
`;

export const ErrorSpan = styled.span`
  position: absolute;
  bottom: -24px;
  color: var(--error-text);
  font-size: 14px;
`;
