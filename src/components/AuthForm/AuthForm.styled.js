import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FormWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: -24px;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 118px;
    min-width: 384px;
  }
`;
export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  label:first-child > input {
    border: 1px solid
      var(
        ${(props) => (props.$errorEmail ? "--error-text" : "--accent-bg-color")}
      );

    color: var(
      ${(props) => (props.$errorEmail ? "--error-text" : "--percentage-text")}
    );
  }
  label:nth-child(2) > input {
    border: 1px solid
      var(
        ${(props) =>
          props.$errorPassword ? "--error-text" : "--accent-bg-color"}
      );

    color: var(
      ${(props) =>
        props.$errorPassword ? "--error-text" : "--percentage-text"}
    );
  }
  label:nth-child(3) > input {
    border: 1px solid
      var(
        ${(props) =>
          props.$errorPassword ? "--error-text" : "--accent-bg-color"}
      );

    color: var(
      ${(props) =>
        props.$errorPassword ? "--error-text" : "---percentage-text"}
    );
  }
`;
export const FormHeading = styled.h2`
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`;
export const FormInput = styled.input`
  margin-top: 8px;
  padding: 11px 10px;
  border-radius: 6px;
  border: 1px solid #407bff;
  outline: none;
  color: var(--percentage-text);

  &::placeholder {
    color: #407bff;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 18px;
  line-height: 24px;
  position: relative;
`;
export const FormBtn = styled.button`
  margin-top: 0px;
  margin-bottom: 16px;
  background-color: #407bff;
  border: 1px solid #407bff;
  color: #ffff;
  font-size: 16px;
  padding: 8px 30px;
  border-radius: 10px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  transition: all 0.4s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    padding: 12px 30px;
  }
`;
export const BtnLink = styled(NavLink)`
  color: #407bff;
  font-size: 16px;
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: #ff9d43;
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
`;
