import Container from "../Container/Container";
import { selectIsLogged } from "../../store/selectors";
import { useSelector } from "react-redux";
import {
  LngLogoutWrap,
  StyledBox,
  StyledUserAuthLink,
  StyledWrapper,
} from "./Header.styled";
import logo from "../../assets/Logo2.png"; // Import the logo

export const Header = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  return (
    <header>
      <Container>
        <StyledWrapper>
          <StyledUserAuthLink to={isAuthenticated ? "/home" : "/welcome"}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "180px", height: "auto" }}
            />{" "}
            {/* Adjust size */}
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
