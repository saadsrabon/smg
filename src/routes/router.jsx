import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
    {
    path: "/ab",
    element: <h2>Home</h2>,
    errorElement: <div>404 Not Found</div>,
    }
]);

export default router