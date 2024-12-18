import { routes } from "../../utils/routes/routes";
import { navigate } from "../../utils/functions/navigate";
import "./Header.css";

export const Header = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  routes.forEach(route => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = route.text;
    a.href = route.path;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(e, route);
    });
    li.append(a);
    ul.append(li);
  });

  nav.append(ul);
  header.append(nav);
  document.body.append(header);
};
