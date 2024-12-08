import { selectIsLogged } from "../../store/Auth/selectors";
import { useSelector } from "react-redux";
import { StyledUserAuthLink, StyledWrapper } from "./Header.styled";
import logo from "../../assets/logo.svg";
import UserAuth from "./UserAuth";

export const Header = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  return (
    <header>
      <StyledWrapper>
        <StyledUserAuthLink to={isAuthenticated ? "/home" : "/welcome"}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "120px", height: "auto" }}
          />
        </StyledUserAuthLink>
        {!isAuthenticated && <UserAuth />}
      </StyledWrapper>
    </header>
  );
};
