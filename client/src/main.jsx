import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Admin,
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  AboutUs,
  Channels,
  Anchors,
  ContactUs,
  ShowName,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user/user-dashboard",
        element: <DashboardLayout />,
      },
      {
        path: "/user/user-profile",
        element: <Profile />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/channels",
        element: <Channels />,
      },
      {
        path: "/anchors",
        element: <Anchors />,
      },
      {
        path: "/show-name",
        element: <ShowName />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "create-user",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
