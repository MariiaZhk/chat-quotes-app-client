import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledSection = styled.section`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const FormHeading = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
`;
export const FormLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  line-height: 24px;
  color: var(--primary-text);
`;

export const StyledInput = styled.input`
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  outline: none;
  color: ${({ $error }) =>
    $error ? "var(--error-text)" : "var(--secondary-text)"};
  border: 1px solid
    ${({ $error }) => ($error ? "var(--error-text)" : "var(--secondary-text)")};

  &::placeholder {
    color: var(--secondary-text);
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
  padding: 8px 30px;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    padding: 12px 30px;
  }
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
  background-color: transparent;
  border: none;
  position: absolute;
  right: 10px;
  top: 45px;
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
