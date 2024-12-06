import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
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

export const FormInput = styled.input`
  position: relative;
  padding: 12px 10px;
  outline: none;
  color: ${({ $error }) =>
    $error ? "var(--error-text)" : "var(--secondary-text)"};
  border: 1px solid
    ${({ $error }) => ($error ? "var(--error-text)" : "var(--secondary-text)")};

  &::placeholder {
    color: var(--grey);
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  font-size: 16px;
  padding: 8px 30px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    padding: 12px 30px;
  }
`;
