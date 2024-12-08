import { LuUserCircle2 } from "react-icons/lu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLogged,
  selectUserFirstName,
} from "../../store/Auth/selectors";

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
  color: var(--dark-blue);
  font-size: 16px;
  line-height: 1.3;
  &:hover {
    color: var(--accent-orange);
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const UserAuth = () => {
  const isLogged = useSelector(selectIsLogged);
  const userFirstName = useSelector(selectUserFirstName);

  const displayText = isLogged ? `${userFirstName}` : "Sign in";
  const linkProps = isLogged ? {} : { to: "/signin", as: Link };

  return (
    <StyledUserAuthWrapper>
      <StyledLink {...linkProps}>
        <LuUserCircle2 size={28} />
        <StyledSpan>{displayText}</StyledSpan>
      </StyledLink>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
