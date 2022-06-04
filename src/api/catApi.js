import {api} from "./config";

export async function getAllCategories() {
    const resp = await api.get(`/categories`);
    return resp.data
  }

export async function fetchImages(page,id) {
    const resp = await api.get(`/images/search?limit=8&page=${page}&category_ids=${id}`);
    return resp.data
}

export async function getImageById (id) {
  const resp = await api.get(`/images/${id}`)
  return resp.data
}

