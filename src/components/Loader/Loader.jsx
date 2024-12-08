import { RotatingLines } from "react-loader-spinner";

import styled from "styled-components";

const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const Loader = ({ visible }) => {
  return (
    <Loading>
      <RotatingLines
        visible={visible}
        strokeColor={"var(--grey)"}
        strokeWidth="5"
        animationDuration="5"
        ariaLabel="rotating-lines-loading"
        height="120"
        width="120"
      />
    </Loading>
  );
};
export default Loader;
