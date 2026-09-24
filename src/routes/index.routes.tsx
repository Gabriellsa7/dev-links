import { createBrowserRouter } from "react-router";
import { Home } from "@/features/home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
