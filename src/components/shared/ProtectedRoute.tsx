import { ReactNode } from "react";
import { selectCurrentToken } from "../../redux/features/auth/userCredentialSlice";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
//import { setShowModal } from "../../redux/features/auth/authModalSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectCurrentToken);
  //console.log(token);
  //const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to="/unauthorize" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;

//   useEffect(() => {
//     if (!token) {
//       dispatch(setShowModal(true));
//       navigate("/", { replace: true });
//     }
//   }, [dispatch, navigate, token]);
