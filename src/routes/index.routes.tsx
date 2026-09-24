import { createBrowserRouter } from "react-router";
import { Home } from "@/features/home/home";
import { Profile } from "@/features/profile/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
