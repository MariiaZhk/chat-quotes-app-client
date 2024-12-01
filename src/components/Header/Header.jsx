import Container from "../Container/Container";
// import UserAuth from "../UserAuth/UserAuth";
// import UserLogo from "../UserLogo/UserLogo";

import { selectIsLogged } from "../../store/selectors";
import { useSelector } from "react-redux";
import {
  LngLogoutWrap,
  StyledBox,
  StyledUserAuthLink,
  StyledWrapper,
} from "./Header.styled";

export const Header = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  return (
    <header>
      <Container>
        <StyledWrapper>
          <StyledUserAuthLink to={isAuthenticated ? "/home" : "/welcome"}>
            {/* <svg width={102} height={48}>
              <use href={`${sprite}#icon-logo-1`} />
            </svg> */}
            LINK
          </StyledUserAuthLink>
          <LngLogoutWrap>
            <StyledBox>
              {/* {isAuthenticated ? <UserLogo /> : <UserAuth />} */}
            </StyledBox>
          </LngLogoutWrap>
        </StyledWrapper>
      </Container>
    </header>
  );
};
