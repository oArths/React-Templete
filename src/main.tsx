import { Global } from "./global.tsx";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/";
import Home from "./pages/home/";
import Error from "./pages/error/";
import { ThemeContextProvider } from "./theme/provider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <Global />
    <RouterProvider router={router} />
  </ThemeContextProvider>
);
