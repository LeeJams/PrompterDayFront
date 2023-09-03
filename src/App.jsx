import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home.jsx";
import Layout from "./components/layouts/Layout.jsx";
import Description from "./views/Description.jsx";
import Splash from "./components/Splash.jsx";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/PrompterDayFront",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "docs/:id",
        element: <Description />,
      },
    ],
  },
]);

function App() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  }, []);

  return (
    <>
      {isSplash && <Splash />}
      {!isSplash && <RouterProvider router={router} />}
    </>
  );
}

export default App;
