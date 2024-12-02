import { LuUserCircle2 } from "react-icons/lu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectIsLogged,
  selectUserFirstName,
} from "../../store/selectors";

export const StyledUserAuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StyledSpan = styled.span`
  color: var(--secondary-text);
  font-size: 16px;
  line-height: 1.3;
  &:hover {
    color: var(--accent-text);
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const UserAuth = () => {
  const isLogged = useSelector(selectIsLogged);
  const userFirstName = useSelector(selectUserFirstName);

  return (
    <StyledUserAuthWrapper>
      <StyledLink to="/signin">
        <StyledSpan>Sign in</StyledSpan>
        <LuUserCircle2 size={28} />
      </StyledLink>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
