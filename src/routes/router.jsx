import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Service from "@/pages/Service";
import Checkout from "@/pages/Checkout";
import AddService from "@/pages/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "service/:id",
        element: <Service />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },
]);

export default router;
