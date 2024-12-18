const API_URL = "http://localhost:7215/api";

export const API = async (endpoint, method = "GET", body = null) => {
  if (typeof endpoint !== "string") {
    throw new Error("El endpoint debe ser una cadena.");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error desconocido en la API");
  }

  return await response.json();
};
