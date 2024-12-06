import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../store/Auth/selectors";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogged);
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default PublicRoute;
