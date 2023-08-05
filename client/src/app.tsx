import { FC, createElement } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { ErrorPage, HomePage, MessagesPage, SignInPage, SignOutPage, SignUpPage } from "./modules";

const App: FC = () => {
  return (
    <Routes>
      <Route element={createElement(Layout)} errorElement={createElement(ErrorPage)}>
        <Route path="/" element={createElement(HomePage)} />
        <Route path="/auth">
          <Route path="sign-in" element={createElement(SignInPage)} />
          <Route path="sign-out" element={createElement(SignOutPage)} />
          <Route path="sign-up" element={createElement(SignUpPage)} />
        </Route>
        <Route path="/messages" element={createElement(MessagesPage)} />
      </Route>
    </Routes>
  );
};

export { App };
