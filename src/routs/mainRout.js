import AuthPage from "../pages/AuthPage";
import TasksPage from "../pages/TasksPage";

export const mainRoutes = [
 {
  name: "Tasks",
  path: "/tasks",
  component: TasksPage,
  exact: true,
  isRestricted: false,
  isPrivate: true,
 },

 {
  name: "Registration",
  path: "/registration",
  component: AuthPage,
  exact: true,
  isRestricted: true,
  isPrivate: false,
 },
 {
  name: "Login",
  path: "/login",
  component: AuthPage,
  exact: true,
  isRestricted: true,
  isPrivate: false,
 },

 //  {
 //   name: "notFound",
 //   exact: true,
 //   component: lazy(() => import("../Components/notFoundComponent/NotFoundComponent")),
 //   isPrivate: false,
 //   iisRestricted: false,
 //  },
];
