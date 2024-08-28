import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/public/Navbar";
import Footer from "./components/ui/public/Footer";

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
