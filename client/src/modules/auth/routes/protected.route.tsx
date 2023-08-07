import { FC } from "react";
import { useAuth } from "../hooks";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: FC = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/auth/sign-in" />;
  } else {
    return <Outlet />;
  }
};

export { ProtectedRoute };
