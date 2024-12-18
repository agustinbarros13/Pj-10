import { Button } from "../../components/Button/Button";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { createPage } from "../../utils/functions/createPage";
import { doLogin } from "../../utils/functions/doLogin";
import { doRegister } from "../../utils/functions/doRegister";
import "./Login.css";

let showLogin = true;

export const Login = () => {
  const div = createPage("login");

  // Botón de "Registrate" centrado
  const toggleButton = Button({
    text: "Registrate",
    fnc: () => {
      showLogin = !showLogin;
      form.innerHTML = ""; // Limpia el formulario
      showLogin ? LoginForm(form) : RegisterForm(form);
      toggleButton.textContent = showLogin ? "Registrate" : "Vuelve al login";
      form.removeEventListener("submit", showLogin ? doRegister : doLogin);
      form.addEventListener("submit", showLogin ? doLogin : doRegister);
    },
    className: "button-toggle",
  });

  const form = document.createElement("form");
  form.addEventListener("submit", doLogin);
  LoginForm(form);

  div.append(toggleButton);
  div.append(form);
};
