import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Home } from "./Pages/Home/Home";
import { PlayerDetails } from "./Pages/PlayerDetails/PlayerDetails";

export const routesConfig = [
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/player/:id",
    element: <PlayerDetails />,
    errorElement: <ErrorPage />,
  },
  { path: "/error", element: <ErrorPage /> },
  { path: "*", element: <ErrorPage /> },
];
