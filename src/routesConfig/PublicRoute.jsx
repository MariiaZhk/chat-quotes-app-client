import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../store/selectors.js";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogged);
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default PublicRoute;
