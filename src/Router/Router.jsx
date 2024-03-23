import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/donation",
      element: <div>Donation</div>,
    },
    {
      path: "/statistics",
      element: <div>Statistics</div>,
    },
  
  ]);

  export default router;