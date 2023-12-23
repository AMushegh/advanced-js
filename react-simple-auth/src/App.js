import { useEffect } from "react";
import AppRoutes from "./routes";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/slices/auth";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const val = window.localStorage.getItem("loggedIn");
    if (val && val === "1") {
      dispatch(loginUser());
    }
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;
