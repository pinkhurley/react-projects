import {
  About,
  Error,
  Checkout,
  Home,
  SingleProduct,
  Products,
  Cart,
  AuthWrapper,
} from "./pages";
import { Footer, Navbar, Sidebar } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useUserContext } from "./context/user_context";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

const ErrorBoundary = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Error />
      <Footer />
    </>
  );
};

function App() {
  const { myUser } = useUserContext();

  const ProtectedCheckoutPage = ({ children }) => {
    if (!myUser) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: (
            <ProtectedCheckoutPage>
              <Checkout />
            </ProtectedCheckoutPage>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </>
  );
}

export default App;
