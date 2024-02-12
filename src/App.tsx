import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routesConfig } from "./routesConfig";

const router = createBrowserRouter(routesConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
