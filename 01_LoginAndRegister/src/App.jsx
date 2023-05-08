import { useContext, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./authContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./Home.jsx";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />
    },
  ]);


  return (
    <div>
      <RouterProvider router={router}/>

      {}
    </div>
  );
}

export default App;
