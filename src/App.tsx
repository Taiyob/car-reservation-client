import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/public/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
