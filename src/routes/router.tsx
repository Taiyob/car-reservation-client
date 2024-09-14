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
import CarBooking from "../pages/public/CarBooking";
import AllBookings from "../pages/admin/AllBookings";
import MyBookings from "../pages/admin/MyBookings";
import AdminRoute from "../components/shared/AdminRoute";
import UserLayout from "../pages/user/UserLayout";
import UpdateBooking from "../pages/admin/UpdateBooking";

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
        path: "/car-booking",
        element: <CarBooking />,
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
    path: "/user-dashboard",
    element: (
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute>
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        //path: "/admin-dashboard",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "create-car",
        element: (
          <AdminRoute>
            <CarCreate />
          </AdminRoute>
        ),
      },
      {
        path: "all-car-list",
        element: (
          <AdminRoute>
            <AllCarsTable />
          </AdminRoute>
        ),
      },
      {
        path: "update-car/:id",
        element: (
          <AdminRoute>
            <CarUpdate />
          </AdminRoute>
        ),
      },
      {
        path: "all-bookings",
        element: (
          <AdminRoute>
            <AllBookings />
          </AdminRoute>
        ),
      },
      {
        path: "update-bookings/:id",
        element: (
          <AdminRoute>
            <UpdateBooking />
          </AdminRoute>
        ),
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
    ],
  },
]);

export default router;
