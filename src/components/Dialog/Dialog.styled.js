import styled from "styled-components";

export const StyledDialog = styled.div`
  position: absolute;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  box-shadow: var(--shadow);
  width: 300px;
  background-color: var(--light-grey);
  z-index: 1000;

  &[hidden] {
    display: none;
  }
`;
export const DialogBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;
