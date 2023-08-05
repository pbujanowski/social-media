import { createElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppPage, ErrorPage, MessagesPage } from "./modules";

const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(AppPage),
    errorElement: createElement(ErrorPage),
    children: [
      {
        path: "messages",
        element: createElement(MessagesPage),
      },
    ],
  },
]);

export { router };
