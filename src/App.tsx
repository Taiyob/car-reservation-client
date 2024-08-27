import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/public/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
