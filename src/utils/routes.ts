import { IconDefinition, faHome, faTasks } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Category from "../Domain/Category";
import Home from "../Domain/Dashboard/Home";
import Todo from "../Domain/TodoComponent";
 
export type IRoute = {
  path: string;
  name: string;
  exact: boolean;
  component?: React.ReactNode;
  icon: IconDefinition;
};

const routes: IRoute[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    exact: true,
    component: Home,
    icon: faHome,
  },
  {
    path: "/dashboard/todos",
    name: "Todos",
    exact: false,
    component: Todo,
    icon: faTasks,
  },
  {
    path: "/dashboard/categories",
    name: "Categories",
    exact: false,
    component: Category,
    icon: faTasks,
  },
];

export default routes;
