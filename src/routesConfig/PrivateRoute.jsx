import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../store/Auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default PrivateRoute;
