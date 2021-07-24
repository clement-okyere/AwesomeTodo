import React from "react";
import Home from "../Domain/Dashboard/Home";

type IRoute = {
  path: string;
  name: string;
  exact: boolean;
  component: React.ReactNode;
};

const routes: IRoute[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    exact: true,
    component: Home
  },
  {
    path: "/dashboard/todos",
    name: "Todos",
    exact: false,
    component: Home
  },
];

export default routes;
