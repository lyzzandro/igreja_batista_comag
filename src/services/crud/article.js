const baseUrl = import.meta.env.VITE_API_URL;

export async function getAllArticles() {
  const response = await fetch(`${baseUrl}/articles`);
  return response.json();
}

export async function getArticle({ id }) {
  const response = await fetch(`${baseUrl}/articles/${id}`);
  return response.json();
}
