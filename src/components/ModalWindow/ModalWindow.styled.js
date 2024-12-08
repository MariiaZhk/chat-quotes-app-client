import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 24px 16px;
  background-color: var(--light-blue);
  width: 80%;
  max-width: 400px;
  box-shadow: var(--shadow);

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 40px 32px;
  }
`;

export const ModalButtonClose = styled.button`
  background: transparent;
  position: absolute;
  padding: 0;
  right: 12px;
  top: 24px;
  @media only screen and (min-width: 768px) {
    right: 24px;
    top: 32px;
  }
  @media only screen and (min-width: 1440px) {
    top: 36px;
  }
  transition: color 250ms ease-in-out;
  &:hover,
  &:focus {
    color: var(--accent-orange);
  }
`;
