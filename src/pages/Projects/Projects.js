import { API } from "../../utils/API/API.js";
import { createPage } from "../../utils/functions/createPage";
import "./Projects.css";

export const Projects = async () => {
  const div = createPage("projects");

  div.innerHTML = `
    <h1>Eventos Deportivos</h1>
    <div class="events-grid"></div>
  `;

  const eventsGrid = div.querySelector(".events-grid");

  try {
    const events = await API({ endpoint: "/sports-events", method: "GET" }); // Ajusta a tu API real
    events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.className = "event-card";

      eventCard.innerHTML = `
        <img src="${event.imageUrl || "https://via.placeholder.com/300"}" alt="${event.title}" />
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      `;

      eventsGrid.appendChild(eventCard);
    });
  } catch (error) {
    eventsGrid.innerHTML = `<p>Error cargando eventos: ${error.message}</p>`;
  }

  return div;
};
