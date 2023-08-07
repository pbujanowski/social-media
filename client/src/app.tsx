import { FC, createElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import {
  AuthProvider,
  ErrorPage,
  HomePage,
  MessagesPage,
  ProtectedRoute,
  SignInPage,
  SignOutPage,
  SignUpPage,
} from "./modules";

const App: FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={createElement(Layout)} errorElement={createElement(ErrorPage)}>
            <Route path="/" element={createElement(ProtectedRoute)}>
              <Route path="/" element={createElement(HomePage)} />
              <Route path="/messages" element={createElement(MessagesPage)} />
            </Route>

            <Route path="/auth">
              <Route path="sign-in" element={createElement(SignInPage)} />
              <Route path="sign-out" element={createElement(SignOutPage)} />
              <Route path="sign-up" element={createElement(SignUpPage)} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export { App };
