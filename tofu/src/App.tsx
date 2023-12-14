import "./App.css";
import React from "react";
import { Signin } from "./pages/SignIn";
import RootLayout from "./components/MainLayout/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import InformationAboutCarrier from "./pages/InformationAboutCarrier";
import SearchPage from "./pages/SearchPage";
import { HomePage } from "./pages/HomePage";
import AdminPage from "./components/AdminPage/AdminPage";
import BookingPage from "./components/BookingPage/BookingPage";
import { InfoAllCarriers } from "./pages/InfoAllCarriers";
import { useAppDispatch } from "./store/hooks";
import { getCookie } from "./helpers/getCookie";
import { UserData, setUser } from "./store/slices/userSlice";
import { jwtParseToken } from "./helpers/jwtParseToken";

export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const token = getCookie("API_TOKEN");

  if (token) {
    const userData: UserData = jwtParseToken();

    dispatch(setUser(userData));
  }
};

function App() {
  useAuthentication();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "signIn", element: <Signin /> },
        { path: "register", element: <RegisterPage /> },
        { path: "about-carrier", element: <InformationAboutCarrier /> },
        {
          path: "search-page",
          element: <SearchPage />,
        },
        { path: "admin-page", element: <AdminPage /> },
        { path: "booking-page", element: <BookingPage /> },
        { path: "all", element: <InfoAllCarriers /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
