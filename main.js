import './style.css';
import { Header } from './src/components/Header/Header';
import { Main } from './src/components/Main/Main';
import { routes } from './src/utils/routes/routes';
import { navigate } from './src/utils/functions/navigate';

Header();
Main();

const currentRoute = routes.find(route => route.path === window.location.pathname);
if (currentRoute) {
  currentRoute.page();
}

window.addEventListener('popstate', () => {
  const route = routes.find(route => route.path === window.location.pathname);
  if (route) {
    route.page();
  }
});
