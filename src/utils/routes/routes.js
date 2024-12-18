import { CreateProject } from "../../pages/CreateProjects/CreateProject"; 
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Projects } from "../../pages/Projects/Projects";

export const routes = [
  {
    path: "/",
    text: "Home",
    page: Home
  }, 
  {
    path: "/project",
    text: "Proyectos",
    page: Projects
  }, 
  {
    path: "/login",
    text: "Login",
    page: Login
  }, 
  {
    path: "/create-project",
    text: "Crea tu proyecto",
    page: CreateProject
  }
];
