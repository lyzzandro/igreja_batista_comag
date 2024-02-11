import api from "../api";

function createFunctionRequests(path) {
  async function getAll() {
    const response = await api.get(`/${path}`);
    return response.data;
  }

  async function getById({ id }) {
    const response = await api.get(`/${path}/${id}`);
    return response.data;
  }

  return { getAll, getById };
}

export const requestDevotionals = createFunctionRequests("devotionals");
export const requestArticles = createFunctionRequests("articles");
export const requestMusics = createFunctionRequests("musics");
export const requestBooks = createFunctionRequests("books");
