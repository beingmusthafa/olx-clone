import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/context";

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
