const baseUrl = import.meta.env.VITE_API_URL;

export async function getAllBooks() {
  const response = await fetch(`${baseUrl}/books`);
  return response.json();
}

export async function getBook({ id }) {
  const response = await fetch(`${baseUrl}/books/${id}`);
  return response.json();
}
