import styled from "styled-components";

export const StyledDialog = styled.div`
  position: absolute;
  padding: 18px;
  border: none;
  border-radius: 8px;
  box-shadow: var(--shadow);
  width: 200px;
  background-color: var(--white);
  z-index: 1000;

  &[hidden] {
    display: none;
  }
`;
export const DialogBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
