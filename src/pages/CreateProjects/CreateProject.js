import { createPage } from "../../utils/functions/createPage";
import "./CreateProject.css";

export const CreateProject = () => {
  const div = createPage("create-project");

  div.innerHTML = `
    <h1>Crea tu Proyecto</h1>
    <form id="create-project-form">
      <label for="title">Título del proyecto:</label>
      <input type="text" id="title" name="title" placeholder="Título..." required />

      <label for="description">Descripción:</label>
      <textarea id="description" name="description" placeholder="Describe tu proyecto..." required></textarea>

      <label for="image">URL de la Imagen:</label>
      <input type="url" id="image" name="image" placeholder="http://..." />

      <button type="submit">Crear Proyecto</button>
    </form>
  `;

  // Añadimos funcionalidad al formulario
  const form = div.querySelector("#create-project-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const projectData = {
      title: form.title.value,
      description: form.description.value,
      image: form.image.value || "https://via.placeholder.com/300",
    };

    console.log("Proyecto creado:", projectData);
    // Aquí puedes agregar lógica para enviar datos a la API
    form.reset();
  });

  return div;
};
