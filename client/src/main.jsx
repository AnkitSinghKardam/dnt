import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Admin,
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
  AddChannal,
  AddShow,
  AddAnchor,
  AddDailyNews,
  AddEmployee,
  DisplayDailyNews,
  Permissions,
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
    path: "/admin/",
    element: <Admin />,
    children: [
      {
        path: "create-user",
        element: <Register />,
      },
      {
        path: "news-channel",
        element: <AddChannal />,
      },
      {
        path: "show-name",
        element: <AddShow />,
      },
      {
        path: "anchor-details",
        element: <AddAnchor />,
      },
      {
        path: "add-daily-news",
        element: <AddDailyNews />,
      },
      {
        path: "display-daily-news",
        element: <DisplayDailyNews />,
      },
      {
        path: "employee",
        element: <AddEmployee />,
      },
      {
        path: "permissions",
        element: <Permissions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
