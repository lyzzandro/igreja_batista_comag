const baseUrl = import.meta.env.VITE_API_URL;

export async function getAllMusics() {
  const response = await fetch(`${baseUrl}/musics`);
  return response.json();
}

export async function getMusic({ id }) {
  const response = await fetch(`${baseUrl}/musics/${id}`);
  return response.json();
}
