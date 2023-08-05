import { createElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, RootPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(RootPage),
    errorElement: createElement(ErrorPage),
  },
]);

export { router };
