import { createPage } from "../../utils/functions/createPage";
import "./Home.css";

export const Home = () => {
  const div = createPage("home");

  div.innerHTML = `
    <div class="hero">
      <h1>Bienvenido a SportSphere</h1>
      <p>Tu espacio para explorar eventos deportivos y conocer más sobre tus atletas favoritos.</p>
    </div>
    <div class="categories">
      <h2>Categorías de Deportes</h2>
      <div class="category-grid">
        <div class="category-card">
          <img src="https://via.placeholder.com/300x200?text=Fútbol" alt="Fútbol" />
          <h3>Fútbol</h3>
        </div>
        <div class="category-card">
          <img src="https://via.placeholder.com/300x200?text=Baloncesto" alt="Baloncesto" />
          <h3>Baloncesto</h3>
        </div>
        <div class="category-card">
          <img src="https://via.placeholder.com/300x200?text=Tenis" alt="Tenis" />
          <h3>Tenis</h3>
        </div>
        <div class="category-card">
          <img src="https://via.placeholder.com/300x200?text=Natación" alt="Natación" />
          <h3>Natación</h3>
        </div>
      </div>
    </div>
  `;
};
