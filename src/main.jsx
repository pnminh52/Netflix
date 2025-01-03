import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript, Show } from "@chakra-ui/react";
import App from "./App.jsx";
import { AuthProvider } from "./context/authProvider.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import theme from "../theme.js";
import Movies from "./pages/movies/Movies.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/search/Search.jsx";
import Shows from "./pages/shows/Shows.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Netflix from "./pages/Netflix.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
// import Upcoming from "./pages/Upcoming.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Netflix />,
      },
      {
        path: "/homepage",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/shows",
        element: <Shows />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/:type/:id",
        element: <DetailsPage />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/upcoming",
      //   element: <Upcoming />,
      // }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
