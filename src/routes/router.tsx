import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CarListingPage from "../pages/public/CarListingPage";
import CarDetailsPage from "../pages/public/CarDetailsPage";
import AboutUsPage from "../pages/public/AboutUsPage";
import ErrorPage from "../components/shared/ErrorPage";
import SignUp from "../pages/public/SignUp";
import SignIn from "../pages/public/SignIn";
import Home from "../pages/public/Home";
import Contact from "../pages/public/Contact";

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
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default router;
