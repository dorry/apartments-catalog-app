import { api } from "../lib/axios";

export default class ApartmentsService {
  async getApartments(page = 1, search = "") {
    const params = new URLSearchParams([
      ["limit", 16],
      ["page", page],
      ["search", search],
    ]);
      const response = await api.get("/apartments", { params });
      return response.data.data;

  }

  async postApartment(data) {
    const fd = new FormData();

    for (const key in data) {
      fd.append(key, data[key]);
    }
    const res = await api.post('/apartments', fd, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data.data;
  }
}
