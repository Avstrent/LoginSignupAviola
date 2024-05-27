import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";



const router = createBrowserRouter([
  {
    path: "/Signup",
    element: <SignupPage />,
  },
  {
    path: "/Dashboard", 
    element: <Dashboard />,

  },
 
  {
    path: "/", // LoginPage should not be the default route multiple times
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;