import { IconDefinition, faHome, faTasks } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Home from "../Domain/Dashboard/Home";

export type IRoute = {
  path: string;
  name: string;
  exact: boolean;
  component: React.ReactNode;
  icon: IconDefinition;
};

const routes: IRoute[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    exact: true,
    component: Home,
    icon: faHome
  },
  {
    path: "/dashboard/todos",
    name: "Todos",
    exact: false,
    component: Home,
    icon: faTasks
  },
];

export default routes;
