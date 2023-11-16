import "./App.css";
import React from 'react';
import { Signin } from "./pages/SignIn";
import RootLayout from "./components/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import InformationAboutCarrier from "./pages/InformationAboutCarrier";
import SearchPage from "./pages/SearchPage";
import { HomePage } from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "signIn", element: <Signin /> },
        { path: "register", element: <RegisterPage /> },
        { path: "about-carrier", element: <InformationAboutCarrier /> },
        { path: "search-page", element: <SearchPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
