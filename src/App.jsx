import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PublicRoute from "./routesConfig/PublicRoute";
import PrivateRoute from "./routesConfig/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { useDispatch, useSelector } from "react-redux";

import Loader from "./components/Loader/Loader";
import { selectIsLoading } from "./store/Global/selectors";
import { selectIsLogged, selectIsRefresh } from "./store/Auth/selectors";
import { useEffect } from "react";
import { refreshThunk } from "./store/Auth/operations";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const isRefresh = useSelector(selectIsRefresh);
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <Loader visible={isLoading} />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<Navigate to={isLogged ? "/home" : "/welcome"} />}
          />
          <Route
            path="/welcome"
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Route>
      </Routes>{" "}
      <Loader visible={isLoading} />
    </>
  );
}
export default App;
