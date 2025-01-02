import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../store/Auth/selectors";

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
