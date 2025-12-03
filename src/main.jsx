import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
// তোমার সব route এখানে define
import AuthProvider from "./auth/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </AuthProvider>
  </React.StrictMode>
);
