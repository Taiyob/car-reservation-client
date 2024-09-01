import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CarListingPage from "../pages/public/CarListingPage";
import CarDetailsPage from "../pages/public/CarDetailsPage";
import AboutUsPage from "../pages/public/AboutUsPage";
import ErrorPage from "../components/shared/ErrorPage";
import Home from "../pages/public/Home";
import Contact from "../pages/public/Contact";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminHome from "../pages/admin/AdminHome";
import CarCreate from "../pages/admin/CarCreate";
import ProtectedRoute from "../components/shared/ProtectedRoute";
import Unauthenticate from "../components/shared/Unauthenticate";
import AllCarsTable from "../pages/admin/AllCarsTable";
import CarUpdate from "../pages/admin/CarUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car-list",
        element: <CarListingPage />,
      },
      {
        path: "/car-details",
        element: <CarDetailsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/unauthorize",
    element: (
      <Unauthenticate
        label="Back to home"
        address="/"
        message="You are unauthorise user, please login!!!"
      />
    ),
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        //path: "/admin-dashboard",
        element: <AdminHome />,
      },
      {
        path: "create-car",
        element: <CarCreate />,
      },
      {
        path: "all-car-list",
        element: <AllCarsTable />,
      },
      {
        path: "update-car/:id",
        element: <CarUpdate />,
      },
    ],
  },
]);

export default router;
