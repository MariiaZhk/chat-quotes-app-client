import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged, selectIsRefresh } from "../store/Auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefresh);
  const shouldRedirect = !isLogged && !isRefreshing;
  return shouldRedirect ? <Navigate to="/signin" /> : children;
};

export default PrivateRoute;
