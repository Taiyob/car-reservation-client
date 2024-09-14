import {
  selectCurrentUser,
  TUser,
} from "../../redux/features/auth/userCredentialSlice";
import { useAppSelector } from "../../redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);

  if (!user || (user as TUser).userRole !== "admin") {
    return <Navigate to="/unauthorize" replace={true} />;
  }

  return <>{children}</>;
};

export default AdminRoute;
