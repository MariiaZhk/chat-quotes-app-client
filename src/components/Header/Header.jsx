import { selectIsLogged } from "../../store/selectors";
import { useSelector } from "react-redux";
import { StyledUserAuthLink, StyledWrapper } from "./Header.styled";
import logo from "../../assets/Logo.png";
import UserAuth from "./UserAuth";

export const Header = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  return (
    <header>
      <StyledWrapper>
        <StyledUserAuthLink to={isAuthenticated ? "/home" : "/welcome"}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "120px", height: "auto" }}
          />
        </StyledUserAuthLink>
        {!isAuthenticated && <UserAuth />}
      </StyledWrapper>
    </header>
  );
};
