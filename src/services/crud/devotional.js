const baseUrl = import.meta.env.VITE_API_URL;

export async function getAllDevotionals() {
  const response = await fetch(`${baseUrl}/devotionals`);
  return response.json();
}

export async function getDevotional({ id }) {
  const response = await fetch(`${baseUrl}/devotionals/${id}`);
  return response.json();
}
