import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { privateRoutes } from "./routes/privateRoutes";
import RequiredAuth from "./routes/authentication/RequiredAuth";
import RequiredAdmin from "./routes/authentication/RequiredAdmin";
import Dashboard from "./pages/dashboard/Dashboard";
import AddService from "./pages/dashboard/AddService";
import AddAdmin from "./pages/dashboard/AddAdmin";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Navbar>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<RequiredAuth></RequiredAuth>}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<RequiredAdmin></RequiredAdmin>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="add-service" element={<AddService/>}/>
            <Route path="add-admin" element={<AddAdmin/>}/>
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
