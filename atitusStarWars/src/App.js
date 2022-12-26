import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Starships from "./pages/Starships";
import Sobre from "./pages/Sobre";
import './assets/css/estilos.css';
import Especies from "./pages/Especies";
import Films from "./pages/Films";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Questions from "./pages/Questions";
import * as Firebase from './services/FirebaseConnect'


function App() {

  const [login, setLogin] = useState(false)

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/home",
      element: login ? <Menu /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/films",
      element: login ? <Films /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/starships",
      element: login ? <Starships /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/people",
      element: login ? <People /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/planets",
      element: login ? <Planets /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/especies",
      element: login ? <Especies /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/duvidas",
      element: login ? <Questions /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/sobre",
      element: login ? <Sobre /> : <Login verificarLogin={verificarLogin} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
