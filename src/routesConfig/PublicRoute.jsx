import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../store/Auth/selectors";

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  if (isLogged) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default PublicRoute;
