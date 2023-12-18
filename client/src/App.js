import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import { useContext } from "react";
import { Context } from "./context/auth-context.js";
import Favorite from "./pages/Favorite.js";
import RootLayout from "./pages/RootLayout.js";
import ErrorPage from "./pages/ErrorPage.js";

function App() {
  const { user } = useContext(Context);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/favorite", element: user ? <Favorite /> : <Login /> },
        { path: "/favorite/:id", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
