import { FC } from "react";
import { Outlet } from "react-router-dom";

const AppPage: FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export { AppPage };
