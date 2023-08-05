import { FC, createElement } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { ErrorPage, HomePage, MessagesPage } from "./modules";

const App: FC = () => {
  return (
    <Routes>
      <Route element={createElement(Layout)} errorElement={createElement(ErrorPage)}>
        <Route path="/" element={createElement(HomePage)} />
        <Route path="/messages" element={createElement(MessagesPage)} />
      </Route>
    </Routes>
  );
};

export { App };
